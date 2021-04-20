import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";

export default {
  input: "src/index.js", // 入口文件
  output: {
    format: "iife",
    file: "dist/index.js", // 打包后输出文件
    sourcemap: false, // 代码调试 开发环境填true
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
    //加载npm模块
    resolve(),
    commonjs(),
    // 压缩代码
    uglify(),
  ],
};
