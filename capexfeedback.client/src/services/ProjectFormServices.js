import apiService from "./apiService";

export const submitProjectFormStatus = async (status) => {
  try {
    const result = await apiService.post('/ProjectFormStatus', { status });
    return result;
  } catch (error) {
    console.error('Error changing status:', error);
    return null;
  }
};
