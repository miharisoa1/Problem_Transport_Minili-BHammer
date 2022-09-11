/*** resolution avec la methode minili */
export default{

    minili(unitary, avalaible, demand){
        var X = initX(unitary);
        
        for (var i = 0; i < unitary.length; i++) {
            let index = minIndexFind(unitary[i]);
           
            for (var j = 0; j < unitary[i].length; j++){
               if(j==index) {
                if(avalaible[i]<demand[index]){
                    X[i][j] = avalaible[i]
                    avalaible[i] = 0
                    demand[index] -= avalaible[i]
                } else{
                    X[i][j] = demand[i]
                    avalaible[i] -= demand[index]
                    demand[index] = 0
                }
               }
            }
        }
        return X
    },
   
   

}

function  initX(arr){
    var X =[];
    for (var i = 0; i < arr.length; i++) {
        var rowElement = [];
        for (var j = 0; j < arr[i].length; j++) {
            rowElement.push(0);
        }
        X.push(rowElement);
    }
    return X;
}
function  minIndexFind(arr){
    var m = Math.min(...arr);
    var index = arr.indexOf(m)
    return index

}
function compare(a,b){
    var value = Math.min(a,b);
    return value;
} 
