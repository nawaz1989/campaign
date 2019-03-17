import React from 'react';
import './styles.scss';

const History = ({campaign}) => {
  return (
    <div className="history">
      <div className="history__title">
        <i className="icon-clock-o"></i>
        History
      </div>

      <div className="history__name">
        {campaign.title}
      </div>
      

      <div className="history__list">
        {campaign.history && campaign.history.map(history => (
          <div>
            <div><i></i> {history.event}</div>
            <div>by {history.ownerName}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
