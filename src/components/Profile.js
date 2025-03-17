import React from 'react';

function Profile() {
  const user = { name: "Brian" };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Welcome, {user.name}!</h2>
      <p>Your last watched movie:</p>
      <div className="mt-2">
        <img src="https://via.placeholder.com/200" alt="Last watched" className="rounded"/>
        <h3 className="mt-2">The Dark Knight</h3>
      </div>
    </div>
  );
}

export default Profile;
