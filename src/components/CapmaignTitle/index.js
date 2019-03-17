import React from 'react';
import Button from '../Button';
import './styles.scss';

const CampaignTitle = ({openNewCampaignModal}) => {
  return (
    <div className="campaign-title">
      <span className="margin-r-20">Campaign List</span>
      <Button onClick={openNewCampaignModal}> + Create new </Button>
    </div>
  );
}

export default CampaignTitle;
