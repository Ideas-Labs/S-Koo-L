/**
 * @flow
 * @relayHash 4e56026af57731ff5cbe189f07da81be
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateSubjectInput = {|
  name: string
|};
export type createSubMutationVariables = {|
  input: CreateSubjectInput
|};
export type createSubMutationResponse = {|
  +createSubject: ?{|
    +subject: ?{|
      +id: string,
      +name: string,
    |}
  |}
|};
export type createSubMutation = {|
  variables: createSubMutationVariables,
  response: createSubMutationResponse,
|};
*/


/*
mutation createSubMutation(
  $input: CreateSubjectInput!
) {
  createSubject(subjectData: $input) {
    subject {
      id
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateSubjectInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createSubject",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "subjectData",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateSubject",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "subject",
        "storageKey": null,
        "args": null,
        "concreteType": "Subject",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "createSubMutation",
    "type": "MyMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "createSubMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "createSubMutation",
    "id": null,
    "text": "mutation createSubMutation(\n  $input: CreateSubjectInput!\n) {\n  createSubject(subjectData: $input) {\n    subject {\n      id\n      name\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5e69c9edea725640bb6e16e3fbb89ddf';
module.exports = node;
