import React, { Component } from 'react';
import Button from '../Button';
import './styles.scss';

class CampaignModal extends Component {
  render() {
    const {
      name,
      ownerName,
      handleChange,
      onSubmit,
      hideNewCampaignModal
    } = this.props;
    return (
      <div className="campaign-modal">
        <div className="campaign-modal__overlay" onClick={hideNewCampaignModal}></div>
        <div className="campaign-modal__body">
          <form onSubmit={onSubmit}>
            <div>
              <label>Campaign Name:</label>
              <input name="name" value={name} onChange={handleChange}/>
            </div>
            <div>
              <label>Owner Name:</label>
              <input name="ownerName" value={ownerName} onChange={handleChange}/>
            </div>
            <div className="text-right">
              <Button type="submit">Save</Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CampaignModal;
