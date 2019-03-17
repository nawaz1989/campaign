import React from 'react';
import Campaign from '../Campaign';
import './styles.scss';

const CampaignList = ({
    data,
    selectedCampaign,
    selectCampaign,
    editCampaign,
    deleteCampaign
  }) => {
  return (
    <div className="campaign-list">
      {data.map((campaign, i) => (
        <Campaign
          key={campaign.id}
          data={campaign}
          index={i}
          isActive={campaign.id === selectedCampaign.id}
          selectCampaign={selectCampaign}
          editCampaign={editCampaign}
          deleteCampaign={deleteCampaign}
        />
      ))}
    </div>
  );
}

export default CampaignList;
