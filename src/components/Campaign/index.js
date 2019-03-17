import React from 'react';
import './styles.scss';

const Campaign = ({
    data,
    index,
    isActive,
    selectCampaign,
    editCampaign,
    deleteCampaign
  }) => {
  return (
    <div className={isActive ? 'campaign active' : 'campaign'} onClick={() => {selectCampaign(data)}}>
      <div className="campaign__no">
        <span>{index + 1}</span>
      </div>
      <div className="campaign__title">
        <h3>{data.title}</h3>
        <p>Created at {data.time}</p>
      </div>
      <div className="campaign__pause">
        <i className="icon-pause"></i>
        <span>Pause</span>
      </div>
      <div className="campaign__comment">
        <i className="icon-comment"></i>
        <span>Comment</span>
      </div>
      <div className="campaign__rename" onClick={() => {editCampaign(data)}}>
        <i className="icon-border_color"></i>
        <span>Rename</span>
      </div>
      <div className="campaign__delete" onClick={() => {deleteCampaign(data.id)}}>
        <i className="icon-trash-o"></i>
        <span>Delete</span>
      </div>
    </div>
  );
}

export default Campaign;
