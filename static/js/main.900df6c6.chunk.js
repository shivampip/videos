(this.webpackJsonpvideos=this.webpackJsonpvideos||[]).push([[0],{17:function(e){e.exports=JSON.parse('{"key":"AIzaSyCQneDt3z_zSKwBt_T8bfP01I97nP-oaYY"}')},18:function(e,t,n){e.exports=n(45)},24:function(e,t,n){},25:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),i=n(8),l=n.n(i),s=n(2),u=n(3),p=n(5),d=n(4),m=n(6),h=(n(24),n(25),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={term:""},n.searchTerm=function(e){e.preventDefault(),n.props.onSearch(n.state.term)},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"print",value:function(e){console.log(e)}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"search-bar",onSubmit:this.searchTerm},r.a.createElement("input",{type:"text",placeholder:"Search Video",value:this.state.term,onChange:function(t){e.setState({term:t.target.value})}}))}}]),t}(r.a.Component)),v=n(16),f=n.n(v),b=n(17).key,y=f.a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{key:b,part:"snippet",type:"video",maxResults:5}}),S=(n(44),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).onVideoSelect=function(e){n.props.onVideoSelect(n.props.video)},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.video.snippet;return r.a.createElement("div",{className:"video-item",onClick:this.onVideoSelect},r.a.createElement("img",{alt:e.title,src:e.thumbnails.medium.url}),r.a.createElement("label",null,e.title))}}]),t}(r.a.Component)),O=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).onVideoSelect=function(e){n.props.onVideoSelect(e)},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.videos.map((function(t){return r.a.createElement(S,{key:t.id.videoId,video:t,onVideoSelect:e.onVideoSelect})}));return r.a.createElement("div",{style:{float:"right"}},t)}}]),t}(r.a.Component),j=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).getVideoSrc=function(){return"https://www.youtube.com/embed/".concat(n.props.video.id.videoId)},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.video;return e?r.a.createElement("div",{className:"video-detail"},r.a.createElement("iframe",{title:"Youtube Video Player",src:this.getVideoSrc(),width:"700",height:"420",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),r.a.createElement("h3",{className:"title"},e.snippet.title),r.a.createElement("p",{className:"description"},e.snippet.description)):r.a.createElement("div",null,"Loading...")}}]),t}(r.a.Component),g=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={videos:[],selectedVideo:null},n.onVideoSelect=function(e){n.print("You selected: "+e.snippet.title),n.print(e),n.setState({selectedVideo:e})},n.onSearch=function(e){var t;return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return n.print("Searching "+e+"....."),a.next=3,l.a.awrap(y.get("/search",{params:{q:e}}));case 3:t=a.sent,n.print(t.data.items),n.setState({videos:t.data.items,selectedVideo:t.data.items[0]});case 6:case"end":return a.stop()}}))},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"print",value:function(e){console.log(e)}},{key:"componentDidMount",value:function(){this.onSearch("shape of you")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,{onSearch:this.onSearch}),r.a.createElement("div",{className:"content"},r.a.createElement("div",null,r.a.createElement(j,{video:this.state.selectedVideo})),r.a.createElement("div",null,r.a.createElement(O,{videos:this.state.videos,onVideoSelect:this.onVideoSelect}))))}}]),t}(r.a.Component);c.a.render(r.a.createElement(g,null),document.querySelector("#root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.900df6c6.chunk.js.map