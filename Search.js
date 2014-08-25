var Search = {
	articlesByKey : {},
	registerArticle : function(siteId, articleId, keywords, name, url, description){
		if(!Search.articlesByKey[siteId + articleId])
			Search.articlesByKey[siteId + articleId] = [];
		Search.articlesByKey[siteId + articleId].push({
			name: name,
			url: url,
			description: description
		})
	},
	findArticleByType : function(siteId, articleId){
		//console.log("searching for " + siteId + articleId);
		//console.log(Search.articlesByKey);
		//console.log(Search.articlesByKey[siteId + articleId]);
		return Search.articlesByKey[siteId + articleId];
	}
};