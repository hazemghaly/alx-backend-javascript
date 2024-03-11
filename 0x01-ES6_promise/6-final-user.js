import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup() {
  try {
    await Promise.all([uploadPhoto(), signUpUser()]);
    return [Promise.value, Promise.status];
  } catch (e) {
    return Error();
  }
}
