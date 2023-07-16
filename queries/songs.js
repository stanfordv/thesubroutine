export const QUERY_SONGS = `
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
}`;
