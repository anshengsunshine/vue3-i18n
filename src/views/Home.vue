<template>
  <div class="home">
    <a
      v-for="item in lang_menu"
      :key="item.id"
      @click="changeLang(item)"
      :class="{ active: curren_lang === item.name }"
      >{{ item.name }}
    </a>
    <h1>{{ tran_txt.hello }}</h1>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { getCurrentInstance } from "@vue/runtime-core";

export default {
  name: "Home",
  setup() {
    const { t } = useI18n();
    let { ctx } = getCurrentInstance();

    const lang_menu = ref([
      { name: "中文", id: "zh" },
      { name: "英文", id: "en" },
    ]);
    const curren_lang = ref("英文");

    const tran_txt = computed(() => {
      return {
        hello: t("index.hello"),
      };
    });

    // 切换语言
    const changeLang = (item) => {
      curren_lang.value = item.name;
      ctx.$i18n.locale = item.id;
    };

    return {
      t,
      tran_txt,
      curren_lang,
      lang_menu,
      changeLang,
    };
  },
};
</script>

<style lang="less" scoped>
a {
  margin: 5px;
  cursor: pointer;
}
.active {
  color: #00b1ff;
}
</style>
