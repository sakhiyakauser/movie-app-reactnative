import React from 'react';
import {createStackNavigator} from 'react-navigation'
import MovieList from './screens/MovieList'
import About from './screens/AboutMovie'
const AppNavigator = createStackNavigator({
  "Home": MovieList,
 "Details": About,
},{
  initialRouteName:'Home'
})
export default class App extends React.Component {
  render() {
       return (
        <AppNavigator />
      );
    }
}
