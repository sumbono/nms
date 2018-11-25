var require = meteorInstall({"lib":{"collections":{"alarm_device.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// lib/collections/alarm_device.js                                                                       //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
alarm_device = new Mongo.Collection('nms_alarm_device');

alarm_device.featured = function () {
  return alarm_device.find();
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"battery_parsed.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// lib/collections/battery_parsed.js                                                                     //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
battery_parsed = new Mongo.Collection("nms_battery_parsed");

battery_parsed.featured = function () {
  return battery_parsed.find();
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"dashboard_temp_graph.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// lib/collections/dashboard_temp_graph.js                                                               //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
dashboard_temp_graph = new Mongo.Collection('nms_dashboard_temp_graph');

dashboard_temp_graph.featured = function () {
  return dashboard_temp_graph.find();
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"dashboard_tx_graph.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// lib/collections/dashboard_tx_graph.js                                                                 //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
dashboard_tx_graph = new Mongo.Collection('nms_dashboard_tx_graph');

dashboard_tx_graph.featured = function () {
  return dashboard_tx_graph.find();
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"list_active_device.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// lib/collections/list_active_device.js                                                                 //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
active_device = new Mongo.Collection('nms_list_active_device');

active_device.featured = function () {
  return active_device.find();
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"list_camera.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// lib/collections/list_camera.js                                                                        //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
// list_camera = new Mongo.Collection('nms_list_camera');
list_camera = new Mongo.Collection('nms_show_camera');

list_camera.featured = function () {
  return list_camera.find({});
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"m_device.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// lib/collections/m_device.js                                                                           //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
m_device = new Mongo.Collection("nms_m_device");

m_device.featured = function () {
  return m_device.find({}, {
    fields: {
      _id: 1,
      name: 1,
      description: 1,
      icon: 1,
      device_category_id: 1,
      position: 1
    }
  });
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"m_device_category.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// lib/collections/m_device_category.js                                                                  //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
m_device_category = new Mongo.Collection("nms_m_device_category");

m_device_category.featured = function () {
  return m_device_category.find({}, {
    fields: {
      _id: 1,
      name: 1
    }
  });
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"m_protocol.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// lib/collections/m_protocol.js                                                                         //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
m_protocol = new Mongo.Collection("nms_m_protocol");

m_protocol.featured = function () {
  return m_protocol.find();
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"m_province.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// lib/collections/m_province.js                                                                         //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
m_province = new Mongo.Collection("nms_m_province");

m_province.featured = function () {
  return m_province.find({}, {
    fields: {
      _id: 1,
      name: 1,
      region_id: 1
    }
  });
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"m_region.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// lib/collections/m_region.js                                                                           //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
m_region = new Mongo.Collection("nms_m_region");

m_region.featured = function () {
  return m_region.find({}, {
    fields: {
      _id: 1,
      name: 1
    }
  });
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"scope.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// lib/collections/scope.js                                                                              //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
scope = new Mongo.Collection("nms_scope");

scope.featured = function () {
  return scope.find({}); // var site = Sites.findOne();
  // return [
  //     Sites.find({}),
  //
  // ]
}; // var featuredSkus = ["honeymoon-mars","johnny-liftoff","one-way-reentry"];
// return Products.find({sku : {$in : featuredSkus}},
//     {fields : {inventory : false, cost : false}}
// )
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"site.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// lib/collections/site.js                                                                               //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
site = new Mongo.Collection("nms_site");

site.featured = function () {
  return site.find({}, {
    fields: {
      _id: 1,
      name: 1,
      region_id: 1,
      site_id: 1,
      status: 1
    },
    sort: {
      name: 1
    }
  }); // var site = Sites.findOne();
  // return [
  //     Sites.find({}),
  //
  // ]
}; // site.completed = function(args){
//     let site_id = new Mongo.ObjectID(args);
//     var data_site = site.find({ _id : new Mongo.ObjectID(args) });
//     // console.log(site.find({ _id : new Mongo.ObjectID(args) }));
//     // var siteData = [];
//     _.each(data_site.fetch(), function(row){
//         // siteData.push(row);
//         let data_site_device = site_device.find({site_id : site_id});
//         // var siteDevData = [];
//         _.each(data_site_device.fetch(), function(rowSite){
//             // siteData["site_device"] = siteDevData.push();
//             // row.push({"site_device" : rowSite});
//             console.log(rowSite);
//         })
//     })
//
//     // return siteData;
// }
//
// site.findOne = function(args){
//     return _.find(site, function(row){
//         return row._id === args._id;
//     })
// }
// var featuredSkus = ["honeymoon-mars","johnny-liftoff","one-way-reentry"];
// return Products.find({sku : {$in : featuredSkus}},
//     {fields : {inventory : false, cost : false}}
// )
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"site_device.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// lib/collections/site_device.js                                                                        //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
site_device = new Mongo.Collection("nms_site_device");

site_device.featured = function (obj) {
  return site_device.find({}, {
    fields: {
      _id: 1,
      dev_id: 1,
      site_id: 1,
      device_category_id: 1,
      device_id: 1,
      title: 1,
      title2: 1
    }
  });
}; // site_device.aggregated = function(args){
//     var d = site_device.aggregate([{
//         $match : {
//             site_id : new Mongo.ObjectID("5b59931c6f97984a0ad8c688") }
//         },{
//         $group : {
//             _id : "$device_category_id" }
//         }]);
//
//     return site_device.aggregate(args);
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"site_device_sensor.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// lib/collections/site_device_sensor.js                                                                 //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
site_device_sensor = new Mongo.Collection("nms_site_device_sensor");

site_device_sensor.featured = function () {
  return site_device_sensor.find({}, {
    fields: {
      _id: 1,
      dev_id: 1,
      protocol_id: 1,
      sensor_name: 1,
      is_show: 1,
      unit: 1,
      description: 1,
      value_min: 1,
      value_max: 1,
      major_min: 1,
      major_max: 1,
      limit_min: 1,
      limit_max: 1,
      sensor_view: 1,
      valueNow: 1,
      persent: 1,
      colour: 1,
      condition: 1
    }
  });
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"site_status_link.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// lib/collections/site_status_link.js                                                                   //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
status_link = new Mongo.Collection("nms_site_status_link");

status_link.featured = function () {
  return status_link.find({}, {
    fields: {
      _id: 1,
      site: 1,
      status: 1
    }
  });
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"sitelog.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// lib/collections/sitelog.js                                                                            //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
sitelog = new Mongo.Collection("nms_sitelog");

sitelog.featured = function () {
  //     aktivasi 20180905
  var sitedev = site_device.find();

  if (sitedev.count() > 0) {
    var data = [];

    _.each(sitedev.fetch(), function (row) {
      data.push(row.dev_id);
    });

    let result = [];

    for (let index = 0; index < data.length; index++) {
      let el = data[index];
      if (!result.includes(el)) result.push(el);
    }

    _.each(result, function (dev_id) {
      // return sitelog.findOne({ dev_id : args.dev_id }, { sort:{ createdOn : -1 } } );
      // var d = sitelog.findOne({ dev_id : dev_id }, { sort: { createdOn : -1 } } );
      var d = sitelog.findOne({
        dev_id: dev_id
      }, {
        sort: {
          _id: -1
        }
      });

      if (typeof d !== 'undefined') {
        console.log(d);
      }
    });
  } //     return sitelog.find();
  //     return sitelog.find({ dev_id : args.dev_id }, { sort:{ createdOn : -1 }, limit : 1 } );


  return sitelog.find({
    dev_id: args.dev_id
  }, {
    sort: {
      _id: -1
    },
    limit: 1
  });
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"users.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// lib/collections/users.js                                                                              //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
// Users = new Mongo.Collection("users");

/*
* Allow
*/
//
// Meteor.users.allow({
//   insert: function(){
//     // Disallow user inserts on the client by default.
//     return false;
//   },
//   update: function(){
//     // Disallow user updates on the client by default.
//     return false;
//   },
//   remove: function(){
//     // Disallow user removes on the client by default.
//     return false;
//   }
// });
//
// /*
// * Deny
// */
//
// Meteor.users.deny({
//   insert: function(){
//     // Deny user inserts on the client by default.
//     return true;
//   },
//   update: function(){
//     // Deny user updates on the client by default.
//     return true;
//   },
//   remove: function(){
//     // Deny user removes on the client by default.
//     return true;
//   }
// });
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"routes":{"hooks.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// lib/routes/hooks.js                                                                                   //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
checkUserLoggedIn = function () {
  if (!Meteor.loggingIn() && !Meteor.user()) {
    Router.go('/login');
  } else {
    this.next();
  }
};

userAuthenticated = function () {
  if (Meteor.loggingIn() && Meteor.user()) {
    Router.go("/");
  } else {
    this.next();
  }
};
/* Run Hooks */


Router.onBeforeAction(checkUserLoggedIn, {
  except: ['login']
});
Router.onBeforeAction(userAuthenticated, {
  only: ['login']
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"routes-authenticated.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// lib/routes/routes-authenticated.js                                                                    //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
PostSubs = new SubsManager();
Router.route("/", function () {
  this.render('dashboardIndex');
  this.render('header', {
    to: 'top'
  });
}, {
  name: "dashboardIndex",
  loadingTemplate: "loading",
  onBeforeAction: function () {
    Session.set('currentRoute', 'dashboardIndex');
    this.next();
  },
  waitOn: function () {
    return [//             Meteor.subscribe("featured-sites"),
    //             Meteor.subscribe("featured-sitesDevices"),
    Meteor.subscribe("featured-activeDevices"), Meteor.subscribe("featured-statusLink"), Meteor.subscribe("featured-alarmDevices")];
  },
  fastRender: true
});
Router.route("/report", function () {
  this.render('reportIndex');
  this.render('header', {
    to: 'top'
  });
  this.render('sidebar', {
    to: 'sidebar-menu'
  });
  this.render('siteIndex', {
    to: 'content'
  });
}, {
  name: "reportIndex",
  loadingTemplate: "loading",
  onBeforeAction: function () {
    Session.set('mySite', 'report');
    Session.set('currentRoute', 'reportIndex');
    this.next();
  },
  waitOn: function () {
    return [//             Meteor.subscribe("featured-scopes"),
    PostSubs.subscribe("featured-scopes"), PostSubs.subscribe("featured-regions"), PostSubs.subscribe("featured-sites"), PostSubs.subscribe("featured-deviceCategory"), PostSubs.subscribe("featured-devices"), PostSubs.subscribe("featured-protocols"), Meteor.subscribe("featured-sitesDevices"), Meteor.subscribe("featured-sitesDeviceSensors")];
  },
  data: function () {
    if (Meteor.isClient) {
      sesData = Session.get("siteId");
    } //         return site.findOne({ _id : new Mongo.ObjectID( Session.get("siteId") )});


    return site.findOne({
      _id: new Mongo.ObjectID(sesData)
    });
  },
  fastRender: true
}); // Router.route("/topology", function(){
//     this.render('topologyIndex');
//     this.render('header', {to: 'top'});
//     this.render('sidebarTopo', {to: 'sidebar-menu'});
//     this.render('siteIndex', {to: 'content'});
// },{
//     name : "topologyIndex",
//     loadingTemplate : "loading",
//     onBeforeAction: function(){
//         Session.set('mySite', 'topology');
//         Session.set('currentRoute', 'topologyIndex');
//         this.next();
//     },
//     waitOn : function(){
//         return [
// //             Meteor.subscribe("featured-scopes"),
//             PostSubs.subscribe("featured-scopes"),
//             PostSubs.subscribe("featured-regions"),
//             PostSubs.subscribe("featured-sites"),
//             PostSubs.subscribe("featured-deviceCategory"),
//             PostSubs.subscribe("featured-devices"),
//             PostSubs.subscribe("featured-protocols"),
//             Meteor.subscribe("featured-sitesDevices"),
//             Meteor.subscribe("featured-sitesDeviceSensors"),
// //             Meteor.subscribe("featured-battery-parsed"),
// //             Meteor.subscribe("featured-listCamera")
//         ];
//     },
//     data : function(){
//         if(Meteor.isClient) {
//           sesData = Session.get("siteId");
//         }
// //         return site.findOne({ _id : new Mongo.ObjectID( Session.get("siteId") )});
//         return site.findOne({ _id : new Mongo.ObjectID( sesData )});
//     },
//     fastRender: true
// });
//
// Router.route("/report/:_id", function(){
//     this.render('reportIndex');
//     this.render('header', {to: 'top'});
//     this.render('sidebar', {to: 'sidebar-menu'});
//     this.render('siteIndex', {to: 'content'});
// },{
//     name : "siteReport",
//     loadingTemplate : "loading",
//     onBeforeAction: function(){
//         Session.set('currentRoute', 'reportIndex');
//         Session.set('site_id', this.params._id);
//         this.next();
//     },
//     waitOn : function(){
//         return [
//             Meteor.subscribe("featured-scopes"),
//             Meteor.subscribe("featured-regions"),
//             Meteor.subscribe("featured-sitesDevices"),
//             Meteor.subscribe("featured-deviceCategory"),
//             Meteor.subscribe("featured-sitesDeviceSensors"),
//             Meteor.subscribe("featured-devices"),
//             Meteor.subscribe("featured-protocols"),
//             Meteor.subscribe("featured-sites")
//         ];
//     },
//     data : function(){
//         return site.findOne({ _id : new Mongo.ObjectID(this.params._id)});
//     }
// });
// Router.route("/map", function(){
//     this.render('mapIndex');
//     this.render('header', {to: 'top'});
//     this.render('mapIndex', {to: 'content'});
// },{
//     name : "mapIndex",
//     loadingTemplate : "loading",
//     onBeforeAction : function(){
//         Session.set('currentRoute', 'mapIndex');
//         this.next();
//     },
//     waitOn : function(){
//         return [
// //             Meteor.subscribe("featured-sites"),
// //             Meteor.subscribe("featured-sitesDevices"),
//             // Meteor.subscribe("featured-activeDevices"),
//             // Meteor.subscribe("featured-statusLink"),
//             // Meteor.subscribe("featured-alarmDevices")
//         ];
//     }
// });
// Router.route("/alarm", {
//     name : "alarmIndex",
//     onBeforeAction : function(){
//         Session.set('currentRoute', 'alarmIndex');
//         this.next();
//     }
// });
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"routes-global.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// lib/routes/routes-global.js                                                                           //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
// ApplicationController = RouteController.extend({
//   layoutTemplate: 'defaultTemplate',
//   onBeforeAction: function () {
//       // do some login checks or other custom logic
//     if (!Meteor.userId()) {
//         this.render('loginIndex');
//     } else {
//         this.next();
//     }
//   }
// });
Router.configure({
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  layoutTemplate: 'defaultTemplate'
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"routes-public.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// lib/routes/routes-public.js                                                                           //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
Router.route("/login", {
  loadingTemplate: "loading",
  layoutTemplate: "loginIndex",
  name: "loginIndex"
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"server":{"admin":{"set-account.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// server/admin/set-account.js                                                                           //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
/**
 * Generate set admin accounts
 */
generateTestAccounts = function () {
  // Create an array of user accounts
  var users = [{
    name: 'admin',
    email: 'ahmad.subarkah@cudocomm.com',
    password: 'password'
  }, {
    name: 'admin2',
    email: 'cudocudo@cudocomm.com',
    password: 'password2'
  }, {
    name: 'admin3',
    email: 'cudocudo2@cudocomm.com',
    password: 'password3'
  }, {
    name: 'scm_denpasarivm',
    email: 'scm@denpasarivm.com',
    password: 'denpasarivm123'
  }, {
    name: 'scm_denpasarsctv',
    email: 'scm@denpasarsctv.com',
    password: 'denpasarsctv123'
  }, {
    name: 'scm_pacitan',
    email: 'scm@pacitan.com',
    password: 'pacitan123'
  }, {
    name: 'scm_situbondo',
    email: 'scm@situbondo.com',
    password: 'situbondo123'
  }, {
    name: 'scm_surabayaivm',
    email: 'scm@surabayaivm.com',
    password: 'surabayaivm123'
  }, {
    name: 'scm_surabayasctv',
    email: 'scm@surabayasctv.com',
    password: 'surabayasctv123'
  }, {
    name: 'scm_bandungbackup',
    email: 'scm@bandungbackup.com',
    password: 'bandungbackup123'
  }, {
    name: 'scm_bandungmain',
    email: 'scm@bandungmain.com',
    password: 'bandungmain123'
  }, {
    name: 'scm_jalanpanjang',
    email: 'scm@jalanpanjang.com',
    password: 'jalanpanjang123'
  }, {
    name: 'scm_kebonjeruk',
    email: 'scm@kebonjeruk.com',
    password: 'kebonjeruk123'
  }, {
    name: 'scm_semarangivm',
    email: 'scm@semarangivm.com',
    password: 'semarangivm123'
  }, {
    name: 'scm_semarangsctv',
    email: 'scm@semarangsctv.com',
    password: 'semarangsctv123'
  }, {
    name: 'scm_yogyakartaivm',
    email: 'scm@yogyakartaivm.com',
    password: 'yogyakartaivm'
  }, {
    name: 'scm_yogyakartasctv',
    email: 'scm@yogyakartasctv.com',
    password: 'yogyakartasctv123'
  }]; // loop through array of user accounts

  for (i = 0; i < users.length; i++) {
    // check if the users already exists in the db
    var userEmail = users[i].email,
        checkUser = Meteor.users.findOne({
      "emails.address": userEmail
    }); // if an existing user is not found, create the accounts

    if (!checkUser) {
      var user = Accounts.createUser({
        username: users[i].name,
        email: userEmail,
        password: users[i].password,
        profile: {
          name: users[i].name
        }
      });
    }
  }
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"startup.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// server/admin/startup.js                                                                               //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
Meteor.startup(function () {
  generateTestAccounts();
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"subscription.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// server/admin/subscription.js                                                                          //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
Meteor.publish("featured-regions", function () {
  return m_region.featured();
});
Meteor.publish("featured-scopes", function () {
  return scope.featured();
});
Meteor.publish("featured-sites", function () {
  return site.featured();
});
Meteor.publish("featured-deviceCategory", function () {
  return m_device_category.featured();
});
Meteor.publish("featured-sitesDevices", function () {
  return site_device.featured();
});
Meteor.publish("featured-sitesDeviceSensors", function () {
  return site_device_sensor.featured();
});
Meteor.publish("featured-devices", function () {
  return m_device.featured();
});
Meteor.publish("featured-protocols", function () {
  return m_protocol.featured();
}); // Meteor.publish("featured-sitelog",function(data_devID){
//     check(data_devID, [Match.Any]);
//     return sitelog.find({ dev_id : { $in : data_devID } }, { sort: { _id : -1 } });
// });
//tambahan subs 2018-09-06:

Meteor.publish('featured-activeDevices', function () {
  return active_device.featured();
});
Meteor.publish('featured-statusLink', function () {
  return status_link.featured();
});
Meteor.publish('featured-alarmDevices', function () {
  return alarm_device.featured();
});
Meteor.publish('featured-dashboardTxGraph', function () {
  return dashboard_tx_graph.featured();
});
Meteor.publish('featured-dashboardTempGraph', function () {
  return dashboard_temp_graph.featured();
});
Meteor.publish('featured-listCamera', function () {
  return list_camera.featured();
});
Meteor.publish("featured-battery-parsed", function () {
  return battery_parsed.featured();
}); // Meteor.publish('featured-listCamera', function(data_devID) {
//     check(data_devID, [Match.Any]);
//     return list_camera.find({ dev_id : { $in : data_devID }}, { sort: { file : -1 } });
// });
// Meteor.publish("featured-sitelog",function(data_devID){
//     check(data_devID, [Match.Any]);
//     return sitelog.find({ dev_id : { $in : data_devID } }, { sort: { _id : -1 } });
// });
// Meteor.publish("featuredSitelog",function(args){
//     check(args, Object);
//
//     var siteList = site_device.find({site_id : args._site_id, device_id : args._device_id }).fetch();
//     var z = _.indexBy(siteList, 'dev_id');
//     var devId = [];
//     _.map(z, function(value, key){
//         // devId.push(parseInt(key));
//         // return sitelog.oneLast(parseInt(key));
//         // return sitelog.findOne({ dev_id : parseInt(key) }, { sort: { createdOn : -1 } } );
//         var d = sitelog.findOne({ dev_id : parseInt(key) }, { sort: { createdOn : -1 } } );
//         if(typeof d !== 'undefined'){
//             // console.log(d);
//             return d;
//         }
//     })
//     // return sitelog.oneLast();
//
//     // return sitelog.findOne({ dev_id : 255 }, { sort: { createdOn : -1 } } );
//     // console.log(devId);
//     // return sitelog.findOne({ dev_id : {} }, { sort: { createdOn : -1 } } );
// });
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"api":{"serveImage.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// server/api/serveImage.js                                                                              //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
module.export({
  imageServe: () => imageServe
});
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let express;
module.watch(require("express"), {
  default(v) {
    express = v;
  }

}, 1);
let bodyParser;
module.watch(require("body-parser"), {
  default(v) {
    bodyParser = v;
  }

}, 2);

function imageServe() {
  const app = express();
  app.use(bodyParser.urlencoded({
    extended: false
  })); // app.use('/camera', express.static( `/var/www/nms2/nms_v2/fe/public/camera/` ) );

  app.use('/camera', express.static(`/home/nms2/public/`));
  /* Create WebApp API handler */

  WebApp.connectHandlers.use(app);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"policy.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// server/policy.js                                                                                      //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
// setup local CORS for Cordova testing
BrowserPolicy.content.allowOriginForAll("meteor.local");
BrowserPolicy.content.allowOriginForAll("*.openstreetmap.org");
BrowserPolicy.content.allowOriginForAll("nms.scm.co.id");
BrowserPolicy.content.allowOriginForAll("stamen-tiles-a.a.ssl.fastly.net");
BrowserPolicy.content.allowOriginForAll("stamen-tiles-b.a.ssl.fastly.net");
BrowserPolicy.content.allowOriginForAll("stamen-tiles-c.a.ssl.fastly.net");
BrowserPolicy.content.allowOriginForAll("stamen-tiles-d.a.ssl.fastly.net");
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"server.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// server/server.js                                                                                      //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
let imageServe;
module.watch(require("./api/serveImage"), {
  imageServe(v) {
    imageServe = v;
  }

}, 0);
// marker collection
var Markers = new Meteor.Collection('markers');
Meteor.publish("markers", function () {
  return Markers.find();
}); // Listen to incoming HTTP requests, can only be used on the server

WebApp.connectHandlers.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  return next();
});

if (Meteor.isServer) {
  imageServe();
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("/lib/collections/alarm_device.js");
require("/lib/collections/battery_parsed.js");
require("/lib/collections/dashboard_temp_graph.js");
require("/lib/collections/dashboard_tx_graph.js");
require("/lib/collections/list_active_device.js");
require("/lib/collections/list_camera.js");
require("/lib/collections/m_device.js");
require("/lib/collections/m_device_category.js");
require("/lib/collections/m_protocol.js");
require("/lib/collections/m_province.js");
require("/lib/collections/m_region.js");
require("/lib/collections/scope.js");
require("/lib/collections/site.js");
require("/lib/collections/site_device.js");
require("/lib/collections/site_device_sensor.js");
require("/lib/collections/site_status_link.js");
require("/lib/collections/sitelog.js");
require("/lib/collections/users.js");
require("/lib/routes/hooks.js");
require("/lib/routes/routes-authenticated.js");
require("/lib/routes/routes-global.js");
require("/lib/routes/routes-public.js");
require("/server/admin/set-account.js");
require("/server/admin/startup.js");
require("/server/admin/subscription.js");
require("/server/api/serveImage.js");
require("/server/policy.js");
require("/server/server.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2NvbGxlY3Rpb25zL2FsYXJtX2RldmljZS5qcyIsIm1ldGVvcjovL/CfkrthcHAvbGliL2NvbGxlY3Rpb25zL2JhdHRlcnlfcGFyc2VkLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9saWIvY29sbGVjdGlvbnMvZGFzaGJvYXJkX3RlbXBfZ3JhcGguanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2xpYi9jb2xsZWN0aW9ucy9kYXNoYm9hcmRfdHhfZ3JhcGguanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2xpYi9jb2xsZWN0aW9ucy9saXN0X2FjdGl2ZV9kZXZpY2UuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2xpYi9jb2xsZWN0aW9ucy9saXN0X2NhbWVyYS5qcyIsIm1ldGVvcjovL/CfkrthcHAvbGliL2NvbGxlY3Rpb25zL21fZGV2aWNlLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9saWIvY29sbGVjdGlvbnMvbV9kZXZpY2VfY2F0ZWdvcnkuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2xpYi9jb2xsZWN0aW9ucy9tX3Byb3RvY29sLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9saWIvY29sbGVjdGlvbnMvbV9wcm92aW5jZS5qcyIsIm1ldGVvcjovL/CfkrthcHAvbGliL2NvbGxlY3Rpb25zL21fcmVnaW9uLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9saWIvY29sbGVjdGlvbnMvc2NvcGUuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2xpYi9jb2xsZWN0aW9ucy9zaXRlLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9saWIvY29sbGVjdGlvbnMvc2l0ZV9kZXZpY2UuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2xpYi9jb2xsZWN0aW9ucy9zaXRlX2RldmljZV9zZW5zb3IuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2xpYi9jb2xsZWN0aW9ucy9zaXRlX3N0YXR1c19saW5rLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9saWIvY29sbGVjdGlvbnMvc2l0ZWxvZy5qcyIsIm1ldGVvcjovL/CfkrthcHAvbGliL2NvbGxlY3Rpb25zL3VzZXJzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9saWIvcm91dGVzL2hvb2tzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9saWIvcm91dGVzL3JvdXRlcy1hdXRoZW50aWNhdGVkLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9saWIvcm91dGVzL3JvdXRlcy1nbG9iYWwuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2xpYi9yb3V0ZXMvcm91dGVzLXB1YmxpYy5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL2FkbWluL3NldC1hY2NvdW50LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvYWRtaW4vc3RhcnR1cC5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL2FkbWluL3N1YnNjcmlwdGlvbi5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL2FwaS9zZXJ2ZUltYWdlLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvcG9saWN5LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvc2VydmVyLmpzIl0sIm5hbWVzIjpbImFsYXJtX2RldmljZSIsIk1vbmdvIiwiQ29sbGVjdGlvbiIsImZlYXR1cmVkIiwiZmluZCIsImJhdHRlcnlfcGFyc2VkIiwiZGFzaGJvYXJkX3RlbXBfZ3JhcGgiLCJkYXNoYm9hcmRfdHhfZ3JhcGgiLCJhY3RpdmVfZGV2aWNlIiwibGlzdF9jYW1lcmEiLCJtX2RldmljZSIsImZpZWxkcyIsIl9pZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJkZXZpY2VfY2F0ZWdvcnlfaWQiLCJwb3NpdGlvbiIsIm1fZGV2aWNlX2NhdGVnb3J5IiwibV9wcm90b2NvbCIsIm1fcHJvdmluY2UiLCJyZWdpb25faWQiLCJtX3JlZ2lvbiIsInNjb3BlIiwic2l0ZSIsInNpdGVfaWQiLCJzdGF0dXMiLCJzb3J0Iiwic2l0ZV9kZXZpY2UiLCJvYmoiLCJkZXZfaWQiLCJkZXZpY2VfaWQiLCJ0aXRsZSIsInRpdGxlMiIsInNpdGVfZGV2aWNlX3NlbnNvciIsInByb3RvY29sX2lkIiwic2Vuc29yX25hbWUiLCJpc19zaG93IiwidW5pdCIsInZhbHVlX21pbiIsInZhbHVlX21heCIsIm1ham9yX21pbiIsIm1ham9yX21heCIsImxpbWl0X21pbiIsImxpbWl0X21heCIsInNlbnNvcl92aWV3IiwidmFsdWVOb3ciLCJwZXJzZW50IiwiY29sb3VyIiwiY29uZGl0aW9uIiwic3RhdHVzX2xpbmsiLCJzaXRlbG9nIiwic2l0ZWRldiIsImNvdW50IiwiZGF0YSIsIl8iLCJlYWNoIiwiZmV0Y2giLCJyb3ciLCJwdXNoIiwicmVzdWx0IiwiaW5kZXgiLCJsZW5ndGgiLCJlbCIsImluY2x1ZGVzIiwiZCIsImZpbmRPbmUiLCJjb25zb2xlIiwibG9nIiwiYXJncyIsImxpbWl0IiwiY2hlY2tVc2VyTG9nZ2VkSW4iLCJNZXRlb3IiLCJsb2dnaW5nSW4iLCJ1c2VyIiwiUm91dGVyIiwiZ28iLCJuZXh0IiwidXNlckF1dGhlbnRpY2F0ZWQiLCJvbkJlZm9yZUFjdGlvbiIsImV4Y2VwdCIsIm9ubHkiLCJQb3N0U3VicyIsIlN1YnNNYW5hZ2VyIiwicm91dGUiLCJyZW5kZXIiLCJ0byIsImxvYWRpbmdUZW1wbGF0ZSIsIlNlc3Npb24iLCJzZXQiLCJ3YWl0T24iLCJzdWJzY3JpYmUiLCJmYXN0UmVuZGVyIiwiaXNDbGllbnQiLCJzZXNEYXRhIiwiZ2V0IiwiT2JqZWN0SUQiLCJjb25maWd1cmUiLCJub3RGb3VuZFRlbXBsYXRlIiwibGF5b3V0VGVtcGxhdGUiLCJnZW5lcmF0ZVRlc3RBY2NvdW50cyIsInVzZXJzIiwiZW1haWwiLCJwYXNzd29yZCIsImkiLCJ1c2VyRW1haWwiLCJjaGVja1VzZXIiLCJBY2NvdW50cyIsImNyZWF0ZVVzZXIiLCJ1c2VybmFtZSIsInByb2ZpbGUiLCJzdGFydHVwIiwicHVibGlzaCIsIm1vZHVsZSIsImV4cG9ydCIsImltYWdlU2VydmUiLCJ3YXRjaCIsInJlcXVpcmUiLCJ2IiwiZXhwcmVzcyIsImRlZmF1bHQiLCJib2R5UGFyc2VyIiwiYXBwIiwidXNlIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwic3RhdGljIiwiV2ViQXBwIiwiY29ubmVjdEhhbmRsZXJzIiwiQnJvd3NlclBvbGljeSIsImNvbnRlbnQiLCJhbGxvd09yaWdpbkZvckFsbCIsIk1hcmtlcnMiLCJyZXEiLCJyZXMiLCJzZXRIZWFkZXIiLCJpc1NlcnZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsZUFBZSxJQUFJQyxNQUFNQyxVQUFWLENBQXFCLGtCQUFyQixDQUFmOztBQUVBRixhQUFhRyxRQUFiLEdBQXdCLFlBQVc7QUFDakMsU0FBT0gsYUFBYUksSUFBYixFQUFQO0FBQ0QsQ0FGRCxDOzs7Ozs7Ozs7OztBQ0ZBQyxpQkFBaUIsSUFBSUosTUFBTUMsVUFBVixDQUFxQixvQkFBckIsQ0FBakI7O0FBRUFHLGVBQWVGLFFBQWYsR0FBMEIsWUFBVTtBQUNoQyxTQUFPRSxlQUFlRCxJQUFmLEVBQVA7QUFDSCxDQUZELEM7Ozs7Ozs7Ozs7O0FDRkFFLHVCQUF1QixJQUFJTCxNQUFNQyxVQUFWLENBQXFCLDBCQUFyQixDQUF2Qjs7QUFFQUkscUJBQXFCSCxRQUFyQixHQUFnQyxZQUFXO0FBQ3pDLFNBQU9HLHFCQUFxQkYsSUFBckIsRUFBUDtBQUNELENBRkQsQzs7Ozs7Ozs7Ozs7QUNGQUcscUJBQXFCLElBQUlOLE1BQU1DLFVBQVYsQ0FBcUIsd0JBQXJCLENBQXJCOztBQUVBSyxtQkFBbUJKLFFBQW5CLEdBQThCLFlBQVc7QUFDdkMsU0FBT0ksbUJBQW1CSCxJQUFuQixFQUFQO0FBQ0QsQ0FGRCxDOzs7Ozs7Ozs7OztBQ0ZBSSxnQkFBZ0IsSUFBSVAsTUFBTUMsVUFBVixDQUFxQix3QkFBckIsQ0FBaEI7O0FBRUFNLGNBQWNMLFFBQWQsR0FBeUIsWUFBVztBQUNsQyxTQUFPSyxjQUFjSixJQUFkLEVBQVA7QUFDRCxDQUZELEM7Ozs7Ozs7Ozs7O0FDRkE7QUFDQUssY0FBYyxJQUFJUixNQUFNQyxVQUFWLENBQXFCLGlCQUFyQixDQUFkOztBQUVBTyxZQUFZTixR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O0FDUEEsSUFBSWhCLFVBQUo7QUFBZUYsT0FBT0csS0FBUCxDQUFhQyxRQUFRLGtCQUFSLENBQWIsRUFBeUM7QUFBQ0YsYUFBV0csQ0FBWCxFQUFhO0FBQUNILGlCQUFXRyxDQUFYO0FBQWE7O0FBQTVCLENBQXpDLEVBQXVFLENBQXZFO0FBRWY7QUFDQSxJQUFJYyxVQUFVLElBQUk1RCxPQUFPdEUsVUFBWCxDQUFzQixTQUF0QixDQUFkO0FBQ0FzRSxPQUFPd0MsT0FBUCxDQUFlLFNBQWYsRUFBMEIsWUFBWTtBQUNwQyxTQUFPb0IsUUFBUWhJLElBQVIsRUFBUDtBQUNELENBRkQsRSxDQUlBOztBQUNBMkgsT0FBT0MsZUFBUCxDQUF1QkwsR0FBdkIsQ0FBMkIsVUFBU1UsR0FBVCxFQUFjQyxHQUFkLEVBQW1CekQsSUFBbkIsRUFBeUI7QUFDbER5RCxNQUFJQyxTQUFKLENBQWMsNkJBQWQsRUFBNkMsR0FBN0M7QUFDQSxTQUFPMUQsTUFBUDtBQUNELENBSEQ7O0FBTUEsSUFBSUwsT0FBT2dFLFFBQVgsRUFBcUI7QUFDbkJyQjtBQUNELEMiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFsYXJtX2RldmljZSA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdubXNfYWxhcm1fZGV2aWNlJyk7XG5cbmFsYXJtX2RldmljZS5mZWF0dXJlZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gYWxhcm1fZGV2aWNlLmZpbmQoKTtcbn0iLCJiYXR0ZXJ5X3BhcnNlZCA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwibm1zX2JhdHRlcnlfcGFyc2VkXCIpO1xuXG5iYXR0ZXJ5X3BhcnNlZC5mZWF0dXJlZCA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGJhdHRlcnlfcGFyc2VkLmZpbmQoKTtcbn1cbiIsImRhc2hib2FyZF90ZW1wX2dyYXBoID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ25tc19kYXNoYm9hcmRfdGVtcF9ncmFwaCcpO1xuXG5kYXNoYm9hcmRfdGVtcF9ncmFwaC5mZWF0dXJlZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZGFzaGJvYXJkX3RlbXBfZ3JhcGguZmluZCgpO1xufSIsImRhc2hib2FyZF90eF9ncmFwaCA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdubXNfZGFzaGJvYXJkX3R4X2dyYXBoJyk7XG5cbmRhc2hib2FyZF90eF9ncmFwaC5mZWF0dXJlZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZGFzaGJvYXJkX3R4X2dyYXBoLmZpbmQoKTtcbn0iLCJhY3RpdmVfZGV2aWNlID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ25tc19saXN0X2FjdGl2ZV9kZXZpY2UnKTtcblxuYWN0aXZlX2RldmljZS5mZWF0dXJlZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gYWN0aXZlX2RldmljZS5maW5kKCk7XG59IiwiLy8gbGlzdF9jYW1lcmEgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignbm1zX2xpc3RfY2FtZXJhJyk7XG5saXN0X2NhbWVyYSA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdubXNfc2hvd19jYW1lcmEnKTtcblxubGlzdF9jYW1lcmEuZmVhdHVyZWQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGxpc3RfY2FtZXJhLmZpbmQoe30pO1xufVxuIiwibV9kZXZpY2UgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcIm5tc19tX2RldmljZVwiKTtcblxubV9kZXZpY2UuZmVhdHVyZWQgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiBtX2RldmljZS5maW5kKHt9LCB7ZmllbGRzOiB7X2lkOiAxLCBuYW1lOiAxLCBkZXNjcmlwdGlvbjogMSwgaWNvbjogMSwgZGV2aWNlX2NhdGVnb3J5X2lkOiAxLCBwb3NpdGlvbjogMX19KTtcbn1cbiIsIm1fZGV2aWNlX2NhdGVnb3J5ID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oXCJubXNfbV9kZXZpY2VfY2F0ZWdvcnlcIik7XG5cbm1fZGV2aWNlX2NhdGVnb3J5LmZlYXR1cmVkID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gbV9kZXZpY2VfY2F0ZWdvcnkuZmluZCh7fSwge2ZpZWxkczoge19pZDogMSwgbmFtZTogMX19KTtcbn1cbiIsIm1fcHJvdG9jb2wgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcIm5tc19tX3Byb3RvY29sXCIpO1xuXG5tX3Byb3RvY29sLmZlYXR1cmVkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG1fcHJvdG9jb2wuZmluZCgpO1xufVxuIiwibV9wcm92aW5jZSA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwibm1zX21fcHJvdmluY2VcIik7XG5cbm1fcHJvdmluY2UuZmVhdHVyZWQgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiBtX3Byb3ZpbmNlLmZpbmQoe30sIHsgZmllbGRzOiB7X2lkOiAxLCBuYW1lOiAxLCByZWdpb25faWQ6IDF9IH0pO1xufVxuIiwibV9yZWdpb24gPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcIm5tc19tX3JlZ2lvblwiKTtcblxubV9yZWdpb24uZmVhdHVyZWQgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiBtX3JlZ2lvbi5maW5kKHt9LCB7ZmllbGRzOiB7X2lkOiAxLCBuYW1lOiAxfX0pO1xufVxuIiwic2NvcGUgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcIm5tc19zY29wZVwiKTtcblxuc2NvcGUuZmVhdHVyZWQgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiBzY29wZS5maW5kKHt9KTtcbiAgICAvLyB2YXIgc2l0ZSA9IFNpdGVzLmZpbmRPbmUoKTtcbiAgICAvLyByZXR1cm4gW1xuICAgIC8vICAgICBTaXRlcy5maW5kKHt9KSxcbiAgICAvL1xuICAgIC8vIF1cbn1cblxuXG4vLyB2YXIgZmVhdHVyZWRTa3VzID0gW1wiaG9uZXltb29uLW1hcnNcIixcImpvaG5ueS1saWZ0b2ZmXCIsXCJvbmUtd2F5LXJlZW50cnlcIl07XG4vLyByZXR1cm4gUHJvZHVjdHMuZmluZCh7c2t1IDogeyRpbiA6IGZlYXR1cmVkU2t1c319LFxuLy8gICAgIHtmaWVsZHMgOiB7aW52ZW50b3J5IDogZmFsc2UsIGNvc3QgOiBmYWxzZX19XG4vLyApXG4iLCJzaXRlID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oXCJubXNfc2l0ZVwiKTtcblxuc2l0ZS5mZWF0dXJlZCA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHNpdGUuZmluZCh7fSwge2ZpZWxkczoge19pZDogMSwgbmFtZTogMSwgcmVnaW9uX2lkOiAxLCBzaXRlX2lkOiAxLCBzdGF0dXM6IDF9LCBzb3J0OiB7bmFtZTogMX0gfSk7XG4gICAgLy8gdmFyIHNpdGUgPSBTaXRlcy5maW5kT25lKCk7XG4gICAgLy8gcmV0dXJuIFtcbiAgICAvLyAgICAgU2l0ZXMuZmluZCh7fSksXG4gICAgLy9cbiAgICAvLyBdXG59XG5cbi8vIHNpdGUuY29tcGxldGVkID0gZnVuY3Rpb24oYXJncyl7XG4vLyAgICAgbGV0IHNpdGVfaWQgPSBuZXcgTW9uZ28uT2JqZWN0SUQoYXJncyk7XG4vLyAgICAgdmFyIGRhdGFfc2l0ZSA9IHNpdGUuZmluZCh7IF9pZCA6IG5ldyBNb25nby5PYmplY3RJRChhcmdzKSB9KTtcbi8vICAgICAvLyBjb25zb2xlLmxvZyhzaXRlLmZpbmQoeyBfaWQgOiBuZXcgTW9uZ28uT2JqZWN0SUQoYXJncykgfSkpO1xuLy8gICAgIC8vIHZhciBzaXRlRGF0YSA9IFtdO1xuLy8gICAgIF8uZWFjaChkYXRhX3NpdGUuZmV0Y2goKSwgZnVuY3Rpb24ocm93KXtcbi8vICAgICAgICAgLy8gc2l0ZURhdGEucHVzaChyb3cpO1xuLy8gICAgICAgICBsZXQgZGF0YV9zaXRlX2RldmljZSA9IHNpdGVfZGV2aWNlLmZpbmQoe3NpdGVfaWQgOiBzaXRlX2lkfSk7XG4vLyAgICAgICAgIC8vIHZhciBzaXRlRGV2RGF0YSA9IFtdO1xuLy8gICAgICAgICBfLmVhY2goZGF0YV9zaXRlX2RldmljZS5mZXRjaCgpLCBmdW5jdGlvbihyb3dTaXRlKXtcbi8vICAgICAgICAgICAgIC8vIHNpdGVEYXRhW1wic2l0ZV9kZXZpY2VcIl0gPSBzaXRlRGV2RGF0YS5wdXNoKCk7XG4vLyAgICAgICAgICAgICAvLyByb3cucHVzaCh7XCJzaXRlX2RldmljZVwiIDogcm93U2l0ZX0pO1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2cocm93U2l0ZSk7XG4vLyAgICAgICAgIH0pXG4vLyAgICAgfSlcbi8vXG4vLyAgICAgLy8gcmV0dXJuIHNpdGVEYXRhO1xuLy8gfVxuXG4vL1xuLy8gc2l0ZS5maW5kT25lID0gZnVuY3Rpb24oYXJncyl7XG4vLyAgICAgcmV0dXJuIF8uZmluZChzaXRlLCBmdW5jdGlvbihyb3cpe1xuLy8gICAgICAgICByZXR1cm4gcm93Ll9pZCA9PT0gYXJncy5faWQ7XG4vLyAgICAgfSlcbi8vIH1cblxuXG4vLyB2YXIgZmVhdHVyZWRTa3VzID0gW1wiaG9uZXltb29uLW1hcnNcIixcImpvaG5ueS1saWZ0b2ZmXCIsXCJvbmUtd2F5LXJlZW50cnlcIl07XG4vLyByZXR1cm4gUHJvZHVjdHMuZmluZCh7c2t1IDogeyRpbiA6IGZlYXR1cmVkU2t1c319LFxuLy8gICAgIHtmaWVsZHMgOiB7aW52ZW50b3J5IDogZmFsc2UsIGNvc3QgOiBmYWxzZX19XG4vLyApXG4iLCJzaXRlX2RldmljZSA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwibm1zX3NpdGVfZGV2aWNlXCIpO1xuXG5zaXRlX2RldmljZS5mZWF0dXJlZCA9IGZ1bmN0aW9uKG9iail7XG4gICAgcmV0dXJuIHNpdGVfZGV2aWNlLmZpbmQoe30sIHtmaWVsZHM6IHtfaWQ6IDEsIGRldl9pZDogMSwgc2l0ZV9pZDogMSwgZGV2aWNlX2NhdGVnb3J5X2lkOiAxLCBkZXZpY2VfaWQ6IDEsIHRpdGxlOiAxLCB0aXRsZTI6IDF9fSk7XG59XG5cbi8vIHNpdGVfZGV2aWNlLmFnZ3JlZ2F0ZWQgPSBmdW5jdGlvbihhcmdzKXtcbi8vICAgICB2YXIgZCA9IHNpdGVfZGV2aWNlLmFnZ3JlZ2F0ZShbe1xuLy8gICAgICAgICAkbWF0Y2ggOiB7XG4vLyAgICAgICAgICAgICBzaXRlX2lkIDogbmV3IE1vbmdvLk9iamVjdElEKFwiNWI1OTkzMWM2Zjk3OTg0YTBhZDhjNjg4XCIpIH1cbi8vICAgICAgICAgfSx7XG4vLyAgICAgICAgICRncm91cCA6IHtcbi8vICAgICAgICAgICAgIF9pZCA6IFwiJGRldmljZV9jYXRlZ29yeV9pZFwiIH1cbi8vICAgICAgICAgfV0pO1xuLy9cbi8vICAgICByZXR1cm4gc2l0ZV9kZXZpY2UuYWdncmVnYXRlKGFyZ3MpO1xuLy8gfVxuIiwic2l0ZV9kZXZpY2Vfc2Vuc29yID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oXCJubXNfc2l0ZV9kZXZpY2Vfc2Vuc29yXCIpO1xuXG5zaXRlX2RldmljZV9zZW5zb3IuZmVhdHVyZWQgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiBzaXRlX2RldmljZV9zZW5zb3IuZmluZCh7fSwge2ZpZWxkczoge19pZDogMSwgZGV2X2lkOiAxLCBwcm90b2NvbF9pZDogMSwgc2Vuc29yX25hbWU6IDEsIGlzX3Nob3c6IDEsIHVuaXQ6IDEsIGRlc2NyaXB0aW9uOiAxLCB2YWx1ZV9taW46IDEsIHZhbHVlX21heDogMSwgbWFqb3JfbWluOiAxLCBtYWpvcl9tYXg6IDEsIGxpbWl0X21pbjogMSwgbGltaXRfbWF4OiAxLCBzZW5zb3JfdmlldzogMSwgdmFsdWVOb3c6IDEsIHBlcnNlbnQ6IDEsIGNvbG91cjogMSwgY29uZGl0aW9uOiAxfX0pO1xufVxuIiwic3RhdHVzX2xpbmsgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcIm5tc19zaXRlX3N0YXR1c19saW5rXCIpO1xuXG5zdGF0dXNfbGluay5mZWF0dXJlZCA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHN0YXR1c19saW5rLmZpbmQoe30sIHtmaWVsZHM6IHtfaWQ6IDEsIHNpdGU6IDEsIHN0YXR1czogMX19KTtcbn0iLCJzaXRlbG9nID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oXCJubXNfc2l0ZWxvZ1wiKTtcblxuc2l0ZWxvZy5mZWF0dXJlZCA9IGZ1bmN0aW9uKCl7XG4vLyAgICAgYWt0aXZhc2kgMjAxODA5MDVcbiAgICB2YXIgc2l0ZWRldiA9IHNpdGVfZGV2aWNlLmZpbmQoKTtcbiAgICBpZihzaXRlZGV2LmNvdW50KCkgPiAwKXtcbiAgICAgICAgdmFyIGRhdGEgPSBbXTtcbiAgICAgICAgXy5lYWNoKHNpdGVkZXYuZmV0Y2goKSwgZnVuY3Rpb24ocm93KXtcbiAgICAgICAgICAgIGRhdGEucHVzaChyb3cuZGV2X2lkKTtcbiAgICAgICAgfSlcbiAgICBcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBlbCA9IGRhdGFbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQuaW5jbHVkZXMoZWwpKSByZXN1bHQucHVzaChlbCk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgXy5lYWNoKHJlc3VsdCwgZnVuY3Rpb24oZGV2X2lkKXtcbiAgICAgICAgICAgIC8vIHJldHVybiBzaXRlbG9nLmZpbmRPbmUoeyBkZXZfaWQgOiBhcmdzLmRldl9pZCB9LCB7IHNvcnQ6eyBjcmVhdGVkT24gOiAtMSB9IH0gKTtcbiAgICAgICAgICAgIC8vIHZhciBkID0gc2l0ZWxvZy5maW5kT25lKHsgZGV2X2lkIDogZGV2X2lkIH0sIHsgc29ydDogeyBjcmVhdGVkT24gOiAtMSB9IH0gKTtcbiAgICAgICAgICAgIHZhciBkID0gc2l0ZWxvZy5maW5kT25lKHsgZGV2X2lkIDogZGV2X2lkIH0sIHsgc29ydDogeyBfaWQgOiAtMSB9IH0gKTtcbiAgICAgICAgICAgIGlmKHR5cGVvZiBkICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuLy8gICAgIHJldHVybiBzaXRlbG9nLmZpbmQoKTtcbi8vICAgICByZXR1cm4gc2l0ZWxvZy5maW5kKHsgZGV2X2lkIDogYXJncy5kZXZfaWQgfSwgeyBzb3J0OnsgY3JlYXRlZE9uIDogLTEgfSwgbGltaXQgOiAxIH0gKTtcbiAgICByZXR1cm4gc2l0ZWxvZy5maW5kKHsgZGV2X2lkIDogYXJncy5kZXZfaWQgfSwgeyBzb3J0OnsgX2lkIDogLTEgfSwgbGltaXQgOiAxIH0gKTtcbn1cbiIsIi8vIFVzZXJzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oXCJ1c2Vyc1wiKTtcbi8qXG4qIEFsbG93XG4qL1xuLy9cbi8vIE1ldGVvci51c2Vycy5hbGxvdyh7XG4vLyAgIGluc2VydDogZnVuY3Rpb24oKXtcbi8vICAgICAvLyBEaXNhbGxvdyB1c2VyIGluc2VydHMgb24gdGhlIGNsaWVudCBieSBkZWZhdWx0LlxuLy8gICAgIHJldHVybiBmYWxzZTtcbi8vICAgfSxcbi8vICAgdXBkYXRlOiBmdW5jdGlvbigpe1xuLy8gICAgIC8vIERpc2FsbG93IHVzZXIgdXBkYXRlcyBvbiB0aGUgY2xpZW50IGJ5IGRlZmF1bHQuXG4vLyAgICAgcmV0dXJuIGZhbHNlO1xuLy8gICB9LFxuLy8gICByZW1vdmU6IGZ1bmN0aW9uKCl7XG4vLyAgICAgLy8gRGlzYWxsb3cgdXNlciByZW1vdmVzIG9uIHRoZSBjbGllbnQgYnkgZGVmYXVsdC5cbi8vICAgICByZXR1cm4gZmFsc2U7XG4vLyAgIH1cbi8vIH0pO1xuLy9cbi8vIC8qXG4vLyAqIERlbnlcbi8vICovXG4vL1xuLy8gTWV0ZW9yLnVzZXJzLmRlbnkoe1xuLy8gICBpbnNlcnQ6IGZ1bmN0aW9uKCl7XG4vLyAgICAgLy8gRGVueSB1c2VyIGluc2VydHMgb24gdGhlIGNsaWVudCBieSBkZWZhdWx0LlxuLy8gICAgIHJldHVybiB0cnVlO1xuLy8gICB9LFxuLy8gICB1cGRhdGU6IGZ1bmN0aW9uKCl7XG4vLyAgICAgLy8gRGVueSB1c2VyIHVwZGF0ZXMgb24gdGhlIGNsaWVudCBieSBkZWZhdWx0LlxuLy8gICAgIHJldHVybiB0cnVlO1xuLy8gICB9LFxuLy8gICByZW1vdmU6IGZ1bmN0aW9uKCl7XG4vLyAgICAgLy8gRGVueSB1c2VyIHJlbW92ZXMgb24gdGhlIGNsaWVudCBieSBkZWZhdWx0LlxuLy8gICAgIHJldHVybiB0cnVlO1xuLy8gICB9XG4vLyB9KTtcbiIsImNoZWNrVXNlckxvZ2dlZEluID0gZnVuY3Rpb24oKXtcbiAgICBpZighTWV0ZW9yLmxvZ2dpbmdJbigpICYmICFNZXRlb3IudXNlcigpKXtcbiAgICAgICAgUm91dGVyLmdvKCcvbG9naW4nKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgfVxufVxuXG51c2VyQXV0aGVudGljYXRlZCA9IGZ1bmN0aW9uKCl7XG4gICAgaWYoTWV0ZW9yLmxvZ2dpbmdJbigpICYmIE1ldGVvci51c2VyKCkpe1xuICAgICAgICBSb3V0ZXIuZ28oXCIvXCIpO1xuICAgIH1lbHNle1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICB9XG59XG5cbi8qIFJ1biBIb29rcyAqL1xuUm91dGVyLm9uQmVmb3JlQWN0aW9uKGNoZWNrVXNlckxvZ2dlZEluLCB7XG4gICAgZXhjZXB0OiBbXG4gICAgICAgICdsb2dpbicsXG4gICAgXVxufSlcblxuUm91dGVyLm9uQmVmb3JlQWN0aW9uKHVzZXJBdXRoZW50aWNhdGVkLCB7XG4gICAgb25seSA6IFtcbiAgICAgICAgJ2xvZ2luJyxcbiAgICBdXG59KVxuIiwiUG9zdFN1YnMgPSBuZXcgU3Vic01hbmFnZXIoKTtcblxuUm91dGVyLnJvdXRlKFwiL1wiLCBmdW5jdGlvbigpe1xuICAgIHRoaXMucmVuZGVyKCdkYXNoYm9hcmRJbmRleCcpO1xuICAgIHRoaXMucmVuZGVyKCdoZWFkZXInLCB7dG86ICd0b3AnfSk7XG59LHtcbiAgICBuYW1lIDogXCJkYXNoYm9hcmRJbmRleFwiLFxuICAgIGxvYWRpbmdUZW1wbGF0ZSA6IFwibG9hZGluZ1wiLFxuICAgIG9uQmVmb3JlQWN0aW9uIDogZnVuY3Rpb24oKXtcbiAgICAgICAgU2Vzc2lvbi5zZXQoJ2N1cnJlbnRSb3V0ZScsICdkYXNoYm9hcmRJbmRleCcpO1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICB9LFxuICAgIHdhaXRPbiA6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBbXG4vLyAgICAgICAgICAgICBNZXRlb3Iuc3Vic2NyaWJlKFwiZmVhdHVyZWQtc2l0ZXNcIiksXG4vLyAgICAgICAgICAgICBNZXRlb3Iuc3Vic2NyaWJlKFwiZmVhdHVyZWQtc2l0ZXNEZXZpY2VzXCIpLFxuICAgICAgICAgICAgTWV0ZW9yLnN1YnNjcmliZShcImZlYXR1cmVkLWFjdGl2ZURldmljZXNcIiksXG4gICAgICAgICAgICBNZXRlb3Iuc3Vic2NyaWJlKFwiZmVhdHVyZWQtc3RhdHVzTGlua1wiKSxcbiAgICAgICAgICAgIE1ldGVvci5zdWJzY3JpYmUoXCJmZWF0dXJlZC1hbGFybURldmljZXNcIilcbiAgICAgICAgXTtcbiAgICB9LFxuICAgIGZhc3RSZW5kZXI6IHRydWVcbn0pO1xuXG5Sb3V0ZXIucm91dGUoXCIvcmVwb3J0XCIsIGZ1bmN0aW9uKCl7XG4gICAgdGhpcy5yZW5kZXIoJ3JlcG9ydEluZGV4Jyk7XG4gICAgdGhpcy5yZW5kZXIoJ2hlYWRlcicsIHt0bzogJ3RvcCd9KTtcbiAgICB0aGlzLnJlbmRlcignc2lkZWJhcicsIHt0bzogJ3NpZGViYXItbWVudSd9KTtcbiAgICB0aGlzLnJlbmRlcignc2l0ZUluZGV4Jywge3RvOiAnY29udGVudCd9KTtcbn0se1xuICAgIG5hbWUgOiBcInJlcG9ydEluZGV4XCIsXG4gICAgbG9hZGluZ1RlbXBsYXRlIDogXCJsb2FkaW5nXCIsXG4gICAgb25CZWZvcmVBY3Rpb246IGZ1bmN0aW9uKCl7XG4gICAgICAgIFNlc3Npb24uc2V0KCdteVNpdGUnLCAncmVwb3J0Jyk7XG4gICAgICAgIFNlc3Npb24uc2V0KCdjdXJyZW50Um91dGUnLCAncmVwb3J0SW5kZXgnKTtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgfSxcbiAgICB3YWl0T24gOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gW1xuLy8gICAgICAgICAgICAgTWV0ZW9yLnN1YnNjcmliZShcImZlYXR1cmVkLXNjb3Blc1wiKSxcbiAgICAgICAgICAgIFBvc3RTdWJzLnN1YnNjcmliZShcImZlYXR1cmVkLXNjb3Blc1wiKSxcbiAgICAgICAgICAgIFBvc3RTdWJzLnN1YnNjcmliZShcImZlYXR1cmVkLXJlZ2lvbnNcIiksXG4gICAgICAgICAgICBQb3N0U3Vicy5zdWJzY3JpYmUoXCJmZWF0dXJlZC1zaXRlc1wiKSxcbiAgICAgICAgICAgIFBvc3RTdWJzLnN1YnNjcmliZShcImZlYXR1cmVkLWRldmljZUNhdGVnb3J5XCIpLFxuICAgICAgICAgICAgUG9zdFN1YnMuc3Vic2NyaWJlKFwiZmVhdHVyZWQtZGV2aWNlc1wiKSxcbiAgICAgICAgICAgIFBvc3RTdWJzLnN1YnNjcmliZShcImZlYXR1cmVkLXByb3RvY29sc1wiKSxcbiAgICAgICAgICAgIE1ldGVvci5zdWJzY3JpYmUoXCJmZWF0dXJlZC1zaXRlc0RldmljZXNcIiksXG4gICAgICAgICAgICBNZXRlb3Iuc3Vic2NyaWJlKFwiZmVhdHVyZWQtc2l0ZXNEZXZpY2VTZW5zb3JzXCIpLFxuLy8gICAgICAgICAgICAgTWV0ZW9yLnN1YnNjcmliZShcImZlYXR1cmVkLWJhdHRlcnktcGFyc2VkXCIpLFxuLy8gICAgICAgICAgICAgTWV0ZW9yLnN1YnNjcmliZShcImZlYXR1cmVkLWxpc3RDYW1lcmFcIilcbiAgICAgICAgXTtcbiAgICB9LFxuICAgIGRhdGEgOiBmdW5jdGlvbigpe1xuICAgICAgICBpZihNZXRlb3IuaXNDbGllbnQpIHtcbiAgICAgICAgICBzZXNEYXRhID0gU2Vzc2lvbi5nZXQoXCJzaXRlSWRcIik7XG4gICAgICAgIH1cbi8vICAgICAgICAgcmV0dXJuIHNpdGUuZmluZE9uZSh7IF9pZCA6IG5ldyBNb25nby5PYmplY3RJRCggU2Vzc2lvbi5nZXQoXCJzaXRlSWRcIikgKX0pO1xuICAgICAgICByZXR1cm4gc2l0ZS5maW5kT25lKHsgX2lkIDogbmV3IE1vbmdvLk9iamVjdElEKCBzZXNEYXRhICl9KTtcbiAgICB9LFxuICAgIGZhc3RSZW5kZXI6IHRydWVcbn0pO1xuXG4vLyBSb3V0ZXIucm91dGUoXCIvdG9wb2xvZ3lcIiwgZnVuY3Rpb24oKXtcbi8vICAgICB0aGlzLnJlbmRlcigndG9wb2xvZ3lJbmRleCcpO1xuLy8gICAgIHRoaXMucmVuZGVyKCdoZWFkZXInLCB7dG86ICd0b3AnfSk7XG4vLyAgICAgdGhpcy5yZW5kZXIoJ3NpZGViYXJUb3BvJywge3RvOiAnc2lkZWJhci1tZW51J30pO1xuLy8gICAgIHRoaXMucmVuZGVyKCdzaXRlSW5kZXgnLCB7dG86ICdjb250ZW50J30pO1xuLy8gfSx7XG4vLyAgICAgbmFtZSA6IFwidG9wb2xvZ3lJbmRleFwiLFxuLy8gICAgIGxvYWRpbmdUZW1wbGF0ZSA6IFwibG9hZGluZ1wiLFxuLy8gICAgIG9uQmVmb3JlQWN0aW9uOiBmdW5jdGlvbigpe1xuLy8gICAgICAgICBTZXNzaW9uLnNldCgnbXlTaXRlJywgJ3RvcG9sb2d5Jyk7XG4vLyAgICAgICAgIFNlc3Npb24uc2V0KCdjdXJyZW50Um91dGUnLCAndG9wb2xvZ3lJbmRleCcpO1xuLy8gICAgICAgICB0aGlzLm5leHQoKTtcbi8vICAgICB9LFxuLy8gICAgIHdhaXRPbiA6IGZ1bmN0aW9uKCl7XG4vLyAgICAgICAgIHJldHVybiBbXG4vLyAvLyAgICAgICAgICAgICBNZXRlb3Iuc3Vic2NyaWJlKFwiZmVhdHVyZWQtc2NvcGVzXCIpLFxuLy8gICAgICAgICAgICAgUG9zdFN1YnMuc3Vic2NyaWJlKFwiZmVhdHVyZWQtc2NvcGVzXCIpLFxuLy8gICAgICAgICAgICAgUG9zdFN1YnMuc3Vic2NyaWJlKFwiZmVhdHVyZWQtcmVnaW9uc1wiKSxcbi8vICAgICAgICAgICAgIFBvc3RTdWJzLnN1YnNjcmliZShcImZlYXR1cmVkLXNpdGVzXCIpLFxuLy8gICAgICAgICAgICAgUG9zdFN1YnMuc3Vic2NyaWJlKFwiZmVhdHVyZWQtZGV2aWNlQ2F0ZWdvcnlcIiksXG4vLyAgICAgICAgICAgICBQb3N0U3Vicy5zdWJzY3JpYmUoXCJmZWF0dXJlZC1kZXZpY2VzXCIpLFxuLy8gICAgICAgICAgICAgUG9zdFN1YnMuc3Vic2NyaWJlKFwiZmVhdHVyZWQtcHJvdG9jb2xzXCIpLFxuLy8gICAgICAgICAgICAgTWV0ZW9yLnN1YnNjcmliZShcImZlYXR1cmVkLXNpdGVzRGV2aWNlc1wiKSxcbi8vICAgICAgICAgICAgIE1ldGVvci5zdWJzY3JpYmUoXCJmZWF0dXJlZC1zaXRlc0RldmljZVNlbnNvcnNcIiksXG4vLyAvLyAgICAgICAgICAgICBNZXRlb3Iuc3Vic2NyaWJlKFwiZmVhdHVyZWQtYmF0dGVyeS1wYXJzZWRcIiksXG4vLyAvLyAgICAgICAgICAgICBNZXRlb3Iuc3Vic2NyaWJlKFwiZmVhdHVyZWQtbGlzdENhbWVyYVwiKVxuLy8gICAgICAgICBdO1xuLy8gICAgIH0sXG4vLyAgICAgZGF0YSA6IGZ1bmN0aW9uKCl7XG4vLyAgICAgICAgIGlmKE1ldGVvci5pc0NsaWVudCkge1xuLy8gICAgICAgICAgIHNlc0RhdGEgPSBTZXNzaW9uLmdldChcInNpdGVJZFwiKTtcbi8vICAgICAgICAgfVxuLy8gLy8gICAgICAgICByZXR1cm4gc2l0ZS5maW5kT25lKHsgX2lkIDogbmV3IE1vbmdvLk9iamVjdElEKCBTZXNzaW9uLmdldChcInNpdGVJZFwiKSApfSk7XG4vLyAgICAgICAgIHJldHVybiBzaXRlLmZpbmRPbmUoeyBfaWQgOiBuZXcgTW9uZ28uT2JqZWN0SUQoIHNlc0RhdGEgKX0pO1xuLy8gICAgIH0sXG4vLyAgICAgZmFzdFJlbmRlcjogdHJ1ZVxuLy8gfSk7XG5cbi8vXG4vLyBSb3V0ZXIucm91dGUoXCIvcmVwb3J0LzpfaWRcIiwgZnVuY3Rpb24oKXtcbi8vICAgICB0aGlzLnJlbmRlcigncmVwb3J0SW5kZXgnKTtcbi8vICAgICB0aGlzLnJlbmRlcignaGVhZGVyJywge3RvOiAndG9wJ30pO1xuLy8gICAgIHRoaXMucmVuZGVyKCdzaWRlYmFyJywge3RvOiAnc2lkZWJhci1tZW51J30pO1xuLy8gICAgIHRoaXMucmVuZGVyKCdzaXRlSW5kZXgnLCB7dG86ICdjb250ZW50J30pO1xuLy8gfSx7XG4vLyAgICAgbmFtZSA6IFwic2l0ZVJlcG9ydFwiLFxuLy8gICAgIGxvYWRpbmdUZW1wbGF0ZSA6IFwibG9hZGluZ1wiLFxuLy8gICAgIG9uQmVmb3JlQWN0aW9uOiBmdW5jdGlvbigpe1xuLy8gICAgICAgICBTZXNzaW9uLnNldCgnY3VycmVudFJvdXRlJywgJ3JlcG9ydEluZGV4Jyk7XG4vLyAgICAgICAgIFNlc3Npb24uc2V0KCdzaXRlX2lkJywgdGhpcy5wYXJhbXMuX2lkKTtcbi8vICAgICAgICAgdGhpcy5uZXh0KCk7XG4vLyAgICAgfSxcbi8vICAgICB3YWl0T24gOiBmdW5jdGlvbigpe1xuLy8gICAgICAgICByZXR1cm4gW1xuLy8gICAgICAgICAgICAgTWV0ZW9yLnN1YnNjcmliZShcImZlYXR1cmVkLXNjb3Blc1wiKSxcbi8vICAgICAgICAgICAgIE1ldGVvci5zdWJzY3JpYmUoXCJmZWF0dXJlZC1yZWdpb25zXCIpLFxuLy8gICAgICAgICAgICAgTWV0ZW9yLnN1YnNjcmliZShcImZlYXR1cmVkLXNpdGVzRGV2aWNlc1wiKSxcbi8vICAgICAgICAgICAgIE1ldGVvci5zdWJzY3JpYmUoXCJmZWF0dXJlZC1kZXZpY2VDYXRlZ29yeVwiKSxcbi8vICAgICAgICAgICAgIE1ldGVvci5zdWJzY3JpYmUoXCJmZWF0dXJlZC1zaXRlc0RldmljZVNlbnNvcnNcIiksXG4vLyAgICAgICAgICAgICBNZXRlb3Iuc3Vic2NyaWJlKFwiZmVhdHVyZWQtZGV2aWNlc1wiKSxcbi8vICAgICAgICAgICAgIE1ldGVvci5zdWJzY3JpYmUoXCJmZWF0dXJlZC1wcm90b2NvbHNcIiksXG4vLyAgICAgICAgICAgICBNZXRlb3Iuc3Vic2NyaWJlKFwiZmVhdHVyZWQtc2l0ZXNcIilcbi8vICAgICAgICAgXTtcbi8vICAgICB9LFxuLy8gICAgIGRhdGEgOiBmdW5jdGlvbigpe1xuLy8gICAgICAgICByZXR1cm4gc2l0ZS5maW5kT25lKHsgX2lkIDogbmV3IE1vbmdvLk9iamVjdElEKHRoaXMucGFyYW1zLl9pZCl9KTtcbi8vICAgICB9XG4vLyB9KTtcblxuLy8gUm91dGVyLnJvdXRlKFwiL21hcFwiLCBmdW5jdGlvbigpe1xuLy8gICAgIHRoaXMucmVuZGVyKCdtYXBJbmRleCcpO1xuLy8gICAgIHRoaXMucmVuZGVyKCdoZWFkZXInLCB7dG86ICd0b3AnfSk7XG4vLyAgICAgdGhpcy5yZW5kZXIoJ21hcEluZGV4Jywge3RvOiAnY29udGVudCd9KTtcbi8vIH0se1xuLy8gICAgIG5hbWUgOiBcIm1hcEluZGV4XCIsXG4vLyAgICAgbG9hZGluZ1RlbXBsYXRlIDogXCJsb2FkaW5nXCIsXG4vLyAgICAgb25CZWZvcmVBY3Rpb24gOiBmdW5jdGlvbigpe1xuLy8gICAgICAgICBTZXNzaW9uLnNldCgnY3VycmVudFJvdXRlJywgJ21hcEluZGV4Jyk7XG4vLyAgICAgICAgIHRoaXMubmV4dCgpO1xuLy8gICAgIH0sXG4vLyAgICAgd2FpdE9uIDogZnVuY3Rpb24oKXtcbi8vICAgICAgICAgcmV0dXJuIFtcbi8vIC8vICAgICAgICAgICAgIE1ldGVvci5zdWJzY3JpYmUoXCJmZWF0dXJlZC1zaXRlc1wiKSxcbi8vIC8vICAgICAgICAgICAgIE1ldGVvci5zdWJzY3JpYmUoXCJmZWF0dXJlZC1zaXRlc0RldmljZXNcIiksXG4vLyAgICAgICAgICAgICAvLyBNZXRlb3Iuc3Vic2NyaWJlKFwiZmVhdHVyZWQtYWN0aXZlRGV2aWNlc1wiKSxcbi8vICAgICAgICAgICAgIC8vIE1ldGVvci5zdWJzY3JpYmUoXCJmZWF0dXJlZC1zdGF0dXNMaW5rXCIpLFxuLy8gICAgICAgICAgICAgLy8gTWV0ZW9yLnN1YnNjcmliZShcImZlYXR1cmVkLWFsYXJtRGV2aWNlc1wiKVxuLy8gICAgICAgICBdO1xuLy8gICAgIH1cbi8vIH0pO1xuXG4vLyBSb3V0ZXIucm91dGUoXCIvYWxhcm1cIiwge1xuLy8gICAgIG5hbWUgOiBcImFsYXJtSW5kZXhcIixcbi8vICAgICBvbkJlZm9yZUFjdGlvbiA6IGZ1bmN0aW9uKCl7XG4vLyAgICAgICAgIFNlc3Npb24uc2V0KCdjdXJyZW50Um91dGUnLCAnYWxhcm1JbmRleCcpO1xuLy8gICAgICAgICB0aGlzLm5leHQoKTtcbi8vICAgICB9XG4vLyB9KTtcbiIsIi8vIEFwcGxpY2F0aW9uQ29udHJvbGxlciA9IFJvdXRlQ29udHJvbGxlci5leHRlbmQoe1xuLy8gICBsYXlvdXRUZW1wbGF0ZTogJ2RlZmF1bHRUZW1wbGF0ZScsXG4vLyAgIG9uQmVmb3JlQWN0aW9uOiBmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAvLyBkbyBzb21lIGxvZ2luIGNoZWNrcyBvciBvdGhlciBjdXN0b20gbG9naWNcbi8vICAgICBpZiAoIU1ldGVvci51c2VySWQoKSkge1xuLy8gICAgICAgICB0aGlzLnJlbmRlcignbG9naW5JbmRleCcpO1xuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIHRoaXMubmV4dCgpO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfSk7XG5cblJvdXRlci5jb25maWd1cmUoe1xuICAgIGxvYWRpbmdUZW1wbGF0ZTogJ2xvYWRpbmcnLFxuICAgIG5vdEZvdW5kVGVtcGxhdGUgOiAnbm90Rm91bmQnLFxuICAgIGxheW91dFRlbXBsYXRlOiAnZGVmYXVsdFRlbXBsYXRlJ1xufSlcbiIsIlJvdXRlci5yb3V0ZShcIi9sb2dpblwiLCB7XG4gICAgbG9hZGluZ1RlbXBsYXRlIDogXCJsb2FkaW5nXCIsXG4gICAgbGF5b3V0VGVtcGxhdGUgOiBcImxvZ2luSW5kZXhcIixcbiAgICBuYW1lIDogXCJsb2dpbkluZGV4XCJcbn0pO1xuIiwiLyoqXG4gKiBHZW5lcmF0ZSBzZXQgYWRtaW4gYWNjb3VudHNcbiAqL1xuXG5nZW5lcmF0ZVRlc3RBY2NvdW50cyA9IGZ1bmN0aW9uKCl7XG4gICAgLy8gQ3JlYXRlIGFuIGFycmF5IG9mIHVzZXIgYWNjb3VudHNcbiAgICB2YXIgdXNlcnMgPSBbXG4gICAgICAge25hbWUgOiAnYWRtaW4nLCBlbWFpbCA6ICdhaG1hZC5zdWJhcmthaEBjdWRvY29tbS5jb20nLCBwYXNzd29yZCA6ICdwYXNzd29yZCd9LFxuICAgICAgICB7bmFtZSA6ICdhZG1pbjInLCBlbWFpbCA6ICdjdWRvY3Vkb0BjdWRvY29tbS5jb20nLCBwYXNzd29yZCA6ICdwYXNzd29yZDInfSxcbiAgICAgICAge25hbWUgOiAnYWRtaW4zJywgZW1haWwgOiAnY3Vkb2N1ZG8yQGN1ZG9jb21tLmNvbScsIHBhc3N3b3JkIDogJ3Bhc3N3b3JkMyd9LFxuICAgICAgICB7bmFtZSA6ICdzY21fZGVucGFzYXJpdm0nLCBlbWFpbCA6ICdzY21AZGVucGFzYXJpdm0uY29tJywgcGFzc3dvcmQgOiAnZGVucGFzYXJpdm0xMjMnfSxcbiAgICAgICAge25hbWUgOiAnc2NtX2RlbnBhc2Fyc2N0dicsIGVtYWlsIDogJ3NjbUBkZW5wYXNhcnNjdHYuY29tJywgcGFzc3dvcmQgOiAnZGVucGFzYXJzY3R2MTIzJ30sXG4gICAgICAgIHtuYW1lIDogJ3NjbV9wYWNpdGFuJywgZW1haWwgOiAnc2NtQHBhY2l0YW4uY29tJywgcGFzc3dvcmQgOiAncGFjaXRhbjEyMyd9LFxuICAgICAgICB7bmFtZSA6ICdzY21fc2l0dWJvbmRvJywgZW1haWwgOiAnc2NtQHNpdHVib25kby5jb20nLCBwYXNzd29yZCA6ICdzaXR1Ym9uZG8xMjMnfSxcbiAgICAgICAge25hbWUgOiAnc2NtX3N1cmFiYXlhaXZtJywgZW1haWwgOiAnc2NtQHN1cmFiYXlhaXZtLmNvbScsIHBhc3N3b3JkIDogJ3N1cmFiYXlhaXZtMTIzJ30sXG4gICAgICAgIHtuYW1lIDogJ3NjbV9zdXJhYmF5YXNjdHYnLCBlbWFpbCA6ICdzY21Ac3VyYWJheWFzY3R2LmNvbScsIHBhc3N3b3JkIDogJ3N1cmFiYXlhc2N0djEyMyd9LFxuICAgICAgICB7bmFtZSA6ICdzY21fYmFuZHVuZ2JhY2t1cCcsIGVtYWlsIDogJ3NjbUBiYW5kdW5nYmFja3VwLmNvbScsIHBhc3N3b3JkIDogJ2JhbmR1bmdiYWNrdXAxMjMnfSxcbiAgICAgICAge25hbWUgOiAnc2NtX2JhbmR1bmdtYWluJywgZW1haWwgOiAnc2NtQGJhbmR1bmdtYWluLmNvbScsIHBhc3N3b3JkIDogJ2JhbmR1bmdtYWluMTIzJ30sXG4gICAgICAgIHtuYW1lIDogJ3NjbV9qYWxhbnBhbmphbmcnLCBlbWFpbCA6ICdzY21AamFsYW5wYW5qYW5nLmNvbScsIHBhc3N3b3JkIDogJ2phbGFucGFuamFuZzEyMyd9LFxuICAgICAgICB7bmFtZSA6ICdzY21fa2Vib25qZXJ1aycsIGVtYWlsIDogJ3NjbUBrZWJvbmplcnVrLmNvbScsIHBhc3N3b3JkIDogJ2tlYm9uamVydWsxMjMnfSxcbiAgICAgICAge25hbWUgOiAnc2NtX3NlbWFyYW5naXZtJywgZW1haWwgOiAnc2NtQHNlbWFyYW5naXZtLmNvbScsIHBhc3N3b3JkIDogJ3NlbWFyYW5naXZtMTIzJ30sXG4gICAgICAgIHtuYW1lIDogJ3NjbV9zZW1hcmFuZ3NjdHYnLCBlbWFpbCA6ICdzY21Ac2VtYXJhbmdzY3R2LmNvbScsIHBhc3N3b3JkIDogJ3NlbWFyYW5nc2N0djEyMyd9LFxuICAgICAgICB7bmFtZSA6ICdzY21feW9neWFrYXJ0YWl2bScsIGVtYWlsIDogJ3NjbUB5b2d5YWthcnRhaXZtLmNvbScsIHBhc3N3b3JkIDogJ3lvZ3lha2FydGFpdm0nfSxcbiAgICAgICAge25hbWUgOiAnc2NtX3lvZ3lha2FydGFzY3R2JywgZW1haWwgOiAnc2NtQHlvZ3lha2FydGFzY3R2LmNvbScsIHBhc3N3b3JkIDogJ3lvZ3lha2FydGFzY3R2MTIzJ31cbiAgICBdO1xuXG4gICAgLy8gbG9vcCB0aHJvdWdoIGFycmF5IG9mIHVzZXIgYWNjb3VudHNcbiAgICBmb3IoaT0wOyBpPHVzZXJzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHVzZXJzIGFscmVhZHkgZXhpc3RzIGluIHRoZSBkYlxuICAgICAgICB2YXIgdXNlckVtYWlsID0gdXNlcnNbaV0uZW1haWwsXG4gICAgICAgICAgICBjaGVja1VzZXIgPSBNZXRlb3IudXNlcnMuZmluZE9uZSh7XCJlbWFpbHMuYWRkcmVzc1wiIDogdXNlckVtYWlsfSk7XG5cbiAgICAgICAgLy8gaWYgYW4gZXhpc3RpbmcgdXNlciBpcyBub3QgZm91bmQsIGNyZWF0ZSB0aGUgYWNjb3VudHNcbiAgICAgICAgaWYoIWNoZWNrVXNlcil7XG4gICAgICAgICAgICB2YXIgdXNlciA9IEFjY291bnRzLmNyZWF0ZVVzZXIoe1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lIDogdXNlcnNbaV0ubmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbCA6IHVzZXJFbWFpbCxcbiAgICAgICAgICAgICAgICBwYXNzd29yZCA6IHVzZXJzW2ldLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIHByb2ZpbGUgOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgOiB1c2Vyc1tpXS5uYW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIk1ldGVvci5zdGFydHVwKGZ1bmN0aW9uKCl7XG4gICAgZ2VuZXJhdGVUZXN0QWNjb3VudHMoKTtcbn0pXG4iLCJNZXRlb3IucHVibGlzaChcImZlYXR1cmVkLXJlZ2lvbnNcIixmdW5jdGlvbigpe1xuICAgIHJldHVybiBtX3JlZ2lvbi5mZWF0dXJlZCgpO1xufSk7XG5cbk1ldGVvci5wdWJsaXNoKFwiZmVhdHVyZWQtc2NvcGVzXCIsZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gc2NvcGUuZmVhdHVyZWQoKTtcbn0pO1xuXG5NZXRlb3IucHVibGlzaChcImZlYXR1cmVkLXNpdGVzXCIsZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gc2l0ZS5mZWF0dXJlZCgpO1xufSk7XG5cbk1ldGVvci5wdWJsaXNoKFwiZmVhdHVyZWQtZGV2aWNlQ2F0ZWdvcnlcIixmdW5jdGlvbigpe1xuICAgIHJldHVybiBtX2RldmljZV9jYXRlZ29yeS5mZWF0dXJlZCgpO1xufSk7XG5cbk1ldGVvci5wdWJsaXNoKFwiZmVhdHVyZWQtc2l0ZXNEZXZpY2VzXCIsZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gc2l0ZV9kZXZpY2UuZmVhdHVyZWQoKTtcbn0pO1xuXG5NZXRlb3IucHVibGlzaChcImZlYXR1cmVkLXNpdGVzRGV2aWNlU2Vuc29yc1wiLGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHNpdGVfZGV2aWNlX3NlbnNvci5mZWF0dXJlZCgpO1xufSk7XG5cbk1ldGVvci5wdWJsaXNoKFwiZmVhdHVyZWQtZGV2aWNlc1wiLCBmdW5jdGlvbigpe1xuICAgIHJldHVybiBtX2RldmljZS5mZWF0dXJlZCgpO1xufSk7XG5cbk1ldGVvci5wdWJsaXNoKFwiZmVhdHVyZWQtcHJvdG9jb2xzXCIsIGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIG1fcHJvdG9jb2wuZmVhdHVyZWQoKTtcbn0pO1xuXG4vLyBNZXRlb3IucHVibGlzaChcImZlYXR1cmVkLXNpdGVsb2dcIixmdW5jdGlvbihkYXRhX2RldklEKXtcbi8vICAgICBjaGVjayhkYXRhX2RldklELCBbTWF0Y2guQW55XSk7XG4vLyAgICAgcmV0dXJuIHNpdGVsb2cuZmluZCh7IGRldl9pZCA6IHsgJGluIDogZGF0YV9kZXZJRCB9IH0sIHsgc29ydDogeyBfaWQgOiAtMSB9IH0pO1xuLy8gfSk7XG5cbi8vdGFtYmFoYW4gc3VicyAyMDE4LTA5LTA2OlxuTWV0ZW9yLnB1Ymxpc2goJ2ZlYXR1cmVkLWFjdGl2ZURldmljZXMnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYWN0aXZlX2RldmljZS5mZWF0dXJlZCgpO1xufSk7XG5cbk1ldGVvci5wdWJsaXNoKCdmZWF0dXJlZC1zdGF0dXNMaW5rJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHN0YXR1c19saW5rLmZlYXR1cmVkKCk7XG59KTtcblxuTWV0ZW9yLnB1Ymxpc2goJ2ZlYXR1cmVkLWFsYXJtRGV2aWNlcycsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBhbGFybV9kZXZpY2UuZmVhdHVyZWQoKTtcbn0pO1xuXG5NZXRlb3IucHVibGlzaCgnZmVhdHVyZWQtZGFzaGJvYXJkVHhHcmFwaCcsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkYXNoYm9hcmRfdHhfZ3JhcGguZmVhdHVyZWQoKTtcbn0pO1xuXG5NZXRlb3IucHVibGlzaCgnZmVhdHVyZWQtZGFzaGJvYXJkVGVtcEdyYXBoJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRhc2hib2FyZF90ZW1wX2dyYXBoLmZlYXR1cmVkKCk7XG59KTtcblxuTWV0ZW9yLnB1Ymxpc2goJ2ZlYXR1cmVkLWxpc3RDYW1lcmEnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbGlzdF9jYW1lcmEuZmVhdHVyZWQoKTtcbn0pO1xuXG5NZXRlb3IucHVibGlzaChcImZlYXR1cmVkLWJhdHRlcnktcGFyc2VkXCIsZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gYmF0dGVyeV9wYXJzZWQuZmVhdHVyZWQoKTtcbn0pO1xuXG4vLyBNZXRlb3IucHVibGlzaCgnZmVhdHVyZWQtbGlzdENhbWVyYScsIGZ1bmN0aW9uKGRhdGFfZGV2SUQpIHtcbi8vICAgICBjaGVjayhkYXRhX2RldklELCBbTWF0Y2guQW55XSk7XG4vLyAgICAgcmV0dXJuIGxpc3RfY2FtZXJhLmZpbmQoeyBkZXZfaWQgOiB7ICRpbiA6IGRhdGFfZGV2SUQgfX0sIHsgc29ydDogeyBmaWxlIDogLTEgfSB9KTtcbi8vIH0pO1xuXG4vLyBNZXRlb3IucHVibGlzaChcImZlYXR1cmVkLXNpdGVsb2dcIixmdW5jdGlvbihkYXRhX2RldklEKXtcbi8vICAgICBjaGVjayhkYXRhX2RldklELCBbTWF0Y2guQW55XSk7XG4vLyAgICAgcmV0dXJuIHNpdGVsb2cuZmluZCh7IGRldl9pZCA6IHsgJGluIDogZGF0YV9kZXZJRCB9IH0sIHsgc29ydDogeyBfaWQgOiAtMSB9IH0pO1xuLy8gfSk7XG5cblxuLy8gTWV0ZW9yLnB1Ymxpc2goXCJmZWF0dXJlZFNpdGVsb2dcIixmdW5jdGlvbihhcmdzKXtcbi8vICAgICBjaGVjayhhcmdzLCBPYmplY3QpO1xuLy9cbi8vICAgICB2YXIgc2l0ZUxpc3QgPSBzaXRlX2RldmljZS5maW5kKHtzaXRlX2lkIDogYXJncy5fc2l0ZV9pZCwgZGV2aWNlX2lkIDogYXJncy5fZGV2aWNlX2lkIH0pLmZldGNoKCk7XG4vLyAgICAgdmFyIHogPSBfLmluZGV4Qnkoc2l0ZUxpc3QsICdkZXZfaWQnKTtcbi8vICAgICB2YXIgZGV2SWQgPSBbXTtcbi8vICAgICBfLm1hcCh6LCBmdW5jdGlvbih2YWx1ZSwga2V5KXtcbi8vICAgICAgICAgLy8gZGV2SWQucHVzaChwYXJzZUludChrZXkpKTtcbi8vICAgICAgICAgLy8gcmV0dXJuIHNpdGVsb2cub25lTGFzdChwYXJzZUludChrZXkpKTtcbi8vICAgICAgICAgLy8gcmV0dXJuIHNpdGVsb2cuZmluZE9uZSh7IGRldl9pZCA6IHBhcnNlSW50KGtleSkgfSwgeyBzb3J0OiB7IGNyZWF0ZWRPbiA6IC0xIH0gfSApO1xuLy8gICAgICAgICB2YXIgZCA9IHNpdGVsb2cuZmluZE9uZSh7IGRldl9pZCA6IHBhcnNlSW50KGtleSkgfSwgeyBzb3J0OiB7IGNyZWF0ZWRPbiA6IC0xIH0gfSApO1xuLy8gICAgICAgICBpZih0eXBlb2YgZCAhPT0gJ3VuZGVmaW5lZCcpe1xuLy8gICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZCk7XG4vLyAgICAgICAgICAgICByZXR1cm4gZDtcbi8vICAgICAgICAgfVxuLy8gICAgIH0pXG4vLyAgICAgLy8gcmV0dXJuIHNpdGVsb2cub25lTGFzdCgpO1xuLy9cbi8vICAgICAvLyByZXR1cm4gc2l0ZWxvZy5maW5kT25lKHsgZGV2X2lkIDogMjU1IH0sIHsgc29ydDogeyBjcmVhdGVkT24gOiAtMSB9IH0gKTtcbi8vICAgICAvLyBjb25zb2xlLmxvZyhkZXZJZCk7XG4vLyAgICAgLy8gcmV0dXJuIHNpdGVsb2cuZmluZE9uZSh7IGRldl9pZCA6IHt9IH0sIHsgc29ydDogeyBjcmVhdGVkT24gOiAtMSB9IH0gKTtcbi8vIH0pO1xuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ly9cbi8vIElNUE9SVCBNT0RVTEUgLy9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PS8vXG5pbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0vL1xuLy8gQ1JFQVRFIFJPVVRFUyAmIEhUVFAgUkVRVUVTVCBGVU5DVElPTiBFWFBPUlQgLy9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PS8vXG5leHBvcnQgZnVuY3Rpb24gaW1hZ2VTZXJ2ZSgpIHtcbiAgY29uc3QgYXBwID0gZXhwcmVzcygpO1xuICBhcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSk7XG4gIC8vIGFwcC51c2UoJy9jYW1lcmEnLCBleHByZXNzLnN0YXRpYyggYC92YXIvd3d3L25tczIvbm1zX3YyL2ZlL3B1YmxpYy9jYW1lcmEvYCApICk7XG4gIGFwcC51c2UoJy9jYW1lcmEnLCBleHByZXNzLnN0YXRpYyggYC9ob21lL25tczIvcHVibGljL2AgKSApO1xuICAvKiBDcmVhdGUgV2ViQXBwIEFQSSBoYW5kbGVyICovXG4gIFdlYkFwcC5jb25uZWN0SGFuZGxlcnMudXNlKGFwcCk7XG59IiwiLy8gc2V0dXAgbG9jYWwgQ09SUyBmb3IgQ29yZG92YSB0ZXN0aW5nXG5Ccm93c2VyUG9saWN5LmNvbnRlbnQuYWxsb3dPcmlnaW5Gb3JBbGwoXCJtZXRlb3IubG9jYWxcIik7XG5Ccm93c2VyUG9saWN5LmNvbnRlbnQuYWxsb3dPcmlnaW5Gb3JBbGwoXCIqLm9wZW5zdHJlZXRtYXAub3JnXCIpO1xuQnJvd3NlclBvbGljeS5jb250ZW50LmFsbG93T3JpZ2luRm9yQWxsKFwibm1zLnNjbS5jby5pZFwiKTtcbkJyb3dzZXJQb2xpY3kuY29udGVudC5hbGxvd09yaWdpbkZvckFsbChcInN0YW1lbi10aWxlcy1hLmEuc3NsLmZhc3RseS5uZXRcIik7XG5Ccm93c2VyUG9saWN5LmNvbnRlbnQuYWxsb3dPcmlnaW5Gb3JBbGwoXCJzdGFtZW4tdGlsZXMtYi5hLnNzbC5mYXN0bHkubmV0XCIpO1xuQnJvd3NlclBvbGljeS5jb250ZW50LmFsbG93T3JpZ2luRm9yQWxsKFwic3RhbWVuLXRpbGVzLWMuYS5zc2wuZmFzdGx5Lm5ldFwiKTtcbkJyb3dzZXJQb2xpY3kuY29udGVudC5hbGxvd09yaWdpbkZvckFsbChcInN0YW1lbi10aWxlcy1kLmEuc3NsLmZhc3RseS5uZXRcIik7XG4iLCJpbXBvcnQge2ltYWdlU2VydmV9IGZyb20gJy4vYXBpL3NlcnZlSW1hZ2UnO1xuXG4vLyBtYXJrZXIgY29sbGVjdGlvblxudmFyIE1hcmtlcnMgPSBuZXcgTWV0ZW9yLkNvbGxlY3Rpb24oJ21hcmtlcnMnKTtcbk1ldGVvci5wdWJsaXNoKFwibWFya2Vyc1wiLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNYXJrZXJzLmZpbmQoKTtcbn0pO1xuXG4vLyBMaXN0ZW4gdG8gaW5jb21pbmcgSFRUUCByZXF1ZXN0cywgY2FuIG9ubHkgYmUgdXNlZCBvbiB0aGUgc2VydmVyXG5XZWJBcHAuY29ubmVjdEhhbmRsZXJzLnVzZShmdW5jdGlvbihyZXEsIHJlcywgbmV4dCkge1xuICByZXMuc2V0SGVhZGVyKFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCIsIFwiKlwiKTtcbiAgcmV0dXJuIG5leHQoKTtcbn0pO1xuXG5cbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcbiAgaW1hZ2VTZXJ2ZSgpO1xufVxuXG4iXX0=
