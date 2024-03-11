import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup() {
  try {
    return (await Promise.all([uploadPhoto(), signUpUser()]));
  } catch (e) {
    return Error();
  }
}
