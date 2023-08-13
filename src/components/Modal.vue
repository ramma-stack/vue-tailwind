<template>
    <div class="fixed inset-0 bg-gray-900/60 flex justify-center items-center">
        <div>
            <button
                type="button"
                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                @click="$emit('close')"
            >Close</button>
            <h2>Portal Component</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "Modal",
    emits: ['close'],
}
</script>