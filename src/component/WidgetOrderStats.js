import React from 'react';
import OrderStat from '../OrderStat.js';
import data from '../data.json';
import '../style.scss';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

const WidgetOrderStats = () => {
  const statistics = data.statistics.map((stat, index) => (
    <OrderStat
      key={index}
      title={stat.title}
      value1={stat.value1}
      value={stat.value}
      icon={<BsFillArrowUpRightCircleFill />}
    />
  ));
  return <div className='widget-order-stats'>{statistics}</div>;
};

export default WidgetOrderStats;
