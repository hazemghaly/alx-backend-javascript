import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const x = [];
  const y = [19, 20, 34];
  for (let i = 0; i < y.length; i += 1) {
    x.push(new ClassRoom(y[i]));
  }
  return x;
}
