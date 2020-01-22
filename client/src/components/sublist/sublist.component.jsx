import React from 'react';
import MaterialTable from 'material-table';
import {createFragmentContainer, graphql} from 'react-relay';
import createSubMutation from './createSubMutation';

class SubList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'ID', field: 'id', editable: 'never' },
        { title: 'Name', field: 'name', initialEditValue: 'physics' }
      ],
      data: this.props.list.allSubjects.edges.map(({node}) => ({
        id: node.id,
        name: node.name
      }))
    }
  }

  render() {
    return (
      <MaterialTable
        title="Subjects"  // fix this hardcode later
        columns={this.state.columns}
        data={this.state.data}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  const data = this.state.data;
                  const self = this;
                  createSubMutation(newData.name, (resp, err) => {
                    self.setState({ data: [...data, {...resp.createSubject.subject}] }, () => resolve());
                  });
                }
                resolve()
              }, 1000)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  const data = this.state.data;
                  const index = data.indexOf(oldData);
                  data[index] = newData;
                  this.setState({ data }, () => resolve());
                }
                resolve()
              }, 1000)
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  let data = this.state.data;
                  const index = data.indexOf(oldData);
                  data.splice(index, 1);
                  this.setState({ data }, () => resolve());
                }
                resolve()
              }, 1000)
            }),
        }}
      />
    )
  }
}

export default createFragmentContainer(SubList, {
  list: graphql`
  fragment sublist_list on Viewer {
    allSubjects(last: 10, sort: NAME_ASC) @connection(key: "sublist_allSubjects", filters: []) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`});