<script setup>
const props = defineProps({
  existingContent: { type: Object, default: () => {} },
});

// const posts = ref();
const editor = ref(null);

const onChange = async () => {
  try {
    const updatedData = await this.editor.save();
    console.log("Article data saved: ", updatedData);
    this.$emit("contentChanged", updatedData);
  } catch (error) {
    console.log("Saving failed: ", error);
  }
};

onMounted(async () => {
  const editorOptions = {
    id: "editorjs",
    data: this.existingContent,
    onChange: this.onChange,
  };
  editor.value = this.$editor(editorOptions);
  await editor.value.isReady;

  // $fetch("/api/add", {
  //   method: "POST",
  //   body: {
  //     author: "Nuraprog",
  //     title: "add",
  //     description: "Hello Bitchhhhhhhhhh??!",
  //     topic: "Nuxt",
  //     date: "2213/123",
  //   },
  // });
  // $fetch("/api/delete?col=posts&id=4kluUxu6eTjEiuqTrr0f")
  // posts.value = await $fetch("/api/query?col=posts");
});
</script>

<template>
  <div id="editorjs" />
</template>
