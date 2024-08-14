export default function maxproduct(list: any) {
    let result = 0;
    const n = list.length;
    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++) {
            if (list[i] * list[j] > result) { 
                result = list[i] * list[j];
            }     
        }
    }
    console.log(result)
};

export function maxProductFast(list: any) {
    let max_index_1 = -1;
    let result = 0;
    const n = list.length;
    for (let i = 0; i < n; i++) {
        if (list[i] > list[max_index_1]) {
            max_index_1 = i
        }
    }
    let max_index_2 = -1;
    for (let j = 0; j < n; j++) {
        if ((list[j] !== list[max_index_1]) || list[j] > list[max_index_2]) {
            max_index_2 = j
        }
    }
    console.log(list[max_index_1] * list[max_index_2])
}