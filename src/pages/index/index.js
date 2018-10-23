import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Card from '../../components/card/card';

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'My Subscriptions'
  };

  state = {
    subscriptions: [{
      icon:'icon_demo',
      name:'VPS',
      description:'banwagong',
      bill:'$6.00',
      cycle:'2 WEEKS'
    },
    {
      icon:'icon_demo',
      name:'VPS',
      description:'banwagong',
      bill:'$6.00',
      cycle:'2 WEEKS'
    }]
  };

  render () {
    return (
      <View className='main'>
        {
          this.state.subscriptions.map(subscription => <Card subscription={subscription} /> )
        }
      </View>
    )
  }
}

