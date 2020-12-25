/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type questionDetails_question = {
    readonly id: string;
    readonly answers: number;
    readonly body: string;
    readonly createdAtRelative: string;
    readonly question: string;
    readonly tags: ReadonlyArray<{
        readonly name: string;
    }>;
    readonly user: {
        readonly username: string;
    };
    readonly views: number;
    readonly votes: number;
    readonly " $refType": "questionDetails_question";
};
export type questionDetails_question$data = questionDetails_question;
export type questionDetails_question$key = {
    readonly " $data"?: questionDetails_question$data;
    readonly " $fragmentRefs": FragmentRefs<"questionDetails_question">;
};



const node: ReaderFragment = ({
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "questionDetails_question",
    "selections": [
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
        },
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
            "name": "body",
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
                }
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
                }
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
    "type": "Question",
    "abstractKey": null
} as any);
(node as any).hash = '6cc4bd29701b9b45a8ed9d157c7ea029';
export default node;
