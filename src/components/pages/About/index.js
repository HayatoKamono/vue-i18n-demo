import About from "./About";

const connect = WrappedComponent => {
  return {
    render(createElement) {
      return createElement(WrappedComponent, {
        props: {
          title: this.$t("message.title", { pageName: "アバウト" }),
          apple: this.$tc("message.apple", 1),
          description: this.$t("message.description"),
          listItem: this.$t("message.listItem[1]")
        }
      });
    }
  };
};
export default connect(About);
