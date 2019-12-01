import { GetShoplist } from '../../api/index'
export default {
    namespace: 'Shop',
    state: {//仓库
        shoplist: [],
        shopcar: [],
        summery: 0,
        count: 0
    },
    reducers: {
        Getlist(state: any, payload: any): object {//获取数据
            return {
                ...state,
                shoplist: payload.result.data.result
            }
        },
        Change(state: any, payload: any): object {//改变编辑状态
            let newarr: any = []
            newarr = state.shopcar
            let allcount = state.summery
            newarr.map((item: any, index: number) => {
                if (item.id == payload.payload.id) {//判断状态来进行总数量，总价以及编辑的状态的修改
                    if (item.is) {
                        allcount = allcount - (item.price * 1)
                        state.count--
                        item.is = 0
                    } else {
                        allcount = allcount + (item.price * 1)
                        state.count++
                        item.is = 1

                    }
                }
            })
            if (state.shopcar.length == 0) {
                state.count = 0;
                allcount = 0
            }
            return {
                ...state,
                summery: allcount,
                count: state.count
            }
        },
        all(state: any, payload: any): object {//全选功能
            let newarr: any = []
            newarr = state.shopcar
            let allcount = 0;
            newarr.map((item: any, index: number) => {
                item.is = 1
                allcount = allcount + (item.price * 1)
            })
            state.count = state.shopcar.length
            return {
                ...state,
                summery: allcount
            }

        },
        cancel(state: any, payload: any): object {//全选功能
            let newarr: any = []
            newarr = state.shopcar
            newarr.map((item: any, index: number) => {
                item.is = 0
            })
            state.count = state.shopcar.length
            return {
                ...state,
                summery: 0,
                count: 0
            }

        },
        del(state: any, payload: any): object {//删除功能
            let newarr: any = []
            let newarr1: any = []
            newarr = state.shopcar

            newarr.map((item: any, index: number) => {
                if (item.is == 0) {

                    newarr1.push(item)
                }
            })
            console.log(newarr)
            return {
                ...state,
                shopcar: newarr1,
                summery: 0,
                count: 0
            }

        },
        AddShopCar(state: any, payload: any): object {//添加购物车
            let newarr = []
            newarr = state.shopcar
            if (newarr.length == 0) {
                newarr.push(payload.payload)
                alert("添加成功1")
            } else {
                let num
                num = newarr.findIndex((item: any, index: number) => {
                    return item.id == payload.payload.id
                })
                if (num == -1) {
                    newarr.push(payload.payload)
                    alert("添加成功2")

                } else if (num && num != -1) {
                    alert("已存在该商品")
                }
            }
            return {
                ...state,
                shopcar: newarr
            }
        }
    },
    effects: {
        *getshoplist(payload: any, { put, call }: any) {//异步操作获取数据
            let result = yield call(GetShoplist)
            yield put({
                type: "Getlist",
                result
            })
        }
    }
};
