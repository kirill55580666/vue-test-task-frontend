import { defineComponent, PropType } from "vue";
import { Cloth } from "@/const/clothes/clothes.types";

export default defineComponent({
  name: "ItemCloth",
  props: {
    data: Object as PropType<Cloth>,
  },
  setup() {
    return {};
  },
});
