import React from 'react';


function NotFound({location}) {
  return (
    <div>Resource not found at {location.pathname}</div>
  );
}

export default NotFound;

