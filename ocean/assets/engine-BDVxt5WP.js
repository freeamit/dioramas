import{a as e,n as t,o as n,r,t as i}from"./index-D-2qjgXo.js";import{$ as a,A as o,B as s,C as c,Ct as l,D as u,Dt as d,E as f,Et as p,F as m,G as h,H as g,I as _,J as v,K as y,M as ee,O as b,P as te,Q as x,R as ne,S as re,St as ie,T as ae,Tt as S,U as oe,V as se,W as C,X as w,Y as ce,Z as T,_ as le,_t as E,a as ue,at as de,b as D,bt as fe,c as pe,ct as O,d as me,dt as he,et as ge,f as k,ft as _e,g as ve,gt as A,h as ye,ht as be,i as j,it as xe,j as Se,k as Ce,l as we,lt as Te,m as M,mt as Ee,n as De,nt as Oe,o as ke,ot as Ae,p as N,pt as je,q as P,r as Me,rt as Ne,s as Pe,st as F,t as Fe,tt as Ie,u as Le,ut as Re,v as ze,vt as Be,w as Ve,wt as I,x as L,xt as He,y as Ue,yt as We,z as Ge}from"./seaplane-CpQLP56G.js";var Ke={type:`change`},R={type:`start`},qe={type:`end`},z=new Re,Je=new Ne,Ye=Math.cos(70*P.DEG2RAD),B=new S,V=2*Math.PI,H={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},U=1e-6,Xe=class extends re{constructor(e,t=null){super(e,t),this.state=H.NONE,this.target=new S,this.cursor=new S,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:y.ROTATE,MIDDLE:y.DOLLY,RIGHT:y.PAN},this.touches={ONE:ie.ROTATE,TWO:ie.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new S,this._lastQuaternion=new Ae,this._lastTargetPosition=new S,this._quat=new Ae().setFromUnitVectors(e.up,new S(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new He,this._sphericalDelta=new He,this._scale=1,this._panOffset=new S,this._rotateStart=new I,this._rotateEnd=new I,this._rotateDelta=new I,this._panStart=new I,this._panEnd=new I,this._panDelta=new I,this._dollyStart=new I,this._dollyEnd=new I,this._dollyDelta=new I,this._dollyDirection=new S,this._mouse=new I,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Qe.bind(this),this._onPointerDown=Ze.bind(this),this._onPointerUp=W.bind(this),this._onContextMenu=at.bind(this),this._onMouseWheel=tt.bind(this),this._onKeyDown=nt.bind(this),this._onTouchStart=rt.bind(this),this._onTouchMove=it.bind(this),this._onMouseDown=$e.bind(this),this._onMouseMove=et.bind(this),this._interceptControlDown=ot.bind(this),this._interceptControlUp=st.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=H.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),e.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ke),this.update(),this.state=H.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;B.copy(t).sub(this.target),B.applyQuaternion(this._quat),this._spherical.setFromVector3(B),this.autoRotate&&this.state===H.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=V:n>Math.PI&&(n-=V),r<-Math.PI?r+=V:r>Math.PI&&(r-=V),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(B.setFromSpherical(this._spherical),B.applyQuaternion(this._quatInverse),t.copy(this.target).add(B),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=B.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new S(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new S(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=B.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(z.origin.copy(this.object.position),z.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(z.direction))<Ye?this.object.lookAt(this.target):(Je.setFromNormalAndCoplanarPoint(this.object.up,this.target),z.intersectPlane(Je,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>U||8*(1-this._lastQuaternion.dot(this.object.quaternion))>U||this._lastTargetPosition.distanceToSquared(this.target)>U?(this.dispatchEvent(Ke),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?V/60/60*this.autoRotateSpeed:V/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){B.setFromMatrixColumn(t,0),B.multiplyScalar(-e),this._panOffset.add(B)}_panUp(e,t){this.screenSpacePanning===!0?B.setFromMatrixColumn(t,1):(B.setFromMatrixColumn(t,0),B.crossVectors(this.object.up,B)),B.multiplyScalar(e),this._panOffset.add(B)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;B.copy(r).sub(this.target);let i=B.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(V*this._rotateDelta.x/t.clientHeight),this._rotateUp(V*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(V*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-V*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(V*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-V*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(V*this._rotateDelta.x/t.clientHeight),this._rotateUp(V*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new I,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Ze(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function Qe(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function W(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(qe),this.state=H.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function $e(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case y.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=H.DOLLY;break;case y.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=H.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=H.ROTATE}break;case y.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=H.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=H.PAN}break;default:this.state=H.NONE}this.state!==H.NONE&&this.dispatchEvent(R)}function et(e){switch(this.state){case H.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case H.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case H.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function tt(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===H.NONE&&(e.preventDefault(),this.dispatchEvent(R),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(qe))}function nt(e){this.enabled!==!1&&this._handleKeyDown(e)}function rt(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=H.TOUCH_ROTATE;break;case ie.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=H.TOUCH_PAN;break;default:this.state=H.NONE}break;case 2:switch(this.touches.TWO){case ie.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=H.TOUCH_DOLLY_PAN;break;case ie.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=H.TOUCH_DOLLY_ROTATE;break;default:this.state=H.NONE}break;default:this.state=H.NONE}this.state!==H.NONE&&this.dispatchEvent(R)}function it(e){switch(this._trackPointer(e),this.state){case H.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case H.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case H.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case H.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=H.NONE}}function at(e){this.enabled!==!1&&e.preventDefault()}function ot(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function st(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var ct=new ye;ct.setAttribute(`position`,new Se([-1,-1,0,3,-1,0,-1,3,0],3));var lt=new Ie(-1,1,1,-1,0,1),G=`
in vec3 position;
out vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`;function K(e,t={},n={}){return new Te({glslVersion:te,vertexShader:G,fragmentShader:e,uniforms:t,depthTest:!1,depthWrite:!1,...n})}var ut=class{constructor(e){this.mesh=new w(ct,e),this.mesh.frustumCulled=!1}get material(){return this.mesh.material}set material(e){this.mesh.material=e}render(e,t){e.setRenderTarget(t),e.render(this.mesh,lt)}},dt=[64,128,256].includes(globalThis.__OD_FFT_N)?globalThis.__OD_FFT_N:256,q=Math.round(Math.log2(dt)),J=[600,85,12,2.1],ft=9.81,pt=74e-6,mt=300,ht=`
precision highp float;
precision highp int;
#define N ${dt}
#define PI 3.14159265359
#define G ${ft.toFixed(2)}
#define ST ${pt.toExponential()}
vec2 cmul(vec2 a, vec2 b) { return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x); }
float omega(float k) { return sqrt(G * k + ST * k * k * k); }
`,gt=ht+`
uniform vec4 uSpecA[2]; // scale, angle, spreadBlend, swell
uniform vec4 uSpecB[2]; // alpha, peakOmega, gamma, shortWavesFade
uniform vec4 uLength;
uniform vec4 uCut;      // c0 hi, c1 hi, c2 hi, -
uniform float uCapFade; // short-wave fade for cascade 3 (cascades 0-2 use uSpecB.w)
uniform uint uSeed;
out vec4 outColor;

uvec2 pcg2d(uvec2 v) {
  v = v * 1664525u + 1013904223u;
  v.x += v.y * 1664525u; v.y += v.x * 1664525u;
  v ^= v >> 16u;
  v.x += v.y * 1664525u; v.y += v.x * 1664525u;
  v ^= v >> 16u;
  return v;
}

vec2 gauss(ivec2 id, int c) {
  uvec2 h = pcg2d(uvec2(id) + uvec2(uint(c) * 7919u, uint(c) * 104729u) + uSeed);
  float u1 = (float(h.x) + 1.0) / 4294967296.0;
  float u2 = float(h.y) / 4294967296.0;
  float r = sqrt(-2.0 * log(u1));
  return r * vec2(cos(2.0 * PI * u2), sin(2.0 * PI * u2));
}

float jonswap(float w, vec4 a, vec4 b) {
  float wp = b.y;
  float sigma = w <= wp ? 0.07 : 0.09;
  float r = exp(-(w - wp) * (w - wp) / (2.0 * sigma * sigma * wp * wp));
  float iw = 1.0 / w;
  float q = wp * iw;
  return a.x * b.x * G * G * iw * iw * iw * iw * iw * exp(-1.25 * q * q * q * q) * pow(b.z, r);
}

float normalisation(float s) {
  float s2 = s * s, s3 = s2 * s, s4 = s3 * s;
  if (s < 5.0) return -0.000564 * s4 + 0.00776 * s3 - 0.044 * s2 + 0.192 * s + 0.163;
  return -4.80e-08 * s4 + 1.07e-05 * s3 - 9.53e-04 * s2 + 5.90e-02 * s + 3.93e-01;
}

float directional(float theta, float w, vec4 a, vec4 b) {
  float x = w / b.y;
  float s = x > 1.0 ? 9.77 * pow(x, -2.5) : 6.97 * pow(x, 5.0);
  s += 16.0 * tanh(min(x, 20.0)) * a.w * a.w;
  float t = theta - a.y;
  float cosine2s = normalisation(s) * pow(abs(cos(0.5 * t)), 2.0 * s);
  // one-sided: waves travel downwind only (the cos^2 term and the back lobe of
  // a wide cos-2s create counter-propagating pairs that read as standing waves)
  float fwd = smoothstep(-0.15, 0.45, cos(t));
  return mix(2.0 / PI * cos(t) * cos(t), cosine2s, a.z) * fwd * 1.15;
}

vec2 h0(ivec2 id, int c) {
  float L = uLength[c];
  float dk = 2.0 * PI / L;
  vec2 k = vec2(id - N / 2) * dk;
  float kl = length(k);
  float lo = c == 0 ? 1e-4 : uCut[c - 1];
  float hi = c == 3 ? 1e4 : uCut[c];
  if (kl < lo || kl > hi) return vec2(0.0);
  float w = omega(kl);
  float dwdk = (G + 3.0 * ST * kl * kl) / (2.0 * w);
  float theta = atan(k.y, k.x);
  float S = 0.0;
  for (int i = 0; i < 2; i++) {
    if (uSpecA[i].x <= 0.0) continue;
    float fade = c == 3 ? uCapFade : uSpecB[i].w;
    S += jonswap(w, uSpecA[i], uSpecB[i]) * directional(theta, w, uSpecA[i], uSpecB[i])
       * exp(-fade * fade * kl * kl);
  }
  return gauss(id, c) * sqrt(2.0 * S * dwdk / kl * dk * dk);
}

void main() {
  ivec2 p = ivec2(gl_FragCoord.xy);
  int c = p.y / N;
  ivec2 id = ivec2(p.x, p.y - c * N);
  vec2 a = h0(id, c);
  vec2 b = h0((N - id) % N, c);
  outColor = vec4(a, b.x, -b.y); // h0(k), conj(h0(-k))
}`,_t=ht+`
uniform highp sampler2D uH0;
uniform vec4 uLength;
uniform float uTime;
layout(location = 0) out vec4 out0;
layout(location = 1) out vec4 out1;

// two real fields packed as one complex spectrum: IFFT(A + iB) = a + ib
vec2 pack2(vec2 a, vec2 b) { return vec2(a.x - b.y, a.y + b.x); }

void main() {
  ivec2 p = ivec2(gl_FragCoord.xy);
  int c = p.y / N;
  vec2 k = vec2(ivec2(p.x, p.y - c * N) - N / 2) * (2.0 * PI / uLength[c]);
  float kl = length(k);
  float ik = kl > 1e-6 ? 1.0 / kl : 0.0;
  const float W0 = 2.0 * PI / ${mt.toFixed(1)};
  // ω = n·W0; phase reduced to [0, 2π) before sin/cos (the capillary cascade reaches ω ≈ 130)
  float ph = 2.0 * PI * fract(floor(omega(kl) / W0) * (uTime / ${mt.toFixed(1)}));
  vec2 e = vec2(cos(ph), sin(ph));
  vec4 h0 = texelFetch(uH0, p, 0);
  vec2 h = cmul(h0.xy, e) + cmul(h0.zw, vec2(e.x, -e.y));
  vec2 ih = vec2(-h.y, h.x);

  vec2 dx = ih * k.x * ik, dz = ih * k.y * ik;
  vec2 dxdx = -h * k.x * k.x * ik, dzdz = -h * k.y * k.y * ik, dxdz = -h * k.x * k.y * ik;
  vec2 dydx = ih * k.x, dydz = ih * k.y;

  out0 = vec4(pack2(dx, dz), pack2(h, dxdz));
  out1 = vec4(pack2(dydx, dydz), pack2(dxdx, dzdz));
}`,vt=ht+`
uniform highp sampler2D uIn0;
uniform highp sampler2D uIn1;
uniform int uSub;      // sub-transform size 2..N
uniform int uVertical;
layout(location = 0) out vec4 out0;
layout(location = 1) out vec4 out1;

void main() {
  ivec2 p = ivec2(gl_FragCoord.xy);
  int i = uVertical == 1 ? p.y % N : p.x;
  int hs = uSub >> 1;
  int e = (i / uSub) * hs + (i & (hs - 1));
  ivec2 pe, po;
  if (uVertical == 1) { int base = p.y - i; pe = ivec2(p.x, base + e); po = ivec2(p.x, base + e + N / 2); }
  else { pe = ivec2(e, p.y); po = ivec2(e + N / 2, p.y); }
  float a = 2.0 * PI * float(i & (uSub - 1)) / float(uSub);
  vec2 tw = vec2(cos(a), sin(a));
  vec4 e0 = texelFetch(uIn0, pe, 0), o0 = texelFetch(uIn0, po, 0);
  vec4 e1 = texelFetch(uIn1, pe, 0), o1 = texelFetch(uIn1, po, 0);
  out0 = vec4(e0.xy + cmul(tw, o0.xy), e0.zw + cmul(tw, o0.zw));
  out1 = vec4(e1.xy + cmul(tw, o1.xy), e1.zw + cmul(tw, o1.zw));
}`,yt=ht+`
uniform highp sampler2D uIn0;
uniform highp sampler2D uIn1;
uniform sampler2D uPrev;
uniform int uCascade;
uniform float uLambda;
uniform float uDt;
uniform float uFoamRecovery;
layout(location = 0) out vec4 outDisp;
layout(location = 1) out vec4 outSlope;

void main() {
  ivec2 id = ivec2(gl_FragCoord.xy);
  ivec2 p = id + ivec2(0, uCascade * N);
  // undo the centred-k frequency shift
  float s = ((id.x + id.y) & 1) == 0 ? 1.0 : -1.0;
  vec4 a = texelFetch(uIn0, p, 0) * s; // Dx, Dz, Dy, Dxz
  vec4 b = texelFetch(uIn1, p, 0) * s; // Dyx, Dyz, Dxx, Dzz
  float dxx = uLambda * b.z, dzz = uLambda * b.w, dxz = uLambda * a.w;
  float jac = (1.0 + dxx) * (1.0 + dzz) - dxz * dxz;
  vec2 slope = b.xy / max(vec2(1.0 + dxx, 1.0 + dzz), vec2(0.2));
  float prev = texelFetch(uPrev, id, 0).w;
  // foam follows the jacobian down instantly and recovers at a dt-based rate
  float turb = min(jac, prev + uDt * uFoamRecovery / max(jac, 0.5));
  outDisp = vec4(uLambda * a.x, a.z, uLambda * a.y, turb);
  outSlope = vec4(slope, slope * slope);
}`;function bt(e,t){let n=t*1e3;return{alpha:.076*(ft*n/(e*e))**-.22,peakOmega:22*(e*n/(ft*ft))**-.33}}var xt=()=>({windSpeed:9,windDirection:20,fetchKm:120,spreadBlend:1,windSwell:.9,gamma:3.3,shortWavesFade:.04,capillaryFade:.08,waveScale:1,swellScale:.55,swellWindSpeed:7,swellDirection:10,swellFetchKm:900,swellSwell:1,choppiness:.85,foamRecovery:.7,timeScale:1}),St=class{constructor(e,t=xt()){this.renderer=e,this.params=t,this.time=0,this.dirty=!0,this.parity=0;let n={type:ee,minFilter:a,magFilter:a,depthBuffer:!1,generateMipmaps:!1},r=dt*J.length;this.h0RT=new d(dt,r,n);let i={...n,type:_,count:2};this.ping=new d(dt,r,i),this.pong=new d(dt,r,i);let o={type:_,minFilter:h,magFilter:C,wrapS:je,wrapT:je,generateMipmaps:!0,anisotropy:e.capabilities.getMaxAnisotropy(),depthBuffer:!1,count:2};this.out=J.map(()=>[new d(dt,dt,o),new d(dt,dt,o)]);let s=e.getClearColor(new D),c=e.getClearAlpha();e.setClearColor(0,1);for(let t of this.out)for(let n of t)e.setRenderTarget(n),e.clear(!0,!1,!1);e.setClearColor(s,c),e.setRenderTarget(null);let l=new p(...J);this.initMat=K(gt,{uSpecA:{value:[new p,new p]},uSpecB:{value:[new p,new p]},uLength:{value:l},uCut:{value:new p(...J.slice(1).map(e=>2*Math.PI/e*6),0)},uCapFade:{value:0},uSeed:{value:1337}}),this.evolveMat=K(_t,{uH0:{value:this.h0RT.texture},uLength:{value:l},uTime:{value:0}}),this.fftMat=K(vt,{uIn0:{value:null},uIn1:{value:null},uSub:{value:2},uVertical:{value:0}}),this.assembleMat=K(yt,{uIn0:{value:null},uIn1:{value:null},uPrev:{value:null},uCascade:{value:0},uLambda:{value:1},uDt:{value:0},uFoamRecovery:{value:.45}}),this.quad=new ut(this.initMat),this.lengths=J,this.displacement=this.out.map(e=>e[0].textures[0]),this.slope=this.out.map(e=>e[0].textures[1])}updateSpectrum(){let e=this.params,t=this.initMat.uniforms,n=bt(e.windSpeed,e.fetchKm),r=bt(e.swellWindSpeed,e.swellFetchKm),i=P.degToRad;t.uSpecA.value[0].set(e.waveScale,i(e.windDirection),e.spreadBlend,e.windSwell),t.uSpecB.value[0].set(n.alpha,n.peakOmega,e.gamma,e.shortWavesFade),t.uSpecA.value[1].set(e.swellScale*e.waveScale,i(e.swellDirection),1,e.swellSwell),t.uSpecB.value[1].set(r.alpha,r.peakOmega,e.gamma,e.shortWavesFade),t.uCapFade.value=e.capillaryFade,this.quad.material=this.initMat,this.quad.render(this.renderer,this.h0RT),this.dirty=!1}update(e,t){let n=this.params;t?.begin(`sim.evolve`),this.dirty&&this.updateSpectrum(),e*=n.timeScale,this.time=(this.time+e)%mt;let r=this.renderer,i=this.quad;this.evolveMat.uniforms.uTime.value=this.time,i.material=this.evolveMat,i.render(r,this.ping),t?.begin(`sim.fft`);let a=this.ping,o=this.pong,s=this.fftMat.uniforms;i.material=this.fftMat;for(let e=0;e<2;e++){s.uVertical.value=e;for(let e=1;e<=q;e++)s.uSub.value=1<<e,s.uIn0.value=a.textures[0],s.uIn1.value=a.textures[1],i.render(r,o),[a,o]=[o,a]}t?.begin(`sim.assemble`);let c=this.assembleMat.uniforms;c.uIn0.value=a.textures[0],c.uIn1.value=a.textures[1],c.uLambda.value=n.choppiness,c.uDt.value=e,c.uFoamRecovery.value=n.foamRecovery,i.material=this.assembleMat;let l=this.parity^1;for(let e=0;e<this.out.length;e++)c.uCascade.value=e,c.uPrev.value=this.out[e][this.parity].textures[0],i.render(r,this.out[e][l]),this.displacement[e]=this.out[e][l].textures[0],this.slope[e]=this.out[e][l].textures[1];this.parity=l}},Ct=`
uniform highp sampler2DShadow uFloatShadow;
uniform mat4 uFloatShadowMatrix;
uniform float uFloatShadowBias;   // depth units; 0 = no casters this frame
float floatShadow(vec3 p) {
  if (uFloatShadowBias <= 0.0) return 1.0;
  vec3 sc = (uFloatShadowMatrix * vec4(p, 1.0)).xyz;
  if (any(lessThan(sc, vec3(0.0))) || any(greaterThan(sc, vec3(1.0)))) return 1.0;
  return texture(uFloatShadow, vec3(sc.xy, sc.z - uFloatShadowBias));
}`,wt=new S,Tt=class{constructor(e=1024){let t=new ae(e,e,ee);t.compareFunction=515,t.minFilter=t.magFilter=C,this.target=new d(e,e,{format:_e,depthTexture:t,generateMipmaps:!1}),this.camera=new Ie,this.material=new T({colorWrite:!1,side:2}),this.uniforms={uFloatShadow:{value:t},uFloatShadowMatrix:{value:new ce},uFloatShadowBias:{value:0}}}update(e,t,n,r){let i=this.uniforms;if(this.ready||=(this.clear(e),!0),!n.length||r.y<=.01){i.uFloatShadowBias.value=0;return}wt.set(0,0,0);for(let e of n)wt.add(e.pos);wt.divideScalar(n.length);let a=1;for(let e of n)a=Math.max(a,e.pos.distanceTo(wt)+e.radius);let o=this.camera;o.left=o.bottom=-a,o.right=o.top=a,o.near=1,o.far=a+3e3,o.position.copy(wt).addScaledVector(r,a+20),o.lookAt(wt),o.updateProjectionMatrix(),o.updateMatrixWorld(),i.uFloatShadowMatrix.value.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1).multiply(o.projectionMatrix).multiply(o.matrixWorldInverse),i.uFloatShadowBias.value=.03/(o.far-o.near);let s=e.getRenderTarget();t.overrideMaterial=this.material,e.setRenderTarget(this.target),e.clear(!1,!0,!1),e.render(t,o),t.overrideMaterial=null,e.setRenderTarget(s)}clear(e){let t=e.getRenderTarget();e.setRenderTarget(this.target),e.clear(!1,!0,!1),e.setRenderTarget(t)}},Et=384,Dt=60,Ot=1,kt=3e3,At=6e4;function jt(e){let t=1+2*Math.PI/e,n=[];for(let e=Ot/16;e<Ot*.99;e*=1.12)n.push(e);for(let e=Ot;e<kt;e*=t)n.push(e);n.push(At);let r=new Float32Array((1+n.length*e)*3),i=3;for(let t of n)for(let n=0;n<e;n++){let a=n/e*Math.PI*2;r[i++]=Math.cos(a)*t,r[i++]=0,r[i++]=Math.sin(a)*t}let a=[];for(let t=0;t<e;t++)a.push(0,1+(t+1)%e,1+t);for(let t=0;t<n.length-1;t++){let n=1+t*e,r=n+e;for(let t=0;t<e;t++){let i=(t+1)%e;a.push(n+t,n+i,r+t,n+i,r+i,r+t)}}let o=new ye;return o.setAttribute(`position`,new M(r,3)),o.setIndex(new M(new Uint32Array(a),1)),o}var Mt=`
uniform sampler2D uShore;
uniform sampler2D uTravel;   // wave travel time from the coast (s), propagation dir xz, shoaling
uniform float uShoreExtent;
uniform float uTime;
uniform vec4 uShoreWave;   // amplitude, wavelength, speed, steepness
uniform vec2 uSwellDir;    // propagation direction of the swell (xz)

vec4 shoreSample(vec2 xz) {
  vec2 uv = xz / uShoreExtent + 0.5;
  if (any(lessThan(uv, vec2(0.0))) || any(greaterThan(uv, vec2(1.0)))) return vec4(-60.0, 1e4, 0.0, 0.0);
  return textureLod(uShore, uv, 0.0);
}
vec4 travelSample(vec2 xz) {
  vec2 uv = xz / uShoreExtent + 0.5;
  if (any(lessThan(uv, vec2(0.0))) || any(greaterThan(uv, vec2(1.0)))) return vec4(0.0);
  return textureLod(uTravel, uv, 0.0);
}

float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + 1.0), u.x), u.y);
}

// phase offset along the coast, the slowly drifting sets, and how much of the swell a
// coast facing dir receives
float shoreNoisePhase(vec2 xz) { return vnoise(xz * 0.0042) * 9.0 + vnoise(xz * 0.011 + 7.0) * 2.5; }
float shoreGroup(vec2 xz) { return 0.45 + 0.55 * vnoise(xz * 0.004 + vec2(uTime * 0.021, -uTime * 0.017)); }
float shoreExposure(vec2 dir) { return mix(0.25, 1.0, smoothstep(-0.3, 0.7, dot(dir, uSwellDir))); }
vec2 shoreDir(vec4 sh, vec4 tr) { return dot(tr.yz, tr.yz) > 0.25 ? normalize(tr.yz) : -sh.zw / max(length(sh.zw), 1e-3); }
`,Nt=`
vec3 swash(vec2 xz, float hgt) {
  vec4 sh = shoreSample(xz);
  if (hgt < -0.3 || sh.y > 60.0 || uShoreWave.x <= 0.0) return vec3(0.0);
  vec2 dir = shoreDir(sh, travelSample(xz));
  float R = 0.55 * uShoreWave.x * shoreExposure(dir) * shoreGroup(xz) * smoothstep(0.35, 0.8, length(sh.zw));
  if (R < 0.02) return vec3(0.0);
  if (hgt > R) return vec3(0.0, 0.0, 0.5 * smoothstep(1.5 * R, R, hgt));   // reached by bigger sets
  float w = sqrt(9.81 * 6.2831853 / uShoreWave.y) * uShoreWave.z;
  // fraction of a period since the last bore reached the waterline (tau = 0 there)
  float s = fract((w * uTime + shoreNoisePhase(xz)) / 6.2831853);
  float eta = R * (s < 0.3 ? sin(s / 0.3 * 1.5708) : cos((s - 0.3) / 0.7 * 1.5708));
  float th = eta - hgt;
  float edge = s < 0.35 ? smoothstep(-0.01, 0.0, th) * (1.0 - smoothstep(0.0, 0.05, th)) : 0.0;
  // drying since the backwash uncovered this height
  float sPass = 0.3 + 0.7 * acos(clamp(hgt / R, 0.0, 1.0)) / 1.5708;
  float dry = (s > sPass ? s - sPass : s + 1.0 - sPass) * 6.2831853 / w;
  return vec3(max(th, 0.0), edge, th > 0.0 ? 1.0 : exp(-dry / 5.0));
}
`,Pt=`
#define N_TEX ${dt.toFixed(1)}
#define PI 3.14159265359
uniform sampler2D uDisp0, uDisp1, uDisp2;           // the capillary cascade is slopes only
uniform sampler2D uSlope0, uSlope1, uSlope2, uSlope3;
uniform vec4 uLength;
uniform vec2 uWaveDamp;    // depth where long swell fully exists, chop strength in shallows
uniform vec4 uImpact[8];      // x, z, age (s), amplitude (m); amplitude 0 = free slot
uniform float uImpactSize[8]; // splash radius (m)
${Mt}

// Ripple rings from objects hitting the water (Cauchy-Poisson): by stationary phase a
// point impulse gives local wavenumber k = g t^2 / (4 r^2) at radius r and phase k r, so
// long waves race ahead and short ones trail inside. A splash of radius L excites
// ~ (kL)^2 exp(-(kL)^2); kMax band-limits to what the mesh or pixel can show.
// Returns (height, dh/dx, dh/dz).
vec3 impactWaves(vec2 xz, float kMax) {
  vec3 o = vec3(0.0);
  for (int i = 0; i < 8; i++) {
    vec4 e = uImpact[i];
    if (e.w <= 0.0) continue;
    vec2 dv = xz - e.xy;
    float r = length(dv) + 1e-3, L = uImpactSize[i];
    float k = 9.81 * e.z * e.z / (4.0 * r * r);
    float kl2 = k * k * L * L;
    float amp = e.w * 2.72 * kl2 * exp(-kl2 - k * k / (kMax * kMax) - 0.12 * e.z) * L / (L + r);
    float ph = k * r;
    o.x += amp * cos(ph);
    o.yz += dv / r * (amp * k * sin(ph));
  }
  return o;
}

// FFT cascade weights by water depth: long swell is replaced by shore waves in the
// shallows, chop survives almost to the beach.
vec3 cascadeDamp(float depth) {
  float swell = smoothstep(2.0, uWaveDamp.x, depth);
  float chop = smoothstep(-0.4, 2.0, depth) * mix(uWaveDamp.y, 1.0, smoothstep(0.0, 10.0, depth));
  return vec3(swell, chop, chop);
}

// Travelling breakers on the eikonal travel-time field (shoreMap.js): phase = w (tau + t)
// with local wavenumber w / sqrt(g depth), so fronts slow down, bunch up and bend around
// the bathymetry on their way in. Gerstner push along the propagation direction, Green's
// law + ray-tube shoaling, breaking limit A <= 0.42*depth.
// Breaking crests pitch forward of their base (plunging lip), glow where thin (lip) and
// leave lace behind in the surf zone (residual).
// wave0 = (amplitude, k, omega, phase) and breaking (0..1) of the main train, for spray
struct Shore { vec3 disp; vec2 slope; float foam; vec4 wave0; float breaking0; vec2 dir; float lip; float residual; };
Shore shoreWaves(vec2 xz, vec4 sh) {
  Shore o = Shore(vec3(0.0), vec2(0.0), 0.0, vec4(0.0), 0.0, vec2(0.0), 0.0, 0.0);
  float depth = -sh.x, sdf = sh.y;
  float gl = length(sh.zw);
  float env = smoothstep(180.0, 70.0, sdf) * smoothstep(0.35, 0.8, gl) * smoothstep(-0.9, 0.5, depth);
  if (env <= 0.0 || uShoreWave.x <= 0.0) return o;
  vec4 tr = travelSample(xz);
  vec2 dir = shoreDir(sh, tr);
  o.dir = dir;
  // coasts facing the swell get the big sets, lee shores only small ones
  env *= shoreExposure(dir);
  float shoal = dot(tr.yz, tr.yz) > 0.25 ? tr.w : pow(clamp(max(depth, 0.6) / 14.0, 0.04, 1.0), -0.25);
  float cel = sqrt(9.81 * clamp(depth, 0.3, 14.0));
  float amax = 0.42 * max(depth, 0.0) + 0.14;
  float noisePhase = shoreNoisePhase(xz);
  float group = shoreGroup(xz);
  float pinch = 0.85;   // total horizontal compression allowed (Jacobian stays > 0.15)
  for (int i = 0; i < 2; i++) {
    float lambda = uShoreWave.y * (i == 0 ? 1.0 : 0.61);
    float w = sqrt(9.81 * 2.0 * PI / lambda) * uShoreWave.z;
    float k = w / cel;
    float a = min(uShoreWave.x * (i == 0 ? 1.0 : 0.45) * env * shoal * group, amax * (i == 0 ? 1.0 : 0.5));
    float ph = w * (tr.x + uTime) + noisePhase * (i == 0 ? 1.0 : 1.37) + float(i) * 2.1;
    float c = 0.5 + 0.5 * cos(ph);
    float s = sin(ph);
    const float P = 1.6;           // narrower crests, flatter troughs
    float cp = pow(c, P - 1.0);
    float rel = a / max(depth, 0.05);
    // sections of each crest break early or late (peeling), new layout every wave
    float cycle = floor((ph + PI) / (2.0 * PI));
    float early = vnoise(xz * 0.03 + vec2(cycle * 7.3, cycle * 3.1 + float(i) * 31.0));
    float breaking = smoothstep(0.12 + 0.14 * early, 0.3 + 0.2 * early, rel);
    // plunging only around the break point; the inner surf zone runs as a bore
    float pitch = i == 0 ? 2.0 * uShoreWave.w * a * smoothstep(0.16, 0.28, rel) * (1.0 - smoothstep(0.4, 0.6, rel)) : 0.0;
    // a heightfield can't overhang: the lean (up to 1.08 pitch k of compression just
    // ahead of the crest) and both trains' Gerstner pinch share one budget, so the
    // surface never folds over into a glassy fin
    pitch = min(pitch, 0.35 / (1.08 * k));
    pinch -= 1.08 * pitch * k;
    float qak = min(pinch, uShoreWave.w * a * k * 8.0);
    pinch -= qak;
    float c5 = c * c * c * c * c;
    o.disp.y += a * (2.0 * cp * c - 0.78);
    o.disp.xz += dir * ((qak / k) * s + pitch * c5 * c);
    o.slope += dir * (a * k * P * cp * s / max(1.0 - qak * cos(ph) + 3.0 * pitch * k * c5 * s, 0.2));
    // whitewater: on the crest and trailing behind it once the wave is near breaking
    float psi = mod(ph + PI, 2.0 * PI) - PI;
    float f = breaking * smoothstep(-0.45, 0.0, psi) * exp(-max(psi, 0.0) * 0.8);
    o.foam += f;
    if (i == 0) {
      o.wave0 = vec4(a, k, w, ph);
      o.breaking0 = breaking;
      o.lip = breaking * c5 * smoothstep(0.6, -0.2, psi);
      // (the lace outlives single crests: no peeling, or it would pop between waves)
      o.residual = smoothstep(0.18, 0.4, rel) * (0.3 + 0.45 * exp(-mod(ph, 2.0 * PI) * 0.4));
    }
  }
  return o;
}

// Full surface displacement at an undisplaced xz; lod per cascade (0 = finest).
vec3 waterDisplacement(vec2 xz, vec3 lod) {
  vec4 sh = shoreSample(xz);
  vec3 damp = cascadeDamp(-sh.x);
  vec3 d = textureLod(uDisp0, xz / uLength.x, max(lod.x, 0.0)).xyz * damp.x
         + textureLod(uDisp1, xz / uLength.y, max(lod.y, 0.0)).xyz * damp.y
         + textureLod(uDisp2, xz / uLength.z, max(lod.z, 0.0)).xyz * damp.z;
  d += shoreWaves(xz, sh).disp;
  // rings at their world position; cell size back from the finest lod
  d.y += impactWaves(xz + d.xz, 2.0 * N_TEX / (exp2(lod.z - 1.0) * uLength.z)).x;
  return d;
}

// Surface at world xz: invert the choppy horizontal displacement by fixed-point
// iteration, then read the height there. Returns the displacement; .y is the height.
vec3 waterAt(vec2 q, vec3 lod) {
  vec2 p = q;
  vec3 d = vec3(0.0);
  for (int i = 0; i < 4; i++) { d = waterDisplacement(p, lod); p = q - d.xz; }
  return waterDisplacement(p, lod);
}
`,Ft=Pt+`
uniform float uGridScale;
uniform float uCellStep;
uniform float uWind;
uniform vec2 uDio;   // diorama: x = 1 -> grid is in world xz, y = cell size (m)
out vec3 vWorld;
out vec2 vXZ;
out float vUnresolved;

void main() {
  vec2 local = position.xz;
  float r = length(local);
  float scale = r > ${(kt*2).toFixed(1)} ? 1.0 : uGridScale;
  vec2 xz = cameraPosition.xz + local * scale;
  float cell = max(r, ${Ot.toFixed(1)}) * uCellStep * scale;
  if (uDio.x > 0.5) { xz = local; cell = uDio.y; }

  // +1 LOD bias: box-filtered mips still leak a little past Nyquist
  vec3 d = waterDisplacement(xz, log2(cell * N_TEX / uLength.xyz) + 1.0);
  // Cox-Munk mean square slope minus what the cascades carry (each one's 1x1 mip is its
  // mean square slope): the rest is sub-texel roughness
  vec4 m0 = textureLod(uSlope0, vec2(0.5), 8.0), m1 = textureLod(uSlope1, vec2(0.5), 8.0);
  vec4 m2 = textureLod(uSlope2, vec2(0.5), 8.0), m3 = textureLod(uSlope3, vec2(0.5), 8.0);
  vUnresolved = max(0.003 + 0.00512 * uWind - (m0.z + m0.w + m1.z + m1.w + m2.z + m2.w + m3.z + m3.w), 0.0);

  vXZ = xz;
  vWorld = vec3(xz.x + d.x, d.y, xz.y + d.z);
  gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
}`,It=Pt+Ct+`
precision highp sampler2DShadow;
uniform vec2 uResolution;
uniform vec2 uNearFar;
uniform sampler2D uSceneColor;
uniform sampler2D uSceneDepth;
uniform sampler2D uReflection;
uniform mat4 uReflMatrix;
uniform samplerCube uSkyCube;
uniform float uSkyMaxLod;
uniform sampler2D uFoamTex;
uniform sampler2DShadow uShadowMap;
uniform mat4 uShadowMatrix;
uniform float uShadowBias;  // depth units
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uAbsorption;
uniform vec3 uScatterColor;
uniform vec3 uFoamTint;     // thin foam: the water colour showing through the bubbles
uniform vec4 uSSS;          // peak strength, view strength, shadow strength, -
uniform vec4 uFoam;         // bias, scale, shore band (m), brightness
uniform vec4 uOptics;       // base roughness, refraction strength, reflection distortion, fog density
uniform vec3 uCamForward;
uniform int uDebug;
uniform float uGlint;
uniform float uClipR;
uniform float uCamSide;     // -1 camera above the surface, 1 below, 0 straddling it
in vec3 vWorld;
in vec2 vXZ;
in float vUnresolved;
out vec4 fragColor;

float linearDepth(float d) {
  float z = d * 2.0 - 1.0;
  return 2.0 * uNearFar.x * uNearFar.y / (uNearFar.y + uNearFar.x - z * (uNearFar.y - uNearFar.x));
}

float sunShadow(vec3 p) {
  float s = 1.0;
  vec4 sc = uShadowMatrix * vec4(p, 1.0);
  // one hardware 2x2 PCF tap: texels are ~0.44 m, soft enough on moving water. The water
  // casts nothing, so the bias only has to cover depth precision.
  if (all(greaterThan(sc.xy, vec2(0.0))) && all(lessThan(sc.xyz, vec3(1.0)))) s = texture(uShadowMap, vec3(sc.xy, sc.z - uShadowBias));
  return min(s, floatShadow(p));
}

// Poisson count with mean lam from one uniform number: inverse CDF, normal (logistic)
// approximation for large means
float poisson(float lam, float u) {
  if (lam > 6.0) return max(0.0, lam + sqrt(lam) * log(u / (1.0 - u)) / 1.702);
  float p = exp(-lam), F = p, n = 0.0;
  for (int k = 0; k < 14; k++) { if (u <= F) break; n += 1.0; p *= lam / n; F += p; }
  return n;
}

vec3 skyLod(vec3 dir, float lod) {
  dir.y = max(dir.y, 0.0);
  return textureLod(uSkyCube, dir, lod).rgb;
}

void main() {
  // folded crests flip triangles; drop faces that can't face the camera's side
  if (gl_FrontFacing ? uCamSide > 0.5 : uCamSide < -0.5) discard;
  if (uClipR > 0.0 && length(vWorld.xz) > uClipR) discard;
  vec3 toCam = cameraPosition - vWorld;
  float dist = length(toCam);
  vec3 V = toCam / dist;
  vec2 uv = gl_FragCoord.xy / uResolution;

  // --- surface: slopes + slope variance from the three cascades -----------------
  vec4 sh = shoreSample(vXZ);
  float depthBelow = -sh.x;
  vec3 damp = cascadeDamp(depthBelow);
  vec4 s0 = texture(uSlope0, vXZ / uLength.x) * damp.x;
  vec4 s1 = texture(uSlope1, vXZ / uLength.y) * damp.y;
  vec4 s2 = texture(uSlope2, vXZ / uLength.z) * damp.z;
  vec4 s3 = texture(uSlope3, vXZ / uLength.w) * damp.z;
  s0.zw *= damp.x; s1.zw *= damp.y; s2.zw *= damp.z; s3.zw *= damp.z;   // second moments scale by damp^2
  Shore shore = shoreWaves(vXZ, sh);
  vec2 fwXZ = fwidth(vXZ);
  vec3 imp = impactWaves(vWorld.xz, 2.0 / max(max(fwXZ.x, fwXZ.y), 1e-3));
  vec2 slope = s0.xy + s1.xy + s2.xy + s3.xy + shore.slope + imp.yz;
  vec2 variance = max(s0.zw - s0.xy * s0.xy, 0.0) + max(s1.zw - s1.xy * s1.xy, 0.0)
                + max(s2.zw - s2.xy * s2.xy, 0.0) + max(s3.zw - s3.xy * s3.xy, 0.0);
  vec3 Nrm = normalize(vec3(-slope.x, 1.0, -slope.y));
  // the normal's tilt as a screen offset: project a small world step along it
  vec3 vp = (viewMatrix * vec4(vWorld, 1.0)).xyz;
  vec3 dv = mat3(viewMatrix) * vec3(Nrm.x, 0.0, Nrm.z);
  vec2 nS = dv.xy - vp.xy / vp.z * dv.z;

  // geometric specular AA (Kaplanyan): normal change across the pixel adds variance
  vec3 dndx = dFdx(Nrm), dndy = dFdy(Nrm);
  float geoVar = min(0.25 * (dot(dndx, dndx) + dot(dndy, dndy)), 0.18);
  float alpha2 = uOptics.x * uOptics.x + vUnresolved * damp.z * damp.z + variance.x + variance.y + geoVar;
  float alpha = sqrt(alpha2);

  float NoV = max(dot(Nrm, V), 1e-4);
  float NoL = dot(Nrm, uSunDir);
  float shadow = sunShadow(vWorld);

  // --- foam -------------------------------------------------------------------
  float t0 = texture(uDisp0, vXZ / uLength.x).w, t1 = texture(uDisp1, vXZ / uLength.y).w, t2 = texture(uDisp2, vXZ / uLength.z).w;
  float jac = mix(1.0, t0, damp.x) + mix(1.0, t1, damp.y) + mix(1.0, t2, damp.z) - 2.0;
  float foam = clamp((uFoam.x - jac) * uFoam.y, 0.0, 1.0);

  // --- seen from below: Snell's window + total internal reflection ---------------
  // (the camera->surface water column is fogged later by the underwater pass)
  if (!gl_FrontFacing) {
    vec3 Nu = -Nrm;
    float cosI = dot(V, Nu);
    // outside Snell's window total internal reflection mirrors the deep water: the same
    // colour the underwater pass fogs towards, for the reflected direction
    vec3 Rd = reflect(-V, Nu);
    vec3 ambientU = skyLod(vec3(0.0, 1.0, 0.0), uSkyMaxLod);
    vec3 deep = uScatterColor * (ambientU + uSunColor * max(uSunDir.y, 0.0)) * mix(0.55, 1.35, Rd.y * 0.5 + 0.5);
    vec3 colU = deep;
    // the window edge (critical angle) blurred by the sub-pixel roughness, so rough
    // patches fade between window and mirror instead of switching
    const float COS_CRIT = 0.6614;   // sqrt(1 - 1/1.33^2)
    float edge = max(alpha * 1.5, 0.02);
    float win = smoothstep(COS_CRIT - edge, COS_CRIT + edge, cosI);
    if (win > 0.0) {
      vec3 Tdir = refract(-V, Nu, 1.33);
      if (dot(Tdir, Tdir) == 0.0) Tdir = normalize(-V - Nu * dot(-V, Nu));   // grazing, just past the edge
      float cosT = max(dot(Tdir, Nrm), 0.0);
      float Fu = 0.02 + 0.98 * pow(1.0 - cosT, 5.0);
      // sky through the window is the refracted direction (the 180-degree sky squeezed
      // into the ~97-degree cone); anything opaque above water comes from the frame
      vec2 wuv = uv + nS * 0.04;
      vec3 above = textureLod(uSceneDepth, wuv, 0.0).r > 0.999999
        ? skyLod(Tdir, clamp(log2(alpha * 900.0), 0.0, uSkyMaxLod)) : textureLod(uSceneColor, wuv, 0.0).rgb;
      // sun through the window: GGX transmission lobe, widened by the roughness
      float aT = max(alpha * 1.4, 0.03), mu = max(dot(Tdir, uSunDir), 0.0);
      float dT = mu * mu * (aT * aT - 1.0) + 1.0;
      float sunLobe = aT * aT / (PI * dT * dT) * 0.25;
      colU = mix(deep, mix(above + uSunColor * sunLobe * shadow, deep, Fu), win);
    }
    colU *= 1.0 - 0.55 * max(foam, clamp(shore.foam, 0.0, 1.0));
    // alpha tags what the pixel sees for the underwater pass: 0 underside, 2 top
    // (everything else writes 1, so MSAA edge averages never look like the other face)
    fragColor = vec4(colU, 0.0);
    return;
  }

  // --- refraction + absorption -------------------------------------------------
  float waterDepth = linearDepth(gl_FragCoord.z);
  float sceneDepth = linearDepth(textureLod(uSceneDepth, uv, 0.0).r);
  float viewCos = max(dot(-V, uCamForward), 0.05);
  float thick = max(sceneDepth - waterDepth, 0.0) / viewCos;
  vec2 ruv = uv + nS * uOptics.y * clamp(thick * 0.25, 0.0, 1.0) / max(waterDepth * 0.02, 1.0);
  float rDepth = linearDepth(textureLod(uSceneDepth, ruv, 0.0).r);
  // the offset landed on something in front of the water: fall back towards no offset,
  // smoothly so object edges don't get a hard outline
  float keep = smoothstep(waterDepth - 0.3, waterDepth + 0.3, rDepth);
  ruv = mix(uv, ruv, keep);
  thick = mix(thick, max(rDepth - waterDepth, 0.0) / viewCos, keep);
  vec3 refracted = textureLod(uSceneColor, ruv, 0.0).rgb;
  vec3 T = exp(-uAbsorption * thick);

  // shoreline contact foam where the water gets thin (in the shallows only: around
  // floating props it would be a white frill)
  float contact = (1.0 - smoothstep(0.0, uFoam.z, thick * viewCos)) * smoothstep(6.0, 2.0, depthBelow);
  foam = max(foam, contact * 0.9);
  float shoreFoam = clamp(shore.foam, 0.0, 1.0);

  // --- lighting ------------------------------------------------------------------
  vec3 ambient = skyLod(vec3(0.0, 1.0, 0.0), uSkyMaxLod);
  vec3 sun = uSunColor * shadow;
  // in-scatter of the water column (sun + sky), then Atlas-style SSS on crests
  vec3 inscatter = uScatterColor * (ambient + uSunColor * (0.3 + 0.7 * shadow) * max(uSunDir.y, 0.0));
  float h = max(vWorld.y, 0.0);
  float k1 = uSSS.x * h * pow(clamp(dot(uSunDir, -V), 0.0, 1.0), 4.0) * pow(0.5 - 0.5 * NoL, 3.0);
  float k2 = uSSS.y * pow(NoV, 2.0);
  vec3 sss = (k1 + k2) * uScatterColor * sun + uSSS.z * max(NoL, 0.0) * uScatterColor * sun;
  // thin breaking lips: sunlight through about a metre of water glows turquoise,
  // strongest looking into the sun
  sss += shore.lip * sun * exp(-uAbsorption * 2.0) * 0.06 * (0.3 + 2.5 * pow(clamp(dot(uSunDir, -V), 0.0, 1.0), 3.0));
  vec3 body = refracted * T + (inscatter + sss) * (1.0 - T);

  // Fresnel with roughness-aware F90 (Lagarde) so the rough far field doesn't go white
  const float F0 = 0.02;
  float F90 = max(1.0 - 0.7 * sqrt(alpha), F0);
  float F = F0 + (F90 - F0) * pow(1.0 - NoV, 5.0);

  // --- reflection: half-res planar (terrain) over the sky cube -----------------------
  vec3 R = reflect(-V, Nrm);
  R.y = abs(R.y);
  float lod = clamp(log2(alpha * 650.0), 0.0, uSkyMaxLod);
  vec3 refl = skyLod(R, lod);
  // (premultiplied: the target clears to 0, so blurred mips fade to the sky, not black)
  vec4 pc = uReflMatrix * vec4(vWorld.x, 0.0, vWorld.z, 1.0);
  vec2 puv = pc.xy / pc.w + nS * uOptics.z / max(1.0, waterDepth * 0.01);
  vec4 planar = textureLod(uReflection, puv, clamp(log2(alpha * 300.0), 0.0, 6.0));
  refl = refl * (1.0 - planar.a) + planar.rgb;

  // --- sun specular: GGX, alpha floored so the sun acts as a small area light ---------
  float aS = max(alpha, 0.015);
  float aS2 = aS * aS;
  vec3 H = normalize(uSunDir + V);
  float NoH = max(dot(Nrm, H), 0.0);
  float nl = max(NoL, 0.0);
  float dd = NoH * NoH * (aS2 - 1.0) + 1.0;
  float D = aS2 / (PI * dd * dd);
  float vis = 0.5 / (nl * sqrt(NoV * NoV * (1.0 - aS2) + aS2) + NoV * sqrt(nl * nl * (1.0 - aS2) + aS2) + 1e-5);
  float Fs = F0 + (1.0 - F0) * pow(1.0 - max(dot(V, H), 0.0), 5.0);
  vec3 spec = sun * (PI * D * vis * Fs * nl);

  // glitter: the lobe as a finite number of sub-pixel facets. Per cell of about the
  // pixel footprint the expected count mirroring the sun is lam = facet density * area *
  // D * (sun solid angle / 4 VoH); a Poisson draw / lam scales the smooth lobe (mean 1,
  // energy kept). Dense cells (close to the lobe core, far away) stay smooth, sparse
  // ones break into points; each cell crossfades between draws so they twinkle.
  if (uGlint > 0.0 && dot(spec, vec3(1.0)) > 0.02) {
    const float FACETS = 2e4;   // per m^2 (calibration knob)
    float lf = log2(max(max(fwXZ.x, fwXZ.y), 1e-3)) + 1.0;
    float l0 = floor(lf);
    float per = FACETS * D * NoH * 6.8e-5 / (4.0 * max(dot(V, H), 0.05));
    float m = 0.0;
    for (int j = 0; j < 2; j++) {
      float l = l0 + float(j), sz = exp2(l);
      vec2 cell = floor(vXZ / sz);
      float lam = per * sz * sz;
      float tt = uTime * 3.0 + hash12(cell + l * 17.17) * 64.0, it = floor(tt);
      float n0 = poisson(lam, clamp(hash12(cell * 1.31 + it * 3.7), 1e-4, 0.9999));
      float n1 = poisson(lam, clamp(hash12(cell * 1.31 + (it + 1.0) * 3.7), 1e-4, 0.9999));
      m += (j == 0 ? 1.0 - (lf - l0) : lf - l0) * min(mix(n0, n1, smoothstep(0.0, 1.0, tt - it)) / max(lam, 1e-4), 300.0);
    }
    spec *= mix(1.0, m, uGlint * smoothstep(4.0, 30.0, dist));
  }

  vec3 col = mix(body, refl, F) + spec;

  // --- foam surface: eroded by age via the pattern threshold, kills specular ----------
  // erosion: dense foam is nearly solid, ageing foam thins out to the lace network
  // (texture taps only where there is foam; most of the ocean has none). Each source
  // also gives a billow height + gradient (world) and a density for the shading.
  float cover = 0.0, pat = 0.0, fh = 0.5, dens = 0.0;
  vec2 fg = vec2(0.0);
  if (foam > 0.0) {
    vec4 t0 = texture(uFoamTex, vXZ * 0.11);
    pat = t0.r * 0.65 + texture(uFoamTex, vXZ * 0.031 + 0.37).r * 0.35;
    cover = smoothstep(1.05 - foam, 1.3 - foam, pat) * sqrt(foam);
    fh = t0.g; fg = (t0.ba - 0.5) * 64.0 * 0.11; dens = foam;
  }
  if (shoreFoam > 0.0) {
    // whitewater rides shoreward with the bore: a world-space flow map at the phase
    // speed, two phases crossfaded every half period (which also makes it churn). On the
    // displaced surface, so the crest pinch doesn't squash it into streaks; a coordinate
    // tied to the front direction would shear wherever the fronts curve.
    const float FLOW_T = 2.5;   // s
    vec2 vel = shore.dir * shore.wave0.z / max(shore.wave0.y, 1e-3);
    float f0 = fract(uTime / FLOW_T), f1 = fract(uTime / FLOW_T + 0.5), wb = abs(2.0 * f0 - 1.0);
    vec4 b0 = texture(uFoamTex, (vWorld.xz - vel * (f0 * FLOW_T)) * 0.15);
    vec4 b1 = texture(uFoamTex, (vWorld.xz - vel * (f1 * FLOW_T)) * 0.15 + 0.43);
    float sh_ = mix(b0.g, b1.g, wb);
    float sPattern = mix(b0.r, b1.r, wb) * 0.3 + sh_ * 0.45 + texture(uFoamTex, vWorld.xz * 0.023 + 0.5).r * 0.25;
    float sCover = smoothstep(1.0 - shoreFoam * 1.1, 1.2 - shoreFoam * 1.1, sPattern) * sqrt(shoreFoam);
    if (sCover >= cover) {
      pat = sPattern; fh = sh_; dens = shoreFoam;
      fg = mix(b0.ba, b1.ba, wb) * (64.0 * 0.15) - 32.0 * 0.15;
    }
    cover = max(cover, sCover);
  }
  if (shore.residual > 0.0) {
    // lace left behind in the surf zone, drifting shoreward (two-phase flow map)
    float fp = fract(uTime / 8.0);
    vec2 drift = shore.dir * 2.8;
    float r0 = texture(uFoamTex, (vWorld.xz - drift * fp) * 0.06).r;
    float r1 = texture(uFoamTex, (vWorld.xz - drift * fract(fp + 0.5)) * 0.06 + 0.5).r;
    float rp = mix(r0, r1, abs(2.0 * fp - 1.0));
    float rCover = smoothstep(1.2 - shore.residual, 1.35 - shore.residual, rp) * shore.residual;
    if (rCover >= cover) { pat = rp; fh = 0.5; fg = vec2(0.0); dens = shore.residual * 0.5; }
    cover = max(cover, rCover);
  }
  if (cover > 0.0) {
    // billows bump the normal (whitewater is lumpy, thin lace lies flat) and shade
    // their creases; thin foam is a bubble film tinted by the water under it, dense foam
    // a bright diffuse white with a little sheen on the bubble tops
    vec3 fN = normalize(Nrm - vec3(fg.x, 0.0, fg.y) * (0.03 + 0.12 * dens));
    float fl = dot(fN, uSunDir);
    float ao = mix(0.45, 1.0, smoothstep(0.15, 0.75, fh));
    float solid = smoothstep(0.2, 0.9, dens * (0.55 + 0.7 * fh));
    vec3 foamAlbedo = mix(uFoamTint, vec3(0.95), max(solid, smoothstep(0.3, 0.9, pat) * 0.6));
    vec3 lit = sun * (0.15 + 0.85 * clamp(fl * 0.8 + 0.2, 0.0, 1.0)) * mix(ao, 1.0, 0.4) + ambient * 1.1 * ao;
    // sun behind the crest shines through the thin foam on top
    lit += sun * pow(clamp(dot(uSunDir, -V), 0.0, 1.0), 4.0) * 0.4 * (1.0 - solid);
    vec3 foamCol = uFoam.w * foamAlbedo * lit;
    foamCol += sun * pow(max(dot(fN, H), 0.0), 90.0) * 0.5 * smoothstep(0.55, 0.85, fh) * solid;
    col = mix(col, foamCol, cover * mix(0.8, 1.0, solid));
  }

  // --- aerial perspective into the horizon sky ---------------------------------------
  float fog = 1.0 - exp(-dist * uOptics.w);
  col = mix(col, skyLod(-V, 3.0), fog);

  if (uDebug == 1) col = Nrm * 0.5 + 0.5;
  else if (uDebug == 2) col = spec;
  else if (uDebug == 3) col = vec3(foam, cover, shoreFoam);
  else if (uDebug == 4) col = vec3(alpha * 5.0, sqrt(geoVar) * 5.0, sqrt(variance.x + variance.y) * 5.0);
  else if (uDebug == 5) col = vec3(F);
  else if (uDebug == 6) col = body;
  else if (uDebug == 7) col = refl;
  fragColor = vec4(col, 2.0);
}`,Lt=class{constructor(e,t,n,r){this.sim=e,this.uniforms={uDisp0:{value:null},uDisp1:{value:null},uDisp2:{value:null},uSlope0:{value:null},uSlope1:{value:null},uSlope2:{value:null},uSlope3:{value:null},uLength:{value:new p(...e.lengths)},uWind:{value:0},uImpact:{value:Array.from({length:8},()=>new p)},uImpactSize:{value:Array(8).fill(1)},uShore:{value:t.texture},uTravel:{value:t.travel},uShoreExtent:{value:t.extent},uTime:{value:0},uShoreWave:{value:new p(.55,30,1,1)},uWaveDamp:{value:new I(26,.55)},uSwellDir:{value:new I(1,0)},uGridScale:{value:1},uCellStep:{value:2*Math.PI/Et},uResolution:{value:new I(1,1)},uNearFar:{value:new I(.5,8e4)},uSceneColor:{value:null},uSceneDepth:{value:null},uReflection:{value:null},uReflMatrix:{value:new ce},uSkyCube:{value:n.cube},uSkyMaxLod:{value:Math.log2(n.cubeSize)},uFoamTex:{value:null},uShadowMap:{value:null},uShadowMatrix:{value:new ce},uShadowBias:{value:1e-5},...r,uSunDir:{value:n.sunDir},uSunColor:{value:n.sunColor},uAbsorption:{value:new S(.42,.075,.048)},uScatterColor:{value:new D(0,.05,.08)},uFoamTint:{value:new D(.62,.78,.82)},uSSS:{value:new p(1.6,.06,.05,0)},uFoam:{value:new p(.05,1.3,.35,.85)},uOptics:{value:new p(.02,.06,.04,1/18e3)},uCamForward:{value:new S},uDebug:{value:0},uGlint:{value:.6},uCamSide:{value:-1},uClipR:{value:0},uDio:{value:new I(0,4)}},this.material=new A({glslVersion:te,vertexShader:Ft,fragmentShader:It,uniforms:this.uniforms,side:2}),this.grids=[jt(Et),jt(Et/2)],this.mesh=new w(this.grids[0],this.material),this.mesh.frustumCulled=!1}setDiorama(e,t){if(!e){this.uniforms.uDio.value.x=0,this.uniforms.uClipR.value=0;return}let n=new Float32Array((t+1)*(t+1)*3),r=new Uint32Array(t*t*6),i=2*e/t,a=0,o=0;for(let r=0;r<=t;r++)for(let o=0;o<=t;o++)n[a++]=-e+o*i,n[a++]=0,n[a++]=-e+r*i;for(let e=0;e<t;e++)for(let n=0;n<t;n++){let i=e*(t+1)+n,a=i+t+1;r[o++]=i,r[o++]=a,r[o++]=i+1,r[o++]=i+1,r[o++]=a,r[o++]=a+1}this.dioGrid?.dispose(),this.dioGrid=new ye,this.dioGrid.setAttribute(`position`,new M(n,3)),this.dioGrid.setIndex(new M(r,1)),this.dioGrid.boundingSphere=new We(new S,e*1.5),this.uniforms.uDio.value.set(1,i),this.uniforms.uClipR.value=e}update(e,t){let n=this.uniforms,r=this.sim;n.uDisp0.value=r.displacement[0],n.uDisp1.value=r.displacement[1],n.uDisp2.value=r.displacement[2],n.uSlope0.value=r.slope[0],n.uSlope1.value=r.slope[1],n.uSlope2.value=r.slope[2],n.uSlope3.value=r.slope[3],n.uWind.value=r.params.windSpeed,n.uTime.value=t;let i=P.degToRad(r.params.swellDirection);n.uSwellDir.value.set(-Math.cos(i),-Math.sin(i)),n.uGridScale.value=Math.max(1,Math.abs(e.position.y)/2);let a=+(Math.abs(e.position.y)>Dt);this.mesh.geometry=this.dioGrid&&n.uDio.value.x>.5?this.dioGrid:this.grids[a],n.uCellStep.value=2*Math.PI/(Et>>a),n.uNearFar.value.set(e.near,e.far),e.getWorldDirection(n.uCamForward.value)}},Rt=0x56bc75e2d63100000;function zt(e,t,n,r,i){let a=0;r[0]=0,i[0]=-0x56bc75e2d63100000,i[1]=Rt;for(let n=1;n<t;n++){let t=(e[n]+n*n-(e[r[a]]+r[a]*r[a]))/(2*n-2*r[a]);for(;t<=i[a];)a--,t=(e[n]+n*n-(e[r[a]]+r[a]*r[a]))/(2*n-2*r[a]);a++,r[a]=n,i[a]=t,i[a+1]=Rt}a=0;for(let o=0;o<t;o++){for(;i[a+1]<o;)a++;n[o]=(o-r[a])*(o-r[a])+e[r[a]]}}function Bt(e,t){let n=new Float64Array(t*t);for(let t=0;t<n.length;t++)n[t]=e[t]?0:Rt;let r=new Float64Array(t),i=new Float64Array(t),a=new Int32Array(t),o=new Float64Array(t+1);for(let e=0;e<t;e++){for(let i=0;i<t;i++)r[i]=n[i*t+e];zt(r,t,i,a,o);for(let r=0;r<t;r++)n[r*t+e]=i[r]}for(let e=0;e<t;e++){for(let i=0;i<t;i++)r[i]=n[e*t+i];zt(r,t,i,a,o);for(let r=0;r<t;r++)n[e*t+r]=i[r]}return n}var Vt=(e,t)=>e<0?0:e>t?t:e;function Ht(e,t,n){let r=new Float32Array(e.length),i=new Float32Array(e.length),a=2*n+1,o=t-1;for(let i=0;i<t;i++){let s=i*t,c=0;for(let t=-n;t<=n;t++)c+=e[s+Vt(t,o)];for(let i=0;i<t;i++)r[s+i]=c/a,c+=e[s+Vt(i+n+1,o)]-e[s+Vt(i-n,o)]}for(let e=0;e<t;e++){let s=0;for(let i=-n;i<=n;i++)s+=r[Vt(i,o)*t+e];for(let c=0;c<t;c++)i[c*t+e]=s/a,s+=r[Vt(c+n+1,o)*t+e]-r[Vt(c-n,o)*t+e]}return i}function Ut(e,t){let n=new Ve(e,t,t,F,ee);return n.minFilter=n.magFilter=C,n.wrapS=n.wrapT=Ue,n.needsUpdate=!0,n}var Wt=9.81,Gt=.3,Kt=14,qt=64,Jt=50,Yt=3,Xt=300,Zt=1/25;function Qt(e,t){let n=t*t,r=e.slice(),i=new Uint8Array(n),a=new Int32Array(n),o=new Int32Array(n);for(let s=0;s<n;s++){if(e[s]||i[s])continue;let c=0,l=0;for(a[c++]=s,i[s]=1;c>0;){let r=a[--c],s=r%t;o[l++]=r,s>0&&!e[r-1]&&!i[r-1]&&(i[r-1]=1,a[c++]=r-1),s<t-1&&!e[r+1]&&!i[r+1]&&(i[r+1]=1,a[c++]=r+1),r>=t&&!e[r-t]&&!i[r-t]&&(i[r-t]=1,a[c++]=r-t),r<n-t&&!e[r+t]&&!i[r+t]&&(i[r+t]=1,a[c++]=r+t)}if(l<qt)for(let e=0;e<l;e++)r[o[e]]=1}return r}function $t(e,t,n,r){for(let i=0;i<t.length;i++)t[i]=Math.sqrt(Wt*Math.min(Kt,Math.max(Gt,-e[i]))),n[i]=r/t[i]}function en(e,t,n,r,i,a){let o=a+2;t.fill(2);for(let e=0;e<a;e++)t.fill(1,(e+1)*o+1,(e+1)*o+1+a);for(let s=0;s<a;s++)for(let c=0;c<a;c++){let l=s*a+c,u=r[l],d=n[l],f=1/0,p=1/0;if(c>0&&r[l-1]!==u&&(f=d/(d-n[l-1])),c<a-1&&r[l+1]!==u&&(f=Math.min(f,d/(d-n[l+1]))),s>0&&r[l-a]!==u&&(p=d/(d-n[l-a])),s<a-1&&r[l+a]!==u&&(p=Math.min(p,d/(d-n[l+a]))),f===1/0&&p===1/0)continue;let m=f===1/0?p:p===1/0?f:f*p/(Math.sqrt(f*f+p*p)||1),h=l+2*s+o+1;e[h]=m*i[l],t[h]=2}}function tn(e,t,n,r,i,a){let o=r+2,s=0;for(let c=0,l=a>0?0:r-1;c<r;c++,l+=a)for(let a=0,c=i>0?0:r-1;a<r;a++,c+=i){let i=l*r+c,a=i+2*l+o+1;if(t[a]!==1)continue;t[a]=0;let u=e[a-1],d=e[a+1],f=e[a-o],p=e[a+o],m=u<d?u:d,h=f<p?f:p,g=n[i],_=m>h?m-h:h-m,v=_>=g?(m<h?m:h)+g:.5*(m+h+Math.sqrt(2*g*g-_*_));v<e[a]-1e-4&&(e[a]=v,s++,t[a-1]===0&&(t[a-1]=1),t[a+1]===0&&(t[a+1]=1),t[a-o]===0&&(t[a-o]=1),t[a+o]===0&&(t[a+o]=1))}return s}var nn=(e,t,n,r)=>tn(e,t,n,r,1,1)+tn(e,t,n,r,-1,1)+tn(e,t,n,r,1,-1)+tn(e,t,n,r,-1,-1);function rn(e,t,n){let r=new Float32Array(n*n);for(let i=0;i<n;i++)for(let a=0;a<n;a++){let o=i*n+a,s=e[o+2*i+n+3];r[o]=s===1/0?0:t[o]?s:-s}return r}function an(e,t,n,r,i,a,o){for(let s=0;s<a;s++){let c=s>0?-a:0,l=s<a-1?a:0;for(let u=0;u<a;u++){let d=s*a+u,f=u>0?-1:0,p=e[d+ +(u<a-1)]-e[d+f],m=e[d+l]-e[d+c],h=Math.sqrt(p*p+m*m);h>1e-9&&(n[d]=-p/h,r[d]=-m/h);let g=Math.min(1,Math.max(0,(h/(2*o)*t[d]-.7)/.25));i[d]=g*g*(3-2*g)}}}function on(e,t,n,r,i){let a=new Float32Array(r*r);for(let o=0;o<r;o++){let s=o>0?-r:0,c=o<r-1?r:0;for(let l=0;l<r;l++){let u=o*r+l,d=l>0?-1:0,f=-(e[u+ +(l<r-1)]-e[u+d]+t[u+c]-t[u+s])/(2*i);a[u]=Math.min(Zt,Math.max(-.04,f))*n[u]}}return a}function sn(e,t,n,r,i,a){let o=i>>1,s=new Float32Array(o*o),c=Yt*a,l=Math.ceil(2.5*Jt/c),u=new Float32Array(l);for(let e=0;e<l;e++)u[e]=Math.exp(-e*c/Jt)*c;for(let c=0;c<o;c++)for(let d=0;d<o;d++){let f=2*d,p=2*c,m=p*i+f,h=Math.min(1,Math.max(0,(Xt-r[m])/80));if(r[m]<-3*a||h===0)continue;let g=f,_=p,v=0;for(let r=0;r<l;r++){let a=Math.min(i-2,g|0),o=Math.min(i-2,_|0),s=o*i+a,c=g-a,l=_-o,d=(1-c)*(1-l),f=c*(1-l),p=(1-c)*l,m=c*l;if(v+=u[r]*(e[s]*d+e[s+1]*f+e[s+i]*p+e[s+i+1]*m),g-=Yt*(t[s]*d+t[s+1]*f+t[s+i]*p+t[s+i+1]*m),_-=Yt*(n[s]*d+n[s+1]*f+n[s+i]*p+n[s+i+1]*m),g<0||_<0||g>i-1||_>i-1)break}s[c*o+d]=v*h}return s}function cn(e,t,n,r,i,a,o){let s=o>>1,c=new Float32Array(o*o*4);for(let l=0;l<o;l++){let u=Math.min(s-1,l*.5),d=Math.min(s-2,u|0),f=u-d;for(let u=0;u<o;u++){let p=Math.min(s-1,u*.5),m=Math.min(s-2,p|0),h=p-m,g=d*s+m,_=(r[g]*(1-h)+r[g+1]*h)*(1-f)+(r[g+s]*(1-h)+r[g+s+1]*h)*f,v=l*o+u,y=1/Math.sqrt(Math.sqrt(Math.min(1,Math.max(.04,Math.max(-i[v],.6)/Kt))));c[v*4]=e[v],c[v*4+1]=t[v],c[v*4+2]=n[v],c[v*4+3]=Math.min(2.5,Math.max(.3,_===0?y:y*Math.exp(.5*_)))*a[v]}}return c}function ln(e,t,n,r,i){let a=r*r,o=Qt(t,r),s=new Float32Array(a),c=new Float64Array(a);$t(e,s,c,i);let l=new Float64Array((r+2)*(r+2)).fill(1/0),u=new Uint8Array((r+2)*(r+2));en(l,u,e,o,c,r);for(let e=0;e<12&&nn(l,u,c,r)>0;e++);let d=Ht(Ht(rn(l,o,r),r,2),r,2),f=new Float32Array(a),p=new Float32Array(a),m=new Float32Array(a);an(d,s,f,p,m,r,i);let h=Ht(Ht(on(f,p,m,r,i),r,2),r,2),g=Ht(Ht(m,r,2),r,2),_=cn(d,f,p,sn(h,f,p,n,r,i),e,g,r);return{travel:Ut(_,r),travelData:_}}function un(e,t,n=512){let r=t/n,i=new Float32Array(n*n),a=new Uint8Array(n*n),o=new Uint8Array(n*n);for(let r=0;r<n;r++)for(let s=0;s<n;s++){let c=e(((s+.5)/n-.5)*t,((r+.5)/n-.5)*t),l=r*n+s;i[l]=c,a[l]=c>0,o[l]=c<=0}let s=Bt(a,n),c=Bt(o,n),l=new Float32Array(n*n);for(let e=0;e<l.length;e++)l[e]=o[e]?(Math.sqrt(s[e])-.5)*r:-(Math.sqrt(c[e])-.5)*r;l=Ht(Ht(l,n,2),n,2);let u=new Float32Array(n*n*4);for(let e=0;e<n;e++)for(let t=0;t<n;t++){let a=e*n+t,o=(e,t)=>l[Math.min(n-1,Math.max(0,t))*n+Math.min(n-1,Math.max(0,e))];u[a*4]=i[a],u[a*4+1]=l[a],u[a*4+2]=(o(t+1,e)-o(t-1,e))/(2*r),u[a*4+3]=(o(t,e+1)-o(t,e-1))/(2*r)}return{texture:Ut(u,n),extent:t,data:u,size:n,...ln(i,o,l,n,r)}}var dn=`
precision highp float;
in vec2 vUv;
out vec4 outColor;
vec2 hash22(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy);
}
// tileable voronoi: cell ids wrap at period
vec2 voronoi(vec2 p, float period) {
  vec2 i = floor(p), f = fract(p);
  float f1 = 8.0, f2 = 8.0;
  for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    vec2 g = vec2(x, y);
    vec2 o = hash22(mod(i + g, period));
    float d = length(g + o - f);
    if (d < f1) { f2 = f1; f1 = d; } else if (d < f2) f2 = d;
  }
  return vec2(f1, f2);
}
// cauliflower whitewater: every voronoi cell bulges (dome over the distance to its
// edge, creased where cells meet), at three scales
float billow(vec2 uv) {
  vec2 a = voronoi(uv * 7.0 + 0.3, 7.0), b = voronoi(uv * 17.0 + 0.7, 17.0), c = voronoi(uv * 41.0 + 0.1, 41.0);
  return 0.5 * sqrt(clamp((a.y - a.x) * 2.2, 0.0, 1.0)) + 0.32 * sqrt(clamp((b.y - b.x) * 2.2, 0.0, 1.0))
       + 0.18 * sqrt(clamp((c.y - c.x) * 2.2, 0.0, 1.0));
}
void main() {
  vec2 a = voronoi(vUv * 9.0, 9.0);
  vec2 b = voronoi(vUv * 23.0 + 0.5, 23.0);
  vec2 c = voronoi(vUv * 61.0, 61.0);
  float lace = 1.0 - smoothstep(0.0, 0.22, a.y - a.x);
  float fine = 1.0 - smoothstep(0.0, 0.16, b.y - b.x);
  float bubbles = smoothstep(0.55, 0.15, c.x);
  float v = lace * 0.55 + fine * 0.3 + bubbles * 0.25 + (1.0 - a.x) * 0.25;
  const float e = 1.0 / 1024.0;
  vec2 g = vec2(billow(vUv + vec2(e, 0.0)) - billow(vUv - vec2(e, 0.0)), billow(vUv + vec2(0.0, e)) - billow(vUv - vec2(0.0, e))) / (2.0 * e);
  outColor = vec4(clamp(v * 0.85, 0.0, 1.0), billow(vUv), clamp(0.5 + g / 64.0, 0.0, 1.0));
}`;function fn(e,t,n){let r=new d(n,n,{wrapS:je,wrapT:je,minFilter:h,magFilter:C,generateMipmaps:!0,depthBuffer:!1,anisotropy:e.capabilities.getMaxAnisotropy()}),i=K(t);return new ut(i).render(e,r),i.dispose(),e.setRenderTarget(null),r.texture}function pn(e){return{foam:fn(e,dn,512)}}var mn=class{constructor(e){let t=2600,n=new Float32Array(t*3),r=new Float32Array(t),i=1234567,a=()=>(i=i*16807%2147483647)/2147483647;for(let e=0;e<t;e++){let t=a()*1.9-.9,i=a()*6.2832,o=Math.sqrt(1-t*t);n.set([Math.cos(i)*o,t,Math.sin(i)*o],e*3),r[e]=a()**6*3+.6}let o=new ye;o.setAttribute(`position`,new M(n,3)),o.setAttribute(`sz`,new M(r,1)),this.u={uFull:{value:0},uA:{value:0},uK:{value:1},uT:{value:0},uPx:{value:1}},this.stars=new de(o,new A({uniforms:this.u,transparent:!0,depthWrite:!1,blending:2,vertexShader:`attribute float sz; uniform float uT, uPx, uFull; varying float vB; void main(){ vec4 q = projectionMatrix*viewMatrix*vec4(position*1000.0+cameraPosition,1.0); gl_Position = q.xyww;
        vB = sz*(0.75+0.25*sin(uT*2.0+position.x*91.0)); gl_PointSize = (1.3+sz*0.8)*uPx; if (uFull < 0.5 && position.y < 0.03) gl_Position = vec4(2.0,2.0,2.0,1.0); }`,fragmentShader:`uniform float uA, uK; varying float vB; void main(){ float d = length(gl_PointCoord-0.5); float a = smoothstep(0.5,0.0,d);
        gl_FragColor = vec4(vec3(0.85,0.9,1.0)*vB*a*uA*uK, 1.0); }`})),this.stars.frustumCulled=!1,this.stars.renderOrder=1001,this.mu={uA:this.u.uA,uK:this.u.uK,uDir:{value:new S(0,1,0)}},this.moon=new w(new xe(1,1),new A({uniforms:this.mu,transparent:!0,depthWrite:!1,blending:2,vertexShader:`uniform vec3 uDir; varying vec2 vU; void main(){ vU = position.xy*2.0; vec3 d = normalize(uDir); vec3 rt = normalize(cross(d, vec3(0.0,1.0,0.0))); vec3 up = cross(rt, d);
        vec3 w = d*1000.0 + (rt*position.x + up*position.y)*150.0; vec4 q = projectionMatrix*viewMatrix*vec4(w+cameraPosition,1.0); gl_Position = q.xyww; }`,fragmentShader:`uniform float uA, uK; varying vec2 vU; void main(){ float r = length(vU), R = 0.32;
        float disc = smoothstep(R, R-0.012, r), cut = smoothstep(R*0.92, R*0.92-0.012, length(vU-vec2(0.15,0.07)));
        float lit = disc*(1.0-cut); float glow = exp(-max(r-R,0.0)*9.0)*0.10*(1.0-disc) + disc*0.04;
        gl_FragColor = vec4((vec3(1.0,0.96,0.82)*lit*3.0 + vec3(0.5,0.6,0.85)*glow)*uA*uK, 1.0); }`})),this.moon.frustumCulled=!1,this.moon.renderOrder=1002,e.add(this.stars,this.moon)}update(e,t,n,r,i,a=0){this.u.uFull.value=a;let o=Math.min(1,Math.max(0,(e-.25)/.6));this.u.uA.value=o,this.u.uK.value=1/Math.max(.2,n),this.u.uT.value=r,this.u.uPx.value=i,this.mu.uDir.value.copy(t),this.stars.visible=this.moon.visible=o>.01}},Y=(e,t={})=>new x({color:e,roughness:.6,...t}),X=(e,t,n,r,i=0,a=0,o=0)=>{let s=new w(new N(e,t,n),r);return s.position.set(i,a,o),s.castShadow=!0,s};function hn(e,t,n,r){let i=new E;i.moveTo(-t/2,-e/2),i.lineTo(t/2,-e/2),i.lineTo(t/2,e*.2),i.quadraticCurveTo(t*.35,e*.45,0,e/2),i.quadraticCurveTo(-t*.35,e*.45,-t/2,e*.2),i.closePath();let a=new o(i,{depth:n,bevelEnabled:!1});a.rotateX(-Math.PI/2),a.translate(0,-n*.35,0);let s=new w(a,Y(r,{roughness:.4}));return s.castShadow=!0,s}var gn=e=>new T({color:e,toneMapped:!1});function _n(e,t,n,r,i,a=.5){let o=new w(new fe(a,6,4),gn(t));return o.position.set(n,r,i),o.userData.night=t,e.add(o),o}function vn(e){let t=new m;t.add(hn(12,3.6,1.6,e)),t.add(X(.25,14,.25,Y(14540253),0,7.5,.8));let n=new E;n.moveTo(0,0),n.lineTo(0,13),n.lineTo(0,.5),n.lineTo(5.5,.5),n.closePath();let r=new w(new Be(new E([new I(0,1),new I(0,14),new I(-5.8,1.2)])),Y(16447471,{side:2}));r.rotation.y=Math.PI/2,r.position.z=.8,r.castShadow=!0,t.add(r);let i=new w(new Be(new E([new I(0,1.5),new I(0,12.5),new I(4.6,1.2)])),Y(e===16777215?2915301:16777215,{side:2}));return i.rotation.y=Math.PI/2,i.position.z=.9,t.add(i),_n(t,16777215,0,15,.8),_n(t,16719904,-1.8,1.2,4,.35),_n(t,2162496,1.8,1.2,4,.35),t}function yn(e){let t=new m;t.add(hn(14,4.6,2.2,e)),t.add(X(3.6,3,4,Y(15921126),0,2.4,-1.5));let n=X(3.7,.9,.2,gn(2241348),0,3,.55);return n.userData.win=1,t.add(n),t.add(X(.2,8,.2,Y(5592405),0,5,2.5)),t.add(X(5,.15,.15,Y(5592405),0,7,2.5)),_n(t,16777215,0,9.2,2.5),_n(t,16719904,-2.4,1.6,2,.35),_n(t,2162496,2.4,1.6,2,.35),t}function bn(){let e=new m;e.add(hn(16,6,2.6,2043204)),e.add(X(4.6,3.6,6,Y(14170411),0,2.8,-1)),e.add(X(3.6,2.2,3.4,Y(16777215),0,5.6,-.6));let t=X(3.7,.9,.2,gn(2241348),0,5.9,1.1);return t.userData.win=1,e.add(t),e.add(X(1.2,3,1.2,Y(2236962),0,6.5,-3.2)),_n(e,16764006,0,8.6,-.6),_n(e,16719904,-3.1,2,2,.4),_n(e,2162496,3.1,2,2,.4),e}function xn(){let e=new m;e.add(hn(40,10,3.2,16053492)),e.add(X(8.6,3.4,24,Y(16777215),0,3.4,-2)),e.add(X(7,2.6,12,Y(2915301),0,6.4,1));for(let t of[-1,1]){let n=X(.2,1,22,gn(2241348),t*4.35,3.6,-2);n.userData.win=1,e.add(n)}return e.add(X(1.8,3.5,2.5,Y(14170411),0,8.8,-5)),_n(e,16777215,0,10.5,6),_n(e,16719904,-5,2,10,.5),_n(e,2162496,5,2,10,.5),e}function Sn(e,t){let n=new ye,r=[],i=[];for(let n of[-1,1])r.push(0,0,0,n*t*.25,0,0,n*t*1.5,0,-e,n*t*2.1,0,-e),i.push(.75,.75,0,0);return n.setAttribute(`position`,new Se(r,3)),n.setAttribute(`a`,new Se(i,1)),n.setIndex([0,1,2,1,3,2,4,6,5,5,6,7]),new w(n,new A({transparent:!0,depthWrite:!1,side:2,uniforms:{uK:{value:1}},vertexShader:`attribute float a; varying float vA; void main(){ vA=a; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,fragmentShader:`uniform float uK; varying float vA; void main(){ gl_FragColor = vec4(vec3(0.95)*uK, vA*0.55); }`}))}var Cn=class{constructor(e,t,n){this.g=new m,e.add(this.g),this.H=t,this.boats=[],this.lights=[],this.wins=[],this.wakes=[],[[vn,16777215,1],[vn,2051740,1],[vn,12597547,1],[yn,3046706,.7],[yn,15844367,.7],[bn,0,.8],[xn,0,.6],[vn,16777215,1]].forEach(([e,t,r],i)=>{let a=e(t);a.scale.setScalar(1.4),this.g.add(a);let o=Sn(e===xn?60:30,e===xn?7:3.5);o.position.y=.3,a.add(o),this.wakes.push(o),a.traverse(e=>{e.userData.night&&this.lights.push(e),e.userData.win&&this.wins.push(e)});let s=n*(.5+.38*(i*.618%1)),c=i%2?1:-1;this.boats.push({o:a,r:s,a:i*.83,w:c*r*3.2/s,e:.8+i%3*.15,ph:i*1.7})}),this.buoys=[];for(let e=0;e<10;e++){let r=e*.63+.2,i=n*(.42+e%3*.05),a=new m,o=e%2?14170411:3054922;a.add(Object.assign(new w(new c(.9,1.3,3,10),Y(o)),{castShadow:!0})),a.add(new w(new L(.9,1.6,10),Y(o)).translateY(2.3)),this.lights.push(_n(a,o===14170411?16724016:3211104,0,3.4,0,.45));let s=Math.cos(r)*i,l=Math.sin(r)*i;for(let e=0;e<60&&t(s,l)>-4;e++)s*=1.03,l*=1.03;a.position.set(s,0,l),a.userData.ph=e,a.scale.setScalar(.8),this.g.add(a),this.buoys.push(a)}let r=Y(16119285,{side:2});this.gulls=[];for(let e=0;e<9;e++){let t=new m;for(let e of[-1,1]){let n=new w(new xe(2.4,.8).translate(e*1.2,0,0),r);n.rotation.x=-Math.PI/2,t.add(n),t.userData[e]=n}t.add(X(.5,.4,1.4,r)),t.scale.setScalar(1.6),this.g.add(t),this.gulls.push({g:t,r:120+e*45,a:e*1.3,h:40+e%4*14,w:(e%2?1:-1)*.25})}let i=Y(7176082,{roughness:.3});this.dol=[];for(let e=0;e<3;e++){let t=new m,n=new w(new le(.9,4,4,8),i);n.rotation.x=Math.PI/2,t.add(n),t.add(X(.2,1.2,.9,i,0,1,.2)),t.scale.setScalar(1.5),this.g.add(t),this.dol.push({d:t,t:e*4.3,a:e*2.1})}this.R=n,this.enabled=!0}setEnabled(e){this.enabled=e,this.g.visible=e}bob(e,t,n){return .9*Math.sin(n*.9+e*.021)+.6*Math.sin(n*1.3+t*.017+1.2)+.25*Math.sin(n*2.1+(e+t)*.05)}update(e,t,n,r){if(!this.enabled)return;let i=this.H;for(let n of this.boats){n.a+=n.w*e;let r=Math.cos(n.a)*n.r,a=Math.sin(n.a)*n.r*n.e;for(let e=0;e<40&&i(r,a)>-5;e++)r*=1.025,a*=1.025;let o=n.o,s=o.position.x,c=o.position.z;if(o.position.set(r,this.bob(r,a,t)+.3,a),Math.hypot(r-s,a-c)>.001){let t=Math.atan2(r-s,a-c)-o.rotation.y;t=Math.atan2(Math.sin(t),Math.cos(t)),o.rotation.y+=t*Math.min(1,e*2)}o.rotation.z=.05*Math.sin(t*1.1+n.ph),o.rotation.x=.04*Math.sin(t*.8+n.ph*2)}for(let e of this.buoys)e.position.y=this.bob(e.position.x,e.position.z,t)-.5,e.rotation.z=.12*Math.sin(t*1.4+e.userData.ph);for(let r of this.gulls){r.a+=r.w*e*40/r.r,r.g.position.set(Math.cos(r.a)*r.r+160,r.h+3*Math.sin(t+r.r),Math.sin(r.a)*r.r+500),r.g.rotation.y=r.a*-Math.sign(r.w)+(r.w>0?0:Math.PI);let i=Math.sin(t*6+r.r)*.5;r.g.userData[-1].rotation.z=i,r.g.userData[1].rotation.z=-i,r.g.visible=n<.6}for(let t of this.dol){t.t+=e;let n=t.t%13;n<e&&(t.a+=1.1);let r=this.R*.62,a=Math.cos(t.a)*r,o=Math.sin(t.a)*r,s=Math.min(1,n/1.6),c=Math.sin(s*Math.PI)*6-2;t.d.visible=n<1.6&&i(a,o)<-6,t.d.position.set(a+Math.cos(t.a+1.57)*s*14,c,o+Math.sin(t.a+1.57)*s*14),t.d.rotation.set(0,t.a+1.57+Math.PI/2,0),t.d.rotateX(-(s-.5)*2.2)}let a=n>.4;for(let e of this.lights)e.visible=a,e.material.color.setHex(e.userData.night).multiplyScalar(4*r);for(let e of this.wins)e.material.color.setHex(a?16762992:2241348).multiplyScalar(a?3*r:1);for(let e of this.wakes)e.material.uniforms.uK.value=a?.35:1}},wn=(e=1)=>new A({transparent:!0,depthWrite:!1,side:2,blending:2,uniforms:{uSun:{value:new S(0,1,0)},uK:{value:e},uN:{value:0}},vertexShader:`varying vec3 vN, vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix)*normal); gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`uniform vec3 uSun; uniform float uK, uN; varying vec3 vN, vW;
    void main(){ vec3 V = normalize(cameraPosition - vW), N = normalize(vN); if (dot(N,V) < 0.0) N = -N;
      float f = pow(1.0 - max(dot(N,V),0.0), 5.0); vec3 R = reflect(-V, N);
      float spec = pow(max(dot(R, normalize(uSun)),0.0), 180.0);
      float sky = smoothstep(-0.1, 0.6, R.y) * 0.05;
      vec3 c = vec3(0.75,0.88,1.0)*(f*0.3 + sky) + vec3(0.95,0.97,1.0)*spec*0.45;
      gl_FragColor = vec4(c*uK*mix(1.0,0.2,uN), 1.0); }`});function Tn(e,t){let n=new x({color:5212812,metalness:.7,roughness:.35}),r=new x({color:14673380,metalness:0,roughness:.35}),i=new T({color:13625599,transparent:!0,opacity:.35,depthWrite:!1,blending:2}),a=[],o={};{let s=new m,c=e+40,l=t+360,u=wn();a.push(u);let d=new N(2*c,360,2*c);d.translate(0,t+180,0);let f=new w(d,u);f.renderOrder=50,s.add(f);let p=new b(d);s.add(new oe(p,i));let h=(e,r)=>{let i=new w(new N(9,360,9),n);return i.position.set(e,t+180,r),i};for(let e of[-1,1])for(let r of[-1,1]){s.add(h(e*c,r*c));for(let i of[t+4,l]){let t=new w(new N(22,10,22),n);t.position.set(e*c,i,r*c),s.add(t)}}for(let e of[t+3,l])for(let t of[-1,1]){let r=new w(new N(2*c,6,6),n);r.position.set(0,e,t*c),s.add(r);let i=new w(new N(6,6,2*c),n);i.position.set(t*c,e,0),s.add(i)}let g=new w(new N(2*c+60,50,2*c+60),r);g.position.y=t-25,s.add(g);for(let e of[-1,1]){let r=new w(new N(2*c+64,5,8),n);r.position.set(0,t-1,e*(c+30)),s.add(r);let i=new w(new N(8,5,2*c+64),n);i.position.set(e*(c+30),t-1,0),s.add(i)}let _=new w(new N(2*c+56,2,2*c+56),r);_.position.y=t-.5,s.add(_);let v=new w(new N(2*c+90,20,2*c+90),r);v.position.y=t-58,s.add(v),o.cube=s}{let r=new m,i=e+40,s=wn(1.1);a.push(s);let c=new fe(i,96,48,0,Math.PI*2,0,Math.PI/2);c.scale(1,.55,1),c.translate(0,t,0);let u=new w(c,s);u.renderOrder=50,r.add(u);let d=new w(new l(i,7,12,200).rotateX(Math.PI/2),n);d.position.y=t+2,r.add(d);let f=new w(new fe(16,16,12),n);f.position.y=t+i*.55+10,r.add(f),o.dome=r}let s=new m;return s.add(o.cube,o.dome),{root:s,set(e){o.cube.visible=e===`cube`,o.dome.visible=e===`dome`},update(e,t){for(let n of a)n.uniforms.uSun.value.copy(e),n.uniforms.uN.value=t}}}var En=6360,Dn=6460,On=.01,kn=256,An=64,jn=32,Mn=192,Nn=108;function Pn(e){let t=e.turbidity*e.turbidity;return{rayleigh:[.005802,.013558,.0331].map(t=>t*e.rayleigh),mieScattering:.003996*t,mieExtinction:.00444*t,ozone:[65e-5,.001881,85e-6]}}function Fn(e,t,n){let r=e*(2*En+e)+n*(2*(En+e)*t+n);return r/(Math.sqrt(En*En+r)+En)}function In(e,t,n,r=[0,0,0]){let i=En+t,a=Math.max(-i*n+Math.sqrt(Math.max(i*i*(n*n-1)+Dn*Dn,0)),0),o=[0,0,0];for(let r=0;r<40;r++){let i=Math.max(Fn(t,n,a*((r+.5)/40)**2),0),s=(2*r+1)*a/1600,c=Math.exp(-i/8)*s,l=Math.exp(-i/1.2)*s,u=Math.max(0,1-Math.abs(i-25)/15)*s;for(let t=0;t<3;t++)o[t]+=e.rayleigh[t]*c+e.mieExtinction*l+e.ozone[t]*u}for(let e=0;e<3;e++)r[e]=Math.exp(-o[e]);return r}var Ln=On,Rn=`
precision highp float;
precision highp sampler2D;
#define PI 3.14159265359
const float RB = ${En.toFixed(1)}, RT = ${Dn.toFixed(1)}, OBS_H = ${On};
const float H_TOP = ${Math.sqrt(Dn*Dn-En*En).toFixed(4)};  // sqrt(RT^2 - RB^2)
const float MIE_G = 0.8;
const float GROUND_ALBEDO = 0.1;
const vec2 SKY_RES = vec2(${Mn}.0, ${Nn}.0);
uniform vec3 uRayleigh;     // Rayleigh scattering at sea level (1/km)
uniform vec2 uMie;          // aerosol scattering, extinction at sea level (1/km)
uniform vec3 uOzone;        // ozone absorption at the layer peak (1/km)
uniform float uSunIllum;    // sun illuminance outside the atmosphere
uniform sampler2D uTransLut;
uniform sampler2D uMsLut;
uniform sampler2D uSkyView;

vec2 toSub(vec2 u, vec2 n) { return u * (n - 1.0) / n + 0.5 / n; }
vec2 fromSub(vec2 u, vec2 n) { return (u - 0.5 / n) * n / (n - 1.0); }

// altitude after travelling t along a ray from altitude h with zenith cosine mu; r = radius
float altAt(float h, float mu, float t, out float r) {
  float q = h * (2.0 * RB + h) + t * (2.0 * (RB + h) * mu + t);  // r^2 - RB^2 without cancellation
  r = sqrt(RB * RB + q);
  return q / (r + RB);
}

struct Medium { vec3 ray; float mie; vec3 scat; vec3 ext; };
Medium medium(float h) {
  h = max(h, 0.0);
  float dM = exp(-h / 1.2);
  Medium m;
  m.ray = uRayleigh * exp(-h / 8.0);
  m.mie = uMie.x * dM;
  m.scat = m.ray + m.mie;
  m.ext = m.ray + uMie.y * dM + uOzone * max(0.0, 1.0 - abs(h - 25.0) / 15.0);  // ozone: tent 10..40 km
  return m;
}

float distTop(float r, float mu) { return max(-r * mu + sqrt(max(r * r * (mu * mu - 1.0) + RT * RT, 0.0)), 0.0); }

// Bruneton's transmittance parameterisation (covers the rays that miss the ground)
vec2 transUv(float h, float mu) {
  float r = RB + h, rho = sqrt(max(h, 0.0) * (2.0 * RB + h));
  float dMin = RT - r, dMax = rho + H_TOP;
  return vec2((distTop(r, mu) - dMin) / (dMax - dMin), rho / H_TOP);
}
vec3 transmittance(float h, float mu) { return textureLod(uTransLut, transUv(h, mu), 0.0).rgb; }

// 0 where the planet hides the sun from altitude h (radius r)
float sunVisible(float h, float r, float muS) { return step(-sqrt(max(h, 0.0) * (2.0 * RB + h)) / r, muS); }

// sky-view LUT, upper hemisphere only (the observer is at sea level): u = sqrt of the azimuth
// cosine to the sun, v = sqrt(elevation / 90deg) so texels crowd the horizon
vec3 skyView(vec3 d, vec3 sunDir) {
  float v = sqrt(asin(clamp(d.y, 0.0, 1.0)) / (0.5 * PI));
  float cosPhi = dot(d.xz, sunDir.xz) * inversesqrt(max(dot(d.xz, d.xz) * dot(sunDir.xz, sunDir.xz), 1e-12));
  float u = sqrt(clamp(0.5 - 0.5 * cosPhi, 0.0, 1.0));
  return textureLod(uSkyView, toSub(vec2(u, v), SKY_RES), 0.0).rgb;
}
`,zn=`
in vec2 vUv;
out vec4 fragColor;
`,Bn=`
float rayleighPhase(float c) { return 0.0596831 * (1.0 + c * c); }
float miePhase(float c) {
  float k = 1.0 + MIE_G * MIE_G - 2.0 * MIE_G * c;
  return (1.0 - MIE_G * MIE_G) / (4.0 * PI * k * sqrt(k));
}
vec3 multiScatter(float h, float muS) {
  vec2 uv = clamp(vec2(muS * 0.5 + 0.5, h / (RT - RB)), 0.0, 1.0);
  return textureLod(uMsLut, toSub(uv, vec2(${jn}.0)), 0.0).rgb;
}
vec3 integrate(float h, float mu, float muS, float nu, int n, out vec3 fms) {
  float r0 = RB + h;
  float gd = r0 * r0 * (mu * mu - 1.0) + RB * RB;
  bool ground = mu < 0.0 && gd >= 0.0;
  float tMax = ground ? max(-r0 * mu - sqrt(gd), 0.0) : distTop(r0, mu);
#ifdef MS_PASS
  float pR = 1.0 / (4.0 * PI), pM = pR;
#else
  float pR = rayleighPhase(nu), pM = miePhase(nu);
#endif
  vec3 L = vec3(0.0), T = vec3(1.0);
  fms = vec3(0.0);
  float k = tMax / float(n * n);
  for (int i = 0; i < n; i++) {
    float fi = float(i);
    float t = k * (fi + 0.5) * (fi + 0.5), dt = k * (2.0 * fi + 1.0);
    float r;
    float ht = altAt(h, mu, t, r);
    float muSt = clamp((r0 * muS + t * nu) / r, -1.0, 1.0);
    Medium m = medium(ht);
    vec3 S = transmittance(ht, muSt) * sunVisible(ht, r, muSt) * (m.ray * pR + m.mie * pM);
#ifndef MS_PASS
    S += m.scat * multiScatter(ht, muSt);
#endif
    vec3 Ts = exp(-m.ext * dt);
    vec3 seg = (1.0 - Ts) / max(m.ext, vec3(1e-7));
    L += T * S * seg;
    fms += T * m.scat * seg;
    T *= Ts;
  }
#ifdef MS_PASS
  if (ground) {
    float muSg = clamp((r0 * muS + tMax * nu) / RB, -1.0, 1.0);
    L += T * transmittance(0.0, muSg) * max(muSg, 0.0) * (GROUND_ALBEDO / PI);
  }
#endif
  return L;
}
`,Vn=Rn+zn+`
void main() {
  float rho = H_TOP * vUv.y;
  float r = sqrt(rho * rho + RB * RB), h = rho * rho / (r + RB);
  float dMin = RT - r, d = mix(dMin, rho + H_TOP, vUv.x);
  float mu = d <= 0.0 ? 1.0 : clamp((H_TOP * H_TOP - rho * rho - d * d) / (2.0 * r * d), -1.0, 1.0);
  vec3 od = vec3(0.0);
  for (int i = 0; i < 40; i++) {
    float fi = float(i), rr;
    od += medium(altAt(h, mu, d * (fi + 0.5) * (fi + 0.5) / 1600.0, rr)).ext * (2.0 * fi + 1.0);
  }
  fragColor = vec4(exp(-od * (d / 1600.0)), 1.0);
}`,Hn=`#define MS_PASS
`+Rn+zn+Bn+`
void main() {
  vec2 uv = fromSub(vUv, vec2(${jn}.0));
  float muS = uv.x * 2.0 - 1.0, h = max(uv.y * (RT - RB), OBS_H);
  float sinS = sqrt(max(1.0 - muS * muS, 0.0));
  vec3 L = vec3(0.0), F = vec3(0.0), fms;
  for (int j = 0; j < 8; j++) {
    float mu = 1.0 - 2.0 * (float(j) + 0.5) / 8.0, sinV = sqrt(1.0 - mu * mu);
    for (int i = 0; i < 8; i++) {
      float nu = cos(2.0 * PI * (float(i) + 0.5) / 8.0) * sinV * sinS + mu * muS;
      L += integrate(h, mu, muS, nu, 20, fms);
      F += fms;
    }
  }
  fragColor = vec4((L / 64.0) / (1.0 - F / 64.0), 1.0);
}`,Un=Rn+zn+Bn+`
uniform float uSunMu;
void main() {
  vec2 uv = fromSub(vUv, SKY_RES);
  float cosPhi = 1.0 - 2.0 * uv.x * uv.x, elev = 0.5 * PI * uv.y * uv.y;
  float mu = sin(elev), cosE = cos(elev);
  vec3 v = vec3(cosE * cosPhi, mu, cosE * sqrt(max(1.0 - cosPhi * cosPhi, 0.0)));
  vec3 s = vec3(sqrt(max(1.0 - uSunMu * uSunMu, 0.0)), uSunMu, 0.0);
  vec3 fms;
  fragColor = vec4(integrate(OBS_H, mu, uSunMu, dot(v, s), 32, fms) * uSunIllum, 1.0);
}`,Wn=(e,t)=>new d(e,t,{type:_,depthBuffer:!1,generateMipmaps:!1,minFilter:C,magFilter:C}),Gn=class{constructor(){this.transRT=Wn(kn,An),this.msRT=Wn(jn,jn),this.skyRT=Wn(Mn,Nn),this.uniforms={uRayleigh:{value:new S},uMie:{value:new I},uOzone:{value:new S},uSunIllum:{value:1},uTransLut:{value:this.transRT.texture},uMsLut:{value:this.msRT.texture},uSkyView:{value:this.skyRT.texture}};let{uTransLut:e,uMsLut:t,uSkyView:n,...r}=this.uniforms;this.transPass=new ut(K(Vn,r)),this.msPass=new ut(K(Hn,{...r,uTransLut:e})),this.skyPass=new ut(K(Un,{...r,uTransLut:e,uMsLut:t,uSunMu:{value:0}}))}update(e,t,n,r){let i=this.uniforms;i.uRayleigh.value.fromArray(t.rayleigh),i.uMie.value.set(t.mieScattering,t.mieExtinction),i.uOzone.value.fromArray(t.ozone),i.uSunIllum.value=r,this.skyPass.material.uniforms.uSunMu.value=n,this.transPass.render(e,this.transRT),this.msPass.render(e,this.msRT),this.skyPass.render(e,this.skyRT)}},Kn=1024,qn=2.5,Jn=`
out vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * mat4(mat3(viewMatrix)) * vec4(position, 1.0);
  gl_Position = p.xyww; // far plane
}`,Yn=`
uniform samplerCube uCube;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
in vec3 vDir;
out vec4 fragColor;
void main() {
  vec3 d = normalize(vDir);
  vec4 sky = textureLod(uCube, vec3(d.x, max(d.y, 0.0), d.z), 0.0);
  float c = dot(d, uSunDir);
  // 0.27 deg disc with limb darkening, plus a tight glow; hidden by clouds (cube alpha)
  float disc = smoothstep(0.999985, 0.999992, c) * (0.6 + 0.4 * smoothstep(0.999985, 1.0, c));
  vec3 col = sky.rgb + uSunColor * (disc * 900.0 + pow(max(c, 0.0), 2200.0) * 1.5) * step(0.0, d.y) * sky.a;
  fragColor = vec4(col, 1.0);
}`,Xn=Rn+`
const float CLOUD_H = ${qn.toFixed(2)};
const vec3 WATER = vec3(0.02, 0.035, 0.045);  // deep-water body reflectance for the lower hemisphere
uniform int uFace;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform float uCloudCoverage;
in vec2 vUv;
out vec4 fragColor;

vec3 faceDir(vec2 uv) {
  vec2 c = uv * 2.0 - 1.0;
  if (uFace == 0) return vec3(1.0, -c.y, -c.x);
  if (uFace == 1) return vec3(-1.0, -c.y, c.x);
  if (uFace == 2) return vec3(c.x, 1.0, c.y);
  if (uFace == 3) return vec3(c.x, -1.0, -c.y);
  if (uFace == 4) return vec3(c.x, -c.y, 1.0);
  return vec3(-c.x, -c.y, -1.0);
}

// cloud layer ported from three's Sky.js (static: time = 0, its cloudScale/elevation/density)
vec2 gradient(vec2 i) {
  vec3 p = fract(i.xyx * vec3(0.1031, 0.1030, 0.0973));
  p += dot(p, p.yzx + 33.33);
  return fract((p.xx + p.yz) * p.zy) * 2.0 - 1.0;
}
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = dot(gradient(i), f);
  float b = dot(gradient(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));
  float c = dot(gradient(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));
  float d = dot(gradient(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y) * 1.6;
}
float fbm(vec2 p) {
  float s = 0.0, a = 1.0;
  for (int i = 0; i < 4; i++) { s += a * noise(p); a *= 0.5; p *= 2.0; }
  return s;
}

void main() {
  vec3 d = normalize(faceDir(vUv));
  vec3 up = skyView(vec3(0.0, 1.0, 0.0), uSunDir);
  if (d.y < 0.0) {
    // below the horizon: sea, Fresnel between the mirrored sky and a dark water body
    float F = 0.02 + 0.98 * pow(1.0 + d.y, 5.0);
    vec3 body = WATER * (uSunColor * max(uSunDir.y, 0.0) + up);
    fragColor = vec4(mix(body, skyView(vec3(d.x, -d.y, d.z), uSunDir), F), 1.0);
    return;
  }
  vec3 col = skyView(d, uSunDir);
  float vis = 1.0;
  if (d.y > 1e-3 && uCloudCoverage > 0.0) {
    vec2 p = d.xz / d.y * 0.396;   // cloudScale 2e-4 * 1000 / mix(1, 0.1, cloudElevation 0.55)
    float n = clamp(fbm(p) * 0.7 + 0.5, 0.0, 1.0);
    float th = 1.0 - clamp(uCloudCoverage + noise(p * 0.3) * 0.222, 0.0, 1.0);  // clear gaps / dense banks
    float fade = smoothstep(0.0, 0.063, d.y);
    float mask = smoothstep(th, th + 0.3, n) * fade;
    float depth = max(0.0, n - th);
    float beer = exp(-4.0 * depth);
    float shade = mix(0.45, 1.0, clamp(beer * (1.0 - beer * beer) * 2.6, 0.0, 1.0));  // beer-powder
    float c = dot(d, uSunDir);
    float silver = clamp(0.51 / pow(1.49 - c * 1.4, 1.5), 0.0, 3.0);  // HG g = 0.7 rim toward the sun
    float edge = mask * (1.0 - mask) * 4.0;
    float alpha = (1.0 - exp(-depth * 6.6)) * fade;                    // cloudDensity 0.55

    // the deck point along d: sunlight through the atmosphere (and planet shadow) to it, and the
    // eye-to-deck transmittance so distant clouds dissolve into the haze
    float r0 = RB + OBS_H, rc = RB + CLOUD_H;
    float t = -r0 * d.y + sqrt(r0 * r0 * d.y * d.y + (rc - r0) * (rc + r0));
    float muV = (r0 * d.y + t) / rc;
    float muS = clamp((r0 * uSunDir.y + t * c) / rc, -1.0, 1.0);
    vec3 sun = uSunIllum * transmittance(CLOUD_H, muS) * sunVisible(CLOUD_H, rc, muS) * 0.22;  // albedo/pi
    vec3 cloud = up + sun * (shade + silver * edge * 0.6);
    vec3 tv = clamp(transmittance(OBS_H, d.y) / max(transmittance(CLOUD_H, muV), vec3(1e-4)), 0.0, 1.0);
    col = mix(col, mix(col, cloud, tv), alpha);
    vis = 1.0 - alpha;
  }
  fragColor = vec4(col, vis);
}`,Zn=class{constructor(e){this.renderer=e,this.cubeSize=Kn,this.sunDir=new S(0,1,0),this.sunColor=new S(1,1,1),this.params={elevation:3.5,azimuth:205,turbidity:2,rayleigh:1,cloudCoverage:.38,sunIntensity:9},this.atmosphere=new Gn,this.cubeRT=new Le(Kn,{type:_,generateMipmaps:!0,depthBuffer:!1,minFilter:h,magFilter:C}),this.cube=this.cubeRT.texture,this.cubePass=new ut(K(Xn,{...this.atmosphere.uniforms,uFace:{value:0},uSunDir:{value:this.sunDir},uSunColor:{value:this.sunColor},uCloudCoverage:{value:0}})),this.camera=new ve,this.background=new w(new N(1,1,1),new A({glslVersion:te,vertexShader:Jn,fragmentShader:Yn,uniforms:{uCube:{value:this.cube},uSunDir:{value:this.sunDir},uSunColor:{value:this.sunColor}},side:1,depthWrite:!1})),this.background.frustumCulled=!1,this.background.renderOrder=1e3}update(){let e=this.params,t=this.renderer,n=P.degToRad(90-e.elevation),r=P.degToRad(e.azimuth);this.sunDir.setFromSphericalCoords(1,n,r);let i=Pn(e),a=In(i,Ln,Math.max(this.sunDir.y,0)),o=P.smoothstep(e.elevation,-2,2);this.sunColor.set(a[0],a[1],a[2]).multiplyScalar(e.sunIntensity*o);let s=t.getRenderTarget(),c=t.getActiveCubeFace(),l=t.getActiveMipmapLevel();this.atmosphere.update(t,i,this.sunDir.y,Math.PI*e.sunIntensity);let u=this.cubePass.material.uniforms;u.uCloudCoverage.value=e.cloudCoverage;for(let e=0;e<6;e++)u.uFace.value=e,this.cube.generateMipmaps=e===5,t.setRenderTarget(this.cubeRT,e),t.render(this.cubePass.mesh,this.camera);t.setRenderTarget(s,c,l),this.cube.needsPMREMUpdate=!0}};function Qn(e=384,t=256){let n=new xe(Me,Me,e,e);n.rotateX(-Math.PI/2);let r=n.attributes.position;for(let e=0;e<r.count;e++)r.setY(e,j(r.getX(e),r.getZ(e)));let i=n.index.array,a=[];for(let e=0;e<i.length;e+=3)Math.max(r.getY(i[e]),r.getY(i[e+1]),r.getY(i[e+2]))>-34&&a.push(i[e],i[e+1],i[e+2]);n.setIndex(a),n.computeVertexNormals(),n.computeBoundingSphere();let o=new Float32Array(t*t);for(let e=0;e<t;e++)for(let n=0;n<t;n++){let r=((n+.5)/t-.5)*Me,i=((e+.5)/t-.5)*Me;o[e*t+n]=j(r,i)}let s=new Ve(o,t,t,_e,ee);return s.minFilter=s.magFilter=C,s.wrapS=s.wrapT=Ue,s.needsUpdate=!0,{geometry:n,heightMap:s}}var $n=J[2],er=1/1.33,tr=16,nr=[{res:512,format:_e},{res:256,format:O}],rr=[{depth:1.5,target:0,channel:0,cells:128,margin:6},{depth:4,target:1,channel:0,cells:64,margin:7},{depth:10,target:1,channel:1,cells:32,margin:8}],ir=e=>e.toPrecision(9),[ar,or,sr]=rr.map(e=>ir(e.depth)),cr=`
precision highp float;
in vec3 position;               // PlaneGeometry vertex: cell coords - uCells / 2
uniform highp sampler2D uSlope; // cascade 2 (sx, sz, ...)
uniform vec3 uSun;              // towards the sun
uniform float uDepth, uCells, uLod, uMargin, uRes;
out vec2 vOld;

// cubic B-spline from 4 bilinear taps (GPU Gems 2, ch. 20). The landed intensity goes
// with the slope's derivative, which bilinear makes piecewise constant: every slope texel
// would land as its own bead along the caustic lines.
vec2 slopeBSpline(vec2 uv, float lod) {
  vec2 size = vec2(textureSize(uSlope, int(lod)));
  vec2 st = uv * size - 0.5, i = floor(st), f = st - i;
  vec2 f2 = f * f, f3 = f2 * f;
  vec2 w0 = (1.0 - 3.0 * f + 3.0 * f2 - f3) / 6.0, w1 = (4.0 - 6.0 * f2 + 3.0 * f3) / 6.0;
  vec2 w2 = (1.0 + 3.0 * f + 3.0 * f2 - 3.0 * f3) / 6.0, w3 = f3 / 6.0;
  vec2 g0 = w0 + w1, g1 = w2 + w3;
  vec2 h0 = (i - 0.5 + w1 / g0) / size, h1 = (i + 1.5 + w3 / g1) / size;
  return g0.y * (g0.x * textureLod(uSlope, h0, lod).xy + g1.x * textureLod(uSlope, vec2(h1.x, h0.y), lod).xy)
       + g1.y * (g0.x * textureLod(uSlope, vec2(h0.x, h1.y), lod).xy + g1.x * textureLod(uSlope, h1, lod).xy);
}

void main() {
  vec2 t = (position.xy + 0.5 * uCells + 0.5) / uCells;   // tile uv, at a texel centre of mip uLod
  vec2 s = slopeBSpline(t, uLod);
  vec3 r = refract(-uSun, normalize(vec3(-s.x, 1.0, -s.y)), ${ir(er)});
  vec3 rf = refract(-uSun, vec3(0.0, 1.0, 0.0), ${ir(er)});
  vec2 d = (r.xz / max(-r.y, 0.05) - rf.xz / -rf.y) * (uDepth / ${ir($n)});
  // ponytail: offsets past the margin (steep facets at low sun) are clamped, widen the margin if it shows
  d = clamp(d, -uMargin, uMargin);
  vOld = t * uRes;
  gl_Position = vec4((t + d) * 2.0 - 1.0, 0.0, 1.0);
}`,lr=`
precision highp float;
uniform vec3 uMask;
in vec2 vOld;
out vec4 outColor;

void main() {
  // raster space is the landed space at one texel per pixel, so the landed area is 1 and
  // the ratio is the undisturbed area (in texels) per pixel
  vec2 a = dFdx(vOld), b = dFdy(vOld);
  outColor = vec4(uMask * min(abs(a.x * b.y - a.y * b.x), ${ir(tr)}), 0.0);
}`,ur=`
uniform sampler2D uCaustics, uCausticsDeep;
const float CAUSTIC_TEXELS_PER_M = ${ir(nr[0].res/$n)};
float waveCaustic(vec2 entryXZ, float depth, float lod) {
  vec2 uv = entryXZ * ${ir(1/$n)};
  float v = textureLod(uCaustics, uv, lod).r;
  if (depth > ${ar}) {
    // deep texels are 2x the near ones; past the deepest slice keep it, one mip blurrier
    // per doubling of depth
    vec2 d = textureLod(uCausticsDeep, uv, max(lod - 1.0, 0.0) + log2(max(depth / ${sr}, 1.0))).rg;
    v = depth < ${or} ? mix(v, d.r, (depth - ${ar}) / (${or} - ${ar}))
                      : mix(d.r, d.g, clamp((depth - ${or}) / (${sr} - ${or}), 0.0, 1.0));
  }
  return mix(1.0, v, clamp(depth / ${ar}, 0.0, 1.0));   // no caustic at zero depth
}
`,dr=new D,fr=class{constructor(e,t){this.renderer=e,this.sim=t,this.targets=nr.map(({res:e,format:t})=>new d(e,e,{type:_,format:t,samples:4,minFilter:h,magFilter:C,wrapS:je,wrapT:je,generateMipmaps:!0,depthBuffer:!1})),this.uniforms={uCaustics:{value:this.targets[0].texture},uCausticsDeep:{value:this.targets[1].texture}},this.slope={value:null},this.sun={value:new S},this.scenes=nr.map(()=>new m),rr.forEach(({depth:e,target:t,channel:n,cells:r,margin:i})=>{let a=K(lr,{uSlope:this.slope,uSun:this.sun,uRes:{value:nr[t].res},uDepth:{value:e},uCells:{value:r},uLod:{value:Math.max(0,Math.log2(dt/r))},uMargin:{value:(i-1)/r},uMask:{value:new S().setComponent(n,1)}},{vertexShader:cr,side:2,blending:5,blendSrc:201,blendDst:201}),o=r+2*i,s=new w(new xe(o,o,o,o),a);s.frustumCulled=!1,this.scenes[t].add(s)}),this.camera=new ve,this.flat=!1,this.update(new S(0,-1,0))}update(e){let t=e.y>0;if(!t&&this.flat)return;this.flat=!t;let n=this.renderer,r=n.getRenderTarget(),i=n.getActiveCubeFace(),a=n.getActiveMipmapLevel(),o=n.getClearAlpha();n.getClearColor(dr),this.sun.value.copy(e).normalize(),this.slope.value=this.sim.slope[2],n.setClearColor(t?0:16777215,1),this.targets.forEach((e,r)=>{this.scenes[r].visible=t,n.setRenderTarget(e),n.clear(!0,!1,!1),n.render(this.scenes[r],this.camera)}),n.setRenderTarget(r,i,a),n.setClearColor(dr,o)}},pr=`
varying vec3 vWPos;
varying vec3 vWNrm;
`,mr=`
varying vec3 vWPos;
varying vec3 vWNrm;
uniform samplerCube uSkyCube;
uniform vec3 uAbsorption;
uniform vec3 uSunDirT;
uniform float uCausticStrength;
uniform float uFogDensity;
uniform float uClipR;
${ur}
${Ct}
${Mt}
${Nt}
float th(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float tn(vec2 p) { vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(th(i), th(i + vec2(1, 0)), u.x), mix(th(i + vec2(0, 1)), th(i + 1.0), u.x), u.y); }
// ripple marks: the phase along d (wavenumber w) is warped by noise of scale s and
// amplitude a (metres along d), so crests meander and fork where the warp gets steep
float ripplePhase(vec2 p, vec2 d, float w, float s, float a) {
  return w * (dot(p, d) + (tn(p * s) - 0.5) * a + (tn(p * s * 0.27 + 4.0) - 0.5) * a * 3.0);
}
// slope of h = amp (sin ph - 0.25 cos 2ph): sharp crests, broad troughs
vec2 rippleSlope(vec2 p, vec2 d, float w, float s, float a, float amp) {
  float ph = ripplePhase(p, d, w, s, a);
  vec2 grad = (vec2(ripplePhase(p + vec2(0.01, 0.0), d, w, s, a), ripplePhase(p + vec2(0.0, 0.01), d, w, s, a)) - ph) / 0.01;
  return grad * amp * (cos(ph) + 0.5 * sin(2.0 * ph));
}
uniform mat4 uSunShadowMatrix;
`,hr=`
  float hgt = vWPos.y;
  float flat_ = clamp(vWNrm.y, 0.0, 1.0);
  float n1 = tn(vWPos.xz * 0.08), n2 = tn(vWPos.xz * 0.6), n3 = tn(vWPos.xz * 0.013);
  vec3 sand = mix(vec3(0.95, 0.82, 0.55), vec3(0.88, 0.73, 0.46), n1) * (0.92 + 0.16 * n2);
  vec3 seabed = mix(vec3(0.78, 0.72, 0.56), vec3(0.62, 0.58, 0.44), n1 * n3);
  vec3 grass = mix(mix(vec3(0.10, 0.42, 0.06), vec3(0.24, 0.58, 0.10), n1), vec3(0.42, 0.62, 0.12), smoothstep(0.6, 0.85, n3)) * (0.85 + 0.3 * n2);
  vec3 rock = mix(vec3(0.33, 0.31, 0.29), vec3(0.45, 0.41, 0.36), n2) * (0.8 + 0.4 * n3);
#ifdef ROCK
  vec3 albedo = rock * mix(0.9, 1.15, n1);
#else
  float sandLine = 2.4 + 1.6 * n3 + 0.8 * n1;
  vec3 albedo = hgt < 0.0 ? seabed : sand;
  albedo = mix(albedo, grass, smoothstep(sandLine, sandLine + 1.5, hgt) * smoothstep(0.45, 0.62, flat_));
  albedo = mix(albedo, mix(rock, grass * 0.8, 0.35 * n2), smoothstep(0.55, 0.38, flat_) * smoothstep(-6.0, 1.0, hgt));
  albedo = mix(albedo, rock * 1.1, smoothstep(52.0, 64.0, hgt + n1 * 8.0));
#endif
  // wet band above the waterline, plus where the swash has run (dries over seconds)
  vec3 sw = swash(vWPos.xz, hgt);
  float wet = max(1.0 - smoothstep(0.35, 1.3 + 0.5 * n1, hgt), sw.z);
  albedo *= mix(1.0, 0.58, wet);
  // the swash film itself: a faint water tint and foam on its leading edge
  float film = smoothstep(0.0, 0.015, sw.x) * step(0.0, hgt);
  albedo *= mix(vec3(1.0), vec3(0.78, 0.88, 0.92), film);
  albedo = mix(albedo, vec3(0.92), sw.y * (0.5 + 0.5 * n2));
  diffuseColor.rgb = albedo;
`,gr=`
#ifndef ROCK
  {
    vec2 fw = fwidth(vWPos.xz);
    float px = max(fw.x, fw.y);
    if (px < 0.5) {   // both ripple bands are faded out beyond this
    float sandMask = (1.0 - smoothstep(sandLine - 0.5, sandLine + 0.5, hgt)) * smoothstep(0.85, 0.95, flat_);
    sandMask *= mix(1.0, 0.25, smoothstep(-0.3, 0.6, hgt)); // dry sand: faint wind ripples only
    // long wave-formed ripples (~1.6 m) and short ones (~0.3 m), each fading in and out
    // in patches
    vec2 p = vWPos.xz;
    vec2 d1 = normalize(vec2(0.8, 0.6) + (vec2(tn(p * 0.02), tn(p * 0.02 + 5.0)) - 0.5));
    float a1 = 0.02 * (0.3 + 0.7 * smoothstep(0.25, 0.75, tn(p * 0.06 + 11.0)));
    vec2 g = rippleSlope(p, d1, 3.9, 0.35, 0.8, a1) * (1.0 - smoothstep(0.15, 0.5, px));
    if (px < 0.09) {
      float a2 = 0.002 * (0.3 + 0.7 * smoothstep(0.25, 0.75, tn(p * 0.15 + 3.0)));
      g += rippleSlope(p, normalize(d1 + vec2(-d1.y, d1.x) * 0.3), 21.0, 2.2, 0.1, a2) * (1.0 - smoothstep(0.03, 0.09, px));
    }
    vec3 nW = normalize(vWNrm - vec3(g.x, 0.0, g.y) * sandMask);
    normal = normalize((viewMatrix * vec4(nW, 0.0)).xyz);
    }
  }
#endif
`,_r=`
  float wdepth = max(-vWPos.y, 0.0);
  // sun and sky light reaching the bed through the water column (the sun along its
  // refracted path)
  vec3 rsun = refract(-uSunDirT, vec3(0.0, 1.0, 0.0), 1.0 / 1.33);
  float sunPath = wdepth / max(-rsun.y, 0.1);
  diffuseColor.rgb *= exp(-uAbsorption * (sunPath * 0.6 + wdepth * 0.4));
`,vr=we.lights_fragment_begin.replace(`getDirectionalLightInfo( directionalLight, directLight );`,`
    getDirectionalLightInfo( directionalLight, directLight );
    float under = smoothstep(0.05, -0.25, vWPos.y);
    vec3 shadowAt = vWPos + vWNrm * 0.04;
    bool viaSurface = false;
    if (under > 0.0) {
      vec3 rsun = refract(-uSunDirT, vec3(0.0, 1.0, 0.0), 1.0 / 1.33);
      viaSurface = rsun.y < -0.05 && under > 0.5;
      if (viaSurface) shadowAt = vec3(vWPos.x - rsun.x / rsun.y * vWPos.y, 0.05, vWPos.z - rsun.z / rsun.y * vWPos.y);
      directLight.direction = normalize(mix(directLight.direction, (viewMatrix * vec4(-rsun, 0.0)).xyz, under));
      float Ft = 0.02 + 0.98 * pow(1.0 - max(uSunDirT.y, 0.0), 5.0);
      directLight.color *= 1.0 - Ft * under;
    }
    directLight.color *= floatShadow(shadowAt);
#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
    vec4 sunShadowCoord = viaSurface ? uSunShadowMatrix * vec4(shadowAt, 1.0) : vDirectionalShadowCoord[ 0 ];
#endif
`).replace(`vDirectionalShadowCoord[ i ]`,`sunShadowCoord`),yr=`
  roughnessFactor = mix(mix(roughnessFactor, 0.32, wet * step(0.0, hgt)), 0.06, film);
`,br=`
  if (wdepth > 0.0 && rsun.y < -0.05) {
    vec2 entry = vWPos.xz + rsun.xz / rsun.y * wdepth;   // where this light entered the surface
    vec2 fwc = fwidth(entry);
    float c = waveCaustic(entry, wdepth, log2(max(max(fwc.x, fwc.y) * CAUSTIC_TEXELS_PER_M, 1.0)));
    reflectedLight.directDiffuse *= max(mix(1.0, c, uCausticStrength), 0.0);
  }
`,xr=`
  vec3 fdir = normalize(vWPos - cameraPosition);
  float fogAmt = 1.0 - exp(-length(vWPos - cameraPosition) * uFogDensity);
  outgoingLight = mix(outgoingLight, textureLod(uSkyCube, vec3(fdir.x, max(fdir.y, 0.0), fdir.z), 3.0).rgb, fogAmt);
`;function Sr(e,t,n){let r=n!==`prop`;n===`rock`&&(e.defines={...e.defines,ROCK:``}),e.onBeforeCompile=e=>{Object.assign(e.uniforms,t),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
`+pr).replace(`#include <project_vertex>`,`#include <project_vertex>
  vec4 wp = vec4(transformed, 1.0);
#ifdef USE_INSTANCING
  wp = instanceMatrix * wp;
#endif
  vWPos = (modelMatrix * wp).xyz;
  vec3 wn = objectNormal;
#ifdef USE_INSTANCING
  wn = mat3(instanceMatrix) * wn;
#endif
  vWNrm = normalize(mat3(modelMatrix) * wn);`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
`+mr).replace(`#include <map_fragment>`,`#include <map_fragment>
if (uClipR > 0.0 && length(vWPos.xz) > uClipR) discard;
`+(r?hr:``)+_r).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
`+(r?yr:``)).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
`+(r?gr:``)).replace(`#include <lights_fragment_begin>`,vr).replace(`#include <lights_fragment_end>`,`#include <lights_fragment_end>
`+br).replace(`#include <opaque_fragment>`,xr+`#include <opaque_fragment>`)},e.customProgramCacheKey=()=>`gelatin-`+n}function Cr(){let e=new ne(1,4);e.deleteAttribute(`normal`),e.deleteAttribute(`uv`),e=Pe(e);let t=e.attributes.position,n=new S;for(let e=0;e<t.count;e++){n.fromBufferAttribute(t,e);let r=ue(n.x*1.4+3,n.z*1.4+n.y*.7,5,21),i=Math.abs(ue(n.x*3.1,n.y*3.1+n.z,3,5));n.multiplyScalar(1+.38*r-.12*i),n.y<-.2&&(n.y=-.2+(n.y+.2)*.4),t.setXYZ(e,n.x,n.y,n.z)}return e.computeVertexNormals(),e}function wr(e,t){let n=[];for(let r=0;r<e*6&&n.length<e;r++){let r=t()*Math.PI*2,i=150;for(;i<700&&j(Math.cos(r)*i,Math.sin(r)*i)>0;)i+=4;i+=(t()-.6)*40;let a=Math.cos(r)*i,o=Math.sin(r)*i,s=j(a,o);if(s<-5||s>6)continue;let c=1.5+t()**2.2*9;n.push({x:a,z:o,y:s-c*.15,s:c});for(let r=0;r<3&&n.length<e;r++){let e=a+(t()-.5)*c*4,r=o+(t()-.5)*c*4,i=c*(.25+t()*.35);n.push({x:e,z:r,y:j(e,r)-i*.2,s:i})}}return n}function Tr({sky:e,caustics:t,floatShadow:n,water:r,absorption:i,reflectionLayer:a=1}){let o={...n,...Object.fromEntries([`uShore`,`uTravel`,`uShoreExtent`,`uTime`,`uShoreWave`,`uSwellDir`].map(e=>[e,r[e]])),...t,uSkyCube:{value:e.cube},uAbsorption:{value:i},uSunDirT:{value:e.sunDir},uSunShadowMatrix:{value:new ce},uCausticStrength:{value:1},uFogDensity:{value:1/18e3},uClipR:{value:0}},{geometry:s}=Qn(384),c=new x({roughness:.92,metalness:0,envMapIntensity:.9});Sr(c,o,`terrain`);let l=new w(s,c);l.castShadow=l.receiveShadow=!0;let u=7,d=()=>(u=Math.imul(u,1664525)+1013904223>>>0)/4294967296,f=wr(90,d),p=new x({roughness:.85,metalness:0,envMapIntensity:.9});Sr(p,o,`rock`);let h=new se(Cr(),p,f.length),g=new ce,_=new Ae,v=new Ce,y=new S;f.forEach((e,t)=>{v.set(d()*.6,d()*Math.PI*2,d()*.6),y.set(e.s*(.8+d()*.6),e.s*(.5+d()*.5),e.s*(.8+d()*.6)),g.compose(new S(e.x,e.y,e.z),_.setFromEuler(v),y),h.setMatrixAt(t,g)}),h.computeBoundingSphere(),h.castShadow=h.receiveShadow=!0;let ee=new m;ee.add(l,h);for(let e of[l,h])e.layers.enable(a);return{group:ee,uniforms:o,patchProp:e=>Sr(e,o,`prop`)}}var Er=new S(0,1,0),Dr=new S,Or=new S,kr=new S,Ar=new ce,jr=new Ne,Mr=new p,Nr=new p,Pr=class{constructor(e=1){this.camera=new Oe,this.camera.layers.set(e),this.textureMatrix=new ce,this.target=new d(1,1,{type:_,generateMipmaps:!0,minFilter:h}),this.scale=.5}setSize(e,t){this.target.setSize(Math.max(1,Math.floor(e*this.scale)),Math.max(1,Math.floor(t*this.scale)))}render(e,t,n){let r=this.camera;Dr.setFromMatrixPosition(n.matrixWorld),Ar.extractRotation(n.matrixWorld),Or.set(0,0,-1).applyMatrix4(Ar).add(Dr),kr.set(Or.x,-Or.y,Or.z),r.position.set(Dr.x,-Dr.y,Dr.z),r.up.set(0,1,0).applyMatrix4(Ar).reflect(Er),r.lookAt(kr),r.far=n.far,r.updateMatrixWorld(),r.projectionMatrix.copy(n.projectionMatrix),this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1).multiply(r.projectionMatrix).multiply(r.matrixWorldInverse),jr.setFromNormalAndCoplanarPoint(Er,kr.set(0,0,0)).applyMatrix4(r.matrixWorldInverse),Mr.set(jr.normal.x,jr.normal.y,jr.normal.z,jr.constant);let i=r.projectionMatrix.elements;Nr.set((Math.sign(Mr.x)+i[8])/i[0],(Math.sign(Mr.y)+i[9])/i[5],-1,(1+i[10])/i[14]),Mr.multiplyScalar(2/Mr.dot(Nr)),i[2]=Mr.x,i[6]=Mr.y,i[10]=Mr.z+1,i[14]=Mr.w,r.projectionMatrixInverse.copy(r.projectionMatrix).invert(),e.setRenderTarget(this.target),e.setClearColor(0,0),e.clear(!0,!0,!1),e.render(t,r)}},Fr=6,Ir=32,Lr=`
in vec3 position;
out vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,Rr=`
precision highp float;
precision highp sampler2D;
in vec2 vUv;
out vec4 fragColor;
`,zr=`
uniform sampler2D tSrc;
uniform vec2 uTexel; // source texel size
#ifdef PREFILTER
uniform vec4 uCurve; // threshold-knee, 2*knee, 0.25/knee, threshold
uniform float uClamp;
#endif

float luma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }

vec3 tap(vec2 o) {
  vec3 c = texture(tSrc, vUv + o * uTexel).rgb;
#ifdef PREFILTER
  c = max(c, 0.0); // negatives (and NaN on most GPUs) -> 0
  float l = max(luma(c), 1e-4);
  c *= min(1.0, uClamp / l);
  l = min(l, uClamp);
  float q = clamp(l - uCurve.x, 0.0, uCurve.y);
  c *= max(uCurve.z * q * q, l - uCurve.w) / l;
#endif
  return c;
}

void main() {
  vec3 a = tap(vec2(-2.0, 2.0)), b = tap(vec2(0.0, 2.0)), c = tap(vec2(2.0, 2.0));
  vec3 d = tap(vec2(-2.0, 0.0)), e = tap(vec2(0.0, 0.0)), f = tap(vec2(2.0, 0.0));
  vec3 g = tap(vec2(-2.0, -2.0)), h = tap(vec2(0.0, -2.0)), i = tap(vec2(2.0, -2.0));
  vec3 j = tap(vec2(-1.0, 1.0)), k = tap(vec2(1.0, 1.0)), l = tap(vec2(-1.0, -1.0)), m = tap(vec2(1.0, -1.0));
  vec3 g0 = (a + b + d + e) * 0.25, g1 = (b + c + e + f) * 0.25;
  vec3 g2 = (d + e + g + h) * 0.25, g3 = (e + f + h + i) * 0.25;
  vec3 g4 = (j + k + l + m) * 0.25;
#ifdef PREFILTER
  float w0 = 0.125 / (1.0 + luma(g0)), w1 = 0.125 / (1.0 + luma(g1));
  float w2 = 0.125 / (1.0 + luma(g2)), w3 = 0.125 / (1.0 + luma(g3));
  float w4 = 0.5 / (1.0 + luma(g4));
  vec3 r = (g0 * w0 + g1 * w1 + g2 * w2 + g3 * w3 + g4 * w4) / (w0 + w1 + w2 + w3 + w4);
#else
  vec3 r = g4 * 0.5 + (g0 + g1 + g2 + g3) * 0.125;
#endif
  fragColor = vec4(r, 1.0);
}`,Br=`
uniform sampler2D tSrc;
uniform vec2 uTexel; // source (coarser) texel size
void main() {
  vec4 d = uTexel.xyxy * vec4(1.0, 1.0, -1.0, 0.0);
  vec3 s = texture(tSrc, vUv - d.xy).rgb + texture(tSrc, vUv - d.wy).rgb * 2.0 + texture(tSrc, vUv - d.zy).rgb
    + texture(tSrc, vUv + d.zw).rgb * 2.0 + texture(tSrc, vUv).rgb * 4.0 + texture(tSrc, vUv + d.xw).rgb * 2.0
    + texture(tSrc, vUv + d.zy).rgb + texture(tSrc, vUv + d.wy).rgb * 2.0 + texture(tSrc, vUv + d.xy).rgb;
  fragColor = vec4(s * (1.0 / 16.0), 1.0);
}`,Vr=`
uniform sampler2D tSrc;
uniform vec2 uJitter; // [0,1)^2
void main() {
  float s = 0.0;
  for (int j = 0; j < 4; j++) for (int i = 0; i < 4; i++) {
    vec2 o = (vec2(float(i), float(j)) + uJitter) * 0.25 - 0.5;
    vec3 c = max(texture(tSrc, vUv + o * ${(1/Ir).toFixed(8)}).rgb, 0.0);
    s += log2(clamp(dot(c, vec3(0.2126, 0.7152, 0.0722)), 1e-4, 64.0));
  }
  fragColor = vec4(s * (1.0 / 16.0), 0.0, 0.0, 1.0);
}`,Hr=`
uniform sampler2D tSrc;  // metering target, linear filtered
uniform sampler2D tPrev; // previous 1x1 state
uniform vec2 uK;         // blend factor when scene brightens (x) / darkens (y); 1 = snap
uniform vec2 uRange;     // allowed log2 luminance range (from min/max exposure)
void main() {
  float sum = 0.0;
  for (int j = 0; j < 16; j++) for (int i = 0; i < 16; i++)
    sum += texture(tSrc, (vec2(float(i), float(j)) + 0.5) * (1.0 / 16.0)).r;
  float t = clamp(sum * (1.0 / 256.0), uRange.x, uRange.y);
  float prev = texelFetch(tPrev, ivec2(0), 0).r;
  float k = t > prev ? uK.x : uK.y;
  float s = k >= 1.0 ? t : prev + (t - prev) * k;
  if (isnan(s)) s = t;
  fragColor = vec4(s, 0.0, 0.0, 1.0);
}`,Ur=`
uniform sampler2D tHdr;
uniform sampler2D tBloom;
uniform sampler2D tExp;   // 1x1 adapted log2 average luminance
uniform float uExposure;  // exposure compensation (auto) or absolute exposure
uniform float uAuto;      // 1 = auto exposure
uniform vec3 uExpo;       // keyValue, minExposure, maxExposure
uniform float uBloom;
uniform vec2 uLook;       // AgX look: power (contrast), saturation
uniform float uFrame;     // 0..255, dither seed
uniform float uDroplets;  // 0..1
uniform float uTime;      // seconds, wraps at 4096
uniform float uAspect;    // width / height
uniform float uResY;      // height in pixels

const mat3 SRGB_TO_REC2020 = mat3(
  vec3(0.6274, 0.0691, 0.0164), vec3(0.3293, 0.9195, 0.0880), vec3(0.0433, 0.0113, 0.8956));
const mat3 REC2020_TO_SRGB = mat3(
  vec3(1.6605, -0.1246, -0.0182), vec3(-0.5876, 1.1329, -0.1006), vec3(-0.0728, -0.0083, 1.1187));
const mat3 AGX_INSET = mat3(
  vec3(0.856627153315983, 0.137318972929847, 0.11189821299995),
  vec3(0.0951212405381588, 0.761241990602591, 0.0767994186031903),
  vec3(0.0482516061458583, 0.101439036467562, 0.811302368396859));
const mat3 AGX_OUTSET = mat3(
  vec3(1.1271005818144368, -0.1413297634984383, -0.14132976349843826),
  vec3(-0.11060664309660323, 1.157823702216272, -0.11060664309660294),
  vec3(-0.016493938717834573, -0.016493938717834257, 1.2519364065950405));
const float AGX_MIN_EV = -12.47393;
const float AGX_MAX_EV = 4.026069;

vec3 agxContrast(vec3 x) {
  vec3 x2 = x * x, x4 = x2 * x2;
  return 15.5 * x4 * x2 - 40.14 * x4 * x + 31.96 * x4 - 6.868 * x2 * x + 0.4298 * x2 + 0.1191 * x - 0.00232;
}

vec3 agx(vec3 c) {
  c = AGX_INSET * (SRGB_TO_REC2020 * c);
  c = clamp((log2(max(c, 1e-10)) - AGX_MIN_EV) / (AGX_MAX_EV - AGX_MIN_EV), 0.0, 1.0);
  c = agxContrast(c);
  // AgX "punchy"-style look in the encoded domain
  c = pow(max(c, 0.0), vec3(uLook.x));
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = l + uLook.y * (c - l);
  c = AGX_OUTSET * c;
  return clamp(REC2020_TO_SRGB * pow(max(c, 0.0), vec3(2.2)), 0.0, 1.0);
}

// Dave Hoskins hash without sine
vec3 hash33(vec3 p) {
  p = fract(p * vec3(0.1031, 0.1030, 0.0973));
  p += dot(p, p.yxz + 33.33);
  return fract((p.xxy + p.yxx) * p.zyx);
}

// ---- lens droplets (only evaluated when uDroplets > 0) -----------------------------------------
// All lengths are in screen-height units (p = vUv * vec2(aspect, 1)). Each drop is a tiny lens: the
// image under it is sampled from the mirrored side of its centre, sample = centre - (K-1) * d, so it
// looks inverted and slightly magnified, with a faint dark rim.
const float DROP_K = 1.8;

// d: pixel - drop centre, r: radius. Returns (uv offset, darkening).
vec3 lensDrop(vec2 d, float r) {
  float dist = length(d);
  float cov = clamp((r - dist) * uResY + 0.5, 0.0, 1.0); // 1px AA
  if (cov <= 0.0) return vec3(0.0);
  return vec3(-d * DROP_K * cov, 0.22 * smoothstep(0.6, 1.0, dist / r) * cov);
}

// One drop (at most) per grid cell, kept inside its cell so only the own cell is tested.
vec3 dropLayer(vec2 p, float scale, float density, float seed) {
  vec2 q = p * scale + seed * 17.31;
  vec2 id = floor(q);
  vec3 h = hash33(vec3(id, seed)), g = hash33(vec3(id + 57.0, seed));
  if (h.x > density) return vec3(0.0);
  float fade = clamp((uDroplets - g.x * 0.8) * 6.0, 0.0, 1.0); // drops dry up one by one (order = g.x)
  float rf = mix(0.10, 0.24, h.y * h.y);                          // radius, cell units
  vec2 c = rf + vec2(h.z, g.y) * (1.0 - 2.0 * rf);
  return lensDrop((fract(q) - c) / scale, rf * fade / scale);
}

// A drop sliding down the lens, leaving a thin wet trail above it. speed in cycles/s.
// Head enters above the screen and leaves below with its trail fully off-screen, so the wrap never pops.
vec3 streak(vec2 p, float id, float speed, float amp) {
  const float R = 0.016, L = 0.45, W = 0.0035;
  float u = uTime * speed + id * 0.37;
  float cyc = mod(floor(u), 128.0), f = fract(u);
  f += 0.012 * sin(f * 47.0); // stick-slip
  vec3 h = hash33(vec3(id, cyc, 5.1));
  float x0 = (0.08 + 0.84 * h.x) * uAspect;
  float hy = mix(1.0 + R, -R - L, f);
  float hx = x0 + 0.006 * sin(hy * 14.0 + h.y * 6.28);
  vec3 o = lensDrop(p - vec2(hx, hy), R * amp);
  float ty = p.y - hy;
  if (ty > 0.0 && ty < L) {
    float a = smoothstep(0.0, 0.03, ty) * (1.0 - ty / L) * amp;
    float tx = (p.x - x0 - 0.006 * sin(p.y * 14.0 + h.y * 6.28)) / W;
    float cov = clamp((1.0 - abs(tx)) * W * uResY + 0.5, 0.0, 1.0) * a;
    o += vec3(-tx * W * DROP_K * cov, 0.0, 0.12 * smoothstep(0.5, 1.0, abs(tx)) * cov);
  }
  return o;
}

// Returns (uv offset, darkening).
vec3 droplets() {
  vec2 p = vUv * vec2(uAspect, 1.0);
  float sa = smoothstep(0.0, 0.4, uDroplets);
  vec3 a = dropLayer(p, 6.0, 0.30, 0.0) + dropLayer(p, 10.0, 0.20, 1.0) + dropLayer(p, 17.0, 0.06, 2.0)
    + streak(p, 0.0, 0.0625, sa) + streak(p, 1.0, 0.03125, sa);
  return vec3(a.xy / vec2(uAspect, 1.0), min(a.z, 0.5));
}

void main() {
  float ex = uExposure;
  if (uAuto > 0.5) ex *= clamp(uExpo.x * exp2(-texelFetch(tExp, ivec2(0), 0).r), uExpo.y, uExpo.z);

  vec2 uv = vUv;
  float dark = 0.0;
  if (uDroplets > 0.001) {
    vec3 dr = droplets();
    uv += dr.xy;
    dark = dr.z;
  }

  vec3 c = (texture(tHdr, uv).rgb + texture(tBloom, uv).rgb * uBloom) * (ex * (1.0 - dark));
  vec2 d = (vUv - 0.5) * 1.41421356; // |d|^2 = 1 at corners
  c = agx(c) * (1.0 - 0.08 * dot(d, d));
  vec3 o = mix(pow(c, vec3(1.0 / 2.4)) * 1.055 - 0.055, c * 12.92, vec3(lessThanEqual(c, vec3(0.0031308))));

  // TPDF dither, +-1/255, after sRGB encoding and before the 8-bit store
  vec3 n = hash33(vec3(gl_FragCoord.xy, uFrame)) + hash33(vec3(gl_FragCoord.xy, uFrame + 17.0));
  fragColor = vec4(o + (n - 1.0) * (1.0 / 255.0), 1.0);
}`,Wr=(e,t,n={},r={})=>new Te({glslVersion:te,vertexShader:Lr,fragmentShader:Rr+e,uniforms:t,defines:n,depthTest:!1,depthWrite:!1,...r}),Gr=class{params={exposure:1,autoExposure:!0,keyValue:.18,adaptUp:2.5,adaptDown:1,minExposure:.05,maxExposure:20,bloomStrength:.06,bloomThreshold:1,bloomClamp:64,contrast:1.12,saturation:1.3,droplets:0};constructor(e){this.renderer=e,this.geometry=new ye,this.geometry.setAttribute(`position`,new Se([-1,-1,0,3,-1,0,-1,3,0],3)),this.mesh=new w(this.geometry),this.mesh.frustumCulled=!1,this.camera=new Ie(-1,1,1,-1,0,1);let t=()=>({tSrc:{value:null},uTexel:{value:null}});this.matPre=Wr(zr,{...t(),uCurve:{value:new p},uClamp:{value:64}},{PREFILTER:1}),this.matDown=Wr(zr,t()),this.matUp=Wr(Br,t(),{},{blending:5,blendEquation:100,blendSrc:201,blendDst:201}),this.matMeter=Wr(Vr,{tSrc:{value:null},uJitter:{value:new I}}),this.matAdapt=Wr(Hr,{tSrc:{value:null},tPrev:{value:null},uK:{value:new I(1,1)},uRange:{value:new I(-8,4)}}),this.matComp=Wr(Ur,{tHdr:{value:null},tBloom:{value:null},tExp:{value:null},uExposure:{value:1},uAuto:{value:1},uExpo:{value:new S(.18,.05,20)},uBloom:{value:0},uLook:{value:new I(1,1)},uFrame:{value:0},uDroplets:{value:0},uTime:{value:0},uAspect:{value:1},uResY:{value:1}}),this.levels=[],this.texel=[new I];for(let e=0;e<Fr;e++)this.levels.push(new d(1,1,{type:_,format:F,minFilter:C,magFilter:C,wrapS:Ue,wrapT:Ue,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1})),this.texel.push(new I);this.meterRT=new d(Ir,Ir,{type:_,format:F,minFilter:C,magFilter:C,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});let n=e.extensions.has(`EXT_color_buffer_float`);this.adapt=[0,1].map(()=>new d(1,1,{type:n?ee:_,format:F,minFilter:a,magFilter:a,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1})),this._cur=0,this._snap=!0,this._frame=0,this._time=0;let r=e.getDrawingBufferSize(new I);this.setSize(r.x,r.y)}setSize(e,t){let n=Math.max(1,Math.floor(e)),r=Math.max(1,Math.floor(t));this.matComp.uniforms.uAspect.value=n/r,this.matComp.uniforms.uResY.value=r,this._snap=!0,this.texel[0].set(1/n,1/r);for(let e=0;e<Fr;e++)n=Math.max(1,Math.floor(n/2)),r=Math.max(1,Math.floor(r/2)),this.levels[e].setSize(n,r),this.texel[e+1].set(1/n,1/r)}_pass(e,t){this.mesh.material=e,this.renderer.setRenderTarget(t),this.renderer.render(this.mesh,this.camera)}_blit(e,t,n,r){e.uniforms.tSrc.value=t,e.uniforms.uTexel.value=n,this._pass(e,r)}_meterExposure(e,t){let n=this.params,r=this.matMeter.uniforms,i=this.matAdapt.uniforms,a=this._frame;r.tSrc.value=e,r.uJitter.value.set(a*.7548776662466927%1,a*.5698402909980532%1),this._pass(this.matMeter,this.meterRT);let o=Math.max(n.keyValue,1e-4),s=Math.max(Math.min(n.minExposure,n.maxExposure),1e-4),c=Math.max(n.minExposure,n.maxExposure,1e-4);i.tSrc.value=this.meterRT.texture,i.tPrev.value=this.adapt[this._cur].texture,i.uK.value.set(this._snap?1:1-Math.exp(-t*n.adaptUp),this._snap?1:1-Math.exp(-t*n.adaptDown)),i.uRange.value.set(Math.log2(o/c),Math.log2(o/s)),this._cur^=1,this._pass(this.matAdapt,this.adapt[this._cur]),this._snap=!1}render(e,t=1/60){let n=this.renderer,r=this.params,i=this.levels,a=this.texel;t=t>0?Math.min(t,1):0,this._frame=this._frame+1&255,this._time=(this._time+t)%4096;let o=n.getRenderTarget(),s=n.autoClear,c=n.info.autoReset;n.autoClear=!1,n.info.autoReset=!1,r.autoExposure?this._meterExposure(e,t):this._snap=!0;let l=r.bloomThreshold,u=Math.max(l*.5,1e-4),d=this.matPre.uniforms;d.uCurve.value.set(l-u,2*u,.25/u,l),d.uClamp.value=r.bloomClamp,this._blit(this.matPre,e,a[0],i[0]);for(let e=1;e<Fr;e++)this._blit(this.matDown,i[e-1].texture,a[e],i[e]);for(let e=4;e>=0;e--)this._blit(this.matUp,i[e+1].texture,a[e+2],i[e]);let f=this.matComp.uniforms;f.tHdr.value=e,f.tBloom.value=i[0].texture,f.tExp.value=this.adapt[this._cur].texture,f.uExposure.value=r.exposure,f.uAuto.value=+!!r.autoExposure,f.uExpo.value.set(r.keyValue,Math.min(r.minExposure,r.maxExposure),Math.max(r.minExposure,r.maxExposure)),f.uLook.value.set(r.contrast,r.saturation),f.uBloom.value=r.bloomStrength,f.uFrame.value=this._frame,f.uDroplets.value=Math.min(Math.max(r.droplets,0),1),f.uTime.value=this._time,this._pass(this.matComp,null),n.setRenderTarget(o),n.autoClear=s,n.info.autoReset=c}dispose(){for(let e of this.levels)e.dispose();this.meterRT.dispose();for(let e of this.adapt)e.dispose();for(let e of[this.matPre,this.matDown,this.matUp,this.matMeter,this.matAdapt,this.matComp])e.dispose();this.geometry.dispose()}},Kr=`
precision highp float;
precision highp int;
${Pt}
uniform highp sampler2D uQueries;
out vec4 outColor;
void main() {
  vec2 q = texelFetch(uQueries, ivec2(gl_FragCoord.xy), 0).xy;
  vec3 d = waterAt(q, vec3(0.0));
  outColor = vec4(d.y, d.x, d.z, 1.0);
}`,qr=class{constructor(e,t,n=256){this.renderer=e,this.capacity=n,this.input=new Ve(new Float32Array(n*4),n,1,F,ee),this.target=new d(n,1,{type:ee,minFilter:a,magFilter:a,depthBuffer:!1,generateMipmaps:!1}),this.quad=new ut(K(Kr,{...t.uniforms,uQueries:{value:this.input}})),this.inFlight=0,this.result=new Float32Array(n*4),this.resultCount=0,this.resultTag=-1,this.resultTime=0}submit(e,t,n,r){if(this.inFlight>=2||t===0)return;t=Math.min(t,this.capacity);let i=this.input.image.data;for(let n=0;n<t;n++)i[n*4]=e[n*2],i[n*4+1]=e[n*2+1];this.input.needsUpdate=!0,this.quad.render(this.renderer,this.target),this.inFlight++;let a=new Float32Array(t*4);this.renderer.readRenderTargetPixelsAsync(this.target,0,0,t,1,a).then(()=>{this.result.set(a),this.resultCount=t,this.resultTag=n,this.resultTime=r}).catch(()=>{}).finally(()=>{this.inFlight--})}},Jr=`
precision highp float;
precision highp int;
precision highp sampler2DShadow;
${Pt}
uniform mat4 uInvProj;
uniform mat4 uCamWorld;
vec3 viewPos(vec2 uv, float ndcZ) {
  vec4 v = uInvProj * vec4(uv * 2.0 - 1.0, ndcZ, 1.0);
  return v.xyz / v.w;
}
`,Yr=Jr+`
in vec2 vUv;
out vec4 outColor;
void main() {
  vec3 nearW = (uCamWorld * vec4(viewPos(vUv, -1.0), 1.0)).xyz;
  outColor = vec4(waterAt(nearW.xz, vec3(0.0)).y - nearW.y, 0.0, 0.0, 1.0);
}`,Xr=Jr+ur+Ct+`
uniform highp sampler2D tDepth;
uniform highp sampler2DShadow uShadowMap;
uniform mat4 uShadowMatrix;
uniform float uShadowBias;
uniform vec3 uAbsorption;
uniform vec3 uSunDir;
uniform vec4 uUnder;   // scattering coefficient (1/m), shaft strength, shaft range (m), -
uniform float uFrame;  // frame index mod 64, rotates the jitter
in vec2 vUv;
out vec4 outColor;

// light reaching a point in the water came through the surface at entry; it is lit if
// the entry point is (terrain and floater shadows, as seen on the water surface)
float lightAt(vec2 entry) {
  vec3 e = vec3(entry.x, 0.0, entry.y);
  vec4 sc = uShadowMatrix * vec4(e, 1.0);
  float s = 1.0;
  if (all(greaterThan(sc.xy, vec2(0.0))) && all(lessThan(sc.xyz, vec3(1.0)))) s = texture(uShadowMap, vec3(sc.xy, sc.z - uShadowBias));
  return min(s, floatShadow(e));
}

// per half-res pixel: in-scattered sun along the view ray (without the sun colour and
// strength), and the distance the composite uses to upsample without halos
void main() {
  float z = texture(tDepth, vUv).r;
  vec3 hitV = viewPos(vUv, z * 2.0 - 1.0);
  float dist = z > 0.999999 ? 1e5 : length(hitV);
  vec3 dir = normalize(mat3(uCamWorld) * hitV);
  vec3 camPos = uCamWorld[3].xyz;
  vec3 sigT = uAbsorption + uUnder.x;
  vec3 rs = refract(-uSunDir, vec3(0.0, 1.0, 0.0), 1.0 / 1.33);
  vec3 acc = vec3(0.0);
  if (rs.y < -0.05) {
    float range = min(dist, uUnder.z);
    const int STEPS = 24;
    float stepL = range / float(STEPS);
    // interleaved gradient noise, shifted by the golden ratio each frame
    float jit = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))) + uFrame * 0.618034);
    float mu = dot(dir, -rs);
    const float g = 0.7;
    float phase = (1.0 - g * g) / (4.0 * PI * pow(1.0 + g * g - 2.0 * g * mu, 1.5)) + 0.04;
    // prefilter along the ray: mip from how far one step moves through the 12 m pattern
    // (rays sweeping across the caustics average to haze, rays along the light keep shafts)
    vec2 dbase = dir.xz - rs.xz / rs.y * dir.y;
    float lod = max(log2(max(length(dbase) * stepL * CAUSTIC_TEXELS_PER_M, 1.0)), 1.0);
    for (int i = 0; i < STEPS; i++) {
      float s = (float(i) + jit) * stepL;
      vec3 p = camPos + dir * s;
      float pd = -p.y;
      if (pd <= 0.0) continue;
      vec2 entry = p.xz + rs.xz / rs.y * pd;
      acc += waveCaustic(entry, pd, lod) * lightAt(entry) * exp(-sigT * (s + pd / -rs.y)) * smoothstep(0.0, 0.6, pd);
    }
    acc *= phase * stepL;
  }
  outColor = vec4(acc, dist);
}`,Zr=Jr+`
uniform sampler2D tColor;
uniform highp sampler2D tDepth;
uniform sampler2D tLens;
uniform highp sampler2D tShafts;
uniform samplerCube uSkyCube;
uniform float uSkyMaxLod;
uniform vec3 uAbsorption;
uniform vec3 uScatterColor;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec4 uUnder;   // scattering coefficient (1/m), shaft strength, shaft range (m), meniscus darkening
uniform float uFull;   // 1: camera deep enough that the whole near plane is submerged
in vec2 vUv;
out vec4 outColor;

// alpha tag from the water pass: 0 underside, 1 no water, 2 top (edges average between)
float isFront(float a) { return step(1.5, a); }
float isBack(float a) { return step(a, 0.5); }

// half-res shafts back to full res, weighting the 4 nearest by distance agreement so
// shafts in front of an object don't bleed onto it
vec3 shafts(vec2 uv, float dist) {
  vec2 hs = vec2(textureSize(tShafts, 0));
  vec2 st = uv * hs - 0.5;
  vec2 f = fract(st);
  ivec2 i0 = ivec2(floor(st));
  vec3 sum = vec3(0.0);
  float wsum = 1e-5;
  for (int k = 0; k < 4; k++) {
    ivec2 o = ivec2(k & 1, k >> 1);
    vec4 t = texelFetch(tShafts, clamp(i0 + o, ivec2(0), ivec2(hs) - 1), 0);
    float w = (o.x == 1 ? f.x : 1.0 - f.x) * (o.y == 1 ? f.y : 1.0 - f.y)
            / (1e-3 + abs(t.a - dist) / max(dist, 0.5));
    sum += t.rgb * w;
    wsum += w;
  }
  return sum / wsum;
}

void main() {
  float d = uFull > 0.5 ? 10.0 : texture(tLens, vUv).r;   // lens depth

  // where the pixel sees the water surface, its facing decides; elsewhere the lens
  // test. That keeps the split consistent with the mesh even where its coarse fan
  // around the lens disagrees with the exact height.
  vec4 src = texture(tColor, vUv);
  bool under = isBack(src.a) > 0.5 || (isFront(src.a) < 0.5 && d > 0.0);

  // meniscus: a dark line where the top of the surface meets its underside on screen
  float meniscus = 1.0;
  if (uFull < 0.5) {
    vec2 px = 2.0 / vec2(textureSize(tColor, 0));
    float f = 0.0, b = 0.0;
    for (int i = 0; i < 4; i++) {
      vec2 o = vec2(i == 0 ? px.x : i == 1 ? -px.x : 0.0, i == 2 ? px.y : i == 3 ? -px.y : 0.0);
      float a = texture(tColor, vUv + o).a;
      f += isFront(a);
      b += isBack(a);
    }
    // only near the lens: far front/back boundaries are folded crests, not the waterline
    meniscus -= uUnder.w * max(isFront(src.a) * min(b, 1.0), isBack(src.a) * min(f, 1.0))
              * smoothstep(0.35, 0.1, abs(d));
  }
  if (!under) {
    outColor = vec4(src.rgb * meniscus, 1.0);
    return;
  }
  d = max(d, 0.0);

  // slight refractive wobble of the whole image
  vec2 uv = vUv + vec2(sin(vUv.y * 37.0 + uTime * 1.9), cos(vUv.x * 29.0 + uTime * 1.6)) * 0.0012;
  vec3 col = texture(tColor, uv).rgb;
  float z = texture(tDepth, uv).r;
  vec3 hitV = viewPos(uv, z * 2.0 - 1.0);
  float dist = z > 0.999999 ? 1e5 : length(hitV);
  vec3 dir = normalize(mat3(uCamWorld) * hitV);

  vec3 sigT = uAbsorption + uUnder.x;
  // in-scatter: the surface underside's deep-water colour, darker with depth and
  // brighter looking up towards the light
  vec3 ambient = textureLod(uSkyCube, vec3(0.0, 1.0, 0.0), uSkyMaxLod).rgb;
  vec3 fogCol = uScatterColor * (ambient + uSunColor * max(uSunDir.y, 0.0))
              * exp(-uAbsorption * d * 0.5) * mix(0.55, 1.35, dir.y * 0.5 + 0.5);
  vec3 T = exp(-sigT * dist);
  col = col * T + fogCol * (1.0 - T);
  if (uUnder.y > 0.0) col += uSunColor * shafts(uv, dist) * (uUnder.x * uUnder.y);

  outColor = vec4(col * meniscus, 1.0);
}`,Qr=class{constructor(e,t,n){this.params={scattering:.03,shafts:2,shaftRange:40,meniscus:.5},this.uniforms={...e.uniforms,tColor:{value:null},tDepth:{value:null},...n,tLens:{value:null},tShafts:{value:null},uInvProj:{value:t.projectionMatrixInverse},uCamWorld:{value:t.matrixWorld},uUnder:{value:new p},uFull:{value:0},uFrame:{value:0}},this.quad=new ut(K(Zr,this.uniforms)),this.shaftQuad=new ut(K(Xr,this.uniforms)),this.lensQuad=new ut(K(Yr,this.uniforms));let r={type:ee,minFilter:a,magFilter:a,depthBuffer:!1,generateMipmaps:!1};this.lens=new d(64,36,{...r,type:_,minFilter:C,magFilter:C}),this.uniforms.tLens.value=this.lens.texture,this.shaftRT=new d(1,1,r),this.uniforms.tShafts.value=this.shaftRT.texture,this.target=null}setSize(e,t){this.target?.dispose(),this.target=new d(e,t,{type:_,depthBuffer:!1,generateMipmaps:!1}),this.shaftRT.setSize(Math.ceil(e/2),Math.ceil(t/2))}render(e,t,n){let r=this.uniforms,i=this.params;return r.tColor.value=t.texture,r.tDepth.value=t.depthTexture,r.uUnder.value.set(i.scattering,i.shafts,i.shaftRange,i.meniscus),r.uFull.value=+!!n,r.uFrame.value=(r.uFrame.value+1)%64,n||this.lensQuad.render(e,this.lens),i.shafts>0&&this.shaftQuad.render(e,this.shaftRT),this.quad.render(e,this.target),this.target.texture}},$r=`
precision highp float;
${Pt}
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform samplerCube uSkyCube;
uniform float uSkyMaxLod;
uniform vec3 uSpray;        // amount, size, max distance
out vec2 vUv;
out float vAlpha;
out vec3 vLight;
out float vSeed;
out float vViewZ;

// camera-facing quad of the given size at p; droplets: strong forward scattering of the
// sun + sky ambient
void billboard(vec3 p, float size) {
  vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
  vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  vec4 view = viewMatrix * vec4(p + (right * position.x + up * position.y) * size, 1.0);
  gl_Position = projectionMatrix * view;
  vViewZ = -view.z;
  vUv = position.xy;
  float mu = dot(normalize(p - cameraPosition), uSunDir);
  const float g = 0.6;
  float phase = (1.0 - g * g) / (4.0 * PI * pow(1.0 + g * g - 2.0 * g * mu, 1.5));
  vec3 sky = textureLod(uSkyCube, vec3(0.0, 1.0, 0.0), uSkyMaxLod).rgb;
  vLight = 0.9 * (uSunColor * (0.25 + 1.6 * phase) + sky * 1.1);
}
`,ei=$r+`
in vec4 aEmit;              // emitter xz, two randoms

void main() {
  vAlpha = 0.0;
  gl_Position = vec4(2.0, 2.0, 2.0, 1.0);   // dead instances fall outside the clip volume
  vec2 e = aEmit.xy;
  float r1 = aEmit.z, r2 = aEmit.w;
  vec2 toE = e - cameraPosition.xz;
  if (dot(toE, toE) > uSpray.z * uSpray.z) return;

  Shore s = shoreWaves(e, shoreSample(e));
  float a = s.wave0.x, k = s.wave0.y, w = s.wave0.z;
  float strength = s.breaking0 * smoothstep(0.08, 0.35, a);
  if (strength <= 0.01) return;
  // seconds since the crest passed this emitter, staggered per particle
  float psi = mod(s.wave0.w + PI, 2.0 * PI) - PI;
  float age = psi / w - r1 * 0.3;
  float life = 0.9 + 1.5 * r2;
  if (age < 0.0 || age > life) return;

  // thrown with the crest (towards the beach) and up, slowed by air drag
  const float KD = 1.7, G = 9.81;
  float ex = (1.0 - exp(-KD * age)) / KD;
  float c = w / k;
  vec2 side = vec2(-s.dir.y, s.dir.x) * (fract(r1 * 31.7) - 0.5) * 1.6;
  vec2 xz = e + side + s.dir * c * (0.25 + 0.45 * fract(r2 * 17.3)) * ex;
  float vy = (1.2 + 3.2 * fract(r1 * 7.9)) * sqrt(a);
  float y = 1.1 * a + (vy + G / KD) * ex - G * age / KD;
  if (y < -0.3) return;

  float size = (0.1 + 0.6 * age) * (0.6 + 0.8 * fract(r2 * 5.3)) * uSpray.y * sqrt(a / 0.5);
  billboard(vec3(xz.x, y, xz.y), size);
  vSeed = r1;
  vAlpha = strength * uSpray.x * smoothstep(0.0, 0.12, age) * pow(1.0 - age / life, 1.5)
         * smoothstep(-0.3, 0.2, y) * smoothstep(uSpray.z, uSpray.z * 0.7, sqrt(dot(toE, toE)))
         * smoothstep(2.5, 10.0, vViewZ);   // no giant blobs on the lens
}`,ti=$r+`
void main() {
  vAlpha = 0.0;
  gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
  vec4 e = uImpact[gl_InstanceID % 8];
  float L = uImpactSize[gl_InstanceID % 8];
  float r1 = hash12(vec2(float(gl_InstanceID), 1.7)), r2 = hash12(vec2(float(gl_InstanceID), 8.3));
  float r3 = hash12(vec2(float(gl_InstanceID), 4.1));
  float life = 0.5 + 1.1 * r2;
  float age = e.z;
  if (e.w <= 0.0 || age > life) return;
  const float KD = 1.2, G = 9.81;
  float ex = (1.0 - exp(-KD * age)) / KD;
  float ang = r1 * 2.0 * PI;
  vec2 out_ = vec2(cos(ang), sin(ang));
  float strength = sqrt(e.w / 0.2);
  float vy = (1.5 + 4.0 * r3 * r3) * strength;
  vec2 xz = e.xy + out_ * (L * (0.6 + 0.5 * r2) + (0.5 + 2.0 * r3) * strength * ex);
  float y = (vy + G / KD) * ex - G * age / KD;
  if (y < -0.2) return;
  billboard(vec3(xz.x, y, xz.y), (0.05 + 0.25 * age) * (0.5 + r2) * uSpray.y);
  vSeed = r1;
  vAlpha = uSpray.x * 0.6 * smoothstep(0.0, 0.05, age) * pow(1.0 - age / life, 1.5)
         * smoothstep(-0.2, 0.1, y) * smoothstep(1.0, 4.0, vViewZ);
}`,ni=`
precision highp float;
uniform sampler2D uSceneDepth;
uniform sampler2D uFoamTex;
uniform vec2 uResolution;
uniform vec2 uNearFar;
in vec2 vUv;
in float vAlpha;
in vec3 vLight;
in float vSeed;
in float vViewZ;
out vec4 fragColor;

void main() {
  float r = length(vUv);
  if (vAlpha <= 0.0 || r > 1.0) discard;
  // soft gaussian puff, broken up only at low frequency so it reads as mist
  float n = texture(uFoamTex, vUv * 0.08 + vSeed * 17.0).r;
  float a = vAlpha * exp(-3.5 * r * r) * (0.5 + n);
  // soft against the opaque scene (the water surface itself is handled by the depth test)
  float d = texelFetch(uSceneDepth, ivec2(gl_FragCoord.xy), 0).r * 2.0 - 1.0;
  float sceneZ = 2.0 * uNearFar.x * uNearFar.y / (uNearFar.y + uNearFar.x - d * (uNearFar.y - uNearFar.x));
  a *= clamp((sceneZ - vViewZ) / 0.8, 0.0, 1.0);
  fragColor = vec4(vLight * a, a);
}`;function ri(e,t){let{data:n,size:r,extent:i}=e,a=new Float32Array(t*4),o=11,s=0,c=()=>(o=Math.imul(o,1664525)+1013904223>>>0)/4294967296;for(let e=0;s<t&&e<t*400;e++){let e=Math.floor(c()*r),t=Math.floor(c()*r),o=(t*r+e)*4,l=-n[o],u=n[o+1];l<.3||l>3.2||u>150||(a.set([((e+c())/r-.5)*i,((t+c())/r-.5)*i,c(),c()],s*4),s++)}return{data:a.subarray(0,s*4),count:s}}function ii(e){let t=new s;return t.setAttribute(`position`,new Se([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),t.setIndex([0,1,2,0,2,3]),t.instanceCount=e,t}var ai=class{constructor(e,t,n=15e4){let r=ri(t,n),i=ii(r.count);i.setAttribute(`aEmit`,new Ge(r.data,4)),this.params={amount:1,size:1,distance:350},this.uniforms={...e.uniforms,uSpray:{value:new S}};let a=e=>new A({glslVersion:te,vertexShader:e,fragmentShader:ni,uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:5,blendSrc:201,blendDst:205,blendSrcAlpha:200,blendDstAlpha:201});this.mesh=new w(i,a(ei)),this.mesh.frustumCulled=!1,this.splash=new w(ii(1280),a(ti)),this.splash.frustumCulled=!1}update(){let e=this.params;this.uniforms.uSpray.value.set(e.amount,e.size,e.distance),this.mesh.visible=this.splash.visible=e.amount>0}},oi=24,si=`
in vec3 aSeed;
uniform float uTime;
uniform vec3 uScatterColor;
uniform vec3 uSunColor;
uniform vec3 uSunDir;
uniform float uPx;      // pixels per metre at 1 m (projection scale)
out vec3 vCol;
void main() {
  // slow drift + wobble, wrapped into a box centred on the camera
  vec3 p = aSeed * ${oi.toFixed(1)} + vec3(0.11, -0.03, 0.07) * uTime
         + 0.3 * sin(uTime * (0.3 + aSeed.yzx) + aSeed.zxy * 40.0);
  p = cameraPosition + mod(p - cameraPosition + ${(oi/2).toFixed(1)}, ${oi.toFixed(1)}) - ${(oi/2).toFixed(1)};
  vec4 view = viewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * view;
  float size = (0.004 + 0.01 * fract(aSeed.x * 91.7)) * uPx / max(-view.z, 0.1);
  gl_PointSize = clamp(size, 1.0, 6.0);
  vCol = uScatterColor * (uSunColor * max(uSunDir.y, 0.0) + 1.0) * 4.0 * (0.4 + fract(aSeed.y * 37.1));
  // too close to the lens: skip
  if (-view.z < 0.4 || p.y > 0.0) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
}`,ci=`
precision highp float;
in vec3 vCol;
out vec4 fragColor;
void main() {
  if (length(gl_PointCoord - 0.5) > 0.5) discard;
  fragColor = vec4(vCol, 1.0);
}`,li=class{constructor(e,t=6e3){let n=new Float32Array(t*3),r=3;for(let e=0;e<n.length;e++)n[e]=(r=Math.imul(r,1664525)+1013904223>>>0)/4294967296;let i=new ye;i.setAttribute(`position`,new M(new Float32Array(t*3),3)),i.setAttribute(`aSeed`,new M(n,3));let a=e.uniforms;this.uniforms={uTime:a.uTime,uScatterColor:a.uScatterColor,uSunColor:a.uSunColor,uSunDir:a.uSunDir,uPx:{value:1e3}},this.mesh=new de(i,new A({glslVersion:te,vertexShader:si,fragmentShader:ci,uniforms:this.uniforms})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1}update(e,t,n){this.mesh.visible=n,this.uniforms.uPx.value=t/(2*Math.tan(P.degToRad(e.fov)/2))}},Z=(e,t=1)=>new D(e).multiplyScalar(t);function ui(e){return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function di(e,t){let n=new Float32Array(e*3);for(let r=0;r<e;r++){let e=t(r);n[r*3]=e.r,n[r*3+1]=e.g,n[r*3+2]=e.b}return new M(n,3)}var fi=(e,t)=>e.setAttribute(`color`,di(e.attributes.position.count,()=>t)),pi=(e,t,n,r,i,a,o)=>fi(new N(e,t,n).translate(r,i,a),o);function mi(e){let t=0;for(let n=1;n<e.length;n++){let r=e[n-1],i=e[n];t+=Math.PI*Math.abs(i.y-r.y)*(r.x*r.x+r.x*i.x+i.x*i.x)/3}return t}function hi(e){let t=e.attributes.position,n=new S,r=new S,i=new S,a=0,o=0;for(let e=0;e<t.count;e+=3){n.fromBufferAttribute(t,e),r.fromBufferAttribute(t,e+1),i.fromBufferAttribute(t,e+2);let s=n.x+r.x+i.x,c=n.dot(r.cross(i))/6;a+=c,o+=c*s/4}return{vol:a,cx:o/a}}function gi(){let e=ui(11),t=.9,n=.09,r=.45-n/2,i=[pi(.84,.84,.84,0,0,0,Z(3023127))];for(let a=0;a<3;a++)for(let o of[-1,1])for(let s of[-1,1]){let c=[n,n,n],l=[0,0,0];c[a]=t,l[(a+1)%3]=o*r,l[(a+2)%3]=s*r,i.push(pi(...c,...l,Z(7228719,.9+.2*e())))}for(let t=0;t<3;t++)for(let n of[-1,1]){let r=(t+1)%3,a=(t+2)%3;for(let o=0;o<5;o++){let s=[0,0,0],c=[0,0,0];s[t]=.04,s[r]=.78,s[a]=.13599999999999998,c[t]=n*.41000000000000003,c[a]=(o+.5-5/2)*.144,i.push(pi(...s,...c,Z(11041611,.85+.3*e())))}}let a=t/4,o=[];for(let e of[-.225,a])for(let t of[-.225,a])for(let n of[-.225,a])o.push(new S(e,t,n));return{geo:ke(i),rough:.85,metal:0,volume:t**3,density:550,samples:o,cellHeight:t/2}}function _i(){let e=.95,t=.27,n=[[-.44,-.375],[-.22,-.17],[-.035,.035],[.17,.22],[.375,.44]],r=e=>n.some(([t,n])=>e>t&&e<n),i=[];for(let t=0;t<=40;t++)i.push(-.95/2+e*t/40);for(let[e,t]of n)i.push(e-.0015,e+.0015,t-.0015,t+.0015);i.sort((e,t)=>e-t);let a=i.map(n=>new I(t+.04999999999999999*(1-(2*n/e)**2)+(r(n)?.012:0),n)),o=new g(a,24),s=ui(5),c=Array.from({length:24},()=>.85+.3*s()),l=Z(9255725),u=Z(2764082),d=o.attributes.position;o.setAttribute(`color`,di(d.count,e=>r(d.getY(e))?u:l.clone().multiplyScalar(c[Math.floor(e/a.length)%24]))),o.rotateZ(Math.PI/2);let f=[Z(10252872),Z(7294511)],p=[-1,1].map(n=>{let r=new ze(t,24).rotateY(n*Math.PI/2).translate(n*e/2,0,0);return r.setAttribute(`color`,di(r.attributes.position.count,e=>f[+!!e]))}),m=[];for(let t of[-3*e/8,-.95/8,e/8,3*e/8])for(let e of[-.14,.14])m.push(new S(t,e,0));return{geo:ke([o,...p]),rough:.7,metal:.1,volume:mi(a),density:420,samples:m,cellHeight:.32}}function vi(){let e=.5,t=.1,n=.06,r=.11,i=Math.sqrt(e*e-t*t),a=Math.asin(i/e),o=[];for(let t=0;t<=40;t++)o.push(e*Math.sin(-a+2*a*t/40));for(let e of[-.11,r])o.push(e-.003,e+.003);o.sort((e,t)=>e-t);let s=[new I(0,-.8),new I(t,-.8),...o.map(t=>new I(Math.sqrt(e*e-t*t),t)),new I(t,.56),new I(0,.56)],l=Z(12855838),u=Z(15262936),d=Z(2764082),f=new g(s,28),p=f.attributes.position;f.setAttribute(`color`,di(p.count,e=>{let t=p.getY(e);return t<-i+1e-4||t>i-1e-4?d:Math.abs(t)<=r?u:l}));let m=[f,fi(new c(.022,.028,.45,8).translate(0,.775,0),Z(8093831)),fi(new c(.1,.1,.016,12).translate(0,1,0),d),fi(new L(.1,.15,12).translate(0,1.225,0),l)];for(let e=0;e<4;e++){let t=Math.PI/4+e*Math.PI/2;m.push(fi(new c(.008,.008,.15,4).translate(.085*Math.cos(t),1.083,.085*Math.sin(t)),d))}m.forEach(e=>e.translate(0,n,0));let h=.19,_=[];for(let e of[-.19,h])for(let t of[-.19,h])for(let r of[-.19,h])_.push(new S(e,n+t,r));return{geo:ke(m),rough:.45,metal:.05,volume:mi(s),density:300,samples:_,cellHeight:e}}function yi(){let e=(e,t,n,r)=>{let i=e+.5,a=Math.abs(2*n),o=t+.5,s=i<.4?.62+.38*Math.sin(i/.4*Math.PI/2):Math.max(.02,1-((i-.4)/.6)**1.8),c=Math.max(0,(i-.3)/.7),l=Math.max(0,(.3-i)/.3),u=.4+.22*c*c+.05*l*l,d=-.2+.2*Math.max(0,(i-.5)/.5)**1.6+.05*(1-i)**2+.2*a**1.5;return r.set(e*3.6,d+(u-d)*o,2*n*.65*s*(.8+.2*o))},t=new N(1,1,1,24,5,8),n=t.attributes.position,r=t.index,i=n.array.slice(),a=new S;for(let t=0;t<n.count;t++)e(i[t*3],i[t*3+1],i[t*3+2],a),n.setXYZ(t,a.x,a.y,a.z);t.computeVertexNormals();let o=ui(3),s=Z(1850948),c=Z(2789260),l=Z(15328988),u=Z(4861984),d=[s,s,c,l,u],f=Array.from({length:8},(e,t)=>t===0||t===7?u:Z(11568725,.9+.2*o())),p=[];for(let{start:e,count:n,materialIndex:a}of t.groups)for(let t=e;t<e+n;t+=3){let e=0,n=0;for(let a=0;a<3;a++){let o=r.getX(t+a);e+=i[o*3+1],n+=i[o*3+2]}e=e/3+.5,n=n/3+.5,p[t/3]=a===3?s:a===2?f[Math.floor(n*8)]:d[Math.floor(e*5)]}let m=t.toNonIndexed();m.setAttribute(`color`,di(m.attributes.position.count,e=>p[Math.floor(e/3)]));let{vol:h,cx:g}=hi(m),_=[m];for(let t of[-.1,.12])e(t,.5,.5,a),_.push(pi(.26,.045,a.z*2*.76,a.x,a.y+.0125,0,Z(11897432)).toNonIndexed());let v=[];for(let t=0;t<4;t++)for(let n of[-.25,.25])for(let r of[-.25,.25])v.push(e((t+.5)/4-.5,n,r,new S));let y=ke(_).translate(-g,0,0);return v.forEach(e=>e.x-=g),{geo:y,rough:.55,metal:0,volume:h,density:280,samples:v,cellHeight:.3}}var bi={crate:gi,barrel:_i,buoy:vi,boat:yi};function xi(e,t){let n=bi[e];if(!n)throw Error(`unknown floater kind: ${e}`);let{geo:r,rough:i,metal:a,...o}=n(),s=new x({vertexColors:!0,roughness:i,metalness:a});t(s);let c=new w(r,s);return c.name=`floater-${e}`,c.castShadow=!1,c.receiveShadow=!0,c.layers.enable(1),r.computeBoundingBox(),{kind:e,object:c,size:r.boundingBox.getSize(new S),volume:o.volume,density:o.density,samples:o.samples,cellHeight:o.cellHeight}}var Si=1025,Ci=9.81,wi=1/240,Ti=28,Ei=new S,Di=new S,Oi=new S,ki=new S,Ai=new S,ji=new v,Mi=new v,Ni=new Ae,Pi=new S,Fi=new S,Ii=new ce,Li=class{constructor(e){this.desc=e,this.object=e.object,this.mass=e.density*e.volume;let t=e.size,n=this.mass;this.invInertia=new S(12/(n*(t.y*t.y+t.z*t.z)),12/(n*(t.x*t.x+t.z*t.z)),12/(n*(t.x*t.x+t.y*t.y))),this.pos=new S,this.vel=new S,this.quat=new Ae,this.angVel=new S,this.radius=e.size.length()/2,this.wet=!1;let r=e.samples.length;this.cellVolume=e.volume/r,this.cellMass=n/r,this.world=e.samples.map(()=>new S),this.water=new Float32Array(r*4),this.lastDisp=new Float32Array(r*3).fill(NaN)}place(e,t){this.pos.copy(e),this.vel.set(0,0,0),this.angVel.set(0,0,0),this.quat.setFromAxisAngle(Ei.set(0,1,0),t),this.water.fill(0),this.lastDisp.fill(NaN),this.updateWorld()}updateWorld(){for(let e=0;e<this.world.length;e++)this.world[e].copy(this.desc.samples[e]).applyQuaternion(this.quat).add(this.pos)}},Ri=class{constructor({scene:e,heightAt:t,patchMaterial:n}){this.scene=new be,e.add(this.scene),this.heightAt=t,this.patchMaterial=n,this.bodies=[],this.layout=0,this.points=new Float32Array(1024),this.count=0,this.params={drag:1.6,angularDrag:.8,buoyancy:1},this.time=0,this.impacts=[]}add(e,t,n=Math.random()*Math.PI*2){if(this.bodies.length>=Ti){let e=this.bodies.shift();this.scene.remove(e.object)}let r=new Li(xi(e,this.patchMaterial));return r.place(t,n),this.scene.add(r.object),this.bodies.push(r),this.layout++,r}clear(){for(let e of this.bodies)this.scene.remove(e.object);this.bodies.length=0,this.layout++}spawn(e,t){this.clear();let n=Oi.copy(t).setY(0).normalize(),r=new S(-n.z,0,n.x),i=(t,i)=>new S().copy(e).addScaledVector(n,t).addScaledVector(r,i).setY(.2);this.add(`boat`,i(22,-4),Math.atan2(n.x,n.z)+1.2),this.add(`buoy`,i(38,9)),[[12,3],[16,-9],[27,6],[31,-1],[19,12]].forEach(([e,t])=>this.add(`crate`,i(e,t))),[[14,-2],[24,14],[34,-8]].forEach(([e,t])=>this.add(`barrel`,i(e,t)))}collectPoints(e){let t=0;for(let n of e)this.points[t++]=n.x,this.points[t++]=n.z;for(let e of this.bodies)for(let n of e.world)this.points[t++]=n.x,this.points[t++]=n.z;return this.count=t/2,this.points}ingest(e,t){if(e.resultTag!==this.layout||e.resultTime===this.lastResultTime)return;let n=this.lastResultTime===void 0?0:e.resultTime-this.lastResultTime;this.lastResultTime=e.resultTime;let r=e.result,i=t;for(let t of this.bodies)for(let a=0;a<t.world.length;a++,i++){if(i>=e.resultCount)return;let o=r[i*4],s=r[i*4+1],c=r[i*4+2],l=t.water,u=t.lastDisp;if(l[a*4]=o,n>1e-4&&!Number.isNaN(u[a*3])){let e=(e,t)=>Math.max(-t,Math.min(t,e));l[a*4+1]=e((s-u[a*3])/n,3),l[a*4+2]=e((o-u[a*3+1])/n,.8),l[a*4+3]=e((c-u[a*3+2])/n,3)}u[a*3]=s,u[a*3+1]=o,u[a*3+2]=c}}step(e){e=Math.min(e,1/20),this.time+=e;let t=Math.max(1,Math.ceil(e/wi)),n=e/t;for(let e=0;e<t;e++)for(let e of this.bodies)this.integrate(e,n);for(let e of this.bodies)e.object.position.copy(e.pos),e.object.quaternion.copy(e.quat)}integrate(e,t){let n=this.params,r=Oi.set(0,-e.mass*Ci,0),i=Ai.set(0,0,0),a=e.desc.cellHeight,o=!1;e.updateWorld();for(let t=0;t<e.world.length;t++){let s=e.world[t],c=e.water;Di.subVectors(s,e.pos),ki.copy(e.angVel).cross(Di).add(e.vel);let l=P.clamp((c[t*4]-s.y)/a+.5,0,1);if(l>0){o=!0,Ei.set(0,Si*Ci*e.cellVolume*l*n.buoyancy,0);let a=n.drag*e.cellMass*l;Ei.x-=(ki.x-c[t*4+1])*a,Ei.y-=(ki.y-c[t*4+2])*a*1.5,Ei.z-=(ki.z-c[t*4+3])*a,r.add(Ei),i.add(Fi.copy(Di).cross(Ei))}let u=this.heightAt(s.x,s.z)-s.y;if(u>0){let t=e.cellMass*900;Ei.set(-ki.x*e.cellMass*6,u*t-ki.y*e.cellMass*40,-ki.z*e.cellMass*6),r.add(Ei),i.add(Fi.copy(Di).cross(Ei))}}if(o&&!e.wet&&e.vel.y<-1.5){let t=e.desc.size;this.impacts.push({x:e.pos.x,z:e.pos.z,t:this.time,amp:Math.min(.35,.03*-e.vel.y*Math.min(t.x,t.z)),size:Math.max(t.x,t.z)*.5}),this.impacts.length>8&&this.impacts.shift()}e.wet=o,e.vel.addScaledVector(r,t/e.mass),e.pos.addScaledVector(e.vel,t),ji.setFromMatrix4(Ii.makeRotationFromQuaternion(e.quat)),Mi.copy(ji).transpose(),Pi.copy(i).applyMatrix3(Mi).multiply(e.invInertia).applyMatrix3(ji),e.angVel.addScaledVector(Pi,t),e.angVel.multiplyScalar(Math.exp(-n.angularDrag*t));let s=e.angVel.length();s>1e-6&&(Ni.setFromAxisAngle(Ei.copy(e.angVel).divideScalar(s),s*t),e.quat.premultiply(Ni).normalize())}},zi=e=>Math.atan2(Math.sin(e),Math.cos(e)),Bi=(e,t,n)=>Math.min(n,Math.max(t,e)),Vi=class{constructor(e={}){this.RD=e.discRadius??800,this.ground=e.ground,this.water=e.water??(()=>0),this.cell=e.cell??14,this.minDepth=e.minDepth??3.2,this.margin=e.margin??2,this.cruise=e.cruise??46,this.boostV=e.boostV??105,this.turnCap=e.turnCap??.75,this.onSplash=e.onSplash??(()=>{}),this.blocked=e.blocked??(()=>!1),this.buildGrid(),this.x=0,this.z=0,this.y=0,this.psi=0,this.v=0,this.vy=0,this.hop=0,this.bank=0,this.pitch=0,this.rate=0,this.throttle=0,this.onWater=!0,this.energy=1,this.boosting=!1,this.boostHeld=!1,this.path=[],this.target=null,this.state=`Parked`,this.idleT=0,this.autoFly=!0,this.demo=!1,this.manualT=0,this.stickV=null,this.t=0,this.pathVersion=0}buildGrid(){let e=this.cell,t=this.N=Math.ceil(2*this.RD/e),n=new Uint8Array(t*t);this.ok=new Uint8Array(t*t);for(let r=0;r<t;r++)for(let i=0;i<t;i++){let a=-this.RD+(i+.5)*e,o=-this.RD+(r+.5)*e;n[r*t+i]=+(Math.hypot(a,o)<this.RD-70&&this.ground(a,o)<-this.minDepth&&!this.blocked(a,o))}let r=this.margin;for(let e=0;e<t;e++)for(let i=0;i<t;i++){let a=n[e*t+i];for(let o=-r;a&&o<=r;o++)for(let s=-r;s<=r;s++){if(s*s+o*o>r*r+1)continue;let c=i+s,l=e+o;if(c<0||l<0||c>=t||l>=t||!n[l*t+c]){a=0;break}}this.ok[e*t+i]=a}}idx(e,t){let n=Math.floor((e+this.RD)/this.cell),r=Math.floor((t+this.RD)/this.cell);return n<0||r<0||n>=this.N||r>=this.N?-1:r*this.N+n}free(e,t){let n=this.idx(e,t);return n>=0&&this.ok[n]===1}ctr(e){return{x:-this.RD+(e%this.N+.5)*this.cell,z:-this.RD+((e/this.N|0)+.5)*this.cell}}nearestFree(e,t){if(this.free(e,t))return this.idx(e,t);let n=-1,r=0xde0b6b3a7640000;for(let i=0;i<this.ok.length;i++)if(this.ok[i]){let a=this.ctr(i),o=(a.x-e)**2+(a.z-t)**2;o<r&&(r=o,n=i)}return n}los(e,t){let n=Math.hypot(t.x-e.x,t.z-e.z),r=Math.ceil(n/(this.cell*.4));for(let n=1;n<r;n++){let i=n/r;if(!this.free(e.x+(t.x-e.x)*i,e.z+(t.z-e.z)*i))return!1}return!0}astar(e,t){let n=this.N,r=new Float32Array(n*n).fill(1e9),i=new Int32Array(n*n).fill(-1),a=new Uint8Array(n*n),o=[e];r[e]=0;let s=t%n,c=t/n|0,l=e=>{let t=Math.abs(e%n-s),r=Math.abs((e/n|0)-c);return Math.max(t,r)+.414*Math.min(t,r)},u=new Float32Array(n*n).fill(1e9);u[e]=l(e);let d=0;for(;o.length&&d++<4e4;){let e=0;for(let t=1;t<o.length;t++)u[o[t]]<u[o[e]]&&(e=t);let s=o[e];if(o[e]=o[o.length-1],o.pop(),s===t)break;if(a[s])continue;a[s]=1;let c=s%n,d=s/n|0;for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++){if(!t&&!e)continue;let f=c+t,p=d+e;if(f<0||p<0||f>=n||p>=n)continue;let m=p*n+f;if(!this.ok[m]||a[m]||t&&e&&(!this.ok[d*n+f]||!this.ok[p*n+c]))continue;let h=r[s]+(t&&e?1.414:1);h<r[m]&&(r[m]=h,u[m]=h+l(m),i[m]=s,o.push(m))}}if(i[t]<0&&t!==e)return null;let f=[];for(let n=t;n>=0&&(f.push(this.ctr(n)),n!==e);n=i[n]);return f.reverse()}goTo(e,t){let n=this.idx(e,t),r=n<0||!this.ok[n],i=this.nearestFree(e,t),a=this.nearestFree(this.x,this.z);if(i<0||a<0)return`none`;let o=r?this.ctr(i):{x:e,z:t},s=this.astar(a,i);if(!s)return`none`;s[0]={x:this.x,z:this.z},s[s.length-1]=o;let c=[s[0]],l=0;for(;l<s.length-1;){let e=s.length-1;for(;e>l+1&&!this.los(s[l],s[e]);)e--;c.push(s[e]),l=e}return this.path=c.slice(1),this.target=o,this.state=`Taxiing`,this.idleT=0,this.stickV=null,this.pathVersion++,r?`land`:`ok`}park(e,t){this.x=e.x,this.z=e.z,this.psi=t,this.dock={...e,psi:t},this.state=`Parked`}home(){this.dock&&this.goTo(this.dock.x,this.dock.z)!==`none`&&(this.homing=!0)}stick(e,t,n,r=0){if(Math.hypot(e,t)<.2)return;let i=Math.cos(r),a=Math.sin(r),o=-i*t-a*e*-1,s=-a*t+i*e*-1;this.stickV={psi:Math.atan2(o,s),k:Math.min(1,Math.hypot(e,t))},this.manualT=.25,this.path=[],this.target=null,this.state=`Manual`,this.idleT=0,this.homing=!1,this.pathVersion++}steer(e,t=1){this.stickV={psi:e,k:t},this.manualT=.25,(this.path.length||this.target)&&(this.path=[],this.target=null,this.pathVersion++),this.state=`Manual`,this.idleT=0,this.homing=!1,this.parkTurn=!1}boost(e){this.boostHeld=!!e}label(){return this.boosting?this.onWater?`Boost ⚡`:`Skimming ⚡`:this.state}randomTarget(){for(let e=0;e<200;e++){let e=Math.random()*6.283,t=300+Math.random()*(this.RD-380),n=Math.cos(e)*t,r=Math.sin(e)*t;if(this.free(n,r)&&Math.hypot(n-this.x,r-this.z)>400)return{x:n,z:r}}return null}step(e){e=Math.min(e,.1),this.t+=e;let t=this.psi,n=0;if(this.stickV)t=this.stickV.psi,n=this.cruise*this.stickV.k,(this.manualT-=e)<=0&&(this.stickV=null,this.state=`Drifting`);else if(this.path.length){let e=this.path[0],r=e.x-this.x,i=e.z-this.z,a=Math.hypot(r,i),o=this.path.length===1,s=a+(o?0:200);t=Math.atan2(r,i),n=this.cruise*Bi(s/140,.18,1),a<(o?12:40)&&(this.path.shift(),this.path.length||(this.target=null,this.state=this.homing?`Parked`:`Idle`,this.homing&&this.dock&&(this.parkTurn=!0),this.homing=!1,this.idleT=0,this.pathVersion++))}else if(this.idleT+=e,this.parkTurn&&this.dock&&(t=this.dock.psi,this.x+=(this.dock.x-this.x)*Math.min(1,e*.3),this.z+=(this.dock.z-this.z)*Math.min(1,e*.3)),(this.autoFly||this.demo)&&this.idleT>(this.demo?6:14)){let e=this.randomTarget();this.parkTurn=!1,e&&this.goTo(e.x,e.z),this.state=`Cruising (auto)`}(this.state===`Taxiing`||this.state===`Cruising (auto)`||this.state===`Manual`)&&(this.parkTurn=!1);let r=this.boostHeld&&this.energy>.02&&(n>0||this.v>10);this.boosting=r,r?(this.energy=Math.max(0,this.energy-e*.22),n=Math.max(n,this.boostV),!this.path.length&&!this.stickV&&(t=this.psi)):this.energy=Math.min(1,this.energy+e*(this.boostHeld?.03:.1)),this.v+=(n-this.v)*Math.min(1,e*(n>this.v?.8:1.1));let i=this.turnCap*(this.v<6?Math.max(.15,this.v/6):1)/(1+Math.max(0,this.v-this.cruise)/60),a=Bi(zi(t-this.psi)*1.6,-i,i);this.rate+=(a-this.rate)*Math.min(1,e*3),this.psi=zi(this.psi+this.rate*e);let o=this.x+Math.sin(this.psi)*this.v*e,s=this.z+Math.cos(this.psi)*this.v*e;!this.free(o,s)&&this.free(this.x,this.z)&&(this.v*=.5,o=this.x,s=this.z),this.x=o,this.z=s;let c=this.water(this.x,this.z),l=(this.boosting&&this.v>75?1:0)*(3.5+2.5*Math.max(0,Math.sin(this.t*2.3)));this.vy+=((l-this.hop)*4-this.vy)*Math.min(1,e*4),this.hop=Math.max(0,this.hop+this.vy*e);let u=this.onWater;this.onWater=this.hop<.6,!u&&this.onWater&&this.onSplash(this.x,this.z,.7,`touch`),this.y=c+this.hop;let d=Bi(this.rate*this.v*(this.onWater?.012:.03),this.onWater?-.22:-.5,this.onWater?.22:.5);this.bank+=(d-this.bank)*Math.min(1,e*2.5);let f=this.onWater?.025*Math.min(1,this.v/40)+(this.boosting?.05:0):.09+.03*Math.sin(this.t*2.3);this.pitch+=(f-this.pitch)*Math.min(1,e*2),this.throttle+=((this.boosting?1:n>0?.55:.12)-this.throttle)*Math.min(1,e*2),this.v>8&&Math.random()<e*2&&this.onSplash(this.x,this.z,this.v/60,`wake`)}},Hi=90,Ui=class{constructor(e){this.pts=[],this.acc=0;let t=new ye;this.pos=new Float32Array(540),this.uv=new Float32Array(360),this.age=new Float32Array(180),t.setAttribute(`position`,new M(this.pos,3)),t.setAttribute(`uv`,new M(this.uv,2)),t.setAttribute(`age`,new M(this.age,1));let n=[];for(let e=0;e<89;e++){let t=e*2;n.push(t,t+1,t+2,t+1,t+3,t+2)}t.setIndex(n),this.u={uBright:{value:1.6},uT:{value:0}},this.mat=new A({transparent:!0,depthWrite:!1,side:2,uniforms:this.u,polygonOffset:!0,polygonOffsetFactor:-2,vertexShader:`attribute float age; varying vec2 vU; varying float vA; varying vec2 vW; void main(){ vU = uv; vA = age; vW = position.xz; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,fragmentShader:`uniform float uBright, uT; varying vec2 vU; varying float vA; varying vec2 vW;
        float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }
        void main(){
          float x = abs(vU.x * 2.0 - 1.0), life = clamp(1.0 - vA, 0.0, 1.0);
          float edgeW = mix(0.16, 0.09, vA);
          float foamN = n(vW * 0.35 + vec2(0.0, uT * 0.3)) * 0.6 + n(vW * 1.4) * 0.4;
          float band = 1.0 - abs(x - (1.0 - edgeW)) / edgeW;
          float edge = smoothstep(0.45, 0.6, band * (0.55 + 0.7 * foamN) + 0.15 * life);
          float mid = smoothstep(0.3 - 0.1*vA, 0.0, x) * smoothstep(0.62 + 0.2*vA, 0.7 + 0.2*vA, foamN);
          float a = max(edge * (0.35 + 0.6 * life), mid * 0.75 * life) * smoothstep(0.0, 0.03, vA + 0.01);
          if (a < 0.01) discard;
          gl_FragColor = vec4(vec3(uBright), a); }`}),this.mesh=new w(t,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5,e.add(this.mesh),this.collar=new m,e.add(this.collar),this.cu={uBright:this.u.uBright,uT:this.u.uT,uV:{value:0}};let r=new A({transparent:!0,depthWrite:!1,uniforms:this.cu,vertexShader:`varying vec2 vU; void main(){ vU = uv * 2.0 - 1.0; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,fragmentShader:`uniform float uBright, uT, uV; varying vec2 vU;
        float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        void main(){ vec2 q = vU; q.y = q.y > 0.0 ? q.y : q.y * 0.85; float r = length(q);
          float ring = smoothstep(1.0, 0.86, r) * smoothstep(0.5, 0.8, r);
          float bow = smoothstep(0.3, 1.0, vU.y) * smoothstep(1.0, 0.75, r) * (0.4 + uV);
          float n = h(floor(vU * vec2(9.0, 30.0) + floor(uT * 6.0)));
          float a = (ring * (0.65 + 0.35 * n) + bow * n) * 0.9; if (a < 0.02) discard; gl_FragColor = vec4(vec3(uBright), a); }`});for(let e of[-1,1]){let t=new w(new xe(1,1).rotateX(-Math.PI/2),r);t.userData.sd=e,t.renderOrder=6,t.frustumCulled=!1,this.collar.add(t)}}update(e,t,n,r,i=1.6){this.u.uT.value+=t,this.u.uBright.value=i,this.collar.position.set(e.x,n+.35,e.z),this.collar.rotation.set(0,e.psi,0),this.collar.visible=e.onWater,this.cu.uV.value=Math.min(1,e.v/60);for(let e of this.collar.children){let t=this.hull;t?(e.position.set(e.userData.sd*t.x*r,0,t.z*r),e.scale.set(t.w*r,1,t.l*r)):(e.position.set(e.userData.sd*.42*r,0,.12*r),e.scale.set(.34*r,1,1.5*r))}this.acc+=t;let a=-.35*r,o=e.x+Math.sin(e.psi)*a,s=e.z+Math.cos(e.psi)*a;if(this.acc>.08){this.acc=0;let t=e.onWater&&e.v>3;this.pts.unshift({x:o,z:s,y:n,psi:e.psi,t:0,on:t,v:e.v}),this.pts.length>Hi&&this.pts.pop()}for(let e of this.pts)e.t+=t;let c=.55*r;for(let t=0;t<Hi;t++){let r=this.pts[Math.min(t,this.pts.length-1)]||{x:o,z:s,y:n,psi:e.psi,t:9,on:!1},i=r.on?Math.min(1,r.t/9):1,a=c+r.t*(7+.15*(r.v||0)),l=Math.cos(r.psi),u=Math.sin(r.psi),d=r.y+.9;this.pos.set([r.x-l*a,d,r.z+u*a,r.x+l*a,d,r.z-u*a],t*6),this.uv.set([0,t/Hi,1,t/Hi],t*4),this.age[t*2]=this.age[t*2+1]=t>=this.pts.length?1:i}let l=this.mesh.geometry;l.attributes.position.needsUpdate=l.attributes.uv.needsUpdate=l.attributes.age.needsUpdate=!0}},Wi=class{constructor(e){let t=new ye;this.MAX=400,this.pos=new Float32Array(this.MAX*2*3),this.dist=new Float32Array(this.MAX*2),this.side=new Float32Array(this.MAX*2),t.setAttribute(`position`,new M(this.pos,3)),t.setAttribute(`dist`,new M(this.dist,1)),t.setAttribute(`side`,new M(this.side,1));let n=[];for(let e=0;e<this.MAX-1;e++){let t=e*2;n.push(t,t+1,t+2,t+1,t+3,t+2)}t.setIndex(n),t.setDrawRange(0,0),this.u={uT:{value:0},uA:{value:0},uCol:{value:new D(1.6,1.5,.9)}},this.line=new w(t,new A({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:this.u,side:2,vertexShader:`attribute float dist; attribute float side; varying float vD; varying float vS; void main(){ vD = dist; vS = side; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,fragmentShader:`uniform float uT, uA; uniform vec3 uCol; varying float vD; varying float vS; void main(){ float d = fract(vD / 26.0 - uT * 0.8); float dash = step(d, 0.55);
        float e = 1.0 - smoothstep(0.6, 1.0, abs(vS)); float a = dash * e * uA * 0.9; if (a < 0.01) discard; gl_FragColor = vec4(uCol, a); }`})),this.line.frustumCulled=!1,this.line.renderOrder=6,e.add(this.line),this.ru={uAge:{value:9},uCol:this.u.uCol},this.ring=new w(new Ee(0,1,64,1).rotateX(-Math.PI/2),new A({transparent:!0,depthWrite:!1,uniforms:this.ru,vertexShader:`varying vec2 vP; void main(){ vP = position.xz; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,fragmentShader:`uniform float uAge; uniform vec3 uCol; varying vec2 vP; void main(){ float r = length(vP); float a = 0.0;
        for (int k = 0; k < 3; k++) { float rr = fract(uAge * 0.6 - float(k) * 0.33); a += smoothstep(0.06, 0.0, abs(r - rr)) * (1.0 - rr); }
        a *= smoothstep(6.0, 3.0, uAge); if (a < 0.01) discard; gl_FragColor = vec4(uCol, a * 0.9); }`})),this.ring.scale.setScalar(38),this.ring.renderOrder=6,this.ring.frustumCulled=!1,e.add(this.ring),this.marker=new w(new c(0,5,12,4).rotateX(Math.PI),new x({color:16761370,emissive:16751104,emissiveIntensity:.6,flatShading:!0})),this.marker.visible=!1,e.add(this.marker),this.ver=-1}ping(e,t,n=0){this.ring.position.set(e,n+.8,t),this.ru.uAge.value=0}update(e,t,n,r=0){this.u.uT.value+=t,this.ru.uAge.value+=t;let i=!!e.target&&e.path.length>0;if(this.u.uA.value+=(+!!i-this.u.uA.value)*Math.min(1,t*4),this.u.uCol.value.setRGB(1.6+r*2,1.45+r*1.6,.8+r*.6),this.marker.visible=i,i&&(this.marker.position.set(e.target.x,n+12+2*Math.sin(this.u.uT.value*3),e.target.z),this.marker.rotation.y+=t*2),!i)return;let a=[{x:e.x,z:e.z},...e.path],o=0,s=0,c=3.5;for(let e=0;e<a.length-1&&o<this.MAX-1;e++){let t=a[e],r=a[e+1],i=Math.hypot(r.x-t.x,r.z-t.z),l=Math.max(1,Math.ceil(i/8)),u=-(r.z-t.z)/(i||1),d=(r.x-t.x)/(i||1);for(let e=0;e<l&&o<this.MAX-1;e++){let a=e/l,f=t.x+(r.x-t.x)*a,p=t.z+(r.z-t.z)*a;this.pos.set([f-u*c,n+1,p-d*c,f+u*c,n+1,p+d*c],o*6),this.dist[o*2]=this.dist[o*2+1]=s+i*a,this.side[o*2]=-1,this.side[o*2+1]=1,o++}s+=i}let l=a[a.length-1];this.pos.set([l.x,n+1,l.z,l.x,n+1,l.z],o*6),this.dist[o*2]=this.dist[o*2+1]=s,o++;let u=this.line.geometry;u.attributes.position.needsUpdate=u.attributes.dist.needsUpdate=u.attributes.side.needsUpdate=!0,u.setDrawRange(0,Math.max(0,(o-1)*6))}},Gi=4242,Q=()=>(Gi=Gi*16807%2147483647)/2147483647,Ki=class{constructor(e,t,n,{lite:r=!1}={}){this.g=new m,e.add(this.g),this.H=t;let i=(e,r,i=330,a=n-60)=>{for(let n=0;n<4e3;n++){let n=Q()*6.283,o=i+Q()*(a-i),s=Math.cos(n)*o,c=Math.sin(n)*o,l=t(s,c);if(l>e&&l<r)return{x:s,z:c,h:l}}return null},a=r?7:11,o=qi([new L(.5,2.2,5).rotateX(Math.PI/2),new L(.45,.8,3).rotateX(-Math.PI/2).translate(0,0,-1.4).scale(.25,1,1)]).scale(1.8,1.8,1.8),s=[`#ff7a00`,`#ffd21a`,`#1fa2ff`,`#ff3b6b`,`#9b5cff`,`#00e0b0`,`#ffffff`,`#ff9e2c`];this.fish=new se(o,new x({roughness:.35,flatShading:!0,emissive:1118481}),20*a),this.schools=[];let l=new D;for(let e=0;e<20;e++){let t=i(-12,-3.5)||{x:500,z:0,h:-8},n=s[e%s.length],r={hx:t.x,hz:t.z,y:Math.max(t.h+1.5,-3.2),a:Q()*6.28,w:(Q()<.5?-1:1)*(.12+Q()*.1),r:18+Q()*22,flee:0,fx:0,fz:0,m:[]};for(let t=0;t<a;t++)r.m.push({ox:(Q()-.5)*16,oy:(Q()-.5)*1.2,oz:(Q()-.5)*16,ph:Q()*6.28}),this.fish.setColorAt(e*a+t,l.set(n).offsetHSL((Q()-.5)*.04,0,(Q()-.5)*.1));this.schools.push(r)}this.PER=a,this.fish.frustumCulled=!1,this.g.add(this.fish),this.turtles=[];let u=new x({color:6257962,roughness:.6,flatShading:!0}),d=new x({color:10272602,roughness:.6,flatShading:!0}),f=new x({color:9067042,roughness:.6,flatShading:!0});for(let e=0;e<2;e++){let t=new m,n=new w(new ne(3.2,1).scale(1,.42,1.25),u);n.position.y=.6;let r=new w(new ne(3,0).scale(1,.2,1.2),f),a=new w(new ne(1,0).scale(.9,.8,1.2),d);a.position.set(0,.5,4.3),t.add(n,r,a),t.userData.fl=[];for(let[e,n,r]of[[2.6,1.8,1],[-2.6,1.8,1],[1.9,-2.6,.6],[-1.9,-2.6,.6]]){let i=new w(new N(3.2*r,.25,1.3*r).translate(Math.sign(e)*1.5*r,0,0),d);i.position.set(e,.2,n),t.add(i),t.userData.fl.push(i)}t.scale.setScalar(1.3);let o=i(-10,-4)||{x:520,z:120,h:-8};this.turtles.push({t,hx:o.x,hz:o.z,a:Q()*6.28,r:45+e*20,w:.05+e*.02,y:Math.max(o.h+2,-3.5)}),this.g.add(t)}let p=(e,t,n)=>{let r=new se(e,t,n.length),i=new ge;return n.forEach((e,t)=>{i.position.set(e.x,e.y,e.z),i.rotation.set(e.rx||0,e.ry||0,0),i.scale.set(e.s,e.sy??e.s,e.s),i.updateMatrix(),r.setMatrixAt(t,i.matrix),e.c&&r.setColorAt(t,l.set(e.c))}),r.receiveShadow=!0,this.g.add(r),r},h=r?.5:1,g=(e,t,n)=>{let r=[];for(let a=0;a<e*h;a++){let e=i(t,n,300);e&&r.push(e)}return r},_=[`#ff4f8b`,`#ff8a3d`,`#b44bff`,`#ffd23f`,`#3fe0d0`,`#ff5e5e`];p(new ne(1,0),new x({roughness:.7,flatShading:!0,emissive:1116168}),g(160,-11,-2).map(e=>({x:e.x,y:e.h+.6,z:e.z,s:2.5+Q()*3.5,sy:1.6+Q()*2.5,ry:Q()*6,c:_[Q()*_.length|0]}))),p(new c(.15,.4,1,5).translate(0,.5,0),new x({roughness:.6,flatShading:!0}),g(140,-10,-2).map(e=>({x:e.x,y:e.h,z:e.z,s:2.2,sy:2+Q()*2,ry:Q()*6,c:[`#ff6fb0`,`#ffa94d`,`#ffe066`][Q()*3|0]}))),this.grass=p(new xe(.6,1,1,3).translate(0,.5,0),new x({color:3123279,roughness:.8,side:2}),g(420,-9,-1.5).map(e=>({x:e.x,y:e.h,z:e.z,s:2+Q()*1.5,sy:3+Q()*4,ry:Q()*6,c:[`#2fa84f`,`#46c35a`,`#1f8a44`][Q()*3|0]}))),this.o=new ge}update(e,t,n,r){let i=this.o,a=0;for(let o of this.schools){o.a+=o.w*t;let s=o.hx+Math.cos(o.a)*o.r,c=o.hz+Math.sin(o.a)*o.r,l=s-n,u=c-r,d=Math.hypot(l,u),f=d<150;o.flee+=(+!!f-o.flee)*Math.min(1,t*(f?3:.4)),f&&(o.fx=l/(d||1),o.fz=u/(d||1));let p=Math.atan2(-Math.sin(o.a)*o.w,Math.cos(o.a)*o.w);for(let t of o.m){let n=1+o.flee*3.5,r=Math.sin(e*2+t.ph)*1.5,l=s+t.ox*n+o.fx*o.flee*40+Math.cos(t.ph+e)*1.2,u=c+t.oz*n+o.fz*o.flee*40+Math.sin(t.ph+e)*1.2;i.position.set(l,o.y+t.oy-o.flee*1.5,u),i.rotation.set(0,o.flee>.3?Math.atan2(o.fx,o.fz)+r*.1:p+r*.12,0),i.scale.setScalar(1),i.updateMatrix(),this.fish.setMatrixAt(a++,i.matrix)}}this.fish.instanceMatrix.needsUpdate=!0;for(let n of this.turtles){n.a+=n.w*t;let r=n.hx+Math.cos(n.a)*n.r,i=n.hz+Math.sin(n.a)*n.r,a=Math.max(0,Math.sin(e*.07+n.r))**8;n.t.position.set(r,n.y*(1-a)+-.8*a,i),n.t.rotation.y=Math.atan2(-Math.sin(n.a),Math.cos(n.a)),n.t.rotation.z=Math.sin(e*.8)*.05,n.t.userData.fl.forEach((t,n)=>{t.rotation.z=Math.sin(e*1.6+n%2*Math.PI)*.45*(n<2?1:.5)*(n%2?-1:1)})}}};function qi(e){let t=[];for(let n of e){let e=n.index?n.toNonIndexed():n;t.push(...e.attributes.position.array)}let n=new ye;return n.setAttribute(`position`,new Se(t,3)),n.computeVertexNormals(),n}var Ji=(function(){var e=`b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb`,t=`b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb`,n=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),r=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!=`object`)return{supported:!1};var i=WebAssembly.validate(n)?s(t):s(e),a,o=WebAssembly.instantiate(i,{}).then(function(e){a=e.instance,a.exports.__wasm_call_ctors()});function s(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;++n){var i=e.charCodeAt(n);t[n]=i>96?i-97:i>64?i-39:i+4}for(var a=0,n=0;n<e.length;++n)t[a++]=t[n]<60?r[t[n]]:(t[n]-60)*64+t[++n];return t.buffer.slice(0,a)}function c(e,t,n,r,i,a,o){var s=e.exports.sbrk,c=r+3&-4,l=s(c*i),u=s(a.length),d=new Uint8Array(e.exports.memory.buffer);d.set(a,u);var f=t(l,r,i,u,a.length);if(f==0&&o&&o(l,c,i),n.set(d.subarray(l,l+r*i)),s(l-s(0)),f!=0)throw Error(`Malformed buffer data: `+f)}var l={NONE:``,OCTAHEDRAL:`meshopt_decodeFilterOct`,QUATERNION:`meshopt_decodeFilterQuat`,EXPONENTIAL:`meshopt_decodeFilterExp`,COLOR:`meshopt_decodeFilterColor`},u={ATTRIBUTES:`meshopt_decodeVertexBuffer`,TRIANGLES:`meshopt_decodeIndexBuffer`,INDICES:`meshopt_decodeIndexSequence`},d=[],f=0;function p(e){var t={object:new Worker(e),pending:0,requests:{}};return t.object.onmessage=function(e){var n=e.data;t.pending-=n.count,t.requests[n.id][n.action](n.value),delete t.requests[n.id]},t}function m(e){for(var t=`self.ready = WebAssembly.instantiate(new Uint8Array([`+new Uint8Array(i)+`]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = `+g.name+`;`+c.toString()+g.toString(),n=new Blob([t],{type:`text/javascript`}),r=URL.createObjectURL(n),a=d.length;a<e;++a)d[a]=p(r);for(var a=e;a<d.length;++a)d[a].object.postMessage({});d.length=e,URL.revokeObjectURL(r)}function h(e,t,n,r,i){for(var a=d[0],o=1;o<d.length;++o)d[o].pending<a.pending&&(a=d[o]);return new Promise(function(o,s){var c=new Uint8Array(n),l=++f;a.pending+=e,a.requests[l]={resolve:o,reject:s},a.object.postMessage({id:l,count:e,size:t,source:c,mode:r,filter:i},[c.buffer])})}function g(e){var t=e.data;self.ready.then(function(e){if(!t.id)return self.close();try{var n=new Uint8Array(t.count*t.size);c(e,e.exports[t.mode],n,t.count,t.size,t.source,e.exports[t.filter]),self.postMessage({id:t.id,count:t.count,action:`resolve`,value:n},[n.buffer])}catch(e){self.postMessage({id:t.id,count:t.count,action:`reject`,value:e})}})}return{ready:o,supported:!0,useWorkers:function(e){m(e)},decodeVertexBuffer:function(e,t,n,r,i){c(a,a.exports.meshopt_decodeVertexBuffer,e,t,n,r,a.exports[l[i]])},decodeIndexBuffer:function(e,t,n,r){c(a,a.exports.meshopt_decodeIndexBuffer,e,t,n,r)},decodeIndexSequence:function(e,t,n,r){c(a,a.exports.meshopt_decodeIndexSequence,e,t,n,r)},decodeGltfBuffer:function(e,t,n,r,i,o){c(a,a.exports[u[i]],e,t,n,r,a.exports[l[o]])},decodeGltfBufferAsync:function(e,t,n,r,i){return d.length>0?h(e,t,n,u[r],l[i]):o.then(function(){var o=new Uint8Array(e*t);return c(a,a.exports[u[r]],o,e,t,n,a.exports[l[i]]),o})}}})(),Yi=1337,$=()=>(Yi=Yi*16807%2147483647)/2147483647,Xi=new De().setMeshoptDecoder(Ji);function Zi(e){let t=null;for(let n=0;n<360;n+=3){let r=P.degToRad(n),i=Math.cos(r),a=Math.sin(r),o=120;for(;o<760&&e(i*o,a*o)>1.2;)o+=2;let s=o;for(;o<760&&e(i*o,a*o)>-4.5;)o+=2;let c=o,l=Math.abs(s-420)+Math.max(0,c-s-110)*2;(!t||l<t.score)&&(t={score:l,a:r,rShore:s,rDeep:c})}let{a:n,rShore:r,rDeep:i}=t,a=Math.cos(n),o=Math.sin(n),s=Math.min(i+25,560);return{a:n,rShore:r,rDock:s,out:new I(a,o),x:a*s,z:o*s,psi:Math.atan2(a,o),approach:{x:a*(s+150),z:o*(s+150)}}}var Qi=class{constructor(e,t,n,{lite:r=!1}={}){this.group=new m,e.add(this.group),this.H=t,this.dock=n,this.glow=[],this.lamps=[];let i=this.group,a=r?.5:1,o=(e,n)=>Math.hypot(t(e+3,n)-t(e-3,n),t(e,n+3)-t(e,n-3))/6,s=(e,t,r)=>Math.hypot(e-n.out.x*n.rShore,t-n.out.y*n.rShore)<r,l=(e,t,n,r=!0)=>{let a=new se(e,t,n.length),o=new ge,s=new D;return n.forEach((e,t)=>{o.position.set(e.x,e.y,e.z),o.rotation.set(e.rx||0,e.ry||0,e.rz||0),o.scale.set(e.sx??e.s,e.sy??e.s,e.sz??e.s),o.updateMatrix(),a.setMatrixAt(t,o.matrix),e.c&&a.setColorAt(t,s.set(e.c))}),a.castShadow=r,a.receiveShadow=!0,i.add(a),a},d=(e,n,r=600)=>{let i=[];for(let a=0;a<e*30&&i.length<e;a++){let e=$()*6.283,a=Math.sqrt($())*r,s=Math.cos(e)*a,c=Math.sin(e)*a,l=t(s,c);n(s,c,l,o(s,c))&&i.push({x:s,z:c,h:l})}return i},f=(e,t={})=>new x({color:e,roughness:.8,...t}),p=new ne(1,1),h=new c(.12,.18,1,6).translate(0,.5,0),g=new L(1,1,7).translate(0,.5,0),_=d(900*a,(e,t,n,r)=>n>5&&n<48&&r<.7&&!s(e,t,70)),v=[`#2f8f2a`,`#3aa632`,`#4cbf3a`,`#227a2c`,`#5bb83a`,`#1f6e33`],y=_.filter((e,t)=>t%3),ee=_.filter((e,t)=>!(t%3));l(h,f(7029795),_.map(e=>{let t=9+$()*8;return{x:e.x,y:e.h-.5,z:e.z,s:1,sx:t*.5,sy:t*.9,sz:t*.5}})),l(p,f(16777215,{flatShading:!0}),y.map(e=>{let t=7+$()*6;return{x:e.x,y:e.h+t*1.35,z:e.z,s:t,sy:t*.85,ry:$()*6,c:v[$()*6|0]}})),l(g,f(16777215,{flatShading:!0}),ee.map(e=>{let t=6+$()*4;return{x:e.x,y:e.h+3,z:e.z,s:t,sy:t*3,ry:$()*6,c:[`#1e6b34`,`#287d3a`,`#1a5c2e`][$()*3|0]}}));let b=d(170*a,(e,t,n,r)=>n>1.4&&n<5&&r<.5&&!s(e,t,45)),te=new c(.35,.6,1,6).translate(0,.5,0),re=new L(.5,4,4,1).rotateZ(Math.PI/2).translate(2,0,0).scale(1,.25,1);l(te,f(10122312),b.map(e=>({x:e.x,y:e.h-.5,z:e.z,s:1,sy:20,rz:($()-.5)*.25,rx:($()-.5)*.25})));let ie=[];for(let e of b)for(let t=0;t<7;t++)ie.push({x:e.x,y:e.h+19.5,z:e.z,s:2.6,ry:t/7*6.283+$(),rz:-.35-$()*.3,c:[`#3fae3a`,`#58c23c`,`#2e9a36`][t%3]});this.uWind={value:0};let ae=f(16777215,{side:2});ae.onBeforeCompile=e=>{e.uniforms.uWind=this.uWind,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uWind;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
        { float ph = instanceMatrix[3].x * 0.07 + instanceMatrix[3].z * 0.05; float k = max(position.x, 0.0) * 0.25;
          transformed.y += sin(uWind * 1.7 + ph) * k * 0.9; transformed.z += sin(uWind * 1.1 + ph * 1.3) * k * 0.5; }`)},ae.customProgramCacheKey=()=>`frondsway`,l(re,ae,ie);let oe=d(1600*a,(e,t,n,r)=>n>3&&n<35&&r<.45),C=[`#ff3b6b`,`#ffd23a`,`#ff7a1a`,`#c04bff`,`#ffffff`,`#ff4fd2`,`#3ad7ff`];l(new ne(1,0),f(16777215,{emissive:1118481}),oe.map(e=>({x:e.x,y:e.h+.8,z:e.z,s:2+$()*2.2,sy:1.2,c:C[$()*C.length|0]})),!1);let ce=d(500*a,(e,t,n,r)=>n>2.5&&n<40&&r<.8);l(new ne(1,1),f(16777215,{flatShading:!0}),ce.map(e=>({x:e.x,y:e.h+1.5,z:e.z,s:3+$()*3,sy:2.4,c:v[$()*6|0]})));let le=d(140*a,(e,t,n,r)=>n>-1.5&&n<1.2&&$()<.08||n>40&&r>.3);l(new u(1,0),f(9077112,{flatShading:!0,roughness:.95}),le.map(e=>({x:e.x,y:e.h,z:e.z,s:3+$()*6,sy:2+$()*3,ry:$()*6,c:[`#8f8a84`,`#a39a8c`,`#7d7468`][$()*3|0]})));let E=d(18,(e,t,n,r)=>n>3&&n<16&&r<.25&&s(e,t,230)&&!s(e,t,60),600).concat(d(10,(e,t,n,r)=>n>3&&n<14&&r<.2&&!s(e,t,230))),ue=[`#fff3d6`,`#ffd6a5`,`#bde0fe`,`#ffc8dd`,`#fefae0`,`#caffbf`],de=[`#d62828`,`#f77f00`,`#1d4e89`,`#2a9d8f`,`#e63946`],pe=E.map(e=>({...e,s:9+$()*5,ry:Math.atan2(e.x,e.z)+($()-.5)}));l(new N(1,.8,1.3).translate(0,.4,0),f(16777215),pe.map(e=>({x:e.x,y:e.h-.5,z:e.z,s:e.s,ry:e.ry,c:ue[$()*ue.length|0]}))),l(new c(0,.85,.6,4,1).rotateY(Math.PI/4).scale(1,1,1.4).translate(0,1.1,0),f(16777215),pe.map(e=>({x:e.x,y:e.h-.5,z:e.z,s:e.s,ry:e.ry,c:de[$()*de.length|0]})));let O=new x({color:3156e3,emissive:16757575,emissiveIntensity:0});this.glow.push({mat:O,k:6}),l(new xe(.3,.25).translate(0,.45,.651),O,pe.map(e=>({x:e.x,y:e.h-.5,z:e.z,s:e.s,ry:e.ry})),!1);{let e=n.a+2.4,r=Math.cos(e),a=Math.sin(e),o=120;for(;o<700&&t(r*o,a*o)>2.5;)o+=2;o-=6;let s=r*o,l=a*o,u=t(s,l)-1,d=new m;d.position.set(s,u,l);for(let e=0;e<6;e++){let t=new w(new c(6.2-(e+1)*.5,6.2-e*.5,9,16),f(e%2?14034984:16777215,{roughness:.5}));t.position.y=4.5+e*9,t.castShadow=!0,d.add(t)}let p=new x({color:16773552,emissive:16769162,emissiveIntensity:.4});this.glow.push({mat:p,k:30,base:.4});let h=new w(new c(3,3,5,12),p);h.position.y=56.5,d.add(h);let g=new w(new L(4,4,12),f(1914199));g.position.y=61,d.add(g);let _=new T({color:16773824,transparent:!0,opacity:0,depthWrite:!1,blending:2,side:2}),v=new w(new L(14,260,16,1,!0).rotateZ(Math.PI/2).translate(130,0,0),_);v.position.y=56.5,d.add(v),this.beam=v,i.add(d)}{let e=n.out,r=Math.atan2(e.x,e.y),a=f(9132587,{roughness:.7}),o=f(4861984),s=n.rShore-30,u=n.rDock-44,d=u-s,p=(s+u)/2,h=new w(new N(10,1.2,d),a);h.position.set(e.x*p,2.6,e.y*p),h.rotation.y=r,h.castShadow=h.receiveShadow=!0,i.add(h);let g=[];for(let n=s;n<=u;n+=14)for(let r of[-1,1]){let i=e.x*n-e.y*r*4.6,a=e.y*n+e.x*r*4.6,o=t(i,a);g.push({x:i,y:(o+2.6)/2,z:a,s:1,sx:.8,sy:2.6-o+1,sz:.8})}l(new c(1,1,1,6),o,g);let _=new m;_.position.set(n.x,0,n.z),_.rotation.y=r,_.scale.setScalar(2);let v=new w(new N(70,1.6,12),a);v.position.set(0,.6,-14),v.castShadow=v.receiveShadow=!0;let y=new w(new N(12,1.6,26),a);y.position.set(-40,.6,16);let ee=y.clone();ee.position.x=40;let b=f(16052712),te=new w(new N(70,1.2,12.4),b);te.position.set(0,-.4,-14),_.add(v,y,ee,te);let ne=f(2236962,{metalness:.6,roughness:.4});for(let[e,t]of[[-30,-9],[-10,-9],[10,-9],[30,-9],[-40,27],[40,27]]){let n=new w(new c(.9,1.1,2.4,10),ne);n.position.set(e,2.5,t),_.add(n)}let re=new x({color:16773312,emissive:16765562,emissiveIntensity:0});this.glow.push({mat:re,k:40});let ie=f(2829634,{metalness:.5}),ae=(e,t,n,r)=>{let i=new w(new c(.4,.5,11,6),ie);i.position.set(t,n+5.5,r);let a=new w(new fe(1.4,10,8),re);a.position.set(t,n+11.5,r),e.add(i,a)};for(let e of[-34,0,34])ae(_,e,1.4,-19);for(let t=s+20;t<u;t+=45)ae(i,e.x*t-e.y*5.2,3.2,e.y*t+e.x*5.2);let S=(e,t,n)=>{let r=new w(new c(1.4,1.8,6,10),new x({color:e,emissive:e,emissiveIntensity:.2}));r.position.set(t,1.5,n),this.glow.push({mat:r.material,k:5,base:.2}),_.add(r)};S(15087942,-60,40),S(3066993,60,40),i.add(_),this.pontoon=_,n.park={x:n.x+e.x*34,z:n.z+e.y*34}}let me=(e,t,n,r,a,o=0,s=null)=>Xi.load(e,e=>{let c=e.scene,l=new k().setFromObject(c),u=l.getSize(new S),d=t/Math.max(u.x,u.z);c.scale.setScalar(d),c.position.set(n-(l.min.x+u.x/2)*d,o-l.min.y*d,r-(l.min.z+u.z/2)*d);let f=new m;if(f.position.set(n,0,r),f.rotation.y=a,c.position.x-=n,c.position.z-=r,f.add(c),c.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.material&&(e.material.envMapIntensity=1))}),s){let e=new x({color:3153936,emissive:16752704,emissiveIntensity:0});this.glow.push({mat:e,k:8});for(let[n,r,i]of s){let a=new w(new xe(t*.12,t*.1),e);a.position.set(n*t,o+r*u.y*d,i*t),f.add(a)}}i.add(f),this.onChange?.()},void 0,t=>console.warn(`prop load failed`,e,t?.message));{let e=n.out,t=new I(-e.y,e.x),r=Math.atan2(e.x,e.y),a=(n,r)=>({x:e.x*n+t.x*r,z:e.y*n+t.y*r});for(let[e,t,i]of[[n.rShore+6,-45,38],[n.rShore+14,48,34],[n.rShore-10,95,30]]){let n=a(e,t);me(`./models/sea_shack.glb`,i,n.x,n.z,r+Math.PI+(t>0?.3:-.3),Math.max(0,this.H(n.x,n.z))-1,[[0,.45,.42],[.18,.45,.42]])}let o=a(n.rShore-70,-60);me(`./models/holiday_beach_house.glb`,40,o.x,o.z,r+Math.PI,this.H(o.x,o.z)-.5,[[0,.4,.36]]);let s=a(n.rShore-90,55);me(`./models/holiday_beach_house.glb`,36,s.x,s.z,r+Math.PI-.5,this.H(s.x,s.z)-.5,[[0,.4,.36]]),this.boats=[];let c=[a(n.rDock-10,-135),a(n.rDock+40,140)];Xi.load(`./seaplane.glb`,e=>c.forEach((t,n)=>{let a=n?e.scene.clone(!0):e.scene;a.scale.setScalar(17),a.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),a.position.y=4.3758-.68;let o=new m;o.add(a),o.position.set(t.x,0,t.z),o.rotation.y=r+(n?.4:-.3),i.add(o),this.boats.push(o)}))}}update(e,t,n=()=>0){for(let{mat:t,k:n,base:r=0}of this.glow)t.emissiveIntensity=r+e*n;this.beam&&(this.beam.rotation.y=t*.6,this.beam.material.opacity=e*.22,this.beam.visible=e>.05),this.uWind&&(this.uWind.value=t),this.pontoon&&(this.pontoon.position.y=.35*Math.sin(t*.9)),this.boats?.forEach((e,n)=>{e.position.y=.4*Math.sin(t*.8+n*2),e.rotation.z=.03*Math.sin(t*.7+n),e.rotation.x=.02*Math.sin(t*.6+n)})}},$i=1,ea=800,ta=30;function na(a,o){let s=new me({antialias:!1,depth:!1,stencil:!1,alpha:!1,powerPreference:`high-performance`,preserveDrawingBuffer:!!r});s.autoClear=!1,s.shadowMap.enabled=!0,s.shadowMap.type=1,s.shadowMap.autoUpdate=!1;let u=!1;s.debug.onShaderError=(e,t,n,r)=>{u=!0,console.error(`shader error`,e.getProgramInfoLog(t),e.getShaderInfoLog(n),e.getShaderInfoLog(r))},document.body.prepend(s.domElement);let p={resolution:a.scale,msaa:a.msaa,reflections:a.reflections,reflectionScale:a.reflScale},h=new Oe(50,1,.5,8e4),g=new Xe(h,s.domElement);g.enableDamping=!0,g.maxDistance=6e3,g.autoRotateSpeed=.25,g.enablePan=!1;let v=e=>(e=Math.min(1,Math.max(.2,+e||.45)),g.rotateSpeed=.9*e,g.zoomSpeed=.8*e,g.dampingFactor=.05,e),y=v(t.touch),b=new Zn(s),te=un(j,1800,512),ne=pn(s),re=new St(s,xt()),ie=new fr(s,re),oe=new Tt,se=new Lt(re,te,b,oe.uniforms);se.uniforms.uFoamTex.value=ne.foam;let C=se.uniforms,ce=C.uOptics.value.w,T=new be;T.environment=b.cube,T.add(b.background);let le=Tr({sky:b,caustics:ie.uniforms,floatShadow:oe.uniforms,water:C,absorption:C.uAbsorption.value,reflectionLayer:$i});T.add(le.group);let E=le.uniforms,ue=E.uFogDensity?E.uFogDensity.value:0,de=E.uCausticStrength.value;a.caustics||(E.uCausticStrength.value=de*.5);let O=new f(16777215,Math.PI);O.castShadow=!0,O.shadow.mapSize.set(a.shadow,a.shadow),Object.assign(O.shadow.camera,{left:-900,right:900,top:900,bottom:-900,near:10,far:5e3}),O.shadow.bias=-4e-4,O.shadow.normalBias=.6,T.add(O,O.target),C.uShadowMatrix.value=E.uSunShadowMatrix.value=O.shadow.matrix,C.uShadowBias.value=.05/(O.shadow.camera.far-O.shadow.camera.near);let ge=new qr(s,se,512),k=new Ri({scene:T,heightAt:j,patchMaterial:le.patchProp}),_e=new Qr(se,h,ie.uniforms),ve=0,xe=!1,Ce=1,we=new Pr($i);C.uReflMatrix.value=we.textureMatrix;let Te=new Ve(new Uint8Array(4),1,1);Te.needsUpdate=!0;let M=new be,De=new ut(K(`precision highp float;
uniform sampler2D uTex; in vec2 vUv; out vec4 outColor; void main() { outColor = texture(uTex, vUv); }`,{uTex:{value:null}}));De.mesh.renderOrder=-1,/OculusBrowser/.test(navigator.userAgent)&&M.add(De.mesh);let ke=new ai(se,te,a.spray),Ae=new li(se);M.add(se.mesh,ke.mesh,ke.splash,Ae.mesh);let N=new Gr(s);N.params.bloomStrength=.05,N.params.bloomThreshold=1.5;let je={...N.params},Me=new be;T.add(Me);let Pe=new Fe(T,{scale:ta,url:`./seaplane.glb`,colour:t.colour,bodyScene:Me});Me.traverse(e=>e.layers.enable($i));let F={h:0,hull:[0,0,0,0]},Ie=Zi(j),Le=new Qi(T,j,Ie,{lite:a.name===`low`}),Re=new mn(T),Be=new Cn(T,j,ea);Be.setEnabled(t.traffic!==!1),Le.onChange=()=>{s.shadowMap.needsUpdate=!0};let L=new(t.manual?Vi:pe)({discRadius:ea,ground:j,water:()=>F.h,blocked:(e,t)=>{let n=Ie.out.x,r=Ie.out.y,i=e-Ie.x,a=t-Ie.z,o=i*n+a*r,s=Math.abs(i*r-a*n);return s<14&&o<-20&&o>-260||o>-42&&o<-14&&s<74||o>4&&o<60&&s>66&&s<94},onSplash:(e,t,n,r)=>{let i=r!==`wake`;k.impacts.unshift({x:e,z:t,t:k.time,amp:i?.3*n:.06*n,size:i?20:9}),k.impacts.length=Math.min(k.impacts.length,8),i&&Pe.splash(e,F.h+.5,t,.9*n+.4)}});L.autoFly=!0,L.demo=e,L.park(Ie.park,Ie.psi,Ie.approach);let He=new Ui(M),Ue=new Wi(M);He.hull={x:.12,z:.05,w:.3,l:1.3};let We=new Ki(T,j,ea,{lite:a.name===`low`}),Ge=[{pos:Pe.root.position,radius:60}],Ke=()=>{let e=Math.cos(L.psi),t=Math.sin(L.psi),n=.9*ta,r=1.2*ta;return[{x:L.x+t*n,z:L.z+e*n},{x:L.x-t*n,z:L.z-e*n},{x:L.x+e*r,z:L.z-t*r},{x:L.x-e*r,z:L.z+t*r}]},R=new m;T.add(R);let qe=null;{let e=[];for(let t=0;t<=180;t++){let n=t/180*Math.PI*2;e.push(Math.min(-1,j(Math.cos(n)*ea,Math.sin(n)*ea)))}let n=(e,t,n,r,i=ea)=>{let a=[],o=[],s=[];for(let c=0;c<=180;c++){let l=c/180*Math.PI*2,u=Math.cos(l)*i,d=Math.sin(l)*i,f=typeof e==`function`?e(c):e,p=typeof t==`function`?t(c):t;if(a.push(u,f,d,u,p,d),o.push(...n,...r),c<180){let e=c*2;s.push(e,e+1,e+2,e+1,e+3,e+2)}}let c=new ye;c.setAttribute(`position`,new Se(a,3)),c.setAttribute(`color`,new Se(o,3)),c.setIndex(s),c.computeVertexNormals();let l=c.attributes.normal;for(let e=0;e<l.count;e++){let t=a[e*3],n=a[e*3+2],r=Math.hypot(t,n);l.setXYZ(e,t/r,0,n/r)}return c},r=new w(n(.4,t=>e[t],[.1,.6,.7],[.01,.12,.25]),new x({vertexColors:!0,roughness:.15,metalness:0,emissive:1739424,emissiveIntensity:1.4,transparent:!0,opacity:.92})),i=new w(n(t=>e[t],-75,[.62,.5,.33],[.24,.15,.09]),new x({vertexColors:!0,roughness:.95})),a=new w(new ze(ea,160).rotateX(Math.PI/2),new x({color:2759184}));a.position.y=-75;let o=new x({color:14673380,roughness:.6,metalness:.05}),s=new w(new c(830,855,46,160),o);s.position.y=-98;let u=new w(new Ee(ea,830,160).rotateX(-Math.PI/2),o);u.position.y=-75;let d=new w(new l(830,2.5,8,200).rotateX(Math.PI/2),new x({color:5212812,metalness:.7,roughness:.35}));d.position.y=-75,R.add(r,i,a,s,u,d);for(let e of[i,s,u])e.castShadow=!1,e.receiveShadow=!1;let f=new w(new fe(3e4,48,24),new A({side:1,depthWrite:!1,uniforms:{uK:{value:1},uSun:{value:new S},uTop:{value:new D(737192)},uHor:{value:new D(2789344)},uLow:{value:new D(402506)},uGlow:{value:new D(1,.6,.3)},uRose:{value:new D(2789344)},uWarm:{value:0}},vertexShader:`varying vec3 vD; void main(){ vD = normalize(position); vec4 p = projectionMatrix*modelViewMatrix*vec4(position,1.0); gl_Position = p.xyww; }`,fragmentShader:`uniform float uK, uWarm; uniform vec3 uSun, uTop, uHor, uLow, uGlow, uRose; varying vec3 vD;
        void main(){ float y = vD.y; vec3 top = uTop, mid = uHor, low = uLow;
          vec3 c = y > 0.0 ? mix(mix(mid, uRose, smoothstep(0.0, 0.12, y)), top, smoothstep(0.1, 0.45, y)) : mix(mid, low, smoothstep(0.0, 0.12, -y));
          float az = dot(normalize(vD.xz + 1e-5), normalize(uSun.xz + 1e-5)) * 0.5 + 0.5;
          float wy = exp(-max(y - 0.02, 0.0) * 2.5 - max(-y, 0.0) * 5.0);
          vec3 warm = mix(uRose, uHor, smoothstep(0.55, 0.95, az));
          c = mix(c, warm, uWarm * smoothstep(0.45, 0.9, az) * smoothstep(0.03, 0.45, wy));
          c += uGlow * pow(max(dot(vD, uSun), 0.0), 8.0) * 0.35;
          gl_FragColor = vec4(c * uK, 1.0); }`}));f.frustumCulled=!1,f.renderOrder=-10,R.add(f),R.userData.backdrop=f;let p=new w(new ze(ea*1.6,64).rotateX(-Math.PI/2),new A({transparent:!0,depthWrite:!1,vertexShader:`varying vec2 vU; void main(){ vU = position.xz; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,fragmentShader:`varying vec2 vU; void main(){ float r = length(vU)/${(ea*1.6).toFixed(1)}; gl_FragColor = vec4(0.0,0.0,0.0, 0.55*smoothstep(1.0,0.45,r)); }`}));p.position.y=-124,R.add(p),qe=Tn(ea,-75),R.add(qe.root),qe.set(t.glass||`cube`)}let z=null;function Je(){let e=s.getDrawingBufferSize(new I);z?.dispose(),z=new d(e.x,e.y,{type:_,samples:p.msaa,generateMipmaps:!1,depthTexture:new ae(e.x,e.y,ee)}),De.material.uniforms.uTex.value=z.texture,C.uSceneColor.value=z.texture,C.uSceneDepth.value=z.depthTexture,C.uResolution.value.copy(e),we.scale=p.reflectionScale,we.setSize(e.x,e.y),N.setSize(e.x,e.y),_e.setSize(e.x,e.y)}function Ye(){s.setPixelRatio(Math.min(window.devicePixelRatio,2)*p.resolution),s.setSize(window.innerWidth,window.innerHeight),h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),Je()}window.addEventListener(`resize`,Ye);let B=!0;function V(){b.update(),O.position.copy(b.sunDir).multiplyScalar(2e3),O.color.setRGB(b.sunColor.x,b.sunColor.y,b.sunColor.z).multiplyScalar(1/Math.max(b.sunColor.x,1e-4)),O.intensity=Math.PI*Math.max(b.sunColor.x,1e-4),s.shadowMap.needsUpdate=!0,B=!1,R.userData.backdrop.material.uniforms.uSun.value.copy(b.sunDir),R.userData.backdrop.material.uniforms.uK.value=U>.5?1:(W.bk??2.2)*Math.max(.6,Math.min(1.4,b.sunColor.x))}let H=(e,t)=>{Object.assign(b.params,{elevation:e,azimuth:t}),V()},U=0,Ze=1,Qe=0,W=i.day,$e=1e9,et=1e9,tt=C.uAbsorption.value.clone(),nt=C.uFoamTint?.value.clone(),rt=C.uGlint?.value,it=(e=!1)=>{W=t.autoTime===!1?i[t.time]||i.day:n(.08+_t/360),U=W.night,Ze=W.exp,b.params.sunIntensity=W.sun;let r=R.userData.backdrop.material.uniforms;r.uTop.value.setRGB(...W.top),r.uHor.value.setRGB(...W.hor),r.uLow.value.setRGB(...W.low),r.uRose.value.setRGB(...W.rose||W.hor),r.uWarm.value=W.warm||0,r.uGlow.value.setRGB(...W.hor).lerp(new D(1,.5,.3),.4).multiplyScalar(1-U*.7),C.uScatterColor.value.set(...W.deep),C.uAbsorption.value.copy(tt).multiplyScalar(W.absK),nt&&C.uFoamTint.value.set(...W.foam),rt!==void 0&&typeof rt==`number`&&(C.uGlint.value=rt*(.6+W.glint*.6)),E.uCausticStrength.value=de*W.caus*(a.caustics?1:.5),N.params.bloomStrength=W.bloom,N.params.saturation=W.sat??1.3,N.params.contrast=W.con??1.12,e||Math.abs(W.el-$e)>.25||Math.abs(W.az-et)>.5?($e=W.el,et=W.az,H(W.el,W.az)):at()},at=()=>{R.userData.backdrop.material.uniforms.uK.value=U>.5?1:(W.bk??2.2)*Math.max(.6,Math.min(1.4,b.sunColor.x))},ot=e=>{let t=P.degToRad(e),n=100;for(;n<800&&j(Math.cos(t)*n,Math.sin(t)*n)>0;)n+=2;return new I(Math.cos(t)*n,Math.sin(t)*n)},st=()=>Math.atan2(b.sunDir.z,b.sunDir.x),ct={"Golden hour":()=>{let e=st(),t=ot(P.radToDeg(e)+18);h.position.set(t.x+Math.cos(e)*120,5,t.y+Math.sin(e)*120),g.target.set(t.x+Math.cos(e)*400,0,t.y+Math.sin(e)*400)},Breakers:()=>{let e=st()+1.9,t=ot(P.radToDeg(e));h.position.set(t.x+Math.cos(e)*35+Math.sin(e)*40,3.2,t.y+Math.sin(e)*35-Math.cos(e)*40),g.target.set(t.x-Math.sin(e)*30,0,t.y+Math.cos(e)*30)},Lagoon:()=>{let e=st()+Math.PI,t=ot(P.radToDeg(e));h.position.set(t.x*.86,28,t.y*.86),g.target.set(t.x*1.25,0,t.y*1.25)},"Open ocean":()=>{let e=st()+.5;h.position.set(Math.cos(e)*1500,9,Math.sin(e)*1500),g.target.set(Math.cos(e)*2400,0,Math.sin(e)*2400+600)},Aerial:()=>{h.position.set(900,420,900),g.target.set(0,0,0)},Underwater:()=>{let e=st()+Math.PI+.3,t=200;for(;t<1e3&&j(Math.cos(e)*t,Math.sin(e)*t)>-9;)t+=2;let n=Math.cos(e)*t,r=Math.sin(e)*t;h.position.set(n,-3.2,r),g.target.set(n-Math.cos(e)*25,-1.8,r-Math.sin(e)*25)}},lt=null,G={yaw:.6,zoom:1,zoomT:1,tiltX:0,tiltY:0,chase:t.dioView===`chase`};function dt(e){lt=e;let n=e===`diorama`;if(se.setDiorama(n?ea:0,n?a.grid:0),E.uClipR.value=n?ea:0,C.uOptics.value.w=n?0:ce,E.uFogDensity&&(E.uFogDensity.value=n?0:ue),b.background.visible=!n,R.visible=n,Pe.root.visible=!0,g.enabled=!n,g.autoRotate=!n&&!r,Object.assign(N.params,je,n?{saturation:1.45,contrast:1.1,keyValue:Math.max(je.keyValue??.18,.2)}:{saturation:1.15}),h.fov=n?35:50,h.near=n?5:.5,h.updateProjectionMatrix(),n)it(!0);else{let e=ct[t.view]?t.view:`Golden hour`;it(!0),ct[e](),g.update()}s.shadowMap.needsUpdate=!0}let q={pos:new S(1400,900,1400),tgt:new S(0,-55,0),init:!1,view:t.camView||`overview`,tourT:0,tourI:0},J=new S,ft=new S,pt=[`overview`,`follow`,`low`,`island`,`follow`,`underwater`];function mt(e,n){let r=Math.sin(L.psi),i=Math.cos(L.psi),a=L.x,o=L.y,s=L.z;if(e===`follow`)return J.set(a-r*230+i*110,o+75,s-i*230-r*110),ft.set(a+r*40,o+8,s+i*40),J.y=Math.max(J.y,25),2.3;if(e===`low`){let e=Math.atan2(s,a)+.35,t=Math.hypot(a,s)+90;return J.set(Math.cos(e)*t,9,Math.sin(e)*t),ft.set(a,o+6,s),3.5}if(e===`island`){let e=G.yaw*.7+.8;return J.set(Math.cos(e)*560,150,Math.sin(e)*560),ft.set(0,25,0),5}if(e===`underwater`){let e=Math.atan2(s,a)+.25,t=Math.min(690,Math.hypot(a,s)+60);return J.set(Math.cos(e)*t,-16,Math.sin(e)*t),ft.set(Math.cos(e)*(t-260),-24,Math.sin(e)*(t-260)),3}let c=ea*1.25/Math.tan(P.degToRad(h.fov/2)),l=Math.max(c,c/Math.min(1,h.aspect))*.82*G.zoom*(t.glass===`cube`?1.3:1),u=Math.min(1.35,Math.max(.12,.58+G.tiltY*.12+G.pitch)),d=G.yaw+G.tiltX*.25;return J.set(Math.cos(d)*Math.cos(u)*l,Math.sin(u)*l-40,Math.sin(d)*Math.cos(u)*l),ft.set(0,-55,0),9}function ht(e){if(G.pitch=G.pitch||0,G.shot){let e=G.shot;h.position.set(e.p[0],e.p[1],e.p[2]),h.lookAt(e.t[0],e.t[1],e.t[2]);return}(G.idle=(G.idle||0)+e)>6&&(G.yaw+=e*.025);let t=q.view,n;t===`tour`?(q.tourT+=e,q.tourT>13&&(q.tourT=0,q.tourI=(q.tourI+1)%pt.length),t=pt[q.tourI],n=mt(t,e),n=Math.min(n,2)):n=mt(t,e),(!q.init||G.snap)&&(q.pos.copy(J),q.tgt.copy(ft),q.init=!0,G.snap=!1);let r=1-Math.exp(-e*n);q.pos.lerp(J,r),q.tgt.lerp(ft,r),h.position.copy(q.pos),h.lookAt(q.tgt);let i=Math.min(5,Math.max(.5,q.pos.distanceTo(q.tgt)*.006));Math.abs(h.near-i)>.05&&(h.near=i,h.updateProjectionMatrix())}let gt=e=>{o.view?.(e),q.view=e,q.tourT=0,q.tourI=0,G.idle=0},_t=0,vt=null;new S;let yt=new S,bt=new S,Ct=!1;function wt(e){_t+=e,B&&V(),t.autoTime!==!1&&(Qe+=e)>.5&&(Qe=0,it()),Le.update(W.lights??U,_t),Be.update(e,_t,W.lights??U,1/Math.max(.25,Ze));{let e=b.sunDir;if(lt===`diorama`&&!G.chase){h.updateMatrixWorld();let t=h.matrixWorld.elements;e=yt.set(-t[8],-t[9],-t[10]).addScaledVector(bt.set(t[4],t[5],t[6]),.2).addScaledVector(bt.set(t[0],t[1],t[2]),.08).normalize()}Re.update(U,e,Ze,_t,s.getPixelRatio(),+(lt===`diorama`))}if(qe?.update(b.sunDir,U),G.zoom+=(G.zoomT-G.zoom)*Math.min(1,e*5),Pe.setNight?.(U,_t),ge.resultCount>4){ve=ge.result[0];let e=ge.result;for(let t=0;t<4;t++)F.hull[t]=e[(t+1)*4];let t=F.hull;F.h=(t[0]+t[1]+t[2]+t[3])/4,L.wavePitch=Math.atan2(t[0]-t[1],1.8*ta)*.9,L.waveRoll=Math.atan2(t[2]-t[3],2.4*ta)*.9}else ge.resultCount>0&&(ve=ge.result[0]);if(k.ingest(ge,5),k.step(e),L.step(e),Pe.update(L,e,_t,F.h),He.update(L,e,F.h,ta,3.2*(1-.6*U)/Math.max(.3,Ze)),Ue.update(L,e,F.h,U),Ct)return;if(We.update(_t,e,L.x,L.z),t.manual&&o.energy?.(L.energy,L.boosting),vt?.update(L,U,e),lt===`diorama`)ht(e);else{g.update();let e=j(h.position.x,h.position.z)+.8;h.position.y<e&&(h.position.y=e),(G.tiltX||G.tiltY)&&(h.rotateY(-G.tiltX*.06),h.rotateX(G.tiltY*.04))}oe.update(s,Me,Ge,b.sunDir);for(let e=0;e<8;e++){let t=k.impacts[e],n=t?k.time-t.t:1e9;C.uImpact.value[e].set(t?.x??0,t?.z??0,n,n<30?t.amp:0),C.uImpactSize.value[e]=t?.size??1}re.update(e),(a.caustics||(_t*10|0)%3==0)&&ie.update(b.sunDir),se.update(h,_t%3600),ke.update();let n=k.collectPoints([h.position,...Ke()]);ge.submit(n,k.count,k.layout,_t);let r=h.position.y,i=r<ve-.3,c=r<ve+1.2;C.uCamSide.value=r>ve+.5?-1:+(r<ve-.5),Ae.update(h,z.height,c),Ce+=((i?.55:1)-Ce)*Math.min(1,e*3),N.params.exposure=Ce*Ze*(lt===`diorama`?1.05:1),N.params.droplets=xe&&!i?1:i?0:Math.max(0,N.params.droplets-e/5),xe=i,p.reflections&&!i?(we.render(s,T,h),C.uReflection.value=we.target.texture):C.uReflection.value=Te,s.setRenderTarget(z),s.setClearColor(0,1),s.clear(!0,!0,!1),s.render(T,h),C.uShadowMap.value=O.shadow.map.depthTexture,z.resolveDepthBuffer=c,s.render(M,h),z.resolveDepthBuffer=!0;let l=z.texture;c&&(l=_e.render(s,z,r<ve-.8)),N.render(l,e),o.state(L.label())}let Et=s.getContext();function Dt(){if(u)return!0;let e=new Uint8Array(36),t=0;s.setRenderTarget(null);for(let t=0;t<9;t++)Et.readPixels((t%3+.5)/3*Et.drawingBufferWidth|0,((t/3|0)+.5)/3*Et.drawingBufferHeight|0,1,1,Et.RGBA,Et.UNSIGNED_BYTE,e.subarray(t*4));for(let n=0;n<e.length;n+=4)t+=e[n]+e[n+1]+e[n+2];return t<54}let Ot=!1,kt=performance.now(),At=0,jt=0,Mt=0,Nt=0,Pt=0,Ft=()=>1e3/(e?30:a.fps);function It(e){if(Ot||(requestAnimationFrame(It),e-At<Ft()-3))return;let t=Math.min((e-kt)/1e3,.1);if(kt=e,At=e,wt(t),jt++,(jt===25||jt===90)&&Dt()&&(Pt++,(Pt>=2||u)&&o.fallback(`render check failed`)),Mt+=t,Nt++,Mt>4){let e=Nt/Mt;Mt=0,Nt=0,e<Math.min(24,a.fps*.75)&&p.resolution>.7&&(p.resolution=Math.max(.7,p.resolution-.1),Ye())}}function Rt(e){e!==Ot&&(Ot=e,e||(kt=performance.now(),requestAnimationFrame(It)))}if(document.addEventListener(`visibilitychange`,()=>Rt(document.hidden)),Ye(),V(),dt(e?t.wallMode:t.mode),u)return o.fallback(`shader`),null;let zt={flight:L,plane:Pe,camera:h,sky:b,post:N,surface:se,renderer:s,views:ct,quality:p,dcam:G,flight:L,taxi:L,wake:He,pathFX:Ue,marine:We,isle:Le,KEYS:i,tapAt:(e,t)=>{let n=new I(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),r=new he;r.setFromCamera(n,h);let i=new S;return r.ray.intersectPlane(new Ne(new S(0,1,0),-F.h),i)?zt.goTo(i.x,i.z):`none`},goTo:(e,t)=>{if(Math.hypot(e,t)>780)return`none`;let n=L.goTo(e,t);if(n!==`none`&&L.target){let e=L.target;Ue.ping(e.x,e.z,F.h),k.impacts.unshift({x:e.x,z:e.z,t:k.time,amp:.12,size:12}),k.impacts.length=Math.min(k.impacts.length,8)}return o.toast?.(n===`land`?`That is land: heading to the nearest water`:n===`none`?`No water route there`:``),n},land:()=>L.home(),home:()=>L.home(),boost:e=>L.boost(e),drag:(e,t)=>{lt===`diorama`&&(q.view!==`overview`&&(q.view=`overview`,o.view?.(`overview`)),G.yaw+=e*.006*y*2,G.pitch=Math.min(.7,Math.max(-.42,(G.pitch||0)+t*.004*y*2)),G.idle=0)},swipe:(e,t)=>zt.drag(e*60,t*60),stick:(e,t)=>{if(Math.hypot(e,t)<.2)return;h.updateMatrixWorld();let n=h.matrixWorld.elements,r=-n[8],i=-n[10],a=Math.hypot(r,i)||1;r/=a,i/=a;let o=r*-t+-i*-e*-1,s=i*-t+r*-e*-1;L.steer(Math.atan2(o,s),Math.min(1,Math.hypot(e,t)))},climb:(e,t)=>{G.yaw+=e*t*.8,G.idle=0},setTimeKey:(e,n=!1)=>{t.autoTime=n,e&&(t.time=e),it(!0)},setShotCam:e=>{G.shot=e},getKey:()=>W,water:()=>F.h,elapsedSet:e=>{_t=e,it(!0)},zoom:e=>{lt===`diorama`&&(G.zoomT=Math.min(1.8,Math.max(.35,G.zoomT*e**(.7*y))))},tilt:(e,t)=>{let n=e=>Math.abs(e)<.12?0:e-Math.sign(e)*.12,r=.06*y;G.tiltX+=(n(e)-G.tiltX)*r,G.tiltY+=(n(t)-G.tiltY)*r},setTouch:e=>{y=v(e)},setTraffic:e=>Be.setEnabled(e),setGlass:e=>{qe?.set(e)},setMode:e=>dt(e),getMode:()=>lt,setTime:()=>{it(!0)},setView:e=>{lt!==`diorama`&&(ct[e](),g.update())},setColour:e=>Pe.setColour(e),setTaxi:()=>{},setAuto:e=>{L.autoFly=e},setAudio:e=>{vt=e},setChase:e=>{G.chase=e},setCamView:gt,getCamView:()=>q.view,resetCam:()=>{G.yaw=.6,G.pitch=0,G.zoomT=1,gt(`overview`),o.view?.(`overview`)},tap:()=>L.tap?.(),pause:Rt,simOnly:e=>{Ct=!!e},step:(e=1,t=1/30)=>{for(let n=0;n<e;n++)wt(t)},broken:Dt,start:()=>{r||requestAnimationFrame(It)}};return zt}export{na as startEngine};