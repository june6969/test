/*
 * @Author: september
 * @Date: 2024-05-13 19:29:41
 * @LastEditors: september
 * @LastEditTime: 2024-05-20 14:49:51
 * @FilePath: /test/astro.config.mjs
 * @Description: 
 * 
 */
import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  publicDir: './public', // Ensure this is set to the correct directory
  integrations: [react()]
});