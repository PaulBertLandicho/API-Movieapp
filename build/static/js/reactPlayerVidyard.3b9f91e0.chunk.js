(self.webpackChunkmovieapp=self.webpackChunkmovieapp||[]).push([[392],{5941:(e,t,a)=>{var r,s=a(2897).default,l=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,p=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,y=(e,t,a,r)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let s of n(t))u.call(e,s)||s===a||o(e,s,{get:()=>t[s],enumerable:!(r=i(t,s))||r.enumerable});return e},h=(e,t,a)=>(((e,t,a)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!==typeof t?t+"":t,a),a),d={};((e,t)=>{for(var a in t)o(e,a,{get:t[a],enumerable:!0})})(d,{default:()=>f}),e.exports=(r=d,y(o({},"__esModule",{value:!0}),r));var c=((e,t,a)=>(a=null!=e?l(p(e)):{},y(!t&&e&&e.__esModule?a:o(a,"default",{value:e,enumerable:!0}),e)))(a(5043)),m=a(2206),P=a(1520);class f extends c.Component{constructor(){super(...arguments),h(this,"callPlayer",m.callPlayer),h(this,"mute",(()=>{this.setVolume(0)})),h(this,"unmute",(()=>{null!==this.props.volume&&this.setVolume(this.props.volume)})),h(this,"ref",(e=>{this.container=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){const{playing:t,config:a,onError:r,onDuration:l}=this.props,o=e&&e.match(P.MATCH_URL_VIDYARD)[1];this.player&&this.stop(),(0,m.getSDK)("https://play.vidyard.com/embed/v4.js","VidyardV4","onVidyardAPI").then((e=>{this.container&&(e.api.addReadyListener(((e,t)=>{this.player||(this.player=t,this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seek",this.props.onSeek),this.player.on("playerComplete",this.props.onEnded))}),o),e.api.renderPlayer(s({uuid:o,container:this.container,autoplay:t?1:0},a.options)),e.api.getPlayerMetadata(o).then((e=>{this.duration=e.length_in_seconds,l(e.length_in_seconds)})))}),r)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){window.VidyardV4.api.destroyPlayer(this.player)}seekTo(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setPlaybackRate(e){this.callPlayer("setPlaybackSpeed",e)}getDuration(){return this.duration}getCurrentTime(){return this.callPlayer("currentTime")}getSecondsLoaded(){return null}render(){const{display:e}=this.props,t={width:"100%",height:"100%",display:e};return c.default.createElement("div",{style:t},c.default.createElement("div",{ref:this.ref}))}}h(f,"displayName","Vidyard"),h(f,"canPlay",P.canPlay.vidyard)}}]);
//# sourceMappingURL=reactPlayerVidyard.3b9f91e0.chunk.js.map