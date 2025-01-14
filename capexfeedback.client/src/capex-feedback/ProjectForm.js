import { submitProjectFormStatus } from '../services/ProjectFormServices';

export const MeAbstract = true;

export const projectFormSubmit = async (event) => {
  try {
    const action = event.target.textContent;
    const status = action === 'Approve' ? 'Accepted' : 'Rejected';

    const result = await submitProjectFormStatus(status);
    if (result) {
      console.log(`Status successfully updated to: ${status}`);
    } else {
      console.error('Failed to update status.');
    }
  } catch (error) {
    console.error('Error in submit action:', error);
  }
};
