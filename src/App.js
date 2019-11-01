import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import AddBuilding from './components/AddBldng';
import RemoveBuilding from './components/DeleteBldng';
import Credit from './components/Credit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      filterText: '',
      selectedBuilding: 0
    };
  }

  componentWillMount(){
    this.setState({
      ...this.state,
      data: this.props.data
    })
  }
  filterUpdate(value) {
    this.setState({
      filterText: value
    });
  }

  selectedUpdate(id) {
    this.setState({
      selectedBuilding: id
    })
  }

  AddBldngfunction(address1, code1, name1, id1) {
    let building = {
      code: code1,
      name: name1,
      address: address1,
      id: id1
    }
    
      this.setState({
        ...this.state,
        data: this.state.data.concat([building])
      })
    
  }

  render() {

    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
          filterVal={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />

        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b> {/*flexbox*/}
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filter={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
                data={this.props.data}
                selectedBuilding={this.state.selectedBuilding}
              />
              <AddBuilding
                AddBldngfunction={this.AddBldngfunction}
              />
              <RemoveBuilding
                data={this.props.data}
                
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;