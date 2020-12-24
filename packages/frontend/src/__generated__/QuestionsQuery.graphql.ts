/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type QuestionOrderBy = "ACTIVE" | "NEW" | "VOTES" | "%future added value";
export type GetQuestionsInput = {
    orderBy?: QuestionOrderBy | null;
    page?: number | null;
    pageSize?: number | null;
    tag?: string | null;
};
export type QuestionsQueryVariables = {
    input: GetQuestionsInput;
};
export type QuestionsQueryResponse = {
    readonly questionsPage: {
        readonly " $fragmentRefs": FragmentRefs<"questionSorter_questionsPage" | "QuestionList_questionsPage" | "questionPager_questionsPage">;
    };
};
export type QuestionsQuery = {
    readonly response: QuestionsQueryResponse;
    readonly variables: QuestionsQueryVariables;
};



/*
query QuestionsQuery(
  $input: GetQuestionsInput!
) {
  questionsPage(input: $input) {
    ...questionSorter_questionsPage
    ...QuestionList_questionsPage
    ...questionPager_questionsPage
  }
}

fragment QuestionList_questionsPage on QuestionsPage {
  questions {
    answers
    createdAtRelative
    excerpt
    id
    question
    tags {
      name
      id
    }
    user {
      username
      id
    }
    views
    votes
  }
}

fragment questionPager_questionsPage on QuestionsPage {
  pageCount
}

fragment questionSorter_questionsPage on QuestionsPage {
  questionCount
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "input"
        } as any)
    ], v1 = [
        ({
            "kind": "Variable",
            "name": "input",
            "variableName": "input"
        } as any)
    ], v2 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any);
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "QuestionsQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "QuestionsPage",
                    "kind": "LinkedField",
                    "name": "questionsPage",
                    "plural": false,
                    "selections": [
                        {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "questionSorter_questionsPage"
                        },
                        {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "QuestionList_questionsPage"
                        },
                        {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "questionPager_questionsPage"
                        }
                    ],
                    "storageKey": null
                }
            ],
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "QuestionsQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "QuestionsPage",
                    "kind": "LinkedField",
                    "name": "questionsPage",
                    "plural": false,
                    "selections": [
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "questionCount",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "Question",
                            "kind": "LinkedField",
                            "name": "questions",
                            "plural": true,
                            "selections": [
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "answers",
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "createdAtRelative",
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "excerpt",
                                    "storageKey": null
                                },
                                (v2 /*: any*/),
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "question",
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Tag",
                                    "kind": "LinkedField",
                                    "name": "tags",
                                    "plural": true,
                                    "selections": [
                                        {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "name",
                                            "storageKey": null
                                        },
                                        (v2 /*: any*/)
                                    ],
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "User",
                                    "kind": "LinkedField",
                                    "name": "user",
                                    "plural": false,
                                    "selections": [
                                        {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "username",
                                            "storageKey": null
                                        },
                                        (v2 /*: any*/)
                                    ],
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "views",
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "votes",
                                    "storageKey": null
                                }
                            ],
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "pageCount",
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "8a17789966f36351b224ba287fc0d78e",
            "id": null,
            "metadata": {},
            "name": "QuestionsQuery",
            "operationKind": "query",
            "text": "query QuestionsQuery(\n  $input: GetQuestionsInput!\n) {\n  questionsPage(input: $input) {\n    ...questionSorter_questionsPage\n    ...QuestionList_questionsPage\n    ...questionPager_questionsPage\n  }\n}\n\nfragment QuestionList_questionsPage on QuestionsPage {\n  questions {\n    answers\n    createdAtRelative\n    excerpt\n    id\n    question\n    tags {\n      name\n      id\n    }\n    user {\n      username\n      id\n    }\n    views\n    votes\n  }\n}\n\nfragment questionPager_questionsPage on QuestionsPage {\n  pageCount\n}\n\nfragment questionSorter_questionsPage on QuestionsPage {\n  questionCount\n}\n"
        }
    } as any;
})();
(node as any).hash = '770bd7e4cdc9482417deea6bbc0843d7';
export default node;
