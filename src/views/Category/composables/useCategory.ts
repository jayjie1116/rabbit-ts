import { onMounted, ref } from 'vue';
import { getCategoryAPI } from '@/api/category.ts';
import { useRoute } from 'vue-router';
import { Category } from '@/api/model/categoryModel.ts';

export function useCategory() {
  const categoryData = ref({} as Category);

  const route = useRoute();
  const getCategory = async (id = route.params.id as string) => {
    const res = await getCategoryAPI(id);
    categoryData.value = res.result;
  };
  onMounted(() => getCategory());

  return {
    categoryData,
    getCategory
  };
}
