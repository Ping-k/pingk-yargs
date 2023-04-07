/*
 * @Descripttion:
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-03-27 16:27:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-28 11:06:33
 */

/**
 * 1、初识yargs
 */
let yargs = require("yargs");
let argv = yargs.argv;
// console.log(yargs, argv);

console.log("process.argv原始值：", process.argv);
console.log("yargs.argv值：", argv);
1
// console.log("hello ", argv, argv.name || "无效值");

// 执行：node hello1.js --name=23
