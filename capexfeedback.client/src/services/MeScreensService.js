import apiService from "./apiService";

export const submitMeScreenFormStatus = async (status) => {
  try {
    const result = await apiService.post('/MeScreenFormStatus', { status });
    return result;
  } catch (error) {
    console.error('Error changing status:', error);
    return null;
  }
};
