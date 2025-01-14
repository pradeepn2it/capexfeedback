import apiService from './apiService';

const IEFeedbackService = {
  async updateIEFeedbackDetails(FormApprovalConstant) {
    try {
      const response = await apiService.get(`/updateIEFeedbackDetails?status=${FormApprovalConstant}`);
      console.log('Accepted!');
      return response;
    } catch (error) {
      console.error('Rejected!', error);
      throw error;
    }
  },

  async updateMEScreens(FormApprovalConstant) {
    try {
      const response = await apiService.get(`/updateMEScreens?status=${FormApprovalConstant}`);
      console.log('IEForm Accepted!');
      return response;
    } catch (error) {
      console.error('IEForm not accepted!', error);
      throw error;
    }
  },

  async MaintainenceStatusUpdate(FormApprovalConstant) {
    try {
      const response = await apiService.get(`/MaintainenceStatusUpdate?status=${FormApprovalConstant}`);
      console.log('Maintainence Form Accepted!');
      return response;
    } catch (error) {
      console.error('Maintainence Form not accepted!', error);
      throw error;
    }
  }
};

export default IEFeedbackService;
