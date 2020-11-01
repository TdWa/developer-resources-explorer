function average(numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;
}

export const selectDevelopers = (state) => {
  return state.developers;
};

export const developersWithThisFavorite = (id) => (state) => {
  return state.developers.filter((dev) => dev.favorites.includes(id));
};

export const selectDeveloperStatistics = (state) => {
  return {
    num: state.developers.length,
    numWithWebsite: state.developers.filter((dev) => !!dev.website).length,
    numWithoutFavorites: state.developers.filter(
      (dev) => dev.favorites.length === 0
    ).length,
    avgNumberOfFavorites: average(
      state.developers.map((dev) => dev.favorites.length)
    ),
  };
};