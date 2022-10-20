import user from "./Profile/user.json"
import { Profile } from "components/Profile/Profile"
console.log({...user});
export const App = () => {
return <Profile
{...user}
/>
};
