<template>
  <div class="fixed top-0 left-0 w-full h-16 bg-white">
    <div
      class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
    >
      <a href="/" class="flex items-center h-full text-xl">{{ company }}</a>
      <h2 class="flex items-center h-full ml-8">
        Developed by {{ author.firstName }} and {{ author.lastName }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: "Careers",
      author: {
        firstName: "me",
        lastName: "myself",
      },
    };
  },
};
</script>
