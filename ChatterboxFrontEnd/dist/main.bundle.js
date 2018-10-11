webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<main role=\"main\" class=\"container\">\n  <router-outlet></router-outlet>\n \n  <!-- <app-table></app-table> -->\n  \n</main>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        auth.handleAuthentication();
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_profile_profile_service__ = __webpack_require__("./src/app/services/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_user_user_service__ = __webpack_require__("./src/app/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_group_group_service__ = __webpack_require__("./src/app/services/group/group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_post_post_service__ = __webpack_require__("./src/app/services/post/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_callback_callback_component__ = __webpack_require__("./src/app/components/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_table_table_component__ = __webpack_require__("./src/app/components/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_pagination_pagination_component__ = __webpack_require__("./src/app/components/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular_6_datatable__ = __webpack_require__("./node_modules/angular-6-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular_6_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular_6_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_posttable_posttable_component__ = __webpack_require__("./src/app/components/posttable/posttable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_newpost_newpost_component__ = __webpack_require__("./src/app/components/newpost/newpost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_singlegroup_singlegroup_component__ = __webpack_require__("./src/app/components/singlegroup/singlegroup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_callback_callback_component__["a" /* CallbackComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_table_table_component__["a" /* TableComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_pagination_pagination_component__["a" /* PaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_posttable_posttable_component__["a" /* PosttableComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_newpost_newpost_component__["a" /* NewpostComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_singlegroup_singlegroup_component__["a" /* SinglegroupComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_18_angular_6_datatable__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* ROUTES */])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_13__services_post_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_9__services_profile_profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_10__services_user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_11__services_group_group_service__["a" /* GroupService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_callback_callback_component__ = __webpack_require__("./src/app/components/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_table_table_component__ = __webpack_require__("./src/app/components/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_newpost_newpost_component__ = __webpack_require__("./src/app/components/newpost/newpost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_singlegroup_singlegroup_component__ = __webpack_require__("./src/app/components/singlegroup/singlegroup.component.ts");





var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'table', component: __WEBPACK_IMPORTED_MODULE_2__components_table_table_component__["a" /* TableComponent */] },
    { path: 'newpost/:id', component: __WEBPACK_IMPORTED_MODULE_3__components_newpost_newpost_component__["a" /* NewpostComponent */] },
    { path: 'callback', component: __WEBPACK_IMPORTED_MODULE_1__components_callback_callback_component__["a" /* CallbackComponent */] },
    { path: 'groups/:id', component: __WEBPACK_IMPORTED_MODULE_4__components_singlegroup_singlegroup_component__["a" /* SinglegroupComponent */] },
    { path: '**', redirectTo: '' }
];


/***/ }),

/***/ "./src/app/components/callback/callback.component.css":
/***/ (function(module, exports) {

module.exports = ".loading {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #fff;\n}"

/***/ }),

/***/ "./src/app/components/callback/callback.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\">\n  <img src=\"assets/loading.svg\" alt=\"loading\">\n</div>\n"

/***/ }),

/***/ "./src/app/components/callback/callback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// this component displays the loading message

var CallbackComponent = /** @class */ (function () {
    function CallbackComponent() {
    }
    CallbackComponent.prototype.ngOnInit = function () {
    };
    CallbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-callback',
            template: __webpack_require__("./src/app/components/callback/callback.component.html"),
            styles: [__webpack_require__("./src/app/components/callback/callback.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "a {\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 *ngIf=\"auth.isAuthenticated()\">\n  You are logged in!\n  <app-profile></app-profile>\n</h4>\n<h4 *ngIf=\"!auth.isAuthenticated()\">\n  <a (click)=\"auth.login()\">Login</a> and join our community today!\n</h4>\n<app-pagination></app-pagination>\n<app-posttable></app-posttable>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__ = __webpack_require__("./src/app/services/user/user.service.ts");
// this component provides the home screen
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(auth, user) {
        this.auth = auth;
        this.user = user;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
            this.user.addUser({
                id: this.profile.sub,
                nickname: this.profile.nickname,
                groups: []
            }).subscribe(function (user) {
                console.log("ngOnChanges PUT Request is successful ", user);
            }, function (error) {
                console.log("Error", error);
            });
        }
        else {
            this.auth.getProfile(function (err, profile) {
                console.log(profile);
                _this.profile = profile;
                _this.user.addUser({
                    id: _this.profile.sub,
                    nickname: _this.profile.nickname,
                    groups: []
                }).subscribe(function (user) {
                    console.log("ngOnChanges PUT Request is successful ", user);
                }, function (error) {
                    console.log("Error", error);
                });
            });
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__["a" /* UserService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "i {\r\n    color: #fff;\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark mb-4\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <h1>Chatterbox</h1>\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/\">\n          <h4><i class=\"fas fa-home\"></i></h4>\n          <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/table\">\n          <h4>Groups</h4>\n          <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <!-- <li class=\"nav-item\" *ngIf=\"auth.isAuthenticated()\">\n        <a class=\"nav-link\" routerLink=\"/newpost\">\n          <h4>New post</h4>\n        </a>\n      </li> -->\n      <li class=\"nav-item\" *ngIf=\"!auth.isAuthenticated()\" (click)=\"auth.login()\">\n        <a class=\"nav-link\" routerLink=\"/login\">\n          <h4>Login</h4>\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"auth.isAuthenticated()\" (click)=\"auth.logout()\">\n        <a class=\"nav-link\" routerLink=\"/logout\">\n          <h4>Logout</h4>\n        </a>\n      </li>\n    </ul>\n    <form class=\"form-inline mt-2 mt-md-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// this component provides navigation to some parts of the application


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth) {
        this.auth = auth;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/newpost/newpost.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/newpost/newpost.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" #postForm=\"ngForm\">\n  <h4>Group: {{ groupName }}</h4>\n  <div class=\"form-group\">\n    <label for=\"title\">Title</label>\n    <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"title\" id=\"title\" placeholder=\"Enter post title here\" required>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"content\">Message </label>\n    <textarea class=\"form-control\" name=\"content\" [(ngModel)]=\"content\" id=\"content\" rows=\"5\" required></textarea>\n  </div>\n  <div class=\"form-group\">\n    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!postForm.form.valid\">Submit post</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/components/newpost/newpost.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewpostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_post_service__ = __webpack_require__("./src/app/services/post/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_profile_profile_service__ = __webpack_require__("./src/app/services/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
// This component contains the "new post" form
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewpostComponent = /** @class */ (function () {
    function NewpostComponent(auth, route, postService, router, profileService) {
        this.auth = auth;
        this.route = route;
        this.postService = postService;
        this.router = router;
        this.profileService = profileService;
        this.profile = this.profileService.getProfile();
    }
    NewpostComponent.prototype.ngOnInit = function () {
        var name = this.route.snapshot.paramMap.get('id');
        this.groupName = name;
        console.log(this.groupName);
    };
    NewpostComponent.prototype.onSubmit = function () {
        console.log(this.title);
        console.log(this.content);
        // let name = this.route.snapshot.paramMap.get('id');
        // this.groupName = name;
        // console.log(this.groupName);
        this.post = {
            id: 0,
            title: this.title,
            content: this.content,
            imageUrl: null,
            user: {
                id: this.auth.userProfile.id,
                nickname: this.auth.userProfile.nickname,
                groups: []
            },
            group: {
                id: 0,
                name: this.groupName,
                users: []
            },
            votes: [],
            comments: []
        };
        this.postService.newPost(this.groupName, this.post);
        console.log("Onsubmit method called");
        this.router.navigate(['/groups', this.groupName]);
    };
    NewpostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-newpost',
            template: __webpack_require__("./src/app/components/newpost/newpost.component.html"),
            styles: [__webpack_require__("./src/app/components/newpost/newpost.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__services_post_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_profile_profile_service__["a" /* ProfileService */]])
    ], NewpostComponent);
    return NewpostComponent;
}());



/***/ }),

/***/ "./src/app/components/pagination/pagination.component.css":
/***/ (function(module, exports) {

module.exports = ".pagination {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}"

/***/ }),

/***/ "./src/app/components/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pagination-centered\">\n  <nav aria-label=\"Page navigation example\">\n    <ul class=\"pagination\">\n      <li class=\"page-item\">\n        <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\n          <span aria-hidden=\"true\">&laquo;</span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n      </li>\n      <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n      <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n      <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n      <li class=\"page-item\">\n        <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\n          <span aria-hidden=\"true\">&raquo;</span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </li>\n    </ul>\n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/components/pagination/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
// this pagination component has not yet been implemented
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__("./src/app/components/pagination/pagination.component.html"),
            styles: [__webpack_require__("./src/app/components/pagination/pagination.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/components/posttable/posttable.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/posttable/posttable.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"well\" *ngFor=\"let post of posts\">\n    <div class=\"media\">\n    <a class=\"pull-left\" href=\"#\">\n      <img class=\"media-object\" src=\"http://placekitten.com/150/150\">\n    </a>\n    <div class=\"media-body\">\n      <h4 class=\"media-heading\">{{ post.title }}</h4>\n        <p class=\"text-right\">By {{ post.user.nickname }}</p>\n        <p>{{ post.content }}</p>\n        <ul class=\"list-inline list-unstyled\">\n          <span><i class=\"glyphicon glyphicon-comment\"></i> {{post.comments.length}} comment(s)</span>\n          <li>|</li>\n          <li>\n             <span class=\"glyphicon glyphicon-thumbs-up\"></span>\n              {{ post.votes.length }}\n    </ul>\n     </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/posttable/posttable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PosttableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_post_service__ = __webpack_require__("./src/app/services/post/post.service.ts");
// this component provides a list of posts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PosttableComponent = /** @class */ (function () {
    function PosttableComponent(postService) {
        this.postService = postService;
        this.posts = [];
    }
    PosttableComponent.prototype.ngOnInit = function () {
        //   this
        //   .postService
        //   .getPostsByGroup()
        //   .subscribe((data) => {
        //     this.posts = data;
        // });
    };
    PosttableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-posttable',
            template: __webpack_require__("./src/app/components/posttable/posttable.component.html"),
            styles: [__webpack_require__("./src/app/components/posttable/posttable.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_post_post_service__["a" /* PostService */]])
    ], PosttableComponent);
    return PosttableComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = " <p>Welcome, {{profile.given_name}}.</p>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
// this component returns the username
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth) {
        this.auth = auth;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
        }
        else {
            this.auth.getProfile(function (err, profile) {
                // console.log(profile);
                _this.profile = profile;
            });
        }
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/singlegroup/singlegroup.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/singlegroup/singlegroup.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>{{ name }}</h3>\n<button type=\"button\" class=\"btn btn-success\" *ngIf=\"auth.isAuthenticated()\" (click)=\"onSubmit()\">Write new post</button>\n<hr>\n<div class=\"well\" *ngFor=\"let post of posts\">\n  <div class=\"media\">\n  <a class=\"pull-left\" href=\"#\">\n    <img class=\"media-object\" src=\"http://placekitten.com/150/150\">\n  </a>\n  <div class=\"media-body\">\n    <h4 class=\"media-heading\">{{ post.title }}</h4>\n      <p class=\"text-right\">By {{ post.user.nickname }}</p>\n      <p>{{ post.content }}</p>\n      <ul class=\"list-inline list-unstyled\">\n        <span><i class=\"glyphicon glyphicon-comment\"></i> {{post.comments.length}} comment(s)</span>\n        <li>|</li>\n        <li>\n           <span class=\"glyphicon glyphicon-thumbs-up\"></span>\n            {{ post.votes.length }}\n  </ul>\n   </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/singlegroup/singlegroup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SinglegroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_post_service__ = __webpack_require__("./src/app/services/post/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
// this component displays all posts for the selected group
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SinglegroupComponent = /** @class */ (function () {
    function SinglegroupComponent(auth, router, route, postService) {
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.postService = postService;
        var name = this.route.snapshot.paramMap.get('id');
        this.name = name;
    }
    SinglegroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getPostsByGroup(this.name).subscribe(function (data) {
            _this.posts = data;
        });
    };
    SinglegroupComponent.prototype.onSubmit = function () {
        this.router.navigate(['/newpost', this.name]);
    };
    SinglegroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-singlegroup',
            template: __webpack_require__("./src/app/components/singlegroup/singlegroup.component.html"),
            styles: [__webpack_require__("./src/app/components/singlegroup/singlegroup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_post_post_service__["a" /* PostService */]])
    ], SinglegroupComponent);
    return SinglegroupComponent;
}());



/***/ }),

/***/ "./src/app/components/table/table.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 *ngIf=\"auth.isAuthenticated()\">\n  You are logged in!\n</h4>\n<h4 *ngIf=\"!auth.isAuthenticated()\">\n  <a (click)=\"auth.login()\">Login</a> and join our community today!\n</h4>\n<app-pagination></app-pagination>\n<table class=\"table table-dark\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Group</th>\n      <th scope=\"col\">Members</th>\n      <th scope=\"col\">Posts</th>\n      <th scope=\"col\">Votes</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let group of groups\">\n      <th scope=\"row\"><a (click)=\"onSubmit(group)\">{{ group.name }}</a></th>\n      <td>{{ group.users.length }}</td>\n      <td>{{ group.posts }}</td>\n      <td>{{ group.votes }}</td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/components/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_group_group_service__ = __webpack_require__("./src/app/services/group/group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
// this component provides a list of groups with links to each group
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TableComponent = /** @class */ (function () {
    function TableComponent(auth, group, router) {
        this.auth = auth;
        this.group = group;
        this.router = router;
        this.groups = [];
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .group
            .getGroups()
            .subscribe(function (data) {
            _this.groups = data;
            console.log(_this.groups);
        });
    };
    TableComponent.prototype.onSubmit = function (group) {
        this.router.navigate(['/groups', group.name]);
    };
    TableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-table',
            template: __webpack_require__("./src/app/components/table/table.component.html"),
            styles: [__webpack_require__("./src/app/components/table/table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_group_group_service__["a" /* GroupService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_auth0_js__ = __webpack_require__("./node_modules/auth0-js/dist/auth0.min.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_service__ = __webpack_require__("./src/app/services/user/user.service.ts");
// src/app/auth/auth.service.ts
// this service is for auth0 authentication
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { filter } from "../../../../node_modules/rxjs/operators";

// import { log } from "util";


window.global = window;
var AuthService = /** @class */ (function () {
    function AuthService(router, http, user) {
        this.router = router;
        this.http = http;
        this.user = user;
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_2_auth0_js__["a" /* WebAuth */]({
            clientID: "BN8OknO8h7QdqNslyAQSJ3p312dsfMj1",
            domain: "project2-jcc.auth0.com",
            responseType: "token id_token",
            redirectUri: "http://localhost:4200",
            scope: "openid profile email read:users user_id id"
        });
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
        console.log(this.isAuthenticated());
        if (this.isAuthenticated()) {
            console.log("running addUser");
            console.log(this.auth0);
            // this.user.addUser({
            //   id: "afej34",
            //   nickname: "Jan",
            //   groups: []
            // });
        }
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = "";
                _this.setSession(authResult);
                _this.router.navigate(["/"]);
            }
            else if (err) {
                _this.router.navigate(["/"]);
                console.log(err);
            }
        });
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the Access Token will expire at
        var expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
        localStorage.setItem("access_token", authResult.accessToken);
        localStorage.setItem("id_token", authResult.idToken);
        localStorage.setItem("expires_at", expiresAt);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // Access Token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem("expires_at") || "{}");
        return new Date().getTime() < expiresAt;
    };
    //...
    AuthService.prototype.getProfile = function (cb) {
        var _this = this;
        var accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
            throw new Error("Access Token must exist to fetch profile");
        }
        var self = this;
        this.auth0.client.userInfo(accessToken, function (err, profile) {
            console.log(profile);
            if (profile) {
                self.userProfile = profile;
                _this.user.addUser({
                    id: profile.sub,
                    nickname: profile.nickname,
                    groups: []
                }).subscribe(function (user) {
                    console.log("PUT Request is successful ", user);
                }, function (error) {
                    console.log("Error", error);
                });
            }
            cb(err, profile);
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/group/group.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// this service returns either a single group or all groups
var GroupService = /** @class */ (function () {
    function GroupService(http) {
        this.http = http;
        this.url = 'http://ec2-54-152-253-227.compute-1.amazonaws.com:8080/project2/api/groups';
    }
    GroupService.prototype.getGroups = function () {
        return this.http.get("" + this.url);
    };
    GroupService.prototype.getSingleGroup = function (groupName) {
        return this.http.get(this.url + "/" + groupName);
    };
    GroupService.prototype.newGroup = function (group) {
        var url2 = 'http://ec2-54-152-253-227.compute-1.amazonaws.com:8080/project2/api/groups';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': '/json',
            'Cache-Control': 'no-cache'
        });
        return this.http.post(url2, group, { headers: headers });
    };
    GroupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GroupService);
    return GroupService;
}());



/***/ }),

/***/ "./src/app/services/post/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
// this service gets posts by group. the newPost function is not yet functional.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
    }
    PostService.prototype.newPost = function (groupName, post) {
        console.log(post);
        var data = JSON.stringify({
            "id": 0,
            "title": post.title,
            "content": post.content,
            "imageUrl": null,
            "user": {
                "id": "ggl-124",
                "nickname": "bob1",
                "groups": []
            },
            "group": {
                "id": 1,
                "name": post.group.name,
                "users": []
            },
            "votes": [],
            "comments": []
        });
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4 && this.status == 200) {
                console.log(this.responseText);
            }
        });
        xhr.open("POST", "http://ec2-54-152-253-227.compute-1.amazonaws.com:8080/project2/api/groups/TheOfficeFanFiction/posts");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.setRequestHeader("Postman-Token", "b04ae0b9-6500-4da4-9985-8f9f97d123c3");
        xhr.send(data);
        // fetch(`http://ec2-54-152-253-227.compute-1.amazonaws.com:8080/project2/api/groups/${groupName}/posts`, {
        //   method: 'POST',
        //   body: JSON.stringify({
        //     "id": post.id,
        //     "title": post.title,
        //     "content": post.content,
        //     "imageUrl": post.imageUrl,
        //     "user": {
        //       "id": post.user.id,
        //       "nickname": post.user.nickname,
        //       "groups": post.user.groups
        //     },
        //     "group": {
        //       "id": post.group.id,
        //       "name": post.group.name,
        //       "users": post.group.users
        //     },
        //     "votes": post.votes,
        //     "comments": post.comments
        //   }),
        //   headers: {
        //     "Content-Type": "application/json",
        //     'Cache-Control': 'no-cache'
        //   },
        // }).then(function (res) { console.log(res) }).then(function (data) { console.log(data) })
    };
    PostService.prototype.getPostsByGroup = function (groupName) {
        var groupUrl = "http://192.168.61.233:8084/p2-mvc/api/groups/" + groupName + "/posts";
        return this.http.get("" + groupUrl);
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/services/profile/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
// this service returns a user profile
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileService = /** @class */ (function () {
    function ProfileService(auth) {
        var _this = this;
        this.auth = auth;
        if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
        }
        else {
            this.auth.getProfile(function (err, profile) {
                console.log(profile);
                _this.profile = profile;
            });
        }
        console.log(this.profile);
    }
    ProfileService.prototype.ngOnInit = function () {
    };
    ProfileService.prototype.getProfile = function () {
        // console.log(this.profile);
        return this.profile;
    };
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
// this service gets the current user, and adds new users to the database
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.url = "http://ec2-54-152-253-227.compute-1.amazonaws.com:8080/project2/api/users";
    }
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.url + "/" + id)
            .toPromise();
    };
    UserService.prototype.addUser = function (user) {
        console.log("running addUser from user.service.ts");
        return this.http.post(this.url, user);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map