import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { MdCheckCircle } from '@chakra-ui/icons';
import getUnicodeFlagIcon from 'country-flag-icons/unicode'


import React from 'react';

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

/**
 * Primary UI component for user interaction
 */
export const PlayerOverview = ({
  firstName,
  lastName,
  countryUrl,
  countryCode = 'fr',
  picture,
  sexe,
  shortName,
  rank,
  age,
  height,
  weight,
  points,
  last,
}: PlayerOverviewProps) => {
  return (
    <Center py={6}>
      <Stack
        borderWidth='1px'
        borderRadius='lg'
        w={{ sm: '100%', md: '540px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}
      >
        <Flex flex={1} bg='blue.200'>
          <Image objectFit='cover' boxSize='100%' src={picture} alt={`${firstName} ${lastName}`} />
        </Flex>
        <Stack
          flex={1}
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          p={1}
          pt={2}
        >
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {firstName} {lastName} - {getUnicodeFlagIcon(countryCode)}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size='sm' mb={4}>
            {`${shortName} (${countryCode})`}
          </Text>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
              {sexe}
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
              {`${age} years old`}
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
              {`${height} cm`}
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
              {`${weight} kg`}
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
              {`${points} points`}
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
              {`${rank}th`}
            </ListItem>
          </List>
        </Stack>
      </Stack>
    </Center>
  );
};
