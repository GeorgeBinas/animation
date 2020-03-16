/**
 * File: slider.js
 * Project: animation
 * Created Date: 15/03/2020 08:48:06 pm
 * @author George Binas
 * -----
 * Copyright (c) 2020
 */

class Slider{
    domObj = null;
    outerWrapper = null;
    innerWrapper = null;

    constructor(domObj){
        this.domObj = domObj;
    }

    getHeight(){
        if(this.domObj){
            return this.domObj.offsetHeight;
        }
        return null;
    }

    getWidth(){
        if(this.domObj){
            return this.domObj.offsetWidth;
        }
        return null;
    }

    wrap(){
        if (this.domObj && this.outerWrapper == null){
            this.outerWrapper = document.createElement('div');
            this.innerWrapper = document.createElement('div');

            this.domObj.parentNode.insertBefore(this.outerWrapper, this.domObj);
            this.outerWrapper.appendChild(this.innerWrapper);
            this.innerWrapper.appendChild(this.domObj);
        }
    }

    unWrap(){
        if(this.outerWrapper){
            this.outerWrapper.parentNode.appendChild(this.domObj);
            this.outerWrapper.remove();
            this.outerWrapper = null;
            this.innerWrapper = null;
        }
    }

    setHideVerticalAttributes(ceremony, duration){
        if (ceremony === '+'){
            ceremony = '';
        }
        if (this.outerWrapper && this.innerWrapper) {
            if (this.outerWrapper.setProperty) {
                this.outerWrapper.setProperty("style", "overflow: hidden;height: " + this.getHeight() + ";padding-top: 0px;padding-bottom: 0px;margin-top: 0px;margin-bottom: 0px;");
                this.innerWrapper.setProperty("style", "margin-top: " + ceremony + this.getHeight() + "px;margin-left: 0px; transition: margin-top " + duration / 1000 + "s cubic-bezier(0.1, 0, 1, 1);");
            } else {
                this.outerWrapper.setAttribute("style", "overflow: hidden;height: " + this.getHeight() + ";padding-top: 0px;padding-bottom: 0px;margin-top: 0px;margin-bottom: 0px;");
                this.innerWrapper.setAttribute("style", "margin-top: " + ceremony + this.getHeight() + "px;margin-left: 0px; transition: margin-top " + duration / 1000 + "s cubic-bezier(0.1, 0, 1, 1);");
                let c = this;
                setTimeout(function (obj) {
                    obj.domObj.setAttribute("style", "visibility: hidden;");
                    obj.unWrap();
                }, duration, c);
            }
        }
    }

    setShowVerticalAttributes(ceremony, duration) {
        if (ceremony === '+') {
            ceremony = '';
        }
        if (this.outerWrapper && this.innerWrapper) {
            if (this.outerWrapper.setProperty) {
                this.outerWrapper.setProperty("style", "overflow: hidden;height: " + this.getHeight() + ";padding-top: 0px;padding-bottom: 0px;margin-top: 0px;margin-bottom: 0px;");
                this.innerWrapper.setProperty("style", "margin-top: " + ceremony + this.getHeight() + "px;margin-left: 0px;");
                this.domObj.setAttribute("style", "visibility: visible;");
                // Because if change the style in inside this function not working we set a timeout function!
                let c = this;
                setTimeout(function (obj) {
                    obj.innerWrapper.setProperty("style", "margin-top: 0px;margin-left: 0px; transition: margin-top " + duration / 1000 + "s cubic-bezier(0.1, 0, 1, 1);");
                    setTimeout(function (d) {
                        d.unWrap();
                    }, duration, obj);
                }, 1, c);
            } else {
                this.outerWrapper.setAttribute("style", "overflow: hidden;height: " + this.getHeight() + ";padding-top: 0px;padding-bottom: 0px;margin-top: 0px;margin-bottom: 0px;");
                this.innerWrapper.setAttribute("style", "margin-top: "  + ceremony + this.getHeight() + "px;margin-left: 0px;");
                this.domObj.setAttribute("style", "visibility: visible;");
                // Because if change the style in inside this function not working we set a timeout function!
                let c = this;
                setTimeout(function (obj) {
                    obj.innerWrapper.setAttribute("style", "margin-top: 0px;margin-left: 0px; transition: margin-top " + duration / 1000 + "s cubic-bezier(0.1, 0, 1, 1);");
                    setTimeout(function (d) {
                        d.unWrap();
                    }, duration, obj);
                }, 1, c);
            }
        }
    }
    
    setHideHorizontalAttributes(ceremony, duration){
        if (ceremony === '+'){
            ceremony = '';
        }
        if (this.outerWrapper && this.innerWrapper) {
            if (this.outerWrapper.setProperty) {
                this.outerWrapper.setProperty("style", "overflow: hidden;height: " + this.getHeight() + ";padding-top: 0px;padding-bottom: 0px;margin-top: 0px;margin-bottom: 0px;");
                this.innerWrapper.setProperty("style","width: " + this.getWidth() + ";margin-left: " + ceremony + this.getWidth() + "px;transition: margin-left " + duration / 1000 + "s cubic-bezier(0.1, 0, 1, 1);");
            } else {
                this.outerWrapper.setAttribute("style", "overflow: hidden;height: " + this.getHeight() + ";padding-top: 0px;padding-bottom: 0px;margin-top: 0px;margin-bottom: 0px;");
                this.innerWrapper.setAttribute("style", "width: " + this.getWidth() + ";margin-left: " + ceremony + this.getWidth() + "px;transition: margin-left " + duration / 1000 + "s cubic-bezier(0.1, 0, 1, 1);");
                let c = this;
                setTimeout(function (obj) {
                    obj.domObj.setAttribute("style", "visibility: hidden;");
                    obj.unWrap();
                }, duration, c);
            
            }
        }
    }

    hideUp(duration) {//Milisecond
        this.wrap();
        this.setHideVerticalAttributes('-', duration);
    }

    hideDown(duration) {//Milisecond
        this.wrap();
        this.setHideVerticalAttributes('+', duration);
    }

    hideLeft(duration) {//Milisecond
        this.wrap();
        this.setHideHorizontalAttributes('-', duration);
    }

    hideRight(duration) {//Milisecond
        this.wrap();
        this.setHideHorizontalAttributes('+', duration);
    }

    showUp(duration){//Milisecond
        this.wrap();
        this.setShowVerticalAttributes('+', duration);
    }

    showDown(duration){//Milisecond
        this.wrap();
        this.setShowVerticalAttributes('-', duration);
    }

    showLeft(duration){//Milisecond
        this.wrap();
        if(this.outerWrapper && this.innerWrapper){
            if (this.outerWrapper.setProperty) {
                // debugger
                this.outerWrapper.setProperty("style", "overflow: hidden;height: " + this.getHeight() + ";padding-top: 0px;padding-bottom: 0px;margin-top: 0px;margin-bottom: 0px;");
                this.innerWrapper.setProperty("style", "width: " + this.getWidth() + "px;margin-left: -" + this.getWidth() + "px;");
                this.domObj.setProperty("style", "visibility: visible;");
                // Because if change the style in inside this function not working we set a timeout function!
                let c = this;
                setTimeout(function (obj) {
                    obj.innerWrapper.setProperty("style", "width: " + obj.getWidth() + "px;margin-left: 0px; transition: margin-left " + duration / 1000 + "s cubic-bezier(0.1, 0, 1, 1);");
                    setTimeout(function (d) {
                        obj.domObj.setProperty("style", "visibility: visible;");
                        d.unWrap();
                    }, duration, obj);
                }, 1, c);
            } else {
                // debugger
                this.outerWrapper.setAttribute("style", "overflow: hidden;height: " + this.getHeight() + "px;padding-top: 0px;padding-bottom: 0px;margin-top: 0px;margin-bottom: 0px;");
                this.innerWrapper.setAttribute("style", "width: " + this.getWidth() + "px;margin-left: -" + this.getWidth() +"px;");
                this.domObj.setAttribute("style", "visibility: visible;");
                // Because if change the style in inside this function not working we set a timeout function!
                let c = this;
                setTimeout(function(obj){
                    obj.innerWrapper.setAttribute("style", "width: " + obj.getWidth() + "px;margin-left: 0px; transition: margin-left " + duration / 1000 + "s cubic-bezier(0.1, 0, 1, 1);");
                    setTimeout(function (d) {
                        d.unWrap();
                    }, duration, obj);
                }, 1, c);
            }
        }
    }

    //FIXME:
    showRight(duration){//Milisecond
        if(this.outerWrapper && this.innerWrapper){
            if (this.outerWrapper.setProperty) {
                // debugger
                this.outerWrapper.setProperty("style", "overflow: hidden;height: " + this.getHeight() + ";padding-top: 0px;padding-bottom: 0px;margin-top: 0px;margin-bottom: 0px;");
                this.innerWrapper.setProperty("style", "width: " + this.getWidth() + "px;margin-left: -" + this.getWidth() + "px;");
                // Because if change the style in inside this function not working we set a timeout function!
                let c = this;
                setTimeout(function (obj) {
                    obj.innerWrapper.setProperty("style", "width: " + obj.getWidth() + "px;margin-left: 0px; transition: margin-left " + duration / 1000 + "s cubic-bezier(0.1, 0, 1, 1);");
                    setTimeout(function (d) {
                        d.unWrap();
                    }, duration, obj);
                }, 1, c);
            } else {
                // debugger
                this.outerWrapper.setAttribute("style", "overflow: hidden;height: " + this.getHeight() + ";padding-top: 0px;padding-bottom: 0px;margin-top: 0px;margin-bottom: 0px;");
                this.innerWrapper.setAttribute("style", "width: " + this.getWidth() + "px;margin-left: -" + this.getWidth() +"px;");
                // Because if change the style in inside this function not working we set a timeout function!
                let c = this;
                setTimeout(function(obj){
                    obj.innerWrapper.setAttribute("style", "width: " + obj.getWidth() + "px;margin-left: 0px; transition: margin-left " + duration / 1000 + "s cubic-bezier(0.1, 0, 1, 1);");
                    setTimeout(function (d) {
                        d.unWrap();
                    }, duration, obj);
                }, 1, c);
            }
        }
    }

    /** WITH INTERVAL */
    hideDownJs(milisecond){
        this.wrap();
        if (this.outerWrapper && this.innerWrapper) {
            if (this.outerWrapper.setProperty) {
                //TODO:
                //OLD BROWSERS
                // this.outerWrapper.setProperty("style", "overflow: hidden;height: " + this.getHeight() + ";padding-top: 0px;padding-bottom: 0px;margin-top: 0px;margin-bottom: 0px;");
                // this.innerWrapper.setProperty("style", "margin-top: " + ceremony + this.getHeight() + "px;margin-left: 0px; transition: margin-top " + duration / 1000 + "s cubic-bezier(0.1, 0, 1, 1);");
            } else {
                this.outerWrapper.setAttribute("style", "overflow: hidden;height: " + this.getHeight() + ";padding-top: 0px;padding-bottom: 0px;margin-top: 0px;margin-bottom: 0px;");
                                
                let element = this;
                let functionTime = 5;
                let height = this.getHeight();
                let frames = milisecond / functionTime;
                let step = height / frames;
                let currentFrame = 0;

                debugger
                let timer = setInterval((obj) => {
                    //End annimation when
                    if (currentFrame < frames) {
                        let marginTop = 0;
                        if(obj.innerWrapper.style.marginTop !== "" &&  obj.innerWrapper.style.marginTop !== undefined ){
                            marginTop = parseFloat(obj.innerWrapper.style.marginTop);
                        }
                        marginTop += step;
                        obj.innerWrapper.setAttribute("style", "margin-top: " + "" + marginTop + "px;margin-left: 0px;");
                    } else {

                        //the end of the animation. Stop the interval hide actual domObject and unwrap it.
                        obj.domObj.setAttribute("style", "visibility: hidden;");
                        obj.unWrap();
                        clearInterval(timer);
                    }
                    currentFrame++;
                }, functionTime, element);
            }
        }
    }

    showUpJs(milisecond){
        this.wrap();
        if (this.outerWrapper && this.innerWrapper) {
            if (this.outerWrapper.setProperty) {
                //TODO:
                //OLD BROWSERS
                // this.outerWrapper.setProperty("style", "overflow: hidden;height: " + this.getHeight() + ";padding-top: 0px;padding-bottom: 0px;margin-top: 0px;margin-bottom: 0px;");
                // this.innerWrapper.setProperty("style", "margin-top: " + ceremony + this.getHeight() + "px;margin-left: 0px; transition: margin-top " + duration / 1000 + "s cubic-bezier(0.1, 0, 1, 1);");
            } else {
                this.outerWrapper.setAttribute("style", "overflow: hidden;height: " + this.getHeight() + ";padding-top: 0px;padding-bottom: 0px;margin-top: 0px;margin-bottom: 0px;");
                this.innerWrapper.setAttribute("style", "margin-top: " + "" + this.getHeight() + "px;margin-left: 0px;");
                this.domObj.removeAttribute("style", "visibility: vissible;");                 
               
                let element = this;
                let functionTime = 5;
                let height = this.getHeight();
                let frames = milisecond / functionTime;
                let step = height / frames;
                let currentFrame = 0;

                debugger
                let timer = setInterval((obj) => {
                    //End annimation when
                    if (currentFrame < frames) {
                        let marginTop = 0;
                        if(obj.innerWrapper.style.marginTop !== "" &&  obj.innerWrapper.style.marginTop !== undefined ){
                            marginTop = parseFloat(obj.innerWrapper.style.marginTop);
                        }
                        marginTop -= step;
                        obj.innerWrapper.setAttribute("style", "margin-top: " + "" + marginTop + "px;margin-left: 0px;");
                    } else {

                        //the end of the animation. Stop the interval hide actual domObject and unwrap it.
                        // obj.domObj.setAttribute("style", "visibility: hidden;");
                        obj.unWrap();
                        clearInterval(timer);
                    }
                    currentFrame++;
                }, functionTime, element);
            }
        }
    }
}
