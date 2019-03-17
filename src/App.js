import React, { Component } from 'react';
import CapmaignTitle from './components/CapmaignTitle';
import CampaignList from './components/CampaignList';
import History from './components/History';
import CampaignModal from './components/CampaignModal';
import './App.scss';


// {
//   id: 1,
//   title: 'Campaign 1',
//   time: '2:30 PM',
//   history: [

//   ]
// }, {
//   id: 2,
//   title: 'Campaign 2',
//   time: '4:30 PM',
//   history: [

//   ]
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCampaign: {},
      newCampaignModalVisible: false,
      name: '',
      ownerName: '',
      id: '',
      data: []
    }

    this.selectCampaign = this.selectCampaign.bind(this);
    this.openNewCampaignModal = this.openNewCampaignModal.bind(this);
    this.hideNewCampaignModal = this.hideNewCampaignModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveCampaign = this.saveCampaign.bind(this);
    this.editCampaign = this.editCampaign.bind(this);
    this.deleteCampaign = this.deleteCampaign.bind(this);
    this.openEditCampaignModal = this.openEditCampaignModal.bind(this);
  }

  selectCampaign(selectedCampaign) {
    this.setState({ selectedCampaign });
  }

  openNewCampaignModal() {
    this.setState({ selectedCampaign: {}, newCampaignModalVisible: true });
  }

  hideNewCampaignModal() {
    this.setState({ newCampaignModalVisible: false });
  }

  openEditCampaignModal(selectedCampaign) {
    this.setState({
      selectedCampaign,
      name: selectedCampaign.title,
      ownerName: selectedCampaign.ownerName,
      newCampaignModalVisible: true
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  editCampaign(e) {
    e.preventDefault();
    
    const { name, ownerName, selectedCampaign } =  this.state;
    let currentIndex = 0;
    this.state.data.forEach((item, i) => {
      if(item.id === selectedCampaign.id) {
        currentIndex = i;
      }
    })
    let { data } = this.state;
    data[currentIndex].title = name;
    data[currentIndex].ownerName = ownerName;
    data[currentIndex].history.push({
      ownerName,
      event: 'Campaign Renamed'
    });

    this.setState({data, name: '', ownerName: '', selectedCampaign: {}});
    this.hideNewCampaignModal();
  }

  saveCampaign(e) {
    e.preventDefault();
    
    const { name, ownerName } =  this.state;

    const data = this.state.data.concat({
      title: name,
      ownerName,
      time: this.getTime(),
      id: this.state.data.length + 1,
      history: [{
          ownerName,
          event: 'Campaign Created'
        }
      ]
    })

    this.setState({data, name: '', ownerName: ''});
    this.hideNewCampaignModal();
  }

  deleteCampaign(id) {
    let { data } = this.state;
    data = data.filter(item => item.id !== id);

    this.setState({ data, selectedCampaign: {} });
  }

  getTime() {
    const date = new Date();
    let hour = date.getHours();
    const minute = date.getMinutes();
    let time = '';
    if (hour > 11) {
      hour -= 12;
      time += hour + ':' + minute + ' PM';
    } else {
      time += hour + ':' + minute + ' AM';
    }

    return time;
  }
  

  render() {
    const {
      selectedCampaign,
      newCampaignModalVisible,
      name,
      ownerName,
      data
    } = this.state;

    return (
      <div className="app">
        <header className="app__header">
          All Campaigns
        </header>
        <CapmaignTitle openNewCampaignModal={this.openNewCampaignModal}/>
        <div className="border-top">
          <div className="app__campaigns">
            <CampaignList
              data={data}
              selectedCampaign={selectedCampaign}
              selectCampaign={this.selectCampaign}
              editCampaign={this.openEditCampaignModal}
              deleteCampaign={this.deleteCampaign}
            />
          </div>
          <div className="app__history">
            <History campaign={selectedCampaign}/>
          </div>
        </div>
        {newCampaignModalVisible && (
          <CampaignModal
            name={name}
            ownerName={ownerName}
            handleChange={this.handleChange}
            onSubmit={selectedCampaign.id ? this.editCampaign : this.saveCampaign}
            hideNewCampaignModal={this.hideNewCampaignModal}
          />
        )}
      </div>
    );
  }
}

export default App;
