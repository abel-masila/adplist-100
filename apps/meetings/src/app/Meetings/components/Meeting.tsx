import React from 'react';
import { useDyteMeeting, useDyteSelector } from '@dytesdk/react-web-core';
import { DyteGrid, DyteButton } from '@dytesdk/react-ui-kit';

export function Meeting() {
  const { meeting } = useDyteMeeting();
  const roomJoined = useDyteSelector((m) => m.self.roomJoined);

  if (!roomJoined) {
    return (
      <div>
        <p>You haven't joined the room yet.</p>
        <DyteButton onClick={() => meeting.joinRoom()}>Join Room</DyteButton>
      </div>
    );
  }

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DyteGrid meeting={meeting} />
    </div>
  );
}

export default Meeting;
