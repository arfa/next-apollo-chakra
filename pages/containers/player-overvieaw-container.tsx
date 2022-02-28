import { useQuery, gql } from '@apollo/client';

import React from 'react';
import { PlayerOverview } from '../../components/player-overview/player-overview';

interface PlayerOverviewProps {
  firstName: string;
  lastName: string;
  countryUrl: string;
  countryCode: string;
  picture: string;
  sexe: string;
  shortName: string;
  rank: number;
  age: number;
  height: number;
  weight: number;
  points: number;
  last: boolean[];
}

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
  console.log('data: ', data);
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
        firstName={player?.firstName}
        lastName={player?.lastName}
        picture={player?.picture?.url}
        sexe={player?.sexe}
        shortName={player?.shortName}
        height={player?.stats?.height}
        weight={player?.stats?.weight}
        points={player?.stats?.points}
        last={player?.stats?.last}
        age={player?.stats?.age}
        rank={player?.stats?.rank}
      />
    ))
  );
};
