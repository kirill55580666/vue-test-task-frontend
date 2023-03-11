import { defineComponent, PropType } from "vue";
import { Clothes } from "@/const/clothes/clothes.types";
import ItemCloth from "@/components/item-cloth/item-cloth.vue";

export default defineComponent({
  name: "SelectedItemBlock",
  emits: ["updateItem"],
  components: {
    ItemCloth,
  },
  props: {
    count: Number,
    onlyOneItem: {
      type: Boolean,
      default: false,
    },
    items: Object as PropType<Clothes>,
  },
  setup(_, context) {
    const clickItemHandler = (id: number) => {
      context.emit("updateItem", id);
    };
    return { clickItemHandler };
  },
});
