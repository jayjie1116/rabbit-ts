<script setup lang="ts">
import { getHotGoodsAPI } from '@/api/detail.ts';
import { useRoute } from 'vue-router';
import { computed, onMounted, ref } from 'vue';
import { HotGoodsRequest } from '@/api/model/detailModel.ts';

const props = defineProps<{
  type: number;
}>();

const TYPEMAP = {
  1: '24小时热销榜',
  2: '周热销榜'
};
const title = computed(() => TYPEMAP[props.type]);

const hotList = ref([] as Good[]);

const route = useRoute();
const getHotList = async () => {
  const res = await getHotGoodsAPI({
    id: route.params.id,
    type: props.type
  } as HotGoodsRequest);
  hotList.value = res.result;
};
onMounted(() => getHotList());
</script>

<template>
  <div class="goods-hot">
    <h3>{{ title }}</h3>
    <!-- 商品区块 -->
    <RouterLink to="/" class="goods-item" v-for="good in hotList" :key="good.id">
      <img :src="good.picture" alt="" />
      <p class="name ellipsis">{{ good.name }}</p>
      <p class="desc ellipsis">{{ good.desc }}</p>
      <p class="price">&yen;{{ good.price }}</p>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }
}
</style>
