import apiService from './apiService';

const InitiateFeedbackService = {
  // POST FEEDBACK DETAILS
  async postFeedbackData(data) {
    try {
      const response = await apiService.post('/initiateFeedback', data);
      console.log("Feedback successfully initiated.");
      return response;
    } catch (error) {
      console.error("Error initiating feedback:", error);
      throw error;
    }
  },

  // GET PR DETAILS
  async getPRDetails(prNumber) {
    try {
      const response = await apiService.get(`/getPrDetails?prnum=${prNumber}`, {
        // headers: {
        //   "customHeader": "CAP-15-MON-2024",
        // },
      });
      return response;
    } catch (error) {
      console.error("Error fetching PR details:", error);
      return null;
    }
  },
};

export default InitiateFeedbackService;
