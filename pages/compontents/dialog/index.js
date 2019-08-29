var app = getApp();

Component({
    properties: {
        msg: {
            type: Object
        }
    },
    methods: {
        cancle () {
            this.triggerEvent('dialogCancle');
        },
        confirm () {
            this.triggerEvent('dialogConfirm');
        }
    }
})