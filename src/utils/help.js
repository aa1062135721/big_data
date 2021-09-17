let toThousands = (num) => { // 格式化数字， 每隔三位添加一个逗号
    let result = '';
    num = (num || 0).toString();
    while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
    }
    if (num) { result = num + result; }
    return result;
}
export {
    toThousands
}