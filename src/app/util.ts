import { Doctors } from '../data/doctor';
import { Patients } from '../data/patient';
import _ from 'lodash';

function formatChannel (channel, user) {
  console.log('channel', channel)
  let read = 0;
  for (let i = 0; i < channel.users.length; i++) {
    if (channel.users[i].userId != user._id) {
      channel.userShow = channel.users[i].userId;

    } else {
      read = channel.users[i].read
    }
  }
  channel.userShow.read = read;
  return channel;
}

export default  {
  formatChannel: formatChannel
}
