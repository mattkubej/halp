import fetch from 'node-fetch';
import fetchCookie from 'fetch-cookie';
fetchCookie(fetch);

import { gql, request } from 'graphql-request';
import users from './fixtures/users.json';
import questions from './fixtures/questions.json';

const endpoint = 'http://localhost:4000/graphql';

const SignUp = gql`
  mutation SignUp($input: SignUpInput!) {
    signUp(input: $input) {
      ok
    }
  }
`;

const AddQuestion = gql`
  mutation AddQuestion($input: AddQuestionInput!) {
    addQuestion(input: $input) {
      id
    }
  }
`;

async function seed() {
  for (let i = 0; i < users.length; i++) {
    const response = await request(endpoint, SignUp, {
      input: {
        ...users[i],
      },
    });
    console.log(response);
  }

  for (let i = 0; i < questions.length; i++) {
    const response = await request(endpoint, AddQuestion, {
      input: {
        ...questions[i],
      },
    });
    console.log(response);
  }
}

seed().catch(console.error);
