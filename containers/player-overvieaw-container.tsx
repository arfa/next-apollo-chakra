import { useQuery, gql } from '@apollo/client';

import React from 'react';
import { PlayerOverview } from '../components/player-overview/player-overview';

const ATHELETE_LIST = gql`
  query GetAtheleteList {
    headToHead {
      firstname
      lastname
      shortname
      sex
      picture {
        url
      }
      country {
        picture {
          url
        }
        code
      }
      stats {
        rank
        points
        weight
        height
        age
        last
      }
    }
  }
`;

export const PlayerOverviewContainer = () => {
  const { loading, error, data } = useQuery(ATHELETE_LIST);
  const playerList = data?.headToHead || [];

  if (loading) return <p>Loading...</p>;

  if (error) {
    console.error(error);
    return null;
  }

  return (
    playerList.map((player: any, idx: number ) => (
      <PlayerOverview
        key={`${player.firstname}-${player.lastname}`}
        countryCode={player?.country?.code}
        countryUrl={player?.country?.url}
        firstName={player?.firstname}
        lastName={player?.lastname}
        picture={player?.picture?.url}
        sex={player?.sex}
        shortName={player?.shortname}
        height={player?.stats?.height}
        weight={Number.isInteger(player?.stats?.weight) ? player?.stats?.weight/1000 : 0}
        points={player?.stats?.points}
        last={player?.stats?.last}
        age={player?.stats?.age}
        rank={player?.stats?.rank}
      />
    ))
  );
};
