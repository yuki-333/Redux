// index.js
import React, {Component} from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import  reducer  from './src/reducers/index'
import App from './src/components/home'

const store = createStore(reducer)


export default class reduxApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}


// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>HEllO!I'll never forget the excitement i had at that time.</Text>
//         <Text>HEllO!I'll never forget the excitement i had at that time.</Text>
//         <Text>HEllO!I'll never forget the excitement i had at that time.</Text>
//         <Text>HEllO!I'll never forget the excitement i had at that time.</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
