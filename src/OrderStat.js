import React from 'react';
const OrderStat = ({ title, value, value1, icon }) => {
  return (
    <div className='order-stat'>
      <div className='order-stat-title'>
        {title}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {value1}
      </div>
      <div className='order-stat-value'>
        {icon} &nbsp;&nbsp;{value}
      </div>
    </div>
  );
};

export default OrderStat;
