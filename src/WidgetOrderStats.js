import React from 'react';
import OrderStat from './OrderStat';
import data from './data.json';
import './style.scss';

const WidgetOrderStats = () => {
  const statistics = data.statistics.map((stat, index) => (
    <OrderStat key={index} title={stat.title} value={stat.value} />
  ));
  return <div className='widget-order-stats'>{statistics}</div>;
};

export default WidgetOrderStats;
