<template>
  <div class="tags">
    <el-tag
      v-for="(tag, index) in tags"
      :key="index"
      class="mx-1"
      :closable="tag.name !== 'home'"
      :type="tag.type"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
      @click="changeMenu(tag)"
      @close="tagClose(tag, index)"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const tags = store.state.tabsList;
    const router = useRouter();

    const route = useRoute();
    const changeMenu = (item) => {
      router.push({
        name: item.name,
      });
    };

    const tagClose = (item, index) => {
      let length = tags.length - 1;
      //处理vuex 中的 函数 和 判断
      store.commit("closeTab", item);

      if (item.name !== route.name) {
        return;
      }

      if (index === length) {
        router.push({
          name: tags[index - 1].name,
        });
      } else {
        router.push({
          name: tags[index].name,
        });
      }
    };
    return { tags, changeMenu, tagClose };
  },
};
</script>

<style lang="scss" scoped>
.tags {
  padding: 20px;
  width: 100%;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
    line-height: 24px;
  }
}
</style>
