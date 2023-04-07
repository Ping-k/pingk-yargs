/*
 * @Descripttion:
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-03-27 16:27:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-27 18:01:29
 */

/**
 * 6、子命令
    args 模块还允许通过 command 方法，设置 Git 风格的子命令。
 */
// const yargs = require("yargs");
// var argv = yargs
//   .command("one", "子命令1", function (yargs) {
//     console.log("one");
//   })
//   .command("two", "子命令2", function (yargs) {
//     console.log("two");
//   }).argv;

// console.log("hello ", argv.n);

// 执行：node hello6.js one -n 李四
// 执行：node hello6.js two -n 李四

const yargs = require('yargs');
// let argv = yargs.alias('n', 'name').alias('s', 'save').alias('w', 'width').argv;
// console.log(argv);
// .demandOption(key, msg) //是否必须填写
// .default(key, value, [description]) //设置默认值
// .describe(key, desc) //命令描述信息
// const yargs = require('yargs');
let argv = yargs
  .alias("s", "src")
  .alias("d", "dst")
  .demandOption(["s", "d"], "s 与 d 必须填写")
  .default("s", "a.txt")
  .default("d", "b.txt")
  .describe("s", "源文件")
  .describe("d", "目标文件").argv;
console.log(argv);
