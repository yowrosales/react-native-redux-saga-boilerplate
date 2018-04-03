import { StackNavigator } from 'react-navigation'
import Home from '../containers/Home'

const AppNavigator = StackNavigator(
    {
      Home: { screen: Home }
    },
    {
      index: 0,
      initialRouteName: 'Home',
      headerMode: 'none'
    }
)

export default AppNavigator