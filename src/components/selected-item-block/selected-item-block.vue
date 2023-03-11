<template>
  <div
    :class="[{ 'selected-item-block__padding': count }, 'selected-item-block']"
  >
    <div class="selected-item-block__wrapper">
      <ItemCloth
        v-for="item in items"
        :data="item"
        :key="item.id"
        :class="{ 'selected-item-block__single': onlyOneItem }"
        @click="clickItemHandler(item.id)"
      />
    </div>
    <div class="counter" v-if="count">
      selected: {{ items.length }} / {{ count }}
    </div>
  </div>
</template>

<script lang="ts" src="./selected-item-block.ts" />
<style scoped src="./selected-item-block.css" />
