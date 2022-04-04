/**
 * Developer - Saige#8157
 * Website: https://helper.solar
 * Github: https://github.com/Saigeie
 * 2022
 */

import { Route } from "../../structures/Route";
import glob from "glob";
import { promisify } from "util";
const globPromise = promisify(glob);

export default new Route({
  name: "/wiki",
  run: async (req, res) => {
    res.redirect(`https://github.com/Saigeie/Helper/Wiki`);
  },
});
