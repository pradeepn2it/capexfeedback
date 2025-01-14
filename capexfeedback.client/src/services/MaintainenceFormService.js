import apiService from "./apiService";

export const fetchIEDetails = async () => {
  try {
    const data = await apiService.get('/IEDetails');
    return data;
  } catch (error) {
    console.error('Error fetching IE Details:', error);
    return null;
  }
};

export const submitMaintainenceFormStatus = async (status) => {
  try {
    const result = await apiService.post('/MaintainenceFormStatus', { status });
    return result;
  } catch (error) {
    console.error('Error submitting Maintainence Form Status:', error);
    return null;
  }
};
