import Taro, {Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import './card.scss';

class Card extends Component {

  config = {
    navigationBarTitleText: 'Card'
  };

  render() {
    const {icon,name,description,bill,cycle} = this.props.subscription;

    return (
      <View className="card">
        <View className="left">
          <View className={icon}/>
        </View>
        <View className="right">
          <View className="top">
            <View className="name">{name}</View>
            <View className="bill">{bill}</View>
          </View>
        <View className="bottom">
          <View className="description">{description}</View>
          <View className="cycle">{cycle}</View>
        </View>
      </View>
  </View>
    );
  }
}

export default Card;


