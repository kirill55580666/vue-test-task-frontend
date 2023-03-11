import { computed, defineComponent, ref } from "vue";
import { BottomClothing, OutdoorClothing } from "@/const/clothes/clothes";
import SelectedItemBlock from "@/components/selected-item-block/selected-item-block.vue";
import { Clothes } from "@/const/clothes/clothes.types";
import { compareById } from "@/views/main/utils/compare-by-id";

export default defineComponent({
  name: "MainView",
  components: {
    SelectedItemBlock,
  },
  setup() {
    //левая часть
    const count = 6;
    const leftBottomClothingArray = ref<Clothes>(BottomClothing);
    const leftBottomClothingSortedArray = computed(() => {
      const array = leftBottomClothingArray.value;
      return array.sort((itemPrev, itemNext) =>
        compareById(itemPrev.id, itemNext.id)
      );
    });
    const leftTopClothingArray = ref<Clothes>([]);

    const leftBottomUpdateItemHandler = (id: number) => {
      if (leftTopClothingArray.value.length >= 6) return;
      const index = leftBottomClothingArray.value.findIndex(
        (item) => item.id === id
      );
      if (index === -1) return;
      leftTopClothingArray.value.push(leftBottomClothingArray.value[index]);
      leftBottomClothingArray.value.splice(index, 1);
    };
    const leftTopUpdateItemHandler = (id: number) => {
      const index = leftTopClothingArray.value.findIndex(
        (item) => item.id === id
      );
      if (index === -1) return;
      leftBottomClothingArray.value.push(leftTopClothingArray.value[index]);
      leftTopClothingArray.value.splice(index, 1);
    };

    //правая часть
    const rightBottomClothingArray = ref<Clothes>(OutdoorClothing);
    const rightBottomClothingSortedArray = computed(() => {
      const array = rightBottomClothingArray.value;
      return array.sort((itemPrev, itemNext) =>
        compareById(itemPrev.id, itemNext.id)
      );
    });
    const rightTopClothingArray = ref<Clothes>([]);

    const rightBottomUpdateItemHandler = (id: number) => {
      const index = rightBottomClothingArray.value.findIndex(
        (item) => item.id === id
      );
      if (index === -1) return;
      if (rightTopClothingArray.value.length === 0) {
        rightTopClothingArray.value.push(rightBottomClothingArray.value[index]);
        rightBottomClothingArray.value.splice(index, 1);
      } else {
        const topItem = rightTopClothingArray.value[0];
        const bottomItem = rightBottomClothingArray.value[index];

        rightBottomClothingArray.value.splice(index, 1);
        rightBottomClothingArray.value.push(topItem);
        rightTopClothingArray.value = [bottomItem];
      }
    };
    const rightTopUpdateItemHandler = () => {
      const item = rightTopClothingArray.value[0];
      rightTopClothingArray.value = [];
      rightBottomClothingArray.value.push(item);
    };

    return {
      leftBottomUpdateItemHandler,
      leftTopClothingArray,
      leftTopUpdateItemHandler,
      leftBottomClothingSortedArray,
      count,

      rightBottomClothingSortedArray,
      rightTopClothingArray,
      rightBottomUpdateItemHandler,
      rightTopUpdateItemHandler,
    };
  },
});
