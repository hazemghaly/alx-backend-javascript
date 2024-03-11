import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), signUpUser()]);
    return [
      { status: 'fulfilled', value: user },
      { status: 'fulfilled', value: photo },
    ];
  } catch (e) {
    return [{ status: 'rejected', value: Error.toString() }];
  }
}
