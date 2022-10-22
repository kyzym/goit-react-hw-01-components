import PropTypes from 'prop-types';
import { Box } from 'utils/Box.styled';
import {
  Percentage,
  StatItem,
  StatList,
  StatName,
  Title,
} from './Statistics.stuled';
// import { Box } from 'utils/Box.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Box
      as="section"
      width={'cardM'}
      mx="auto"
      mt={4}
      pt={4}
      backgroundColor="light"
      borderRadius="normal"
      textAlign="center"
      overflow="hidden"
      boxShadow="medium"
    >
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <StatName>{label}</StatName>
            <Percentage>{percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
