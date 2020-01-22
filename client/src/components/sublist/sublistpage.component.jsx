import React from 'react';
import {QueryRenderer, graphql} from 'react-relay';
import environment from '../../environment';
import SubList from './sublist.component';

const SubListPageQuery = graphql`
  query sublistpageQuery {
    viewer {
        ...sublist_list
    }
  }
`

class SubListPage extends React.Component {
    render() {
        return (
            <QueryRenderer 
              environment={environment}
              query={SubListPageQuery}
              render={({error, props}) => {
                  console.log(props);
                  if (error) {
                      return <div>{error.message}</div>
                  } else if (props) {
                      return <SubList list={props.viewer} />
                  }
                  return <div>Loading</div>
              }}
            />
        )
    }
}

export default SubListPage;