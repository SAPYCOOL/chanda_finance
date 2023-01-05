var app = angular.module('sripal', ['ngRoute', 'toaster', 'ui.bootstrap']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                title: 'Login',
                templateUrl: 'partials/login.html',
                controller: 'loginCtrl'
            })
            .when('/login', {
                title: 'Login',
                templateUrl: 'partials/login.html',
                controller: 'loginCtrl'
            })
            .when('/logout', {
                title: 'Log out',
                templateUrl: 'partials/login.html',
                controller: 'logoutCtrl'
            })
            .when('/dashboard', {
                title: '/',
                templateUrl: 'partials/dashboard1.html',
                controller: 'dashboard1Ctrl'
            })
            // .when('/', {
            //     title: '/',
            //     templateUrl: 'partials/dashboard1.html',
            //     controller: 'dashboard1Ctrl'
            // })
            .when('/dailyshortcut', {
                title: 'Daily collection',
                templateUrl: 'partials/dailyshortcut.html',
                controller: 'dailyShortcutCtrl'
            })
            .when('/createcustomer', {
                title: 'createcustomer',
                templateUrl: 'partials/createcustomer.html',
                controller: 'createcustomerCtrl'
            })
            .when('/createchiti', {
                title: 'createchiti',
                templateUrl: 'partials/createchiti.html',
                controller: 'createchitiCtrl'
            })
            .when('/createchitfundchiti', {
                title: 'createchitfund',
                templateUrl: 'partials/createchitfundchiti.html',
                controller: 'createChitfundChitiCtrl'
            })
            .when('/createchitfundcustomer', {
                title: 'createchitfund customer',
                templateUrl: 'partials/createchitfundcustomer.html',
                controller: 'createChitfundCustomerCtrl'
            })
            .when('/getchitfundcustomers', {
                title: 'getchitfund customer',
                templateUrl: 'partials/getchitfundcustomers.html',
                controller: 'getChitfundCustomerCtrl'
            })
            .when('/editcfcustomer/:id', {
                title: 'edit chitfund customer',
                templateUrl: 'partials/editchitfundcustomer.html',
                controller: 'editChitfundCustomerCtrl'
            })
            .when('/createcfchiticustomer', {
                title: 'Create Cf Chiti customer',
                templateUrl: 'partials/createcfchiticustomer.html',
                controller: 'createCfChitiCustomerCtrl'
            })
            .when('/createcfpaata', {
                title: 'createchitfund Paata',
                templateUrl: 'partials/createcfpaata.html',
                controller: 'createCfPaataCtrl'
            })
            .when('/getcfpaata', {
                title: 'createchitfund Paata',
                templateUrl: 'partials/getcfpaata.html',
                controller: 'getcfpaataCtrl'
            })
            .when('/editcfpaata/:id', {
                title: 'Edit chitfund Paata',
                templateUrl: 'partials/editcfpaata.html',
                controller: 'editcfpaataCtrl'
            })
            .when('/cfpaata/:id', {
                title: 'createchitfund Paata',
                templateUrl: 'partials/cfpaata.html',
                controller: 'cfpaataCtrl'
            })
            .when('/createcftrans', {
                title: 'create CFtrans',
                templateUrl: 'partials/createcftrans.html',
                controller: 'createcftransCtrl'
            })
            .when('/getcftrans', {
                title: 'get CFtrans',
                templateUrl: 'partials/getcftrans.html',
                controller: 'getcftransCtrl'
            })
            .when('/editcftrans/:id', {
                title: 'Edit chitfund trans',
                templateUrl: 'partials/editcftrans.html',
                controller: 'editcftransCtrl'
            })
            .when('/createpaymentmode', {
                title: 'create Payment mode',
                templateUrl: 'partials/createpaymentmode.html',
                controller: 'createpaymentmodeCtrl'
            })
            .when('/createreceived', {
                title: 'createreceived',
                templateUrl: 'partials/createreceived.html',
                controller: 'createreceivedCtrl'
            })
            .when('/received', {
                title: 'received',
                templateUrl: 'partials/received.html',
                controller: 'receivedCtrl'
            })
            .when('/reversechiti', {
                title: 'Reverse chiti',
                templateUrl: 'partials/reversechiti.html',
                controller: 'reversechitiCtrl'
            })
            .when('/getcustomers',{
                title: 'getcustomers',
                templateUrl: 'partials/getcustomers.html',
                controller: 'getcustomersCtrl'
            })
            .when('/creditors', {
                title: 'Creditors',
                templateUrl: 'partials/creditors.html',
                controller: 'creditorsCtrl'
            })
            .when('/rcvdcoll', {
                title: 'Rcvdcoll',
                templateUrl: 'partials/rcvdcoll.html',
                controller: 'rcvdcollCtrl'
            })
            .when('/customer/:id', {
                title: 'customer',
                templateUrl: 'partials/customer.html',
                controller: 'customerCtrl'
            })
            .when('/chiti/:id',{
                title : 'Chiti',
                templateUrl : 'partials/chiti.html',
                controller : 'chitiCtrl'
            })
            .when('/chitfund/:id',{
                title : 'chitfund',
                templateUrl : 'partials/chitfund.html',
                controller : 'chitfundCtrl'
            })
            .when('/pendingchitilist',{
                title: 'Pending List',
                templateUrl: 'partials/pendingchiti.html',
                controller : 'pendingchitiCtrl'
            }) 
            .when('/editcustomer/:id',{
                title: 'editcustomer',
                templateUrl: 'partials/editcustomer.html',
                controller: 'editcustomerCtrl'
            })
            .when('/editcustomerbyfilter',{
                title: 'editcustomer',
                templateUrl: 'partials/editcustomerbyfilter.html',
                controller: 'editcustomerbyfilterCtrl'
            })
            .when('/editchitibyfilter',{
                title: 'Edit Chiti',
                templateUrl: 'partials/editchitibyfilter.html',
                controller: 'editchitibyfilterCtrl'
            })
            .when('/drcr',{
                title: 'Edit Cash Entry',
                templateUrl: 'partials/drcr.html',
                controller: 'drcrCtrl'
            })
            .when('/editchiti/:id',{
                title: 'Edit Chiti',
                templateUrl : 'partials/editchiti.html',
                controller : 'editchitiCtrl'
            })
            .when('/editchitfund/:id',{
                title: 'Edit Chit Fund',
                templateUrl : 'partials/editchitfund.html',
                controller : 'editchitfundCtrl'
            })
            .when('/editreceived/:id',{
                title: 'Edit Received',
                templateUrl : 'partials/editreceived.html',
                controller : 'editreceivedCtrl'
            })
            .when('/editasalu/:id',{
                title: 'Edit Asalu',
                templateUrl : 'partials/editasalu.html',
                controller : 'editasaluCtrl'
            })
            .when('/getchiti', {
                title: 'getchiti',
                templateUrl: 'partials/getchiti.html',
                controller: 'getchitiCtrl'
            })  
            .when('/getchitfund',{
                title: 'Get Chit Funds',
                templateUrl: 'partials/getchitfund.html',
                controller: 'getchitfundCtrl'
            })   
            .when('/dailyentries', {
                title: 'dailyentries',
                templateUrl: 'partials/dailyentries.html',
                controller: 'dailyentriesCtrl'
            })
            .when('/editcollection/:id',{
                title: 'Edit Collection',
                templateUrl: 'partials/editcollection.html',
                controller : 'editcollectionCtrl'
            })   
            .when('/editdrcr/:id',{
                title: 'Dr CR',
                templateUrl : 'partials/editdrcr.html',
                controller : 'editdrcrCtrl'
            })
            .when('/credit',{
                title: 'Credit',
                templateUrl : 'partials/credit.html',
                controller : 'creditCtrl'
            })
            .when('/creditcopy',{
                title: 'Credit copy',
                templateUrl : 'partials/creditcopy.html',
                controller : 'creditcopyCtrl'
            })
            .when('/createdrcr',{
                title: 'Dr CR',
                templateUrl : 'partials/createdrcr.html',
                controller : 'createdrcrCtrl'
            })
            .when('/olddaybook',{
                title: 'Day Book',
                templateUrl: 'partials/olddaybook.html',
                controller : 'olddaybookCtrl'
            })     
            .when('/daybook',{
                title: 'Day Book',
                templateUrl: 'partials/daybook.html',
                controller : 'daybookCtrl'
            })     
            .when('/ledger',{
                title: 'Ledger',
                templateUrl: 'partials/ledger.html',
                controller : 'ledgerCtrl'
            })    
            .when('/ledgerdemo',{
                title: 'Ledger',
                templateUrl: 'partials/ledgerdemo.html',
                controller : 'ledgerdemoCtrl'
            })    
            .when('/interestdemo', {
                title: 'Interest Detail',
                templateUrl: 'partials/interestdemo.html',
                controller: 'interestdemoCtrl',
                role: '0'
            })
            .when('/interest', {
                title: 'Interest',
                templateUrl: 'partials/interest.html',
                controller: 'interestCtrl',
                role: '0'
            })
            .when('/payinterest', {
                title: 'Interest Payment',
                templateUrl: 'partials/payinterest.html',
                controller: 'payinterestCtrl',
                role: '0'
            })
            .when('/inc', {
                title: 'Income Generated',
                templateUrl: 'partials/profit.html',
                controller: 'incCtrl',
                role: '0'
            })
            .otherwise({
                redirectTo: '/404',
                templateUrl: 'partials/404.html',
                controller: 'loginCtrl'
            });
    }


]).run(function($rootScope, $location, Data) {
    // $rootScope.$on("$routeChangeSuccess", function(event, currentRoute, previousRoute) {

    //     $("html, body").animate({
    //         scrollTop: 0
    //     }, 200);

    // });
    $rootScope.$on("$routeChangeStart", function(event, next, current) {
        Data.get('session').then(function(results) {
            if (results.uid) {
                $rootScope.authenticated = true;
                $rootScope.uid = results.uid;
                $rootScope.firstname = results.firstname;
                $rootScope.lastname = results.lastname;
                $rootScope.name = results.name;
                $rootScope.email = results.email;
                var nextUrl = next.$$route.originalPath;

                if (!$rootScope.uid) {
                    if (nextUrl == '/login' || nextUrl == "/") {} else {
                        $location.path("/login");
                    }
                } else {
                    if (nextUrl == '/login' || nextUrl == "/") {
                        $location.path("/dashboard");
                    }
                }
            } else {
                $rootScope.authenticated = false;
                $location.path("/login");
            }
        });
    });
    
    $rootScope.$on("$routeChangeStart", function(event, next, current) {


        // Data.get('session').then(function(results) {
        //     if (results.uid) {
        //        $rootScope.authenticated = true;
        //         $rootScope.uid = results.uid;
        //         $rootScope.name = results.name;
        //         $rootScope.firstname = results.firstname;
        //         $rootScope.lastname = results.lastname;
        //         $rootScope.phone = results.phone;
        //         $rootScope.type = results.type;
        //         $rootScope.role = results.role;
        //         $rootScope.branch = results.branch;
		// 		$rootScope.firm = results.firm;
		// 		$rootScope.code = results.code;
        //         var nextUrl = next.$$route.originalPath;
        //         if (!isAuthorisedUrl(nextUrl, $rootScope.role)) {
        //             $location.path("/404");
        //         }
        //     } else {
        //         var nextUrl = next.$$route.originalPath;
        //         if (nextUrl == '/login') {

        //         } else {
        //             $rootScope.authenticated = false;
        //             $location.path("/login");
        //         }
        //     }
        // });
    });
});

app.controller('hamiCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {


});

app.controller('createcustomerCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {
    $scope.init = function(){
        $scope.Customer={FName:"",LName:"",Hami:""}
        $('#FName').focus();
    }

    $scope.createcustomer=function(){
        $scope.submitted=1;
        if ($scope.customerform.$valid){
            $scope.Customer.FName = capitalizeFirstLetter($scope.Customer.FName);
            $scope.Customer.LName = capitalizeFirstLetter($scope.Customer.LName);
            Data.post('customer', $scope.Customer).then(function(results,abc) {
                Data.toast(results);
                if(results.samecus != 1){
                    $scope.init();
                }

            });
            
        }
    }
   
    $scope.gethamilist= function(){
        var filter= {ishami:1}
        Data.get('customers',filter).then(function(results){
            $scope.hami=results.customers;
        })
    }
    $scope.gethamilist();


    $scope.setNextFocus = function(e, el, next,key){
            setNextFocus(e, el, next,key,$scope.collection);
    }

    $scope.chckboxfocus = function(cboxval,next){
        chckboxfocus(cboxval,next);
        // if($scope.Customer.proofchck == 1){
        //     focusInput("aAdhar",150);
        // }else{
            
        // }
    }


});

app.controller('reversechitiCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {
   
    $scope.getcustomerlist= function(){
        Data.get('customers',{chitfund:{op:"!=", value:"1" }}).then(function(results){
            $scope.customers=results.customers;
        })
    }
    $scope.getcustomerlist();
    $scope.chiti={status:1,customer:""};
    $scope.chititypes = [{id:1,type:"90days"},{id:2,type:"Weekly"},{id:3,type:"10 Days"},{id:4,type:"Monthly"},{id:5,type:"Daily"}]
    ///$scope.chitis={tYpe:0}
    $scope.initiateCalendar = function() {
        $('.input-group.date').datepicker({
            format: 'yyyy-mm-dd',
            orientation: "auto"
        });
       
            $('.input-group.date').each(function() {
    //$(this).datepicker('setDate', $scope.filter.from_date);
    });
    }
    $scope.initiateCalendar();
    
    $scope.createchiti = function(){
      
        $scope.submitted=1;
       // if($scope.revchitiform.$valid){
        console.log($scope.revchiti);
        $scope.data = {cid:collectionid,receivedfrom:$scope.receivedfrom};
        console.log($scope.data);
       /* Data.post('chiti',$scope.chiti).then(function(results){
            console.log(results.message);
            $scope.response=results.message;
            
        });*/
       // }
    }

    var date = new Date();
    $scope.dbdate = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
    var collectionid = [];
    var collectionsowji = 0;
    collectionamount = 0;
    $scope.chiti.aMount = 0;
    $scope.noteids = [];
    $scope.gethamilist = function(){
        $filter = {ishami :1}
        Data.get('customers', $filter).then(function(results){
            $scope.hami = results.customers;
        });
        $scope.getcustomerlist();
    }
    $scope.gethamilist();

    $scope.getcolllistgrp = function(){
        $filter = {date :{op: "<=",value:$scope.dbdate},received:0,hami:$scope.Hami,group_by:"a.chiti"}
        Data.get('collection',$filter).then(function(results){
              $scope.collectiongrp = results.collection ; 
            //  console.log($scope.collectiongrp);
          });
    }


    $scope.getcollectionList=function(){
        $filter = {date :{op: "<=",value:$scope.dbdate},received:0,hami:$scope.Hami,chiti:$scope.chitifilter}
        Data.get('collection',$filter).then(function(results){
          //  console.log($scope.filtercustomer);
            $scope.collection = results.collection ; 
           // $scope.getreceivedamount();
           //$scope.getcolllistgrp();
           
        });
    }

    $scope.getextraamt = function(){
        $scope.chitiamount = 0;
        
       
        for(i=0;i<$scope.collection.length;i++){
            if($scope.collection[i].received ){
            $scope.extradisp -= $scope.collection[i].amount;
            $scope.chitiamount += $scope.collection[i].amount;
             
   
           
            collectionsowji += $scope.collection[i].sowji;
           
            $scope.noteids.push($scope.collection[i].id)
            
           
        }
      //$scope.note = "Paid for id's " + collectionid;  
    }
    $scope.addcollectionid();
    }
    
    $scope.addcollectionid = function(){
        collectionid= $scope.noteids;
        collectionamount += $scope.chitiamount;
        $scope.chiti.cash = $scope.chiti.aMount - collectionamount ;
        $scope.note = "Reversed with id's " + collectionid + "  amount of  " + collectionamount ;  

    }
    



    $scope.changeDateUserFormat= function(dt){
        if(dt){
              return  changeDateUserFormat(dt);
        }
        }

        $scope.todaydate = function(){
            d = new Date();
            mon =d.getMonth()+1 ;
            dte = d.getDate();
            //month="";
            dtte = "";
            if(mon<10){
                mon = "0"+mon;
            }
             if(dte<10){
                dte = "0"+ dte ;
            }
             $scope.chiti.dAte = dte + '/' + mon + '/' + d.getFullYear();
         }
         $scope.yesterdaydate = function(){
             d = new Date();
            d.setDate(d.getDate()-1);
            dte = d.getDate();
            if(dte<10){
                dte = "0"+ dte;
            }
            mon =d.getMonth()+1 ;
            if(mon<10){
                mon = "0"+mon;
            }
            $scope.chiti.dAte = dte + '/' + mon + '/' + d.getFullYear();
         
          }
          $scope.DByesterdaydate = function(){
             d = new Date();
             d.setDate(d.getDate()-2);
             dte = d.getDate();
            if(dte<10){
                dte = "0"+ dte;
            }
            mon =d.getMonth()+1 ;
            if(mon<10){
                mon = "0"+mon;
            }
            $scope.chiti.dAte = dte + '/' + mon + '/' + d.getFullYear();
         
          }
          $scope.D2Byesterdaydate = function(){
             d = new Date();
             d.setDate(d.getDate()-3);
             dte = d.getDate();
            if(dte<10){
                dte = "0"+ dte;
            }
            mon =d.getMonth()+1 ;
            if(mon<10){
                mon = "0"+mon;
            }
            $scope.chiti.dAte = dte + '/' + mon + '/' + d.getFullYear();
         
          }
    

    /* $scope.bfreextra = 0;
    $scope.getcustomerlist= function(){
        Data.get('customers').then(function(results){
            $scope.customers = results.customers;
        });
    }
    
    
   
       
     
   
$scope.getextraamt = function(){
    $scope.extradisp = $scope.amountpaidonday;
    $scope.noteids = [];
    for(i=0;i<$scope.collection.length;i++){
        if($scope.collection[i].received ){
        $scope.extradisp -= $scope.collection[i].amount;
        $scope.noteids.push($scope.collection[i].id)
        }
       
    }
  $scope.note = "Paid for id's " +$scope.noteids;  
}

$scope.addcollection = function(){
   
    var collectionid = [];
    var collectionsowji = 0;
    for(i=0;i<$scope.collection.length;i++){
        if($scope.collection[i].received ){
            collectionid.push($scope.collection[i].id)
            collectionsowji += $scope.collection[i].sowji;
           
        }
    }
    
    $scope.filter = { customer:$scope.receivedfrom, amount:$scope.amountpaidonday,rcvddate:changeDateSQLFormat($scope.rcvddate),note:$scope.note}
    Data.post('receivedamount',$scope.filter).then(function(results){
        $scope.response = results.message;

    
        if(collectionid.length){
    Data.post('receivedcollection',{collectionsowji : collectionsowji,cid:collectionid,receivedfrom:$scope.receivedfrom ,rcvddate:changeDateSQLFormat($scope.rcvddate)}).then(function(results){
       $scope.response=results.message;   
       $scope.getcollectionList();
        })
    }
    
    });
 
}
$scope.getreceivedamount = function(){
    $scope.filter = { rcvddate:{value:changeDateSQLFormat($scope.dbdate),op:"<="},customer:$scope.receivedfrom,fields:"sum(amount) as amount" }
        Data.get('receivedamount',$scope.filter).then(function(results){
        $scope.receivedamountttl = results.receivedamount;
        $scope.getcolllist();
    });
}
$scope.getcolllist=function(){      
    $scope.filter = {date :{op: "<=",value:changeDateSQLFormat($scope.dbdate)},received:1,customer:$scope.receivedfrom,fields:"sum(a.amount) as amount"}
    Data.get('collection',$scope.filter).then(function(results){
        $scope.collectionttl = results.collection ; 
        $scope.bfreextra =Number($scope.receivedamountttl[0].amount) - Number($scope.collectionttl[0].amount);
   //    console.log($scope.receivedamountttl);
       
    });
}
*/
    
});

app.controller('createreceivedCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {
    $scope.received = {};
     
     $scope.getcustomerlist= function(){
         Data.get('customers',{chitfund:{op:"!=", value:"1" }}).then(function(results){
             $scope.customers=results.customers;
         })
     }
     $scope.getcustomerlist();

     $scope.getchitilist = function(){

         Data.get('chiti',{customer:$scope.received.customer}).then(function(results){
            Data.toast(results);
            $scope.chiti = results.chiti;
         });
     }

     $scope.initiateCalendar = function() {
         $('.input-group.date').datepicker({
             format: 'dd/mm/yyyy',
             orientation: "auto"
         });
        
             $('.input-group.date').each(function() {
     //$(this).datepicker('setDate', $scope.filter.from_date);
     });
     }
     $scope.initiateCalendar();
     
     $scope.todaydate = function(){
         d = new Date();
         mon =d.getMonth()+1 ;
         dte = d.getDate();
         month="";
         dtte = dte;
         if(mon<10){
             month = "0"+mon;
         }
          if(dte<10){
             console.log(dte);
             dtte = "0"+dte ;
         }
          $scope.received.rcvddate = dtte + '/' + month+ '/' + d.getFullYear();
      }
      $scope.yesterdaydate = function(){
          d = new Date();
         d.setDate(d.getDate()-1);
         dte = d.getDate();
         if(dte<10){
             dte = "0"+ dte;
         }
         mon =d.getMonth()+1 ;
         month="";
         if(mon<10){
             month = "0"+mon;
         }
          $scope.received.rcvddate = dte + '/' + month+ '/' + d.getFullYear();
      
       }
       $scope.DByesterdaydate = function(){
          d = new Date();
          d.setDate(d.getDate()-2);
          dte = d.getDate();
         if(dte<10){
             dte = "0"+ dte;
         }
         mon =d.getMonth()+1 ;
         month="";
         if(mon<10){
             month = "0"+mon;
         }
          $scope.received.rcvddate = dte + '/' + month+ '/' + d.getFullYear();
      
       }
       $scope.D2Byesterdaydate = function(){
          d = new Date();
          d.setDate(d.getDate()-3);
          dte = d.getDate();
         if(dte<10){
             dte = "0"+ dte;
         }
         mon =d.getMonth()+1 ;
         month="";
         if(mon<10){
             month = "0"+mon;
         }
          $scope.received.rcvddate = dte + '/' + month+ '/' + d.getFullYear();
      
       }
 
 
 
 
 
        $scope.createreceived = function(){
    
        $scope.submitted=1;
        if($scope.createreceivedform.$valid){
        $scope.received.rcvddate = changeDateSQLFormat($scope.received.rcvddate);
        Data.post('receivedamount',$scope.received).then(function(results){
            Data.toast(results);
            $scope.response=results.message;
             
         });
         }
     }
     
     });
     
     

    app.controller('createChitfundChitiCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {
        $scope.init = function(){
            focusonTime("chitiName",200);
            $scope.initialiseDatePicker("date");
        }

        $scope.createChitfund = function(){
            $scope.submitted = 1;
            if($scope.createchitfundChitiForm.$valid){
                
                // Data.post
            }
        }



        //basic functions

        $scope.initialiseDatePicker = function(id) {

            $('#' + id).daterangepicker({
                    locale: {
                        format: 'DD/MM/YYYY'
                    },
                    singleDatePicker: true,
                    showDropdowns: true,
                    autoUpdateInput: false,
    
                },
                function(start, end, label) {;
    
                    $('#' + id).val(start.format('DD/MM/YYYY'));
    
                })
    
    
        }

        $('.date').on('apply.daterangepicker', function(ev, picker) {
            $scope.$apply(function() {
                $scope.chitfund.date = picker.startDate.format('DD/MM/YY');
            });
        });



    });

    app.controller('createChitfundCustomerCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {
        $scope.init = function(){
            focusonTime("FName",300);
            $scope.getcfcustomers();
        }

        $scope.getcfcustomers = function(){
            Data.get("cfcustomers").then(function(results){
                $scope.cfcustomers = results.cfcustomers;
            });
        }

        $scope.createcustomer = function(){
            $scope.submitted = 1;
            if($scope.chitfundcustomerForm.$valid){
                $scope.customer.fname = capitalizeFirstLetter($scope.customer.fname);
                $scope.customer.lname = ($scope.customer.lname && $scope.customer.lname.length)?capitalizeFirstLetter($scope.customer.lname):".";
                
                if($scope.customer.first == 2){
                    for(p=0;p<$scope.cfcustomers.length;p++){
                        if( ($scope.cfcustomers[p].fname + ' ' + $scope.cfcustomers[p].lname) == $scope.customer.firstidname){
                            $scope.customer.firstid = $scope.cfcustomers[p].id;
                        }
                    }
                }else{
                    $scope.customer.firstid = 0;
                }

                Data.post("cfcustomer",$scope.customer).then(function(results){
                    Data.toast(results);
                    $scope.customer = {};
                    $scope.submitted = 0;
                    focusonTime("FName",300);
                });
            }
        }


    });

    
    app.controller('getChitfundCustomerCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {
        $scope.init = function(){
            Data.get("cfcustomers").then(function(results){
                $scope.cfcustomers = results.cfcustomers;
                Data.toast(results);
            });
        }
    });

    
    app.controller('editChitfundCustomerCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {
        $scope.id = $routeParams['id'];

        $scope.init = function(){
            Data.get("cfcustomer/"+ $scope.id).then(function(results){
                $scope.cfcustomer = results.cfcustomer;
                console.log(typeof($scope.cfcustomer.firstid));
                if($scope.cfcustomer.first == 2){
                    $scope.cfcustomer.firstid = $scope.cfcustomer.firstid.toString();
                    console.log(($scope.cfcustomer.firstid));
                }
                Data.toast(results);
                $("#FName").focus();
                $scope.getcfcustomers();
            });
        }

        $scope.getcfcustomers = function(){

            Data.get("cfcustomers").then(function(results){
                $scope.cfcustomers = results.cfcustomers;
            });
        }
        
        $scope.editcfcustomer = function(){
            if($scope.editchitfundcustomerForm.$valid){
                if($scope.cfcustomer.first == 2){
                    for(p=0;p<$scope.cfcustomers.length;p++){
                        if( ($scope.cfcustomers[p].fname + ' ' + $scope.cfcustomers[p].lname) == $scope.cfcustomer.firstidname){
                            $scope.cfcustomer.firstid = $scope.cfcustomers[p].id;
                        }
                    }
                }else{
                    $scope.cfcustomer.firstid = 0;
                }
                $scope.cfcustomer.fname = capitalizeFirstLetter($scope.cfcustomer.fname);
                $scope.cfcustomer.lname = ($scope.cfcustomer.lname && $scope.cfcustomer.lname.length)?capitalizeFirstLetter($scope.cfcustomer.lname):".";
                Data.put("cfcustomer/"+$scope.id,$scope.cfcustomer).then(function(results){
                    Data.toast(results);
                });
            }
        }

    });

    
    app.controller('createCfChitiCustomerCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {


        $scope.init = function(){
            $scope.showno = -1;
            $scope.display = 0;
            $scope.new = 0;
            $scope.getcfchiti();
            $scope.getcfcustomers();
            setTimeout(()=>{
                popupAnim("cfchiticustomerpopup","open");
                $("#cfChiti").focus();
            },500);
            // $scope.chiti = 1;
        }


        $scope.show = function(ind){
            if(ind>= 0){
                $scope.showno = ind;
            }
        }


        $scope.editcfchiticustomer = function(ind){
            if($scope.cfchiticustomers[ind]){
                for(j=0;j<$scope.cfcustomers.length;j++){
                    if($scope.cfchiticustomers[ind].customername == $scope.cfcustomers[j].fname + ' ' + $scope.cfcustomers[j].lname){
                        $scope.cfchiticustomers[ind].customer = $scope.cfcustomers[j].id;
                    }
                }
                Data.put("cfchiticustomers/" + $scope.cfchiticustomers[ind].id,$scope.cfchiticustomers[ind]).then(function(results){
                    Data.toast(results);
                    ind++;
                    $scope.showno = ind;
                    focusonTime("customername"+ ind,200);
                });
            }
        }

        $scope.getcfcustomers = function(){

            Data.get("cfcustomers").then(function(results){
                $scope.cfcustomers = results.cfcustomers;
            });
        }

        $scope.getcfchiticustomers = function(){
            console.log($scope.chiti);
            for(i=0;i<$scope.cfchiti.length;i++){
                if($scope.cfchiti[i].id == $scope.chiti){
                    $scope.chitiarr = $scope.cfchiti[i];
                }
            }
            if($scope.chiti > 0){
                Data.get("cfchiticustomers",{"chiti":$scope.chiti}).then(function(results){
                    $scope.cfchiticustomers = results.cfchiticustomers;
                    if($scope.cfchiticustomers && $scope.cfchiticustomers.length){
                        $scope.new = 0;
                    }else{
                        $scope.new = 1;
                        $scope.cfchiticustomers = [];
                        for(j=0;j<$scope.chitiarr.no;j++){
                            var tmp = {
                                "chiti": $scope.chiti,
                                "customer" : "",
                                "customername":"",
                                "cusno":""
                            };
                            $scope.cfchiticustomers.push(tmp);
                        }
                    }
                })
                $scope.display =1;
                popupAnim("cfchiticustomerpopup","close");
                focusonTime("customername0",200);
            }

            // Data.get("cfchiticustomers",{chiti:$scope.})
        }


        $scope.getcfchiti = function(){
            Data.get("cfchiti").then(function(results){
                $scope.cfchiti = results.cfchiti;
                console.log($scope.cfchiti);
                // $scope.getcfchiticustomers();

            }); 
        }


        $scope.popupaction = function(action){
            if(action == "close"){
                popupAnim("cfchiticustomerpopup","close");
            }
        }

        $scope.submit = function(){
            console.log("hi");
            for(i=0;i<$scope.cfchiticustomers.length;i++){
                for(j=0;j<$scope.cfcustomers.length;j++){
                    if($scope.cfchiticustomers[i].customername == $scope.cfcustomers[j].fname + ' ' + $scope.cfcustomers[j].lname){
                        $scope.cfchiticustomers[i].customer = $scope.cfcustomers[j].id;
                    }
                    
                }
            }
            if($scope.new){
                Data.post("cfchiticustomers",{"cfchiticustomers" :$scope.cfchiticustomers}).then(function(results){
                    Data.toast(results);
                });
            }else{
                Data.put("cfchiticustomers",{"cfchiticustomers" :$scope.cfchiticustomers}).then(function(results){
                    Data.toast(results);
                });
            }
            console.log($scope.cfchiticustomers);
        }

        $scope.getcustomerid = function(){
            if($scope.cfcustomers){
                for(i=0;i<$scope.cfcustomers.length;i++){
                    if($scope.cfcustomers[i].fname + ' ' + $scope.cfcustomers[i].lname  == $scope.paata.customername){
                        $scope.paata.customer = $scope.cfcustomers[i].id;
                        break;
                    }
                }
            }
        }

    });


    app.controller('createCfPaataCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {
     
        $scope.init = function(){
            $scope.getcfchiti();
            $scope.paata = {};
            $scope.paata.date = todayDate();
            focusonTime("date",400);
        }

        

        $scope.getcfchiti = function(){
            Data.get("cfchiti").then(function(results){
                $scope.cfchiti = results.cfchiti;
            });
        }

        
        $scope.createPaata = function(){
            if($scope.createPaataForm.$valid){
                $scope.getcustomerid();
                $scope.paata.date = changeDateSQLFormat($scope.paata.date);
                console.log($scope.paata);
                Data.post('cfpaata',$scope.paata).then(function(results){
                    Data.toast(results);
                });
                $scope.init();
            }
        }

        $scope.getVals = function(){
            if($scope.paata.paata > 0){
                if($scope.paata.chiti){
                    for(i=0;i<$scope.cfchiti.length;i++){
                        if($scope.paata.chiti == $scope.cfchiti[i].id){
                            if($scope.cfchiti[i].amount == 50000){
                                $scope.paata.sripalcomm = 1100;
                                $scope.paata.sowjicomm = 1400;
                            }else{
                                $scope.paata.sripalcomm = 1000;
                                $scope.paata.sowjicomm = 0;
                            }
                            $scope.paata.repayamount = $scope.cfchiti[i].amount - $scope.paata.paata;
                        }
                    }
                }
                
                $scope.paata.payamount = (Number($scope.paata.repayamount) + Number($scope.paata.sripalcomm) + Number($scope.paata.sowjicomm))/20;
            }
        }


        $scope.initialiseDatePicker = function(id) {

            $('#' + id).daterangepicker({
                    locale: {
                        format: 'DD/MM/YYYY'
                    },
                    singleDatePicker: true,
                    showDropdowns: true,
                    autoUpdateInput: false,
    
                },
                function(start, end, label) {;
    
                    $('#' + id).val(start.format('DD/MM/YYYY'));
    
                })    
        }

        $('.date').on('apply.daterangepicker', function(ev, picker) {
            $scope.$apply(function() {
                $scope.paata.date = picker.startDate.format('DD/MM/YYYY');
            });
        });
        $scope.initialiseDatePicker('date');


        $scope.getcustomerlist = function(){
            console.log($scope.paata);
            Data.get("cfchiticustomers",{chiti:$scope.paata.chiti}).then(function(results){
                $scope.cfchiticustomers = results.cfchiticustomers;
                for(i=0;i<$scope.cfchiticustomers.length;i++){
                    if($scope.cfchiticustomers[i].cusno == 0){
                        $scope.cfchiticustomers[i].cusno = "";
                    }
                }
            });
        }
        
    $scope.getcustomerid = function(){
        if($scope.cfchiticustomers){
            for(i=0;i<$scope.cfchiticustomers.length;i++){
                if($scope.cfchiticustomers[i].customername + ' ' + $scope.cfchiticustomers[i].cusno  == $scope.paata.customername){
                    $scope.paata.customer = $scope.cfchiticustomers[i].id;
                    break;
                }
            }
        }
    }

    });


    app.controller('getcfpaataCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {

        $scope.init = function(){

            $scope.getcfpaata();
            $scope.getcfchiti();
        }

        $scope.getcfpaata = function(){

            Data.get("cfpaata",{"sort_by":"a.no","sort_order":"asc"}).then(function(results){
                $scope.cfpaata = results.cfpaata;
            });
        }


        
    $scope.changeDateUserFormat= function(dt){
        
        if(dt){
              return  changeDateUserFormat(dt);
            }
        }

        $scope.getcfchiti = function(){
            Data.get("cfchiti").then(function(results){
                $scope.cfchiti = results.cfchiti;
            });
        }
    });

    
    app.controller('cfpaataCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {
        $scope.id = $routeParams["id"];

        $scope.init = function(){
            $scope.cfpaataarr = [];
            Data.get("cfpaata/" + $scope.id).then(function(results){
                $scope.cfpaata = results.cfpaata;
                $scope.cfpaata.customername = $scope.cfpaata.customername.replace(/[.\s]/g, '');
                $scope.cfpaata.customername = capitalizeFirstLetter($scope.cfpaata.customername);
                $scope.getcfchiticustomers();
            });
        }

        $scope.ordinal = function(no){
            return ordinal(no);
        }

        $scope.getcfchiticustomers = function(){

            Data.get("cfchiticustomers",{chiti:$scope.cfpaata.chiti}).then(function(results){
                $scope.cfchiticustomers = results.cfchiticustomers;
                for(i=0;i<$scope.cfchiticustomers.length;i++){
                    var tmp = {};
                    tmp.customer = $scope.cfchiticustomers[i].id;
                    $scope.cfchiticustomers[i].customername = $scope.cfchiticustomers[i].customername.replace(/[.]/g, '')
                    tmp.customername = ($scope.cfchiticustomers[i].cusno != 0)?
                    $scope.cfchiticustomers[i].customername + ' ' + $scope.cfchiticustomers[i].cusno :
                    $scope.cfchiticustomers[i].customername;
                    $scope.cfpaataarr.push(tmp);
                }
                console.log($scope.cfpaataarr);
                $scope.getcftrans();
            });
        }

        $scope.getcftrans = function(){
            var filter = {"chiti":$scope.cfpaata.chiti,"paata":$scope.cfpaata.id}
            Data.get("cftrans",filter).then(function(results){
                $scope.cftrans = results.cftrans;
                for(h=0;h<$scope.cfpaataarr.length;h++){
                    $scope.cfpaataarr[h].list = [];
                    for(k=0;k<$scope.cftrans.length;k++){
                        if($scope.cfpaataarr[h].customer == $scope.cftrans[k].customer){
                            var tmp ={};
                            tmp.id = $scope.cftrans[k].id;
                            tmp.date = $scope.cftrans[k].date;
                            tmp.credit = $scope.cftrans[k].credit;
                            tmp.debit = $scope.cftrans[k].debit;
                            tmp.note = $scope.cftrans[k].note;
                            $scope.cfpaataarr[h].list.push(tmp);
                        }
                    }
                }
                // if($scope.cftrans)
                console.log($scope.cfpaataarr);
            });
        }


        $scope.checkHigh = function(cf){
            return ($scope.getsum(cf.list,'debit') == 0)?
            (($scope.cfpaata.payamount - $scope.getsum(cf.list,'credit')) > 0?'highlight':'')
            : ($scope.cfpaata.repayamount  - $scope.getsum(cf.list,'debit')) > 0?'highlight':'';
        }


        $scope.getsum = function(obj,key){
            var total = 0;
            if(obj && obj.length){
                for(i=0;i<obj.length;i++){
                    total += Number(obj[i][key]) || 0;
                }
            }
            return total;
        }


        
        $scope.changeDateUserFormat= function(dt){
        
            if(dt){
                  return  changeDateUserFormat(dt);
                }
        }

    });


    app.controller('editcfpaataCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {

        $scope.init = function(){
            $scope.id = $routeParams["id"];
            $scope.getcfpaata();
            $scope.getcfchiti();
        }


        $scope.getcfpaata = function(){

            Data.get("cfpaata/"+$scope.id).then(function(results){
                $scope.paata = results.cfpaata;
                $scope.paata.date = changeDateUserFormat($scope.paata.date);
                $scope.paata.customername = $scope.paata.customername + ' ' + $scope.paata.cusno;
                $scope.getcustomerlist();
            });
        }


        $scope.getcfchiti = function(){
            Data.get("cfchiti").then(function(results){
                $scope.cfchiti = results.cfchiti;
            });
        }


        $scope.calcPaata = function(){
            if($scope.paata.paata>0){
                for(i=0;i<$scope.cfchiti.length;i++){
                    if($scope.paata.chiti == $scope.cfchiti[i].id){
                        $scope.paata.repayamount = Number($scope.cfchiti[i].amount) - Number($scope.paata.paata);
                        if($scope.cfchiti[i].amount == 50000){
                            $scope.paata.sripalcomm = 1100;
                            $scope.paata.sowjicomm = 1400;
                        }else{
                            $scope.paata.sripalcomm = 1000;
                            $scope.paata.sowjicomm = 0;
                        }
                        $scope.paata.payamount = (Number($scope.paata.repayamount) + Number($scope.paata.sripalcomm) + Number($scope.paata.sowjicomm))/20;
                    }
                }
            }
        }
        
        $scope.editPaata = function(){
            if($scope.editPaataForm.$valid){
                $scope.getcustomerid();
                $scope.paata.date = changeDateSQLFormat($scope.paata.date);
                console.log($scope.paata);
                Data.put('cfpaata/'+$scope.id,$scope.paata).then(function(results){
                    Data.toast(results);
                });
                $scope.init();
            }
        }


        $scope.initialiseDatePicker = function(id) {

            $('#' + id).daterangepicker({
                    locale: {
                        format: 'DD/MM/YYYY'
                    },
                    singleDatePicker: true,
                    showDropdowns: true,
                    autoUpdateInput: false,
    
                },
                function(start, end, label) {;
    
                    $('#' + id).val(start.format('DD/MM/YYYY'));
    
                })    
        }

        $('.date').on('apply.daterangepicker', function(ev, picker) {
            $scope.$apply(function() {
                $scope.paata.date = picker.startDate.format('DD/MM/YYYY');
            });
        });
        $scope.initialiseDatePicker('date');


        $scope.getcustomerlist = function(){
            console.log($scope.paata);
            Data.get("cfchiticustomers",$scope.paata.chiti).then(function(results){
                $scope.cfchiticustomers = results.cfchiticustomers;
                for(i=0;i<$scope.cfchiticustomers.length;i++){
                    if($scope.cfchiticustomers[i].cusno == 0){
                        $scope.cfchiticustomers[i].cusno = "";
                    }
                }
            });
        }
        
    $scope.getcustomerid = function(){
        console.log($scope.paata);
        if($scope.cfchiticustomers){
            for(i=0;i<$scope.cfchiticustomers.length;i++){
                console.log($scope.cfchiticustomers[i].customername + ' '+ $scope.cfchiticustomers[i].cusno + $scope.paata.customername + "hh");
                if($scope.cfchiticustomers[i].cusno = ""){
                    if($scope.cfchiticustomers[i].customername + ' '+ $scope.cfchiticustomers[i].cusno  == $scope.paata.customername ){
                        $scope.paata.customer = $scope.cfchiticustomers[i].id;
                        console.log($scope.paata);
                        break;
                    }
                }else{
                    if($scope.cfchiticustomers[i].customername + ' ' + $scope.cfchiticustomers[i].cusno  == $scope.paata.customername ){
                        $scope.paata.customer = $scope.cfchiticustomers[i].id;
                        console.log($scope.paata);
                        break;
                    }
                }
            }
        }
    }


    });


    
    app.controller('createcftransCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {
        $scope.init = function(){
            $scope.cftrans = {};
            $scope.cftrans.date = todayDate();
            // $scope.initialiseDatePicker('date');
            // $scope.cftrans.debit = 0;
            // $scope.cftrans.credit = 0;
            $scope.getcfchiti();    
            $scope.balancecus = [];
            // focusonTime("chiti");
        }

        $scope.getcfchiti = function(){
            Data.get("cfchiti").then(function(results){
                $scope.cfchiti = results.cfchiti;
            });
        }

        $scope.getcfpaata = function(){
            Data.get("cfpaata",{"chiti":$scope.cftrans.chiti,"sort_by":"a.no","sort_order":"asc"} ).then(function(results){
                $scope.paata = results.cfpaata;
                $scope.getcustomerlist();
            });
        }

        $scope.getcustomerlist = function(){
            console.log($scope.cftrans);
            $scope.balancecus = [];
            Data.get("cfchiticustomers",{"chiti":$scope.cftrans.chiti}).then(function(results){
                $scope.cfchiticustomers = results.cfchiticustomers;
                for(i=0;i<$scope.cfchiticustomers.length;i++){
                    $scope.cfchiticustomers[i].customername = finddot($scope.cfchiticustomers[i].customername);
                    if($scope.cfchiticustomers[i].cusno == 0){
                        $scope.cfchiticustomers[i].customername = $scope.cfchiticustomers[i].customername;
                    }else{
                        $scope.cfchiticustomers[i].customername = $scope.cfchiticustomers[i].customername + ' ' + $scope.cfchiticustomers[i].cusno;
                    }
                    var tmp = {};
                    tmp.customer = $scope.cfchiticustomers[i].id;
                    tmp.customername = $scope.cfchiticustomers[i].customername;
                    tmp.balance = 0;
                    $scope.balancecus.push(tmp);
                }
                console.log($scope.cfchiticustomers);
            });
        }


        $scope.getPendingcus = function(){
            console.log($scope.cftrans);
            var payamount = 0;
            for(n=0;n<$scope.paata.length;n++){
                if($scope.cftrans.paata == $scope.paata[n].id){
                    payamount = $scope.paata[n].payamount;
                }
            }
            if($scope.cftrans.paata){
                Data.get("cftrans",{paata:$scope.cftrans.paata,group_by:"a.customer",fields:"sum(credit) as credit"}).then(function(results){
                    $scope.trans = results.cftrans;
                    // for(k=0;k<$scope.paata.length;k++){
                        // if($scope.paata[k].id == $scope.cftrans.paata){
                            for(j=0;j<$scope.balancecus.length;j++){
                                var count = 0;
                                for(i=0;i<$scope.trans.length;i++){
                                    console.log($scope.balancecus[j].customer, "==", $scope.trans[i].customer);
                                    if($scope.balancecus[j].customer == $scope.trans[i].customer){
                                        console.log($scope.balancecus[j].customer,"->",$scope.balancecus[j].balance);
                                        console.log(Number($scope.trans[i].payamount) ,"-", Number($scope.trans[i].credit));
                                        $scope.balancecus[j].balance = payamount - Number($scope.trans[i].credit);
                                        console.log($scope.balancecus[j].balance);
                                        count = 1;
                                    }
                                }
                                if(count == 0){
                                    $scope.balancecus[j].balance = payamount;
                                }
                            }
                        // }
                    // }
                    console.log($scope.balancecus);
                });
            }
        }

        $scope.initialiseDatePicker = function(id) {

            $('#' + id).daterangepicker({
                    locale: {
                        format: 'DD/MM/YYYY'
                    },
                    singleDatePicker: true,
                    showDropdowns: true,
                    autoUpdateInput: false,
    
                },
                function(start, end, label) {;
    
                    $('#' + id).val(start.format('DD/MM/YYYY'));
    
                })    
        }

        $('.date').on('apply.daterangepicker', function(ev, picker) {
            $scope.$apply(function() {
                $scope.cftrans.date = picker.startDate.format('DD/MM/YYYY');
            });
        });
        $scope.initialiseDatePicker('date');

        $scope.createcftrans = function(){
            $scope.getcustomerid();
            if($scope.cftrans.credit > 0){
                $scope.cftrans.debit = 0;
            }else if($scope.cftrans.debit > 0){
                $scope.cftrans.credit = 0;
            }
            $scope.cftrans.date = changeDateSQLFormat($scope.cftrans.date);
            Data.post("cftrans",$scope.cftrans).then(function(results){
                Data.toast(results);
                if(results.status == "success"){
                    $scope.cftrans.date = changeDateUserFormat($scope.cftrans.date); 
                }
            });
        }


        $scope.getcustomerid = function(){
            if($scope.cfchiticustomers){
                for(i=0;i<$scope.cfchiticustomers.length;i++){
                    if($scope.cfchiticustomers[i].customername == $scope.cftrans.customername){
                        $scope.cftrans.customer = $scope.cfchiticustomers[i].id;
                        break;
                    }
                }
            }
        }

    });

    
    app.controller('getcftransCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {

        $scope.init = function(){
            $scope.display = 1;
            $scope.filterval = 0;
        }

        $scope.filterby = function(no){
            if(no == 1){
                $scope.filterval = 1;
                $scope.display = 2;
                focusonTime("chiti2",250);
            }else if(no == 2){
                $scope.filterval = 2;
                $scope.display = 3;
                focusonTime("customername",250);
                $scope.getcfcustomers();
            }
            $scope.getcfchiti();
        }

        

        $scope.getcfchiti = function(){
            Data.get("cfchiti").then(function(results){
                $scope.cfchiti = results.cfchiti;
            });
        }

        $scope.hey = function(){
            console.log('hi');
        }

        $scope.getPendingcus = function(){
            if($scope.cftrans.paata){
                Data.get("cftrans",{paata:$scope.cftrans.paata}).then(function(results){
                    $scope.trans = results.cftrans;
                    // for(i=0;i<$scope.trans.length;i++){
                        
                    // }
                });
            }
        }

        $scope.checkfilter = function(){
            if($scope.filterval == 1){
                $scope.getcfpaata();
            }else if($scope.filterval == 2){
                for(i=0;i<$scope.cfcustomers.length;i++){
                    if($scope.filter.customername == $scope.cfcustomers[i].fname + ' ' + $scope.cfcustomers[i].lname){
                        $scope.filter.customer = $scope.cfcustomers[i].id;
                    }
                }
                console.log($scope.filter);
                $scope.getcfchiticustomers();
                // $scope.chitiDisp = 0;
                $scope.display = 3;
            }
        }

        $scope.getcfchiticustomers = function(){
            var filter = {"customer":$scope.filter.customer,group_by:"a.chiti"};
            Data.get("cfchiticustomers",filter).then(function(results){
                $scope.cfchiticustomers = results.cfchiticustomers;
                Data.get("getnames",{customer:$scope.filter.customer}).then(function(results){
                    $scope.chitinames = results.chitinames;
                    $scope.customernames = results.customernames;
                    $scope.chitiDisp = $scope.chitinames[0].chiti;
                    $scope.cusDisp = $scope.customernames[0].customername + ' ' + $scope.customernames[0].cusno;
                });

                $scope.customersid = [];
                for(k=0;k<$scope.cfchiticustomers.length;k++){
                    $scope.customersid.push($scope.cfchiticustomers[k].id);
                }
                $scope.getcftrans();
            });
        }
        

        $scope.getcftrans = function(){
            Data.get("cftrans",{"customer":{"op": "In" ,value: $scope.customersid.toString()},"sort_by":"p.no","sort_order":"asc"}).then(function(results){
                $scope.cftrans = results.cftrans;
                
            });
        }

        $scope.getcfcustomers = function(){

            Data.get("cfcustomers").then(function(results){
                $scope.cfcustomers = results.cfcustomers;
            });
        }

        $scope.chitiDispfun = function(param,no){
            if(param == "chiti"){
                $scope.chitiDisp = no;
            }else if(param == "customer"){
                $scope.cusDisp = no;
            }
            console.log($scope.cusDisp,$scope.chitiDisp);
        }

        // $scope.getcustomerlist = function(){
        //     if($scope.filter.chiti){
        //         Data.get("cfchiticustomers",{"chiti":$scope.filter.chiti}).then(function(results){
        //             $scope.cfchiticustomers = results.cfchiticustomers;
        //             for(i=0;i<$scope.cfchiticustomers.length;i++){
        //                 if($scope.cfchiticustomers[i].cusno == 0){
        //                     $scope.cfchiticustomers[i].cusno = "";
        //                     // $scope.
        //                 }
        //             }
        //         });
        //     }
        // }

        $scope.getcfpaata = function(){
            var filter = {"sort_by":"a.no","sort_order":"asc" }
            Data.get("cfpaata",filter).then(function(results){
                $scope.cfpaata = results.cfpaata;
            });
        }



        $scope.changeDateUserFormat= function(dt){
        
            if(dt){
                  return  changeDateUserFormat(dt);
                }
        }
    
    });


    app.controller('editcftransCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {
        
        $scope.init = function(){
            $scope.id = $routeParams["id"];
            Data.get("cftrans/"+$scope.id).then(function(results){
                $scope.cftrans = results.cftrans;
                $scope.cftrans.date = changeDateUserFormat($scope.cftrans.date);
                $scope.getcfpaata();
                $scope.getcfchiti();
                console.log(typeof($scope.cftrans.paata));
            });
        }

        $scope.getcfpaata = function(){
            Data.get("cfpaata",{"chiti":$scope.cftrans.chiti}).then(function(results){
                $scope.paata = results.cfpaata;
                $scope.getcustomerlist();
            });
        }

        $scope.getcustomerlist = function(){
            console.log($scope.cftrans);
            Data.get("cfchiticustomers",{"chiti":$scope.cftrans.chiti}).then(function(results){
                $scope.cfchiticustomers = results.cfchiticustomers;
                for(i=0;i<$scope.cfchiticustomers.length;i++){
                    if($scope.cfchiticustomers[i].cusno == 0){
                        $scope.cfchiticustomers[i].cusno = "";
                    }
                }
            });
        }



        $scope.getcfchiti = function(){
            Data.get("cfchiti").then(function(results){
                $scope.cfchiti = results.cfchiti;
            });
        }


        $scope.getcustomerid = function(){
            if($scope.cfchiticustomers){
                for(i=0;i<$scope.cfchiticustomers.length;i++){
                    if($scope.cfchiticustomers[i].customername + ' ' + $scope.cfchiticustomers[i].cusno  == $scope.cftrans.customername){
                        $scope.cftrans.customer = $scope.cfchiticustomers[i].id;
                        break;
                    }
                }
            }
        }


        $scope.editcftrans = function(){
            $scope.submitted = 1;
            if($scope.editcftransForm.$valid){
                $scope.cftrans.date = changeDateSQLFormat($scope.cftrans.date);
                $scope.getcustomerid();
                Data.put("cftrans/"+$scope.id,$scope.cftrans).then(function(results){
                    Data.toast(results);
                });
            }
        }





        $scope.initialiseDatePicker = function(id) {

            $('#' + id).daterangepicker({
                    locale: {
                        format: 'DD/MM/YYYY'
                    },
                    singleDatePicker: true,
                    showDropdowns: true,
                    autoUpdateInput: false,
    
                },
                function(start, end, label) {;
    
                    $('#' + id).val(start.format('DD/MM/YYYY'));
    
                })    
        }

        $('.date').on('apply.daterangepicker', function(ev, picker) {
            $scope.$apply(function() {
                $scope.cftrans.date = picker.startDate.format('DD/MM/YYYY');
            });
        });
        $scope.initialiseDatePicker('date');


    });



    app.controller('createpaymentmodeCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {
        $scope.init = function(){
            $scope.paymentmode = [];
        }

    });

app.controller('createChitfundCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {

    $scope.chitfundtypes = [{id:1,type:"Weekly"},{id:2,type:"Monthly"}];


    $scope.createchitfund = function(){
        $scope.submitted =1;
        $scope.chitfund.date = changeDateSQLFormat($scope.chitfund.date);
        Data.post('chitfund',$scope.chitfund).then(function(results){
            $scope.response = results.message;
            Data.toast(results);
        });
    }



    $scope.getcustomerlist= function(){
        Data.get('customers',{chitfund: 1}).then(function(results){
            $scope.customers=results.customers;
        })
    }
    $scope.getcustomerlist();

    $scope.initiateCalendar = function() {
        $('.input-group.date').datepicker({
            format: 'dd/mm/yyyy',
            orientation: "auto"
        });
       
            $('.input-group.date').each(function() {
    //$(this).datepicker('setDate', $scope.filter.from_date);
    });
    }
    $scope.initiateCalendar();

});

app.controller('createchitiCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {
///$scope.customers = [
   // {id:1,name:"Durga"}, {id:2,name:"Padma"}, {id:3,name:"Mastaan"}
//]
//$scope.chiti= {nAme:0}
setTimeout(()=>{$('#customer').focus()},500);
$scope.customerarray = function(){
   for(i=0;i<$scope.customers.length;i++){
    if($scope.customers[i].id == $scope.chiti.customer){
        $scope.carray = $scope.customers[i];
        console.log($scope.carray);
    }
   }
}

$scope.setNextFocus = function(e, el, next,key){
    setNextFocus(e, el, next,key,$scope.chiti);
}


$scope.getcustomerlist= function(){
    Data.get('customers',{chitfund:{op:"!=", value:"1" }}).then(function(results){
        $scope.customers=results.customers;
    })
}
$scope.getcustomerlist();
$scope.chiti={status:1,customer:""};
$scope.chititypes = [{id:1,type:"90days"},{id:2,type:"Weekly"},{id:3,type:"10 Days"},{id:4,type:"Monthly"},{id:5,type:"Daily"}]

$scope.change = 0;
$scope.chck = function(){
    
    if($scope.chiti.tYpe == "4"){
        $scope.chiti.iscountable = "1";
    
    if($scope.chiti.aMount <= "40000"){
        $scope.chiti.pdwtm = getWholePercent($scope.chiti.aMount ,"7");
        console.log("came")
        if(!$scope.change){
            $scope.chiti.interestrate = "7";
            $scope.change = 1;
        }

        if($scope.chiti.aMount && $scope.chiti.interestrate ){
            $scope.chiti.interestrate = $scope.chiti.interestrate.replace(/[^a-zA-Z0-9.]/g, "");//[^0-9a-zA-Z.]/g
            $scope.chiti.pdwtm = $scope.chiti.aMount * $scope.chiti.interestrate/100;

        }
        if($scope.chiti.aMount>0 && $scope.chiti.interestrate>0 ){
            $scope.chiti.pdwtm = Number($scope.chiti.aMount)*Number($scope.chiti.interestrate)/100;
            $scope.chiti.note = Number($scope.chiti.aMount)/1000 +"K @ " + $scope.chiti.interestrate + "% P.M \n"  +  $scope.carray.Firstname + ' ' +$scope.carray.LastName+'('+$scope.carray.HamiFirstName+')' + " took " + $scope.chiti.aMount + '(' + $scope.chiti.ccomm + ')' + " @ " + $scope.chiti.interestrate + "% P.M " ;
        }
        // if($scope.carray.hami != "30" && $scope.carray.hami != "90"){
        //     $scope.chiti.sowji = Number($scope.chiti.aMount)/100;
        // }
        if($scope.carray.hami == "90"){
            $scope.chiti.suri = Number($scope.chiti.aMount)/100;
        }
    }

    }else if($scope.chiti.tYpe == "5"){
        console.log($scope.chiti);
        $scope.chiti.sowji = 0;
        $scope.chiti.fullandevi = 0;
        $scope.chiti.suri = 0;
        $scope.chiti.iscountable = 2;
        $scope.chiti.days = 1;  
        if($scope.chiti.aMount && $scope.chiti.interestrate ){
            $scope.chiti.interestrate = $scope.chiti.interestrate.replace(/[^a-zA-Z0-9 ]/g, "");
            $scope.chiti.pdwtm = $scope.chiti.aMount * $scope.chiti.interestrate/100;

        }
        console.log($scope.chiti.aMount>0 ,$scope.chiti.interestrate>0);
        console.log($scope.chiti.aMount ,$scope.chiti.interestrate);
        if($scope.chiti.aMount>0 && $scope.chiti.interestrate>0 ){
            $scope.chiti.pdwtm = Number($scope.chiti.aMount)*Number($scope.chiti.interestrate)/100;
            $scope.chiti.note = Number($scope.chiti.aMount)/1000 +"K @ " + $scope.chiti.interestrate + "% P.D \n"  +  $scope.carray.Firstname + ' ' +$scope.carray.LastName+'('+$scope.carray.HamiFirstName+')' + " took " + $scope.chiti.aMount + '(' + $scope.chiti.ccomm + ')' + " @ " + $scope.chiti.interestrate + "% P.D " ;
        }
        
    }

    if($scope.carray.hami != 90 && $scope.carray.hami != "30"){
        $scope.chiti.ccomm = $scope.chiti.aMount * 5/100;
    }
    if($scope.carray.hami == "90"){
        $scope.chiti.ccomm = $scope.chiti.aMount * 2.5 / 100 ;
        $scope.chiti.suriccomm = $scope.chiti.aMount * 2.5 / 100 ;
    }
}

$scope.initiateCalendar = function() {
    $('.input-group.date').datepicker({
        format: 'dd/mm/yyyy',
        orientation: "auto"
    });
   
    $('.input-group.date').each(function() {
    //$(this).datepicker('setDate', $scope.filter.from_date);
    });
}
$scope.initiateCalendar();

$scope.createchiti = function(){
    $scope.submitted=1;
    if($scope.chitiform.$valid){
        $scope.chiti.dAte = changeDateSQLFormat($scope.chiti.dAte);
    if($scope.carray.hami == "30" || $scope.carray.hami == "90"){
        $scope.chiti.sowji = 0;
    }
    Data.post('chiti',$scope.chiti).then(function(results){
        $scope.response=results.message;
        Data.toast(results);
        $scope.chitinull();
    });
    }
}


$scope.chitinull =  function(){
    // console.log($scope.chiti);
    $scope.chiti.customer ="";
    $scope.chiti.code = "";
    $scope.chiti.dAte = "";
    $scope.chiti.tYpe = "";
    $scope.chiti.iscountable = 1;
    $scope.chiti.status = 1;
    $scope.chiti.aMount = 0;
    $scope.chiti.pdwtm = "";
    $scope.chiti.sowji = 0;
    $scope.chiti.suri = 0;
    $scope.chiti.fullandevi = 0;
    $scope.chiti.interestrate = "";
    $scope.chiti.days = "";
    $scope.chiti.ccomm = 0;
    $scope.chiti.suriccomm = 0;
    $scope.chiti.note = "";
    
}

});

app.controller('receivedCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {

    $scope.getreceivedlist = function(){
        
            $('#receivedmodal').modal("hide");
        console.log("hi");
        if($scope.filter){
            $scope.filter ={limit:"100" ,rcvddate:setDateFilter($scope.filter), "sort_by":"a.rcvddate","sort_order":"asc" };
        }else if($scope.fromid || $scope.toid){
            $scope.filter ={limit:"100" , id:{value:$scope.fromid ,value1:$scope.toid,op:"Between"} , "sort_by":"a.rcvddate","sort_order":"asc"};
        }else{
            $scope.filter ={limit:"100"}; 
        }
        
        Data.get('receivedamount',$scope.filter).then(function(results){
            $scope.receivedamount  = results.receivedamount;
        });
    }
    
    $scope.getreceivedlist();


    $scope.initiateCalendar = function() {
        $('.input-group.date').datepicker({
            format: 'dd/mm/yyyy',
            orientation: "auto"
        });
       
            $('.input-group.date').each(function() {
    //$(this).datepicker('setDate', $scope.filter.from_date);
    });
    }
    $scope.initiateCalendar();

    $scope.changeDateUserFormat= function(dt){
        
        if(dt){
              return  changeDateUserFormat(dt);
            }
    }

});




app.controller('getcustomersCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {
    $scope.gethamilist= function(){
        var filter= {ishami:1}
        Data.get('customers',{chitfund:{op:"!=", value:"1" }}).then(function(results){
            Data.toast(results);
            $scope.hami=results.customers;
        })
    }
     
    $scope.getcustomerlist= function(){
        $("#customermodal").modal('hide');
        Data.get('customers',$scope.filter).then(function(results){
            $scope.customers=results.customers;
            if($scope.customers.length){
                for(i=0;i<$scope.customers.length;i++){
                    $scope.customers[i].isproof = 0;
                    $scope.customers[i].proof = 0;
                    if($scope.customers[i].aadhar == 1){
                        $scope.customers[i].proof = "Aadhar"
                        $scope.customers[i].isproof = 1;
                    }
                    if($scope.customers[i].passbook == 1){
                        if($scope.customers[i].isproof == 1){
                            $scope.customers[i].proof += " , Passbook";
                        }else{
                            $scope.customers[i].proof = "Passbook";
                            $scope.customers[i].isproof = 1;
                        }                
                    }
                    if($scope.customers[i].debitcard == 1){
                        if($scope.customers[i].isproof == 1){
                            $scope.customers[i].proof += " , Debit card";
                        }else{
                            $scope.customers[i].proof = "Debit card";
                            $scope.customers[i].isproof = 1;
                        }                
                    }
                    if($scope.customers[i].cheque == 1){
                        if($scope.customers[i].isproof == 1){
                            $scope.customers[i].proof += " , Cheque";
                        }else{
                            $scope.customers[i].proof = "Cheque";
                            $scope.customers[i].isproof = 1;
                        }                
                    }
                    if($scope.customers[i].pnote == 1){
                        if($scope.customers[i].isproof == 1){
                            $scope.customers[i].proof += " , Promissory Note";
                        }else{
                            $scope.customers[i].proof = "Promissory Note";
                            $scope.customers[i].isproof = 1;
                        }                
                    }
                    if($scope.customers[i].greensheet == 1){
                        if($scope.customers[i].isproof == 1){
                            $scope.customers[i].proof += " , Green sheet";
                        }else{
                            $scope.customers[i].proof = "Green sheet";
                            $scope.customers[i].isproof = 1;
                        }                
                    }
                }
            }
        });
        $scope.gethamilist();
    }
    $scope.getcustomerlist();



});

app.controller('customerCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {
    $scope.id = $routeParams['id'];
    $scope.filter={customer:$scope.id}
    $scope.proof = "";
    $scope.isproof = 0;
    $scope.status= 1;
    $scope.getcustomerlist= function(){
        Data.get('customer/'+$scope.id).then(function(results){
            // Data.toast(results);
            $scope.customer=results.customer;
            if($scope.customer.aadhar == 1){
                $scope.proof = "Aadhar"
                $scope.isproof = 1;
            }
            if($scope.customer.passbook == 1){
                if($scope.isproof == 1){
                    $scope.proof += " , Passbook" 
                }else{
                    $scope.proof = "Passbook" 
                    $scope.isproof = 1;
                }                
            }
            if($scope.customer.debitcard == 1){
                if($scope.isproof == 1){
                    $scope.proof += " , Debit card" 
                }else{
                    $scope.proof = "Debit card" 
                    $scope.isproof = 1;
                }                
            }
            if($scope.customer.cheque == 1){
                if($scope.isproof == 1){
                    $scope.proof += " , Cheque" 
                }else{
                    $scope.proof = "Cheque" 
                    $scope.isproof = 1;
                }                
            }
            if($scope.customer.pnote == 1){
                if($scope.isproof == 1){
                    $scope.proof += " , Promissory Note" 
                }else{
                    $scope.proof = "Promissory Note" 
                    $scope.isproof = 1;
                }                
            }
            if($scope.customer.greensheet == 1){
                if($scope.isproof == 1){
                    $scope.proof += " , Green sheet" 
                }else{
                    $scope.proof = "Green sheet" 
                    $scope.isproof = 1;
                }                
            }
            $scope.getchitilist();
        })
        
    }
    $scope.getcustomerlist();

    $scope.getchitilist= function(){
        $scope.filter1={customer:$scope.id,status:$scope.status,"sort_by":"a.date" , "sort_order":"asc"}
        Data.get('chiti',$scope.filter1).then(function(results){
            // Data.toast(results);
            $scope.chiti=results.chiti;

        })
    }

    
    $scope.chititype=["90 Days","Weekly","10 Days","Monthly","Daily" ];
    $scope.changeDateUserFormat= function(dt){
        
        if(dt){
              return  changeDateUserFormat(dt);
        }
        }
    
        $scope.pertype=["Day","Week","10 Days","Month" ];

});

app.controller('chitfundCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {
    $scope.chitfundtypes = ["Weekly","Monthly"];
    $scope.status = ["Pending","Closed"];
$scope.id = $routeParams["id"];
$scope.getchitfund = function(){
    Data.get('chitfund/'+$scope.id).then(function(results){
        Data.toast(results);
        $scope.chitfund = results.chitfund;
    });
    $scope.getdrcr();
}

$scope.getdrcr = function(){
    Data.get('drcr',{chitfundid:$scope.id}).then(function(results){
        Data.toast(results);
        $scope.drcr = results.drcr;
    });
}

$scope.changeDateUserFormat= function(dt){
    if(dt){
          return  changeDateUserFormat(dt);
    }
    }

$scope.closechitistatus = function(){
    $("#statusremmodal").modal("hide");
    $scope.chitfund.status = "1";
    Data.put('chitfund/'+$scope.id ,$scope.chitfund).then(function(results){
        $scope.cmessage = results.message;
    })
    
    
    
}


$scope.pendingchitistatuschiti = function(){
    $scope.chitfund.status = 0;
    Data.put('chitfund/'+$scope.id ,$scope.chitfund).then(function(results){
        $scope.cmessage = results.message;
    })   
}

});


app.controller('chitiCtrlold', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {
    $scope.chititypes=[{id:1,type:"90 days"},{id:2,type:"weekly"},{id:3,type:"10 days"},{id:4,type:"Monthly"},{id:5 , type:"daily"}];
    $scope.id = $routeParams['id'];
   
    $scope.filter = {chiti: $scope.id}
    $scope.sss = 0;

    $scope.getsinglechiti = function(){
        Data.get('chiti/'+$scope.id).then(function(results){
            Data.toast(results);
            $scope.chiti = results.chiti;
            $scope.getasalulist();
            $scope.getsowji();
            $scope.getcollectionlist();
        });
    }

    $scope.rfilter = { chiti:$scope.id,"sort_by":"a.rcvddate" , "sort_order":"asc"  }
    Data.get('receivedamount',$scope.rfilter).then(function(results){
        $scope.receivedamount = results.receivedamount;
        console.log($scope.receivedamount);
    });
/*
$scope.clpen = function(){
    console.log("hi",cid);
    if($scope.chiti[cid].status == 1){
        return green ; 
    }else{
        return red;
    }
}
*/
$scope.print = function() {
    $(".noprint").hide();
    // $(".printtable").removeClass("table-responsive");
    // $(".condition").addClass("terms");
    window.print();
    // $(".condition").removeClass("terms");
    // $(".printtable").addClass("table-responsive");
    $(".noprint").show();
}


$scope.updatenotes = function(colid){
    if(confirm("Are you sure you want to update the notes?")){
        if(colid){
            var filter = {chiti:$scope.chiti.id,colid:colid,sort_by:"a.rcvddate",sort_order:"asc",limit:1000}
            Data.get("receivedamount",filter).then(function(results){
                $scope.notesrcvdamt = results.receivedamount;
                if($scope.notesrcvdamt){
                    for(i=0;i<$scope.notesrcvdamt.length;i++){
                        if(i==0){
                            var notes = $scope.notesrcvdamt[i].amount + "(" + changeDateUserFormat($scope.notesrcvdamt[i].rcvddate) + ")" ; 
                        }else{
                            var dtt = changeDateUserFormat($scope.notesrcvdamt[i].rcvddate);
                            notes += " + " + $scope.notesrcvdamt[i].amount + "(" + dtt + ")" ; 
                        }
                    }

                    if(notes){    
                        Data.put("collection/"+colid,{notes:notes}).then(function(results){
                            Data.toast(results);
                            $scope.init();
                        });
                    }
                }
            });
        }
    }
}




$scope.getsowji = function(){
    $scope.displaysowjicom = 0;
    $scope.sowjidata = {chiti : $scope.chiti.id }
    Data.get('sowji',$scope.sowjidata).then(function(results){
        $scope.getsowjid = results.sowji;
        console.log($scope.getsowjid);
        if($scope.getsowjid){
            console.log("1");
            if($scope.getsowjid.length>0){
                console.log("2");
                $scope.displaysowjicom = 1;
            }
        }
        
    });
}





$scope.rcvdcolpopup = function(action,colid){
    // console.log(action,colid)
    if(action == "open"){
        popupAnim("rcvdcolpopup","open");
        $scope.getcustomerlist();  
        $scope.rcvd = {};
        $scope.rcvd.customer = $scope.chiti.customer;
        $scope.rcvd.chiti = $scope.chiti.id;
        $scope.rcvd.amount = $scope.chiti.pdwtm;
        $scope.rcvd.collectionarr = [];
        $scope.rcvd.note = "Paid for id's " + colid;
        $scope.rcvd.colid = colid;
    }else{
        popupAnim("rcvdcolpopup","close");
    }
}

$scope.getcustomerlist = function(){
    Data.get('customers',{chitfund:{op:"!=", value:"1" }}).then(function(results){
        $scope.customers = results.customers;
    });
}

$scope.creatercvd = function(){
    $scope.submitted = 1;
    if($scope.creatercvdForm.$valid){
        $scope.rcvd.rcvddate = changeDateSQLFormat($scope.rcvd.rcvddate);
        $scope.rcvd.collectionarr = [];
        console.log($scope.rcvd);
        Data.post('receivedamount',$scope.rcvd).then(function(results){
            Data.toast(results);            
            collectionid = [];
            collectionid.push($scope.rcvd.colid);
            Data.post('receivedcollection',{collectionsowji : 0,cid:collectionid,receivedfrom:$scope.rcvd.customer ,rcvddate:$scope.rcvd.rcvddate,notes:$scope.rcvd.note1}).then(function(results){
                Data.toast(results);
                if(results.status == "success"){
                    popupAnim("rcvdcolpopup","close");
                }
            });        
        });
    }
    
}



$scope.addmonthcol = function(){
    $("#addmonthmodal").modal("hide"); 
    $scope.submitted =1;
    if($scope.addmonthcolform.$valid){
        $scope.data= {noof: $scope.noof,dAte:$scope.lastdate ,chiti:$scope.id,sowji:$scope.sowjicomm,customer:$scope.chiti.customer,pdwtm:$scope.intamt,suri:$scope.suricomm}
        Data.post('collection',$scope.data).then(function(results){
            Data.toast(results);            
        });
    }
    $scope.getcollectionlist();
}

$scope.getasalulist = function(){
    $scope.remainingasalu = 0;
    if($scope.chiti){
        $scope.asalufilter= {chiti:$scope.chiti.id,"sort_by":"a.date","sort_order":"asc"};
        Data.get('asalu',$scope.asalufilter).then(function(results){
            $scope.getasalu =results.asalu;
            $scope.chiti.chitiamount += $scope.getsum($scope.getasalu,"chitiamount")
            $scope.asaluttl = $scope.getsum($scope.getasalu,"amount");
            $scope.chitiamountttl = $scope.getsum($scope.receivedamount,"amount");
          if($scope.chiti.tYpe==1){
            $scope.remainingasalu = Number($scope.chiti.chitiamount) - Number($scope.asaluttl)+Number($scope.chitiamountttl);
          }else{
            $scope.remainingasalu = Number($scope.chiti.chitiamount) - Number($scope.asaluttl);
          }

        });
    }

}


    $scope.getsinglechiti();
    $scope.getcollectionlist = function(){
        
        $scope.filter1 = {chiti: $scope.id,received:$scope.collstat}
        Data.get('collection',$scope.filter1).then(function(results){
            $scope.collection = results.collection;
            //find the pending number of  collection till today date
            $scope.pendingcollection =[];
            if($scope.collection){
                for(i=0;i<$scope.collection.length;i++){
                
                    var dt = new Date();
                    mon = dt.getMonth()+1;
                    dte = dt.getDate();
                    if(dte<10){
                        dte = "0"+dte;
                    }
                    if(mon<10){
                        mon = "0"+mon;
                    }
                    var dtt = dt.getFullYear() + '-' + mon + '-' + dte;
                    if($scope.collection[i].received == 0 && $scope.collection[i].date <= dtt){
                        $scope.pendingcollection.push($scope.collection[i]);
                    }
                }
                 //find the pending number of  collection till today date
                 $scope.lastdate = $scope.collection[$scope.collection.length-1].date;
                var dd = $scope.getsum($scope.collection,"received");
                if(dd == $scope.collection.length && $scope.chiti.status==1){
                    console.log($scope.chiti.tYpe);
                    if($scope.chiti.tYpe >= 4){
                        if($scope.remainingasalu == 0){
                            $("#statusremmodal").modal();
                        }
                    }else{
                        $("#statusremmodal").modal();
                    }
                }
            }

         

        });
       
    }
    

    $scope.deletechiti = function(){
        var result = confirm("Are you sure you want to delete the chiti");
        if(result == true){
            Data.delete('chiti/'+$scope.chiti.id).then(function(results){
                Data.toast(results);
                $scope.response = results.message;
            })
        }
        
    }
   
    
    $scope.closechitistatus = function(){
        $("#statusremmodal").modal("hide");
        $scope.chiti.status = "2";
        Data.put('chiti/'+$scope.id ,$scope.chiti).then(function(results){
            Data.toast(results);
            $scope.cmessage = results.message;
        })
        if($scope.chiti.iscountable == 2 &&  $scope.displaysowjicom ==0){
            $("#sowjicommmodal").modal();
            $scope.sowji = {};
            
        }
        
        
    }


    $scope.pendingchitistatuschiti = function(){
        $scope.chiti.status = "1";
        Data.put('chiti/'+$scope.id ,$scope.chiti).then(function(results){
            Data.toast(results);
            $scope.cmessage = results.message;
        })   
    }

    $scope.addsowjicomm = function(){
         $("#sowjicommmodal").modal('hide');
        $scope.sowji = {date : $scope.sowji.date, chiti:$scope.chiti.id , amount : $scope.getsum($scope.collection,"sowji") ,note: $scope.sowji.note };
        Data.post('sowji',$scope.sowji).then(function(results){
            Data.toast(results);
            $scope.response = results.message;
        });
    }

    $scope.addasalu = function(){
        $("#addasalumodal").modal('hide');
      $scope.asaludata = {date:changeDateSQLFormat($scope.asaludate) , customer: $scope.chiti.customer,customername: $scope.chiti.customername,amount:$scope.asaluamount , chiti:$scope.chiti.id,note:$scope.asalunote};
        console.log($scope.asaludata);
        Data.post('asalu',$scope.asaludata).then(function(results){
            Data.toast(results);
            $scope.rresponse = results.message;

            // if(results[39] == "i" && results[40] == "d" ){
                $scope.resasaluid = results.id;//results[43]+results[44] ;
                $scope.filter = { customer:$scope.chiti.customer, amount : $scope.asaluamount,rcvddate:changeDateSQLFormat($scope.asaludate),asalu:"1",asaluid: $scope.resasaluid ,chiti:$scope.chiti.id ,note:$scope.asalunote}
                Data.post('receivedamount',$scope.filter).then(function(results){
                    Data.toast(results);
                    $scope.rcvdamtresponse = results.message;
                    $scope.getasalulist();
            });
            // }else{
            //     alert("Din't got ID")
            // }

    });
    }

    $scope.addamountinchiti = function(){
 $("#addasalumodal1").modal('hide');
      $scope.asaludata = {date:changeDateSQLFormat($scope.asaludate) , customer: $scope.chiti.customer,customername: $scope.chiti.customername,chitiamount:$scope.asaluchitiamount , chiti:$scope.chiti.id,note:$scope.asalunote};
        console.log($scope.asaludata);
        Data.post('asalu',$scope.asaludata).then(function(results){
            Data.toast(results);
            $scope.rrresponse = results.message; 
    });

    }


    $scope.pressadmonbtn = function(){
        $("#statusremmodal").modal("hide");
        $("#addmonthmodal").modal();
    }
    $scope.changeDateUserFormat= function(dt){
        
        if(dt){
              return  changeDateUserFormat(dt);
        }
        }
        
        $scope.getsum = function(obj,key){
            var total = 0;
            if(obj && obj.length){
                for(i=0;i<obj.length;i++){
                    total += Number(obj[i][key]) || 0;
                }
            }
            return total;
        }

        $scope.initiateCalendar = function() {
            $('.input-group.date').datepicker({
                format: 'dd/mm/yyyy',
                orientation: "auto"
            });
           
                $('.input-group.date').each(function() {
                    //$(this).datepicker('setDate', $scope.filter.from_date);
                });
        }


        $scope.initiateCalendar();

        $scope.todaydiffdate = function(){
            d = new Date();
            mon =d.getMonth()+1 ;
            dte = d.getDate();
            month="";
            dtte = "";
            if(mon<10){
                mon = "0"+mon;
            }
             if(dte<10){
                console.log(dte);
                dte = "0"+dte ;
            }
             $scope.diff.date = dte + '/' + mon + '/' + d.getFullYear();
         }

        $scope.asalu=[];
        $scope.todaydate = function(){
            d = new Date();
            mon =d.getMonth()+1 ;
            dte = d.getDate();
            month="";
            dtte = "";
            if(mon<10){
                mon = "0"+mon;
            }
             if(dte<10){
                console.log(dte);
                dte = "0"+dte ;
            }
             $scope.asaludate = dte + '/' + mon + '/' + d.getFullYear();
             $scope.sowji.date = dte + '/' + mon + '/' + d.getFullYear();
         }
         $scope.yesterdaydate = function(){
             d = new Date();
            d.setDate(d.getDate()-1);
            dte = d.getDate();
            if(dte<10){
                dte = "0"+ dte;
            }
            mon =d.getMonth()+1 ;
            month="";
            if(mon<10){
                month = "0"+mon;
            }
             $scope.asaludate = dte + '/' + month+ '/' + d.getFullYear();
             $scope.sowji.date = dte + '/' + mon + '/' + d.getFullYear();
          }
          $scope.DByesterdaydate = function(){
             d = new Date();
             d.setDate(d.getDate()-2);
             dte = d.getDate();
            if(dte<10){
                dte = "0"+ dte;
            }
            mon =d.getMonth()+1 ;
            if(mon<10){
                mon = "0"+mon;
            }
             $scope.asaludate = dte + '/' + mon+ '/' + d.getFullYear();
             $scope.sowji.date = dte + '/' + mon + '/' + d.getFullYear();
          }
          $scope.D2Byesterdaydate = function(){
             d = new Date();
             d.setDate(d.getDate()-3);
             dte = d.getDate();
            if(dte<10){
                dte = "0"+ dte;
            }
            mon =d.getMonth()+1 ;
            if(mon<10){
                mon = "0"+mon;
            }
             $scope.asaludate = dte + '/' + mon+ '/' + d.getFullYear();
             $scope.sowji.date = dte + '/' + mon + '/' + d.getFullYear();
          }

        $scope.datediffcol = function(){
            if($scope.diff.date && $scope.diff.amt){
               $scope.diff.result = datediff(changeDateUserFormat($scope.chiti.date),$scope.diff.date) * $scope.diff.amt;
            }
            
        }


$scope.chititype=["90 Days","Weekly","10 Days","Monthly","Daily" ];
$scope.pertype=["Day","Week","10 Days","Month" ];
$scope.status = ["Pending","Closed"];
$scope.yesno = ["No","Yes" ];
$scope.diff = [];
});


app.controller('chitiCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {
    $scope.paramcolid = $routeParams['collid'];

    $scope.init = function(){
        $scope.chititypes=[{id:1,type:"90 days"},{id:2,type:"weekly"},{id:3,type:"10 days"},{id:4,type:"Monthly"},{id:5 , type:"daily"}];
        $scope.id = $routeParams['id'];
        $scope.ascdsc = 1;
        $scope.filter = {chiti: $scope.id}
        $scope.sss = 1;
        $scope.getsinglechiti();
        $scope.rcvdfilter = 1;
        $scope.getreceivedamount(1);
        // $scope.getpaymentmodelist();
    }

    $scope.sendWhatsapp = function(){
        var msg = "*" + $scope.chiti.customername+ "(" + $scope.chiti.haminame + ")(" + $scope.chiti.code + ")*";
        ($scope.remainingasalu)?msg += ": Remaining Asalu - " + $scope.remainingasalu:"";
        var collttl = $scope.getsum($scope.collection,"amount");
        var rcvdcollttl = 0;
        for(t=0;t<$scope.receivedamount.length;t++){
            if(!$scope.receivedamount[t].asalu){
                rcvdcollttl += Number($scope.receivedamount[t].amount);
            }
        }
    
        if(collttl > rcvdcollttl){
            msg += ": Remaining Int - " + (Number(collttl) - Number(rcvdcollttl));
            var from_date = ""; to_date = ""; singleMonth = false;
            for(m=0;m<$scope.collection.length;m++){
                if(!$scope.collection[m].received && from_date == ""){
                    from_date = changeDateUserFormat($scope.collection[m].date);
                    if(m == ($scope.collection.length - 1)){
                        singleMonth = true;
                    }
                }else if(m == ($scope.collection.length - 1)){
                    to_date = changeDateUserFormat($scope.collection[m].date);
                }
            }
            msg +=  (singleMonth)?" of " + from_date:" From " + from_date + " to " + to_date;
        }
    
    
        window.open(
            "https://api.whatsapp.com/send?phone=+919618536361&text="+msg,
            "_blank");        
    }


    $scope.plusNotes = function(ind){
        if(ind > 0 && confirm("Are you sure! you want to change notes")){
            console.log($scope.id,$scope.getasalu[ind-1].id);
            filter = {"action" : "plus","chiti":$scope.id,"asaluid":$scope.getasalu[ind-1].id,"totalamount":$scope.chiti.chitiamount}
            Data.put('multiupdatenotes',filter).then(function(results){ 
                Data.toast(results);
                if(results.status == "success"){
                    $scope.init();
                }
            });
            // if($scope.getasalu[ind-1].note.indexOf(',')){

            // }else if($scope.getasalu[ind-1].note.indexOf('-')){

            // }else if(!isNaN($scope.getasalu[ind-1].note)){

            // }
        }
    }


    $scope.getsinglechiti = function(){
        Data.get('chiti/'+$scope.id).then(function(results){
            Data.toast(results);
            $scope.chiti = results.chiti;
            $scope.getasalulist();
            $scope.getsowji();
        });
    }


    $scope.chckparam = function(cid){
        // console.log(cid , $scope.paramcolid);
        if(cid == $scope.paramcolid){
            return "danger";
        }
        return false;
    }


    
    $scope.getreceivedamount = function(filter){
        // console.log(filter);
        if(filter == 1){
            $scope.rfilter = {"chiti" :$scope.id,"sort_by":"a.rcvddate" , "sort_order":"desc"}
        }else if(filter == 2){
            $scope.rfilter = {"chiti" :$scope.id,"sort_by":"a.rcvddate" , "sort_order":"desc" , group_by:"a.rcvddate",fields:"sum(a.amount) as amount"}
        }else if(filter == 3){
            if($scope.rcvdfilter == 1){
                $scope.rfilter = {"chiti" :$scope.id,"sort_by":"a.rcvddate" , "sort_order":"asc"}
            }else{
                $scope.rfilter = {"chiti" :$scope.id,"sort_by":"a.rcvddate" , "sort_order":"asc" , group_by:"a.rcvddate",fields:"sum(a.amount) as amount"}
            }
            $scope.ascdsc = 2;
        }else if(filter == 4){
            if($scope.rcvdfilter == 1){
                $scope.rfilter = {"chiti" :$scope.id,"sort_by":"a.rcvddate" , "sort_order":"desc"}
            }else{
                $scope.rfilter = {"chiti" :$scope.id,"sort_by":"a.rcvddate" , "sort_order":"desc" , group_by:"a.rcvddate",fields:"sum(a.amount) as amount"}
            }
            $scope.ascdsc = 1;
        }
        Data.get('receivedamount',$scope.rfilter).then(function(results){
            $scope.receivedamount = results.receivedamount;
            // console.log($scope.receivedamount);
        });
    }
/*
$scope.clpen = function(){
    console.log("hi",cid);
    if($scope.chiti[cid].status == 1){
        return green ; 
    }else{
        return red;
    }
}
*/

    // $scope.getpaymentmodelist = function(){

    //     Data.get("paymentmodes").then(function(results){
    //         $scope.paymentmodelist = results.paymentmode;
    //     })
    // }

    $scope.updatenotes = function(colid,colamt){
        if(confirm("Are you sure you want to update the notes?")){
            if(colid){
                var filter = {chiti:$scope.chiti.id,colid:colid,sort_by:"a.rcvddate",sort_order:"asc",limit:1000}
                Data.get("receivedamount",filter).then(function(results){
                    $scope.notesrcvdamt = results.receivedamount;
                    if($scope.notesrcvdamt){
                        var rcvdttl = 0;
                        for(i=0;i<$scope.notesrcvdamt.length;i++){
                            rcvdttl += $scope.notesrcvdamt[i].amount;
                            if(i==0){
                                var notes = $scope.notesrcvdamt[i].amount + "(" + changeDateUserFormat($scope.notesrcvdamt[i].rcvddate) + ")" ; 
                            }else{
                                var dtt = changeDateUserFormat($scope.notesrcvdamt[i].rcvddate);
                                notes += " + " + $scope.notesrcvdamt[i].amount + "(" + dtt + ")" ; 
                            }
                        }
                        if(rcvdttl){
                            notes += " = " + rcvdttl ; 
                        }
                        if(notes){  
                            var datatemp = {notes:notes};
                            if(rcvdttl < colamt){
                                datatemp.received = "0";
                                datatemp.rcvddate = " ";
                                datatemp.receivedfrom = "0";
                            }

                            Data.put("collection/"+colid,datatemp).then(function(results){
                                Data.toast(results);
                                $scope.init();
                            });
                        }
                    }
                });
            }
        }
    }

    $scope.dailycolinit = function(){
        $scope.daily = {
            "date": todayDate(),
            "amount" : "",
            "note" : ""
        }
        
        if($scope.getasalu.length > 0 && $scope.getasalu[$scope.getasalu.length - 1].note){
            if ($scope.getasalu[$scope.getasalu.length - 1].note.toString().includes(',')){ 
                var tmp = $scope.getasalu[$scope.getasalu.length - 1].note.split(',');
                $scope.daily.notes = Number(Number(tmp[tmp.length - 1])) + 1;
            }else if($scope.getasalu[$scope.getasalu.length - 1].note.toString().includes('-')){
                var tmp = $scope.getasalu[$scope.getasalu.length - 1].note.split('-');
                $scope.daily.notes = Number(Number(tmp[tmp.length - 1])) + 1;
            }else{
                $scope.daily.notes = Number($scope.getasalu[$scope.getasalu.length - 1].note) + 1;                    
            } 
        }
        $scope.daily.amount = $scope.getasalu[$scope.getasalu.length - 1].amount;
        $("#dailycolmodal").modal(); 

    }


    $scope.dailycol = function(){
        $scope.submitted = 1;
        if($scope.dailycolForm.$valid){
            
        }
    }
        

    $scope.print = function() {
        $(".noprint").hide();
        // $(".printtable").removeClass("table-responsive");
        // $(".condition").addClass("terms");
        window.print();
        // $(".condition").removeClass("terms");
        // $(".printtable").addClass("table-responsive");
        $(".noprint").show();
    }

    $scope.getsowji = function(){
        $scope.displaysowjicom = 0;
        $scope.sowjidata = {chiti : $scope.chiti.id }
        Data.get('sowji',$scope.sowjidata).then(function(results){
            $scope.getsowjid = results.sowji;
            // console.log($scope.getsowjid);
            if($scope.getsowjid){
                // console.log("1");
                if($scope.getsowjid.length>0){
                    // console.log("2");
                    $scope.displaysowjicom = 1;
                }
            }
            
        });
    }





$scope.rcvdcolpopup = function(action,colid,amt){
    console.log(action,colid,amt);
    if(action == "open"){
        popupAnim("rcvdcolpopup","open");
        $scope.getcustomerlist();  
        $scope.rcvd = {};
        $scope.rcvd.customer = $scope.chiti.customer;
        $scope.rcvd.chiti = $scope.chiti.id;
        $scope.rcvd.rcvddate = todayDate();
        // $scope.rcvd.amount = $scope.chiti.pdwtm;
        // var filter = {chiti:$scope.chiti.id,colid:colid,sort_by:"a.rcvddate",sort_order:"asc",limit:1000}
        // console.log(amt);
        Data.get("receivedamount",{chiti:$scope.chiti.id,colid:colid}).then(function(results){
            if(results.receivedamount){
                for(i=0;i<results.receivedamount.length;i++){
                    amt -= results.receivedamount[i].amount; 
                }
            }
            $scope.collectionarr = {"colid":colid,"colamt": amt};
        });
        // console.log(collectionarr);
        $scope.rcvd.note = "";
        $scope.rcvd.note1 = "";
        // $scope.rcvd.colid = colid;
    }else{
        popupAnim("rcvdcolpopup","close");
    }
}


$scope.creatercvd = function(){
    $scope.submitted = 1;
    if($scope.creatercvdForm.$valid){
        $scope.rcvd.userrcvddate = $scope.rcvd.rcvddate;
        $scope.rcvd.rcvddate = changeDateSQLFormat($scope.rcvd.rcvddate);
        $scope.rcvd.collectionarr = [];
        $scope.rcvd.collectionarr.push($scope.collectionarr);
        // console.log($scope.rcvd);
        // Data.post('receivedamount',$scope.rcvd).then(function(results){
        //     Data.toast(results);            
        //     collectionid = [];
        //     collectionid.push($scope.rcvd.colid);
            Data.post('receivedcollection',$scope.rcvd).then(function(results){
                Data.toast(results);
                if(results.status == "success"){
                    popupAnim("rcvdcolpopup","close");
                    $scope.init();
                }
            });        
        // });
    }
    
}

$scope.getcustomerlist = function(){
    Data.get('customers',{chitfund:{op:"!=", value:"1" }}).then(function(results){
        $scope.customers = results.customers;
    });
}

$scope.addmonthcol = function(){
    $("#addmonthmodal").modal("hide"); 
    $scope.submitted =1;
    if($scope.addmonthcolform.$valid){
        $scope.data= {noof: $scope.noof,dAte:$scope.lastdate ,chiti:$scope.id,sowji:$scope.sowjicomm,customer:$scope.chiti.customer,pdwtm:$scope.intamt,suri:$scope.suricomm}
        Data.post('collection',$scope.data).then(function(results){
            Data.toast(results);            
        });
    }
    $scope.getcollectionlist();
}

$scope.getasalulist = function(){
    $scope.remainingasalu = 0;
    if($scope.chiti){
        $scope.asalufilter= {chiti:$scope.chiti.id,"sort_by":"a.date","sort_order":"asc"};
        Data.get('asalu',$scope.asalufilter).then(function(results){
            $scope.getasalu =results.asalu;
            $scope.chiti.chitiamount += $scope.getsum($scope.getasalu,"chitiamount")
            $scope.asaluttl = $scope.getsum($scope.getasalu,"amount");
            $scope.chitiamountttl = $scope.getsum($scope.receivedamount,"amount");
          if($scope.chiti.tYpe==1){
            $scope.remainingasalu = Number($scope.chiti.chitiamount) - Number($scope.asaluttl)+Number($scope.chitiamountttl);
          }else{
            $scope.remainingasalu = Number($scope.chiti.chitiamount) - Number($scope.asaluttl);
          }
          $scope.getcollectionlist();
        });
    }

}
//small feature
    $scope.checkcolor = function(clr){
        if(clr){
            return "danger";
        }else{
            return "info";
        }
    }

    $scope.getcollectionlist = function(){
        $scope.filter1 = {chiti: $scope.id,received:$scope.collstat}
        Data.get('collection',$scope.filter1).then(function(results){
            $scope.collection = results.collection;
            //find the pending number of  collection till today date
            $scope.pendingcollection =[];
            if($scope.collection){
                var dtt = changeDateSQLFormat(todayDate());
                for(i=0;i<$scope.collection.length;i++){                
                    // console.log(dtt,$scope.collection[i].date);
                    if($scope.collection[i].received == 0 && $scope.collection[i].date <= dtt){
                        $scope.pendingcollection.push($scope.collection[i]);
                    }
                }
                 //find the pending number of  collection till today date
                 $scope.lastdate = $scope.collection[$scope.collection.length-1].date;
                var dd = $scope.getsum($scope.collection,"received");
                if(dd == $scope.collection.length && $scope.chiti.status==1){
                    console.log($scope.chiti.tYpe,$scope.remainingasalu);
                    if($scope.chiti.tYpe >= 4){
                        if($scope.remainingasalu == 0){
                            $("#statusremmodal").modal();
                        }
                    }else{
                        $("#statusremmodal").modal();
                    }
                }
            }

         

        });
       
    }
    

    $scope.deletechiti = function(){
        var result = confirm("Are you sure you want to delete the chiti");
        if(result == true){
            Data.delete('chiti/'+$scope.chiti.id).then(function(results){
                Data.toast(results);
                $scope.response = results.message;
            })
        }
        
    }
   
    
    $scope.closechitistatus = function(){
        $("#statusremmodal").modal("hide");
        $scope.chiti.status = "2";
        Data.put('chiti/'+$scope.id ,$scope.chiti).then(function(results){
            Data.toast(results);
            $scope.cmessage = results.message;
        })
        if($scope.chiti.iscountable == 2 &&  $scope.displaysowjicom ==0){
            $("#sowjicommmodal").modal();
            $scope.sowji = {};
            
        }
        
        
    }


    $scope.pendingchitistatuschiti = function(){
        $scope.chiti.status = "1";
        Data.put('chiti/'+$scope.id ,$scope.chiti).then(function(results){
            Data.toast(results);
            $scope.cmessage = results.message;
        })   
    }

    $scope.addsowjicomm = function(){
         $("#sowjicommmodal").modal('hide');
        $scope.sowji = {date : $scope.sowji.date, chiti:$scope.chiti.id , amount : $scope.getsum($scope.collection,"sowji") ,note: $scope.sowji.note };
        Data.post('sowji',$scope.sowji).then(function(results){
            Data.toast(results);
            $scope.response = results.message;
        });
    }

    $scope.addasalu = function(){
        $("#addasalumodal").modal('hide');
      $scope.asaludata = {date:changeDateSQLFormat($scope.asaludate) , customer: $scope.chiti.customer,customername: $scope.chiti.customername,amount:$scope.asaluamount , chiti:$scope.chiti.id,note:$scope.asalunote};
        console.log($scope.asaludata);
        Data.post('asalu',$scope.asaludata).then(function(results){
            Data.toast(results);
            $scope.rresponse = results.message;

            // if(results[39] == "i" && results[40] == "d" ){
                $scope.resasaluid = results.id;//results[43]+results[44] ;
                $scope.filter = { customer:$scope.chiti.customer, amount : $scope.asaluamount,rcvddate:changeDateSQLFormat($scope.asaludate),asalu:"1",asaluid: $scope.resasaluid ,chiti:$scope.chiti.id ,note:$scope.asalunote}
                Data.post('receivedamount',$scope.filter).then(function(results){
                    Data.toast(results);
                    $scope.rcvdamtresponse = results.message;
                    $scope.getasalulist();
            });
            // }else{
            //     alert("Din't got ID")
            // }

    });
    }

    $scope.addamountinchiti = function(){
 $("#addasalumodal1").modal('hide');
      $scope.asaludata = {date:changeDateSQLFormat($scope.asaludate) , customer: $scope.chiti.customer,customername: $scope.chiti.customername,chitiamount:$scope.asaluchitiamount , chiti:$scope.chiti.id,note:$scope.asalunote};
        console.log($scope.asaludata);
        Data.post('asalu',$scope.asaludata).then(function(results){
            Data.toast(results);
            $scope.rrresponse = results.message; 
    });

    }


    $scope.pressadmonbtn = function(){
        $("#statusremmodal").modal("hide");
        $("#addmonthmodal").modal();
    }
    $scope.changeDateUserFormat= function(dt){
        
        if(dt){
              return  changeDateUserFormat(dt);
        }
        }
        
        $scope.getsum = function(obj,key){
            var total = 0;
            if(obj && obj.length){
                for(i=0;i<obj.length;i++){
                    total += Number(obj[i][key]) || 0;
                }
            }
            return total;
        }

        $scope.initiateCalendar = function() {
            $('.input-group.date').datepicker({
                format: 'dd/mm/yyyy',
                orientation: "auto"
            });
           
                $('.input-group.date').each(function() {
                    //$(this).datepicker('setDate', $scope.filter.from_date);
                });
        }


        $scope.initiateCalendar();

        $scope.todaydiffdate = function(){
            d = new Date();
            mon =d.getMonth()+1 ;
            dte = d.getDate();
            month="";
            dtte = "";
            if(mon<10){
                mon = "0"+mon;
            }
             if(dte<10){
                console.log(dte);
                dte = "0"+dte ;
            }
             $scope.diff.date = dte + '/' + mon + '/' + d.getFullYear();
         }

        $scope.asalu=[];
        $scope.todaydate = function(){
            d = new Date();
            mon =d.getMonth()+1 ;
            dte = d.getDate();
            month="";
            dtte = "";
            if(mon<10){
                mon = "0"+mon;
            }
             if(dte<10){
                console.log(dte);
                dte = "0"+dte ;
            }
             $scope.asaludate = dte + '/' + mon + '/' + d.getFullYear();
             $scope.sowji.date = dte + '/' + mon + '/' + d.getFullYear();
         }
         $scope.yesterdaydate = function(){
             d = new Date();
            d.setDate(d.getDate()-1);
            dte = d.getDate();
            if(dte<10){
                dte = "0"+ dte;
            }
            mon =d.getMonth()+1 ;
            month="";
            if(mon<10){
                month = "0"+mon;
            }
             $scope.asaludate = dte + '/' + month+ '/' + d.getFullYear();
             $scope.sowji.date = dte + '/' + mon + '/' + d.getFullYear();
          }
          $scope.DByesterdaydate = function(){
             d = new Date();
             d.setDate(d.getDate()-2);
             dte = d.getDate();
            if(dte<10){
                dte = "0"+ dte;
            }
            mon =d.getMonth()+1 ;
            if(mon<10){
                mon = "0"+mon;
            }
             $scope.asaludate = dte + '/' + mon+ '/' + d.getFullYear();
             $scope.sowji.date = dte + '/' + mon + '/' + d.getFullYear();
          }
          $scope.D2Byesterdaydate = function(){
             d = new Date();
             d.setDate(d.getDate()-3);
             dte = d.getDate();
            if(dte<10){
                dte = "0"+ dte;
            }
            mon =d.getMonth()+1 ;
            if(mon<10){
                mon = "0"+mon;
            }
             $scope.asaludate = dte + '/' + mon+ '/' + d.getFullYear();
             $scope.sowji.date = dte + '/' + mon + '/' + d.getFullYear();
          }

        $scope.datediffcol = function(){
            if($scope.diff.date && $scope.diff.amt){
               $scope.diff.result = datediff(changeDateUserFormat($scope.chiti.date),$scope.diff.date) * $scope.diff.amt;
            }
            
        }


$scope.chititype=["90 Days","Weekly","10 Days","Monthly","Daily" ];
$scope.pertype=["Day","Week","10 Days","Month" ];
$scope.status = ["Pending","Closed"];
$scope.yesno = ["No","Yes" ];
$scope.diff = [];
});


app.controller('getchitfundCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {

    $scope.chitfundtypes = ["Weekly","Monthly"];
    $scope.status = ["Pending","Closed"];
    
    $scope.getchitfundlist = function(){

        Data.get('chitfund',$scope.filter).then(function(results){
            Data.toast(results);
            $scope.chitfund = results.chitfund;
        });
    }

});




app.controller('getchitiCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {
    $scope.filter = {};
    
    $scope.getchitilist= function(){
        $("#chitimodal").modal("hide");
        //$scope.filter = {status:$scope.receivedchck, type :$scope.chitityPe };
        $scope.filter.date = setDateFilter($scope.filter);
        
        Data.get('chiti',$scope.filter).then(function(results){
            Data.toast(results);
            $scope.chiti=results.chiti;
           
        })
    }
    $scope.getchitilist();
    $scope.chititype=["","90 Days","Weekly","10 Days","Monthly","Daily" ];
    $scope.chititypes=[{id:1,type:"90 days"},{id:2,type:"weekly"},{id:3,type:"10 days"},{id:4,type:"Monthly"},{id:5 , type:"daily"}];
    $scope.chitistatus=["","Pending","Closed"];
    $scope.yesno = ["yes","yes","no" ];


    $scope.clearfilter = function(){
        $scope.filter = {};
        $scope.getchitilist();
    }

    $scope.getcustomerlist=function(){
        Data.get('/customers').then(function(results){
         $scope.customers =results.customers;
        });
    }
    $scope.getcustomerlist();

    $scope.gethamilist=function(){
        Data.get('/customers',{ishami:1}).then(function(results){
         $scope.hAmi =results.customers;
         console.log($scope.hAmi);
        });
    }
    $scope.gethamilist();
   
    $scope.initiateCalendar = function() {
        $('.input-group.date').datepicker({
            format: 'dd/mm/yyyy',
            orientation: "auto"
        });
       
            $('.input-group.date').each(function() {
    //$(this).datepicker('setDate', $scope.filter.from_date);
    });
    }
    $scope.initiateCalendar();


    $scope.changeDateUserFormat= function(dt){
        
        if(dt){
              return  changeDateUserFormat(dt);
            }
        }
        
   /* var modal = document.getElementById("chitimodal");

    var span = document.getElementsByClassName("close")[0];
    var btn =document.getElementById("modalbtn");
    modal.style.display = "none";

    span.onclick = function(){
      modal.style.display = "none";
    }
    btn.onclick = function(){
        modal.style.display = "block";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }
  $("#chitimodal").modal("hide");*/ 
}); 

app.controller('editcustomerCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {
    
    $scope.getcustomerlist= function(){
        $scope.id = $routeParams['id'];
        $scope.proofchck = 0;
        Data.get('customer/'+$scope.id).then(function(results){
            $scope.Customer = results.customer;
            if($scope.Customer.aadhar == 1 || $scope.Customer.passbook == 1 ||$scope.Customer.debitcard == 1 || $scope.Customer.cheque == 1 || $scope.Customer.pnote == 1 || $scope.Customer.greensheet == 1){
                $scope.Customer.proofchck = "1";
            }
            $scope.Customer.ishami = $scope.Customer.ishami.toString();
            $scope.Customer.aadhar = $scope.Customer.aadhar.toString();
            $scope.Customer.passbook = $scope.Customer.passbook.toString();
            $scope.Customer.debitcard = $scope.Customer.debitcard.toString();
            $scope.Customer.cheque = $scope.Customer.cheque.toString();
            $scope.Customer.pnote = $scope.Customer.pnote.toString();
            $scope.Customer.greensheet = $scope.Customer.greensheet.toString();
            $scope.Customer.forint = $scope.Customer.forint.toString();
            $scope.gethamilist();

        })
    }
    
    $scope.gethamilist= function(){
        var filter= {ishami:1}
        Data.get('customers',filter).then(function(results){
            $scope.hami=results.customers;
        });
    }
    

    $scope.editcustomer = function(){
        $scope.submitted=1;
        if($scope.editcustomerform.$valid){
            $scope.Customer.firstName = capitalizeFirstLetter($scope.Customer.firstName);
            $scope.Customer.lastName = capitalizeFirstLetter($scope.Customer.lastName);
        Data.put('customer/'+$scope.id,$scope.Customer).then(function(results){
            Data.toast(results);
            $scope.response=results.message;
        });
        }
    }

    
    $scope.setNextFocus = function(e, el, next,key){
        setNextFocus(e, el, next,key,$scope.collection);
}

    $scope.chckboxfocus = function(cboxval,next){
        chckboxfocus(cboxval,next);
    }

});





app.controller('editasaluCtrl',function($route,$scope,$rootScope,$routeParams,$location,$http,Data){

    $scope.getasalu = function(){
        $scope.id= $routeParams['id'];
            
        Data.get('asalu/'+ $scope.id).then(function(results){
            Data.toast(results);
            $scope.asalu = results.asalu;
            console.log($scope.asalu);      
        });
    }
    
    
    $scope.deleteAsalu = function(){
        if(confirm("Are you sure you want to delete the Asalu")){
            Data.delete("asalu/"+$scope.id).then(function(results){
                Data.toast(results);
            });
        }
    }
    
    $scope.getchitilist = function(){
        Data.get('chiti').then(function(results){
            $scope.chiti = results.chiti ;
        });
    }
    $scope.getchitilist();
    $scope.getcustomerlist=function(){
        Data.get('/customers').then(function(results){
         $scope.customers =results.customers;
        });
    }
    $scope.getcustomerlist();
    
$scope.editasalu = function(){
    $scope.submitted=1;
    if($scope.editasaluform.$valid){
         Data.put('asalu/'+$scope.id,$scope.asalu).then(function(results){
            Data.toast(results);
            $scope.response = results.message;
        });
        if($scope.rcvdchck == 1){
            $scope.filter = { asaluid : $scope.asalu.id }
            Data.get('receivedamount',$scope.filter).then(function(results){
            $scope.receivedamount = results.receivedamount;
            if($scope.receivedamount.length){
            alert("Amount Received already");
            }else{
                 var asalunote = $scope.asalu.note + "(asalu paid for chiti " + $scope.asalu.chiti  + ")" ;
            //asalunote += 
            console.log(asalunote);
            $scope.filterrr = { customer:$scope.asalu.customer, amount : $scope.asalu.amount,rcvddate:$scope.asalu.date,asalu:"1",asaluid : $scope.asalu.id,note: asalunote,chiti:$scope.asalu.chiti   }
            Data.post('receivedamount',$scope.filterrr).then(function(results){
                Data.toast(results);
                $scope.rcvdamtresponse = results.message;
            });
        
            }
            
                });
            }
           

    }
}
    
    
    
    
    
    
    $scope.initiateCalendar = function() {
        $('.input-group.date').datepicker({
            format: 'yyyy-mm-dd',
            orientation: "auto"
        });
       
            $('.input-group.date').each(function() {
    //$(this).datepicker('setDate', $scope.filter.from_date);
    });
    }
    $scope.initiateCalendar();
    
    
    
    
    });
    
   
 app.controller('editreceivedCtrl',function($route,$scope,$rootScope,$routeParams,$location,$http,Data){

        $scope.getreceivedamount = function(){
            $scope.id = $routeParams['id'];
            Data.get('receivedamount/'+$scope.id).then(function(results){
                Data.toast(results);
                $scope.received = results.received;
                $scope.received.rcvddate = changeDateUserFormat($scope.received.rcvddate);
                $scope.getchitilist();
            });
        }
        $scope.getchitilist = function(){

            Data.get('chiti',{customer:$scope.received.customer}).then(function(results){
               $scope.chiti = results.chiti;
            });
        }
   
        $scope.editreceived = function(){
            $scope.received.rcvddate = changeDateSQLFormat($scope.received.rcvddate);
            Data.put('/received/'+$scope.id,$scope.received).then(function(results){
                Data.toast(results);
                results.response = results.message ;
            });
        }

        $scope.getcustomerlist=function(){
            Data.get('/customers').then(function(results){
             $scope.customers =results.customers;
            });
        }
        $scope.getcustomerlist();
        $scope.initiateCalendar = function() {
            $('.input-group.date').datepicker({
                format: 'dd/mm/yyyy',
                orientation: "auto"
            });
           
                $('.input-group.date').each(function() {
        //$(this).datepicker('setDate', $scope.filter.from_date);
        });
        }
        $scope.initiateCalendar();
    });
    

    app.controller('editchitfundCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {
        $scope.chitfundtypes = [{id:1,type:"Weekly"},{id:2,type:"Monthly"}];
        $scope.status = [{id:0,type:"Pending"},{id:1,type:"Closed"}];
        $scope.getchitfundlist = function(){
            $scope.id = $routeParams['id'];
            Data.get('chitfund/'+$scope.id).then(function(results){
                $scope.chitfund = results.chitfund;
                $scope.chitfund.date = $scope.changeDateUserFormat($scope.chitfund.date);
            });
        }
       
        $scope.editchitfund = function(){
            $scope.submitted =1;
            $scope.chitfund.date = changeDateSQLFormat($scope.chitfund.date);
            Data.put('chitfund/'+$scope.id,$scope.chitfund).then(function(results){
                Data.toast(results);
                $scope.response = results.message;
            });
        }

        $scope.getcustomerlist= function(){
            Data.get('customers',{chitfund: 1}).then(function(results){
                $scope.customers=results.customers;
            })
        }
        $scope.getcustomerlist();
    
        $scope.initiateCalendar = function() {
            $('.input-group.date').datepicker({
                format: 'dd/mm/yyyy',
                orientation: "auto"
            });
           
                $('.input-group.date').each(function() {
        //$(this).datepicker('setDate', $scope.filter.from_date);
        });
        }
        $scope.initiateCalendar();
    
        $scope.changeDateUserFormat= function(dt){
            if(dt){
                  return  changeDateUserFormat(dt);
            }
            }


    });     


app.controller('editchitiCtrl',function($route,$scope,$rootScope,$routeParams,$location,$http,Data){
    
    
    $scope.getchitilist= function(){
        $scope.id= $routeParams['id'];
        
        Data.get('chiti/'+ $scope.id).then(function(results){
          $scope.chiti = results.chiti;
          $scope.getcustomerlist();
        });
    }

    $scope.customerarray = function(){
       // console.log($scope.customers);
        for(i=0;i<$scope.customers.length;i++){
         if($scope.customers[i].id == $scope.chiti.customer){
             $scope.carray = $scope.customers[i];
             console.log($scope.carray);
         }
        }
     }
    

    $scope.editchiti= function(){
        $scope.submitted=1;
        if($scope.editchitiform.$valid){
            Data.put('chiti/'+$scope.id,$scope.chiti).then(function(results){
                Data.toast(results);
                $scope.response = results.message;
            })
        }
    }
    $scope.deletechiti = function(){
        var result = confirm("Are you sure you want to delete the chiti");
        if(result == true){
            Data.delete('chiti/'+$scope.chiti.id).then(function(results){
                Data.toast(results);
                $scope.response = results.message;
            })
        }
        
    }

    $scope.getcustomerlist=function(){
       Data.get('/customers').then(function(results){
        $scope.customers =results.customers;
        $scope.customerarray();   
    });
       
   }

    $scope.initiateCalendar = function() {
        $('.input-group.date').datepicker({
            format: 'yyyy-mm-dd',
            orientation: "auto"
        });
       
            $('.input-group.date').each(function() {
    //$(this).datepicker('setDate', $scope.filter.from_date);
    });
    }
    $scope.initiateCalendar();
    $scope.chititypes = [{id:1,type:"90days"},{id:2,type:"Weekly"},{id:3,type:"10 Days"},{id:4,type:"Monthly"},{id:5,type:"Daily"}]
});

app.controller('dailyentriesCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {
    $scope.initiateCalendar = function() {
        $('.input-group.date').datepicker({
            format: 'yyyy-mm-dd',
            orientation: "auto"
        });
       
            $('.input-group.date').each(function() {
    //$(this).datepicker('setDate', $scope.filter.from_date);
    });
    }
    $scope.initiateCalendar();
    
    $scope.getcustomerlist= function(){
        Data.get('customers',{chitfund:{op:"!=", value:"1" }}).then(function(results){
            $scope.customers=results.customers;
        })
    }
    $scope.getcustomerlist();

    $scope.createentry= function(){
        $scope.submitted=1;
        if($scope.entryform.$valid){
            Data.post('/entry').then()
        }
    }

});

app.controller('editcollectionCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {

    $scope.getsinglecollection = function(){
        $scope.id = $routeParams['id'];
        
        Data.get('collection/'+ $scope.id).then(function(results){
            Data.toast(results);
            $scope.collection = results.collection;
        });
    }

    $scope.deleteColl = function(){
        if(confirm("Are you sure you want to delete the collection")){
            Data.delete('collection/'+$scope.id).then(function(results){
                Data.toast(results);
                $scope.response = results.message;
            })
        }
    }
  

    $scope.editcollection = function(){
        $scope.submitted = 1;
        if($scope.collection.received == 0){
            $scope.collection.rcvddate = "";
            $scope.collection.receivedfrom = "";
        }else{
            if($scope.collection.rcvddate == "" || !$scope.collection.rcvddate || $scope.collection.rcvddate == "0000-00-00" || !$scope.collection.receivedfrom){
                alert("please enter received date");
                return;
            }
            $scope.collection.rcvddate = changeDateSQLFormat($scope.collection.rcvddate);
        }
        if($scope.editcollectionform.$valid){
            $scope.collection.date = changeDateSQLFormat($scope.collection.date);
            Data.put('collection/'+$scope.id,$scope.collection).then(function(results){
                Data.toast(results);
                $scope.response = results.message;
            });
        }
    }

   $scope.initiateCalendar = function() {
    $('.input-group.date').datepicker({
        format: 'dd/mm/yyyy',
        orientation: "auto"
    });
   
        $('.input-group.date').each(function() {
        //$(this).datepicker('setDate', $scope.filter.from_date);
        });
        }
        $scope.initiateCalendar();

    $scope.changeDateUserFormat= function(dt){
        if(dt){
              return  changeDateUserFormat(dt);
        }
        }

        $scope.getcustomerlist= function(){
            Data.get('customers',{chitfund:{op:"!=", value:"1" }}).then(function(results){
                $scope.customers = results.customers;
            });
        }
        $scope.getcustomerlist();
});


app.controller('dashboardCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {
    var date = new Date();
    $scope.dbdate = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
    $filter = {date :{op: "<=",value:$scope.dbdate},received:0}
   $scope.getcollectionlist=function(){
    Data.get('collection',$filter).then(function(results){
        Data.toast(results);
        $scope.collection = results.collection ; 
    });
}
    $scope.getcollectionlist();

    $scope.gethamilist = function(){
        $filter = {ishami :1}
        Data.get('customers', $filter).then(function(results){
            $scope.customers = results.customers;
        });
    }
    $scope.gethamilist();
    

    $scope.changeDateUserFormat= function(dt){
        if(dt){
              return  changeDateUserFormat(dt);
        }
        }
        $scope.yesno = ["No","Yes"];
        $scope.editrcollection = function(){
             $scope.tmp = [];
            for(i=0;i<$scope.collection;i++){
                if($scope.collection["received"] == 1){
                    array.push($scope.tmp,$scope.collection["id"]);
                }else {
                    array.push($scope.tmp,"");
                }
            }
            console.log($scope.collection.id);
        }
    
});


app.controller('pendinglistCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {
    var date = new Date();
    $scope.dbdate = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
   
    $scope.getcollectionList=function(){      
        $filter = {date :{op: "<=",value:$scope.dbdate},received:0}
        Data.get('collection',$filter).then(function(results){
          //  console.log($scope.filtercustomer);
            $scope.collection = results.collection ; 
           
            Data.get('chiti',$filter).then(function(results){
                  $scope.chiti = results.chiti;
                  if($scope.chiti){
                    $scope.pendingcollections= [];
                    for(i=0;i<$scope.chiti.length;i++){
                        $scope.pendingcollections[i]= {};
                        $scope.pendingcollections[i].chiti= $scope.chiti[i].id;
                        if($scope.collection){
                            for(k=0;k<$scope.collection.length;k++){
                                $tmp = [];
                                $scope.pendingcollections[i].tYpe = {};
                                    $scope.pendingcollections[i].chitiamount= {};
                                    $scope.pendingcollections[i].customer= {};
                                    $scope.pendingcollections[i].customer= {};
                                if($scope.pendingcollections[i].chiti== $scope.collection[k].chiti){
                                   // $scope.pendingcollections[i]=$scope.collection[k];
                                    $scope.pendingcollections[i].tYpe.push($scope.collection[k].tYpe);
                                    $scope.pendingcollections[i].chitiamount.push($scope.collection[k].chitiamount);
                                    $scope.pendingcollections[i].customer.push($scope.collection[k].customer);
                                    $scope.pendingcollections[i].customer.push($scope.collection[k].customer);
                                }
                            }
                        }
                    }
                    console.log($scope.pendingcollections);
                  }
                  
                 
           
        });
    });
    }
    $scope.getcollectionList(); 
});



app.controller('pendingchitiCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {

    $scope.init = function(){
        $scope.chititypes = [{id:1,type:"90days"},{id:2,type:"Weekly"},{id:3,type:"10 Days"},{id:4,type:"Monthly"},{id:5,type:"Daily"}];
        $scope.filter = {"tYpe":5};
        $scope.getpendingchitilist();
        $scope.gethamilist();
    }


    $scope.gethamilist= function(){
        var filter= {ishami:1}
        Data.get('customers',filter).then(function(results){
            $scope.hamilist =results.customers;
        })
    }


    $scope.getcustomerid = function(){
        console.log($scope.haminame);
        if($scope.hamilist){
            for(i=0;i<$scope.hamilist.length;i++){
                if($scope.hamilist[i].Firstname + '_' + $scope.hamilist[i].LastName  == $scope.haminame){
                    $scope.filter.hami = $scope.hamilist[i].id;
                    // console.log($scope.customer);
                    break;
                }
            }
        }
    }
    



    $scope.getpendingchitilist = function(){
        $scope.haminame?$scope.getcustomerid():"";
        $scope.filter.status = 1;
        if($scope.filter.tYpe == 4){
            $scope.filter.sort_by = "a.date";
            // $scope.filter.sort_by = "a.date";
        }
         
        // Data.get("pendingchiti",$scope.filter).then(function(results){
        //     $scope.pendingchitilist = results.chiti;
        // });


        Data.get("pendingchiti",$scope.filter).then(function(results){
            $scope.pendingchitilist = results.pendingchitilist;
            if($scope.pendingchitilist){
                var todayDaate = todayDate();
                var chitiids = [];
                for(i=0;i<$scope.pendingchitilist.length;i++){
                    chitiids.push($scope.pendingchitilist[i].id);
                    $scope.pendingchitilist[i].days = "";
                    if($scope.pendingchitilist[i].tYpe == 5){
                        $scope.pendingchitilist[i].days = datediff($scope.changeDateUserFormat($scope.pendingchitilist[i].date),todayDaate);
                    }

                    if($scope.filter.sorttype == 1){
                        sortarrdesc($scope.pendingchitilist,"ttlintpendingmonths");
                    }
                }

                // if(chitiids){
                //     var filter = {chiti : {"op": "In" ,value: chitiids.toString()} ,fields: "sum(a.amount) as amount", group_by :"a.chiti"}
                //     Data.get("asalu",filter).then(function(results){
                //         $scope.asalulist = results.asalu;
                //         if($scope.asalulist){
                //             for(j=0;j<$scope.pendingchitilist.length;j++){
                //                 $scope.pendingchitilist[j].remainingasalu = "";
                //                 for(k=0;k<$scope.asalulist.length;k++){
                //                     if($scope.pendingchitilist[j].id == $scope.asalulist[k].chiti){
                //                         $scope.pendingchitilist[j].remainingasalu = $scope.pendingchitilist[j].chitiamount - $scope.asalulist[k].amount;
                //                         break;
                //                     }
                //                 }
                //             }
                //         }
                //         if($scope.filter.tYpe == 4){
                //             $scope.getintmonths(chitiids);
                //         }else{
                //             $scope.getperdays();
                //         }
                //     });
                // }
            }
        });
    }


    $scope.checkdays = function(daycount){
        if(daycount < 60){
            return "success";
        }
        if(daycount >= 60 && daycount <= 90){
            return "info";
        }
        if(daycount >= 120){
            return "highlight";
        }
        if(daycount > 90 && daycount < 120){
            return "warning";
        }
        return "white";
    }


    

    $scope.getKvalue = function(amt){
        if(amt){
            // console.log(Number(amt/1000));
            if(amt.toString().length > 5){
                amt = Number(amt/100000);
                return amt+"L";
            }else{
                amt = Number(amt/1000);
                return amt+"K";
            }
            // console.log(amt.toString().length);           
        }
    }
    
$scope.print = function() {
    $(".noprint").hide();
    // $(".printtable").removeClass("table-responsive");
    // $(".condition").addClass("terms");
    window.print();
    // $(".condition").removeClass("terms");
    // $(".printtable").addClass("table-responsive");
    $(".noprint").show();
}


    $scope.getperdays = function(){
        if($scope.filter.days && $scope.pendingchitilist){
            var tmp = [];
            for(m=0;m<$scope.pendingchitilist.length;m++){
                if($scope.filter.days == 1 && $scope.pendingchitilist[m].days >= 30 && $scope.pendingchitilist[m].days < 60){
                    tmp.push($scope.pendingchitilist[m]);
                }else if($scope.filter.days == 2 && $scope.pendingchitilist[m].days >= 60 && $scope.pendingchitilist[m].days < 90){
                    tmp.push($scope.pendingchitilist[m]);
                }else if($scope.filter.days == 3 && $scope.pendingchitilist[m].days >= 90 && $scope.pendingchitilist[m].days < 120){
                    tmp.push($scope.pendingchitilist[m]);
                }else if($scope.filter.days == 4 && $scope.pendingchitilist[m].days >= 120){
                    tmp.push($scope.pendingchitilist[m]);
                }
            }
            if(tmp){
                $scope.pendingchitilist = tmp;
            }
        }
    }


    $scope.getintmonths = function(cids){
        if(cids){
            var filter = {chiti:{"op":"In",value:cids.toString()},received:"0",group_by:"a.chiti"}
            Data.get("collection",filter).then(function(results){
                $scope.pendingcollection = results.collection;
                console.log($scope.pendingcollection);
            });
        }
    }



    $scope.changeDateUserFormat= function(dt){
        
        if(dt){
              return  changeDateUserFormat(dt);
            }
        }

});




app.controller('dashboard1Ctrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {
    $scope.bfreextra = 0;
    $scope.dailyAct = 0 ;
    $scope.sameCus = 0;
    $scope.steps = 0;
    $scope.editCollDisp = 0;
    $scope.steps05 ={"date":0 , "customer" : 0 , "chiti":0};
    $scope.getcustomerlist= function(){
        Data.get('customers',{chitfund:{op:"!=", value:"1" }}).then(function(results){
            $scope.customers = results.customers;
        });
    }

    $scope.getsum = function(obj,key){
        var total = 0;
        if(obj && obj.length){
            for(i=0;i<obj.length;i++){
                total += Number(obj[i][key]) || 0;
            }
        }
        return total;
    }
    
    
    $scope.gethamilist = function(){
        $filter = {ishami :1}
        Data.get('customers', $filter).then(function(results){
            $scope.hami = results.customers;
        });
        $scope.getcustomerlist();
    }
    $scope.gethamilist();

    
    
    var date = new Date();
    $scope.dbdate = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
   
    $scope.changeDateUserFormat= function(dt){
        if(dt){
              return  changeDateUserFormat(dt);
        }
        }

        $scope.initiateCalendar = function() {
            $('.input-group.date').datepicker({
                format: 'dd/mm/yyyy',
                orientation: "auto"
            });
           
        $('.input-group.date').each(function() {
        //$(this).datepicker('setDate', $scope.filter.from_date);
        });
        }
        $scope.initiateCalendar();
        $scope.todaydate = function(){
            d = new Date();
            mon =d.getMonth()+1 ;
            dte = d.getDate();
            if(mon<10){
                mon = "0"+mon;
            }
             if(dte<10){
                dte = "0"+dte ;
            }
             $scope.rcvddate = dte + '/' + mon+ '/' + d.getFullYear();
        }
        $scope.yesterdaydate = function(){
            d = new Date();
        d.setDate(d.getDate()-1);
        dte = d.getDate();
        if(dte<10){
            dte = "0"+ dte;
        }
        mon =d.getMonth()+1 ;
        month="";
        if(mon<10){
            mon = "0"+mon;
        }
        $scope.rcvddate = dte + '/' + mon+ '/' + d.getFullYear();
        
        }
        $scope.DByesterdaydate = function(){
            d = new Date();
            d.setDate(d.getDate()-2);
            dte = d.getDate();
        if(dte<10){
            dte = "0"+ dte;
        }
        mon =d.getMonth()+1 ;
        if(mon<10){
            mon = "0"+mon;
        }
        $scope.rcvddate = dte + '/' + mon+ '/' + d.getFullYear();
        
        }
        $scope.D2Byesterdaydate = function(){
            d = new Date();
            d.setDate(d.getDate()-3);
            dte = d.getDate();
        if(dte<10){
            dte = "0"+ dte;
        }
        mon =d.getMonth()+1 ;
        if(mon<10){
            mon = "0"+mon;
        }
        $scope.rcvddate = dte + '/' + mon+ '/' + d.getFullYear();
        
        }
    
       
     $scope.getcollectionList=function(){      
            //$filter = {date :{op: "<=",value:$scope.dbdate},received:0,hami:$scope.Hami,chiti:$scope.chitifilter}
            $filter = {received:0,hami:$scope.Hami,chiti:$scope.chitifilter}
            Data.get('collection',$filter).then(function(results){
              //  console.log($scope.filtercustomer);
                $scope.collection = results.collection ; 
               // $scope.getreceivedamount();
               $scope.getcolllistgrp();
               
            });
        }

    $scope.getcolllistgrp = function(){
        //filter = {date :{op: "<=",value:$scope.dbdate},received:0,hami:$scope.Hami,group_by:"a.chiti"}
        filter = {received:0,hami:$scope.Hami,group_by:"a.chiti"}
        // console.log
        Data.get('collection',filter).then(function(results){
              $scope.collectiongrp = results.collection ; 
            //  console.log($scope.collectiongrp);
          });
    }

    $scope.markrcvd = function(ind){
        // $scope.extradisp = $scope.amountpaidonday;
            // $scope.noteids = [];
            // for(i=0;i<$scope.collection.length;i++){
            //     if($scope.collection[i].received ){
            //     $scope.extradisp -= $scope.collection[i].amount;
            //     $scope.noteids.push($scope.collection[i].id)
            //     }
            
            // }
        // $scope.note = "Paid for id's " +$scope.noteids;  
        if($scope.collection[ind].received){
            $scope.collection[ind].rcvdamt = $scope.collection[ind].amount;
            focusonTime("rcvdamt"+ ind);
            $scope.getttlamount();
        }
        }


        $scope.getttlamount = function(){
            $scope.amountpaidonday = 0 ;
            $scope.extradisp = 0;
            for(k=0;k<$scope.collection.length;k++){
                if($scope.collection[k].received){
                    $scope.amountpaidonday += Number($scope.collection[k].rcvdamt);
                }
            }
        }


    $scope.addcollection = function(){

        var collectionid = [];
        var collectionsowji = 0;
        var collectionarr = [];
        for(i=0;i<$scope.collection.length;i++){
            var tmp = {}
            if($scope.collection[i].received ){
                console.log($scope.collection[i]);
                collectionid.push($scope.collection[i].id)
                collectionsowji += $scope.collection[i].sowji;
                tmp.colid = $scope.collection[i].id;
                tmp.colamt = $scope.collection[i].rcvdamt;
                collectionarr.push(tmp);
            }
        }
        
        $scope.filter = { customer:$scope.receivedfrom,chiti:$scope.collection[0].chiti,collectionarr:collectionarr,amount:$scope.amountpaidonday,rcvddate:changeDateSQLFormat($scope.rcvddate),note:$scope.note}
        console.log($scope.filter);
        Data.post('receivedamount',$scope.filter).then(function(results){
            $scope.response = results.message;
        
        if(collectionid.length){
            Data.post('receivedcollection',{collectionsowji : collectionsowji,cid:collectionid,receivedfrom:$scope.receivedfrom ,rcvddate:changeDateSQLFormat($scope.rcvddate),notes:$scope.note1}).then(function(results){
                $scope.response = results.message;   
                Data.toast(results);
                $scope.getcollectionList();
            });
        }
        
        });
    
    }


    $scope.getreceivedamount = function(){
    $scope.filter = { rcvddate:{value:changeDateSQLFormat($scope.dbdate),op:"<="},asalu:{op:"!=", value:"1" },customer:$scope.receivedfrom,fields:"sum(a.amount) as amount" }
        Data.get('receivedamount',$scope.filter).then(function(results){
        $scope.receivedamountttl = results.receivedamount;
        $scope.getcolllist();
    });
}

    $scope.getcolllist=function(){      
    $scope.filter = {date :{op: "<=",value:changeDateSQLFormat($scope.dbdate)},received:1,customer:$scope.receivedfrom,fields:"sum(a.amount) as amount"}
    Data.get('collection',$scope.filter).then(function(results){
        $scope.collectionttl = results.collection ; 
        $scope.bfreextra =Number($scope.receivedamountttl[0].amount) - Number($scope.collectionttl[0].amount);
   //    console.log($scope.receivedamountttl);
       
    });
}


// Daily chiti's

$scope.collinit = function(){
    // $scope.coll = [{
    //     "rcvddate" : "",
    //     "customer": "",
    //     "hami": "",
    //     "chiti" : "",
    //     "amount" : "",
    //     "notes": ""
    // }];
    $scope.collection = [];
}

$scope.setNextFocus = function(e,ind,arr,param) {
    // console.log(e, "-" ,arr,"-", no);\
    // for(i=0;i<arr.length;i++){
    //     console.log(arr[i]);
    //     if(e.keyCode === 13 && e.target.id === arr[i] ){
    //         console.log("success", );

    //     }
    // }
    // console.log(e.keyCode);
    // if(e.keyCode === 13){
    //             console.log("success", );
    //             angular.forEach(arr[ind],function(value,key){
    //                 console.log(key ,'==' ,param);
    //                 if(key == param){
    //                     // console.log($scope.collection[ind].);
    //                 }
    //             });
               
        // document.querySelector('#' + param).focus();
 
            // }    
        
    // setNextFocus(e, el, next,key,$scope.collection);
}

$scope.dailyact = function(){
    // console.log($scope.steps05);
    if($scope.steps05.date == 0 && $scope.steps05.customer == 0 && $scope.steps05.chiti == 0){
        $scope.steps = 1;
        $scope.collection = [];
        $scope.initiateCalendar();
    }else if($scope.steps05.date == 1 && $scope.steps05.customer == 0  && $scope.steps05.chiti == 0 ){ 
        $scope.steps = 1.5;       
        $("#sameDateModal").modal();
        $scope.collection = [];
        $scope.initiateCalendar();
    }else if($scope.steps05.date == 0 && $scope.steps05.customer == 1  && $scope.steps05.chiti == 0){
        $scope.steps = 2.5;
        $("#sameCusModal").modal();
        $scope.collection = [];
        $scope.initiateCalendar();
    }else if($scope.steps05.date == 0 && $scope.steps05.customer == 1  && $scope.steps05.chiti == 1){
        $scope.steps = 3.5;
        $("#sameChitiModal").modal();
        $scope.collection = [];
        $scope.initiateCalendar();
    }




    $scope.dailyAct = 1;
    $scope.daily = [];
    $scope.coll = {
        "date" : "",
        "customer": "",
        "customername" : "",
        "hami": "",
        "chiti" : "",
        "chiticode" : "",
        "amount" : "",
        "notes": ""
    };
    $scope.custDisplay = [];
}
// $scope.daily = [];//remove
// $scope.coll = [];//remove


$scope.addColl = function(){
    var ress = false; //step is selected or not
    ress = $scope.findValid(ress); //checking whether selected any steps or not / step value
    resss = false; // var for storing is any notes repeated 
    if(ress){
        resss = $scope.checkRepeat();
        if(resss){
            ress = confirm("The Number in notes is already used \n Do you want to continue !!");
        }
    }
    if(ress){
        if($scope.steps == 3 ){
            $scope.steps3_customername = $scope.coll.customername;
            $scope.steps3_customer = $scope.coll.customer;
        }
        if($scope.steps == 4){
            $scope.steps4_customername = $scope.coll.customername;
            $scope.steps4_customer = $scope.coll.customer;
            $scope.steps4_chiti = $scope.coll.chiti;
        }
            $scope.collection.push($scope.coll);
            sortarrasc($scope.collection,"customer");
        // for(i=0;i<$scope.collection.length;i++){
        //     var custDisp = false;
        //     for(j=0;j<$scope.customers.length;j++){
        //         if($scope.collection[i].customer == $scope.customers[j].id){
        //             if($scope.custDisplay.length>0){
        //                 for(k=0;k<$scope.custDisplay.length;k++){
        //                     if($scope.custDisplay[k] == $scope.collection[i].customer){
        //                         custDisp = false;
        //                         break;
        //                     }else{
        //                         custDisp = true;
        //                     }
        //                 }
        //                 if(custDisp){
        //                     $scope.custDisplay.push($scope.customers[j].id);
        //                 }
        //             }else{
        //                 $scope.custDisplay.push($scope.customers[j].id);
        //             }           
        //         }
        //         // if(custDisp == true){
        //         //     $scope.custDisplay.push($scope.customers[j].id);
        //         // }
        //     }
        // }
        $scope.resetColl();
    }
    
    // for(i=0;i<$scope.customers.length;i++){
    //     if($scope.coll.customer == $scope.customers[i].id){
    //         $scope.coll.customer = $scope.customers[i].id;
    //         $scope.coll.customername = $scope.customers[i].Firstname + ' ' + $scope.customers[i].LastName;
    //         if($scope.steps == 3){
    //             $scope.steps3_customername = $scope.coll.customername;
    //             $scope.steps3_customer = $scope.coll.customer;
    //         }
    //         break;
    //     }
    // }
        
}

$scope.checkRepeat = function(){
    var isRepeated = false;
    var tmp = []; asaluTmp = []; asaluNotes = [];
    if(!$scope.asaluList.length || $scope.asaluList[0].chiti != $scope.coll.chiti){
        Data.get("asalu",{"chiti":$scope.coll.chiti}).then(function(results){
            $scope.asaluList = results.asalu;
        });
    }

    //first set the tmp array i.e coll.notes
    if ($scope.coll.notes.toString().includes(',')){ 
        tmp = $scope.coll.notes.split(',');
    }else if($scope.coll.notes.toString().includes('-')){
        var tmpp = $scope.coll.notes.split('-');
        tmp = [];
        for(m=Number(tmpp[0]);m <= tmpp[1];m++){ //assigning from starting note number to end number
            tmp.push(m);            
        }
    }else{
        tmp.push(Number($scope.coll.notes));
    }


    for(k=0;k<$scope.asaluList.length;k++){
        if ($scope.asaluList[k].note.toString().includes(',')){ 
            asaluTmpp = $scope.asaluList[k].note.split(',');
            for(t = 0; t < asaluTmpp.length; t++){ //assigning from starting note number to end number
                asaluTmp.push(asaluTmpp[t]);            
            }
        }else if($scope.asaluList[k].note.toString().includes('-')){
            var asaluTmpp = $scope.asaluList[k].note.split('-');
            for(m = Number(asaluTmpp[0]); m <= asaluTmpp[1]; m++){ //assigning from starting note number to end number
                asaluTmp.push(m);            
            }
        }else{
            asaluTmp.push(Number($scope.asaluList[k].note));
        }
    }

    for(x=0;x<asaluTmp.length;x++){
        asaluNotes.push(Number(asaluTmp[x]));
    }
    //checking is there any repeated notes is there or not
    for(i=0;i<asaluNotes.length;i++){
        for(l=0;l<tmp.length;l++){
            if(asaluNotes[i] == tmp[l]){
                isRepeated = true;
                break;
            }
        }
        if(isRepeated){
            break;
        }        
    }

    return isRepeated;
}


    //     if ($scope.coll.notes.toString().includes(',')){ 
    //         var tmp = $scope.coll.notes.split(',');
    //         console.log(tmp);
    //             if(tmp[l] == $scope.asaluList[i].note){
    //                 isRepeated = true;
    //             }
    //         }
    //     }else if($scope.coll.notes.toString().includes('-')){
    //         var tmpp = $scope.coll.notes.split('-');
    //         tmp = [];
    //         for(m=tmpp[0];m<tmpp[1];m++){ //assigning from starting note number to end number
    //             // tmp.push(m);
    //             if(tmpp == $scope.asaluList[i].note){
    //                 isRepeated = true;
    //             }
    //         }
    //         console.log(tmp);
    //         for(l=0;l<tmp.length;l++){
    //             if(tmp[l] == $scope.asaluList[i].note){
    //                 isRepeated = true;
    //             }
    //         }
    //         console.log("arr-" ,tmp);
    //     }else{
    //         $scope.coll.notes = Number($scope.coll.notes) + 1;  
            
    //     }        
    // }
// }

$scope.resetColl = function(){
    if($scope.steps == 1){
        $scope.coll = {
            "date" : "",
            "customer": "",
            "customername" : "",
            "hami": "",
            "chiti" : "",
            "chiticode" : "",
            "amount" : "",
            "notes": ""
        };    
    }else if($scope.steps == 2){
        $scope.coll = {
            "date" : $scope.steps_date,
            "customer": "",
            "customername" : "",
            "hami": "",
            "chiti" : "",
            "chiticode" : "",
            "amount" : "",
            "notes": ""
        };
    }else if($scope.steps == 3){
        $scope.coll = {
            "date" : "",
            "customer": $scope.steps3_customer,
            "customername" : $scope.steps3_customername,
            "hami": "",
            "chiti" : "",
            "chiticode" : "",
            "amount" : "",
            "notes": ""
        };
    }else if($scope.steps == 4){
        $scope.coll = {
            "date" : "",
            "customer": $scope.steps4_customer,
            "customername" : $scope.steps4_customername,
            "hami": "",
            "chiti" : $scope.steps4_chiti,
            "chiticode" : "",
            "amount" : "",
            "notes": ""
        };
    }
    
}

$scope.findValid = function(ress){
    if($scope.steps == 1 && $scope.dailyStep1CusForm.$valid){
            ress = true;
    }else if($scope.steps == 2 && $scope.dailyStep2CusForm.$valid){
            ress = true;
    }else if($scope.steps == 3 && $scope.dailyStep3CusForm.$valid){
            ress = true;
    }else if($scope.steps == 4 && $scope.dailyStep4CusForm.$valid){
            ress = true;
    }
    
    return ress;
}

$scope.getNotes = function(){
    
    var samecc = false;
    for(i=0;i<$scope.chitiList.length;i++){
        if($scope.coll.chiti == $scope.chitiList[i].id){
            $scope.coll.chiticode = $scope.chitiList[i].code;
            $scope.chitiCustomerName = $scope.chitiList[i].customername;
            break;
        }
    }
    if($scope.editCollDisp != 1){
        if($scope.collection.length>0){
            for(i=0;i<$scope.collection.length;i++){
                if($scope.collection[i].customer == $scope.coll.customer && $scope.collection[i].chiti == $scope.coll.chiti){
                    samecc = true; //already collection has been added of same customer and chiti
                    if ($scope.collection[i].notes.toString().includes(',')){ 
                        var tmp = $scope.collection[i].notes.split(',');
                        $scope.coll.notes = Number(Number(tmp[tmp.length - 1])) + 1;
                    }else if($scope.collection[i].notes.toString().includes('-')){
                        var tmp = $scope.collection[i].notes.split('-');
                        // $scope.collection[i].notes = $scope.collection[i].notes[$scope.collection[i].notes.length-1];
                        $scope.coll.notes = Number(Number(tmp[tmp.length - 1])) + 1;
                    }else{
                        $scope.coll.notes = Number($scope.collection[i].notes) + 1;  
                        
                    }                
                }
            }
        } 
        if(samecc == false){//if new collection has been added of the customer and chiti
            Data.get("asalu",{chiti:$scope.coll.chiti}).then(function(results){
                $scope.asaluList = results.asalu;
                if($scope.asaluList.length > 0 && $scope.asaluList[$scope.asaluList.length - 1].note){
                    if ($scope.asaluList[$scope.asaluList.length - 1].note.toString().includes(',')){ 
                        var tmp = $scope.asaluList[$scope.asaluList.length - 1].note.split(',');
                        $scope.coll.notes = Number(Number(tmp[tmp.length - 1])) + 1;
                    }else if($scope.asaluList[$scope.asaluList.length - 1].note.toString().includes('-')){
                        var tmp = $scope.asaluList[$scope.asaluList.length - 1].note.split('-');
                        $scope.coll.notes = Number(Number(tmp[tmp.length - 1])) + 1;
                    }else{
                        $scope.coll.notes = Number($scope.asaluList[$scope.asaluList.length - 1].note) + 1;  
                        
                    } 
                    samecc = true;
                }
            });
        }
        if(samecc == false){
            $scope.coll.notes = "";
        }
    }
    
}

$scope.editCollVal = function(ind){
    $scope.editCollDisp = 1;
    if(ind >=0){
        $scope.coll = angular.copy($scope.collection[ind]);
        // $scope.collection.spl
        $scope.coll.editid = ind;
    }
}


$scope.editColl = function(){
    console.log($scope.coll);
    var ress = false;
    ress = $scope.findValid(ress); //checking whether selected any steps or not / step value
    resss = false; // var for storing is any notes repeated 
    if(ress){
        resss = $scope.checkRepeat();
        if(resss){
            ress = confirm("The Number in notes is already used \n Do you want to continue !!");
        }
    }
    if(ress){
        $scope.collection[$scope.coll.editid] = $scope.coll;
        $scope.resetColl();
        $scope.editCollDisp = 0;
    }
}

$scope.createColl = function(){
    $scope.submitted = 1;
    
    if($scope.collection.length>0 && $scope.collection[0].amount>0){
        $scope.asalu = [];
        for(i=0;i<$scope.collection.length;i++){
            var tmp = {};
            tmp["date"] = changeDateSQLFormat($scope.collection[i].date);
            tmp["customer"] = $scope.collection[i].customer;
            tmp["amount"] = $scope.collection[i].amount;
            tmp["chitiamount"] = 0;
            tmp["chiti"] = $scope.collection[i].chiti;
            tmp["note"] = $scope.collection[i].notes;
            $scope.asalu.push(tmp);
        }

        console.log($scope.asalu);
        Data.post("dailyCollection",{"asalu":$scope.asalu}).then(function(results){
            Data.toast(results);
            $scope.dresponse = results.message;
            
            if(results.status == "success"){
                $scope.collection = [];
                $scope.asalu = [];
                $scope.custDisplay = [];
            }
        });
    }
}


$scope.getChitiList = function(){
    for(i=0;i<$scope.customers.length;i++){
        if($scope.coll.customername == ($scope.customers[i].Firstname + ' ' + $scope.customers[i].LastName + ' (' + $scope.customers[i].HamiFirstName + ')')){
            $scope.coll.customer = $scope.customers[i].id;
            $scope.coll.hami = $scope.customers[i].hami;
            $scope.coll.haminame = $scope.customers[i].HamiFirstName;
            break;
        }
    }
        if($scope.coll.customer){
            Data.get('chiti',{"customer":$scope.coll.customer,"tYpe":{op:"In", value:"2,5"},status:1}).then(function(results){
                $scope.chitiList = results.chiti;                
            })
        }
    }


//steps2

$scope.steps2_1 = function(){
    console.log($scope.coll);
    if($scope.coll.date){ 
        $("#sameDateModal").modal("hide");
        $scope.steps = 2;
        $scope.steps_date = $scope.coll.date;
    }
}

//steps3
$scope.steps3_1 = function(){
    $scope.getChitiList();
    console.log($scope.coll);
    if($scope.coll.customer){
        $("#sameCusModal").modal("hide");
        $scope.steps = 3;
    }

}

//steps4
$scope.steps4_1 = function(){
    if($scope.coll.customer && $scope.coll.chiti){
        $("#sameChitiModal").modal("hide");
        $scope.steps = 4;
        
    }

}





$scope.samecus = function(){
    $scope.sameCus = 1;
}

$scope.mulcus = function(){
    $scope.sameCus = 0;
}

$scope.dtodaydate = function(){
    d = new Date();
    mon =d.getMonth()+1 ;
    dte = d.getDate();
    if(mon<10){
        mon = "0"+mon;
    }
     if(dte<10){
        dte = "0"+dte ;
    }
    $scope.coll.date = dte + '/' + mon+ '/' + d.getFullYear();
}
$scope.dyesterdaydate = function(){
    d = new Date();
d.setDate(d.getDate()-1);
dte = d.getDate();
if(dte<10){
    dte = "0"+ dte;
}
mon =d.getMonth()+1 ;
month="";
if(mon<10){
    mon = "0"+mon;
}
$scope.coll.date = dte + '/' + mon+ '/' + d.getFullYear();

}
$scope.dDByesterdaydate = function(){
    d = new Date();
    d.setDate(d.getDate()-2);
    dte = d.getDate();
if(dte<10){
    dte = "0"+ dte;
}
mon =d.getMonth()+1 ;
if(mon<10){
    mon = "0"+mon;
}
$scope.coll.date = dte + '/' + mon+ '/' + d.getFullYear();

}
$scope.dD2Byesterdaydate = function(){
    d = new Date();
    d.setDate(d.getDate()-3);
    dte = d.getDate();
if(dte<10){
    dte = "0"+ dte;
}
mon =d.getMonth()+1 ;
if(mon<10){
    mon = "0"+mon;
}
$scope.coll.date = dte + '/' + mon+ '/' + d.getFullYear();

}

$scope.plusDate = function(plusNo){
    console.log($scope.steps);
    if($scope.steps == 3 || $scope.steps == 4){
        if($scope.collection.length > 0){
            var dateStr = changeDateSQLFormat($scope.collection[$scope.collection.length - 1].date);
            console.log(dateStr);
            var lastDate = new Date(new Date(dateStr).setDate(new Date(dateStr).getDate() + plusNo ));
            ddate = lastDate.getDate();
            dmon = lastDate.getMonth()+1;
            if(ddate < 10){
                ddate = "0" + ddate;
            }
            if(dmon < 10){
                dmon = "0"+ dmon;
            }
            console.log(lastDate);
            $scope.coll.date = ddate + '/' + dmon + '/' + lastDate.getFullYear() ;
            //changeDateUserFormat(new Date(new Date(dateStr).setDate(new Date(dateStr).getDate() + plusNo )));
            console.log($scope.coll.date);
        }
    }
}



    $scope.isActive = function(ind,param){
        console.log("Hi");
        console.log($(".dAte0").is(':focus'));
        console.log($("input-group date").value);
        $('date0').on("click",function(){
            console.log("clicked");
        });
        if(param == "rcvddate"){
            console.log($scope.collection[ind].rcvddate );
        }
        console.log(param);
    }
    $('date0').on("click",function(){
        console.log("clicked");
    });
});



app.controller('dailyShortcutCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {
    $scope.init = function(){
        focusonTime("note",200);
        $scope.disp = 0;
        $scope.fulldisp = 0;
        $scope.selected = {};
        $scope.dailyarr = {};
        $scope.lastind = -1;
        $scope.daily = [];
    }


    $scope.getnotes = function(arr,ind){
        console.log(arr);
        if(arr && arr.tYpe == 5){
            var perday = 0; note = 0; note1 = 0;days = 100;matched = false;
            (arr.cid == 499 )? days = 400:"";
            for(d=0;d<$scope.asalulist.length;d++){
                perday = Number(arr.chitiamount)/days;
                if(arr.cid == $scope.asalulist[d].chiti){
                    matched = true;
                    // (arr.cid == 377)?console.log($scope.asalulist[d].amount):"";
                    // (arr.cid == 377)?console.log($scope.asalulist[d].amount,'/',perday, (Number($scope.asalulist[d].amount) / Number(perday)) + 1):"";
                    if($scope.asalulist[d].amount > 0){
                        note = (Number($scope.asalulist[d].amount) / Number(perday)) + 1;
                    }else if($scope.asalulist[d].amount = 0){
                    // (arr.cid == 413)?console.log($scope.asalulist[d].amount):"";
                        note = 1;
                    }
                    // (arr.cid == 377)?console.log(note):"";
                    // note1 = Number(arr.amt)/Number(perday);
                    // (arr.cid == 377)?console.log(note1):"";
                    console.log(note1);
                    
                    break;
                }
            }
            if(!matched){
                note = 1;
            }
            // (arr.cid == 377)?console.log(Number(arr.amt),"/",Number(perday)):"";
            note1 = Number(arr.amt)/Number(perday);
            // (arr.cid == 377)?console.log("note",note,note1):"";
            // (arr.cid == 377)?console.log(Number(arr.amt)/Number(perday)):"";
            if(note1 > 0 && note1 <= 1){
                $scope.dailyarr[ind].note1 = note;
                $scope.dailyarr[ind].color = ($scope.dailyarr[ind].note != note)?"danger":"";
            }else if(note1 > 1 && note1 <= 2){
                $scope.dailyarr[ind].note1 = note + ',' + (note + 1);
                $scope.dailyarr[ind].color = ($scope.dailyarr[ind].note != $scope.dailyarr[ind].note1)?"danger":"";
            }else if(note1 > 2){
                $scope.dailyarr[ind].note1 = note + '-' + (note + note1 - 1);
                $scope.dailyarr[ind].color = ($scope.dailyarr[ind].note != $scope.dailyarr[ind].note1)?"danger":"";
            }
        }
    }

    $scope.filterData = function(){
        $scope.dailyarr = [];
        $scope.dailydata = "";
        $scope.errentries = [];
        $scope.errdata = "";
        var notesarr  = $scope.daily.note.split(/\r?\n/);cidarr = [];
        if(notesarr && notesarr.length){
            for(i=0;i<notesarr.length;i++){
                var line1 = ""; line2 = "";
                var brtxt1 = []; brtxt2 = [];res1 = {}; res2 = {};
                finaltemp = {}
                if(notesarr[i].indexOf('-') >= 0){
                    line1 = notesarr[i].slice(0,notesarr[i].indexOf('-'));
                    line2 = notesarr[i].slice(notesarr[i].indexOf('-'));
                    brtxt1 = txtbrackets(line1);
                    brtxt2 = txtbrackets(line2);
                    // console.log("pmmode",finaltemp.pmmode);
                    if(brtxt1 && brtxt1.length && brtxt1[0] != ""){
                        res1 = singlenum(brtxt1);
                        if(res1.num == 1){
                            finaltemp.cid = res1.number[0];
                        }
                        // console.log(finaltemp,brtxt1,brtxt1.length,);
                    }else{
                        alert("Didn't received Chiti ID");
                    }
                    // (finaltemp.cid==376)?console.log(brtxt2):"";
                    if(brtxt2 && brtxt2.length){
                        res2 = singlenum(brtxt2);
                        if(res2.num == 1){
                            finaltemp.note = res2.number[0];
                        }
                        // (finaltemp.cid==376)?console.log(line2.slice(line2.indexOf('-')+1,line2.indexOf('('))):"";
                        finaltemp.amt = (line2.slice(line2.indexOf('-')+1,line2.indexOf('('))).replace(/,/g, '');
                        // (finaltemp.cid==376)?console.log(finaltemp.amt):"";
                        if(res2.nan.length){
                            for(f=0;f<res2.nan.length;f++){
                                if(pmnames(res2.nan[f])){
                                    finaltemp.pmmode = res2.nan[f];
                                }
                            }
                        }
                    }else{
                        // (finaltemp.cid==376)?console.log(!isNaN((line2.slice(line2.indexOf('-')+1)).replace(/,/g, '')),(line2.slice(line2.indexOf('-')+1)).replace(/,/g, '')):"";
                        if(!isNaN((line2.slice(line2.indexOf('-')+1)).replace(/,/g, ''))){
                            finaltemp.amt = (line2.slice(line2.indexOf('-')+1)).replace(/,/g, '');
                            // (finaltemp.cid==376)?console.log((finaltemp.amt)):"";
                        }
                        finaltemp.note = "";
                        finaltemp.pmmode = "";
                    }
                    finaltemp.customername = line1.slice(0,line1.indexOf('('));

                }else{
                    $scope.errentries.push(notesarr[i]);
                    ($scope.errdata == "")?$scope.errdata = notesarr[i]: $scope.errdata += "\n" + notesarr[i];
                }
                // var tmp = {};
                // tmp = finaltemp.customername.split(' ');

                //finding chiti code
                // tempword = "";
                //storing word that is inside () in customername
                // tempword = finaltemp.customername.slice(finaltemp.customername.indexOf('(')+1 ,finaltemp.customername.indexOf(')'));
                // if(finaltemp.customername.indexOf('(') >= 0){
                //    if(isNaN(tempword)){ //if the 1st bracket has hami name
                //         tempword = finaltemp.customername.slice(finaltemp.customername.indexOf(')') + 1);
                //         if(tempword.indexOf('(') >= 0 && !isNaN(tempword.slice(tempword.indexOf('(')+1,tempword.indexOf(')')))){ //finding that if 2nd () is there and its integer or not
                //             // finaltemp.chiticode = tempword.slice(tempword.indexOf('(')+1,tempword.indexOf(')'));
                //         }
                //     }else{ //if the 1st bracket has chiti code
                //         // finaltemp.chiticode = tempword;
                //     }
                // }else{
                //     // finaltemp.chiticode = "";
                // }
                
                // var temp = notesarr[i];
                //1st took customer names
                // linetemp = temp.slice(temp.indexOf('-')+1);
                // finaltemp.amt = (linetemp.slice(0,linetemp.indexOf('('))).replace(/, /g, '');

                //slicing at first () after amount
                // linetemp1 = linetemp.slice(linetemp.indexOf('(')+1 ,linetemp.indexOf(')'));

                // if(isNaN(linetemp1)){
                //     if(pmnames(linetemp1)){
                //         // finaltemp.pmmode = linetemp1;
                //         // console.log("true");
                //     }else{
                //         // finaltemp.note = linetemp1;    
                //     }
                // }else{
                //     // finaltemp.note = linetemp1;
                //     console.log("mtch",notesarr[i].match(linetemp1));
                //     temparr = notesarr[i].split("(",4);
                //     if(temparr.length > 3 && !isNaN(temparr[3].slice(0,temparr[3].indexOf(')')))){
                //         // finaltemp.pmmode = temparr[3].slice(0,temparr[3].indexOf(')'));
                //     }else{
                //         console.log(temparr);
                //         if(notesarr[i].match(linetemp1).indexOf(',') >= 0){
                            
                //         }else{
                //             var ind = notesarr[i].indexOf(linetemp1) + linetemp1.length;
                //             // finaltemp.pmmode = notesarr[i].slice(ind,ind+3);
                //         }
                //     }
                // }
                // 2nd take amt 
                
                // linetemp1 = linetemp[1].split('(');
                // console.log("linetemp1-",linetemp1);
                if(!isNaN(finaltemp.cid)){
                    cidarr.push(finaltemp.cid);
                    $scope.dailyarr.push(finaltemp);
                    ($scope.dailydata == "")?$scope.dailydata = notesarr[i]:$scope.dailydata += "\n" + notesarr[i];
                }
            }
            var filter = {id:{"op":"In",value:cidarr.toString()}}
            Data.get("chiti",filter).then(function(results){
                $scope.chitilist = results.chiti;
                var filter1 = {chiti:{"op":"In",value:cidarr.toString()},group_by:"a.chiti",fields:"sum(a.amount) as amount" }
                Data.get("asalu",filter1).then(function(results){
                    $scope.asalulist = results.asalu;
                    // console.log($scope.chitilist);
                    if($scope.chitilist && $scope.chitilist.length){
                        for(i=0;i<$scope.dailyarr.length;i++){
                            for(j=0;j<$scope.chitilist.length;j++){
                                console.log($scope.dailyarr[i],$scope.chitilist[j].id);
                                if($scope.dailyarr[i].cid == $scope.chitilist[j].id){
                                    $scope.dailyarr[i].customer = $scope.chitilist[j].customer;
                                    $scope.dailyarr[i].tYpe = $scope.chitilist[j].tYpe;
                                    $scope.dailyarr[i].chitiamount = $scope.chitilist[j].chitiamount;
                                    // $scope.dailyarr[i].customer = $scope.chitilist[j].customer;
                                    console.log($scope.dailyarr[i]);
                                    $scope.getnotes($scope.dailyarr[i],i);
                                    break;
                                }
                            }
                        }
                    }
                });
            });
            console.log($scope.dailyarr);
        }

    }

    $scope.editnote1 = function(ind){
        if($scope.lastind == ind){
            $scope.lastind = -1;
            if($scope.dailyarr[ind].note == $scope.dailyarr[ind].note1){
                $scope.dailyarr[ind].color = "";
            }else{
                $scope.dailyarr[ind].color = "danger";
            }
        }else{
            $scope.lastind = ind;
        }
    }

    $scope.onLinkClick = function(idname){
        onLinkClick(idname);
    }

    $scope.createDaily = function(){
        console.log($scope.dailyarr);
        $scope.submitted = 1;
    
        if($scope.dailyarr.length>0 && $scope.daily.date){
            $scope.asalu = [];
            for(i=0;i<$scope.dailyarr.length;i++){
                var tmp = {};
                tmp["date"] = changeDateSQLFormat($scope.daily.date);
                tmp["customer"] = $scope.dailyarr[i].customer;
                tmp["amount"] = $scope.dailyarr[i].amt;
                tmp["chitiamount"] = 0;
                tmp["chiti"] = $scope.dailyarr[i].cid;
                tmp["note"] = $scope.dailyarr[i].note1;
                $scope.asalu.push(tmp);
            }
            console.log($scope.asalu);
            Data.post("dailyCollection",{"asalu":$scope.asalu}).then(function(results){
                Data.toast(results);
                // $scope.dresponse = results.message;
                if(results.status == "success"){
                    $scope.asalu = [];
                    // $scope.init();
                }
            });
        }
    }


    $scope.showLast3 = function(cid,cus){
        $scope.disp = 1;
        $scope.selected = {chiti:cid,customername : cus}
        Data.get('asalu',{chiti:cid,sort_by : "a.date",sort_order : "desc",limit:3}).then(function(results){ 
            $scope.lasttrans = results.asalu;
            sortarrbydate($scope.lasttrans)
        });
    }

    $scope.changeDateUserFormat= function(dt){
            
            if(dt){
                return  changeDateUserFormat(dt);
            }
        }


    
    $scope.dtodaydate = function(){
        d = new Date();
        mon =d.getMonth()+1 ;
        dte = d.getDate();
        if(mon<10){
            mon = "0"+mon;
        }
        if(dte<10){
            dte = "0"+dte ;
        }
        $scope.daily.date = dte + '/' + mon+ '/' + d.getFullYear();
    }

    $scope.dyesterdaydate = function(){
        d = new Date();
        d.setDate(d.getDate()-1);
        dte = d.getDate();
        if(dte<10){
            dte = "0"+ dte;
        }
        mon =d.getMonth()+1 ;
        month="";
        if(mon<10){
            mon = "0"+mon;
        }
        $scope.daily.date = dte + '/' + mon+ '/' + d.getFullYear();

    }
    $scope.dDByesterdaydate = function(){
        d = new Date();
        d.setDate(d.getDate()-2);
        dte = d.getDate();
        if(dte<10){
            dte = "0"+ dte;
        }
        mon =d.getMonth()+1 ;
        if(mon<10){
            mon = "0"+mon;
        }
        $scope.daily.date = dte + '/' + mon+ '/' + d.getFullYear();
    }

    $scope.dD2Byesterdaydate = function(){
        d = new Date();
        d.setDate(d.getDate()-3);
        dte = d.getDate();
        if(dte<10){
            dte = "0"+ dte;
        }
        mon =d.getMonth()+1 ;
        if(mon<10){
            mon = "0"+mon;
        }
        $scope.daily.date = dte + '/' + mon+ '/' + d.getFullYear();

    }

    $scope.initiateCalendar = function() {
        $('.input-group.date').datepicker({
            format: 'dd/mm/yyyy',
            orientation: "auto"
        });
       
            $('.input-group.date').each(function() {
        //$(this).datepicker('setDate', $scope.filter.from_date);
        });
    }
    $scope.initiateCalendar();


});


app.controller('loginCtrl', function($scope, $rootScope, $location, Data) {
    console.log();
    $("#username").focus();
    $scope.isLogin = function() {
        if ($rootScope.authenticated) {
            $location.path('/dashboard');
        }
        $rootScope.loaded = true;
    }

    $scope.isLogin();


    $scope.doLogin = function(user) {
        $scope.submitted = 1;
        if ($scope.loginForm.$valid) {

            blockInput();

            Data.post('login', $scope.user).then(function(results) {
                releaseInput();
                pnotifyMessage(results.message, results.status);
                $scope.submitted = 0;
                if (results.status == "success") {
                    $location.path('/dashboard');
                }
            });
        }
    };
});


app.controller('logoutCtrl', function($scope, $rootScope, $routeParams, $location, $http, Data) {
    $scope.logout = function() {
        Data.get('logout').then(function(results) {
            //pnotifyMessage(results.message, results.status);
            $location.path('/login');
        });
    }

    $scope.logout();
});



app.controller('incCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {
    $scope.filter = [];
    $scope.inc = function(){
        
        $scope.totalinc = 0 ;
        if($scope.fmonth){
            
            var d  = new Date();            
            var year =  d.getFullYear();     
            var daysinmon =  daysInMonth ($scope.fmonth, year);
            $scope.fromdate = d.getFullYear()+ '-' + $scope.fmonth +'-'+  01  ;
            $scope.todate = d.getFullYear() + '-' + $scope.fmonth +'-'+ daysinmon;
            $scope.filter.date = {value:$scope.fromdate,value1:$scope.todate,op:"Between"}
    
        }else{
            
            $scope.filter.date = setDateFilter($scope.filter);
        }
       Data.get('collection',$scope.filter).then(function(results){
        $scope.collection = results.collection;
        $scope.collection["chitidays"] = [];
        $scope.collection["incper"] = [];
        for(i=0;i<$scope.collection.length;i++){
            if($scope.collection[i].tYpe == 1){
                //console.log($scope.collection[i]);
                $scope.collection[i].chitidays = 90;
            }else if($scope.collection[i].tYpe == 2){
                $scope.collection[i].chitidays = 13;                
            }else if($scope.collection[i].tYpe == 3){
                $scope.collection[i].chitidays = 9;
            }else{

            }
            if(($scope.collection[i].tYpe !=4)&& $scope.collection[i].chitiamount>0 ){
            var pdpaidamt = Number($scope.collection[i].chitiamount)/Number($scope.collection[i].chitidays);

           var pdinc = Number($scope.collection[i].amount) -Number($scope.collection[i].sowji) - Number(pdpaidamt);
           $scope.collection[i].incper = pdinc;
           $scope.totalinc += pdinc;
        }else if(($scope.collection[i].tYpe ==4) && $scope.collection[i].chitiamount>0){
            $scope.totalinc += $scope.collection[i].amount ;
            console.log($scope.collection[i]);
        }
    }
   // console.log($scope.collection);
      //  $scope.getchititype();
       });
       
    }
    
    $scope.getchititype = function(){
        
        //console.log($scope.collection);
   
    
  

    }

    $scope.getcustomerlist= function(){
        Data.get('customers',{chitfund:{op:"!=", value:"1" }}).then(function(results){
            $scope.customers = results.customers;
        });
    }
    $scope.getcustomerlist();
    $scope.initiateCalendar = function() {
        $('.input-group.date').datepicker({
            format: 'dd/mm/yyyy',
            orientation: "auto"
        });
       
            $('.input-group.date').each(function() {
    //$(this).datepicker('setDate', $scope.filter.from_date);
    });
    }
    $scope.initiateCalendar();
});



app.controller('daybookCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {
    
    
   $scope.init = function(){
    $scope.chititype=["","90 Days","Weekly","10 Days","Monthly","Daily" ];
    $scope.daybook = [];
   }

   $scope.showdaybook = function(){
        $scope.init();
        $scope.submitted = 1;        
        Data.get('daybook',{date:changeDateSQLFormat($scope.rcvddate)}).then(function(results){
            $scope.daybook = results.daybook;
            $scope.checkopbal();
        });
   }

    $scope.scrollDown = function(){
        window.scrollTo(0, 5000);
    }


    $scope.scrollUp = function(){
        window.scrollTo(0, -5000);
    }
    

   $scope.showdaybook1 = function(){
    console.log($scope.posno);
    $scope.posno++;
    $scope.init();
    $scope.submitted = 1;
    $scope.getdrcrlist();
    $scope.interestpaid();
    $scope.opbal = 0;
    
    $scope.totalamount = "0";
    $scope.getcollbal();
    $scope.getchitilist();
    
    $scope.getreceivedamountind();
    $scope.getasalulist();
   }
    
    $scope.opinterest = function(){
        console.log($scope.posno);
        $scope.posno++;
       var filter = {date:{value:changeDateSQLFormat($scope.rcvddate),op:"<"},note:{op:"!=" , value:"interestcal" },debit:{"op":">","value":0},fields: "sum(credit) as credittotal,sum(debit) as debittotal"}
       Data.get('interest',filter).then(function(results){
           $scope.opinterest = results.interest[0];
           $scope.opbal -= $scope.opinterest.debittotal
       });
    }

    $scope.getcollectionList = function(){
        console.log($scope.posno);
        $scope.posno++;
        var notcolids = ($scope.notcolids && $scope.notcolids.length > 0)?$scope.notcolids.join():0;
        $scope.filter = {id:{op:"Not In",value: notcolids },rcvddate : changeDateSQLFormat($scope.rcvddate)};
        Data.get('collection',$scope.filter).then(function(results){
            $scope.collection = results.collection;
            $scope.getrcvdamtlist();
            $scope.getopcftrans();
           // $scope.opbal += Number($scope.getsum($scope.collection,"amount"));
           if($scope.collection && $scope.collection.length > 0){
                for(i=0;i<$scope.collection.length;i++){
                    $scope.totalamount += $scope.collection[i].amount;
                    $scope.customersid.push($scope.collection[i].customer);
                }
            }
            //op of interest paid
            var filter = {date:{value:changeDateSQLFormat($scope.rcvddate),op:"<"},note:{op:"!=" , value:"interestcal" },debit:{"op":">","value":0},fields: "sum(credit) as credittotal,sum(debit) as debittotal"}
            Data.get('interest',filter).then(function(results){
                if(results.interest){
                    $scope.opinterest = results.interest[0];
                    $scope.opbal -= $scope.opinterest.debittotal
                }
                $scope.getcustomerlist();
            });
            
        });
        // $scope.openingbal();
        
        
    }

    $scope.interestpaid = function(){
        console.log($scope.posno);
        $scope.posno++;
        var filter = {date:changeDateSQLFormat($scope.rcvddate),debit:{"op":">",value:0}}
        Data.get('interest',filter).then(function(results){
            $scope.payinterest = results.interest;
        });
    }


    $scope.getclosingbalance = function(){
        $scope.closingbalance = Number($scope.opbal);
        $scope.creditorsttl = 0;
        $scope.debitorsttl = 0;

        //creditosttl
        $scope.creditorsttl += Number($scope.getsum($scope.receivedamount,"amount"));
        $scope.creditorsttl += Number($scope.getsum($scope.colreceivedamount,"amount"));
        $scope.creditorsttl += Number($scope.getsum($scope.drcr,"credit"));

        //debitorsttl
        $scope.debitorsttl += Number($scope.getsum($scope.drcr,"debit"));

        $scope.closingbalance += Number($scope.creditorsttl) - Number($scope.debitorsttl);
        console.log($scope.closingbalance)
    }
    
    
        $scope.getasalulist = function(){
            console.log($scope.posno);
        $scope.posno++;
            $scope.asalufilter={date : changeDateSQLFormat($scope.rcvddate)};
            Data.get('asalu',$scope.asalufilter).then(function(results){
                $scope.asalu = results.asalu;
                $scope.asaluttl = $scope.getsum($scope.asalu,"amount");
                //$scope.chitiamountttl = $scope.getsum($scope.asalu,"chitiamount");
                // console.log("asal -",$scope.asaluttl , "chitttl - ", $scope.chitiamountttl);
                // $scope.opinterest();
            });
    }

    $scope.getchitilist = function(){
        console.log($scope.posno);
        $scope.posno++;
        $scope.ccommlist = [];
        $scope.suriccommlist = [];
        $scope.ccommttl = 0;
        $scope.suriccommttl = 0;
        $scope.filter = {date : changeDateSQLFormat($scope.rcvddate)}
        Data.get('chiti',$scope.filter).then(function(results){
            $scope.chiti = results.chiti;
            $scope.chitilength = $scope.chiti.length ;
            for(i=0;i<$scope.chitilength;i++){
                if($scope.chiti[i].suriccomm > 0){
                    $scope.suriccommexist = 1; 
                    $scope.suriccommttl += Number($scope.chiti[i].suriccomm);
                    $scope.suriccommlist.push($scope.chiti[i]);
                }
                if($scope.chiti[i].ccomm > 0){
                    $scope.ccommexist = 1;
                    $scope.ccommttl += Number($scope.chiti[i].ccomm);
                    $scope.ccommlist.push($scope.chiti[i]);
                }
            }
            
        });
    }


    $scope.getcollbal = function(){
        console.log($scope.posno);
        $scope.posno++;
        $scope.filter1 = {rcvddate:{value:changeDateSQLFormat($scope.rcvddate),op:"<"},received:1,fields :"sum(a.sowji) as sowjitotal, sum(a.amount) as amount"}
        Data.get('collection',$scope.filter1).then(function(results){
            $scope.collbal = results.collection;  
            // console.log("collection:",($scope.collbal[0].amount));
            //$scope.opbal -= Number($scope.collbal[0].amount);
            $scope.getdrcrtotal();
            $scope.getreceivedamount();
            $scope.getchitiamtttl();

        });
    }
    $scope.getdrcrtotal= function(){
        console.log($scope.posno);
        $scope.posno++;
        // $scope.changeddate = changeDateSQLFormat($scope.rcvddate);
         $scope.filter={date:{value:changeDateSQLFormat($scope.rcvddate),op:"<"},note:{op:"!=" , value:"interestcal" },showdaybook:{op:"!=" , value:"2"  },fields: "sum(credit) as credittotal,sum(debit) as debittotal"}
         Data.get('drcr',$scope.filter).then(function(results){
            if(results.drcr.length){ 
            // console.log("credittotal:",(results.drcr[0].credittotal) || 0);     
            // console.log("debittotal:",(results.drcr[0].debittotal)|| 0);    
            $scope.opbal += Number(results.drcr[0].credittotal)|| 0;
            $scope.opbal -= Number(results.drcr[0].debittotal)|| 0;
            }
            // $scope.getopcftrans();
         });
     }


     
     $scope.checkopbal = function(){
        //  $scope.getcustomerlist();
        $scope.opbal = $scope.daybook.opbal;
        console.log($scope.posno,$scope.opbal);
        // $scope.posno++;
        //  $scope.getcustomerlist();
        //  console.log($scope.opbal);
        var mon = "";
        if($scope.rcvddate == "01/01/2021" && Number($scope.opbal) != 54412){
            mon = "jan";
            var fixno = 54412;
            var drcrid = 786;
        }else if($scope.rcvddate == "01/07/2021" && Number($scope.opbal) != 94943){
            mon = "july";
            var fixno = 94943;
            var drcrid = 868;
        }else if($scope.rcvddate == "01/08/2021" && Number($scope.opbal) != 232705){
            mon = "aug";
            var fixno = 232705;
            var drcrid = 800;
        }
        
         if(mon != ""){
            var res = false;
            res = confirm("Do you want to Get the fixed op balance");
            if(res){
                if(Number($scope.opbal) != fixno){
                    
                    Data.get("drcr/"+ drcrid ).then(function(results){
                        $scope.tallyentry = results.drcr;
                        $scope.tallyentry.credit = Number($scope.tallyentry.credit);
                        if(Number($scope.tallyentry.credit) > 0){  
                            $scope.tallyentry.credit += fixno - $scope.opbal;
                            if(Number($scope.tallyentry.credit) < 0){
                                $scope.tallyentry.debit = Number($scope.tallyentry.credit);
                                $scope.tallyentry.credit = "0.00";
                            }
                        }else{
                            $scope.tallyentry.debit = Number($scope.tallyentry.debit);
                            console.log($scope.tallyentry.debit);//102803
                            console.log($scope.opbal);
                            $scope.tallyentry.debit -= fixno - $scope.opbal;
                            console.log($scope.tallyentry.debit);//-1966348
                            if(Number($scope.tallyentry.debit) < 0){
                                $scope.tallyentry.credit = Number($scope.tallyentry.debit) * (-1);
                                $scope.tallyentry.debit = "0.00";
                                console.log($scope.tallyentry);
                            }else{
                                $scope.tallyentry.credit = "0.00";
                                console.log($scope.tallyentry);
                            }
                        }
                        Data.put("drcr/"+drcrid,$scope.tallyentry).then(function(results){
                            Data.toast(results);
                            if(results.status == "success"){
                                // $scope.showdaybook();
                                $scope.test();
                            }
                        });
                    })
                }
            }
        }
     }

     $scope.getopcftrans = function(){
        console.log($scope.posno,$scope.opbal);
        $scope.posno++;
         var filter = {date:{value:changeDateSQLFormat($scope.rcvddate),op:"<"},fields: "sum(credit) as credit,sum(debit) as debit"}
         Data.get('cftrans',filter).then(function(results){
            if(results.cftrans && results.cftrans.length){
                $scope.opbal += Number(results.cftrans[0].credit)|| 0;
                $scope.opbal -= Number(results.cftrans[0].debit)|| 0;
            }
            console.log($scope.posno,$scope.opbal);
            // $scope.getcustomerlist();
            // $scope.opbal = ($scope.opbal).toFixed(2);
            // console.log($scope.opbal);
            // $scope.getcustomerlist();
            setTimeout(function(){
                $scope.checkopbal();
            }, 1000);
            
         });

     }
     
     $scope.changeDateUserFormat= function(dt){
        
        if(dt){
              return  changeDateUserFormat(dt);
        }
    }

        $scope.getreceivedamount = function(){
            console.log($scope.posno);
            $scope.posno++;
            $scope.changeddate = changeDateSQLFormat($scope.rcvddate);
           $scope.filter = {rcvddate : $scope.changeddate,colid:{op:"<",value:1},fields: "sum(a.amount) as amount", group_by :"a.customer"}
            Data.get('receivedamount',$scope.filter).then(function(results){
                $scope.receivedamount = results.receivedamount;
                for(k=0;k<$scope.receivedamount.length;k++){
                    var tmp = {};
                    tmp.customer = $scope.receivedamount[k].customer;
                    tmp.amount = $scope.receivedamount[k].amount;
                    $scope.customersrcvdamt.push(tmp);
                }
                // console.log($scope.receivedamount);
                // $scope.getrcvdamtlist();
                $scope.getcolrcvdamtlist();
                $scope.filtered = {rcvddate : $scope.changeddate,asalu: 1 ,fields: "sum(a.amount) as amount", group_by :"a.customer"}
                Data.get('receivedamount',$scope.filtered).then(function(resultss){
                    $scope.asalureceived = resultss.receivedamount;
                    for(h=0;h<$scope.receivedamount.length;h++){
                        $scope.receivedamount[h].asalurcvd = 0 ;
                         for(b=0;b<$scope.asalureceived.length;b++){
                             if($scope.asalureceived[b].customer == $scope.receivedamount[h].customer){
                                 $scope.receivedamount[h].asalurcvd = $scope.asalureceived[b].amount;
                             }
                             var tmp = {};
                            tmp.customer = $scope.asalureceived[b].customer;
                            tmp.amount = $scope.asalureceived[b].amount;
                            $scope.customersrcvdamt.push(tmp);
                         }
                    }
                    // console.log($scope.receivedamount);
              // $scope.opbal +=  Number($scope.getsum($scope.receivedamount,"amount"))-Number($scope.getsum($scope.collection,"amount"));
            });
        });
        }

        $scope.getcolrcvdamtlist = function(){
            console.log($scope.posno);
            $scope.posno++;
            var filter = {rcvddate : $scope.changeddate,colid:{op:">=",value:1}}
            Data.get('receivedamount',filter).then(function(results){
                $scope.colreceivedamount = results.receivedamount;
                if($scope.colreceivedamount && $scope.colreceivedamount.length ){
                    $scope.notcolids = [];
                    for(n=0;n<$scope.colreceivedamount.length;n++){
                        $scope.notcolids.push($scope.colreceivedamount[n].colid);
                        $scope.customersid.push($scope.colreceivedamount[n].customer);
                        var tmp = {};
                        tmp.customer = $scope.colreceivedamount[n].customer;
                        tmp.amount = $scope.colreceivedamount[n].amount;
                        $scope.customersrcvdamt.push(tmp);
                    }
                }
                $scope.getcollectionList();
            });
        }

        $scope.getrcvdamtlist = function(){
            // console.log($scope.collection);
            console.log($scope.posno);
        $scope.posno++;
            var colid = 0;
            var colidarr = {};
            var allids = [];
            var filter = {rcvddate : $scope.changeddate,note:{op:"like",value:"Paid for id's %"}}
            Data.get('receivedamount',filter).then(function(results){
                $scope.rcvdamtlist = results.receivedamount;
                for(r=0;r<$scope.rcvdamtlist.length;r++){
                    var existid = false;
                    // console.log($scope.rcvdamtlist[r].)
                    colid = $scope.rcvdamtlist[r].note.replace("Paid for id's ",'');
                    if(colid.indexOf(",") >= 0){
                        colidarr = colid.split(',');
                        for(t=0;t<colidarr.length;t++){
                            for(h=0;h<$scope.collection.length;h++){
                                if($scope.collection[h].id == colidarr[t]){
                                    console.log(colidarr[t]);
                                    if(Number($scope.rcvdamtlist[r].amount)/colidarr.length == $scope.collection[h].amount){
                                        $scope.collection[h].rcvd = $scope.collection[h].amount;
                                    }else{
                                        console.log(colidarr[t]);
                                        $scope.collection[h].rcvd = $scope.rcvdamtlist[r].amount + "(ttl)";
                                    }
                                    break;
                                }
                                if(h == $scope.collection.length - 1){
                                    console.log($scope.collection[h]);
                                    allids.push(colidarr[t]);
                                }
                            }
                        }
                    }else{
                        for(p=0;p<$scope.collection.length;p++){
                            if($scope.collection[p].id == colid){
                                $scope.collection[p].rcvd = $scope.rcvdamtlist[r].amount;
                                break;
                            }
                            if(p ==$scope.collection.length - 1){
                                allids.push(colid);
                            }
                        }
                        // allids.push(colid);
                    }
                }
                var uniqueNames = [];
                $.each(allids, function(i, el){
                    if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
                });
                if(allids.length > 0){
                    var filter1 = {id:{op:"In",value: uniqueNames.join() }}
                    Data.get("collection",filter1).then(function(results){
                        $scope.otrcollection = results.collection;
                        if($scope.otrcollection && $scope.otrcollection.length){
                            for(g=0;g<$scope.otrcollection.length;g++){
                                for(w=0;w<$scope.rcvdamtlist.length;w++){
                                    if($scope.rcvdamtlist[w].note.indexOf($scope.otrcollection[g].id) > 0){
                                        // console.log($scope.rcvdamtlist[w].amount, ">", $scope.otrcollection[g].amount);
                                        if($scope.rcvdamtlist[w].amount > $scope.otrcollection[g].amount){
                                            $scope.otrcollection[g].rcvd = $scope.rcvdamtlist[w].amount + "(ttl)";    
                                        }else{
                                            $scope.otrcollection[g].rcvd = $scope.rcvdamtlist[w].amount;
                                        }
                                    }
                                }
                                $scope.collection.push($scope.otrcollection[g]);
                            }
                        }
                    });
                }
                    
            });
            
        }


    $scope.getreceivedamountind =function(){
        console.log($scope.posno);
        $scope.posno++;
        $scope.changeddate = changeDateSQLFormat($scope.rcvddate);
        $scope.filter1={rcvddate:{value:changeDateSQLFormat($scope.rcvddate),op:"<"}}
        Data.get('receivedamount',$scope.filter1).then(function(results){
            $scope.receivedamountind = results.receivedamount;
            $scope.opbal +=  Number($scope.getsum($scope.receivedamountind,"amount"));
        });
    }
    $scope.getchitiamtttl = function(){
        console.log($scope.posno);
        $scope.posno++;
        $scope.filter={date:{value:changeDateSQLFormat($scope.rcvddate),op:"<"},fields: "sum(amount) as amount,sum(ccomm) as ccomm,sum(suriccomm) as suriccomm"}
        Data.get('chiti',$scope.filter).then(function(results){
            $scope.chitittl = results.chiti;
            // console.log("newchiti:",$scope.chitittl[0].chitiamount);
            $scope.opbal -= Number($scope.chitittl[0].chitiamount) - Number($scope.chitittl[0].ccomm)  - Number($scope.chitittl[0].suriccomm);
            
        });
    }
    $scope.getdrcrlist= function(){
        console.log($scope.posno);
        $scope.posno++;
        $scope.changeddate = changeDateSQLFormat($scope.rcvddate);
        $scope.filter={date:$scope.changeddate,note:{op:"!=" , value:"interestcal" },showdaybook: {op:"!=", value: "2" } }
        Data.get('drcr',$scope.filter).then(function(results){
            $scope.drcr = results.drcr;
            if($scope.drcr && $scope.drcr.length){
                for(i=0;i<$scope.drcr.length;i++){
                    if($scope.drcr[i].creditexp==1 && $scope.drcr[i].credit==0.00 ){
                        $scope.drshow += 1 ;
                    }else if($scope.drcr[i].creditexp==1 && $scope.drcr[i].debit==0.00 ){
                        console.log($scope.drcr[i]);
                        $scope.crshow += 1 ;
                    }
                    if($scope.drcr[i].chitfundid>0){
                        if($scope.drcr[i].debit == "0.00"){
                            $scope.chitfundrshow += $scope.drcr[i].chitfundid;
    
                        }
                        $scope.chitfundpshow += $scope.drcr[i].chitfundid;
                    }
                }
            }
            $scope.getcftranslist();
        });
    }

    $scope.getcftranslist = function(){
        console.log($scope.posno);
        $scope.posno++;
        // console.log("hi");
        // $scope.cftrans=[];
        var filter = {date:changeDateSQLFormat($scope.rcvddate) };
        Data.get('cftrans',filter).then(function(results){
            $scope.cftrans = results.cftrans;
        });
    }
   

    $scope.getsum = function(obj,key){
        var total= 0;
        if(obj && obj.length){
            for(i=0;i<obj.length;i++){
                total += Number(obj[i][key]) || 0;
            }
        }
        return total;
    }
    
    $scope.getcollectiontotal = function(obj,key,cn){
        // console.log($scope.posno);
        // $scope.posno++;
        var total= 0;
        if(obj && obj.length ){
            for(i=0;i<obj.length;i++){
                if(obj[i].customer==cn){
                    total += Number(obj[i][key]) || 0;
                }
               
            }
        }
        return total;
    }

    
   /* $scope.creditorstotal = function(){
        $scope.crtotal = "";
        $scope.rcpttotal = sum($scope.drcr)
    }*/

    $scope.initiateCalendar = function() {
        $('.input-group.date').datepicker({
            format: 'dd/mm/yyyy',
            orientation: "auto"
        });
       
            $('.input-group.date').each(function() {
    //$(this).datepicker('setDate', $scope.filter.from_date);
    });
    }
    $scope.initiateCalendar();

    $scope.todaydate = function(){
        d = new Date();
        mon =d.getMonth()+1 ;
        dte = d.getDate();
        if(mon<10){
            mon = "0"+mon;
        }
         if(dte<10){
            console.log(dte);
            dte = "0"+dte ;
        }
         $scope.rcvddate = dte + '/' + mon + '/' + d.getFullYear();
         console.log($scope.rcvddate);
     }
     $scope.yesterdaydate = function(){
         d = new Date();
        d.setDate(d.getDate()-1);
        dte = d.getDate();
        if(dte<10){
            dte = "0"+ dte;
        }
        mon =d.getMonth()+1 ;
        if(mon<10){
            mon = "0"+mon;
        }
        $scope.rcvddate = dte + '/' + mon+ '/' + d.getFullYear();
     
      }
      $scope.DByesterdaydate = function(){
         d = new Date();
         d.setDate(d.getDate()-2);
         dte = d.getDate();
        if(dte<10){
            dte = "0"+ dte;
        }
        mon =d.getMonth()+1 ;
        if(mon<10){
            mon = "0"+mon;
        }
        $scope.rcvddate = dte + '/' + mon+ '/' + d.getFullYear();
     
      }
      $scope.D2Byesterdaydate = function(){
         d = new Date();
         d.setDate(d.getDate()-3);
         dte = d.getDate();
        if(dte<10){
            dte = "0"+ dte;
        }
        mon =d.getMonth()+1 ;
        if(mon<10){
            mon = "0"+mon;
        }
        $scope.rcvddate = dte + '/' + mon+ '/' + d.getFullYear();
     
      }

/*$scope.openingbal = function(){
    $scope.filterr = {date:{op:"<" ,value:$scope.rcvddate}}
    Data.get('drcr',$scope.filterr).then(function(results){
        $scope.drcr = results.drcr;
});
}*/
    
});

app.controller('olddaybookCtrl', function($route, $scope, $rootScope, $routeParams, $location, $http, Data) {
    $scope.total = {credit:0,debit:0,receivedamount:0,collection:0,newchiti:0,};
    $scope.chititype=["","90 Days","Weekly","10 Days","Monthly","Daily" ];

    $scope.suriccommexist = 0 ; 
    $scope.suriccommttl = 0 ; 
    $scope.suriccommlist = [];
    $scope.ccommexist = 0 ; 
    $scope.ccommttl = 0 ; 
    $scope.ccommlist = [];
   


    
    $scope.opinterest = function(){
        console.log("hi");
       var filter = {date:{value:changeDateSQLFormat($scope.rcvddate),op:"<"},note:{op:"!=" , value:"interestcal" },debit:{"op":">","value":0},fields: "sum(credit) as credittotal,sum(debit) as debittotal"}
       Data.get('interest',filter).then(function(results){
           $scope.opinterest = results.interest[0];
           $scope.opbal -= $scope.opinterest.debittotal;
           console.log($scope.opbal,"interest",$scope.opinterest.debittotal);

       });
    }

    $scope.getcollectionList = function(){
        
        $scope.getdrcrlist();
        $scope.interestpaid();
        $scope.opbal = 0;
        $scope.filter = {rcvddate : changeDateSQLFormat($scope.rcvddate)};
        $scope.totalamount = "0";
        Data.get('collection',$scope.filter).then(function(results){
            
            $scope.collection = results.collection;
           // $scope.opbal += Number($scope.getsum($scope.collection,"amount"));
            for(i=0;i<$scope.collection.length;i++){
                $scope.totalamount += $scope.collection[i].amount;
            }

            //op of interest paid
            var filter = {date:{value:changeDateSQLFormat($scope.rcvddate),op:"<"},note:{op:"!=" , value:"interestcal" },debit:{"op":">","value":0},fields: "sum(credit) as credittotal,sum(debit) as debittotal"}
            Data.get('interest',filter).then(function(results){
                $scope.opinterest = results.interest[0];
                $scope.opbal -= $scope.opinterest.debittotal;
                console.log($scope.opbal,"interst",$scope.opinterest.debittotal);     
            });
            
        });
        // $scope.openingbal();
        
        $scope.getcollbal();
        $scope.getchitilist();
        
        $scope.getreceivedamountind();
        $scope.getasalulist();
    }

    $scope.interestpaid = function(){
        var filter = {date:changeDateSQLFormat($scope.rcvddate),debit:{"op":">",value:0}}
        Data.get('interest',filter).then(function(results){
            $scope.payinterest = results.interest;
        });
    }
    
    
        $scope.getasalulist = function(){
            $scope.asalufilter={date : changeDateSQLFormat($scope.rcvddate)};
            Data.get('asalu',$scope.asalufilter).then(function(results){
                $scope.asalu = results.asalu;
                $scope.asaluttl = $scope.getsum($scope.asalu,"amount");
                //$scope.chitiamountttl = $scope.getsum($scope.asalu,"chitiamount");
                console.log("asal -",$scope.asaluttl , "chitttl - ", $scope.chitiamountttl);
                // $scope.opinterest();
            });
    }

    $scope.getchitilist = function(){
        $scope.ccommlist = [];
        $scope.suriccommlist = [];
        $scope.ccommttl = 0;
        $scope.suriccommttl = 0;
        $scope.filter = {date : changeDateSQLFormat($scope.rcvddate)}
        Data.get('chiti',$scope.filter).then(function(results){
            $scope.chiti = results.chiti;
            $scope.chitilength = $scope.chiti.length ;
            for(i=0;i<$scope.chitilength;i++){
                if($scope.chiti[i].suriccomm > 0){
                    $scope.suriccommexist = 1; 
                    $scope.suriccommttl += Number($scope.chiti[i].suriccomm);
                    $scope.suriccommlist.push($scope.chiti[i]);
                }
                if($scope.chiti[i].ccomm > 0){
                    $scope.ccommexist = 1;
                    $scope.ccommttl += Number($scope.chiti[i].ccomm);
                    $scope.ccommlist.push($scope.chiti[i]);
                }
            }
            
        });
    }


    $scope.getcollbal = function(){
        $scope.filter1 = {rcvddate:{value:changeDateSQLFormat($scope.rcvddate),op:"<"},received:1,fields :"sum(a.sowji) as sowjitotal, sum(a.amount) as amount"}
        Data.get('collection',$scope.filter1).then(function(results){
            $scope.collbal = results.collection;  
            console.log("collection:",($scope.collbal[0].amount));
            //$scope.opbal -= Number($scope.collbal[0].amount);
            $scope.getdrcrtotal();
            $scope.getreceivedamount();
            $scope.getchitiamtttl();

        });
    }
    $scope.getdrcrtotal= function(){
        // $scope.changeddate = changeDateSQLFormat($scope.rcvddate);
         $scope.filter={date:{value:changeDateSQLFormat($scope.rcvddate),op:"<"},note:{op:"!=" , value:"interestcal" },showdaybook:{op:"!=" , value:"2"  },fields: "sum(credit) as credittotal,sum(debit) as debittotal"}
         Data.get('drcr',$scope.filter).then(function(results){
            if(results.drcr.length){ 
            console.log("credittotal:",(results.drcr[0].credittotal) || 0);     
            console.log("debittotal:",(results.drcr[0].debittotal)|| 0);    
            $scope.opbal += Number(results.drcr[0].credittotal)|| 0;
            $scope.opbal -= Number(results.drcr[0].debittotal)|| 0;
            console.log($scope.opbal,"drcr",results.drcr[0].credittotal,results.drcr[0].debittotal);
            }
            $scope.getopcftrans();
         });
     }


     
     $scope.checkopbal = function(mon){
         if(mon == "jan"){
            var fixno = 54412;
            var drcrid = 786;
         }else{
            var fixno = 232705;
            var drcrid = 800;
         }
         var res = false;
         res = confirm("Do you want to Get the fixed op balance");
         if(res){
             if(Number($scope.opbal) != fixno){
                 
                 Data.get("drcr/"+ drcrid ).then(function(results){
                     $scope.tallyentry = results.drcr;
                     $scope.tallyentry.credit = Number($scope.tallyentry.credit);
                     if(Number($scope.tallyentry.credit) > 0){
                        $scope.tallyentry.credit += fixno - $scope.opbal;
                        if(Number($scope.tallyentry.credit) < 0){
                            $scope.tallyentry.debit = Number($scope.tallyentry.credit);
                            $scope.tallyentry.credit = 0;
                        }
                     }else{
                        $scope.tallyentry.debit = Number($scope.tallyentry.debit);
                        $scope.tallyentry.debit -= fixno - $scope.opbal;
                        if(Number($scope.tallyentry.debit) < 0){
                            $scope.tallyentry.credit = Number($scope.tallyentry.debit);
                            $scope.tallyentry.debit = 0;
                        }
                     }
                     Data.put("drcr/"+drcrid,$scope.tallyentry).then(function(results){
                        Data.toast(results);
                        if(results.status == "success"){
                            $scope.getcollectionList();
                        }
                     });
                 })
             }
         }
     }

     $scope.getopcftrans = function(){
         var filter = {date:{value:changeDateSQLFormat($scope.rcvddate),op:"<"},fields: "sum(credit) as credit,sum(debit) as debit"}
         Data.get('cftrans',filter).then(function(results){
            if(results.cftrans && results.cftrans.length){
                $scope.opbal += Number(results.cftrans[0].credit)|| 0;
                $scope.opbal -= Number(results.cftrans[0].debit)|| 0;
                console.log($scope.opbal,"cftrans",results.cftrans[0].credit,results.cftrans[0].debit);
            }
            if($scope.rcvddate == "01/01/2021" && Number($scope.opbal) != 54412){
                $scope.checkopbal("jan");
            }else if($scope.rcvddate == "01/08/2021" && Number($scope.opbal) != 232705){
                $scope.checkopbal("aug");
            }

         });

     }
     
     $scope.changeDateUserFormat= function(dt){
        
        if(dt){
              return  changeDateUserFormat(dt);
        }
    }

        $scope.getreceivedamount = function(){
            $scope.changeddate = changeDateSQLFormat($scope.rcvddate);
            $scope.filter = {rcvddate : $scope.changeddate,fields: "sum(a.amount) as amount", group_by :"a.customer"}
            Data.get('receivedamount',$scope.filter).then(function(results){
                $scope.receivedamount = results.receivedamount;
                console.log($scope.receivedamount);
                $scope.filtered = {rcvddate : $scope.changeddate,asalu: 1 ,fields: "sum(a.amount) as amount", group_by :"a.customer"}
                Data.get('receivedamount',$scope.filtered).then(function(resultss){
                    $scope.asalureceived = resultss.receivedamount;
                    for(h=0;h<$scope.receivedamount.length;h++){
                        $scope.receivedamount[h].asalurcvd = 0 ;
                         for(b=0;b<$scope.asalureceived.length;b++){
                             if($scope.asalureceived[b].customer == $scope.receivedamount[h].customer ){
                                 $scope.receivedamount[h].asalurcvd = $scope.asalureceived[b].amount;
                             }
                         }
                    }
                    console.log($scope.receivedamount);
              // $scope.opbal +=  Number($scope.getsum($scope.receivedamount,"amount"))-Number($scope.getsum($scope.collection,"amount"));
            });
        });
        }

    $scope.getreceivedamountind =function(){
        $scope.changeddate = changeDateSQLFormat($scope.rcvddate);
        $scope.filter1={rcvddate:{value:changeDateSQLFormat($scope.rcvddate),op:"<"}}
        Data.get('receivedamount',$scope.filter1).then(function(results){
            $scope.receivedamountind = results.receivedamount;
            console.log("rcvdamt:",$scope.getsum($scope.receivedamountind,"amount"));
            $scope.opbal +=  Number($scope.getsum($scope.receivedamountind,"amount"));
            console.log($scope.opbal,"rcvdamt", Number($scope.getsum($scope.receivedamountind,"amount")));
        });
    }
    $scope.getchitiamtttl = function(){
        $scope.filter={date:{value:changeDateSQLFormat($scope.rcvddate),op:"<"},fields: "sum(amount) as amount,sum(ccomm) as ccomm,sum(suriccomm) as suriccomm"}
        Data.get('chiti',$scope.filter).then(function(results){
            $scope.chitittl = results.chiti;
            console.log("newchiti:",$scope.chitittl[0].chitiamount);
            $scope.opbal -= Number($scope.chitittl[0].chitiamount) - Number($scope.chitittl[0].ccomm)  - Number($scope.chitittl[0].suriccomm);
            console.log($scope.opbal,"chiti",Number($scope.chitittl[0].chitiamount) - Number($scope.chitittl[0].ccomm)  - Number($scope.chitittl[0].suriccomm));            
        });
    }
    $scope.getdrcrlist= function(){
        $scope.changeddate = changeDateSQLFormat($scope.rcvddate);
        $scope.filter={date:$scope.changeddate,note:{op:"!=" , value:"interestcal" },showdaybook: {op:"!=", value: "2" } }
        Data.get('drcr',$scope.filter).then(function(results){
            $scope.drcr = results.drcr;
            $scope.crshow= 0 ;
            $scope.drshow= 0 ;
            $scope.chitfundpshow = 0;
            $scope.chitfundrshow = 0;
            if($scope.drcr){
                for(i=0;i<$scope.drcr.length;i++){
                    if($scope.drcr[i].creditexp==1 && $scope.drcr[i].credit==0.00 ){
                        console.log($scope.drcr[i]);
                        $scope.drshow += 1 ;
                    }else if($scope.drcr[i].creditexp==1 && $scope.drcr[i].debit==0.00 ){
                        console.log($scope.drcr[i]);
                        $scope.crshow += 1 ;
                    }
                    if($scope.drcr[i].chitfundid>0){
                        if($scope.drcr[i].debit == "0.00"){
                            $scope.chitfundrshow += $scope.drcr[i].chitfundid;

                        }
                        $scope.chitfundpshow += $scope.drcr[i].chitfundid;
                    }
                }
            }
            $scope.getcftranslist();
        });
    }

    $scope.getcftranslist = function(){
        var filter = {date:changeDateSQLFormat($scope.rcvddate) };
        Data.get('cftrans',filter).then(function(results){
            $scope.cftrans = results.cftrans;
        });
    }
   

    $scope.getsum = function(obj,key){
        var total= 0;
        if(obj && obj.length){
            for(i=0;i<obj.length;i++){
                total += Number(obj[i][key]) || 0;
            }
        }
        return total;
    }
    
    $scope.getcollectiontotal = function(obj,key,cn){
        var total= 0;
        if(obj && obj.length ){
            for(i=0;i<obj.length;i++){
                if(obj[i].customer==cn){
                    total += Number(obj[i][key]) || 0;
                }
               
            }
        }
        return total;
    }

    
   /* $scope.creditorstotal = function(){
        $scope.crtotal = "";
        $scope.rcpttotal = sum($scope.drcr)
    }*/

    $scope.initiateCalendar = function() {
        $('.input-group.date').datepicker({
            format: 'dd/mm/yyyy',
            orientation: "auto"
        });
       
            $('.input-group.date').each(function() {
    //$(this).datepicker('setDate', $scope.filter.from_date);
    });
    }
    $scope.initiateCalendar();

    $scope.todaydate = function(){
        d = new Date();
        mon =d.getMonth()+1 ;
        dte = d.getDate();
        if(mon<10){
            mon = "0"+mon;
        }
         if(dte<10){
            console.log(dte);
            dte = "0"+dte ;
        }
         $scope.rcvddate = dte + '/' + mon + '/' + d.getFullYear();
         console.log($scope.rcvddate);
     }
     $scope.yesterdaydate = function(){
         d = new Date();
        d.setDate(d.getDate()-1);
        dte = d.getDate();
        if(dte<10){
            dte = "0"+ dte;
        }
        mon =d.getMonth()+1 ;
        if(mon<10){
            mon = "0"+mon;
        }
        $scope.rcvddate = dte + '/' + mon+ '/' + d.getFullYear();
     
      }
      $scope.DByesterdaydate = function(){
         d = new Date();
         d.setDate(d.getDate()-2);
         dte = d.getDate();
        if(dte<10){
            dte = "0"+ dte;
        }
        mon =d.getMonth()+1 ;
        if(mon<10){
            mon = "0"+mon;
        }
        $scope.rcvddate = dte + '/' + mon+ '/' + d.getFullYear();
     
      }
      $scope.D2Byesterdaydate = function(){
         d = new Date();
         d.setDate(d.getDate()-3);
         dte = d.getDate();
        if(dte<10){
            dte = "0"+ dte;
        }
        mon =d.getMonth()+1 ;
        if(mon<10){
            mon = "0"+mon;
        }
        $scope.rcvddate = dte + '/' + mon+ '/' + d.getFullYear();
     
      }

/*$scope.openingbal = function(){
    $scope.filterr = {date:{op:"<" ,value:$scope.rcvddate}}
    Data.get('drcr',$scope.filterr).then(function(results){
        $scope.drcr = results.drcr;
});
}*/
    
});


app.controller('createdrcrCtrl',function($route, $scope, $rootScope, $routeParams, $location, $http, Data){
    $scope.getcustomerlist= function(){
        Data.get('customers').then(function(results){
            $scope.customers = results.customers;
        });
    }
    $scope.getcustomerlist();
    // $scope.getchitfundlist = function(){

    //     Data.get('chitfund',{customer:$scope.customer}).then(function(results){
    //         $scope.chitfund = results.chitfund;
    //     });
    // }

$scope.chck = function(){
    for(i=0;i<$scope.customers.length;i++){
        if($scope.customers[i].id==$scope.customer){
            console.log($scope.customers[i]);
            if($scope.customers[i].chitfund == 1){
                $scope.forint = "0";
                $scope.showdaybook = "1";
                $scope.creditexp = "4";
                $scope.drorcr = "2";
                // $scope.getchitfundlist();
            }
        if($scope.customers[i].forint==1){
            $scope.forint= "1";
        }else{
            $scope.forint = "0";
        }
    }
    if($scope.customer == "41"){
        $scope.drorcr = "2";
        $scope.showdaybook = "1";
        $scope.creditexp = "2";
    }else if($scope.customer == "65"){
        $scope.creditexp = "3";
    }else if($scope.customer == "40"){
        $scope.drorcr = "1";
        $scope.showdaybook = "1";
    }
    
}
}

   $scope.drcrpost= function(){
     
        $scope.submitted = 1;
        $scope.debitamount="";
        $scope.creditamount="";
        $scope.collectionsowji = 0;
        $scope.changeddate = changeDateSQLFormat($scope.date);
        
        if($scope.drorcr==1){
          
            $scope.creditamount = $scope.amount;
        }else if($scope.drorcr == 2){
            
            $scope.debitamount = $scope.amount;
        }

        if($scope.customer == 1){
            if($scope.drorcr==1){               
                $scope.collectionsowji += $scope.amount;
            }else if($scope.drorcr == 2){
                $scope.collectionsowji -= $scope.amount;
            }
        }
        $scope.filter = {collectionsowji:$scope.collectionsowji,date: changeDateSQLFormat($scope.date),customer:$scope.customer,credit: $scope.creditamount,debit:$scope.debitamount,showdaybook:$scope.showdaybook,note:$scope.note,forint : $scope.forint,creditexp:$scope.creditexp,chitfundid:$scope.chitfundid}
        Data.post('drcr',$scope.filter).then(function(results){
            Data.toast(results);
        });
       
    }
   
/*
 $scope.print = function() {
        $(".noprint").hide();
        $(".printtable").removeClass("table-responsive");
        $(".condition").addClass("terms");
        window.print();
        $(".condition").removeClass("terms");
        $(".printtable").addClass("table-responsive");
        $(".noprint").show();
    }

*/
    $scope.initiateCalendar = function() {
        $('.input-group.date').datepicker({
            format: 'dd/mm/yyyy',
            orientation: "auto"
        });
       
            $('.input-group.date').each(function() {
    //$(this).datepicker('setDate', $scope.filter.from_date);
    });
    }
    $scope.initiateCalendar();

    $scope.todaydate = function(){
        d = new Date();
        mon =d.getMonth()+1 ;
        dte = d.getDate();
        if(mon<10){
            mon = "0"+mon;
        }
         if(dte<10){
            dte = "0"+dte ;
        }
         $scope.date = dte + '/' + mon + '/' + d.getFullYear();
     }
     $scope.yesterdaydate = function(){
         d = new Date();
        d.setDate(d.getDate()-1);
        dte = d.getDate();
        if(dte<10){
            dte = "0"+ dte;
        }
        mon =d.getMonth()+1 ;
        if(mon<10){
            mon = "0"+mon;
        }
        $scope.date = dte + '/' + mon+ '/' + d.getFullYear();
     
      }
      $scope.DByesterdaydate = function(){
         d = new Date();
         d.setDate(d.getDate()-2);
         dte = d.getDate();
        if(dte<10){
            dte = "0"+ dte;
        }
        mon =d.getMonth()+1 ;
        if(mon<10){
            mon = "0"+mon;
        }
        $scope.date = dte + '/' + mon+ '/' + d.getFullYear();
     
      }
      $scope.D2Byesterdaydate = function(){
         d = new Date();
         d.setDate(d.getDate()-3);
         dte = d.getDate();
        if(dte<10){
            dte = "0"+ dte;
        }
        mon =d.getMonth()+1 ;
        if(mon<10){
            mon = "0"+mon;
        }
        $scope.date = dte + '/' + mon+ '/' + d.getFullYear();
     
      }

     
});

// app.controller('creditorsCtrl',function($route, $scope, $rootScope, $routeParams, $location, $http, Data){

//     $scope.init = function(){
//         $scope.filter = {
//             sort_by : "a.firstname",
//             sort_order : "asc",
//             forint : 1
//         }
//         $scope.getcustomersop();
//     }


//     $scope.getcustomersop = function(){
//         // var filter={sort_by : $scope.filter.sort,sort_order:}
//         if($scope.filter.sort_by == "amount"){
//             if($scope.creditors){
//                 $scope.filter.sort_order == "asc"?
//                 sortarrasc($scope.creditors,"amount"):
//                 sortarrdesc($scope.creditors,"amount");
//                 return;
//             }
//         }
//         console.log("return");
//         Data.get("creditors",$scope.filter).then(function(results){
//             $scope.creditors = results.creditors;
            
//         });
//     }


//     $scope.changeDateUserFormat= function(dt){
        
//         if(dt){
//               return  changeDateUserFormat(dt);
//         }
//     }


//     $scope.getsum = function(obj,key){
//         var total= 0;
//         if(obj && obj.length){
//             for(i=0;i<obj.length;i++){
//                 total += Number(obj[i][key]) || 0;
//             }
//         }
//         return indianPriceFormat(total);
//     }


// });


app.controller('creditorsCtrl',function($route, $scope, $rootScope, $routeParams, $location, $http, Data){

    $scope.init = function(){
        $scope.filter = {
            sort_by : "a.firstname",
            sort_order : "asc",
            forint : 1
        }
        $scope.getcustomersop();
    }



    $scope.showLedger = function(cus){
        console.log(cus);
        var temp = {};
        temp.bydatechck = 1;
        temp.from_date = "01/01/2018";
        $location.path("/ledger/").search({"customer":cus});
    }


    $scope.getcustomersop = function(){
        // var filter={sort_by : $scope.filter.sort,sort_order:}
        if($scope.filter.sort_by == "amount"){
            if($scope.creditors){
                $scope.filter.sort_order == "asc"?
                sortarrasc($scope.creditors,"amount"):
                sortarrdesc($scope.creditors,"amount");
                return;
            }
        }
        // console.log("return");
        Data.get("creditors",$scope.filter).then(function(results){
            $scope.creditors = results.creditors;
            
        });
    }


    $scope.changeDateUserFormat= function(dt){
        
        if(dt){
              return  changeDateUserFormat(dt);
        }
    }


    $scope.getsum = function(obj,key){
        var total= 0;
        if(obj && obj.length){
            for(i=0;i<obj.length;i++){
                total += Number(obj[i][key]) || 0;
            }
        }
        return indianPriceFormat(total);
    }



});


app.controller('rcvdcollCtrl',function($route, $scope, $rootScope, $routeParams, $location, $http, Data){

    $scope.init = function(){
        $scope.yearr = [{id:1,year:"2023"},{id:2,year:"2022"},{id:3,year:"2021"},{id:4,year:"2020"},{id:5,year:"2019"},{id:6,year:"2018"}];
        $scope.months = [{id:"01",mon: 'January'},{id:"02",mon: 'February'},{id:"03",mon: 'March'},{id:"04",mon: 'April'}
        ,{id:"05",mon: 'May'},{id:"06",mon: 'June'},{id:"07",mon: 'July'},{id:"08",mon: 'August'},{id:"09",mon: 'September'},{id:"10",mon:'October'},
        {id:"11",mon:'November'},{id:"12",mon:'December'}];
        $scope.chititypes = ["","90 Days","Weekly","10 Days","Monthly","Daily" ];

        $scope.steps = {};
        $scope.steps.year = "1";
        $scope.filter = {"received":1,"tYpe":{"value":2,"op":"!="},"sort_by":"a.date","sort_order":"asc"};
        $scope.fyear = 2;
        $scope.getrcvdcollection();
    }

    $scope.getrcvdcollection = function(){
        if($scope.steps.month && $scope.fmonth){
            $scope.fromdate =  $scope.yearr[$scope.fyear-1].year + '-' + $scope.fmonth +'-'+  01  ;
            $scope.todate =  $scope.yearr[$scope.fyear-1].year + '-' + $scope.fmonth +'-'+ 31;
            $scope.filter.date = {value:$scope.fromdate,value1:$scope.todate,op:"Between"};
        }
        if($scope.steps.year && $scope.fyear){
            $scope.filter.fromdate = $scope.yearr[$scope.fyear-1].year  + '-01-01'  ;
            $scope.filter.todate = $scope.yearr[$scope.fyear-1].year + '-12-31';
             $scope.filter.date = {value:$scope.filter.fromdate,value1:$scope.filter.todate,op:"Between"};
        }
        // $scope.filter
        Data.get("collection",$scope.filter).then(function(results){
            $scope.rcvdcoll = results.collection;
        });
    }




    $scope.changeDateUserFormat= function(dt){
        
        if(dt){
              return  changeDateUserFormat(dt);
        }
    }

    $scope.gotochiti = function(coll){
        // $location.path("/chiti/"+coll.chiti).search({"collid":coll.id}).target("_blank");
        window.open(
            "#/chiti/"+coll.chiti+"?collid="+coll.id,
            "_blank");
    }


    $scope.stepschck = function(ind){
        // console.log(ind,$scope.steps);
        var eelse = 0;
        $scope.filter.fromdate = "";
        $scope.filter.todate = "";
        if($scope.steps.date == "1"){
            eelse = 1;
            if(ind == 1){
                $scope.steps.month = 0;
                $scope.steps.year = 0;
            }
        }
        if($scope.steps.month == "1"){
            eelse = 1;
            if(ind == 2){
                $scope.steps.date = 0;
                $scope.steps.year = 0;
            }
        }
        if($scope.steps.year == "1"){
            eelse = 1;
            if(ind == 3){
                $scope.steps.date = 0;
                $scope.steps.month = 0;
            }
        }
        // console.log(eelse);
        if(!eelse){
            console.log('else');
            $scope.nullobj();
        }
    }

    $scope.nullobj = function(){
        $scope.steps.date = 0;
        $scope.steps.month = 0;
        $scope.steps.year = 0;
        $scope.fyear = 0;
        $scope.fmonth = 0;
    }

    shortcut.add("Ctrl+up", function() {
        $scope.$apply(function(){
           if($scope.fmonth && $scope.fyear){
            
           }
        });
    });


    
    shortcut.add("Ctrl+m", function() {
        $scope.$apply(function(){
            var todaydate = (todayDate()).split('/');
                $scope.steps.month = "1";
                $scope.steps.date = "0";
                $scope.steps.year = "0";
                $scope.stepschck(2);
                for(h=0;h<$scope.months.length;h++){
                    if($scope.months[h].id == todaydate[1]){
                        $scope.fmonth = $scope.months[h].id;
                        break;
                    }
                }
                for(h=0;h<$scope.yearr.length;h++){
                    if($scope.yearr[h].year == todaydate[2]){
                        $scope.fyear = $scope.yearr[h].id;
                        break;
                    }
                }
                $scope.getrcvdcollection();
        });
    });

    shortcut.add("Ctrl+y", function() {
        $scope.$apply(function(){
            var todaydate = (todayDate()).split('/');
                $scope.steps.month = "0";
                $scope.steps.date = "0";
                $scope.steps.year = "1";
                $scope.stepschck(3);
                for(h=0;h<$scope.yearr.length;h++){
                    if($scope.yearr[h].year == todaydate[2]){
                        $scope.fyear = $scope.yearr[h].id;
                        break;
                    }
                }
                $scope.getrcvdcollection();
        });
    });

    shortcut.add("Ctrl+left", function() {
        $scope.$apply(function(){
            if($scope.fmonth && $scope.fyear){
                if($scope.fmonth == "01"){
                    $scope.fmonth = "12";
                    $scope.fyear++;
                }else{
                    $scope.fmonth--;
                }
                if($scope.fmonth<10){
                    $scope.fmonth = "0"+$scope.fmonth;
                }else{
                    $scope.fmonth = $scope.fmonth.toString();
                }
                $scope.getrcvdcollection();
            }            
        });
    });

    shortcut.add("Ctrl+right", function() {
        $scope.$apply(function(){
            if($scope.fmonth && $scope.fyear){
                if($scope.fmonth == "12"){
                    $scope.fmonth = "01";
                    $scope.fyear--;
                }else{
                    $scope.fmonth++;
                }
                if($scope.fmonth != "01" && $scope.fmonth<10){
                    $scope.fmonth = "0"+$scope.fmonth;
                }else{
                    $scope.fmonth = $scope.fmonth.toString();
                }
                $scope.getrcvdcollection();
            }            
        });
    });


    $scope.initiateCalendar = function() {
        $('.input-group.date').datepicker({
            format: 'dd/mm/yyyy',
            orientation: "auto"
        });
       
            $('.input-group.date').each(function() {
    //$(this).datepicker('setDate', $scope.filter.from_date);
    });
    }
    $scope.initiateCalendar();


    $scope.getsum = function(obj,key){
        var total = 0;
        if(obj && obj.length){
            for(i=0;i<obj.length;i++){
                total += Number(obj[i][key]) || 0;
            }
        }
        return total;
    }

});


app.controller('ledgerCtrl',function($route, $scope, $rootScope, $routeParams, $location, $http, Data){
    // $scope.yearr = [{id:1,year:"2023"},{id:2,year:"2022"},{id:3,year:"2021"},{id:4,year:"2020"},{id:4,year:"2019"},{id:4,year:"2018"}];
    // $scope.display = "";
    // $scope.filter={};
    // $scope.getcustomerlist = function(){
    //     Data.get('customers',{chitfund:{op:"!=", value:"1" }}).then(function(results){
    //         $scope.customers = results.customers;
    //     })
    // }
    // $scope.getcustomerlist();

    $scope.creditorscus = $routeParams['customer'];
    console.log($routeParams['customer']);

    $scope.init = function(){
        $scope.yearr = [{id:1,year:"2023"},{id:2,year:"2022"},{id:3,year:"2021"},{id:4,year:"2020"},{id:4,year:"2019"},{id:4,year:"2018"}];
        $scope.display = "";
        $scope.filter={};
        $scope.getcustomerlist();
    }

    $scope.creditorscusfunc = function(){
        // console.log('kkj');
        $scope.filter = {from_date : "01/01/2018",to_date : todayDate(),customer:$scope.creditorscus,forint : 1}
        $scope.showledger();
    }


    $scope.getcustomerlist = function(){
        Data.get('customers',{chitfund:{op:"!=", value:"1" }}).then(function(results){
            $scope.customers = results.customers;
            if($scope.creditorscus){
                $scope.creditorscusfunc();
            }
        })
    }


    $scope.checkintcolor = function(msg){
        console.log(msg)
        if(msg){
            return "success";
        }
    }


    $scope.showledger = function(){
        
        $scope.customername = "";
       $scope.op = {};
        $scope.opbal = 0;
        $scope.opbalbool = 0;
        $scope.forintop = "";
        $scope.checkno = 0;
        if($scope.filter.from_date){
            $scope.op.from_date = $scope.filter.from_date;

        }
        $scope.display = 1;
        if($scope.fmonth){
            // console.log("came in fmonth");
            var d  = new Date();
            $scope.fromdate =  $scope.yearr[$scope.fyear-1].year + '-' + $scope.fmonth +'-'+  01  ;
            $scope.todate =  $scope.yearr[$scope.fyear-1].year + '-' + $scope.fmonth +'-'+ 31;
            $scope.filter.date = {value:$scope.fromdate,value1:$scope.todate,op:"Between"};
            $scope.op.date= {value:$scope.fromdate,op :"<"};
            
            // console.log($scope.op.date);
            //$scope.getcollbal();
    }else if($scope.fyear){
        // console.log("came in fyear");
             $scope.fromdate = $scope.yearr[$scope.fyear-1].year  + '-' + "01" +'-'+  "01"  ;
            $scope.todate = $scope.yearr[$scope.fyear-1].year + '-' + "12" +'-'+ 31;
             $scope.filter.date = {value:$scope.fromdate,value1:$scope.todate,op:"Between"};
             $scope.op.date={value:$scope.fromdate,op :"<"};
             console.log($scope.op.date);
        }else {
            // console.log("came in else");
            $scope.op.date ={value:changeDateSQLFormat($scope.filter.from_date),op :"<"};
            $scope.filter.date = setDateFilter($scope.filter);
            // console.log($scope.op.date);
        }

        if($scope.filter.forint == 0){
            $scope.forintop = {op:"!=", value:"1" };
        }else if($scope.filter.forint == 1){
            $scope.forintop = "1";
        }
       
           if($scope.crchck==0){
            $scope.crchcks = {op:"!=", value:"1" };
           }
        
           for(h=0;h<$scope.customers.length;h++){
               if($scope.customers[h].id == $scope.filter.customer){
                   $scope.customername = $scope.customers[h].Firstname + ' ' + $scope.customers[h].LastName;
               }
           }
      $scope.filter6 = {date:$scope.filter.date,customer:$scope.filter.customer,creditexp:$scope.crchck,forint:$scope.forintop,"sort_by":"a.date","sort_order":"asc"};//,"note":{"op":"!=",value:"interestcal"}
            // console.log($scope.filter);
        Data.get('drcr',$scope.filter6).then(function(results){
            $scope.drcr = results.drcr;
            console.log($scope.drcr);
            if($scope.forintop == "1"){
                var opfilter = {date:$scope.op.date,customer:$scope.filter.customer,fields: "sum(credit) as credittotal,sum(debit) as debittotal"}
                Data.get("interest",opfilter).then(function(results){
                    $scope.opinterest = results.interest;
                    if($scope.opinterest && $scope.opinterest.length > 0){
                        $scope.opinterest[0].credittotal = Number($scope.opinterest[0].credittotal);
                        $scope.opinterest[0].debittotal = Number($scope.opinterest[0].debittotal);
                            $scope.opbal += $scope.opinterest[0].credittotal;
                            $scope.opbal -= $scope.opinterest[0].debittotal;
                    }
                    // console.log("hich");
                var filter = {date:$scope.filter.date,customer:$scope.filter.customer,"sort_by":"a.date","sort_order":"asc"};
                Data.get("interest",filter).then(function(results){
                    console.log($scope.drcr);
                    console.log(results.interest);
                    if(results.interest && results.interest.length){
                        for(j=0;j<results.interest.length;j++){
                            var tmp = {
                                "id": results.interest[j].id,
                                "date": results.interest[j].date,
                                "customer": results.interest[j].customer,
                                "customername": "",
                                "debit":  results.interest[j].debit,
                                "credit": results.interest[j].credit,
                                "forint": 1,
                                "creditexp": 0,
                                "crid": 0,
                                "chitfundid": 0,
                                "showdaybook": 0,
                                "note": results.interest[j].note,
                                "note1": "",
                                "interestentry":1
                            }
                            $scope.drcr.push(tmp);
                        }
                        sortarrbydate($scope.drcr);

                    }
                    $scope.getopbal();
                    console.log($scope.drcr);
                });
            });
            // $scope.opbalance();
           
            }
            if($scope.forintop != "1"){
                $scope.getopbal();
            }
        //$scope.getdrcrtotal();
            });
        if($scope.filter.customer==1 ){
            console.log($scope.filter.date);
            $scope.filter4 = {rcvddate :  $scope.filter.date,received:1,iscountable : {value:2, op:"!=" },"sort_by":"a.rcvddate" , "sort_order": "asc" }
            console.log($scope.filter4);
            Data.get('collection',$scope.filter4).then(function(results){
                $scope.countable = results.collection;
            });
            $scope.filter5 = {date :  $scope.filter.date}
            console.log($scope.filter5);
            Data.get('sowji',$scope.filter5).then(function(results){
                $scope.notcountable = results.sowji;
            });
    
            $scope.filter1 = {date :  $scope.op.date,fields :"sum(a.amount) as amounttotal"}
            console.log($scope.filter1);
            Data.get('sowji',$scope.filter1).then(function(results){
                $scope.sowjiop = results.sowji;
                if($scope.sowjiop.length>0){    
                    $scope.opbal += Number($scope.sowjiop[0].amounttotal || 0);
                    }
            });
    
                $scope.filter2 = {rcvddate: $scope.op.date,received:1,iscountable: {value:2, op:"!=" },fields :"sum(a.sowji) as sowjitotal"}
                console.log($scope.filter2);
                Data.get('collection',$scope.filter2).then(function(results){
                    if(results.collection.length){    
                    $scope.opbal += Number(results.collection[0].sowjitotal) || 0;
                    }
                    
                    $scope.filter3={forint:$scope.filter.forint,date:$scope.op.date,customer:$scope.filter.customer,creditexp:$scope.crchcks,fields: "sum(credit) as credittotal,sum(debit) as debittotal"}
                    console.log($scope.filter3);
                    Data.get('drcr',$scope.filter3).then(function(results){
                        console.log(results.drcr);
                        if(results.drcr.length){
                        $scope.opbal += Number(results.drcr[0].credittotal) || 0 ;
                        $scope.opbal -= Number(results.drcr[0].debittotal) || 0 ;
                        }
                    });
                });
            
                
            
            
            
        //   $scope.sowjicomm();
        
    
        }else if($scope.filter.customer == 90){
            
            var filter = {"date":$scope.filter.date,"suri":{"op":">=",value:1}};
            Data.get("collection",filter).then(function(results){
                $scope.suricollection = results.collection;
            });
        }else{
            $scope.filter4={forint:$scope.filter.forint,date:$scope.op.date,customer:$scope.filter.customer,creditexp:$scope.crchcks,fields: "sum(credit) as credittotal,sum(debit) as debittotal"}//"note":{"op":"!=",value:"interestcal"},
            Data.get('drcr',$scope.filter4).then(function(results){
                console.log(results.drcr);
               if(results.drcr.length){
               $scope.opbal += Number(results.drcr[0].credittotal) || 0 ;
               $scope.opbal -= Number(results.drcr[0].debittotal) || 0 ;
               }
            });
        }

        
    }

 /* $scope.opbalance = function(){
    console.log("hi");
    console.log($scope.filter.from_date);
    console.log($scope.filter);
    if($scope.fmonth){
        $scope.dt = {value:$scope.fromdate,op :"<"};
        console.log($scope.dt);
    }else if($scope.fyear){
        $scope.dt = {value:$scope.fromdate,op :"<"};
        console.log($scope.dt);
    }else if($scope.filter.from_date){
        console.log($scope.filter.from_date);
        console.log("hi");
        $scope.dt ={value:changeDateSQLFormat($scope.filter.from_date),op :"<"};
    }
    
    if($scope.filter.customer==1 ){
       
        $scope.filter4 = {rcvddate :  $scope.filter.date,received:1,iscountable : {value:2, op:"!=" },"sort_by":"a.rcvddate" , "sort_order": "asc" }
        console.log($scope.filter4);
        Data.get('collection',$scope.filter4).then(function(results){
            $scope.countable = results.collection;
        });
        $scope.filter5 = {date :  $scope.filter.date}
        console.log($scope.filter5);
        Data.get('sowji',$scope.filter5).then(function(results){
            $scope.notcountable = results.sowji;
        });

        $scope.filter1 = {rcvddate :  $scope.dt,received:1}
        console.log($scope.filter1);
        Data.get('collection',$scope.filter1).then(function(results){
            $scope.collection = results.collection;

            $scope.filter2 = {rcvddate: $scope.dt,received:1,fields :"sum(a.sowji) as sowjitotal"}
            console.log($scope.filter2);
            Data.get('collection',$scope.filter2).then(function(results){
                if($scope.collection.length){    
                  console.log($scope.opbal);                   
                $scope.opbal += Number(results.collection[0].sowjitotal);
                console.log($scope.opbal);
                }
               
                $scope.filter3={forint:$scope.filter.forint,date:$scope.dt,customer:$scope.filter.customer,fields: "sum(credit) as credittotal,sum(debit) as debittotal"}
                console.log($scope.filter3);
                Data.get('drcr',$scope.filter3).then(function(results){
                   if(results.drcr.length){
                    console.log($scope.opbal);
                   $scope.opbal += Number(results.drcr[0].credittotal) || 0 ;
                   console.log($scope.opbal);
                   $scope.opbal -= Number(results.drcr[0].debittotal) || 0 ;
                   console.log($scope.opbal);
                   }
                });
            });
       
           
       
        });
     
 //   $scope.sowjicomm();
    

}else{
    $scope.filter4={forint:$scope.filter.forint,date:$scope.dt,customer:$scope.filter.customer,fields: "sum(credit) as credittotal,sum(debit) as debittotal"}
    Data.get('drcr',$scope.filter4).then(function(results){
       if(results.drcr.length){
        console.log($scope.opbal);
       $scope.opbal += Number(results.drcr[0].credittotal) || 0 ;
       console.log($scope.opbal);
       $scope.opbal -= Number(results.drcr[0].debittotal) || 0 ;
       console.log($scope.opbal);
       }
    });
}

  }*///$scope.opbalance end tag

 /* $scope.getcollbal = function(){
    $scope.filter1 = {rcvddate: $scope.filter.date,received:1,fields :"sum(a.sowji) as sowjitotal"}
    Data.get('collection',$scope.filter1).then(function(results){
        $scope.opbal = 0;
        if(results.collection.length){
        $scope.opbal = Number(results.collection[0].sowjitotal);
        console.log(results.collection[0].sowjitotal);
        }
        $scope.getdrcrtotal();
        

    });
 }*/
  /*  $scope.getdrcrtotal= function(){
    // $scope.changeddate = changeDateSQLFormat($scope.rcvddate);
     $scope.filter1={date:$scope.filter.date,fields: "sum(credit) as credittotal,sum(debit) as debittotal"}
     Data.get('drcr',$scope.filter1).then(function(results){
        if(results.drcr.length){
     //   $scope.opbal += Number(results.drcr[0].credittotal);
      //  $scope.opbal -= Number(results.drcr[0].debittotal);
        
        }
     });
    }*/

    
    $scope.getsum = function(obj,key){
        var total= 0;
        if(obj && obj.length){
            for(i=0;i<obj.length;i++){
                total += Number(obj[i][key]) || 0;
            }
        }
        return total;
    }

    $scope.getopbal = function(){
        var balance = 0;
        var asalubal = 0;
        if($scope.drcr){
            for(i=0;i<$scope.drcr.length;i++){
                console.log("bfr",$scope.drcr[i]);
                if($scope.drcr[i].debit>0){
                    console.log("debit->",i,$scope.drcr[i]);
                    balance -= Number($scope.drcr[i].debit);
                    (!$scope.drcr[i].interestentry)?asalubal -= Number($scope.drcr[i].debit):"";
                }else if($scope.drcr[i].credit > 0){
                    console.log("credit>0->",i,$scope.drcr[i]);
                    balance += Number($scope.drcr[i].credit);
                    (!$scope.drcr[i].interestentry)?asalubal += Number($scope.drcr[i].credit):"";
                }
                $scope.drcr[i].balance = balance;
                $scope.drcr[i].asalubal = asalubal;
            }
        }
                $scope.opbalbool = 1;
    }

    $scope.initiateCalendar = function() {
        $('.input-group.date').datepicker({
            format: 'dd/mm/yyyy',
            orientation: "auto"
        });
       
            $('.input-group.date').each(function() {
    //$(this).datepicker('setDate', $scope.filter.from_date);
    });
    }
    $scope.initiateCalendar();

    $scope.changeDateUserFormat= function(dt){
        
        if(dt){
              return  changeDateUserFormat(dt);
        }
    }
});

app.controller('ledgerdemoCtrl',function($route, $scope, $rootScope, $routeParams, $location, $http, Data){
    $scope.getcustomerlist = function(){
        Data.get('customers',{chitfund:{op:"!=", value:"1" }}).then(function(results){
            $scope.customers = results.customers;
        })
    }
    $scope.getcustomerlist();


    $scope.initiateCalendar = function() {
        $('.input-group.date').datepicker({
            format: 'yyyy-mm-dd',
            orientation: "auto"
        });
       
            $('.input-group.date').each(function() {
    //$(this).datepicker('setDate', $scope.filter.from_date);
    });
    }
    $scope.initiateCalendar();
});


app.controller('editdrcrCtrl',function($route, $scope, $rootScope, $routeParams, $location, $http, Data){
    $scope.getcustomerlist = function(){
        Data.get('customers').then(function(results){
            $scope.customers = results.customers;
        })
    }
   

    $scope.getdrcrlist= function(){
        $scope.id = $routeParams['id'];
        Data.get('drcr/'+$scope.id).then(function(results){
            Data.toast(results);
            $scope.drcr = results.drcr;
            $scope.getcustomerlist();
            console.log($scope.drcr.creditexp);
                if($scope.drcr.creditexp == 4){
                    // $scope.getchitfundlist();
            }
        });
    }
    // $scope.getchitfundlist = function(){
    //     Data.get('chitfund').then(function(results){
    //         $scope.chitfund = results.chitfund;
    //     });
    // }

    $scope.editdrcr = function(){
        $scope.submitted = 1;      
        if($scope.editdrcrform.$valid){
            // $scope.drcr.credit = Number($scope.drcr.credit);
            // $scope.drcr.debit = Number($scope.drcr.debit);
            Data.put('drcr/'+$scope.id,$scope.drcr).then(function(results){
                Data.toast(results);
            });
        }
      
    }

    $scope.initiateCalendar = function() {
        $('.input-group.date').datepicker({
            format: 'yyyy-mm-dd',
            orientation: "auto"
        });
       
            $('.input-group.date').each(function() {
    //$(this).datepicker('setDate', $scope.filter.from_date);
    });
    }
    $scope.initiateCalendar();
});

app.controller('editcustomerbyfilterCtrl',function($route, $scope, $rootScope, $routeParams, $location, $http, Data){
    /*var modal = document.getElementById("customermodal");

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function(){
      modal.style.display = "none";
    }*/

    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }
    $("#customermodal").modal("show");

      $scope.getcustomerlist= function(){
        Data.get('customers',{chitfund:{op:"!=", value:"1" }}).then(function(results){
            $scope.customers=results.customers;
        })
    }
    $scope.getcustomerlist();


    $scope.editcustomerbyfilter = function(){
        if($scope.filterid>0 || $scope.filtercustomer>0){
            $scope.submitted = 1;
            if($scope.editcustomerbyfilterform.$valid){
            modal.style.display="none";
            if($scope.filterid){
            window.open('#/editcustomer/'+$scope.filterid, '_self');
        }else{
            window.open('#/editcustomer/'+$scope.filtercustomer, '_self');
        }
    
    }
        }

    }

   
});

app.controller('editchitibyfilterCtrl',function($route, $scope, $rootScope, $routeParams, $location, $http, Data){
    var modal = document.getElementById("chitimodal");

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function(){
      modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }

      $scope.getcustomerlist= function(){
        Data.get('customers',{chitfund:{op:"!=", value:"1" }}).then(function(results){
            $scope.customers=results.customers;
        })
    }
    $scope.getcustomerlist();


    $scope.editchitibyfilter = function(){
        
        if($scope.filterid>0 || $scope.filtercustomer>0 || $scope.from_date || $scope.to_date || $scope.filteramount>0){
            $scope.submitted = 1;
            modal.style.display="none";
            if($scope.filterid){
            window.open('#/editchiti/'+$scope.filterid, '_self');
        }else if($scope.filtercustomer>0){
            $scope.submitted = 2;
            $scope.chititypes=["","90 Days","Weekly","10 Days","Monthly","Daily" ];

            $scope.status = ["Closed","Pending"];
            $scope.filter={customer:$scope.filtercustomer}
            Data.get('chiti',$scope.filter).then(function(results){
                $scope.chiti = results.chiti;
            });   

        }else if($scope.from_date || $scope.to_date){
            $scope.submitted = 2;
            $scope.chititypes=["","90 Days","Weekly","10 Days","Monthly","Daily" ];
            $scope.status = ["Closed","Pending"];
            $scope.filter={date:{value:changeDateSQLFormat($scope.from_date),value1: changeDateSQLFormat($scope.to_date),op: "Between"}}
            Data.get('chiti',$scope.filter).then(function(results){
                $scope.chiti = results.chiti;
            });   
        }else if($scope.filteramount) {
            $scope.submitted = 2;
            $scope.chititypes=["","90 Days","Weekly","10 Days","Monthly","Daily" ];
            $scope.status = ["Closed","Pending"];
            $scope.filter={amount:$scope.filteramount}
            Data.get('chiti',$scope.filter).then(function(results){
                $scope.chiti = results.chiti;
            });
        
        }else {
            $scope.submitted = 0;
        }
    
    
        }

    }
    $scope.changeDateUserFormat= function(dt){
        
        if(dt){
              return  changeDateUserFormat(dt);
        }
        }
    $scope.initiateCalendar = function() {
        $('.input-group.date').datepicker({
            format: 'dd/mm/yyyy',
            orientation: "auto"
        });
       
            $('.input-group.date').each(function() {
    //$(this).datepicker('setDate', $scope.filter.from_date);
            });
    }
    $scope.initiateCalendar();
});



app.controller('drcrCtrl',function($route, $scope, $rootScope, $routeParams, $location, $http, Data){
    $scope.yesno = ["No","Yes"];    
    $scope.filter = {};
    $scope.filter.credit = $scope.filter.amount;
    $scope.filter.debit = $scope.filter.amount;
    $scope.getdrcrlist= function(){       
            $scope.filter.date = setDateFilter($scope.filter);
        
        Data.get('drcr',$scope.filter).then(function(results){
            $scope.drcr = results.drcr;
           
          
        });
    }
    $scope.getdrcrlist();
    $scope.getcustomerlist=function(){
        Data.get('/customers').then(function(results){
         $scope.customers =results.customers;
        });
    }
    $scope.getcustomerlist();
    $scope.changeDateUserFormat= function(dt){
        
        if(dt){
              return  changeDateUserFormat(dt);
        }
        }
    $scope.initiateCalendar = function() {
        $('.input-group.date').datepicker({
            format: 'dd/mm/yyyy',
            orientation: "auto"
        });
       
            $('.input-group.date').each(function() {
    //$(this).datepicker('setDate', $scope.filter.from_date);
    });
    
    }
    $scope.initiateCalendar();
});



app.controller('interestCtrl', function($scope, $rootScope, $routeParams, $location, $http, Data) {
    $scope.initiateCalendar = function(){
        $('.input-group.date').datepicker({
            format: 'dd/mm/yyyy',
            orientation: "auto"
        });
       
            $('.input-group.date').each(function() {
    //$(this).datepicker('setDate', $scope.filter.from_date);
    });
    }
    

    
$scope.changeDateUserFormat= function(dt){
        
    if(dt){
          return  changeDateUserFormat(dt);
    }
}

    
    shortcut.add("Ctrl+up", function() {
        $scope.$apply(function(){
            console.log($scope.filtercustomer);
            for(i=0;i<$scope.customers.length;i++){
                if($scope.customers[i].id == $scope.filtercustomer){
                    if(i == 0){
                        $scope.filtercustomer = $scope.customers[$scope.customers.length-1].id;
                        $scope.drcrint();
                        break;
                    }else{
                        $scope.filtercustomer = $scope.customers[i-1].id;
                        $scope.drcrint();
                        break;
                    }
                }
            }
        });
    });

    shortcut.add("Ctrl+down", function() {
        $scope.$apply(function(){
            console.log($scope.filtercustomer);
            for(i=0;i<$scope.customers.length;i++){
                if($scope.customers[i].id == $scope.filtercustomer){
                    if(i == $scope.customers.length-1){
                        $scope.filtercustomer = $scope.customers[0].id;
                        $scope.drcrint();
                        break;
                    }else{
                        $scope.filtercustomer = $scope.customers[i+1].id;
                        $scope.drcrint();
                        break;
                    }
                }
            }
        });
    });

    shortcut.add("Ctrl+left", function() {
        $scope.$apply(function(){
            if($scope.intmon>0){
                if($scope.intmon == "01"){
                    $scope.intmon = "12";
                    $scope.intyear++;
                }else{
                    $scope.intmon--;
                }
                if($scope.intmon<10){
                    $scope.intmon = "0"+$scope.intmon;
                }else{
                    $scope.intmon = $scope.intmon.toString();
                }
                $scope.drcrint();
            }            
        });
    });

    shortcut.add("Ctrl+right", function() {
        $scope.$apply(function(){
            if($scope.intmon>0){
                if($scope.intmon == "12"){
                    $scope.intmon = "01";
                    $scope.intyear--;
                }else{
                    $scope.intmon++;
                }
                if($scope.intmon != "01" && $scope.intmon<10){
                    $scope.intmon = "0"+$scope.intmon;
                }else{
                    $scope.intmon = $scope.intmon.toString();
                }
                $scope.drcrint();
            }            
        });
    });


    $scope.showmodal = function(d){
        $("#payint_modal"+ d).modal();
        $scope.initiateCalendar();
        
    }

// $scope.yearrr = ["","2018","2019","2020","2021"]
$scope.display = 0;

$scope.int_init = function(){

    $scope.months = [{id:"01",mon: 'January'},{id:"02",mon: 'February'},{id:"03",mon: 'March'},{id:"04",mon: 'April'}
    ,{id:"05",mon: 'May'},{id:"06",mon: 'June'},{id:"07",mon: 'July'},{id:"08",mon: 'August'},{id:"09",mon: 'September'},{id:"10",mon:'October'},
    {id:"11",mon:'November'},{id:"12",mon:'December'}];
    $scope.yearr = [{id:1,year:"2023"},{id:2,year:"2022"},{id:3,year:"2021"},{id:4,year:"2020"},{id:5,year:"2019"},{id:6,year:"2018"}];
    $scope.updateentry = [];
    $scope.intmon =  "";
    $scope.intyear =  "";
    $scope.daysinmon = "";
    $scope.filtercustomer = "";
    $scope.intRows_copy = [];
    $scope.cusNo = 0;
    $scope.getcustomerlist();
}

//getcustomerlist
$scope.getcustomerlist= function(){
    Data.get('customers',{forint:1}).then(function(results){
        $scope.customers=results.customers;
    });
}
//getcustomerlist

    $scope.drcrint = function(mm){
        //console.log($scope.intperint);
        
        if($scope.filtercustomer){ //will check is customer entered
            if($scope.intmon && $scope.intyear){ //is month and year entered
                $scope.calculated = 0; //assuming that interest is not submitted
                $scope.daysinmon =  daysInMonth ($scope.intmon, $scope.yearr[$scope.intyear-1].year);
                var dte = $scope.yearr[$scope.intyear-1].year + '-' + $scope.intmon + '-' + $scope.daysinmon;
                Data.get("interest",{date : dte,customer:$scope.filtercustomer,note:"interestcal"}).then(function(results){ //finding if interest is submitted on this month last date
                    $scope.interest = results.interest;
                    Data.toast(results);
                    if($scope.interest && $scope.interest.length>0){
                        $scope.calculated = 1; // already submitted interest

                        for(l=0;l<$scope.customers.length;l++){ //just to store customername
                            if($scope.filtercustomer == $scope.customers[l].id){
                                $scope.customername = $scope.customers[l].Firstname+ ' ' + $scope.customers[l].LastName ;
                            }
                        }
                        if($scope.interest.length>1){ //checking if two times submitted interest by mistakenly
                            Data.toast(Data.mkeobj("Interest is submitted " + $scope.interest.length + " times ","info"));
                        }
                    }
                    if(mm == 1){ //if user wants to calculate again
                        $scope.calculated = 0; 
                    }
                    if($scope.calculated == 0){ //if not submitted interest before
                        $scope.intRows = {};
                        $scope.intRows.debit = "";
                        $scope.intRows.credit = 0;
                        $scope.intRows.note  = "interestcal"; 
                        // $scope.intRows["customer"] = {};
        
                        for(n=0;n<$scope.customers.length;n++){ //making ready for posting in interest table
                            if($scope.customers[n].id == $scope.filtercustomer){
                                $scope.intRows.customer = $scope.customers[n].id ;
                                $scope.intRows.customername = $scope.customers[n].Firstname+ ' ' + $scope.customers[n].LastName ;
                                $scope.intRows.intrate = $scope.customers[n].intrate;
                            }
                        }
                        //console.log($scope.intRows);
        
                        //finding opening bal 
                        $scope.slcfdate = $scope.yearr[$scope.intyear-1].year + '-' + $scope.intmon + '-' + "01";
        
                        $scope.intRows.date = $scope.yearr[$scope.intyear-1].year + '-' + $scope.intmon + '-' + $scope.daysinmon;
        
                        //getting total of previous trans before the selected month
                        
                        $scope.filter = {forint: 1,date:{value:$scope.slcfdate,op:"<"},customer:$scope.filtercustomer ,fields:"sum(credit) as credittotal, sum(debit) as debittotal"}
                        Data.get('drcr',$scope.filter).then(function(results){
                            $scope.customerdetail = results.drcr;
                            
                                //console.log($scope.intRows);
                                if($scope.customerdetail){
                                    tmpint = {}; //for interestrows entries                                    
                                    tmpint["credit"] = (($scope.customerdetail[0].credittotal -  $scope.customerdetail[0].debittotal) || 0);
                                    tmpint["debit"] = 0;
                                    tmpint["op"] = 1;  //showing that its opening balance entry
                                    tmpint["note"] = "opening Balance";
                                    tmpint["date"] = $scope.slcfdate;
                                    tmpint["intamount"] = 0;
                                    tmpint["days"] = $scope.daysinmon;
                                    //console.log($scope.intRows);
        
                                    //console.log(tmpint);
        
                                    $scope.intRows["intArr"] = [];
                                    $scope.intRows["intArr"].push(tmpint);
        
                                    // $scope.intRows.push(tmp);
                                    //console.log($scope.intRows);
        
                            }
                            //console.log($scope.intRows);
                            //finding if any transactions are there in the selected month
                            $scope.filterdata = {forint: 1,date:{value:$scope.slcfdate,value1:$scope.intRows.date,op:"Between"},customer:$scope.filtercustomer,note:{op:"!=",value:"interestcal"}}
                            Data.get('drcr',$scope.filterdata).then(function(results){
                                $scope.drcrr = results.drcr; 
                                if($scope.drcrr && $scope.drcrr.length>0){
                                    for(i=0;i<$scope.drcrr.length;i++){
                                        var tmp = {};
                                        tmp["id"] = $scope.drcrr[i].id;
                                        tmp["debit"] = $scope.drcrr[i].debit;
                                        tmp["credit"] = $scope.drcrr[i].credit;
                                        tmp["date"] = $scope.drcrr[i].date;
                                        tmp["note"] = $scope.drcrr[i].note;
                                        tmp["op"] = 0;
                                        
                                        if(tmp["debit"] == 0){ //he gave money
                                            var from_date = tmp["date"];
                                            to_date =  $scope.yearr[$scope.intyear-1].year + '-' + $scope.intmon + '-' + $scope.daysinmon;
                                            //console.log(from_date,to_date);                                                                
                                            
                                            monint = getWholePercent(tmp["credit"],$scope.intRows.intrate); 
                                            // //console.log(monint);
                                            var tempprdyint= Number(monint)/Number($scope.daysinmon);    
                                            // //console.log(tempprdyint);
                                            tmp["days"] = datediff(changeDateUserFormat(from_date),changeDateUserFormat(to_date));
                                            tmp["intamount"] = Math.floor(tmp["days"] *tempprdyint);
                                            // //console.log(tmp["int"]);
                                            $scope.intRows.credit += tmp["intamount"];
                                            $scope.intRows.intArr.push(tmp);
                                        }else if(tmp["credit"] == 0){ //he took money 
                                            $scope.intRows.intArr[0].credit -= tmp["debit"];
                                            var from_date = $scope.yearr[$scope.intyear-1].year + '-' + $scope.intmon + '-' + "01"; 
                                            to_date =  tmp["date"];
                                            monint = getWholePercent(tmp["debit"],$scope.intRows.intrate); 
                                            //console.log(monint);
                                            var tempprdyint= Number(monint)/Number($scope.daysinmon);  
                                            //console.log(tempprdyint); 
                                            tmp["days"] = datediff(changeDateUserFormat(from_date),changeDateUserFormat(to_date));
                                            tmp["intamount"] = Math.floor(tmp["days"] *tempprdyint);
                                            $scope.intRows.credit += tmp["intamount"];
                                            $scope.intRows.intArr.push(tmp);
                                            
                                        }
                                    }                           
                                }
                                //if customer takes interest on interest                                
                                if($scope.intperint == 1){
                                    //getting all interest entries of before date for adding and lessening in the opening balance
                                    $scope.filterr = {"customer":$scope.filtercustomer,"date":{value:$scope.slcfdate,op:"<"},fields:"sum(credit) as credittotal, sum(debit) as debittotal"};
                                    Data.get("interest",$scope.filterr).then(function(results){
                                        Data.toast(results);
                                        $scope.interestEntries = results.interest;
                                        if($scope.interestEntries.length> 0){
                                            for(o=0;o<$scope.interestEntries.length;o++){
                                                for(p=0;p<$scope.intRows.intArr.length;p++){
                                                    if($scope.intRows.intArr[p].op == 1 ){ //taking the column of opening balance to + & '-' total
                                                        if($scope.interestEntries[o].credittotal>0){
                                                            $scope.intRows.intArr[p].credit += Number($scope.interestEntries[o].credittotal);
                                                        }else if($scope.interestEntries[o].debittotal>0){
                                                            $scope.intRows.intArr[p].credit -= Number($scope.interestEntries[o].debittotal);
                                                        }else{ //if didn't got total of credit and debit both
                                                            Data.toast(Data.mkeobj("Got interest Entry without total amount " ,"failed"));
                                                        }
                                                        break; //so that just need to find the opening bal entry , no need of other entries
                                                    }
                                                }
                                            }
                                        }else{ //if didn't recvd any entries of before interest
                                            Data.toast(Data.mkeobj("Din't received any interestcal entries for total","failed"));
                                        }
                                        $scope.intRows.intArr[0].intamount = getWholePercent($scope.intRows.intArr[0].credit,$scope.intRows.intrate);
                                        $scope.intRows.credit += $scope.intRows.intArr[0].intamount; //total int
                                    });
                                }else{
                                    $scope.intRows.intArr[0].intamount = getWholePercent($scope.intRows.intArr[0].credit,$scope.intRows.intrate);
                                    $scope.intRows.credit += $scope.intRows.intArr[0].intamount; //total int
                                }
                            
                            });
                        });                    
                    }
                });
                $scope.arrInd = -1;
            }else{
                alert("Please enter Date properly!!");
            }
        }else{
            alert("Please select A customer");
        }

    }





    $scope.arrIndfun = function(ind,arr){
        var ress = 0; 
        if($scope.arrInd == ind){ //if clicked 2nd time edit for changing the values & int
            
            if(!$scope.tmp.credit){  //checking if values before changing are stored or not so that can be used to restore if made invalid change
                $scope.tmp = {}; //if not stored then storing data
                $scope.tmp.credit = arr.credit;
                $scope.tmp.debit = arr.debit;
                $scope.tmp.intamount = arr.intamount;
            }

                ress = $scope.check_changed(arr,$scope.tmp,["credit","debit"]); //checking if any changes made in the debit/ credit 
                // console.log(ress);

                if(ress == 1){//will enter only if debit or credit only one amount will be changed
                    if($scope.intRows.intArr[ind].credit > 0){//if customer gave
                        var monint = getWholePercent($scope.intRows.intArr[ind].credit,$scope.intRows.intrate);
                    }else if($scope.intRows.intArr[ind].debit > 0){ // if customer took
                        var monint = getWholePercent($scope.intRows.intArr[ind].debit,$scope.intRows.intrate);
                    }
                    // console.log(monint);
                    
                    var perdayint = monint / $scope.intRows.intArr[0].days;
                    $scope.intRows.intArr[ind].intamount = Math.floor($scope.intRows.intArr[ind].days * perdayint);
                    $scope.tmp ={} //emptying stored before entries as the changes made are not invalid 

                }else if(ress == 2){ //will enter if user changes both debit and credit amount , it is invalid input 
                    Data.toast(Data.mkeobj("invalid Input", "failed"));
                    
                    if($scope.tmp){ //checking if stored data before changing is there or not
                        $scope.restore(); //restoring data
                    }
                }
            
            $scope.intRows.credit = 0; //making the int total null to calculate again
            for(j=0;j<$scope.intRows.intArr.length;j++){
                $scope.intRows.credit += Math.floor(Number($scope.intRows.intArr[j].intamount));
            }
            $scope.tmp.lastind = ind; //storing last ind to see if user click edit for same index or not
            
        }else{ //if user clicked edit for first time to make disabled input visible
            if($scope.tmp && $scope.tmp.entry == 0 && $scope.tmp.lastind != ind){ //checking if made entry and saved or not if not then reallocating values as before
                $scope.restore();
            }
            $scope.arrInd = ind;
            $scope.tmp = {};
            $scope.tmp.credit = arr.credit;
            $scope.tmp.debit = arr.debit;
            $scope.tmp.intamount = arr.intamount;
            $scope.tmp.entry = 0;
            $scope.tmp.lastind = ind;
            console.log($scope.tmp);
        }
    }


    $scope.check_changed = function(obj1,obj2,params){ //checking changes in same arrays 
        var ress = 0;
            for(k=0;k<params.length;k++){
                // console.log(obj1[i][params[k]], "!=" ,obj2[i][params[k]])
                if(obj1[params[k]] != obj2[params[k]]){
                    ress++ ;
                }
            }
        return ress;
    }

    $scope.restore = function(){
        $scope.intRows.intArr[$scope.tmp.lastind].credit = $scope.tmp.credit;
        $scope.intRows.intArr[$scope.tmp.lastind].debit = $scope.tmp.debit;
        $scope.intRows.intArr[$scope.tmp.lastind].intamount = $scope.tmp.intamount;
    }


$scope.postint = function(){
   result = confirm("Are you sure");
   console.log($scope.intRows);
   if(result == true){
        if($scope.intRows.credit!=0){ //if total interest is not null
            Data.post('interest',$scope.intRows).then(function(results){
                Data.toast(results);
                $scope.drcrint();
            });
        }
    }
        
    }
   

$scope.dontadd = function(ind){
    console.log(ind);
    $scope.minustrans =[];
    $scope.minustrans.push($scope.intRows[ind]);
   $scope.drcrint();
}


/*$scope.addornot =  function(){
    $scope.changedaddornot=[];
for(i=0;i<$scope.drcrr.length;i++){
    $scope.changedaddornot[i] ={};
    if($scope.drcrr[i].addornot == 1){
        $scope.changedaddornot[i] = $scope.drcrr[i];
        $scope.changedaddornott = 1 ;
      
    }else{
        $scope.drcrr[i].addornot = 0;
    }
   
}
//console.log($scope.changedaddornot);
$scope.getdrcrlist();
}*/

$scope.minusprevint = function(){
    for(i=0;i<$scope.updateentry.length;i++){
        console.log($scope.updateentry[i].minusnote);
        if($scope.updateentry[i].minusnote == "1"){
            $scope.minus = 1;
            console.log($scope.minus);
    
        }
    }
    
    
    
    $scope.drcrint();
}

$scope.lst = function(){
    $scope.lstt = [];
    for(i=0;i<$scope.lstmonintcal.length;i++){
        $scope.lstt[i] = {};
        $scope.lstt[i].show = 1 ;
        $scope.lstt[i].customer = $scope.lstmonintcal[i].customer ;
        $scope.lstt[i].customername = $scope.lstmonintcal[i].customername ;
        $scope.lstt[i].debit = $scope.lstmonintcal[i].credit ;
        for(l=0;l<$scope.drcrr.length;l++){
           
            if($scope.lstmonintcal[i].customer == $scope.drcrr[l].customer && $scope.lstmonintcal[i].credit == $scope.drcrr[l].debit){
                //console.log($scope.lstmonintcal[i]);
                $scope.lstt[i].show = 0 ;
            }
              
            }
 
        } 
    }
    $scope.payint = function(d){ 
        $scope.data = {date:$scope.ffdate,customer:$scope.lstt[d].customer,credit:"0.00" ,debit:$scope.lstt[d].debit,note:"interestpaid",forint:"1",creditexp:"0",crid:"0"};
        //Data.post('')
        console.log($scope.ffdate);
    }

    
  
});

app.controller('payinterestCtrl', function($scope, $rootScope, $routeParams, $location, $http, Data) {

    $scope.init = function(){
        $scope.payint = {};
        focusonTime("date");
        $scope.getcustomerlist();
        $scope.payint.date = todayDate();
        $scope.initiateCalendar();

    }





    $scope.getcustomerlist= function(){
        Data.get('customers',{forint:1}).then(function(results){
            $scope.customers = results.customers;
        });
    }
    
    $scope.getcustomerid = function(){
        if($scope.customers){
            for(i=0;i<$scope.customers.length;i++){
                if($scope.customers[i].Firstname + ' ' + $scope.customers[i].LastName  == $scope.payint.customername){
                    $scope.payint.customer = $scope.customers[i].id;
                    break;
                }
            }
        }
    }


    $scope.payinterest = function(){
        $scope.submitted = 1;
        if($scope.payinterestForm.$valid){
            $scope.getcustomerid();
            $scope.payint.date = changeDateSQLFormat($scope.payint.date);
            $scope.payint.credit = 0
            $scope.payint.note1 = ""
            console.log($scope.payint);
            Data.post("payinterest",$scope.payint).then(function(results){
                Data.toast(results);
                if(results.status == "success"){
                    $scope.init();
                }
            });
        }

    }
    
    $scope.initiateCalendar = function(){
        $('.input-group.date').datepicker({
            format: 'dd/mm/yyyy',
            orientation: "auto"
        });
       
            $('.input-group.date').each(function() {
                $(this).datepicker('setDate', $scope.payint.date);
                $(this).on('changeDate', function(ev){
                    $(this).datepicker('hide');
                    focusonTime("customername",200);
                });            
            });     
    }
 

});


app.controller('interest_copyCtrl', function($scope, $rootScope, $routeParams, $location, $http, Data) {
    $scope.initiateCalendar = function(){
        $('.input-group.date').datepicker({
            format: 'dd/mm/yyyy',
            orientation: "auto"
        });
       
            $('.input-group.date').each(function() {
    //$(this).datepicker('setDate', $scope.filter.from_date);
    });
    }
    

    
$scope.changeDateUserFormat= function(dt){
        
    if(dt){
          return  changeDateUserFormat(dt);
    }
    }


    $scope.showmodal = function(d){
        $("#payint_modal"+ d).modal();
        $scope.initiateCalendar();
        
    }

    $scope.months = [{id:"01",mon: 'January'},{id:"02",mon: 'February'},{id:"03",mon: 'March'},{id:"04",mon: 'April'}
    ,{id:"05",mon: 'May'},{id:"06",mon: 'June'},{id:"07",mon: 'July'},{id:"08",mon: 'August'},{id:"09",mon: 'September'},{id:"10",mon:'October'},
    {id:"11",mon:'November'},{id:"12",mon:'December'}];
$scope.yearr = [{id:1,year:"2018"},{id:2,year:"2019"},{id:3,year:"2020"},{id:4,year:"2021"}];
// $scope.yearrr = ["","2018","2019","2020","2021"]
$scope.display = 0;

//getcustomerlist
$scope.getcustomerlist= function(){
    Data.get('customers',{forint:1}).then(function(results){
        $scope.customers=results.customers;
        $scope.updateentry = [];
        $scope.intmon =  "08";
        $scope.intyear = 3;
        $scope.filtercustomer = ""; //38;
        
        $scope.intRows_copy = [];
        // change1
        // for(x=0;x<$scope.customers.length;x++){
            
        //     $scope.updateentry[x] ={};
        //     $scope.updateentry[x].customer = $scope.customers[x].id;
        //     $scope.updateentry[x].credit = 0;
            
        // }
    // $scope.drcrint();
       
    });
}
//getcustomerlist

    $scope.drcrint = function(){
        if($scope.intmon && $scope.intyear){
        $scope.int_ttl = 0;
        $scope.intRows = [];
            //getting interest cal entry of last month
            console.log($scope.intRows);
            var daysinmonn =  daysInMonth ($scope.intmon-1, $scope.yearr[$scope.intyear-1].year);
            $scope.daate =  $scope.yearr[$scope.intyear-1].year + '-' + ($scope.intmon-1) + '-' + daysinmonn ;
            $scope.fill = {date:$scope.daate,note  :"interestcal"};
            
            // change2
            // Data.get('drcr',$scope.fill).then(function(results){
            //     $scope.lstmonintcal = results.drcr;
            //     /*for(s=0;s<$scope.lstmonintcal.length;s++){
            //         $scope.lstmonintcal[s].addornot=0;
            //     }*/
            // });

        // for(x=0;x<$scope.updateentry.length;x++){
        //     $scope.updateentry[x].credit = 0;

        // }
        

        //finding opening bal 
        var daysinmon =  daysInMonth ($scope.intmon, $scope.yearr[$scope.intyear-1].year);
        $scope.slcfdate = $scope.yearr[$scope.intyear-1].year + '-' + $scope.intmon + '-' + "01";
        $scope.slctodate = $scope.yearr[$scope.intyear-1].year + '-' + $scope.intmon + '-' + daysinmon;

        //getting total of previous trans before the selected month
        $scope.filter = {forint: 1,date:{value:$scope.slcfdate,op:"<"},customer:$scope.filtercustomer ,group_by:"customer",fields:"sum(credit) as credittotal, sum(debit) as debittotal,customer as customer "}
        Data.get('drcr',$scope.filter).then(function(results){
            $scope.customerdetail = results.drcr;

            //getting total of trans of the selected month
            $scope.filterr = {forint: 1,date:{value:$scope.slcfdate,value1:$scope.slctodate,op:"Between"},group_by:"customer",customer:$scope.filtercustomer,fields:"sum(debit) as debittotal,customer as customer"}
            Data.get('drcr',$scope.filterr).then(function(results){
                $scope.dbtttl = results.drcr;

                console.log($scope.intRows);
                for(i=0;i<$scope.customerdetail.length;i++){  
                    tmp = {};
                    tmpint = {};

                    // $scope.opbal[i] = {};
                    // $scope.intRows[i] = {"customer":"","int_ttl":0,"intrate":0,"intArr":[{"op":1,"date":"","credit":0,"debit":0,"note":"","days":daysinmon,"int":0}]};
                    //$scope.updateentry[i] ={};

                    // $scope.opbal[i].customer =  $scope.customerdetail[i].customer;
                    tmp["customer"] =  $scope.customerdetail[i].customer;
                    tmpint["customer"] = tmp["customer"];
                    tmpint["credit"] = $scope.customerdetail[i].credittotal -  $scope.customerdetail[i].debittotal;
                    tmpint["debit"] = "";
                    // $scope.intRows[i].intArr[0].credit = Math.floor($scope.opbal[i].amount);
            
            
                //$scope.updateentry[i].credit = $scope.customerdetail[i].credittotal -  $scope.customerdetail[i].debittotal;
                    console.log($scope.intRows);
                    for(k=0;k<$scope.dbtttl.length;k++){

                        if(tmp["customer"] == $scope.dbtttl[k].customer){
                            tmpint["credit"]  -= $scope.dbtttl[k].debittotal;
                            tmpint["op"] = 1;  //showing that its opening balance entry
                            tmpint["note"] = "opening Balance";
                            break;
                            console.log(tmpint);
                        }
                    }
                    console.log(tmpint);
                    console.log($scope.intRows);
                    if($scope.minus == 1){
                        console.log("came");
                        for(v=0;v<$scope.lstmonintcal.length;v++){
                            console.log("came");
                            if($scope.lstmonintcal[v].customer == $scope.opbal[i].customer){
                                tmpint["credit"] -= Number($scope.lstmonintcal[v].credit);
                                tmpint["int"] = Math.floor(getWholePercent(tmpint["credit"],tmp["intrate"]));
                                
                            }
                        }
                    }

                    for(m=0;m<$scope.customers.length;m++){
                        if($scope.customers[m].id == tmp["customer"]){
                            tmp["intrate"] = $scope.customers[m].intrate;
                            tmpint["int"] = Math.floor(getWholePercent( tmpint["credit"],tmp["intrate"]));  
                            $scope.int_ttl += tmpint["int"];
                            break;
                        }
                    }
                    console.log($scope.intRows);
                // for(q=0;q<$scope.updateentry.length;q++){
                    
                //     if($scope.updateentry[q].customer == $scope.opbal[i].customer){
                //         $scope.updateentry[q].credit += Math.floor(Number($scope.opbal[i].int));
                        
                //     }
                    
                // }
                  console.log(tmp);
                  console.log(tmpint);
                tmp["intArr"] = [];
                tmp["intArr"].push(tmpint);
                $scope.intRows.push(tmp);
                console.log($scope.intRows);

            }
            console.log($scope.intRows);
            $scope.getdrcrlist();
        });
    });
            
            // $scope.intRows = tempp;
            
       
    }
    
    }

//start
            //     for(i=0;i<$scope.customerdetail.length;i++){   
            //         console.log(i);
            //         tmp = [];
            //         // $scope.opbal[i] = {};
            //         // $scope.intRows[i] = {"customer":"","int_ttl":0,"intrate":0,"intArr":[{"op":1,"date":"","credit":0,"debit":0,"note":"","days":daysinmon,"int":0}]};
            //         //$scope.updateentry[i] ={};

            //         // $scope.opbal[i].customer =  $scope.customerdetail[i].customer;
            //         tmp["customer"] =  $scope.customerdetail[i].customer;
            //     //    if($scope.opbal[i].customer == $scope.customerdetail[i].customer){
            //         $scope.opbal[i].amount = $scope.customerdetail[i].credittotal -  $scope.customerdetail[i].debittotal;
            //         $scope.intRows[i].intArr[0].credit = Math.floor($scope.opbal[i].amount);
            // // }

            //     //$scope.updateentry[i].credit = $scope.customerdetail[i].credittotal -  $scope.customerdetail[i].debittotal;
                
            //     for(k=0;k<$scope.dbtttl.length;k++){
            //         if($scope.opbal[i].customer == $scope.dbtttl[k].customer){
            //         $scope.opbal[i].amount  -= $scope.dbtttl[k].debittotal;
            //         $scope.intRows[i].intArr[0].op = 1;  //showing that its opening balance entry
            //         $scope.intRows[i].intArr[0].note = "opening Balance";
            //         $scope.intRows[i].intArr[0].credit = Math.floor($scope.opbal[i].amount);
            // }
                
            // }
            // if($scope.minus == 1){
            //     console.log("came");
            //     for(v=0;v<$scope.lstmonintcal.length;v++){
            //             console.log("came");
            //             if($scope.lstmonintcal[v].customer == $scope.opbal[i].customer){
            //                 $scope.opbal[i].amount -= Number($scope.lstmonintcal[v].credit);
            //                 $scope.intRows[i].intArr[0].credit = Math.floor($scope.opbal[i].amount);
            //             //  $scope.opbal[i].int = Math.floor(getWholePercent($scope.opbal[i].amount,$scope.opbal[i].intrate));
                        
            //         }
            //     }
                
            // }
            //     for(m=0;m<$scope.customers.length;m++){
            //         if($scope.customers[m].id == $scope.customerdetail[i].customer ){
            //             $scope.opbal[i].int = Math.floor(getWholePercent( $scope.opbal[i].amount,$scope.customers[m].intrate));  
            //             $scope.intRows[i].intArr[0].int = $scope.opbal[i].int;
            //             $scope.intRows[i].int_ttl += $scope.opbal[i].int;
            //         }
            //         if($scope.opbal[i].customer == $scope.customers[m].id){
            //             $scope.opbal[i].intrate = $scope.customers[m].intrate;
            //             $scope.intRows[i].intrate = $scope.opbal[i].intrate;
            //         }
            //     }

            //     for(q=0;q<$scope.updateentry.length;q++){
                    
            //         if($scope.updateentry[q].customer == $scope.opbal[i].customer){
            //             $scope.updateentry[q].credit += Math.floor(Number($scope.opbal[i].int));
                        
            //         }
                    
            //     }
                        


            // }

            // $scope.getdrcrlist();

            // });


            // });
            // }
            // }
//end


    $scope.getdrcrlist = function(){
        console.log($scope.intRows);
        //getting trans of the selected month
        $scope.filterdata = {forint: 1,date:{value:$scope.slcfdate,value1:$scope.slctodate,op:"Between"},customer:$scope.filtercustomer}
        Data.get('drcr',$scope.filterdata).then(function(results){
            $scope.drcrr = results.drcr; 
            for(i=0;i<$scope.drcrr.length;i++){
                var tmp = {};
                tmp["int"] = "";
                
                // $scope.drcrr[i].intrate = "";                
                console.log($scope.intRows);
                if($scope.changedaddornot != 1 ){
                    $scope.drcrr[i].addornot = 0;
                    tmp["addornot"] = 0;
                }
                console.log($scope.intRows);
                for(h=0;h<$scope.intRows.length;h++){
                    if($scope.intRows[h].customer == $scope.drcrr[i].customer){
                        tmp["id"] = $scope.drcrr[i].id;
                        tmp["debit"] = $scope.drcrr[i].debit;
                        tmp["credit"] = $scope.drcrr[i].credit;
                        tmp["date"] = $scope.drcrr[i].date;
                        tmp["note"] = $scope.drcrr[i].note;

                        if(tmp["debit"] == 0){
                            var daysinmon =  daysInMonth ($scope.intmon, $scope.yearr[$scope.intyear-1].year);
                            var from_date = tmp["date"];
                            to_date =  $scope.yearr[$scope.intyear-1].year + '-' + $scope.intmon + '-' + daysinmon;
                            //console.log(from_date,to_date);                                                                
                            
                            monint = getWholePercent(tmp["credit"],$scope.intRows[h].intrate); 
                            //console.log(monint);
                            var tempprdyint= Number(monint)/Number(daysinmon);    
                            //console.log(tempprdyint);
                            
                            tmp["int"] = Math.floor((datediff(changeDateUserFormat(from_date),changeDateUserFormat(to_date))*tempprdyint));
                            if($scope.minustrans){
                                if($scope.minustrans.id == $scope.drcrr[i].id){
                                    tmp["int"] = 0;
                                    console.log($scope.drcrr[i]);
                                    //$scope.drcrr[i].int = Math.floor((datediff(changeDateUserFormat(from_date),changeDateUserFormat(to_date))*tempprdyint));
                                
                                }
                            }
                            $scope.int_ttl += Number(tmp["int"]);
                        }else  if(tmp["credit"] ==0){
                            //console.log($scope.drcrr[i]);
                            var daysinmon =  daysInMonth ($scope.intmon, $scope.yearr[$scope.intyear-1].year);
                            var from_date =$scope.yearr[$scope.intyear-1].year + '-' + $scope.intmon + '-' + "01"; 
                            to_date =  tmp["date"];
                            
                            monint = getWholePercent(tmp["debit"],$scope.intRows[h]["intrate"]); 
                            //console.log(monint);
                            var tempprdyint= Number(monint)/Number(daysinmon);  
                            //console.log($scope.drcrr[i]); 
                            tmp["int"] = Math.floor((datediff(changeDateUserFormat(from_date),changeDateUserFormat(to_date))*tempprdyint));
                            if($scope.minustrans){
                                if($scope.minustrans.id == $scope.drcrr[i].id){
                                    // $scope.drcrr[i].intrate = 0;
                                    tmp["int"] = 0;
                                    console.log($scope.drcrr[i]);
                                    //$scope.drcrr[i].int = Math.floor((datediff(changeDateUserFormat(from_date),changeDateUserFormat(to_date))*tempprdyint));
                                
                                }
                            }
                            $scope.int_ttl += Number(tmp["int"]);
                            tmp["int_ttl"] = $scope.int_ttl;
                        }
                        console.log(tmp);
                        if(tmp["note"] == "interestcal"){
                            $scope.interestcal_entry = tmp;
                        }else{
                            $scope.intRows[h].intArr.push(tmp);
                        }
                        
                        console.log($scope.intRows[h].intArr);
                        // break;
                    }
                }
                console.log($scope.intRows);

// for(s=0;s<$scope.customers.length;s++){
    //     if($scope.drcrr[i].customer ==$scope.customers[s].id){
    //         $scope.drcrr[i].intrate = $scope.customers[s].intrate;
    //     }
    // }
    
    // for(p=0;p<$scope.intRows.length;p++){            
    //     if($scope.intRows[p].customer == $scope.drcrr[i].customer){
    //         $tmp = {"op":0,"date":$scope.drcrr[i].date,"credit":$scope.drcrr[i].credit,"debit":$scope.drcrr[i].debit,"note":$scope.drcrr[i].note,"days":datediff(changeDateUserFormat(from_date),changeDateUserFormat(to_date)),"int":Math.floor($scope.drcrr[i].int)};
    //         $scope.intRows[p].intArr.push($tmp);
    //         $scope.intRows[p].int_ttl += Math.floor(Number($scope.drcrr[i].int));
    //     }

    // }
            }
            
        for(m=0;m<$scope.updateentry.length;m++){
            //$scope.updateentry[m].credit =0;
            var gg = 0;
             for(h=0;h<$scope.drcrr.length;h++){
                 if($scope.updateentry[m].customer == $scope.drcrr[h].customer){
                 gg += Number($scope.drcrr[h].int);
               
             }
         }
         $scope.updateentry[m].credit += Math.floor(Number(gg));
         
         }
         console.log($scope.intRows);
         var daysinmon =  daysInMonth ($scope.intmon, $scope.yearr[$scope.intyear-1].year);
         for(j=0;j<$scope.updateentry.length;j++){

            $scope.updateentry[j].date =  $scope.yearr[$scope.intyear-1].year + '-' + $scope.intmon+ '-' + daysinmon ;
        
}
console.log($scope.intRows);
        //  $scope.lst();
    });
    // $scope.intRows_copy = [];
    // console.log($scope.intRows_copy);
    // console.log($scope.intRows[0].intArr[2]);
    // $scope.intRows_copy = angular.copy($scope.intRows[0].intArr);
    // $scope.cloneArr($scope.intRows[0].intArr,$scope.intRows_copy);
    // console.log($scope.intRows_copy);
    }


    $scope.cloneArr = function(obj1,clone_obj){
        console.log(obj1[1]);
        for([key,value] in obj1){
            // console.log(key,value);
        }
    }


    $scope.arrIndfun = function(ind,cus){
        console.log($scope.intRows_copy);
        var ress = false; 
        if($scope.arrInd == ind){
            for(q=0;q<$scope.intRows.length;q++){
                if($scope.intRows[q].customer == cus){
                    console.log(ress,q);
                    console.log($scope.intRows);
                    console.log($scope.intRows_copy);
                    ress = $scope.check_changed($scope.intRows[q].intArr,$scope.intRows_copy[q].intArr,["credit","debit"]);
                    console.log(ress);
                    if(ress){
                        if($scope.intRows[q].intArr[ind].credit > 0){
                            var monint = (Number($scope.intRows[q].intArr[ind].credit) * Number($scope.intRows[q].intrate)) / 100 ;
                        }else if($scope.intRows[q].intArr[ind].debit > 0){
                            var monint = (Number($scope.intRows[q].intArr[ind].debit) * Number($scope.intRows[q].intrate)) / 100 ;
                        }
                        var perdayint = monint / $scope.intRows[q].intArr[0].days;
                        $scope.intRows[q].intArr[ind].int = Math.floor($scope.intRows[q].intArr[ind].days * perdayint);
                    }
                    
                    $scope.intRows[q].int_ttl = 0;
                    for(j=0;j<$scope.intRows[q].intArr.length;j++){
                        $scope.intRows[q].int_ttl += Math.floor(Number($scope.intRows[q].intArr[j].int));
                    }
                }
            }
            // console.log($scope.intRows_copy);
            // $scope.intRows_copy = angular.copy($scope.intRows);
            // console.log($scope.intRows_copy);
        }else{
            $scope.arrInd = ind;
        }
    }


    $scope.check_changed = function(obj1,obj2,params){ //checking changes in same arrays 
        var ress = false;
        for(i=0;i<obj1.length;i++){
                 for(k=0;k<params.length;k++){
                     console.log(obj1[i][params[k]], "!=" ,obj2[i][params[k]])
                     if(obj1[i][params[k]] != obj2[i][params[k]]){
                         ress = true;
                         return ress;
                     }
                 }
        }
        return ress;
    }

$scope.postint = function(){
    // $scope.intRows_copy = angular.copy($scope.intRows);
    $('#showint').modal();
   result = true;
//    confirm("Are you sure");
    if(result == true){
        $scope.datac = [];
        $scope.datacr =[];
        for(i=0;i<$scope.updateentry.length;i++){
           var tmp = [];
            if($scope.updateentry[i].credit!=0){
                $scope.datacr.push($scope.updateentry[i].credit);
               $scope.datac.push($scope.updateentry[i].customer);
            }
        }
        $scope.filterrdata = {intid:$scope.datac,intcr:$scope.datacr,intdate:$scope.updateentry[0].date,creditexp:"0"};

        console.log($scope.filterdata);
    //     Data.post('drcr',$scope.filterrdata).then(function(results){
    //     $scope.response = results.message;
    //     $scope.drcrint();
    //    });
    }
   
}

$scope.dontadd = function(ind){
    console.log(ind);
    $scope.minustrans =[];
    $scope.minustrans.push($scope.intRows[ind]);
   $scope.drcrint();
}


/*$scope.addornot =  function(){
    $scope.changedaddornot=[];
for(i=0;i<$scope.drcrr.length;i++){
    $scope.changedaddornot[i] ={};
    if($scope.drcrr[i].addornot == 1){
        $scope.changedaddornot[i] = $scope.drcrr[i];
        $scope.changedaddornott = 1 ;
      
    }else{
        $scope.drcrr[i].addornot = 0;
    }
   
}
//console.log($scope.changedaddornot);
$scope.getdrcrlist();
}*/

$scope.minusprevint = function(){
    for(i=0;i<$scope.updateentry.length;i++){
        console.log($scope.updateentry[i].minusnote);
        if($scope.updateentry[i].minusnote == "1"){
            $scope.minus = 1;
            console.log($scope.minus);
    
        }
    }
    
    
    
    $scope.drcrint();
}

$scope.lst = function(){
    $scope.lstt = [];
    for(i=0;i<$scope.lstmonintcal.length;i++){
        $scope.lstt[i] = {};
        $scope.lstt[i].show = 1 ;
        $scope.lstt[i].customer = $scope.lstmonintcal[i].customer ;
        $scope.lstt[i].customername = $scope.lstmonintcal[i].customername ;
        $scope.lstt[i].debit = $scope.lstmonintcal[i].credit ;
        for(l=0;l<$scope.drcrr.length;l++){
           
            if($scope.lstmonintcal[i].customer == $scope.drcrr[l].customer && $scope.lstmonintcal[i].credit == $scope.drcrr[l].debit){
                //console.log($scope.lstmonintcal[i]);
                $scope.lstt[i].show = 0 ;
            }
              
            }
 
        } 
    }
    $scope.payint = function(d){ 
        $scope.data = {date:$scope.ffdate,customer:$scope.lstt[d].customer,credit:"0.00" ,debit:$scope.lstt[d].debit,note:"interestpaid",forint:"1",creditexp:"0",crid:"0"};
        //Data.post('')
        console.log($scope.ffdate);
    }

    
  
});

app.controller('creditcopyCtrl', function($scope, $rootScope, $routeParams, $location, $http, Data) {
    $scope.filterr = [];
    $scope.getcreditttl = function(){
        $scope.filter = {creditexp : 1,group_by:"a.customer",customer:$scope.filtercustomer}
        Data.get('drcr',$scope.filter).then(function(results){
            $scope.drcrcreditttl = results.drcr;
            $scope.getcreditList();
        })
    }

$scope.getcreditList = function(){
    
    if($scope.filterr.from_date || $scope.filterr.to_date){
        $scope.date = setDateFilter($scope.filterr);
    }else{
        var dt = new Date();
        tmon = (dt.getMonth()+1);
        if(tmon<10){
            tmon = "0" + tmon;
        }
       tdte = dt.getFullYear() + '-' + tmon + '-' + dt.getDate() ;
       dt.setDate(dt.getDate()-180);
       mon = (dt.getMonth()+1);
        if(mon<10){
            mon = "0" + mon;
        }
       fdte = dt.getFullYear() + '-' +mon+ '-' + dt.getDate() ;
       $scope.date = {value :fdte,value1:tdte, op:"Between"}       

    }

    $scope.filter = {creditexp : 1,customer:$scope.filtercustomer,date:$scope.date}
    Data.get('drcr',$scope.filter).then(function(results){
        $scope.drcrcredit = results.drcr;
    })
}


$scope.changeDateUserFormat= function(dt){
        
    if(dt){
          return  changeDateUserFormat(dt);
    }
    }

    $scope.getdrcrtotal = function(obj,key,cn){
        var total= 0;
        if(obj && obj.length ){
            for(i=0;i<obj.length;i++){
                if(obj[i].customer==cn){
                    total += Number(obj[i][key]) || 0;
                }
               
            }
        }
        return total;
    }
    $scope.initiateCalendar = function() {
        $('.input-group.date').datepicker({
            format: 'dd/mm/yyyy',
            orientation: "auto"
        });
       
            $('.input-group.date').each(function() {
    //$(this).datepicker('setDate', $scope.filter.from_date);
    });
    }
    $scope.initiateCalendar();
    //getcustomerlist
$scope.getcustomerlist= function(){
    Data.get('customers',{chitfund:{op:"!=", value:"1" }}).then(function(results){
        $scope.customers=results.customers;
    })
}
//getcustomerlist
$scope.getcustomerlist();




    // object property value
    // for (const [key, value] of Object.entries(obj1[i])) {
    //     console.log(key, value);
    // }

});
app.controller('creditCtrl', function($scope, $rootScope, $routeParams, $location, $http, Data) {
   $scope.filterr = {};
   $scope.display = 0;

    $scope.getcreditlist = function(){
        $scope.credits = [];
        $scope.crpaid = [];
       
        //$scope.pendingcreditlist = [];
        if($scope.filterr.from_date || $scope.filterr.to_date){
            $scope.date = setDateFilter($scope.filter);
        }
        $scope.filter = {customer:$scope.customer,date:$scope.date,creditexp:"1"}
        console.log($scope.filter);
        Data.get('drcr',$scope.filter).then(function(results){
            $scope.drcrlist = results.drcr;
            Data.toast(results);
            $scope.display = 1;
            console.log($scope.drcrlist);
            for(i=0;i<$scope.drcrlist.length;i++){
                
                if($scope.drcrlist[i].credit ==0){
                    $scope.credits.push($scope.drcrlist[i]);
                }else{
                    $scope.crpaid.push($scope.drcrlist[i]);
                }
            }
            for(m=0;m<$scope.credits.length;m++){
                for(n=0;n<$scope.crpaid.length;n++){
                   // $tmp = {};
                    if($scope.credits[m].id == $scope.crpaid[n].crid ){
                     //   $tmp= {id:$scope.credits[i].id,date:$scope.credits[i].date,customer:$scope.credits[i].customer,}
                     $scope.credits[m].debit -= Number($scope.crpaid[n].credit);
                    }
                }
               // $scope.pendingcreditlist
            }
            console.log($scope.credits);
            console.log($scope.crpaid);
        });
        
    }
   //UPDATE `received` SET chiti=15 WHERE id>83 and id<117
   //SELECT * FROM `received` where customer =4 and chiti = 0
   //chiti0
   $scope.crpaymod = function(ind){
    console.log(ind);
    $scope.crpayid = ind;
    $scope.crpaydate = "";
    $scope.crpaycredit = 0;
    $('#crpaymodal').modal();
   }

   $scope.paycredit = function(){
    $('#crpaymodal').modal("hide");
       $scope.crpaynote  = "returned "+ $scope.crpaycredit + " of " + $scope.credits[$scope.crpayid].debit+ "( ID : "+ $scope.credits[$scope.crpayid].id + ")" + " on " + $scope.crpaydate;
       $scope.filter = {date:changeDateSQLFormat($scope.crpaydate),customer:$scope.credits[0].customer,debit:"0.00" ,credit:$scope.crpaycredit, forint:"0",creditexp:"1",crid:$scope.credits[$scope.crpayid].id,showdaybook:"0", note:$scope.crpaynote,note1:""  };
       console.log($scope.filter);
       Data.post('drcr',$scope.filter).then(function(results){
        $scope.response = results.message;
        Data.toast(results);
        $scope.getcreditlist();
       });
       

   }
   
   /* $scope.filterr = [];
    $scope.getcreditttl = function(){
        $scope.filter = {creditexp : 1,group_by:"a.customer",customer:$scope.filtercustomer}
        Data.get('drcr',$scope.filter).then(function(results){
            $scope.drcrcreditttl = results.drcr;
            $scope.getcreditList();
        })
    }

$scope.getcreditList = function(){
    
    if($scope.filterr.from_date || $scope.filterr.to_date){
        $scope.date = setDateFilter($scope.filterr);
    }else{
        var dt = new Date();
        tmon = (dt.getMonth()+1);
        if(tmon<10){
            tmon = "0" + tmon;
        }
       tdte = dt.getFullYear() + '-' + tmon + '-' + dt.getDate() ;
       dt.setDate(dt.getDate()-180);
       mon = (dt.getMonth()+1);
        if(mon<10){
            mon = "0" + mon;
        }
       fdte = dt.getFullYear() + '-' +mon+ '-' + dt.getDate() ;
       $scope.date = {value :fdte,value1:tdte, op:"Between"}       

    }

    $scope.filter = {creditexp : 1,customer:$scope.filtercustomer,date:$scope.date}
    Data.get('drcr',$scope.filter).then(function(results){
        $scope.drcrcredit = results.drcr;
    })
}
*/

$scope.getsum = function(obj,key){
    var total = 0;
    if(obj && obj.length){
        for(i=0;i<obj.length;i++){
            total += Number(obj[i][key]) || 0;
        }
    }
    return total;
}
$scope.changeDateUserFormat= function(dt){
        
    if(dt){
          return  changeDateUserFormat(dt);
    }
    }

    $scope.getdrcrtotal = function(obj,key,cn){
        var total= 0;
        if(obj && obj.length ){
            for(i=0;i<obj.length;i++){
                if(obj[i].customer==cn){
                    total += Number(obj[i][key]) || 0;
                }
               
            }
        }
        return total;
    }
    $scope.initiateCalendar = function() {
        $('.input-group.date').datepicker({
            format: 'dd/mm/yyyy',
            orientation: "auto"
        });
       
            $('.input-group.date').each(function() {
    //$(this).datepicker('setDate', $scope.filter.from_date);
    });
    }
    $scope.initiateCalendar();
    //getcustomerlist
$scope.getcustomerlist= function(){
    Data.get('customers',{chitfund:{op:"!=", value:"1" }}).then(function(results){
        $scope.customers=results.customers;
    })
}
//getcustomerlist
$scope.getcustomerlist();
console.log($scope.display);
});

app.controller('interestdemoCtrl', function($scope, $rootScope, $routeParams, $location, $http, Data) {
    $scope.months = [{id:"01",mon: 'January'},{id:"02",mon: 'February'},{id:"03",mon: 'March'},{id:"04",mon: 'April'}
        ,{id:"05",mon: 'May'},{id:"06",mon: 'June'},{id:"07",mon: 'July'},{id:"08",mon: 'August'},{id:"09",mon: 'September'},{id:"10",mon:'October'},
        {id:"11",mon:'November'},{id:"12",mon:'December'}];
    $scope.yearr = [{id:1,year:"2018"},{id:2,year:"2019"},{id:3,year:"2020"},{id:4,year:"2021"}];
   // $scope.yearrr = ["","2018","2019","2020","2021"]
    $scope.display = 0;

//getcustomerlist
$scope.getcustomerlist= function(){
    Data.get('customers',{chitfund:{op:"!=", value:"1" }}).then(function(results){
        $scope.customers=results.customers;
    })
}
//getcustomerlist


    //calinttt
    $scope.calinttt = function(){
      
        $scope.display = 1;
        
        $scope.drcrint();
       } 
//calinttt



//drcrint
    $scope.drcrint = function(){
        
        var daysinmon =  daysInMonth ($scope.intmon, $scope.yearr[$scope.intyear-1].year);
        $scope.slctodate = $scope.yearr[$scope.intyear-1].year + '-' + $scope.intmon + '-' + daysinmon;
        
        $scope.filter = {forint: 1,date:{value:$scope.slctodate,op:"<="},customer:$scope.filtercustomer ,group_by:"customer",fields:"sum(credit) as credittotal, sum(debit) as debittotal,customer as customer "}
        Data.get('drcr',$scope.filter).then(function(results){
            $scope.customerdetail = results.drcr;
            
            //console.log($scope.customerdetail[0]);
        });
        $scope.filter = {forint: 1,date:{value:$scope.slctodate,op:"<="},customer:$scope.filtercustomer}
        Data.get('drcr',$scope.filter).then(function(results){
            $scope.drcrr = results.drcr; 
            for(i=0;i<$scope.drcrr.length;i++){
            $scope.drcrr[i].debitlist = [];         
            for(j=0;j<$scope.drcrr.length;j++){                      
                if($scope.drcrr[i].id == $scope.drcrr[j].crid){
                    $scope.drcrr[i].debitlist.push($scope.drcrr[j]); 
                }
            }
         
       
  
       
        
    if($scope.display == 1){
        $scope.allint = 0;
        for(i=0;i<$scope.drcrr.length;i++){
            var paidamount = 0;
            var intttl = 0;
            var cusintttl =  0;
            if($scope.drcrr[i].debit == 0){
                $scope.drcrr[i].debitlist = [];                    
                $scope.drcrr[i].perdayint = [];
                for(j=0;j<$scope.drcrr.length;j++){                      
                    if($scope.drcrr[i].id == $scope.drcrr[j].crid  ){
                        //console.log($scope.drcrr[j].date.substr(5,2));
                        var month = $scope.drcrr[j].date.substr(5,2);
                        var year = $scope.drcrr[j].date.substr(0,4);
                        var date = $scope.drcrr[j].date.substr(8,2);
                        var daysinmon =  daysInMonth (month, year);
                        var  monint = getWholePercent($scope.drcrr[j].debit,2.5);                    
                        var from_date = year +"-"+ month+ "-" + "01";
                        var to_date =  $scope.drcrr[j].date ;
                        if($scope.drcrr[i].date.substr(5,2) == $scope.drcrr[j].date.substr(5,2) && $scope.drcrr[i].date.substr(0,4) == $scope.drcrr[j].date.substr(0,4) ){
                           
                            var daysinmon =  daysInMonth (month, year);
                            var  monint = getWholePercent($scope.drcrr[j].debit,2.5);                    
                            var from_date=$scope.drcrr[i].date;
                            var to_date =  $scope.drcrr[j].date ;
                            
                        }
                        var prdyint= Number(monint)/Number(daysinmon);  
                       paidamount += Number($scope.drcrr[j].debit);
                       
                        /*var dt = new Date($scope.drcrr[j].date);
                        var month = dt.getMonth()+1;
                        var year = dt.getFullYear();
                        var date = dt.getDate();
                        var daysinmon =  daysInMonth (month, year);
                        var  monint = getWholePercent($scope.drcrr[j].debit,2.5);                    
                        var prdyint= Number(monint)/Number(daysinmon);
                      
                        var today = new Date();                
                        var from_date=$scope.drcrr[i].date;
                        var to_date = today.getFullYear() + "-" +  "0"+ Number(today.getMonth()+1) +"-" + daysinmon  ;*/
                      
                        
                        if($scope.drcrr[j].date.substr(5,2) == $scope.intmon){
                            $scope.drcrr[j].interest = (datediff(changeDateUserFormat(from_date),changeDateUserFormat($scope.drcrr[j].date))*prdyint).toFixed(2);
                            intttl += Number($scope.drcrr[j].interest);
                            $scope.drcrr[i].debitlist.push($scope.drcrr[j]);
                        }
                        

                        
                      
                    }
                }  
            
                //remaining bal int
                var temp = {};
                temp["date"] = "Remaining Balance";      
                console.log(paidamount);          
                temp["debit"] = Number($scope.drcrr[i].credit) - paidamount;
                tempamt = temp["debit"];
                //console.log(tempamt);
                from_date = $scope.drcrr[i].date;
               // console.log(from_date);
                if(from_date.substr(5,2) == $scope.intmon){
                    if(from_date.substr(8,2) == "01"){
                        temp["interest"] = getWholePercent(tempamt,2.5);
                    }else{
                    dt = new Date();
                    year = dt.getFullYear();
                    month = $scope.intmon;
                    daysinmon =  daysInMonth (month, year);
                    to_date = year + "-" + month + "-"  + daysinmon;
                    var  tempmonint = getWholePercent(tempamt,2.5); 

                    var tempprdyint= Number(tempmonint)/Number(daysinmon);        
                    //console.log(from_date,to_date); 
                    temp["interest"] = (datediff(changeDateUserFormat(from_date),changeDateUserFormat(to_date))*tempprdyint).toFixed(2);
                    }
                }else {
                    
                    temp["interest"] = getWholePercent(tempamt,2.5);
                    
                }
               // if((Number(from_date.substr(5,2))!=$scope.intmon) || (Number(from_date.substr(0,4))!=year )){
                    
                    //from_date = year + "-" + $scope.intmon + "-" + "01";
                   // temp["interest"]  = getWholePercent($scope.drcrr[i].credit,2.5);   
               // }
                var tempp = {};
             var temppp = {};
              /* temppp["interest"] = 0;
              
              
              
              var today = new Date();
              var from_date = $scope.drcrr[i].date;                 
              
              if((Number(from_date.substr(5,2))!=today.getMonth()+1) || (Number(from_date.substr(0,4))!=today.getFullYear()) ){
               from_date= today.getFullYear() + "-" +  "0"+ Number(today.getMonth()+1) +"-01" ;
              } 
              
              var monintt = getWholePercent(amt,2.5);
              var daysinmonn =  daysInMonth (from_date.substr(5,2) , from_date.substr(0,4));
              var to_date = today.getFullYear() + "-" +  "0"+ Number(today.getMonth()+1) +"-" + daysinmonn  ;
              
              
              var amt = temp["interest"];

              
              if(($scope.drcrr[i].debitlist.length<=0) && (from_date.substr(8,2) == "01") ){
                 
                 amt = $scope.drcrr[i].credit ;
                 temp["interest"] =  getWholePercent(amt,2.5);
            }if(from_date.substr(8,2) != "01"){
                amt = $scope.drcrr[i].credit ;
                  monint = getWholePercent(amt,2.5);                      
                  var prdyint= Number(monint)/Number(daysinmonn);
                  temp["interest"] = (datediff(changeDateUserFormat(from_date),changeDateUserFormat(to_date))*prdyint).toFixed(2);
            }*/
            intttl += Number(temp["interest"]);

              $scope.drcrr[i].debitlist.push(temp);                        
              $scope.drcrr[i].debitlist.push(tempp);
              //temppp["interest"] = (intttl + temp["interest"]).toFixed(2) ;
             
              $scope.allint += Number(intttl) ;
              temppp["interest"] = intttl;
              $scope.drcrr[i].intttl = intttl;
             cusintttl = $scope.drcrr[i].intttl;
              temppp["debit"] = "Total Interest" ;
              $scope.drcrr[i].debitlist.push(temppp);
            }   
        }
       var tmp = [] ;
      
       for(s=0;s<$scope.drcrr.length;s++){
           var flag = true;
          for(k=0;k<tmp.length;k++){
              if(tmp[k].customer== $scope.drcrr[s].customer){
                flag=false;
                tmp[k].credit += $scope.drcrr[s].intttl || 0;
                break;
              }
          }
          if(flag){
              tmp.push({
                  customer:$scope.drcrr[s].customer,
                  credit:$scope.drcrr[s].intttl || 0
              })
             
          }
       }
      
       
       $scope.data = tmp;
       $scope.display = 2;
    
      
       
    }
}
        });
}
//drcrint()


$scope.postint  = function(){
    
    var customerid =[];
    var intamt = [];
    var dt = new Date();
    var year = dt.getFullYear();
    var intdate = year + "-" + $scope.intmon + "-" + "01";
    
    if($scope.data.length>0){
        for(i=0;i<$scope.data.length;i++){
            customerid.push($scope.data[i].customer);
            intamt.push($scope.data[i].credit);
        }
    }
    

    Data.post('drcr',{customer:customerid ,forint:"1", credit:intamt,date:intdate}).then(function(results){
        $scope.response = results.message;
    });
}
   
    /*$scope.debitlistint = function(fromdate,todate,perdayint){
      
       var tdate = changeDateUserFormat(todate);
       var fdt = new Date(fromdate);
       var tdt = new Date(todate);
       fdtmon = fdt.getMonth();
       tdtmon = tdt.getMonth();
      
       if(fdtmon == tdtmon ){ 
        var fdate= changeDateUserFormat(fromdate);     
        var result = 0;
        result =Math.floor(datediff(fdate,tdate)*perdayint) ;
       }else{
        var result = 0;
        
        var fdtyear = fdt.getFullYear();
        fdate = 01 +"/" + Number(tdtmon+1) + "/" + fdtyear ;
       //console.log();
       result = Math.floor(datediff(fdate,tdate)*perdayint) ;
       }
        
       // console.log(datediff("02/08/2019","06/08/2019"));
        return result;
    }*/
    
});


app.directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if (event.which === 13) {
                scope.$apply(function() {
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});


app.directive('focus', function() {
    return {
        restrict: 'A',
        link: function($scope, selem, attrs) {

            selem.bind('keypress', function(e) {
                var code = e.keyCode || e.which;
                if (code === 13) {
                    e.preventDefault();
                    var pageElems = document.querySelectorAll('input, select, textarea'),
                        elem = e.currentTarget

                    focusNext = false,
                        len = pageElems.length;
                    for (var i = 0; i < len; i++) {
                        var pe = pageElems[i];
                        if (focusNext) {
                            if (pe.style.display !== 'none') {
                                pe.focus();
                                break;
                            }
                        } else if (pe === e.currentTarget) {
                            focusNext = true;
                        }
                    }

                }
            });
        }
    }
});

app.directive('focusOnShow', function($timeout) {
    return {
        restrict: 'A',
        link: function($scope, $element, $attr) {
            if ($attr.ngShow) {
                $scope.$watch($attr.ngShow, function(newValue) {
                    if (newValue) {
                        $timeout(function() {
                            $element[0].focus();
                        }, 0);
                    }
                })
            }
            if ($attr.ngHide) {
                $scope.$watch($attr.ngHide, function(newValue) {
                    if (!newValue) {
                        $timeout(function() {
                            $element[0].focus();
                        }, 0);
                    }
                })
            }
        }
    };
})

app.directive('onFinishRenderDelete', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function() {
                    if (scope.change.field == "received") {
                        $("#received-" + scope.change.index).focus();
                    }
                    scope.$emit(attr.onFinishRender);
                });
            }
        }
    }
});

app.directive('whenScrolled', function() {
    return function(scope, elm, attr) {
        var raw = elm[0];

        elm.bind('scroll', function() {
            if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                scope.$apply(attr.whenScrolled);
            }
        });
    };
});

