<template>
    <div class="flex flex-col gap-2 w-44 text-white p-3">
        <slot name="header">Default Value</slot>
        <slot>Default Value</slot>
        <slot name="footer">Default Value</slot>
    </div>
</template>

<script>

export default {
    name: "Slots",
    mounted() {
        const $collapseEl = document.querySelector("#navbar-collapse-basic");
        const $scrollSpyEl = document.querySelector('[data-hs-scrollspy="#scrollspy-1"]');

        // console.log($collapseEl);

        $scrollSpyEl.addEventListener("scroll.hs.scrollspy", () => {
            if (window.outerWidth <= 639 && $collapseEl.classList.contains("open")) {
                HSCollapse.hide($collapseEl);
            }
        });
    },
};
</script>
