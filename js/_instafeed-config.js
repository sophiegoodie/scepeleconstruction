var feed = new Instafeed({
      accessToken: 'tokenHere',
      template: '<div><a href="{{link}}" target="_blank"><img title="{{caption}}" src="{{image}}" /></a><p class="p-2">{{caption}}</p></div>',
      limit: 200,
    });
    feed.run();