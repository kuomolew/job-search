<template>
  <img :src="profileImg" class="w-8 h-8 object-contain rounded-3xl" />
</template>

<script>
import profileImg from "@/assets/images/profileImg.png";

export default {
  name: "ProfileImage",
  data() {
    return {
      profileImg,
    };
  },
};
</script>
