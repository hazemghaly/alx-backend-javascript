import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  let photo;
  let user;
  try {
    [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    return {
      photo,
      user,
    };
  } catch (e) {
    return {
      photo,
      user,
    };
  }
}
