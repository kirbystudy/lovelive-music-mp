// components/musicican-banner/index.ts
Component({

    options: {
        styleIsolation: 'isolated'
    },

    /**
     * 组件的属性列表
     */
    properties: {
        title: {
            type: String,
            default: ''
        },
        list: {
            type: Array,
            default: null

        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        onClick(e:any) {
            console.log(e)
        }
    }
})
