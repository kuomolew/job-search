<template>
  <div class="fixed top-0 left-0 w-full h-16 bg-white">
    <div
      class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
    >
      <a :href="url" target="blank" class="flex items-center h-full text-xl">{{
        company
      }}</a>
      <nav class="h-full ml-12">
        <ul class="flex h-full p-0 m-0 list-none">
          <li
            v-for="(menuItem, i) in menuItems"
            :key="i"
            class="h-full ml-9 first:ml-0"
          >
            <a href="" class="flex items-center h-full py-2 5">{{
              menuItem
            }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: "Careers",
      url: "https://careers.google.com",
      menuItems: [
        "Teams",
        "Locations",
        "Life at Corp",
        "How we hire",
        "Students",
        "Jobs",
      ],
    };
  },
};
</script>
