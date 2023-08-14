<template>
    <div class="bg-gray-900 text-gray-50 h-[120vh] p-5">
        <h2 class="text-2xl">
            Server Component
        </h2>
        <!-- <PostList /> -->
        <!-- <CreatePost /> -->
        <!-- <Parent /> -->
        <!-- <TemplateRef /> -->
        <ClickCounter />
        <HoverCounter />
        <!-- <Data /> -->
        <!-- <Demo /> -->
        <!-- <Methods /> -->
        <!-- <VModel /> -->
        <!-- <Computed /> -->
        <!-- <Watch /> -->
        <!-- <ChildA />
        <button @click="increment"
            style="padding: 5px; background-color: green; color: white; border-radius: 5px; border: none;">
            Increment Count
        </button> -->
        <!-- <Person /> -->
    </div>
</template>

<script>
import ChildA from './components/server/ChildA.vue';
import ClickCounter from './components/server/ClickCounter.vue';
import Computed from './components/server/Computed.vue';
import CreatePost from './components/server/CreatePost.vue';
import Data from './components/server/Data.vue';
import Demo from './components/server/Demo.vue';
import HoverCounter from './components/server/HoverCounter.vue';
import Methods from './components/server/Methods.vue';
import Parent from './components/server/Parent.vue';
import Person from './components/server/Person.vue';
import PostList from './components/server/PostList.vue';
import TemplateRef from './components/server/TemplateRef.vue';
import VModel from './components/server/VModel.vue';
import Watch from './components/server/Watch.vue';

import { provide, ref, toRefs, reactive } from 'vue';

export default {
    name: "Server",
    components: { PostList, CreatePost, Parent, TemplateRef, ClickCounter, HoverCounter, Data, Demo, Methods, VModel, Computed, Watch, ChildA, Person },
    data() {
        return {
            shareName: "Server Options",
        }
    },
    setup() {
        provide('shareNameCom', 'Server Composition');

        const count = ref(0);
        const state = reactive({
            fistName: 'John',
            lastName: 'Doe',
        });

        function increment() {
            count.value++;
        }

        provide('count', count);
        provide('state', state);
        provide('increment', increment);

        return {
            count,
            ...toRefs(state),
            increment,
        }
    },
    provide() {
        return {
            shareName: this.shareName,
        }
    },
}
</script>