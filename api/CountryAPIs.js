import { gql } from '@apollo/client';

const GET_COUNTRIES = gql`{
    countries {
      name
      code
    }
  }`;

  
const GET_COUNTRY_BY_CODE = gql`
query Country($code: ID!) {
country(code:$code) {
  name
native
capital
phone
continent {
  name
}
emoji
code,
emojiU,
currency
languages {
  code
  name
}
states{
name
}
}
}`;

export {
    GET_COUNTRIES,
    GET_COUNTRY_BY_CODE
}