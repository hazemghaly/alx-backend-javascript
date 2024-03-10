import { createUser, uploadPhoto } from './utils';

export default async function handleProfileSignup() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  } catch (Error) {
    console.Error('Signup system offline');
  }
}
