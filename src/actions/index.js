export function moviesList(){
   
    return {
        type:'MOVIES_LIST',
        payload:[
            {id:1,name:'Doctor Strange'},
            {id:2,name:'End Game'},
            {id:3, name:'ABC'}
        ]
    }
}