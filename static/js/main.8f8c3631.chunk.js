(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(23)},15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),s=(n(15),n(1)),i=n(2),l=n(4),u=n(3),h=n(5),p=n(9),d=n(6),f=(n(17),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(d.a)(Object(d.a)(n))),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e){this.props.flipCellsAroundMe()}},{key:"render",value:function(){var e="Cell"+(this.props.isLit?" Cell-lit":"");return r.a.createElement("td",{className:e,onClick:this.handleClick})}}]),t}(a.Component)),b=(n(19),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={nrows:5,ncols:5,hasWon:!1,board:n.createBoard()},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"createBoard",value:function(){for(var e=[],t=0;t<this.props.nrows;t++){for(var n=[],a=0;a<this.props.ncols;a++)n.push(Math.random()<this.props.chanceLightStartsOn);e.push(n)}return e}},{key:"flipCellsAround",value:function(e){console.log(e);var t=this.state.ncols,n=this.state.nrows,a=this.state.board,r=e.split("-").map(Number),o=Object(p.a)(r,2),c=o[0],s=o[1];function i(e,r){r>=0&&r<t&&e>=0&&e<n&&(a[e][r]=!a[e][r])}i(c,s),i(c,s-1),i(c,s+1),i(c-1,s),i(c+1,s);var l=a.every(function(e){return e.every(function(e){return!e})});this.setState({board:a,hasWon:l})}},{key:"render",value:function(){var e=this;if(this.state.hasWon)return r.a.createElement("h1",null,"YOU WON!!!");for(var t=[],n=0;n<this.props.nrows;n++){for(var a=[],o=function(t){var o="".concat(n,"-").concat(t);a.push(r.a.createElement(f,{key:o,isLit:e.state.board[n][t],flipCellsAroundMe:function(){return e.flipCellsAround(o)}}))},c=0;c<this.props.ncols;c++)o(c);t.push(r.a.createElement("tr",{key:n},a))}return r.a.createElement("div",null,r.a.createElement("h1",null,"LIGHTS OUT"),r.a.createElement("table",{className:"Board"},r.a.createElement("tbody",null,t)))}}]),t}(a.Component));b.defaultProps={nrows:5,ncols:5,chanceLightStartsOn:.25};var v=b,m=(n(21),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.8f8c3631.chunk.js.map