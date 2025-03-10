import { create } from "zustand";
import axios from "axios";
import { getEmail, setEmail, unauthorized } from "../utility/utility";
import Cookies from "js-cookie";


const UserStore = create((set) => ({
  isLogin: () => {
    return !!Cookies.get("token");
  },

  LoginFormData: { email: "" },
  LoginFormOnChange: async (name, value) => {
    set((state) => ({
      LoginFormData: {
        ...state.LoginFormData,
        [name]: value,
      },
    }));
  },

  UserLogoutRequest: async () => {
    set({ isFormSubmit: true });
    let res = await axios.get(`/api/v1/UserLogout`);
    set({ isFormSubmit: false });
    return res.data.status === "success";
  },

  OTPFormData: { otp: "" },
  OTPFormOnChange: async (name, value) => {
    set((state) => ({
      OTPFormData: {
        ...state.OTPFormData,
        [name]: value,
      },
    }));
  },
  UserOTPRequest: async (email) => {
    set({ isFormSubmit: true });
    let res = await axios.get(`/api/v1/UserOTP/${email}`);
    setEmail(email);
    set({ isFormSubmit: false });
    return res.data.status === "success";
  },

  VerifyLoginRequest: async (otp) => {
    set({ isFormSubmit: true });
    let email = getEmail();
    let res = await axios.get(`/api/v1/VerifyLogin/${email}/${otp}`);
    set({ isFormSubmit: false });
    return res.data.status === "success";
  },
  isFormSubmit: false,

  ProfileForm: {
    cus_add: "",
    cus_city: "",
    cus_country: "",
    cus_fax: "",
    cus_name: "",
    cus_phone: "",
    cus_postcode: "",
    cus_state: "",
    ship_add: "",
    ship_city: "",
    ship_country: "",
    ship_name: "",
    ship_phone: "",
    ship_postcode: "",
    ship_state: "",
  },
  ProfileFormChange: async (name, value) => {
    set((state) => ({
      ProfileForm: {
        ...state.ProfileForm,
        [name]: value,
      },
    }));
  },

  ProfileDetails: null,
  ProfileDetailsRequest: async () => {
    try {
      let res = await axios.get(`/api/v1/ReadProfile`);
      if (res.data.data.length > 0) {
        set({ ProfileDetails: res.data.data[0] });
        set({ ProfileForm: res.data.data[0] });
      } else {
        set({ ProfileDetails: [] });
      }
    } catch (error) {
      unauthorized(error.response.status);
    }
  },

  ProfileSaveRequest: async (PostBody) => {
    try {
  set({ ProfileDetails: null});
        let res = await axios.post(`/api/v1/UpdateProfile`, PostBody);
   
       return res.data.status === "success"
   
    } catch (error) {
      unauthorized(error.response.status);
    }
  },
}));

export default UserStore;
