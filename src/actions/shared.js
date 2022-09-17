import { getInitialDta } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveTweets } from "./tweets";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = "tylermcginnis";

export function handelInitialData() {
  return (dispatch) => {
    return getInitialDta().then(({ users, tweets }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
