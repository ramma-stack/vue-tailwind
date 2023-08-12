<template>
    <div class="w-72 m-1 mt-3 text-white p-4 bg-gray-800 rounded">
        <h2>This popup for test action button!</h2>
        <button
            type="button"
            class="py-1 px-2 mt-1.5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            @click="$emit('close', name)"
        >
            Close Create
        </button>
    </div>
</template>

<script>
export default {
    name: "CreatePopup",
    emits: {
        close: (name) => {
            if (name) {
                return true;
            } else {
                return false;
            }
        },
    },
    data() {
        return {
            name: "",
        };
    },
};
</script>
