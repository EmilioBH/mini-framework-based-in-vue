class EmvueReactive {
    constructor(options){
        this.origen = options.data()
    }

    mount() {
        document.querySelector('*[e-text]').forEach(el => {
            this.eText(el, this.origen, el.getAttribute('e-text'))
        })
    }

    eText(el, target, name) {
        el.innerText = target[name]
    }

    eModel() {}
}

var Emvue = {
    createApp(options) {
        return new EmvueReactive(options)
    }
}