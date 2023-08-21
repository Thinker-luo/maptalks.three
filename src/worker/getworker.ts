// eslint-disable-next-line quotes
const workerCode = `(function(t){"use strict";
/*!
   * poly-extrude v0.3.0
    */var n={exports:{}};function r(t,n,r){r=r||2;var e,o,a,h,u,v,f,x=n&&n.length,d=x?n[0]*r:t.length,y=i(t,0,d,r,!0),g=[];if(!y||y.next===y.prev)return g;if(x&&(y=function(t,n,r,e){var s,o,a,h=[];for(s=0,o=n.length;s<o;s++)(a=i(t,n[s]*e,s<o-1?n[s+1]*e:t.length,e,!1))===a.next&&(a.steiner=!0),h.push(p(a));for(h.sort(c),s=0;s<h.length;s++)r=l(h[s],r);return r}(t,n,y,r)),t.length>80*r){e=a=t[0],o=h=t[1];for(var m=r;m<d;m+=r)(u=t[m])<e&&(e=u),(v=t[m+1])<o&&(o=v),u>a&&(a=u),v>h&&(h=v);f=0!==(f=Math.max(a-e,h-o))?32767/f:0}return s(y,g,r,e,o,f,0),g}function i(t,n,r,i,e){var s,o;if(e===V(t,n,r,i)>0)for(s=n;s<r;s+=i)o=A(s,t[s],t[s+1],o);else for(s=r-i;s>=n;s-=i)o=A(s,t[s],t[s+1],o);return o&&g(o,o.next)&&(P(o),o=o.next),o}function e(t,n){if(!t)return t;n||(n=t);var r,i=t;do{if(r=!1,i.steiner||!g(i,i.next)&&0!==y(i.prev,i,i.next))i=i.next;else{if(P(i),(i=n=i.prev)===i.next)break;r=!0}}while(r||i!==n);return n}function s(t,n,r,i,c,l,v){if(t){!v&&l&&function(t,n,r,i){var e=t;do{0===e.z&&(e.z=f(e.x,e.y,n,r,i)),e.prevZ=e.prev,e.nextZ=e.next,e=e.next}while(e!==t);e.prevZ.nextZ=null,e.prevZ=null,function(t){var n,r,i,e,s,o,a,h,u=1;do{for(r=t,t=null,s=null,o=0;r;){for(o++,i=r,a=0,n=0;n<u&&(a++,i=i.nextZ);n++);for(h=u;a>0||h>0&&i;)0!==a&&(0===h||!i||r.z<=i.z)?(e=r,r=r.nextZ,a--):(e=i,i=i.nextZ,h--),s?s.nextZ=e:t=e,e.prevZ=s,s=e;r=i}s.nextZ=null,u*=2}while(o>1)}(e)}(t,i,c,l);for(var p,x,d=t;t.prev!==t.next;)if(p=t.prev,x=t.next,l?a(t,i,c,l):o(t))n.push(p.i/r|0),n.push(t.i/r|0),n.push(x.i/r|0),P(t),t=x.next,d=x.next;else if((t=x)===d){v?1===v?s(t=h(e(t),n,r),n,r,i,c,l,2):2===v&&u(t,n,r,i,c,l):s(e(t),n,r,i,c,l,1);break}}}function o(t){var n=t.prev,r=t,i=t.next;if(y(n,r,i)>=0)return!1;for(var e=n.x,s=r.x,o=i.x,a=n.y,h=r.y,u=i.y,c=e<s?e<o?e:o:s<o?s:o,l=a<h?a<u?a:u:h<u?h:u,v=e>s?e>o?e:o:s>o?s:o,f=a>h?a>u?a:u:h>u?h:u,p=i.next;p!==n;){if(p.x>=c&&p.x<=v&&p.y>=l&&p.y<=f&&x(e,a,s,h,o,u,p.x,p.y)&&y(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function a(t,n,r,i){var e=t.prev,s=t,o=t.next;if(y(e,s,o)>=0)return!1;for(var a=e.x,h=s.x,u=o.x,c=e.y,l=s.y,v=o.y,p=a<h?a<u?a:u:h<u?h:u,d=c<l?c<v?c:v:l<v?l:v,g=a>h?a>u?a:u:h>u?h:u,m=c>l?c>v?c:v:l>v?l:v,z=f(p,d,n,r,i),w=f(g,m,n,r,i),M=t.prevZ,b=t.nextZ;M&&M.z>=z&&b&&b.z<=w;){if(M.x>=p&&M.x<=g&&M.y>=d&&M.y<=m&&M!==e&&M!==o&&x(a,c,h,l,u,v,M.x,M.y)&&y(M.prev,M,M.next)>=0)return!1;if(M=M.prevZ,b.x>=p&&b.x<=g&&b.y>=d&&b.y<=m&&b!==e&&b!==o&&x(a,c,h,l,u,v,b.x,b.y)&&y(b.prev,b,b.next)>=0)return!1;b=b.nextZ}for(;M&&M.z>=z;){if(M.x>=p&&M.x<=g&&M.y>=d&&M.y<=m&&M!==e&&M!==o&&x(a,c,h,l,u,v,M.x,M.y)&&y(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;b&&b.z<=w;){if(b.x>=p&&b.x<=g&&b.y>=d&&b.y<=m&&b!==e&&b!==o&&x(a,c,h,l,u,v,b.x,b.y)&&y(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function h(t,n,r){var i=t;do{var s=i.prev,o=i.next.next;!g(s,o)&&m(s,i,i.next,o)&&M(s,o)&&M(o,s)&&(n.push(s.i/r|0),n.push(i.i/r|0),n.push(o.i/r|0),P(i),P(i.next),i=t=o),i=i.next}while(i!==t);return e(i)}function u(t,n,r,i,o,a){var h=t;do{for(var u=h.next.next;u!==h.prev;){if(h.i!==u.i&&d(h,u)){var c=b(h,u);return h=e(h,h.next),c=e(c,c.next),s(h,n,r,i,o,a,0),void s(c,n,r,i,o,a,0)}u=u.next}h=h.next}while(h!==t)}function c(t,n){return t.x-n.x}function l(t,n){var r=function(t,n){var r,i=n,e=t.x,s=t.y,o=-1/0;do{if(s<=i.y&&s>=i.next.y&&i.next.y!==i.y){var a=i.x+(s-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(a<=e&&a>o&&(o=a,r=i.x<i.next.x?i:i.next,a===e))return r}i=i.next}while(i!==n);if(!r)return null;var h,u=r,c=r.x,l=r.y,f=1/0;i=r;do{e>=i.x&&i.x>=c&&e!==i.x&&x(s<l?e:o,s,c,l,s<l?o:e,s,i.x,i.y)&&(h=Math.abs(s-i.y)/(e-i.x),M(i,t)&&(h<f||h===f&&(i.x>r.x||i.x===r.x&&v(r,i)))&&(r=i,f=h)),i=i.next}while(i!==u);return r}(t,n);if(!r)return n;var i=b(r,t);return e(i,i.next),e(r,r.next)}function v(t,n){return y(t.prev,t,n.prev)<0&&y(n.next,t,t.next)<0}function f(t,n,r,i,e){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-r)*e|0)|t<<8))|t<<4))|t<<2))|t<<1))|(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=(n-i)*e|0)|n<<8))|n<<4))|n<<2))|n<<1))<<1}function p(t){var n=t,r=t;do{(n.x<r.x||n.x===r.x&&n.y<r.y)&&(r=n),n=n.next}while(n!==t);return r}function x(t,n,r,i,e,s,o,a){return(e-o)*(n-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(r-o)*(n-a)&&(r-o)*(s-a)>=(e-o)*(i-a)}function d(t,n){return t.next.i!==n.i&&t.prev.i!==n.i&&!function(t,n){var r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==n.i&&r.next.i!==n.i&&m(r,r.next,t,n))return!0;r=r.next}while(r!==t);return!1}(t,n)&&(M(t,n)&&M(n,t)&&function(t,n){var r=t,i=!1,e=(t.x+n.x)/2,s=(t.y+n.y)/2;do{r.y>s!=r.next.y>s&&r.next.y!==r.y&&e<(r.next.x-r.x)*(s-r.y)/(r.next.y-r.y)+r.x&&(i=!i),r=r.next}while(r!==t);return i}(t,n)&&(y(t.prev,t,n.prev)||y(t,n.prev,n))||g(t,n)&&y(t.prev,t,t.next)>0&&y(n.prev,n,n.next)>0)}function y(t,n,r){return(n.y-t.y)*(r.x-n.x)-(n.x-t.x)*(r.y-n.y)}function g(t,n){return t.x===n.x&&t.y===n.y}function m(t,n,r,i){var e=w(y(t,n,r)),s=w(y(t,n,i)),o=w(y(r,i,t)),a=w(y(r,i,n));return e!==s&&o!==a||(!(0!==e||!z(t,r,n))||(!(0!==s||!z(t,i,n))||(!(0!==o||!z(r,t,i))||!(0!==a||!z(r,n,i)))))}function z(t,n,r){return n.x<=Math.max(t.x,r.x)&&n.x>=Math.min(t.x,r.x)&&n.y<=Math.max(t.y,r.y)&&n.y>=Math.min(t.y,r.y)}function w(t){return t>0?1:t<0?-1:0}function M(t,n){return y(t.prev,t,t.next)<0?y(t,n,t.next)>=0&&y(t,t.prev,n)>=0:y(t,n,t.prev)<0||y(t,t.next,n)<0}function b(t,n){var r=new S(t.i,t.x,t.y),i=new S(n.i,n.x,n.y),e=t.next,s=n.prev;return t.next=n,n.prev=t,r.next=e,e.prev=r,i.next=r,r.prev=i,s.next=i,i.prev=s,i}function A(t,n,r,i){var e=new S(t,n,r);return i?(e.next=i.next,e.prev=i,i.next.prev=e,i.next=e):(e.prev=e,e.next=e),e}function P(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function S(t,n,r){this.i=t,this.x=n,this.y=r,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function V(t,n,r,i){for(var e=0,s=n,o=r-i;s<r;s+=i)e+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return e}n.exports=r,n.exports.default=r,r.deviation=function(t,n,r,i){var e=n&&n.length,s=e?n[0]*r:t.length,o=Math.abs(V(t,0,s,r));if(e)for(var a=0,h=n.length;a<h;a++){var u=n[a]*r,c=a<h-1?n[a+1]*r:t.length;o-=Math.abs(V(t,u,c,r))}var l=0;for(a=0;a<i.length;a+=3){var v=i[a]*r,f=i[a+1]*r,p=i[a+2]*r;l+=Math.abs((t[v]-t[p])*(t[f+1]-t[v+1])-(t[v]-t[f])*(t[p+1]-t[v+1]))}return 0===o&&0===l?0:Math.abs((l-o)/o)},r.flatten=function(t){for(var n=t[0][0].length,r={vertices:[],holes:[],dimensions:n},i=0,e=0;e<t.length;e++){for(var s=0;s<t[e].length;s++)for(var o=0;o<n;o++)r.vertices.push(t[e][s][o]);e>0&&(i+=t[e-1].length,r.holes.push(i))}return r};var Z=n.exports;function F(t){for(var n,r,i=0,e=1,s=t.length;e<s;)n=r||t[0],i+=((r=t[e])[0]-n[0])*(r[1]+n[1]),e++;return i>0}function L(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t}function _(t,n){var r=n[0],i=n[1],e=n[2],s=Math.sqrt(r*r+i*i+e*e)||1;return t[0]=r/s,t[1]=i/s,t[2]=e/s,t}function E(t,n){function r(t,n,r,i){t[0]=n,t[1]=r,t[2]=i}for(var i,e,s,o,a,h,u,c,l,v=[],f=[],p=[],x=[],d=[],y=[],g=t.length,m=new Float32Array(n.length),z=0;z<g;){var w=3*t[z],M=3*t[z+1],b=3*t[z+2];r(v,n[w],n[w+1],n[w+2]),r(f,n[M],n[M+1],n[M+2]),r(p,n[b],n[b+1],n[b+2]),L(d,p,f),L(x,v,f),i=y,s=x,o=void 0,a=void 0,h=void 0,u=void 0,c=void 0,l=void 0,o=(e=d)[0],a=e[1],h=e[2],u=s[0],c=s[1],l=s[2],i[0]=a*l-h*c,i[1]=h*u-o*l,i[2]=o*c-a*u;for(var A=0;A<3;A++)m[w+A]+=y[A],m[M+A]+=y[A],m[b+A]+=y[A];z+=3}for(var P=0,S=m.length;P<S;)r(y,m[P],m[P+1],m[P+2]),_(y,y),m[P]=y[0]||0,m[P+1]=y[1]||0,m[P+2]=y[2]||0,P+=3;return m}function I(t){if(1===t.length)return{position:t[0].position,normal:t[0].normal,uv:t[0].uv,indices:t[0].indices,results:t};for(var n=0,r=0,i=0,e=t.length;i<e;i++){var s=t[i],o=s.position,a=s.indices;n+=o.length,r+=a.length}for(var h={position:new Float32Array(n),normal:new Float32Array(n),uv:new Float32Array(n/3*2),indices:new Uint32Array(r),results:t},u=0,c=0,l=0,v=0,f=0,p=t.length;f<p;f++){var x=t[f],d=x.position,y=x.indices,g=x.normal,m=x.uv;h.position.set(d,u),h.normal.set(g,u),h.uv.set(m,v);for(var z=0,w=y.length;z<w;){var M=y[z]+c;h.indices[l]=M,l++,z++}v+=m.length,u+=d.length,c+=d.length/3}return h}function O(t){return 180*t/Math.PI}function U(t){return t/180*Math.PI}function q(t,n,r,i,e,s){var o=3*r,a=3*i,h=3*e,u=3*s,c=n[o],l=n[o+1],v=n[o+2],f=n[a],p=n[a+1],x=n[a+2],d=n[h],y=n[h+1],g=n[h+2],m=n[u],z=n[u+1],w=n[u+2];Math.abs(l-p)<Math.abs(c-f)?(t.push(c,1-v),t.push(f,1-x),t.push(d,1-g),t.push(m,1-w)):(t.push(l,1-v),t.push(p,1-x),t.push(y,1-g),t.push(z,1-w))}function R(t,n){n=Object.assign({},{depth:2},n);var r=t.map((function(t){for(var r=0,i=t.length;r<i;r++){var e=t[r];j(e),0===r?F(e)||(t[r]=e.reverse()):F(e)&&(t[r]=e.reverse()),B(e)&&e.splice(e.length-1,1)}var s=function(t,n){for(var r=function(t){var n=0,r=0,i=t.length;for(;r<i;)n+=t[r].length,r++;return n}(t),i=t.length,e=[],s=new Float32Array(2*r),o=[],a=[],h=3*r,u=2*r,c=n.depth,l=0,v=0,f=0,p=0;p<i;p++){var x=t[p];p>0&&e.push(l/2);for(var d=0,y=x.length;d<y;){var g=x[d],m=g[0],z=g[1];s[l++]=m,s[l++]=z,o[v]=m,o[v+1]=z,o[v+2]=c,o[h+v]=m,o[h+v+1]=z,o[h+v+2]=0,a[f]=m,a[f+1]=z,a[u+f]=m,a[u+f+1]=z,v+=3,f+=2,d++}}return{flatVertices:s,holes:e,points:o,count:r,uvs:a}}(t,n);return s.polygon=t,function(t,n){for(var r=[],i=t.count,e=0,s=n.length;e<s;e+=3){var o=n[e],a=n[e+1],h=n[e+2];r[e]=o,r[e+1]=a,r[e+2]=h;var u=s+e,c=i+o,l=i+a,v=i+h;r[u]=c,r[u+1]=l,r[u+2]=v}t.index=r}(s,Z(s.flatVertices,s.holes,2)),function(t,n){for(var r=t.points,i=t.index,e=t.polygon,s=t.uvs,o=n.depth,a=0,h=e.length;a<h;a++)for(var u=e[a],c=0,l=u.length;c<l;){var v=u[c],f=u[c+1];c===l-1&&(f=u[0]);var p=r.length/3,x=v[0],d=v[1],y=f[0],g=f[1];r.push(x,d,o,y,g,o,x,d,0,y,g,0);var m=p+2,z=p+3,w=p,M=p+1;i.push(m,w,z,w,M,z),q(s,r,m,z,w,M),c++}}(s,n),s.position=new Float32Array(s.points),s.indices=new Uint32Array(s.index),s.uv=new Float32Array(s.uvs),s.normal=E(s.indices,s.position),s})),i=I(r);return i.polygons=t,i}function j(t){B(t)||t.push(t[0])}function B(t){var n=t.length,r=t[0],i=r[0],e=r[1],s=t[n-1],o=s[0],a=s[1];return i===o&&e===a}function C(t,n){n=Object.assign({},{depth:2,lineWidth:1},n);var r=t.map((function(t){var r=function(t,n){var r=0,i=n.lineWidth/2,e=[],s=[],o=[],a=t.length,h=0;for(;h<a-1;){var u=t[h],c=t[h+1],l=c[1]-u[1],v=c[0]-u[0],f=0,p=O(Math.atan(l/v));if(r=p,0===h)f=p,f-=90;else{var x=t[h-1];k.x=x[0]-u[0],k.y=x[1]-u[1],H.x=c[0]-u[0],H.y=c[1]-u[1],f=p-T(k,H)/2}var d=N(U(f),i,u),y=d[0],g=d[1];e.push(y,g),W(y,u,c)?(s.push(y),o.push(g)):(s.push(g),o.push(y)),h++}var m=r,z=U(m-=90),w=t[a-2],M=t[a-1],b=N(z,i,M),A=b[0],P=b[1];e.push(A,P),W(A,w,M)?(s.push(A),o.push(P)):(s.push(P),o.push(A));return{offsetPoints:e,leftPoints:s,rightPoints:o}}(t,n);return r.line=t,function(t,n){var r=n.depth,i=[],e=[],s=[],o=t.leftPoints,a=t.rightPoints,h=0,u=o.length;for(;h<u;){var c=3*h,l=o[h],v=l[0],f=l[1],p=l[2];i[c]=v,i[c+1]=f,i[c+2]=r+p;var x=a[h],d=x[0],y=x[1],g=x[2],m=3*u+c;i[m]=d,i[m+1]=y,i[m+2]=r+g;var z=2*u*3+c;i[z]=v,i[z+1]=f,i[z+2]=p;var w=2*u*3+3*u+c;i[w]=d,i[w+1]=y,i[w+2]=g,h++}h=0,u=i.length;for(;h<u;){var M=i[h],b=i[h+1];s.push(M,b),h+=3}h=0,u=o.length;for(;h<u-1;){var A=h,P=h+1,S=A+u,V=P+u;e.push(A,S,P),e.push(S,V,P);var Z=h+2*u,F=Z+1,L=Z+u,_=F+u;e.push(Z,L,F),e.push(L,_,F),h++}t.index=e,t.points=i,t.uvs=s}(r,n),function(t,n){var r=t.points,i=t.index,e=t.leftPoints,s=t.rightPoints,o=t.uvs,a=n.depth,h=[e,s];function u(t,n){var e=r.length/3;r.push(t[0],t[1],a+t[2],n[0],n[1],a+n[2],t[0],t[1],t[2],n[0],n[1],n[2]);var s=e+2,h=e+3,u=e,c=e+1;i.push(s,u,h,u,c,h),q(o,r,s,h,u,c)}for(var c=0,l=h.length;c<l;c++){var v=h[c];c>0&&(v=(v=v.map((function(t){return t}))).reverse());for(var f=0,p=v.length-1;f<p;){u(v[f],v[f+1]),f++}}for(var x=e.length,d=[s[0],e[0],e[x-1],s[x-1]],y=0;y<d.length;y+=2){u(d[y],d[y+1])}}(r,n),r.position=new Float32Array(r.points),r.indices=new Uint32Array(r.index),r.uv=new Float32Array(r.uvs),r.normal=E(r.indices,r.position),r})),i=I(r);return i.lines=t,i}var k={x:0,y:0},H={x:0,y:0};function N(t,n,r){var i=r[0],e=r[1],s=r[2]||0,o=[i+Math.cos(t)*n,e+Math.sin(t)*n,s],a=t+=Math.PI;return[o,[i+Math.cos(a)*n,e+Math.sin(a)*n,s]]}var T=function(t,n){var r=t.x,i=t.y,e=n.x,s=n.y,o=r*e+i*s,a=r*s-i*e;return(Math.atan2(a,o)/Math.PI*180+360)%360};function W(t,n,r){var i=n[0],e=n[1],s=r[0],o=r[1];return(e-o)*t[0]+(s-i)*t[1]+i*o-s*e>0}function D(t,n){void 0===n&&(n={}),n=Object.assign({},{radius:1,height:2,radialSegments:6},n);for(var r=Math.round(Math.max(4,n.radialSegments)),i=n,e=i.radius,s=i.height,o=360/r/360*Math.PI*2,a=r+1,h=new Float32Array(3*a*2),u=t[0],c=t[1],l=0,v=0,f=3*a,p=2*a,x=[],d=[],y=-1;y<r;y++){var g=o*y,m=Math.cos(g)*e+u,z=Math.sin(g)*e+c;h[l]=m,h[l+1]=z,h[l+2]=0,h[l+f]=m,h[l+1+f]=z,h[l+2+f]=s;var w,M;w=.5+m/e/2,M=.5+z/e/2,d[v]=w,d[v+1]=M,d[v+p]=w,d[v+1+p]=M,l+=3,v+=2,y>1&&x.push(0,y-1,y)}h[l-=3]=h[0],h[l+1]=h[1],h[l+2]=h[2];var b=h.length;h[b-3]=h[0],h[b-2]=h[1],h[b-1]=s;for(var A=x.length,P=0;P<A;P++){var S=x[P];x.push(S+a)}var V=new Float32Array(2*(3*a*2-6)),Z=-1;l=2*a,v=0;for(var F=0,L=h.length/2;F<L-3;F+=3){var _=h[F],I=h[F+1],O=h[F+3],U=h[F+4];V[++Z]=_,V[++Z]=I,V[++Z]=s,V[++Z]=O,V[++Z]=U,V[++Z]=s,V[++Z]=_,V[++Z]=I,V[++Z]=0,V[++Z]=O,V[++Z]=U,V[++Z]=0;var q=l+2,R=l+3,j=l,B=l+1;x.push(j,q,B,q,R,B),l+=4;var C=v/a,k=(v+1)/a;d.push(C,s/e/2,k,s/e/2,C,0,k,0),v++}var H=new Float32Array(h.length+V.length);H.set(h,0),H.set(V,h.length);var N=E(x,H);return{points:h,indices:new Uint32Array(x),position:H,normal:N,uv:new Float32Array(d)}}var Q=function(){function t(t,n,r){void 0===t&&(t=0),void 0===n&&(n=0),void 0===r&&(r=0),this.x=t,this.y=n,this.z=r}var n=t.prototype;return n.set=function(t,n,r){return void 0===r&&(r=this.z),this.x=t,this.y=n,this.z=r,this},n.clone=function(){return new this.constructor(this.x,this.y,this.z)},n.copy=function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this},n.add=function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this},n.addScalar=function(t){return this.x+=t,this.y+=t,this.z+=t,this},n.addVectors=function(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this},n.addScaledVector=function(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this},n.sub=function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this},n.subScalar=function(t){return this.x-=t,this.y-=t,this.z-=t,this},n.subVectors=function(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this},n.multiply=function(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this},n.multiplyScalar=function(t){return this.x*=t,this.y*=t,this.z*=t,this},n.multiplyVectors=function(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this},n.applyMatrix4=function(t){var n=this.x,r=this.y,i=this.z,e=t.elements,s=1/(e[3]*n+e[7]*r+e[11]*i+e[15]);return this.x=(e[0]*n+e[4]*r+e[8]*i+e[12])*s,this.y=(e[1]*n+e[5]*r+e[9]*i+e[13])*s,this.z=(e[2]*n+e[6]*r+e[10]*i+e[14])*s,this},n.divide=function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this},n.divideScalar=function(t){return this.multiplyScalar(1/t)},n.min=function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this},n.max=function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this},n.clamp=function(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this},n.clampScalar=function(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this},n.clampLength=function(t,n){var r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(n,r)))},n.dot=function(t){return this.x*t.x+this.y*t.y+this.z*t.z},n.lengthSq=function(){return this.x*this.x+this.y*this.y+this.z*this.z},n.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},n.normalize=function(){return this.divideScalar(this.length()||1)},n.setLength=function(t){return this.normalize().multiplyScalar(t)},n.lerp=function(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this},n.lerpVectors=function(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this},n.cross=function(t){return this.crossVectors(this,t)},n.crossVectors=function(t,n){var r=t.x,i=t.y,e=t.z,s=n.x,o=n.y,a=n.z;return this.x=i*a-e*o,this.y=e*s-r*a,this.z=r*o-i*s,this},n.distanceTo=function(t){return Math.sqrt(this.distanceToSquared(t))},n.equals=function(t){return t.x===this.x&&t.y===this.y&&t.z===this.z},n.fromArray=function(t,n){return void 0===n&&(n=0),this.x=t[n],this.y=t[n+1],this.z=t[n+2],this},n.random=function(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this},t}(),X=function(){function t(){this.pos=new Q,this.dir=new Q,this.right=new Q,this.up=new Q,this.dist=0,this.widthScale=1,this.sharp=!1}var n=t.prototype;return n.lerpPathPoints=function(t,n,r){this.pos.lerpVectors(t.pos,n.pos,r),this.dir.lerpVectors(t.dir,n.dir,r),this.up.lerpVectors(t.up,n.up,r),this.right.lerpVectors(t.right,n.right,r),this.dist=(n.dist-t.dist)*r+t.dist,this.widthScale=(n.widthScale-t.widthScale)*r+t.widthScale},n.copy=function(t){this.pos.copy(t.pos),this.dir.copy(t.dir),this.up.copy(t.up),this.right.copy(t.right),this.dist=t.dist,this.widthScale=t.widthScale},t}(),G=function(){function t(t,n,r,i,e,s,o,a,h,u,c,l,v,f,p,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],void 0!==t&&this.set(t,n,r,i,e,s,o,a,h,u,c,l,v,f,p,x)}var n=t.prototype;return n.set=function(t,n,r,i,e,s,o,a,h,u,c,l,v,f,p,x){var d=this.elements;return d[0]=t,d[4]=n,d[8]=r,d[12]=i,d[1]=e,d[5]=s,d[9]=o,d[13]=a,d[2]=h,d[6]=u,d[10]=c,d[14]=l,d[3]=v,d[7]=f,d[11]=p,d[15]=x,this},n.multiply=function(t){return this.multiplyMatrices(this,t)},n.makeRotationAxis=function(t,n){var r=Math.cos(n),i=Math.sin(n),e=1-r,s=t.x,o=t.y,a=t.z,h=e*s,u=e*o;return this.set(h*s+r,h*o-i*a,h*a+i*o,0,h*o+i*a,u*o+r,u*a-i*s,0,h*a-i*o,u*a+i*s,e*a*a+r,0,0,0,0,1),this},n.equals=function(t){for(var n=this.elements,r=t.elements,i=0;i<16;i++)if(n[i]!==r[i])return!1;return!0},t}();function J(t,n){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},J(t,n)}function K(t,n,r,i){return function(t,n){var r=1-t;return r*r*n}(t,n)+function(t,n){return 2*(1-t)*t*n}(t,r)+function(t,n){return t*t*n}(t,i)}var Y=function(t){var n,r;function i(n,r,i){var e;return void 0===n&&(n=new Q),void 0===r&&(r=new Q),void 0===i&&(i=new Q),(e=t.call(this)||this).isQuadraticBezierCurve3=!0,e.type="QuadraticBezierCurve3",e.v0=n,e.v1=r,e.v2=i,e}return r=t,(n=i).prototype=Object.create(r.prototype),n.prototype.constructor=n,J(n,r),i.prototype.getPoint=function(t,n){void 0===n&&(n=new Q);var r=n,i=this.v0,e=this.v1,s=this.v2;return r.set(K(t,i.x,e.x,s.x),K(t,i.y,e.y,s.y),K(t,i.z,e.z,s.z)),r},i}(function(){function t(){this.type="Curve",this.arcLengthDivisions=200}var n=t.prototype;return n.getPoint=function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},n.getPointAt=function(t,n){var r=this.getUtoTmapping(t);return this.getPoint(r,n)},n.getPoints=function(t){void 0===t&&(t=5);for(var n=[],r=0;r<=t;r++)n.push(this.getPoint(r/t));return n},n.getLength=function(){var t=this.getLengths();return t[t.length-1]},n.getLengths=function(t){if(void 0===t&&(t=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var n,r=[],i=this.getPoint(0),e=0;r.push(0);for(var s=1;s<=t;s++)e+=(n=this.getPoint(s/t)).distanceTo(i),r.push(e),i=n;return this.cacheArcLengths=r,r},n.getUtoTmapping=function(t,n){var r,i=this.getLengths(),e=0,s=i.length;r=n||t*i[s-1];for(var o,a=0,h=s-1;a<=h;)if((o=i[e=Math.floor(a+(h-a)/2)]-r)<0)a=e+1;else{if(!(o>0)){h=e;break}h=e-1}if(i[e=h]===r)return e/(s-1);var u=i[e];return(e+(r-u)/(i[e+1]-u))/(s-1)},t}()),$=new Q,tt=new Q,nt=new Q,rt=new G,it=new Y;var et=function(){function t(){this.array=[],this.count=0}var n=t.prototype;return n.set=function(t,n,r,i,e){if(void 0===n&&(n=.1),void 0===r&&(r=10),void 0===i&&(i=null),void 0===e&&(e=!1),(t=t.slice(0)).length<2)return console.warn("PathPointList: points length less than 2."),void(this.count=0);e&&!t[0].equals(t[t.length-1])&&t.push((new Q).copy(t[0]));for(var s=0,o=t.length;s<o;s++)if(0===s)this._start(t[s],t[s+1],i);else if(s===o-1)if(e){this._corner(t[s],t[1],n,r,i);var a=this.array[0].dist;this.array[0].copy(this.array[this.count-1]),this.array[0].dist=a}else this._end(t[s]);else this._corner(t[s],t[s+1],n,r,i)},n.distance=function(){return this.count>0?this.array[this.count-1].dist:0},n._getByIndex=function(t){return this.array[t]||(this.array[t]=new X),this.array[t]},n._start=function(t,n,r){this.count=0;var i=this._getByIndex(this.count);if(i.pos.copy(t),i.dir.subVectors(n,t),r)i.up.copy(r);else{var e=Number.MAX_VALUE,s=Math.abs(i.dir.x),o=Math.abs(i.dir.y),a=Math.abs(i.dir.z);s<e&&(e=s,i.up.set(1,0,0)),o<e&&(e=o,i.up.set(0,1,0)),a<e&&i.up.set(0,0,1)}i.right.crossVectors(i.dir,i.up).normalize(),i.up.crossVectors(i.right,i.dir).normalize(),i.dist=0,i.widthScale=1,i.sharp=!1,i.dir.normalize(),this.count++},n._end=function(t){var n=this.array[this.count-1],r=this._getByIndex(this.count);r.pos.copy(t),r.dir.subVectors(t,n.pos);var i=r.dir.length();r.dir.normalize(),r.up.copy(n.up);var e=$.crossVectors(n.dir,r.dir);if(e.length()>Number.EPSILON){e.normalize();var s=Math.acos(Math.min(Math.max(n.dir.dot(r.dir),-1),1));r.up.applyMatrix4(rt.makeRotationAxis(e,s))}r.right.crossVectors(r.dir,r.up).normalize(),r.dist=n.dist+i,r.widthScale=1,r.sharp=!1,this.count++},n._corner=function(t,n,r,i,e){if(r>0&&i>0){for(var s=function(t,n,r,i,e,s){var o=$.subVectors(n,t),a=tt.subVectors(r,n),h=o.length(),u=a.length();o.normalize(),a.normalize();var c=Math.min(.999999*(e?h/2:h),i);s.v0.copy(n).sub(o.multiplyScalar(c)),s.v1.copy(n);var l=Math.min(u/2*.999999,i);return s.v2.copy(n).add(a.multiplyScalar(l)),s}(this.array[this.count-1].pos,t,n,r,this.count-1==0,it),o=s.getPoints(i),a=0;a<i;a++)this._sharpCorner(o[a],o[a+1],e,0===a?1:0);o[i].equals(n)||this._sharpCorner(o[i],n,e,2)}else this._sharpCorner(t,n,e,0,!0)},n._sharpCorner=function(t,n,r,i,e){void 0===i&&(i=0),void 0===e&&(e=!1);var s=this.array[this.count-1],o=this._getByIndex(this.count),a=$.subVectors(t,s.pos),h=tt.subVectors(n,t),u=a.length();if(a.normalize(),h.normalize(),o.pos.copy(t),1===i?o.dir.copy(a):2===i?o.dir.copy(h):(o.dir.addVectors(a,h),o.dir.normalize()),r)1===o.dir.dot(r)?o.right.crossVectors(h,r).normalize():o.right.crossVectors(o.dir,r).normalize(),o.up.crossVectors(o.right,o.dir).normalize();else{o.up.copy(s.up);var c=nt.crossVectors(s.dir,o.dir);if(c.length()>Number.EPSILON){c.normalize();var l=Math.acos(Math.min(Math.max(s.dir.dot(o.dir),-1),1));o.up.applyMatrix4(rt.makeRotationAxis(c,l))}o.right.crossVectors(o.dir,o.up).normalize()}o.dist=s.dist+u;var v=a.dot(h);o.widthScale=Math.min(1/Math.sqrt((1+v)/2),1.415)||1,o.sharp=Math.abs(v-1)>.05&&e,this.count++},t}(),st=new Q(0,0,1);function ot(t,n){n=Object.assign({},{lineWidth:1,cornerRadius:0,cornerSplit:10},n);var r=t.map((function(t){var r=t.map((function(t){var n=t[0],r=t[1],i=t[2];return new Q(n,r,i||0)})),i=new et;i.set(r,n.cornerRadius,n.cornerSplit,st);var e=function(t,n){var r=n.lineWidth||.1,i=1,e=r/2,s=r,o=t.distance(),a=i*o;if(0===o)return null;var h,u=e/s,c=0,l=[],v=[],f=[],p=[],x=0,d=new Q,y=new Q,g=new Q,m=new Q,z=new Q,w=new Q;function M(t){var n=0===l.length,r=t.sharp&&!n,i=t.dist/s,o=t.dir,a=t.up,h=t.right;if(d.copy(h).multiplyScalar(e*t.widthScale),y.copy(h).multiplyScalar(-e*t.widthScale),d.add(t.pos),y.add(t.pos),r){g.fromArray(l,l.length-6).sub(y),m.fromArray(l,l.length-3).sub(d);var M,b,A=g.length()-m.length();A>0?(M=g,b=y):(M=m,b=d),z.copy(M).setLength(Math.abs(A)).add(b);var P=w.copy(b).sub(z).normalize().dot(o)*w.copy(b).sub(z).length()*2;w.copy(o).setLength(P).add(z),A>0?(l.push(z.x,z.y,z.z,d.x,d.y,d.z,y.x,y.y,y.z,d.x,d.y,d.z,w.x,w.y,w.z,d.x,d.y,d.z),x+=6,p.push(x-6,x-8,x-7,x-6,x-7,x-5,x-4,x-6,x-5,x-2,x-4,x-1),c+=12):(l.push(y.x,y.y,y.z,z.x,z.y,z.z,y.x,y.y,y.z,d.x,d.y,d.z,y.x,y.y,y.z,w.x,w.y,w.z),x+=6,p.push(x-6,x-8,x-7,x-6,x-7,x-5,x-6,x-5,x-3,x-2,x-3,x-1),c+=12),v.push(a.x,a.y,a.z,a.x,a.y,a.z,a.x,a.y,a.z,a.x,a.y,a.z,a.x,a.y,a.z,a.x,a.y,a.z),f.push(i-u,0,i-u,1,i,0,i,1,i+u,0,i+u,1)}else l.push(y.x,y.y,y.z,d.x,d.y,d.z),v.push(a.x,a.y,a.z,a.x,a.y,a.z),f.push(i,0,i,1),x+=2,n||(p.push(x-2,x-4,x-3,x-2,x-3,x-1),c+=6)}if(a>0)for(var b=0;b<t.count;b++){var A=t.array[b];if(A.dist>a){var P=t.array[b-1];h=new X;var S=(a-P.dist)/(A.dist-P.dist);h.lerpPathPoints(P,A,S),M(h);break}M(A)}else h=t.array[0];return{points:l,normal:v,uvs:f,index:p,count:c}}(i,n);return e.line=t,e.position=new Float32Array(e.points),e.indices=new Uint32Array(e.index),e.uv=new Float32Array(e.uvs),e.normal=new Float32Array(e.normal),e})),i=I(r);return i.lines=t,i}var at={x:0,y:0},ht={x:0,y:0};function ut(t,n,r,i){for(var e=t.length,s=0;s<e;s++){var o=t[s].data;n=t[s].center||n;for(var a=0,h=o.length;a<h;a++)for(var u=o[a],c=0,l=u.length;c<l;c++)t[s].data[a][c]=ct(u[c],n,r,i)}}function ct(t,n,r,i,e){for(var s,o=[],a=e?3:2,h=0,u=(s=r?new Float64Array(t):new Float32Array(t)).length;h<u;h+=a){var c=s[h],l=s[h+1],v=s[h+2];if(n&&r&&i){at.x=c,at.y=l;var f=wt(at,ht);at.x=f.x,at.y=f.y,c=(f=Mt(i,at,r,ht)).x,l=f.y,c-=n[0],l-=n[1]}e?o.push([c,l,v]):o.push([c,l])}return o}function lt(t,n){void 0===n&&(n=1);for(var r=t.length,i=[],e=[],s=0,o=0;o<r;o++){var a=void 0;1===n?a=vt(t[o]):2===n?a=ft(t[o]):3===n&&(a=pt(t[o]));var h=t[o].bottomHeight||0,u=a.position;e.push(a);var c=u.length/3;i[o]={position:{middleZ:h+(t[o].height||0)/2,count:c,start:s,end:s+3*c},hide:!1},s+=3*c}var l=dt(e),v=l.position,f=l.normal,p=l.uv,x=l.indices;return{position:v.buffer,normal:f.buffer,uv:p.buffer,indices:x.buffer,geometriesAttributes:i}}function vt(t){var n=t.data,r=t.height,i=t.bottomHeight,e=R(n,{depth:r}),s=e.position,o=e.normal,a=e.uv,h=e.indices;return yt(s,i),{position:s,normal:o,uv:a,indices:h}}function ft(t){var n=t.data,r=t.height,i=t.width,e=t.bottomHeight,s=C(n,{lineWidth:i,depth:r}),o=s.position,a=s.normal,h=s.uv,u=s.indices;return yt(o,e),{position:o,normal:a,uv:h,indices:u}}function pt(t){var n=t.data,r=t.cornerRadius,i=t.width,e=t.bottomHeight,s=ot(n,{lineWidth:i,cornerRadius:r}),o=s.position,a=s.normal,h=s.uv,u=s.indices;return yt(o,e),{position:o,normal:a,uv:h,indices:u}}function xt(t,n){for(var r=new Float32Array(n),i=0,e=0;e<t.length;++e)r.set(t[e],i),i+=t[e].length;return r}function dt(t){for(var n={},r={},i=0;i<t.length;++i){var e=t[i];for(var s in e)void 0===n[s]&&(n[s]=[],r[s]=0),n[s].push(e[s]),r[s]+=e[s].length}var o={},a=0,h=[];for(var u in n)if("indices"===u)for(var c=n[u],l=0,v=c.length;l<v;l++){for(var f=c[l],p=0,x=f.length;p<x;p++)h.push(f[p]+a);a+=n.position[l].length/3}else{var d=xt(n[u],r[u]);if(!d)return null;o[u]=d}return o.indices=new Uint32Array(h),o}function yt(t,n){if(void 0!==n&&"number"==typeof n&&0!==n)for(var r=0,i=t.length;r<i;r+=3)t[r+2]+=n}function gt(t){for(var n=[],r=0,i=t.length;r<i;r+=7){var e=t[r],s=t[r+1],o=t[r+2],a=t[r+3],h=t[r+4],u=t[r+5];n.push({radialSegments:o,radius:a,height:h,altitude:u,center:[e,s]})}for(var c=n.length,l=[],v=[],f=0,p=0;p<c;p++){var x=D(n[p].center||[0,0],n[p]),d=x.position;if(n[p].altitude)for(var y=n[p].altitude,g=0,m=d.length;g<m;g+=3)x[g+2]+=y;v.push(x);var z=d.length/3;l[p]={position:{middleZ:n[p].height/2,count:z,start:f,end:f+3*z},hide:!1},f+=3*z}var w=dt(v),M=w.position,b=w.normal,A=w.uv,P=w.indices;return{position:M.buffer,normal:b.buffer,uv:A.buffer,indices:P.buffer,geometriesAttributes:l}}var mt=Math.PI/180,zt=6378137*Math.PI/180;function wt(t,n){var r,i=85.0511287798,e=t.x,s=Math.max(Math.min(i,t.y),-i);r=0===s?0:Math.log(Math.tan((90+s)*mt/2))/mt;var o=e*zt,a=r*zt;return n?(n.x=o,n.y=a,n):{x:o,y:a}}function Mt(t,n,r,i){var e=t[0]*(n.x-t[2])/r,s=-t[1]*(n.y-t[3])/r;return i?(i.x=e,i.y=s,i):{x:e,y:s}}function bt(t){void 0===t&&(t=[]);for(var n=t.length,r=new Float32Array(3*n),i=0;i<n;i++){var e=t[i],s=3*i;r[s]=e[0],r[s+1]=e[1],r[s+2]=e[2]}return r}function At(t){for(var n=new Float32Array(2*t.length-6),r=0,i=0,e=t.length/3;i<e;i++){var s=t[3*i],o=t[3*i+1],a=t[3*i+2];if(i>0&&i<e-1){var h=3*r;n[h]=s,n[h+1]=o,n[h+2]=a,r++}var u=3*r;n[u]=s,n[u+1]=o,n[u+2]=a,r++}return n}function Pt(t){var n=0,r=t.length;if(1===r)return t[0];for(var i=0;i<r;i++)n+=t[i].length;for(var e=new Float32Array(n),s=0,o=0;o<r;o++)e.set(t[o],s),s+=t[o].length;return e}t.initialize=function(){},t.onmessage=function(t,n){var r=t.data,i=r.type,e=r.datas,s=r.glRes,o=r.matrix,a=r.center;if("ExtrudePolygons"===i){ut(e,a,s,o);var h=lt(e);n(null,h,[h.position,h.normal,h.uv,h.indices])}else if("ExtrudeLines"===i||"Paths"===i){for(var u=0,c=e.length;u<c;u++)for(var l=0,v=e[u].data.length;l<v;l++)e[u].data[l]=ct(e[u].data[l],e[u].center||a,s,o,!0);var f=lt(e,"ExtrudeLines"===i?2:3);n(null,f,[f.position,f.normal,f.uv,f.indices])}else if("ExtrudePolygon"===i){var p=[],x=[];e.forEach((function(t){var n=[t];ut(n,a,s,o);var r=lt(n),i=r.position,e=r.normal,h=r.uv,u=r.indices;p.push({id:t.id,position:i,normal:e,uv:h,indices:u}),x.push(i,e,h,u)})),n(null,p,x)}else if("Line"===i||"FatLine"===i){for(var d=[],y=[],g=0,m=e.length;g<m;g++){for(var z=[],w=0,M=e[g].data.length;w<M;w++){e[g].data[w]=ct(e[g].data[w],e[g].center||a,s,o,!0);var b=bt(e[g].data[w]);z.push(At(b))}var A=Pt(z);yt(A,e[g].bottomHeight),d.push({id:e[g].id,position:A.buffer}),y.push(A.buffer)}n(null,d,y)}else if("Lines"===i||"FatLines"===i){for(var P=0,S=[],V=[],Z=0,F=[],L=0,_=e.length;L<_;L++){for(var E=0,I=0,O=e[L].data.length;I<O;I++){e[L].data[I]=ct(e[L].data[I],e[L].center||a,s,o,!0);var U=bt(e[L].data[I]);yt(U,e[L].bottomHeight),E+=U.length/3*2-2,F.push(At(U))}var q=E;S[L]=[P,P+q],P+=q,V[L]={position:{count:E,start:Z,end:Z+3*E},hide:!1},"FatLines"===i&&(V[L].instanceStart={count:E,start:Z,end:Z+3*E},V[L].instanceEnd={count:E,start:Z,end:Z+3*E}),Z+=3*E}var R=Pt(F);n(null,{id:e.id,position:R.buffer,geometriesAttributes:V,faceMap:S},[R.buffer])}else if("ExtrudeLine"===i||"Path"===i){for(var j=0,B=e.length;j<B;j++)for(var C=0,k=e[j].data.length;C<k;C++)e[j].data[C]=ct(e[j].data[C],e[j].center||a,s,o,!0);var H=[],N=[];e.forEach((function(t){var n=lt([t],"ExtrudeLine"===i?2:3),r=n.position,e=n.normal,s=n.uv,o=n.indices;H.push({id:t.id,position:r,normal:e,uv:s,indices:o}),N.push(r,e,s,o)})),n(null,H,N)}else if("Bar"===i){for(var T=[],W=[],D=(e=new Float32Array(e)).length/7,Q=0;Q<D;){var X=e.slice(7*Q,7*(Q+1)),G=gt(X),J=G.position,K=G.normal,Y=G.uv,$=G.indices;T.push({id:parseInt(X[6]),position:J,normal:K,uv:Y,indices:$}),W.push(J,K,Y,$),Q++}n(null,T,W)}else if("Bars"===i){var tt=gt(e=new Float32Array(e));n(null,tt,[tt.position,tt.normal,tt.uv,tt.indices])}else console.error("No processing logic found for type:"+i)},Object.defineProperty(t,"__esModule",{value:!0})})`;
const workerName = '__maptalks.three__';

export function getWorkerName() {
    return workerName;
}

export function getWorkerCode() {
    return workerCode;
}
