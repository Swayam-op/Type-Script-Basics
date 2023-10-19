//Function must have type annotation
function signup(name, gmail, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
signup("Swayam", "swayam@gmail.com");
function isLogin(name, gmail, isPaid) {
    return true;
}
var isLoggedin = isLogin("swayam", "swayam@gmail.com", true);
