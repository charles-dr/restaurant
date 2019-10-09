import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";


const ApiService = {
    init() {
        Vue.use(VueAxios, axios);
        Vue.axios.defaults.baseURL = 'api/';
        Vue.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    },


    query(resource, params) {
        return Vue.axios.get(resource, params).catch(error => {
            throw new Error(`[RWV] ApiService ${error}`);
        });
    },

    get(resource, slug = "") {
        let params = '';
        if (!_.isNaN(slug)) {
            params = '?' + slug;
        }
        if (_.isObject(slug)) {
            params = '?' + _.keys(slug).filter(key => (slug[key] != null && slug[key] !== 'null'))
                .map(key => key + '=' + slug[key]).join('&');
        }


        return Vue.axios.get(`${resource}${params}`).catch(error => {
            throw new Error(`[RWV] ApiService ${error}`);
        });
    },

    post(resource, params) {
        // if (JwtService.getToken() !== null) {
        // } else {
        // }
        // console.log(resource);        
        return Vue.axios.post(`${resource}`, params);
    },

    update(resource, slug, params) {
        return Vue.axios.put(`${resource}/${slug}`, params);
    },

    put(resource, params) {
        return Vue.axios.put(`${resource}`, params);
    },

    delete(resource) {
        return Vue.axios.delete(resource).catch(error => {
            throw new Error(`[RWV] ApiService ${error}`);
        });
    }
};

export default ApiService;