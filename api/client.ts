import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = process.env.EXPO_PUBLIC_API_URL;

const axiosClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosClient.interceptors.request.use(
  config => {
    return config;
  },
  error => Promise.reject(error),
);

axiosClient.interceptors.request.use(async config => {
  const tokens = await AsyncStorage.getItem('@auth_tokens');
  if (tokens) {
    const {accessToken} = JSON.parse(tokens);
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default axiosClient;
