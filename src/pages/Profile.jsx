const Profile = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl">Profile</h1>
      <p>User profile information and settings.</p>
      <div className="mt-4">
        <div className="p-4 bg-gray-200 rounded-lg">
          <h2 className="text-xl">User Information</h2>
          <p>Details about user information...</p>
        </div>
        <div className="p-4 bg-gray-200 rounded-lg mt-4">
          <h2 className="text-xl">Settings</h2>
          <p>Details about settings...</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;