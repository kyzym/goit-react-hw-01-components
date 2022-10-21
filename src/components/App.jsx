import user from "./data/user.json"
import stats from "./data/stat-data.json"
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import { Profile } from "components/Profile/Profile"
import { Statistics } from "components/Statistics/Statistics"
import { FriendList} from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

export const App = () => {
    return <>
<Profile
    {...user}
        />
        <Statistics title="Upload stats" stats={stats} />
        <Statistics stats={stats} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />

</>

};

 