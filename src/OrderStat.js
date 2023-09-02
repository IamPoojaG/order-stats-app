import React from 'react';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { BiCoffeeTogo } from 'react-icons/bi';
const OrderStat = ({ title, value, isAddition, value1, icon }) => {
  console.log(icon);
  return (
    <div className='order-stat'>
      <div className='order-stat-title'>
        {title}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span style={isAddition ? { color: 'green' } : { color: 'red' }}>
          {isAddition ? '+' : '-'}
          {value1}%
        </span>
      </div>
      <div className='order-stat-value'>
        {<BsFillArrowUpRightCircleFill />} &nbsp;&nbsp;{value}
      </div>
    </div>
  );
};

export default OrderStat;
