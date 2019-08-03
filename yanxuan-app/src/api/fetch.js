import axios from 'axios'
import {Toast} from 'vant'

export function fetchGet(url,params = {}) {
    return new Promise((resolve,reject) => {
        axios.get(url,{
            params:params,
            headers:{
            },
            //baseUrl:'http://localhost:8080'
        }).then(response=>{
            if(response.status == 200 && response.data.status == 0){
                //
                resolve(response.data.data);

                Toast({
                    message:'请求错误',
                    duration:1000
                })
            }else {
                Toast({
                    message:'请求错误',
                    duration:1000
                })
            }
        }).catch(error=>{
            Toast({
                message:'请求失败',
                duration:1000
            })
        })
    })
}

export function fetchPost(url,params={}) {
    return new Promise((resolve,reject) => {
        axios.post(url,params).then(response=>{
            if(response.status == 200 && response.data.status == 0){
                //后台数据可以使用
                resolve(response.data.data);
            }else {
                //后台数据无效
                Toast({
                    message:'请求错误',
                    duration:1000
                });                
            }
        }).catch(error=>{
            Toast('请求失败');
        })
    })
}