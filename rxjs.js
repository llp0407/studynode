var Rx = require('rxjs')
var Observable = Rx.Observable()  //导入类

const ob = Observable.interval(1000);
ob.take(3).map(n => n * 2).filter(n => n > 2);