import user from './data/user.json';
import stats from './data/stat-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { ThemeProvider } from 'styled-components';
import { theme } from '../utils/Theme.styled';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Profile {...user} />

      <Statistics title="Upload stats" stats={stats} />

      <Statistics stats={stats} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </ThemeProvider>
  );
};
