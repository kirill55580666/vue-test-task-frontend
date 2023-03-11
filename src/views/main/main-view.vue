<template>
  <div class="main-view">
    <div class="main-view__left-block">
      <selected-item-block
        class="main-view__block"
        :items="leftTopClothingArray"
        :count="count"
        @update-item="leftTopUpdateItemHandler($event)"
      />
      <selected-item-block
        :items="leftBottomClothingSortedArray"
        @update-item="leftBottomUpdateItemHandler($event)"
      />
    </div>
    <div class="main-view__right-block">
      <selected-item-block
        class="main-view__block"
        :items="rightTopClothingArray"
        only-one-item
        @update-item="rightTopUpdateItemHandler"
      />
      <selected-item-block
        :items="rightBottomClothingSortedArray"
        @update-item="rightBottomUpdateItemHandler($event)"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./main-view.ts" />
<style scoped src="./main-view.css" />
