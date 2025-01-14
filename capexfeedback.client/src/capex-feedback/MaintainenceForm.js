import { submitMaintainenceFormStatus } from '../services/MaintainenceFormService';

export const MeAbstract = true;

export const maintainenceFormSubmit = async (event) => {
  try {
    const action = event.target.textContent;
    const status = action === 'Approve' ? 'Accepted' : 'Rejected';

    const result = await submitMaintainenceFormStatus(status);
    if (result) {
      console.log(`Status successfully updated to: ${status}`);
    } else {
      console.error('Failed to update status.');
    }
  } catch (error) {
    console.error('Error in submit action:', error);
  }
};
