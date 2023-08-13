<template>
    <header>
        <div class="bg-gray-700 text-gray-50 h-[200vh]">
            <!-- <Basic /> -->
            <!-- <List /> -->
            <!-- <Handling /> -->
            <!-- <Form /> -->
            <!-- <Computed /> -->
            <!-- <Watches /> -->
            <!-- <Greet name="Bilal" heroName="Batman" title="Article Names" :likes="50" :isPublished="true" /> -->
            <!-- <Greet id="my_article" :name="name" :heroName="heroName" /> -->
            <!-- <h2 class="text-gray-50 text-xs">Component username is {{ name }}</h2> -->
            <!-- <ComponentA /> -->
            <!-- <button
                type="button"
                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                @click="showModal = true"
            >
                Open modal
            </button> -->
            <!-- <Popup v-show="showModal" @close="closePopup" /> -->
            <!-- <button
                type="button"
                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                @click="showCreate = !showCreate"
            >
                Open Create
            </button>
            <CreatePopup v-show="showCreate" @close="closeCreate" /> -->
            <!-- <Slots></Slots> -->
            <!-- <Slots>Hello World!</Slots> -->
            <!-- <Slots>
                <h2 class="font-bold">My name is Ramyar</h2>
            </Slots> -->
            <!-- <Slots>
                <template v-slot:header>
                    <h2 class="font-bold capitalize">header</h2>
                </template>
                <template v-slot:default>
                    <h2 class="font-bold capitalize">default</h2>
                </template>
                <template v-slot:footer>
                    <h2 class="font-bold capitalize">footer</h2>
                </template>
            </Slots> -->
            <!-- <NameList /> -->
            <!-- <NameList>
                <template v-slot:default="slotProps">
                    <h2 class="capitalize">{{ slotProps.firstName }}</h2>
                    <h2 class="capitalize">{{ slotProps.lastName }}</h2>
                </template>
            </NameList> -->
            <!-- <div class="flex">
                <button @click=" tabChange = 'TabA'">Tab A</button>
                <button @click=" tabChange = 'TabB'">Tab B</button>
                <button @click=" tabChange = 'TabC'">Tab C</button>
            </div>

            <KeepAlive>
                <component :is="tabChange" />
            </KeepAlive> -->
            <!-- <TabA v-if="tabChange === 'TabA'" />
            <TabB v-if="tabChange === 'TabB'" />
            <TabC v-if="tabChange === 'TabC'" /> -->
            <h2>Hello World!</h2>
            <button type="button"
                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                @click="showModal = true">Show Modal</button>
            <Modal v-show="showModal"  @close="showModal = false" />
        </div>
    </header>
</template>

<script>
import Popup from "./components/Popup.vue";
import Basic from "./components/Basic.vue";
import Form from "./components/Form.vue";
import Handling from "./components/Handling.vue";
import List from "./components/List.vue";
import Computed from "./components/Computed.vue";
import Watches from "./components/Watches.vue";
import Greet from "./components/Greet.vue";
import ComponentA from "./components/ProvideInject/ComponentA.vue";
import CreatePopup from "./components/CreatePopup.vue";
import Slots from "./components/Slots.vue";
import NameList from "./components/NameList.vue";
import TabA from "./components/tabs/TabA.vue";
import TabB from "./components/tabs/TabB.vue";
import TabC from "./components/tabs/TabC.vue";
import Modal from "./components/Modal.vue";

export default {
    name: "App",
    components: {
        Greet,
        ComponentA,
        Popup,
        CreatePopup,
        Slots,
        NameList,
        TabA,
        TabB,
        TabC,
        Modal
    },
    data() {
        return {
            name: "Ramyar",
            heroName: "Superman",
            showModal: false,
            showCreate: false,
            tabChange: 'TabA'
        };
    },
    methods: {
        closePopup(action) {
            this.showModal = false;
            console.log("This action is", action);
        },
        closeCreate(name) {
            this.showCreate = false;
            console.log("This name is", name);
        },
    },
    provide() {
        return {
            username: this.name,
        };
    },
};
</script>
