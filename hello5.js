/*
 * @Descripttion:
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-03-27 16:27:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-27 17:46:10
 */

/**
 * 5、yargs 模块提供以下方法，生成帮助信息。
    usage：用法格式
    example：提供例子
    help：显示帮助信息
    epilog：出现在帮助信息的结尾
 */
const yargs = require("yargs");

var argv = yargs
  .version("1.0") // 版本
  .option("n", {
    alias: "name",
    demandOption: true,
    default: "法外张三",
    describe: "你的名字？",
    type: "string",
  })
  .usage("教程: node hello5.js -n 李四")
  .example("node hello5.js -n 李四", "hello  李四")
  .help("h")
  .alias("h", "help")
  .epilog("欢迎使用Pingk脚手架").argv; // 结束语

console.log("hello ", argv.n);

// 执行：node hello5.js -h
// 执行：node hello5.js --help
// 执行：node hello5.js -n 李四
// 执行：node hello5.js --name 李四
// 执行：node hello5.js --name=李四
