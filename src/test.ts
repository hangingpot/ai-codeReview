//帮我写一段斐波那契函数
function fib(n: number): number {
    if (n === 0) {
        return 0; 
    } else if (n === 1) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
    if(n<0){
        
}
console.log(fib(10)); // 55
console.log(fib(20)); // 6765