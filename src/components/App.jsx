import user from "./data/user.json"
import stats from "./data/stat-data.json"
import { Profile } from "components/Profile/Profile"
import { Statistics } from "components/Statistics/Statistics"

export const App = () => {
    return <>
<Profile
    {...user}
        />
        <Statistics title="Upload stats" stats={stats} />
        <Statistics stats={stats} />


</>

};

 