<template lang="">
    <div class="flex justify-evenly items-center">
        <div>
            <pre class="text-indigo-100"> {{ JSON.stringify(formValues, null, 3) }} </pre>
        </div>
        <form class="p-2" @submit.prevent="submitForm">
            <div>
                <label for="name" class="text-indigo-100">Name</label>
                <input
                    type="text"
                    id="name"
                    v-model.trim.lazy="formValues.name"
                    @keyup.enter="submitForm"
                    class="mt-1 px-3 py-2 w-96 bg-indigo-100 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
                />
            </div>
            <div>
                <label for="profileSummary" class="text-indigo-100"> Profile Summary </label>
                <textarea
                    id="profileSummary"
                    v-model.trim="formValues.profileSummary"
                    class="mt-1 px-3 py-2 w-96 h-24 bg-indigo-100 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
                    requared
                ></textarea>
            </div>
            <div>
                <label for="country" class="text-indigo-100">Country</label>
                <select
                    id="country"
                    v-model="formValues.country"
                    class="mt-1 px-3 py-2 w-96 bg-indigo-100 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
                >
                    <option value="Iraq">Iraq</option>
                    <option value="Iran">Iran</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Syria">Syria</option>
                </select>
            </div>
            <div>
                <label for="jobLocation" class="text-indigo-100">Job Location</label>
                <select
                    id="jobLocation"
                    multiple
                    v-model="formValues.jobLocation"
                    class="mt-1 px-3 py-2 w-96 bg-indigo-100 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
                >
                    <option value="Iraq">Iraq</option>
                    <option value="Iran">Iran</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Syria">Syria</option>
                </select>
            </div>
            <div class="flex items-center gap-2">
                <input
                    type="checkbox"
                    id="remoteWork"
                    v-model="formValues.remoteWork"
                    true-value="yes"
                    false-value="no"
                    class="mt-1 px-3 py-2 bg-indigo-100 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
                />
                <label for="remoteWork" class="text-indigo-100">Remote Work</label>
            </div>
            <div>
                <label for="skills" class="text-indigo-100">Skills</label>
                <div class="flex gap-2">
                    <input type="checkbox" id="css" value="css" v-model="formValues.skills" />
                    <label for="css" class="text-indigo-100">CSS</label>
                    <input type="checkbox" id="html" value="html" v-model="formValues.skills" />
                    <label for="html" class="text-indigo-100">Html</label>
                    <input type="checkbox" id="javascript" value="javascript" v-model="formValues.skills" />
                    <label for="javascript" class="text-indigo-100">Java Script</label>
                </div>
            </div>
            <div>
                <label for="yesrOfExperience" class="text-indigo-100">Years of Experience</label>
                <div class="flex gap-2">
                    <input type="radio" name="group1" id="0-2" value="0-2" v-model="formValues.yesrOfExperience" />
                    <label for="0-2" class="text-indigo-100">0-2</label>
                    <input type="radio" name="group1" id="2-5" value="2-5" v-model="formValues.yesrOfExperience" />
                    <label for="2-5" class="text-indigo-100">2-5</label>
                    <input type="radio" name="group1" id="5-10" value="5-10" v-model="formValues.yesrOfExperience" />
                    <label for="5-10" class="text-indigo-100">5-10</label>
                    <input type="radio" name="group1" id="10+" value="10+" v-model="formValues.yesrOfExperience" />
                    <label for="10+" class="text-indigo-100">10+</label>
                </div>
            </div>
            <div>
                <label for="age" class="text-indigo-100">Age</label>
                <input
                    type="number"
                    id="age"
                    v-model.number="formValues.age"
                    class="mt-1 px-3 py-2 w-96 bg-indigo-100 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
                />
            </div>
            <button type="submit" class="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm">
                Save Changes
            </button>
        </form>
        <div>
            <h1 v-once class="text-2xl font-semibold text-indigo-100">once : {{ formValues.name }}</h1>
            <h1 v-pre class="text-2xl font-semibold text-indigo-100">pre : {{ formValues.name }}</h1>
            <button
                @click="formValues.name = 'Ramyar'"
                class="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm"
            >
                Change Name
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: "Form",
    data() {
        return {
            formValues: {
                name: "Ramyar Rebwar",
                profileSummary: "",
                country: "",
                jobLocation: [],
                remoteWork: "no",
                skills: [],
                yesrOfExperience: "",
                age: "",
            },
        };
    },
    methods: {
        submitForm() {
            console.log(this.formValues);
        },
    },
};
</script>
