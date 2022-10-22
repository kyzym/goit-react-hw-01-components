import PropTypes from 'prop-types';
import { Box } from 'utils/Box.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Box
      as="table"
      width={'cardL'}
      mx="auto"
      mt={4}
      borderRadius="normal"
      overflow="hidden"
      boxShadow="medium"
    >
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </Box>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
