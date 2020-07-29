
var data = {
	"quotes" : [
			"lol",
			"mdr"
		],
	"authors": []
	};

function getQuote(config) {
	return data["quotes"][Math.floor(Math.random() * quotes.length)];
}

hexo.extend.tag.register('randomQuote', function(args) {
	if (config.disable)
		return ("");
	return getQuote(config);
});

hexo.extend.filter.register('inject_ready', (inject) => {
	// Configure injections here
	// Inject raw html at head_begin
	inject.raw('head_begin', 'injected content')
	// Or short hand
	inject.headBegin.raw('injected content')
  })

