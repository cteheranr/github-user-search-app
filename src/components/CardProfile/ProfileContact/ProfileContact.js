import { ProfileCity } from "./City/ProfileCity";
import { WebPage } from "./WebPage/WebPage";
import { Organization } from "./Organization/Organization";
import { Twitter } from "./Twitter/Twitter";
import "./ProfileContact.css";

function ProfileContact() {
  return (
    <div className="conten-profile-contact">
      <ProfileCity />
      <Twitter />
      <WebPage />
      <Organization />
    </div>
  );
}

export { ProfileContact };
