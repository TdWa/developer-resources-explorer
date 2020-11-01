export const favoritesWithThisDeveloper = (id) => (state) => {
  return state.resources.filter((res) => {
    return state.developers
      .find((dev) => dev.id === id)
      ?.favorites.includes(res.id);
  });
};

export const selectLoggedinUser = (state) => {
  return state.developers.find((dev) => dev.id === state.user.id);
};
