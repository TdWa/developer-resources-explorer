const initialState = [
  {
    id: 1,
    name: "Kelley",
    website: "https://hi-im-kelley.netlify.com",
    favorites: [1, 2],
  },
  {
    id: 2,
    name: "Danny",
    website: null,
    favorites: [1, 3, 6],
  },
  {
    id: 3,
    name: "Tim",
    website: "https://peaceful-heisenberg-001524.netlify.app/",
    favorites: [1],
  },
];

export default function developersSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_FAVORITE": {
      const { developerId, resourceId } = action.payload;

      return state.map((developer) => {
        if (developer.id === developerId) {
          return {
            ...developer,
            favorites: developer.favorites.includes(resourceId)
              ? developer.favorites.filter((id) => id !== resourceId)
              : [...developer.favorites, resourceId],
          };
        } else {
          return developer;
        }
      });
    }
    default: {
      return state;
    }
  }
}
