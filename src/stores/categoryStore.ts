import { ref } from 'vue';
import { defineStore } from 'pinia';
import { getCategoryAPI } from '@/api/layout.ts';
import { ClassData } from '@/api/model/layoutModel.ts';

export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref([] as ClassData[]);

  const getCategory = async () => {
    const res = await getCategoryAPI();
    categoryList.value = res.result;
  };
  return { categoryList, getCategory };
});
