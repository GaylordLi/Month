import axios from 'axios'
export function GetShoplist() {
    return axios.get("/list")
}