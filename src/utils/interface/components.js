import Vue from "vue";

// Icon components
Vue.component("IconLogo", () => import("@/components/icons/IconLogo"));

/**
 * Assign Global Vue Directives or Other Libraries
 */

import VClickOutside from "@/directives/click-outside";
Vue.use(VClickOutside);
