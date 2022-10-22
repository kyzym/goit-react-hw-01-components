import PropTypes from 'prop-types';
import { Box } from 'utils/Box.styled';
import {
  TableHeadContent,
  TableRow,
  TableRowType,
} from './TransactionHistory.styled';

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
      backgroundColor="light"
    >
      <thead>
        <tr>
          <TableHeadContent>Type</TableHeadContent>
          <TableHeadContent>Amount</TableHeadContent>
          <TableHeadContent>Currency</TableHeadContent>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableRowType>{type}</TableRowType>
            <td>{amount}</td>
            <td>{currency}</td>
          </TableRow>
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
