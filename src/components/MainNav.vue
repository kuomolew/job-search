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
            data-test="main-nav-list-item"
            class="h-full ml-9 first:ml-0"
          >
            <a href="" class="flex items-center h-full py-2 5">{{
              menuItem
            }}</a>
          </li>
        </ul>
      </nav>
      <div class="flex items-center h-full ml-auto">
        <profile-image v-if="isLoggedIn" />
        <action-button v-else @click="isLoggedIn = true" />
      </div>
    </div>
  </div>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "@/components/ProfileImage.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
  },
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
      isLoggedIn: false,
    };
  },
};
</script>
