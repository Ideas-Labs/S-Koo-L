import { commitMutation, graphql} from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';
import environment from '../../environment';

const mutation = graphql`
  mutation createSubMutation($input: CreateSubjectInput!) {
    createSubject(subjectData: $input) {
      subject {
        id
        name
      }
    }
  }
`

export default (name, callback) => {
  const variables = {
    input: {
      name,
    },
  }

  commitMutation(
    environment,
    {
      mutation, variables,
      onCompleted: (response, errors) => {
        callback(response, errors);
      },
      onError: err => console.log(err),
    },
  )
}