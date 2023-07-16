import useSWR from "swr";

const graphqlURL = process.env.NEXT_PUBLIC_API_URL + "/graphql";
const accessToken =
  "18aee16840286d7fee2103e2aef614f8d2de90d0a6cccb4eb6382d51c55567307d096f1574a5640cd3efed903663585d3e655e26f9685b4994f4703a15974a12be2a40477683610f66096254f8a675cc2f634756a862ee5c91126770a1d6387da1c2e3161b434b6c47afb6583642540c7fdc85d364355a512e728518fd781580";
const query = `
  query Songs {
    songs {
      data {
        id
        attributes {
          name
          description
          song {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const fetcher = (query, variables = {}) =>
  fetch(graphqlURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer "18aee16840286d7fee2103e2aef614f8d2de90d0a6cccb4eb6382d51c55567307d096f1574a5640cd3efed903663585d3e655e26f9685b4994f4703a15974a12be2a40477683610f66096254f8a675cc2f634756a862ee5c91126770a1d6387da1c2e3161b434b6c47afb6583642540c7fdc85d364355a512e728518fd781580"`,
    },
    body: JSON.stringify({ query, variables }),
  })
    .then((res) => res.json())
    .then((json) => {
      if (json.errors) {
        throw new Error("Failed to fetch API");
      }
      return json.data;
    });

export function useQuery() {
  const { data, error } = useSWR([query, {}], fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
