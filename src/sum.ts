export default function sum(luhnarray: any) {
    let add: number = 0;
    let i: number = 0;
    for (i; i< luhnarray.length; i +=1) {
        add += luhnarray[i];
    }
    return add;
}
