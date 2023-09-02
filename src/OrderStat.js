import React from 'react';
const OrderStat = ({ title, value }) => {
  return (
    <div className='order-stat'>
      <div className='order-stat-title'>{title}</div>
      <div className='order-stat-value'>{value}</div>
    </div>
  );
};

export default OrderStat;
