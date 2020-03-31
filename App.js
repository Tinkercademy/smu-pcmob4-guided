import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import MainRouteComponent from "./screens/Main.js";
import MovieRouteComponent from "./screens/Movies.js";

const AppNavigator = createStackNavigator({
  Search: MainRouteComponent,
  Movie: MovieRouteComponent
});

const Hi = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <Hi />;
  }
}
