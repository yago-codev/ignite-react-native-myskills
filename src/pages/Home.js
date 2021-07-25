import React, {Fragment} from 'react';
import {View, Text} from 'react-native';

export function Home() {
  return (
    <Fragment>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>React Native</Text>
        <Text>Ignite</Text>
      </View>
    </Fragment>
  );
}
