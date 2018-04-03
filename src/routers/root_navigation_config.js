
import Search from "../containers/Search";
import { addNavigationHelpers, StackNavigator } from "react-navigation";

const stackNavigatorConfiguration = {
  initialRouteName: "Search"
};

export const RootNavigationContainer = StackNavigator(
  {
    Search: { screen: Search }
  },
  stackNavigatorConfiguration
);
