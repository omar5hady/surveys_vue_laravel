import {createStore} from 'vuex'
import laravelApi from '../api/laravelApi'

// const tmpSurveys = [
//     {
//         id: 100,
//         title: "TheCodeholic Youtube channel content",
//         slug: "thecodeholic-youtube-channel-content",
//         status: "draft",
//         image:
//             "https://pbs.twimg.com/profile_images/1118059535003017221/9ZwEYqj2_400x400.png",
//         description:
//             "My name is Zura.<br>I am Web Developer with 9+ years of experience, free educational",
//         created_at: "2021-12-20 18:00:00",
//         updated_at: "2021-12-20 18:00:00",
//         expire_date: "2021-12-31 18:00:00",
//         questions: [
//             {
//                 id: 1,
//                 type: "select",
//                 question: "From which country are you?",
//                 description: null,
//                 data: {
//                     options:[
//                         { uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea", text: "USA" },
//                         {
//                             uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440",
//                             text: "Georgia"
//                         },
//                         {
//                             uuid: "b5c09733-a49e-460a-ba8a-526863010729",
//                             text: "Germany"
//                         },
//                     ]
//                 }
//             },
//             {
//                 id: 2,
//                 type: "checkbox",
//                 question: "Which language videos do you want to see on my channel",
//                 description :"Magna tempor non consequat non est laboris cupidatat nostrud. Nostrud eu irure sint tempor laborum enim excepteur tempor nulla minim ut. Commodo velit proident esse aute sit amet dolore adipisicing aute aliqua. Lorem eu tempor labore non et sit irure ipsum veniam. Qui sit enim est id qui magna.",
//                 data:{
//                     options:[
//                         {
//                             uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea",
//                             text: "JavaScript"
//                         },
//                         {
//                             uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440", text: "PHP"
//                         },
//                         {
//                             uuid: "b5c09733-a49e-460a-ba8a-52683010729", text: "HTML + CSS"
//                         }
//                     ]
//                 }
//             },
//             {
//                 id: 3,
//                 type: "checkbox",
//                 question: "Which PHP freamwork videos do you want to see on my channel",
//                 description :"Magna tempor non consequat non est laboris cupidatat nostrud. Nostrud eu irure sint tempor laborum enim excepteur tempor nulla minim ut. Commodo velit proident esse aute sit amet dolore adipisicing aute aliqua. Lorem eu tempor labore non et sit irure ipsum veniam. Qui sit enim est id qui magna.",
//                 data:{
//                     options:[
//                         {
//                             uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea",
//                             text: "Laravel"
//                         },
//                         {
//                             uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440", text: "Yii2"
//                         },
//                         {
//                             uuid: "b5c09733-a49e-460a-ba8a-52683010729", text: "Codeigniter"
//                         }
//                     ]
//                 }
//             },
//             {
//                 id: 4,
//                 type: "radio",
//                 question: "Which Laravel Framework do you love most?",
//                 description :"Magna tempor non consequat non est laboris cupidatat nostrud. Nostrud eu irure sint tempor laborum enim excepteur tempor nulla minim ut. Commodo velit proident esse aute sit amet dolore adipisicing aute aliqua. Lorem eu tempor labore non et sit irure ipsum veniam. Qui sit enim est id qui magna.",
//                 data:{
//                     options:[
//                         {
//                             uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea",
//                             text: "Laravel 9"
//                         },
//                         {
//                             uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440", text: "Laravel 8"
//                         },
//                         {
//                             uuid: "b5c09733-a49e-460a-ba8a-52683010729", text: "Laravel 9"
//                         }
//                     ]
//                 }
//             },
//             {
//                 id: 5,
//                 type: "checkbox",
//                 question: "What kind of projects do you want to see on my channel built with Laravel?",
//                 description :"Magna tempor non consequat non est laboris cupidatat nostrud. Nostrud eu irure sint tempor laborum enim excepteur tempor nulla minim ut. Commodo velit proident esse aute sit amet dolore adipisicing aute aliqua. Lorem eu tempor labore non et sit irure ipsum veniam. Qui sit enim est id qui magna.",
//                 data:{
//                     options:[
//                         {
//                             uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea",
//                             text: "REST API"
//                         },
//                         {
//                             uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440", text: "E-commerce"
//                         },
//                         {
//                             uuid: "b5c09733-a49e-460a-ba8a-52683010729", text: "Real Estate"
//                         }
//                     ]
//                 }
//             },
//             {
//                 id: 6,
//                 type: "text",
//                 question: "What's your favorite Youtube channel",
//                 description : null,
//                 data:{}
//             },
//             {
//                 id: 7,
//                 type: "textarea",
//                 question: "What do you think about TheCodeholic channel?",
//                 description : "Write your honest opinion. Everything is anonymous",
//                 data:{}
//             },
//         ]
//     },
//     {
//         id: 200,
//         title: "Laravel 8",
//         slug: "laravel-8",
//         status: "active",
//         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/800px-Laravel.svg.png",
//         description: "Laravel is a web application framework with expressive, elegant syntax.",
//         created_at: "2021-12-20 18:00:00",
//         updated_at: "2021-12-20 18:00:00",
//         expire_date: "2021-12-31 18:00:00",
//         questions: []
//     },
//     {
//         id: 300,
//         title: "Vue 3",
//         slug: "vue-3",
//         status: "active",
//         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/800px-Vue.js_Logo_2.svg.png",
//         description: "Vue.js (comúnmente conocido como Vue​) es un framework de JavaScript de código abierto para la construcción de interfaces de usuario y aplicaciones de una sola página.",
//         created_at: "2021-12-21 17:00:00",
//         updated_at: "2021-12-21 17:00:00",
//         expire_date: "2021-12-31 18:00:00",
//         questions: []
//     }
// ]

const store = createStore({
    state:{
        user:{
            data:{},
            token: sessionStorage.getItem('TOKEN')
        },
        dashboard:{
            loading: false,
            data:{}
        },
        currentSurvey:{
            loading: false,
            data: {}
        },
        surveys: {
            loading: false,
            data: [],
            links: [],
            meta: {}
        },
        questionTypes:["text","select","radio","checkbox","textarea"],
        notification:{
            show: false,
            type: null,
            message: null
        }
    },
    getters:{},
    actions:{
        getDashboardMeta( {commit} ){
            commit( "dashboardLoading", true )

            return laravelApi.get('/dashboard')
                .then((res) => {
                    commit( "dashboardLoading", false )
                    commit( "setDashboardData", res.data )
                    return res
                })
                .catch( error => {
                    commit('dashboardLoading', false)
                    return error
                })
        },
        getSurvey( {commit}, id ){
            commit("setCurrentSurveyLoading", true)
            return laravelApi
                .get(`/survey/${id}`)
                .then((res) => {
                    commit("setCurrentSurvey", res.data)
                    commit("setCurrentSurveyLoading", false)
                    return res
                })
                .catch((err) => {
                    commit("setCurrentSurveyLoading", false)
                    throw err
                })
        },
        saveSurvey( {commit}, survey ){
            delete survey.image_url
            let response
            if(survey.id){
                response = laravelApi
                    .put(`/survey/${survey.id}`,survey)
                    .then((res) => {
                        commit("setCurrentSurvey", res.data)
                        return res;
                    })
            }else{
                response = laravelApi.post("/survey",survey).then((res) => {
                    commit("setCurrentSurvey", res.data)
                    return res;
                })
            }

            return response
        },
        deleteSurvey({}, id){
            return laravelApi.delete(`/survey/${id}`)
        },
        getSurveys({commit}, url = null){
            url = url || '/survey'
            commit("setSurveysLoading", true)
            return laravelApi.get(url).then((res) => {
                commit("setSurveysLoading", false)
                commit("setSurveys", res.data)
                return res
            })
        },
        getSurveyBySlug({commit}, slug){
            commit("setCurrentSurveyLoading", true)
            return laravelApi.get(`/survey-by-slug/${slug}`)
                .then((res) => {
                    commit("setCurrentSurvey", res.data)
                    commit("setCurrentSurveyLoading", false)
                    return res
                })
                .catch((err) => {
                    commit("setCurrentSurveyLoading", false)
                    throw err
                })
        },
        saveSurveyAnswer({commit}, {surveyId, answers}){
            return laravelApi.post(`/survey/${surveyId}/answer`,{answers})
        },
        register( {commit}, user ){
            return laravelApi.post('/register',user)
            .then(({data}) => {
                commit('setUser', data)
                return data
            })
        },

        login( {commit}, user ){
            return laravelApi.post('/login',user)
                .then(({data}) => {
                    commit('setUser', data)
                    return data
                })
        },
        logout( {commit} ){
            return laravelApi.post('logout')
                .then(response => {
                    commit('logout')
                    return response
                })
        }
    },
    mutations:{
        dashboardLoading: (state, loading) => {
            state.dashboard.loading = loading
        },
        setDashboardData: (state, data) => {
            state.dashboard.data = data
        },
        logout: (state) => {
            state.user.data = {}
            state.user.token = null
            sessionStorage.setItem('TOKEN', null)
        },
        setUser: (state, userData) => {
            state.user.token = userData.token
            state.user.data = userData.user
            sessionStorage.setItem('TOKEN', userData.token)
        },
        setSurveysLoading: (state, loading) => {
            state.surveys.loading = loading
        },
        setSurveys: (state, surveys) => {
            state.surveys.data = surveys.data
            state.surveys.links = surveys.links
            state.surveys.meta = surveys.meta
        },
        setCurrentSurveyLoading: (state, loading) => {
            state.currentSurvey.loading = loading
        },
        setCurrentSurvey: (state, survey) => {
            state.currentSurvey.data = survey.data
        },
        notify: (state, {message, type}) => {
            state.notification.show = true
            state.notification.message = message
            state.notification.type = type

            setTimeout(() => {
                state.notification.show = false
            },4000)
        }
    },
    modules:{}
})

export default store