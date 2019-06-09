export default i18nMap => WrappedComponent => {
  return {
    render(createElement) {
      const convertedMap = Object.entries(i18nMap).reduce(
        (accumulator, [KEY, VALUES]) => {
          if (typeof VALUES[1] === "number") {
            accumulator[KEY] = this.$tc(VALUES[0], VALUES[1]);
          } else {
            accumulator[KEY] = this.$t(VALUES[0], VALUES[1]);
          }
          return accumulator;
        },
        {}
      );
      return createElement(WrappedComponent, {
        props: convertedMap
      });
    }
  };
};
