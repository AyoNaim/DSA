export default function maxpairwise(list: any) {
    let result = 0;
    const n = list.length;
    for (let i= 0; i< n; i++) {
        for (let j = i+1; j < n; j++) {
            const product = list[i] * list[j];
            if (product > result) { 
                result = product
            }
        }
    }
    return result
}