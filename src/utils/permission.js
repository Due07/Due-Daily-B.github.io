/**
 * 角色权限菜单栏
 */

const roleRoute = {
  coustomer: [{
    name: 'Product',
  }, {
    name: 'ProductList',
  }, {
    name: 'ProductAdd',

  }, {
    name: 'ProductEdit',

  }],
  admin: [{
    name: 'Product',
  }, {
    name: 'ProductList',
  }, {
    name: 'ProductAdd',

  }, {
    name: 'ProductEdit',

  }, {
    name: 'Category',
  }],
};

/**
 *过滤没有权限的路由
 * @param {String} role
 * @param {Obj} routers
 */
export default function getMenuRoutes(role, routers) {
  // 获取角色能看到的路由
  // console.log(routers);
  const routersName = roleRoute[role].map((item) => item.name);
  const resultRoutes = routers.filter((rou) => {
    const obj = rou;
    if (routersName.indexOf(rou.name) !== -1) {
      const { children } = obj;
      obj.children = children.filter((chil) => routersName.indexOf(chil.name) !== -1);
      return true;
    }
    return false;
  });
    // console.log(resultRoutes);
  return resultRoutes;
}
