export default {
    fillzero(a){
        let array = [];
        for (let i = 0; i < a; i++) {          
        array.push(0)             
         }
         return array;
    },
    fillzero2D(column, row){
        let array = [];
        for (let i = 0; i < row; i++) {
            array.push([])
            for (let j = 0; j < column; j++) {     
            array[i].push(0)   
            }
         }
         return array;
        },
        rowIndex(row) {
            let array = [];
            let c = "A";
            for(let i=0; i < row; i++){
                array.push(c);
                c = String.fromCharCode(c.charCodeAt(0) + 1);
            }
            return  array;
        },
        columnIndex(column){
            let array = [];
            for (let index = 0; index < column ; index++) {
                array.push(index + 1) 
              }
              return array;
        },
        itemSumm(arr){
            let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
        }


}