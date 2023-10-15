import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []); // Empty dependency array to run this effect once when the component mounts

  // Logout function
  const handleLogout = () => {
    // Clear the user data and navigate to the login page
    setUser(null);
  };

  // Inline CSS styles
  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '20px',
  };

  const navbarStyle = {
    margin: '20px 0',
  };

  const usernameStyle = {
    fontWeight: 'bold',
    marginRight: '10px',
  };

  const logoutButtonStyle = {
    backgroundColor: '#f00',
    color: 'white',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '5px',
  };

  const loginPromptStyle = {
    fontStyle: 'italic',
  };

  const postsContainerStyle = {
    marginTop: '20px',
    border: '1px solid #ccc',
    padding: '10px',
  };

  const postStyle = {
    marginBottom: '20px',
  };

  const postTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
  };

  const postBodyStyle = {
    margin: '10px 0',
  };

  const userIdStyle = {
    color: '#555',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome, {user ? user.username : 'Guest'}</h1>
      <nav style={navbarStyle}>
        {user ? (
          <>
            <span style={usernameStyle}>Username: {user.username}</span>
            <button onClick={handleLogout} style={logoutButtonStyle}>
              Logout
            </button>
            <div style={postsContainerStyle}>
              <h2>Posts from JSONPlaceholder API</h2>
              <ul>
                {posts.map((post) => (
                  <li style={postStyle} key={post.id}>
                    <h3 style={postTitleStyle}>{post.title}</h3>
                    <p style={postBodyStyle}>{post.body}</p>
                    <p style={userIdStyle}>User ID: {post.userId}</p>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <p style={loginPromptStyle}>
            You are not logged in. Please <Link to='/login'>login</Link>
          </p>
        )}
      </nav>
    </div>
  );
};

export default Home;
