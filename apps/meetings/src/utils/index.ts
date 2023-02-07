import axios from 'axios';

const { NX_DYTE_BACKEND } = process.env;

export const joinExistingRoom = async (meetingId: string, roomName: string) => {
  const resp = await axios({
    url: `${NX_DYTE_BACKEND}/${meetingId}/participants`,
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Basic ${process.env.NX_TOKEN}`,
    },
    data: {
      name: 'Mary Sue',
      picture: 'https://i.imgur.com/test.jpg',
      preset_name: 'masila',
      custom_participant_id: 'masila68',
    },
  });

  const authResponse = resp.data.data;
  const authToken = authResponse.token;
  console.log(authResponse);

  //saving meeting details in session storage
  sessionStorage.setItem('auth', authToken);
  sessionStorage.setItem('meetingID', meetingId);
  sessionStorage.setItem('roomName', roomName);

  //reloading the page
  window.location.reload();
};
