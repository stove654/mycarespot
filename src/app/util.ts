import { Doctors } from '../data/doctor';
import { Patients } from '../data/patient';
import _ from 'lodash';

function formatChannel (channel, user) {
  let userId;
  let read = 0;
  for (let i = 0; i < channel.users.length; i++) {
    if (channel.users[i].userId != user._id) {
      userId = channel.users[i].userId;
    } else {
      read = channel.users[i].read
    }
  }
  return channel;
}

export default  {
  formatChannel: formatChannel
}
