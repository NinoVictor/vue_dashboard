import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import es from "vuetify/es5/locale/es";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

const opts = {
  icons: {
    iconfont: "mdi" || "mdiSvg" || "fa" || "fa4" || "faSvg",
  },
  lang: {
    locales: { es },
    current: "es",
  },
};

export default new Vuetify(opts);
