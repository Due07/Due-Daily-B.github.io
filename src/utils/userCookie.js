import Cookie from 'js-cookie';

/**
 *
 * @param {Obj} info
 */

export function setCookie(info) {
  // Object.entries  将对象转化为数组形式
  const arr = Object.entries(info);
  console.log(arr);
  for (let i = 0; i < arr.length; i += 1) {
    Cookie.set(arr[i][0], arr[i][1]);
  }
  return true;
}

/**
 * 获取用户cookie
 */

export function getUserCookie() {
  return {
    username: Cookie.get('username'),
    appkey: Cookie.get('appkey'),
    role: Cookie.get('role'),
    email: Cookie.get('email'),
  };
}

/**
 * 移除用户的cookie
 */

export function removeUserCookie() {
  Cookie.remove('username');
  Cookie.remove('appkey');
  Cookie.remove('role');
  Cookie.remove('email');
  return true;
}
