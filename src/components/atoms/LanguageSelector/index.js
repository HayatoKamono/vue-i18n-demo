import LanguageSelector from "./LanguageSelector";

const connect = WrappedComponent => {
  return {
    props: {
      languages: {
        type: Array,
        required: true,
        default() {
          return ["ja", "en"];
        }
      }
    },
    render(createElement) {
      return createElement(WrappedComponent, {
        props: {
          languages: this.languages,
          selectedLanguage: this.$i18n.locale
        },
        on: {
          change: selectedLanguage => {
            this.$i18n.locale = selectedLanguage;
          }
        }
      });
    }
  };
};
export default connect(LanguageSelector);
