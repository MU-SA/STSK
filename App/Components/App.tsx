import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeFeedScreen from '../Components/Screens/HomeFeedScreen';
import PhotoDetails from './Screens/PhotoDetails';

const AppStack = createStackNavigator(
  {
    home: {screen: HomeFeedScreen},
    photo_details:{screen:PhotoDetails}
  },
  {initialRouteName: 'home', headerMode: 'none'},
);

const AppContainer = createAppContainer(AppStack);
export default AppContainer;
