<template>
    <PageComponent>
        <template v-slot:header>
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-bold text-gray-900">Surveys</h1>
                <router-link
                    :to="{ name: 'SurveyCreate' }"
                    class="py-2 px-3 text-white bg-emerald-500 rounded-md hover:bg-emerald-600"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 -mt-1 inline-block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    Add new Survey
                </router-link>
            </div>
        </template>
        <div v-if="surveys.loading" class="flex items-center justify-center space-x-2 animate-pulse">
            <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
            <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
            <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
        </div>
        <div v-else>
            <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                <SurveyListItem  v-for="(survey, index) in surveys.data" 
                    :key="survey.id"
                    :survey="survey"
                    @delete="deleteSurvey(survey)"
                    class="opacity-0 animate-fade-in-down"
                    :style="{animationDelay: `${index*0.1}s`}"
                ></SurveyListItem>
            </div>
            <div class="flex justify-center mt-5">
                <nav
                    class="relative z-0 inline-flex justify-center rounded-md shadow-sm"
                    aria-label="Pagination"
                >
                <a v-if="surveys.meta.current_page > 1" 
                    href="#"
                    @click="getForPage(`/survey?page=${surveys.meta.current_page-1}`)"
                    aria-current="Page"
                    class="relative inline-flex 
                        items-center px-4 py-2 border text-sm
                        font-medium whitespace-nowrap
                        bg-white border-gray-300 text-gray-500 hover:bg-gray-100
                        rounded-l-md
                    "
                    v-text="'<< Anterior'"    
                ></a>
                <a
                    v-for="i in surveys.meta.last_page"
                    :key="i"
                    :disabled="i===surveys.meta.current_page"
                    href="#"
                    @click="getForPage(`/survey?page=${i}`)"
                    aria-current="Page"
                    class="relative inline-flex 
                        items-center px-4 py-2 border text-sm
                        font-medium whitespace-nowrap
                    "
                    :class="[
                        i==surveys.meta.current_page
                        ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                        : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50',
                        i === 1 ? 'rounded-l-md' : ''
                    ]"
                >{{i}}</a>
                <a v-if="surveys.links.next" 
                    href="#"
                    @click="getForPage(`/survey?page=${surveys.meta.current_page+1}`)"
                    aria-current="Page"
                    class="relative inline-flex 
                        items-center px-4 py-2 border text-sm
                        font-medium whitespace-nowrap
                        bg-white border-gray-300 text-gray-500 hover:bg-gray-100
                        rounded-r-md
                    "
                    v-text="'Siguiente >>'"    
                ></a>
                </nav>
            </div>
        </div>
    </PageComponent>
</template>
<script setup>
    import store from "../store"
    import PageComponent from "../components/PageComponent.vue";
    import SurveyListItem from "../components/SurveyListItem.vue";
    import { computed } from "vue";

    const surveys = computed( () => store.state.surveys)

    store.dispatch('getSurveys')

    function deleteSurvey(survey){
        if(confirm(`Are you sure you want to delete this survey? Operation can´t be undonde!!!!`)){
            store.dispatch("deleteSurvey", survey.id)
            .then(() => {
                store.dispatch("getSurveys")
            })
        }
    }

    function getForPage(link){
        store.dispatch("getSurveys", link)
    }
</script>

<style scoped></style>
