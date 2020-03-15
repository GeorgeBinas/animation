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
            }
        }
    }

    setShowVerticalAttributes(ceremony, duration) {
        if (ceremony === '+') {
            ceremony = '';
        }
        if (this.outerWrapper && this.innerWrapper) {
            if (this.outerWrapper.setProperty) {
                this.innerWrapper.setProperty("style", "margin-top: " + ceremony + this.getHeight() + "px;margin-left: 0px;");
                let c = this;
                setTimeout(function (obj) {
                    obj.innerWrapper.setProperty("style", "margin-top: 0px;margin-left: 0px; transition: margin-top " + duration / 1000 + "s cubic-bezier(0.1, 0, 1, 1);");
                    setTimeout(function (d) {
                        d.unWrap();
                    }, duration, obj);
                }, 1, c);
            } else {
                this.innerWrapper.setAttribute("style", "margin-top: "  + ceremony + this.getHeight() + "px;margin-left: 0px;");
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
        this.setShowVerticalAttributes('+', duration);
    }

    showDown(duration){//Milisecond
        this.setShowVerticalAttributes('-', duration);
    }

    showLeft(duration){//Milisecond
        if(this.outerWrapper && this.innerWrapper){
            if (this.outerWrapper.setProperty) {
                this.outerWrapper.setProperty("style", "overflow: hidden;height: " + this.getHeight() + ";padding-top: 0px;padding-bottom: 0px;margin-top: 0px;margin-bottom: 0px;");
                this.innerWrapper.setProperty("style", "width: " + this.getWidth() + "px;margin-left: -" + this.getWidth() + "px;");
                let c = this;
                setTimeout(function (obj) {
                    obj.innerWrapper.setProperty("style", "width: " + obj.getWidth() + "px;margin-left: 0px; transition: margin-left " + duration / 1000 + "s cubic-bezier(0.1, 0, 1, 1);");
                    setTimeout(function (d) {
                        d.unWrap();
                    }, duration, obj);
                }, 1, c);
            } else {
                this.outerWrapper.setAttribute("style", "overflow: hidden;height: " + this.getHeight() + ";padding-top: 0px;padding-bottom: 0px;margin-top: 0px;margin-bottom: 0px;");
                this.innerWrapper.setAttribute("style", "width: " + this.getWidth() + "px;margin-left: -" + this.getWidth() +"px;");
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
