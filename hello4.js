/*
 * @Descripttion:
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-03-27 16:27:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-27 17:20:53
 */

/**
 * 4、options 方法允许将所有这些配置写进一个对象。
 */
let yargs = require("yargs")
  .option("n", {
    alias: "name",
    demandOption: true, // demand 属性已废弃，使用demandOption
    default: "默认张三", // 默认值
    desc: "你的名字？", // describe 属性的缩写
    type: "string", // 参数类型：array、boolean、number、string、count
  })
  .option("b", {
    alias: "bbb",
    boolean: true,
    demandOption: true, // demand 属性已废弃，使用demandOption
    default: "默认true", // 默认值
    desc: "是否OK？", // describe 属性的缩写
    type: "boolean", // 参数类型：array、boolean、number、string、count
  });
let argv = yargs.argv;
// console.log(yargs, argv);

console.log("process.argv原始值：", process.argv);
console.log("yargs.argv值：", argv);

console.log("你好：", argv.name || "无效值", argv.b);

// 执行：node hello4.js --n 李四
// 执行：node hello4.js -n 李四
// 执行：node hello4.js --help
// 执行：node hello4.js -n 老刘 -b
// 执行：node hello4.js -n 老刘 -b false
