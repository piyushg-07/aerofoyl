import { createSlice } from "@reduxjs/toolkit";

// Define the initial state of the user
const initialState = {
  userName: "",
  email: "",
  mobileNo: "",
  userId: "",
  gender: "", 
  city: "",  
  state: "",  
  profileImage: "", 
  loggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action) => {
      // On user sign-in, save all user data
      const { userName, email, mobileNo, userId, gender, city, state: userState, profileImage } = action.payload;

      state.userName = userName;
      state.email = email;
      state.mobileNo = mobileNo;
      state.userId = userId;
      state.gender = gender || "";  
      state.city = city || "";     
      state.state = userState || "";  
      state.profileImage = profileImage || ""; 
      state.loggedIn = true; 
    },
    updateUserInfo: (state, action) => {
      // Update user info
      const { userName, email, mobileNo, gender, city, state: userState, profileImage } = action.payload;

      state.userName = userName !== undefined ? userName : state.userName;
      state.email = email !== undefined ? email : state.email;
      state.mobileNo = mobileNo !== undefined ? mobileNo : state.mobileNo;
      state.gender = gender !== undefined ? gender : state.gender; 
      state.city = city !== undefined ? city : state.city;        
      state.state = userState !== undefined ? userState : state.state; 
      state.profileImage = profileImage !== undefined ? profileImage : state.profileImage; 
    },
    signOut: (state) => {
     
      return initialState; 
    },
  },
});

export const { signIn, updateUserInfo, signOut } = userSlice.actions;

export default userSlice.reducer;
