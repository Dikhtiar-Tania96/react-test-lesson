import Authorization from "../Authorization/Authorization";
import Navigation from "../Navigation/Navigation";
import UserInfo from "../UserInfo/UserInfo";

const AppBar = () => {
  return (
    <div className="flex jc-sb">
      <Navigation />
      <UserInfo />
      <Authorization />
    </div>
  );
};

export default AppBar;
