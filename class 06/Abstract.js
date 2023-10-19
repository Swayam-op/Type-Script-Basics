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
var TakePhoto = /** @class */ (function () {
    function TakePhoto(cameraMode, frames) {
        this.cameraMode = cameraMode;
        this.frames = frames;
    }
    TakePhoto.prototype.getReelTime = function () {
        return new Date().toTimeString();
    };
    return TakePhoto;
}());
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram(cm, fm) {
        return _super.call(this, cm, fm) || this;
    }
    Instagram.prototype.getPhoto = function () {
        console.log("Here is your picture");
    };
    return Instagram;
}(TakePhoto));
var inst = new Instagram("front", 32);
inst.getReelTime();
console.log(inst);
