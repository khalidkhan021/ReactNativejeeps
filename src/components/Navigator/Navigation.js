import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../login/login';
import Products from '../Products/Products';
import CardListExample from '../../../src/Card/Card'
import Vehicle from '../../../src/Card/Select_vehicle'
import Vehicle_2 from '../../Card/Select_vehicle2';
import Vehicle_3 from '../../Card/new_card';
import SearchProduct from '../../components/Products/SearchProduct'
 

const AppNavigator = createStackNavigator({
    Login: {
      screen: Login,navigationOptions: {
       
        header: null
      }
    },
    Products:{
        screen: Products,navigationOptions: {
           
            header: null
          }
    },
    Card : {
      screen: CardListExample,
      navigationOptions:{
        header:null
      }
    },
    select:{
      screen: Vehicle_2,navigationOptions:{
        header:null
      }
    },
    select_vehicle:{
      screen: Vehicle,navigationOptions:{
        header:null
      }
    },
    select_card:{
      screen: Vehicle_3,navigationOptions:{
        header:null
      }
    },
    SearchProduct:{
      screen: SearchProduct,navigationOptions:{
        header:null
      }
    },
  },
  );

  export default createAppContainer(AppNavigator);