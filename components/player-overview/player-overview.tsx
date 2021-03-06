import {
  Badge,
  Center,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { SmallAddIcon } from '@chakra-ui/icons';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';

import React from 'react';

interface PlayerOverviewProps {
  firstName: string;
  lastName: string;
  countryUrl: string;
  countryCode: string;
  picture: string;
  sex: string;
  shortName: string;
  rank: number;
  age: number;
  height: number;
  weight: number;
  points: number;
  last: boolean[];
}

const mapCoutryCode = (countryCode: string) => {
  if (countryCode.toLowerCase() === 'sui') {
    return 'ch';
  }
  return countryCode;
};

export const PlayerOverview = ({
  firstName,
  lastName,
  countryUrl,
  countryCode = 'fr',
  picture,
  sex,
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
        height={{ md: '20rem' }}
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
            {firstName} {lastName} - {getUnicodeFlagIcon(mapCoutryCode(countryCode))}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size='sm' mb={4}>
            {`${shortName} (${countryCode})`}
          </Text>
          <StatGroup>
            {last.map((stat, idx) => (
              <Stat key={`stat-${idx}`}>
                <StatHelpText>
                  <StatArrow type={stat ? 'increase' : 'decrease'} />
                </StatHelpText>
              </Stat>
            ))}
          </StatGroup>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge px={2} py={1} bg={useColorModeValue('blue.50', 'blue.800')} fontWeight={'400'}>
              {`${rank}th`}
            </Badge>
            <Badge px={2} py={1} bg={useColorModeValue('blue.50', 'blue.800')} fontWeight={'400'}>
              {`${points} points`}
            </Badge>
          </Stack>
          <List spacing={3}>
            {sex && (
              <ListItem>
                <ListIcon as={SmallAddIcon} color='green.500' />
                {sex}
              </ListItem>
            )}
            {age && (
              <ListItem>
                <ListIcon as={SmallAddIcon} color='green.500' />
                {`${age} years old`}
              </ListItem>
            )}
            {height && (
              <ListItem>
                <ListIcon as={SmallAddIcon} color='green.500' />
                {`${height} cm`}
              </ListItem>
            )}
            {weight && (
              <ListItem>
                <ListIcon as={SmallAddIcon} color='green.500' />
                {`${weight} kg`}
              </ListItem>
            )}
          </List>
        </Stack>
      </Stack>
    </Center>
  );
};
