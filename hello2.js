/*
 * @Descripttion:
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-03-27 16:27:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-27 16:54:44
 */

/**
 * 2、自定义别名alias
 */
let yargs = require("yargs").alias("n", "name");
let argv = yargs.argv;
// console.log(yargs, argv);

console.log("process.argv原始值：", process.argv);
console.log("yargs.argv值：", argv);

// console.log("hello ", argv, argv.name || "无效值");

// 执行：node hello2.js --n 23
// 执行：node hello2.js --n=23
