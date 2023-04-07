/*
 * @Descripttion:
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-03-27 16:27:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-27 17:00:56
 */

/**
 * 3、yargs 模块还提供3个方法，用来配置命令行参数。
    demand：是否必选
    default：默认值
    describe：提示
 */
let yargs = require("yargs")
  .alias("n", "name")
  .demand(["n"]) // 是否必选
  .default({ n: "默认张三" }) // 默认值
  .describe({ n: "你的名字？" }); // 提示
let argv = yargs.argv;
// console.log(yargs, argv);

console.log("process.argv原始值：", process.argv);
console.log("yargs.argv值：", argv);

console.log("你好：", argv.name || "无效值");

// 执行：node hello3.js --n 23
// 执行：node hello3.js --help
