<template>
    <header class="header fixed-top">
        <nav>
            <router-link to="/" class="logo">
                <img src="~img/logo_black.png" alt="logo"/>
            </router-link>
            <!-- Sidebar toggle button-->
            <div class="float-left">
                <a href="javascript:void(0)" class="sidebar-toggle" @click="toggle_menu">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
            <div class="navbar-right">
                <!--drop downs-->
                <div>
                    <!--<div class="dropdown hidden-xs-down btn-group fullscreen" v-if="fullscreen">-->
                        <!--<a href="javascript:void(0)" @click="fullscreen">-->
                            <!--<i class="fa fa-arrows-alt"></i>-->
                        <!--</a>-->
                    <!--</div>-->
                    <!--<b-dropdown class="notifications-menu bell_bg" right link>-->
                        <!--<span slot="text">-->
                            <!--<i class="fa fa-bell-o noti-icon"></i>-->
                            <!--<div class="notifications_badge_top">-->
                                <!--<span class="badge badge-danger text-white">4-->
                                <!--</span>-->
                            <!--</div>-->
                        <!--</span>-->
                        <!--<b-dropdown-item class="dropdownheader socio-tabs1" exact>-->
                            <!--<b-tabs>-->
                                <!--&lt;!&ndash;<b-tab title="Notifications" class="tabs_cont" active>&ndash;&gt;-->
                                    <!--&lt;!&ndash;<b-dropdown-item exact>&ndash;&gt;-->
                                        <!--&lt;!&ndash;<div class="row">&ndash;&gt;-->
                                            <!--&lt;!&ndash;<div class="col-2 mt-2 ml-2">&ndash;&gt;-->
                                                <!--&lt;!&ndash;<img class="rounded-circle" src="~img/authors/avatar1.jpg">&ndash;&gt;-->
                                            <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                            <!--&lt;!&ndash;<div class="col-9 mt-2">&ndash;&gt;-->
                                                <!--&lt;!&ndash;<p> &nbsp;Lorem ipsum dolor sit amet, elit.&ndash;&gt;-->
                                                    <!--&lt;!&ndash;<br>&ndash;&gt;-->
                                                    <!--&lt;!&ndash;<small class="ml-1 text-info">Today</small>&ndash;&gt;-->
                                                <!--&lt;!&ndash;</p>&ndash;&gt;-->
                                            <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                        <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                    <!--&lt;!&ndash;</b-dropdown-item>&ndash;&gt;-->
                                    <!--&lt;!&ndash;<b-dropdown-item exact>&ndash;&gt;-->
                                        <!--&lt;!&ndash;<div class="row">&ndash;&gt;-->
                                            <!--&lt;!&ndash;<div class="col-2 mt-2 ml-2">&ndash;&gt;-->
                                                <!--&lt;!&ndash;<img class="rounded-circle" src="~img/authors/avatar5.jpg">&ndash;&gt;-->
                                            <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                            <!--&lt;!&ndash;<div class="col-9 mt-2">&ndash;&gt;-->
                                                <!--&lt;!&ndash;<p> &nbsp;Lorem ipsum dolor sit amet, elit.&ndash;&gt;-->
                                                    <!--&lt;!&ndash;<br>&ndash;&gt;-->
                                                    <!--&lt;!&ndash;<small class="ml-1 text-muted">week ago</small>&ndash;&gt;-->
                                                <!--&lt;!&ndash;</p>&ndash;&gt;-->
                                            <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                        <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                    <!--&lt;!&ndash;</b-dropdown-item>&ndash;&gt;-->
                                    <!--&lt;!&ndash;<b-dropdown-item exact>&ndash;&gt;-->
                                        <!--&lt;!&ndash;<div class="row">&ndash;&gt;-->
                                            <!--&lt;!&ndash;<div class="col-2 mt-2 ml-2">&ndash;&gt;-->
                                                <!--&lt;!&ndash;<img class="rounded-circle" src="~img/authors/avatar3.jpg">&ndash;&gt;-->
                                            <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                            <!--&lt;!&ndash;<div class="col-9 mt-2">&ndash;&gt;-->
                                                <!--&lt;!&ndash;<p> &nbsp;Lorem ipsum dolor sit amet, elit.&ndash;&gt;-->
                                                    <!--&lt;!&ndash;<br>&ndash;&gt;-->
                                                    <!--&lt;!&ndash;<small class="ml-1 text-muted">month ago</small>&ndash;&gt;-->
                                                <!--&lt;!&ndash;</p>&ndash;&gt;-->
                                            <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                        <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                    <!--&lt;!&ndash;</b-dropdown-item>&ndash;&gt;-->
                                    <!--&lt;!&ndash;<b-dropdown-item exact class="mt-2 notifications_data">&ndash;&gt;-->
                                        <!--&lt;!&ndash;<div class="row">&ndash;&gt;-->
                                            <!--&lt;!&ndash;<div class="col-2 mt-2 ml-2">&ndash;&gt;-->
                                                <!--&lt;!&ndash;<img class="rounded-circle" src="~img/authors/avatar3.jpg">&ndash;&gt;-->
                                            <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                            <!--&lt;!&ndash;<div class="col-9 mt-2">&ndash;&gt;-->
                                                <!--&lt;!&ndash;<p> &nbsp;Lorem ipsum dolor sit amet, elit.&ndash;&gt;-->
                                                    <!--&lt;!&ndash;<br>&ndash;&gt;-->
                                                    <!--&lt;!&ndash;<small class="ml-1 text-muted">2 months ago</small>&ndash;&gt;-->
                                                <!--&lt;!&ndash;</p>&ndash;&gt;-->
                                            <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                        <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                    <!--&lt;!&ndash;</b-dropdown-item>&ndash;&gt;-->
                                    <!--&lt;!&ndash;<b-dropdown-item class="dropdown-footer " exact>&ndash;&gt;-->
                                        <!--&lt;!&ndash;<div>&ndash;&gt;-->
                                            <!--&lt;!&ndash;<strong>View all</strong>&ndash;&gt;-->
                                        <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                    <!--&lt;!&ndash;</b-dropdown-item>&ndash;&gt;-->
                                <!--&lt;!&ndash;</b-tab>&ndash;&gt;-->
                                <!--<b-tab title="Events" class="event_date">-->
                                    <!--<b-dropdown-item exact class="notifications_data">-->
                                        <!--<div class="noti_item">-->
                                            <!--<div class="row">-->
                                                <!--<div class="col-2   ml-3">-->
                                                    <!--<i class="fa fa-calendar text-info noti_msg"></i>-->
                                                <!--</div>-->
                                                <!--<div class="col-9 mt-1">-->
                                                    <!--<span>New Lorem Event from john.</span>-->
                                                    <!--<br>-->
                                                    <!--<span class="text-muted">Apr 29th 2017</span>-->
                                                <!--</div>-->
                                            <!--</div>-->
                                        <!--</div>-->
                                    <!--</b-dropdown-item>-->
                                    <!--<b-dropdown-item exact class="notifications_data">-->
                                        <!--<div class="row">-->
                                            <!--<div class="col-2 ml-3">-->
                                                <!--<i class="fa fa-calendar text-info noti_msg"></i>-->
                                            <!--</div>-->
                                            <!--<div class="col-9 mt-1">-->
                                                <!--<span>New Lorem Event from john.</span>-->
                                                <!--<br>-->
                                                <!--<span class="text-muted">Apr 29th 2017</span>-->
                                            <!--</div>-->
                                        <!--</div>-->
                                    <!--</b-dropdown-item>-->
                                    <!--<b-dropdown-item exact class="notifications_data">-->
                                        <!--<div class="row">-->
                                            <!--<div class="col-2 ml-3 mb-2">-->
                                                <!--<i class="fa fa-calendar text-info noti_msg"></i>-->
                                            <!--</div>-->
                                            <!--<div class="col-9 mt-1">-->
                                                <!--<span>New Lorem Event from john.</span>-->
                                                <!--<br>-->
                                                <!--<span class="text-muted">Apr 29th 2017</span>-->
                                            <!--</div>-->
                                        <!--</div>-->
                                    <!--</b-dropdown-item>-->
                                    <!--<b-dropdown-item class="dropdown-footer">-->
                                        <!--<div>-->
                                            <!--<strong>View all</strong>-->
                                        <!--</div>-->
                                    <!--</b-dropdown-item>-->
                                <!--</b-tab>-->
                                <!--<b-tab title="Updates" disabled>-->
                                <!--</b-tab>-->
                            <!--</b-tabs>-->
                        <!--</b-dropdown-item>-->
                    <!--</b-dropdown>-->

                    <!--rightside toggle-->

                    <!--<div class="dropdown hidden-xs-down btn-group " id="right-side" @click="toggle_right">-->
                        <!--<a href="javascript:void(0)">-->
                            <!--<i class="fa fa-envelope noti-icon"></i>-->
                            <!--<div class="notifications_badge_top">-->
                                <!--<span class="badge badge-success">2-->
                                <!--</span>-->
                            <!--</div>-->
                        <!--</a>-->
                    <!--</div>-->


                    <!--rightside toggle-->

                    <!-- User Account: style can be found in dropdown-->
                    <b-dropdown class="user user-menu bell_bg user_btn" right link>
                        <span slot="text">
                            <img :src="this.$store.state.user.picture" class="rounded-circle" alt="User Image">
                            <!-- User name-->
                            <p class="user_name_max">{{name}}</p>
                        </span>
                        <b-dropdown-item exact class="dropdown_content">
                            <router-link to="/user_profile" exact class="drpodowtext">
                                <i class="fa fa-user-o"></i> Profile
                            </router-link>
                        </b-dropdown-item>
                        <b-dropdown-item exact class="dropdown_content">
                            <router-link to="/edit_user" exact class="drpodowtext">
                                <i class="fa fa-cog"></i> Settings
                            </router-link>
                        </b-dropdown-item>
                        <!--<b-dropdown-item exact class="dropdown_content">-->
                            <!--<router-link to="/lockscreen" exact class="drpodowtext">-->
                                <!--<i class="fa fa-lock"></i> Lock-->
                            <!--</router-link>-->
                        <!--</b-dropdown-item>-->
                        <b-dropdown-item exact class="dropdown_content">
                            <router-link to="/" class="drpodowtext">
                                <div v-on:click="logout"><i class="fa fa-sign-out"></i> Logout</div>
                            </router-link>
                        </b-dropdown-item>
                    </b-dropdown>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
    import screenfull from "screenfull"

    export default {
        name: "vueadmin_header",
        data() {
            return {
                name: "",
                user: {}
            }
        },
        methods: {
            toggle_menu() {
                this.$store.commit('left_menu', "toggle");
            },
            fullscreen() {
                if (screenfull.enabled) {
                    screenfull.toggle();
                }
            },
            toggle_right() {
                this.$store.commit('rightside_bar', "toggle");

            },
            logout() {
                window.localStorage.removeItem('admin_token')
                window.localStorage.removeItem('admin')
                delete axios.defaults.headers.common['Authorization']
                this.$router.push({name: "login"})
            }
        },

        beforeMount: function () {
            this.user = window.localStorage.getItem('user');
            if (this.user != null) {
                this.name = JSON.parse(this.user)['name'];
            }
        },
    }
</script>
<style lang="scss" scoped>
    @import "../css/customvariables";

    .header {
        z-index: 1030;

        nav {
            margin-bottom: 0;
            height: 50px;
            background: $header_color;
            background-size: 100% 100%;
            box-shadow: 0px 0px 10px #ccc;
        }

        .navbar-right {
            float: right;
            margin-right: 15px;
        }

        .logo {
            display: block;
            float: left;
            height: 50px;
            line-height: 41px;
            padding: 3px 10px;
            text-align: center;
            width: 250px;
            background: $header_color;

            img {
                max-height:100%;
                width: auto;
            }
        }

        .navbar-right {
            .dropdown-item {
                padding: 0;
                width: 100%;
                outline: none;
            }

            div.dropdown {
                > a {
                    color: $zoom_color;
                }

                .dropdown-menu > button {
                    padding: 10px 15px;
                }

                &.notifications-menu {
                    height: 50px;

                    .noti-icon {
                        font-size: 18px;
                    }
                }

                > a > i {
                    font-size: 23px;
                }

                > a {
                    display: block;
                    padding: 12px;
                }

                &:hover > a {
                    background-color: #ededed;
                    color: #000;
                }

                > a.padding-user {
                    padding-top: 8px;
                    padding-bottom: 6px;
                }
            }
        }

        nav .sidebar-toggle {
            float: left;
            color: $toggle_color;
            font-size: 19px;
            padding-top: 10px;
        }
    }

    .user_name_max {
        display: inline-block;
        max-width: 180px;
        white-space: nowrap;
        overflow: hidden !important;
        text-overflow: ellipsis;
        margin: 0 0 -4px;
    }

    .noti_msg {
        font-size: 16px;
        padding: 10px;
        border: 1px solid #4f90c1;
        border-radius: 50px;
        margin-top: 10px;
    }

    .user.user-menu > button img {
        width: 35px;
        height: 35px;
    }

    /**** END HEADER RIGHT SIDE DROPDOWNS ****/

    @media screen and (max-width: 767px) {
        .dropdown.open .dropdown-menu {
            position: absolute;
        }
        .navbar-right > li > a {
            padding: 10px 12px;
        }
    }

    /* Fix menu positions on xs screens to appear correctly and fully */

    @media (max-width: 560px) {
        body .header .logo,
        body .header nav {
            width: 100%;
        }
        body .header nav .sidebar-toggle {
            padding-left: 15px;
        }
        nav {
            height: 100px !important;
        }
    }

    .notifications_badge_top {
        margin-top: -28px;
        margin-left: 10px;
        position: absolute;

        span {
            top: 1px;
            left: 2px;
            border-radius: 50%;
            font-size: 9px;
            padding: 0.23em 0.45em;
        }
    }

    .notifications-menu .dropdown-item {
        width: 100%;
        display: block;
    }

    .dropdown-footer {
        padding: 10px !important;
    }
</style>
<style type="text/css" lang="scss">
    @import "../css/customvariables";

    .wrapper {
        margin-top: 50px;
        @media screen and (max-width: 560px) {
            margin-top: 100px;
        }
    }

    .sidebar-toggle {
        margin-left: 10px;
    }

    .bell_bg {
        button.btn-secondary {
            background-color: $bell-color;
            border: none;
            border-radius: 0;
            box-shadow: none !important;

            &:hover {
                background-color: #ededed !important
            }

            &:active {
                color: $toggle_color !important;
            }
        }

        //.btn-secondary:active
        &.show button {
            background-color: $bell-active !important
        }

        &.user_btn .dropdown-toggle {
            padding: 7px 9px;
        }
    }

    .tabs_cont,
    .event_date {
        background-color: #fff !important;
    }

    body.left-hidden aside.right-aside {
        margin-left: 0;
    }

    body.left-hidden .header.fixed-top {
        padding-right: 0 !important;
    }

</style>
