import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserInfo } from "../../redux/userSlice"; // Import action for updating user data
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const ProfilePage = () => {
  const user = useSelector((state) => state.userReducer); // Get user data from Redux store
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [userName, setUserName] = useState(user.userName);
  const [email, setEmail] = useState(user.email);
  const [mobileNo, setMobileNo] = useState(user.mobileNo);
  const [gender, setGender] = useState(user.gender || ""); 
  const [city, setCity] = useState(user.city || "");
  const [state, setState] = useState(user.state || "");
  const [profileImage, setProfileImage] = useState(user.profileImage || "");

  const imageInputRef = useRef(); 

  const handleSave = () => {
    dispatch(updateUserInfo({ userName, email, mobileNo, gender, city, state, profileImage })); 
    setEditMode(false);
  };

  const handleImageClick = () => {
    imageInputRef.current.click();
  };

  const handleImageChange = (e) => {
    // Set the selected image
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Profile" />
      <div className="flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg border border-teal-400 flex">
          <div className="flex flex-col items-center mb-6 w-1/3">
            <img
              src={profileImage || "default-profile.png"}
              alt="Profile"
              onClick={handleImageClick} 
              className="w-32 h-32 rounded-full border-4 border-gray-400 mb-4 cursor-pointer" 
            />
            {editMode && (
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange} 
                className="hidden" 
                ref={imageInputRef} 
              />
            )}
          </div>

          <div className="flex-1 flex flex-col gap-4">
            {editMode ? (
              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-lg font-semibold">Name:</label>
                  <input
                    className="w-full border border-gray-300 rounded p-2 mt-1"
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-lg font-semibold">Email:</label>
                  <input
                    className="w-full border border-gray-300 rounded p-2 mt-1"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-lg font-semibold">Mobile No:</label>
                  <input
                    className="w-full border border-gray-300 rounded p-2 mt-1"
                    type="text"
                    value={mobileNo}
                    onChange={(e) => setMobileNo(e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-lg font-semibold">Gender:</label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full border border-gray-300 rounded p-2 mt-1"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-lg font-semibold">City:</label>
                  <input
                    className="w-full border border-gray-300 rounded p-2 mt-1"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-lg font-semibold">State:</label>
                  <input
                    className="w-full border border-gray-300 rounded p-2 mt-1"
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={handleSave}
                    className="w-[120px] h-10 bg-primeColor text-white font-semibold rounded hover:bg-black transition duration-300"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditMode(false)}
                    className="w-[120px] h-10 bg-gray-300 text-gray-600 font-semibold rounded hover:bg-gray-400 transition duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-lg font-semibold">Name:</p>
                  <p className="text-base text-gray-700">{user.userName}</p>
                </div>

                <div>
                  <p className="text-lg font-semibold">Email:</p>
                  <p className="text-base text-gray-700">{user.email}</p>
                </div>

                <div>
                  <p className="text-lg font-semibold">Mobile No:</p>
                  <p className="text-base text-gray-700">{user.mobileNo}</p>
                </div>

                <div>
                  <p className="text-lg font-semibold">Gender:</p>
                  <p className="text-base text-gray-700">{user.gender}</p>
                </div>

                <div>
                  <p className="text-lg font-semibold">City:</p>
                  <p className="text-base text-gray-700">{user.city}</p>
                </div>

                <div>
                  <p className="text-lg font-semibold">State:</p>
                  <p className="text-base text-gray-700">{user.state}</p>
                </div>

                <button
                  onClick={() => setEditMode(true)}
                  className="w-full h-10 bg-primeColor text-white font-semibold rounded mt-4 hover:bg-black transition duration-300"
                >
                  Edit Profile
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
