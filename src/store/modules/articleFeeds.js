import axios from 'axios';

export default {
    namespaced: true,
    state: {
        articleFeeds: [],
        hiddenFeeds: [
            {
                articleId: 1,
                articleTitle: "Article one",
                articleCategory: "Study Notes",
                articlePreview:
                    "some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;..."
            },
            {
                articleId: 2,
                articleTitle: "Article 2",
                articleCategory: "Study Notes",
                articlePreview:
                    "some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;..."
            },
            {
                articleId: 3,
                articleTitle: "Article 3",
                articleCategory: "Study Notes",
                articlePreview:
                    "some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;..."
            },
            {
                articleId: 4,
                articleTitle: "Article 4",
                articleCategory: "Study Notes",
                articlePreview:
                    "some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;..."
            },
            {
                articleId: 5,
                articleTitle: "Article 5",
                articleCategory: "Study Notes",
                articlePreview:
                    "some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;..."
            },
            {
                articleId: 6,
                articleTitle: "Article 6",
                articleCategory: "Study Notes",
                articlePreview:
                    "some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;..."
            },
            {
                articleId: 7,
                articleTitle: "Article 7",
                articleCategory: "Study Notes",
                articlePreview:
                    "some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;..."
            },
            {
                articleId: 8,
                articleTitle: "Article 8",
                articleCategory: "Study Notes",
                articlePreview:
                    "some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;..."
            },
            {
                articleId: 9,
                articleTitle: "Article 9",
                articleCategory: "Study Notes",
                articlePreview:
                    "some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;..."
            },
            {
                articleId: 10,
                articleTitle: "Article 10",
                articleCategory: "Study Notes",
                articlePreview:
                    "some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;some relasfjas;lfasjdfasjfasassalfs.sadfj;lasjfasl;fjs.fas.jfsafjsafasfasfsjafl;sajfl;..."
            }
        ]
    },
    mutations:
    {
        addArticleFeeds(state, articleFeed) {
            state.articleFeeds.push(articleFeed);
        }
    },
    actions: {
        getArticleFeeds({ commit }, user) {
            let userId = user.userId;
            return axios.post('/api/getArticleFeeds', userId)
                .then(result => commit('addArticleFeeds', result.data));
        }
    },
    getters: {
        currentFeeds(state) {
            return state.hiddenFeeds;
        }
    }
}