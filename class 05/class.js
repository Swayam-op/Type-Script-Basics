"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, name) {
        this.userId = 1;
        this.email = email;
        this.name = name;
    }
    return User;
}());
var user_1 = new User("user1@gmail.com", "user 1");
// ---------------------------------------------public & private --------------------------------------
var Student = /** @class */ (function () {
    function Student(name, rollno) {
        this.name = name;
        this.rollno = rollno;
    }
    return Student;
}());
var student_1 = new Student("ram", 1);
student_1.name = "ram sahoo";
// student_1.rollno -> can not access rollno because of private
// --------------------------------------------Other way of declaring datamembers --------------------
var Teacher = /** @class */ (function () {
    function Teacher(name, age) {
        this.name = name;
        this.age = age;
    }
    return Teacher;
}());
var teacher_1 = new Teacher("suchitra", 35);
console.log(teacher_1);
// -------------------------------------------getter & setter -----------------------------------------
var Course = /** @class */ (function () {
    function Course(course_name, course_price, course_active) {
        this._coursecount = 0;
    }
    Object.defineProperty(Course.prototype, "CourseCount", {
        get: function () {
            return this._coursecount;
        },
        set: function (value) {
            this._coursecount = value;
        },
        enumerable: false,
        configurable: true
    });
    return Course;
}());
var course_1 = new Course("typescript", 1000, true);
course_1.CourseCount = 1;
console.log(course_1.CourseCount);
// -------------------------------------------------------Protected access modifier ---------------------
var Hero = /** @class */ (function () {
    function Hero(name, kills, alive) {
        this.name = name;
        this.kills = kills;
        this.alive = alive;
    }
    return Hero;
}());
var SuperHuman = /** @class */ (function (_super) {
    __extends(SuperHuman, _super);
    function SuperHuman() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SuperHuman.prototype, "immortality", {
        get: function () {
            return this.immortal;
        },
        set: function (value) {
            this.immortal = value;
        },
        enumerable: false,
        configurable: true
    });
    return SuperHuman;
}(Hero));
var shaktiman = new SuperHuman("SHAKTI MAN", 10, true);
shaktiman.immortality = false;
console.log(shaktiman, shaktiman.friend);
console.log("".concat(shaktiman.name, " is ").concat(shaktiman.immortality ? '' : 'not', " immortal"));
