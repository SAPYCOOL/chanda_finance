<?php

require_once '../include/DbHandler.php';
require_once '../include/passwordHash.php';
require '.././libs/Slim/Slim.php';

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();
date_default_timezone_set("Asia/Kolkata");
// User id from db - Global Variable
$user_id = NULL;
//ini_set('max_execution_time', 300);




$app->get('/export',  function() use ($app){
	$password = getParams($app->request->get("password"));
	$fromdate = getParams($app->request->get("fromdate"));
	$todate = getParams($app->request->get("todate"));
	if($password == "1234"){

	$db = new DbHandler();
    	define('BASE_DIR', '../../backup/');
		$version = 0;
		if (file_exists(BASE_DIR)) {
			while (file_exists(BASE_DIR."data" . (++$version)));
		}
		$filebasepath = BASE_DIR."data" . $version;

		mkdir(BASE_DIR . "data" . $version . '/' . "/", 0777, true);

		$response = array();
		$tables = array("customer","invoice","manufacture","transport");
    
		for($i=0;$i<sizeOf($tables);$i++){
    
			$data = $db->getTableData($tables[$i],$fromdate,$todate);
			$filename      =$tables[$i].".csv";
			$filepath      = $filebasepath."/" . $filename;
			$fp = fopen($filepath, "w");
    
			$seperator = "";
			$comma     = "";
			for ($j = 0; $j < sizeOf($data); $j++) {
				$tmp       = array();
				$seperator = "";
				$comma     = "";
        
				foreach($data[$j] as $key => $val){
					$seperator .= $comma . '' . $val;//str_replace('', '""', $val);
					$comma = ",";
				}
        
            $seperator .= "\n";
            fputcsv($fp, $data[$j]);
        }
        fclose($fp);
    }
	
    $directoryToZip = BASE_DIR . "data" . $version;
    
	$rootPath = realpath($directoryToZip."/");

	//Creating zip of backup folder
	$zip = new ZipArchive();
	$zip->open($directoryToZip.'.zip', ZipArchive::CREATE | ZipArchive::OVERWRITE);

	// Create recursive directory iterator
	/** @var SplFileInfo[] $files */
	$files = new RecursiveIteratorIterator(
		new RecursiveDirectoryIterator($rootPath),
		RecursiveIteratorIterator::LEAVES_ONLY
	);

	foreach ($files as $name => $file)
	{
    // Skip directories (they would be added automatically)
    if (!$file->isDir())
    {
        // Get real and relative path for current file
        $filePath = $file->getRealPath();
        $relativePath = substr($filePath, strlen($rootPath) + 1);

        // Add current file to archive
        $zip->addFile($filePath, $relativePath);
    }
	}

    // Zip archive will be created only after closing object
    $zip->close();
	
		//deleting folder after creating zip
		
		
	$it = new RecursiveDirectoryIterator($directoryToZip, RecursiveDirectoryIterator::SKIP_DOTS);
	$files = new RecursiveIteratorIterator($it,
				RecursiveIteratorIterator::CHILD_FIRST);
	foreach($files as $file) {
		if ($file->isDir()){
			rmdir($file->getRealPath());
		} else {
			unlink($file->getRealPath());
		}
	}
	rmdir($directoryToZip);
		
		
    $type = getParams($app->request->get("type"));
    if($type==1){
        $db->clearData();
    
        if (!isset($_SESSION)) {
            session_start();
        }
        $_SESSION["vardhman"]['firm'] = "";
        $_SESSION["vardhman"]['firm_name'] = "";
    }
    
    
    $response["status"]   = "success";
        $response["message"]   = "successfully exported data";
		$response["filename"] = "backup/data" . $version.".zip";
    }else{
	
	
	
    $response["status"]   = "error";
		$response["message"]   = "Sorry you are not permitted to export";
	}
    echoRespnse(200, $response);
});


$app->post('/import', function() use($app) {
    $db = new DbHandler();
    $response = array();

    if (sizeOf($_FILES) > 0) { //if user provided file to import
        $path_info = pathinfo($_FILES['files']['name']);
        if ($path_info['extension'] == "zip") {
            $zipfile = $_FILES['files'];
            $respimage = $db->updateImage($zipfile); //initially upload file in our server
            $zip = new ZipArchive;
            $res = $zip->open('../../backup/import/'.$zipfile["name"]); //open the zip file
            if ($res === TRUE) {
                $zip->extractTo('../../backup/import/data'); //and explore it to data folder
                $zip->close();


                //now check the file consist in given zip file
                $files = scandir("../../backup/import/data", 0);
                $tempfiles = array();
                for ($i = 2; $i < count($files); $i++) {
                    array_push($tempfiles, str_replace(".csv", "", $files[$i]));
                }
                $tables = array("customer","invoice","manufacture","transport"); // this are the files need to be there in given zip file

                if ($tempfiles == $tables) { //if all file exist in given zip file
                    $db->clearData();

                    for ($i = 0; $i < sizeof($tables); $i++) {
                        $filename = "../../backup/import/data/".$tables[$i].
                        ".csv";
                        $file = fopen($filename, "r");
                        while (($getData = fgetcsv($file, 10000, ",")) !== FALSE) {
                            $db->postTableData($tables[$i], $getData);
                        }
                        fclose($file);
                    }
                    $response["status"] = "success";
                    $response["message"] = "successfully imported data";
                } else {
                    $response["status"] = "error";
                    $response["message"] = "Provide file is either invalid or corrupted. Please provide a valid zip file";
                }
            } else {
                $response["status"] = "error";
                $response["message"] = "Your backup file doesnt consist proper data";
            }
        } else {
            $response["status"] = "error";
            $response["message"] = "Provide a zip file consisting of valid data to import";
        }
    } else {
        $response["status"] = "error";
        $response["message"] = "Provide a zip file consisting of valid data to import";
    }

    echoRespnse(200, $response);
});


$app->get('/export1',  function() use ($app){
	$password = getParams($app->request->get("password"));
	if($password == "1q9o0p2w"){
	$db = new DbHandler();
		

		$response = array();
		$tables = array("customer","invoice","manufacture","transport");
		
		for($i=0;$i<sizeOf($tables);$i++){
		
			$data = $db->getTableData($tables[$i]);
			$filename      =$tables[$i].".csv";
			$filepath      = "../../backup/" . $filename;
			
			$fp = fopen($filepath, "w");
		
			$seperator = "";
			$comma     = "";
			for ($j = 0; $j < sizeOf($data); $j++) {
			
				$tmp       = array();
				$seperator = "";
				$comma     = "";
			
				foreach($data[$j] as $key => $val){
					$seperator .= $comma . '' . $val;//str_replace('', '""', $val);
					
					$comma = ",";
				}
			
				$seperator .= "\n";
				fputcsv($fp, $data[$j]);
			}
			fclose($fp);
			
			
		}
		$type = getParams($app->request->get("type"));
		if($type==1){
			$db->clearData();
		
			if (!isset($_SESSION)) {
				session_start();
			}
			$_SESSION['firm'] = "";
			$_SESSION['firm_name'] = "";
		}
		
		
		$response["filename"] = "export";
		$response["status"]   = "success";
			$response["message"]   = "successfully exported data";
		
		
		}else{
		
		
		
		$response["status"]   = "error";
			$response["message"]   = "Sorry you are not permitted to export";
		}
		echoRespnse(200, $response);
});


//start creditors
$app->get('/creditors',function() use($app){
	$response = array();
	$db = new DbHandler();
	
	// $todaydate = $app->request->get("todaydate");

	$params= $db->getFunctionParam("customers");
	$getdata = array();
	// for($i=0;$i<sizeof($params);$i++){
	// 		if($params[$i] == "forint"){
	// 			array_push($getdata,1);
	// 		// }else if($params[$i] == "sort_by"){
	// 		// 	array_push($getdata,"a.firstname");
	// 		// }else if($params[$i] == "sort_order" ){
	// 		// 	array_push($getdata,"asc");
	// 		}else{
	// 			array_push($getdata,"");
	// 		}
	// }
	for($i=0;$i<sizeof($params);$i++){
		if(getParams($app->request->get($params[$i]))){
			array_push($getdata,getParams($app->request->get($params[$i])));
		}else{
			array_push($getdata,"");
		}
	}
	$intcustomersList = call_user_func_array(array($db,'getcustomers'), $getdata);	

	if(sizeof($intcustomersList)>0){
		$creditors = array();
		for($j=0;$j<sizeof($intcustomersList);$j++){
			$tmpcust = array();
			$tmpcust["customer"] = $intcustomersList[$j]["id"];
			$tmpcust["customername"] = $intcustomersList[$j]["firstname"]. ' '. $intcustomersList[$j]["lastname"];
			$tmpcust["intrate"] = $intcustomersList[$j]["intrate"];
			$tmpcust["amount"] = 0;
			$tmpcust["interest"] = 0;

			//getting gave and took entries total
			$params= $db->getFunctionParam("drcr");
			$getdata = array();
			for($i=0;$i<sizeof($params);$i++){
					if($params[$i]=="customer"){
						array_push($getdata,$intcustomersList[$j]["id"]);
					}else if($params[$i]=="forint"){
						array_push($getdata,1);
					}else if($params[$i]=="fields"){
						array_push($getdata,"sum(credit) as credit,sum(debit) as debit");
					}else{
						array_push($getdata,"");
					}
			}
			$drcrList = call_user_func_array(array($db,'getdrcr'), $getdata);
			
			if(sizeof($drcrList)>0 ){
				$tmpcust["amount"] += $drcrList[0]["credit"] - $drcrList[0]["debit"];
			}
			

			//will calculate interest calculated and paid total 
			$params= $db->getFunctionParam("interest");
			$getdata = array();
			for($k=0;$k<sizeof($params);$k++){
				if($params[$k]=="customer"){
					array_push($getdata,$intcustomersList[$j]["id"]);
				}else if($params[$k]=="fields"){
					array_push($getdata,"sum(credit) as credit,sum(debit) as debit");
				}else{
					array_push($getdata,"");
				}
			}
		
			$interestList = call_user_func_array(array($db,'getInterest'), $getdata);

			if(sizeof($interestList)>0 ){
				$tmpcust["interest"] += $interestList[0]["credit"] - $interestList[0]["debit"];
			}

			// echo $j."->".json_encode($tmpcust);

			//last int month added
			// $params= $db->getFunctionParam("interest");
			$getdata = array();
			for($k=0;$k<sizeof($params);$k++){
				if($params[$k]=="customer"){
					array_push($getdata,$intcustomersList[$j]["id"]);
				}else if($params[$k]=="fields"){
					array_push($getdata,"MAX(date) as lastintmonth");
				}else{
					array_push($getdata,"");
				}
			}
		
			$intmonth = call_user_func_array(array($db,'getInterest'), $getdata);
			// echo json_encode($intmonth);
			$tmpcust["lastintmonth"] = $intmonth[0]["lastintmonth"];

			array_push($creditors,$tmpcust);
		}
		$response['status'] = "success";
		//$response['total'] = call_user_func_array(array($db,'getpaymentmodes'), $getdata)[0]["count(*)"];
		
		$response["creditors"] = $creditors;
		$response["message"] = "Woot!,Successfully retreived the Creditors list";
	
	
		echoRespnse(200, $response);	

	}
});


//end creditors



//start
$app->post('/cfcustomer', function() use ($app) {
    
	$r = json_decode($app->request->getBody());
	verifyRequiredParams(array('fname'));
	$Customer = array();
	$Customer["fname"] = postParams($app->request->post('fname'));
	$Customer["lname"] = postParams($app->request->post('lname'));
	$Customer["phone"] = postParams($app->request->post("phone"));
	$Customer["first"] = postParams($app->request->post("first"));
	$Customer["firstid"] = postParams($app->request->post("firstid"));
	
	$db = new DbHandler();


	$getdata = array();
	$params= $db->getFunctionParam("cfcustomers");
	for($i=0;$i<sizeof($params);$i++){
			if(getParams($app->request->get($params[$i]))){
				array_push($getdata,getParams($app->request->get($params[$i])));
			}else{
				array_push($getdata,"");
			}
	}
	$customerList = call_user_func_array(array($db,'getCfCustomers'), $getdata);	
	$outputfields = array("id","fname","lname","phone","first","firstid","created","updated");
	$qryfields = array("id","fname","lname","phone","first","firstid","created","updated");
	$oldcustomer=array();
	// looping through result and preparing tasks array
	for($i=0;$i<sizeOf($customerList);$i++){
		$tmp = array();		
		for($j = 0;$j<sizeof($qryfields);$j++){
		if(isset($customerList[$i][$outputfields[$j]])){
			$tmp[$qryfields[$j]] = $customerList[$i][$outputfields[$j]];
			}
		}
		array_push($oldcustomer,$tmp);

	}
	
	for($i=0;$i<sizeof($oldcustomer);$i++){
		// echo json_encode(strtolower($Customer["fname"]));echo "-->"; echo json_encode($Customer["phone"]);
		if(strtolower($oldcustomer[$i]["fname"]) == strtolower($Customer["fname"]) && strtolower($oldcustomer[$i]["lname"]) == strtolower($Customer["lname"])){
			$response["error"] = true;
			$response["status"] ="error";
			$response["samecus"] = 1;
			$response["message"] = "Oops! Already Customer with same name exist";
			
			echoRespnse(200, $response);	
			return;
		}
	}
	// echo "hiiidone";
	$createCfCustomerstatus= $db->createCfCustomer($Customer);
		
	if($createCfCustomerstatus['status'] == FAILED){//if error occurs while creating product
		$response["error"] = true;
		$response["status"] ="error";
		$response["message"] = "Oops! An error occurred while creating Customer";
		$response["err"]=$createCfCustomerstatus;
	}else{
		
		$response["error"] = false;
		$response["status"] ="success";
		$response["samecus"] = 0;
		$response["id"] =$createCfCustomerstatus['id'];
		$response["message"] = "Woot!,Successfully created Customer with id ".$createCfCustomerstatus['id'];
	}
	
	echoRespnse(200, $response);		
});


$app->get('/cfcustomers',function() use($app){
	$response = array();
	$db = new DbHandler();

	$params= $db->getFunctionParam("cfcustomers");
	$getdata = array();
	for($i=0;$i<sizeof($params);$i++){
			if(getParams($app->request->get($params[$i]))){
				array_push($getdata,getParams($app->request->get($params[$i])));
			}else{
				array_push($getdata,"");
			}
	}
	$customerList = call_user_func_array(array($db,'getCfCustomers'), $getdata);	
	$outputfields = array("id","fname","lname","phone","first","firstid","firstidname","created","updated");
	$qryfields = array("id","fname","lname","phone","first","firstid","firstidname","created","updated");
	$cfcustomers=array();
	// looping through result and preparing tasks array
	for($i=0;$i<sizeOf($customerList);$i++){
		$tmp = array();		
		for($j = 0;$j<sizeof($qryfields);$j++){
		if(isset($customerList[$i][$outputfields[$j]])){
			$tmp[$qryfields[$j]] = $customerList[$i][$outputfields[$j]];
			}
		}
		array_push($cfcustomers,$tmp);

	}
	
		$response["error"] = false;
		$getdata[sizeof($getdata)-3]="";
		$getdata[sizeof($getdata)-2]="";
		$getdata[sizeof($getdata)-1]=1;
		$response['status'] = "success";
		//$response['total'] = call_user_func_array(array($db,'getcustomers'), $getdata)[0]["count(*)"];
		
		$response["cfcustomers"] =$cfcustomers;
		$response["message"] = "Woot!,Successfully retreived the Chitfund customer list";
	
	
	echoRespnse(200, $response);	

});


$app->get('/cfcustomer/:id',function($id) use($app){
	$response = array();
	$db = new DbHandler();

	$params= $db->getFunctionParam("cfcustomers");
	$getdata = array();
	for($i=0;$i<sizeof($params);$i++){
			if($params[$i]=="id"){
				array_push($getdata,$id);
			}else{
				array_push($getdata,"");
			}
	}

	$customerList = call_user_func_array(array($db,'getCfCustomers'), $getdata);	
	$outputfields = array("id","fname","lname","phone","first","firstid","firstidname","created","updated");//db
	$qryfields = array("id","fname","lname","phone","first","firstid","firstidname","created","updated");
	// $customer=array();
	// looping through result and preparing tasks array
	$tmp = array();		
	for($i=0;$i<sizeOf($customerList);$i++){
		for($j = 0;$j<sizeof($qryfields);$j++){
		if(isset($customerList[$i][$outputfields[$j]])){
			$tmp[$qryfields[$j]] = $customerList[$i][$outputfields[$j]];
			}
		}
		//echo json_encode($tmp);
		//array_push($customer,$tmp);
	}
	
		$response["error"] = false;
		//$getdata[sizeof($getdata)-3]="";$getdata[sizeof($getdata)-2]="";$getdata[sizeof($getdata)-1]=1;
		$response['status'] = "success";
		//$response['total'] = call_user_func_array(array($db,'getcustomers'), $getdata)[0]["count(*)"];
		$response["cfcustomer"] =$tmp;
		$response["message"] = "Woot!,Successfully retreived the Chitfund customer list";
	
	
	echoRespnse(200, $response);	

});

$app->put('/cfcustomer/:id', function($id) use ($app) {
	
	$r = json_decode($app->request->getBody());
	$db = new DbHandler();
	$params = $db->getFunctionParam("cfcustomers");
	$getdata = array();
		for($i=0;$i<sizeof($params);$i++){
			if($params[$i] == "id"){
				array_push($getdata,$id);
			}else{
				array_push($getdata,"");
			}
	}
	$customerDetail = call_user_func_array(array($db,'getCfCustomers'), $getdata);
	if(sizeOf($customerDetail)>0){
		$params = $db->putFunctionParam("cfcustomers");
		$updateField = array();
		$updateField["id"] = $id;
		$putdata=array();
		array_push($putdata,$updateField);
		for($i=0;$i<sizeof($params);$i++){
			if(putParam($r,$params[$i])){
				array_push($putdata,putParam($r,$params[$i]));
			}else{
				array_push($putdata,"");
			}
		}
		array_push($putdata,"");

		// echo json_encode($putdata);
		$editDetail = call_user_func_array(array($db,'editCfCustomer'), $putdata);
		// echo json_encode($editDetail);
		if($editDetail['status'] == SUCCESS){//if error occurs while creating product
	
			$response["error"] = false;
			$response["status"] ="success";
			$response["id"] =$id;
			$response["message"] = "Woot!,Successfully edited Customer information";
		}
		else{
			$response["error"] = true;
			$response["status"] ="error";
			$response["message"] = "Oops! An error occurred while editing Customer information";
			$response["err"]=$editDetail;
		}
	}else{
		$response["error"] = true;
		$response["status"] ="error";
		$response["message"] = "No Customer found with given ID";
	}
	echoRespnse(200, $response);
});



$app->get('/cfchiti',function() use ($app){
	$response = array();
	$db =new DbHandler();
	$params = $db->getFunctionParam("cfchiti");
	$getdata = array();
	for($i=0;$i<sizeof($params);$i++){
	
		if(getParams($app->request->get($params[$i]))|| (gettype($app->request->get($params[$i]))=="string" && $app->request->get($params[$i])== "0")){
			array_push($getdata,getParams($app->request->get($params[$i])));
		}else{
			array_push($getdata,"");
		}
	}	
	
	$cfchitiList = call_user_func_array(array($db,'getCfChiti'),$getdata);
	$cfchiti= array();
	
	$outputfields = array("id","date","chitiname","code","no","amount","created","updated");
	$qryfields = array("id","date","chitiname","code","no","amount","created","updated");
	for($i=0;$i<sizeof($cfchitiList);$i++){
		$tmp = array();
		for($j=0;$j<sizeof($qryfields);$j++){
			if(isset($cfchitiList[$i][$outputfields[$j]])){
				$tmp[$qryfields[$j]] = $cfchitiList[$i][$qryfields[$j]];
			}
		}
		array_push($cfchiti,$tmp);
	}
	$response["error"] = "false";
	$response["status"] = "success";
	$response["cfchiti"] = $cfchiti;
	$response["message"] = "Woot ! successfully retreived the Chit Fund Chiti List";
	echoRespnse (200, $response);
	
});


$app->post('/cfchiticustomers', function() use ($app) {
    
	$r = json_decode($app->request->getBody());
	// verifyRequiredParams(array('fname'));

	$cfchiticustomers = array();
	$cfchiticustomers = postParams($app->request->post('cfchiticustomers'));
	
	$db = new DbHandler();
	for($i=0;$i<sizeof($cfchiticustomers);$i++){
		$cfchiticustomerstatus= $db->createCfChitiCustomer($cfchiticustomers[$i]);
	}
	// echo json_encode($customer);
		
	if($cfchiticustomerstatus['status'] == FAILED){//if error occurs while creating product
		$response["error"] = true;
		$response["status"] ="error";
		$response["message"] = "Oops! An error occurred while creating customer";
		$response["err"]=$cfchiticustomerstatus;
	}else{
		$response["error"] = false;
		$response["status"] ="success";
		$response["samecus"] = 0;
		$response["id"] =$cfchiticustomerstatus['id'];
		$response["message"] = "Woot!,Successfully created Customer";
	}
	
	echoRespnse(200, $response);		
});


$app->get('/cfchiticustomers',function() use ($app){
	$response = array();
	$db =new DbHandler();
	$params = $db->getFunctionParam("cfchiticustomers");
	$getdata = array();
	for($i=0;$i<sizeof($params);$i++){	
		if(getParams($app->request->get($params[$i]))|| (gettype($app->request->get($params[$i]))=="string" && $app->request->get($params[$i])== "0")){
			array_push($getdata,getParams($app->request->get($params[$i])));
		}else{
			array_push($getdata,"");
		}
	}	
	
	$cfchiticustomersList = call_user_func_array(array($db,'getCfChitiCustomers'),$getdata);
	$cfchiticustomers= array();
	$outputfields = array("id","chiti","chitiname","code","customer","customername","cusno","created","updated");
	$qryfields = array("id","chiti","chitiname","code","customer","customername","cusno","created","updated");
	for($i=0;$i<sizeof($cfchiticustomersList);$i++){
		$tmp = array();
		for($j=0;$j<sizeof($qryfields);$j++){
			if(isset($cfchiticustomersList[$i][$outputfields[$j]])){
				$tmp[$qryfields[$j]] = $cfchiticustomersList[$i][$qryfields[$j]];
			}
		}
		array_push($cfchiticustomers,$tmp);
	}
	$response["error"] = "false";
	$response["status"] = "success";
	$response["cfchiticustomers"] = $cfchiticustomers;
	$response["message"] = "Woot ! successfully retreived the cfchiticustomers List";
	echoRespnse (200, $response);
	
});


$app->put('/cfchiticustomers/:id', function($id) use ($app) {

	$r = json_decode($app->request->getBody());
	$db = new DbHandler();
	$params = $db->getFunctionParam("cfchiticustomers");
	$getdata = array();
		for($i=0;$i<sizeof($params);$i++){
			if($params[$i] == "id"){
				array_push($getdata,$id);
			}else{
				array_push($getdata,"");
			}
	}
	$customerDetail = call_user_func_array(array($db,'getCfChitiCustomers'), $getdata);
	if(sizeOf($customerDetail)>0){
		$params = $db->putFunctionParam("cfchiticustomers");
		$updateField = array();
		$updateField["id"] = $id;
		$putdata=array();
		array_push($putdata,$updateField);
		for($i=0;$i<sizeof($params);$i++){
			if(putParam($r,$params[$i])){
				array_push($putdata,putParam($r,$params[$i]));
			}else{
				array_push($putdata,"");
			}
		}
		array_push($putdata,"");

		// echo json_encode($putdata);
		$editDetail = call_user_func_array(array($db,'editCfChitiCustomer'), $putdata);
	
		if($editDetail['status'] == SUCCESS){//if error occurs while creating product
	
			$response["error"] = false;
			$response["status"] ="success";
			$response["id"] =$id;
			$response["message"] = "Woot!,Successfully edited Customer information";
		}
		else{
			$response["error"] = true;
			$response["status"] ="error";
			$response["message"] = "Oops! An error occurred while editing Customer information";
			$response["err"]=$editDetail;
		}
	}else{
		$response["error"] = true;
		$response["status"] ="error";
		$response["message"] = "No Customer found with given ID";
	}
	echoRespnse(200, $response);
});
	


$app->post('/cfpaata', function() use ($app) {
    
	$r = json_decode($app->request->getBody());
	// verifyRequiredParams(array('fname'));
	$paata = array();
	$paata["date"] = postParams($app->request->post('date'));
	$paata["chiti"] = postParams($app->request->post('chiti'));
	$paata["no"] = postParams($app->request->post("no"));
	$paata["customer"] = postParams($app->request->post("customer"));
	$paata["paata"] = postParams($app->request->post("paata"));
	$paata["payamount"] = postParams($app->request->post("payamount"));
	$paata["repayamount"] = postParams($app->request->post("repayamount"));
	$paata["sripalcomm"] = postParams($app->request->post("sripalcomm"));
	$paata["sowjicomm"] = postParams($app->request->post("sowjicomm"));
	
	$db = new DbHandler();

	// echo json_encode($paata);
	$createCfPaatastatus= $db->createCfPaata($paata);
		
	if($createCfPaatastatus['status'] == FAILED){//if error occurs while creating product
		$response["error"] = true;
		$response["status"] ="error";
		$response["message"] = "Oops! An error occurred while creating Paata";
		$response["err"]=$createCfPaatastatus;
	}else{
		
		$response["error"] = false;
		$response["status"] ="success";
		$response["samecus"] = 0;
		$response["id"] =$createCfPaatastatus['id'];
		$response["message"] = "Woot!,Successfully created Paata with id ".$createCfPaatastatus['id'];
	}
	
	echoRespnse(200, $response);		
});

$app->get('/cfpaata',function() use ($app){
	$response = array();
	$db =new DbHandler();
	$params = $db->getFunctionParam("cfpaata");
	$getdata = array();
	for($i=0;$i<sizeof($params);$i++){	
		if(getParams($app->request->get($params[$i]))|| (gettype($app->request->get($params[$i]))=="string" && $app->request->get($params[$i])== "0")){
			array_push($getdata,getParams($app->request->get($params[$i])));
		}else{
			array_push($getdata,"");
		}
	}	
	
	$cfpaataList = call_user_func_array(array($db,'getCfPaata'),$getdata);
	$cfpaata= array();
	
	$outputfields = array("id","date","chiti","chitiname","code","no","customer","customername","cusno","paata","payamount","repayamount","sripalcomm","sowjicomm","created","updated");
	$qryfields = array("id","date","chiti","chitiname","code","no","customer","customername","cusno","paata","payamount","repayamount","sripalcomm","sowjicomm","created","updated");
	for($i=0;$i<sizeof($cfpaataList);$i++){
		$tmp = array();
		for($j=0;$j<sizeof($qryfields);$j++){
			if(isset($cfpaataList[$i][$outputfields[$j]])){
				$tmp[$qryfields[$j]] = $cfpaataList[$i][$qryfields[$j]];
			}
		}
		array_push($cfpaata,$tmp);
	}
	$response["error"] = "false";
	$response["status"] = "success";
	$response["cfpaata"] = $cfpaata;
	$response["message"] = "Woot ! successfully retreived the cfpaata List";
	echoRespnse (200, $response);
	
});

$app->get('/cfpaata/:id',function($id) use($app){
	$response = array();
	$db = new DbHandler();

	$params= $db->getFunctionParam("cfpaata");
	$getdata = array();
	for($i=0;$i<sizeof($params);$i++){
			if($params[$i]=="id"){
				array_push($getdata,$id);
			}else{
				array_push($getdata,"");
			}
	}
	$cfpaataList = call_user_func_array(array($db,'getCfPaata'), $getdata);	
	$outputfields = array("id","date","chiti","chitiname","code","no","customer","customername","cusno","paata","payamount","repayamount","sripalcomm","sowjicomm","created","updated");//db
	$qryfields = array("id","date","chiti","chitiname","code","no","customer","customername","cusno","paata","payamount","repayamount","sripalcomm","sowjicomm","created","updated");
	$cfpaata=array();
	// looping through result and preparing tasks array
	$tmp = array();		
	for($i=0;$i<sizeOf($cfpaataList);$i++){
		
		for($j = 0;$j<sizeof($qryfields);$j++){
		if(isset($cfpaataList[$i][$outputfields[$j]])){
			$tmp[$qryfields[$j]] = $cfpaataList[$i][$outputfields[$j]];
			}
		}
		//echo json_encode($tmp);
	//	array_push($cfpaata,$tmp);

	}
	
		$response["error"] = false;
		//$getdata[sizeof($getdata)-3]="";$getdata[sizeof($getdata)-2]="";$getdata[sizeof($getdata)-1]=1;
		$response['status'] = "success";
	//$response['total'] = call_user_func_array(array($db,'getcfpaatas'), $getdata)[0]["count(*)"];
		$response["cfpaata"] =$tmp;
		$response["message"] = "Woot!,Successfully retreived the cfpaata list";
	
	
	echoRespnse(200, $response);	

});



$app->put('/cfpaata/:id', function($id) use ($app) {

	$r = json_decode($app->request->getBody());
	$db = new DbHandler();
	$params = $db->getFunctionParam("cfpaata");
	$getdata = array();
		for($i=0;$i<sizeof($params);$i++){
			if($params[$i] == "id"){
				array_push($getdata,$id);
			}else{
				array_push($getdata,"");
			}
	}
	$cfpaataDetail = call_user_func_array(array($db,'getCfPaata'), $getdata);
	if(sizeOf($cfpaataDetail)>0){
		$params = $db->putFunctionParam("cfpaata");
		$updateField = array();
		$updateField["id"] = $id;
		$putdata=array();
		array_push($putdata,$updateField);
		for($i=0;$i<sizeof($params);$i++){
			if(putParam($r,$params[$i])){
				array_push($putdata,putParam($r,$params[$i]));
			}else{
				array_push($putdata,"");
			}
		}
		array_push($putdata,"");

		// echo json_encode($putdata);
		$editDetail = call_user_func_array(array($db,'editCfPaata'), $putdata);
		// echo ($editDetail);

		if($editDetail['status'] == SUCCESS){//if error occurs while creating product
	
			$response["error"] = false;
			$response["status"] ="success";
			$response["id"] =$id;
			$response["message"] = "Woot!,Successfully edited cfpaata information";
		}
		else{
			$response["error"] = true;
			$response["status"] ="error";
			$response["message"] = "Oops! An error occurred while editing cfpaata information";
			$response["err"]=$editDetail;
		}
	}else{
		$response["error"] = true;
		$response["status"] ="error";
		$response["message"] = "No cfpaata found with given ID";
	}
	echoRespnse(200, $response);
});
	
//start

$app->post('/cftrans', function() use ($app) {
    
	$r = json_decode($app->request->getBody());
	// verifyRequiredParams(array('fname'));
	$cftrans = array();
	$cftrans["date"] = postParams($app->request->post('date'));
	$cftrans["chiti"] = postParams($app->request->post('chiti'));
	$cftrans["paata"] = postParams($app->request->post("paata"));
	$cftrans["customer"] = postParams($app->request->post("customer"));
	$cftrans["debit"] = postParams($app->request->post("debit"));
	$cftrans["credit"] = postParams($app->request->post("credit"));
	$cftrans["note"] = postParams($app->request->post("note"));

	$db = new DbHandler();

	// echo json_encode($cftrans);
	$createCfTransstatus= $db->createCfTrans($cftrans);
		
	if($createCfTransstatus['status'] == FAILED){//if error occurs while creating product
		$response["error"] = true;
		$response["status"] ="error";
		$response["message"] = "Oops! An error occurred while creating Cf Trans";
		$response["err"]=$createCfTransstatus;
	}else{
		
		$response["error"] = false;
		$response["status"] ="success";
		$response["samecus"] = 0;
		$response["id"] =$createCfTransstatus['id'];
		$response["message"] = "Woot!,Successfully created Cf Trans with id ".$createCfTransstatus['id'];
	}
	
	echoRespnse(200, $response);		
});

$app->get('/cftrans',function() use ($app){
	$response = array();
	$db =new DbHandler();
	$params = $db->getFunctionParam("cftrans");
	$getdata = array();
	for($i=0;$i<sizeof($params);$i++){	
		if(getParams($app->request->get($params[$i]))|| (gettype($app->request->get($params[$i]))=="string" && $app->request->get($params[$i])== "0")){
			array_push($getdata,getParams($app->request->get($params[$i])));
		}else{
			array_push($getdata,"");
		}
	}	
	
	$cftransList = call_user_func_array(array($db,'getCfTrans'),$getdata);
	$cftrans= array();
	
	$outputfields = array("id","date","chiti","chitiname","code","paata","paataamt","customer","customername","cusno","maincus","debit","credit","note","payamount","repayamount", "paatano","created","updated");
	$qryfields = array("id","date","chiti","chitiname","code","paata","paataamt","customer","customername","cusno","maincus","debit","credit","note","payamount","repayamount", "paatano","created","updated");
	for($i=0;$i<sizeof($cftransList);$i++){
		$tmp = array();
		for($j=0;$j<sizeof($qryfields);$j++){
			if(isset($cftransList[$i][$outputfields[$j]])){
				$tmp[$qryfields[$j]] = $cftransList[$i][$qryfields[$j]];
			}
		}
		array_push($cftrans,$tmp);
	}
	$response["error"] = "false";
	$response["status"] = "success";
	$response["cftrans"] = $cftrans;
	$response["message"] = "Woot ! successfully retreived the cftrans List";
	echoRespnse (200, $response);
	
});

$app->get('/cftrans/:id',function($id) use($app){
	$response = array();
	$db = new DbHandler();

	$params= $db->getFunctionParam("cftrans");
	$getdata = array();
	for($i=0;$i<sizeof($params);$i++){
			if($params[$i]=="id"){
				array_push($getdata,$id);
			}else{
				array_push($getdata,"");
			}
	}
	$cftransList = call_user_func_array(array($db,'getCfTrans'), $getdata);	
	$outputfields = array("id","date","chiti","chitiname","code","paata","paataamt","customer","customername","cusno","maincus","debit","credit","note","payamount","repayamount", "paatano","created","updated");//db
	$qryfields = array("id","date","chiti","chitiname","code","paata","paataamt","customer","customername","cusno","maincus","debit","credit","note","payamount","repayamount", "paatano","created","updated");
	$cftrans=array();
	// looping through result and preparing tasks array
	$tmp = array();		
	for($i=0;$i<sizeOf($cftransList);$i++){
		
		for($j = 0;$j<sizeof($qryfields);$j++){
		if(isset($cftransList[$i][$outputfields[$j]])){
			$tmp[$qryfields[$j]] = $cftransList[$i][$outputfields[$j]];
			}
		}
		//echo json_encode($tmp);
	//	array_push($cftrans,$tmp);

	}
	
		$response["error"] = false;
		//$getdata[sizeof($getdata)-3]="";$getdata[sizeof($getdata)-2]="";$getdata[sizeof($getdata)-1]=1;
		$response['status'] = "success";
	//$response['total'] = call_user_func_array(array($db,'getcftranss'), $getdata)[0]["count(*)"];
		$response["cftrans"] =$tmp;
		$response["message"] = "Woot!,Successfully retreived the cftrans list";
	
	
	echoRespnse(200, $response);	

});



$app->put('/cftrans/:id', function($id) use ($app) {

	$r = json_decode($app->request->getBody());
	$db = new DbHandler();
	$params = $db->getFunctionParam("cftrans");
	$getdata = array();
		for($i=0;$i<sizeof($params);$i++){
			if($params[$i] == "id"){
				array_push($getdata,$id);
			}else{
				array_push($getdata,"");
			}
	}
	$cftransDetail = call_user_func_array(array($db,'getCfTrans'), $getdata);
	if(sizeOf($cftransDetail)>0){
		$params = $db->putFunctionParam("cftrans");
		$updateField = array();
		$updateField["id"] = $id;
		$putdata=array();
		array_push($putdata,$updateField);
		for($i=0;$i<sizeof($params);$i++){
			if(putParam($r,$params[$i])){
				array_push($putdata,putParam($r,$params[$i]));
			}else{
				array_push($putdata,"");
			}
		}
		array_push($putdata,"");

		// echo json_encode($putdata);
		$editDetail = call_user_func_array(array($db,'editCfTrans'), $putdata);
		// echo ($editDetail);

		if($editDetail['status'] == SUCCESS){//if error occurs while creating product
	
			$response["error"] = false;
			$response["status"] ="success";
			$response["id"] =$id;
			$response["message"] = "Woot!,Successfully edited cftrans information";
		}else{
			$response["error"] = true;
			$response["status"] ="error";
			$response["message"] = "Oops! An error occurred while editing cftrans information";
			$response["err"]=$editDetail;
		}
	}else{
		$response["error"] = true;
		$response["status"] ="error";
		$response["message"] = "No cftrans found with given ID";
	}
	echoRespnse(200, $response);
});
	

$app->get('/getnames',function() use($app){
	$response = array();
	$db = new DbHandler();
	$customer = $app->request->get("customer");
	if($customer > 0){
		// echo "SELECT DISTINCT(chiti),b.chitiname as chitiname,b.code as code FROM `cfchiticustomers` a LEFT JOIN cfchiti b on a.chiti=b.id where customer = '$customer'";
		$chitinames  = $db->getOneRecord("SELECT DISTINCT(chiti) , b.chitiname as chitiname,b.code as code FROM `cfchiticustomers` a LEFT JOIN cfchiti b on a.chiti=b.id where customer = '$customer'");
		
		$secondcustomers = $db->getOneRecord("SELECT id FROM `cfcustomers` WHERE firstid = '$customer'");
		if(sizeof($secondcustomers)){
			$tmp = array();
			for($t=0;$t<sizeof($secondcustomers);$t++){
				array_push($tmp,$secondcustomers[$t]["id"]);
			}
			$customer = "";
			$customer = implode(',', $tmp);
			// echo "hi";
			$customernames  = $db->getOneRecord("SELECT DISTINCT(customer + cusno), CONCAT(b.fname,' ' ,b.lname) as customername, a.cusno as cusno  FROM `cfchiticustomers` a LEFT JOIN cfcustomers b on a.customer=b.id WHERE customer IN ($customer)");
		}else{
			$customernames  = $db->getOneRecord("SELECT DISTINCT(customer + cusno), CONCAT(b.fname,' ' ,b.lname) as customername, a.cusno as cusno  FROM `cfchiticustomers` a LEFT JOIN cfcustomers b on a.customer=b.id WHERE customer = '$customer'");
		}
		// echo $customer;
		// echo "SELECT DISTINCT(customer + cusno), CONCAT(b.fname,' ' ,b.lname) as customername, a.cusno as cusno  FROM `cfchiticustomers` a LEFT JOIN cfcustomers b on a.customer=b.id WHERE customer = '$customer'";
		// echo json_encode($customernames);	
		$response["error"] = false;
		$response['status'] = "success";
		$response["chitinames"] = $chitinames;
		$response["customernames"] = $customernames;
		$response["message"] = "Woot!,Successfully retreived the Names list";
	}else{
		$response["error"] = true;
		$response['status'] = "error";
		$response["message"] = "Oops!,Didn't received the Customer value";
	}
	
	echoRespnse(200, $response);	

});

//end
$app->post('/customer', function() use ($app) {
    
	$r = json_decode($app->request->getBody());
	verifyRequiredParams(array('FName'));
	$Customer = array();
	$Customer["FName"] = postParams($app->request->post('FName'));
	$Customer["LName"] = postParams($app->request->post('LName'));
	$Customer["Phone"] = postParams($app->request->post("Phone"));
	$Customer["Hami"] =  postParams($app->request->post("Hami"));
	$Customer["IsHami"] =postParams($app->request->post("IsHami"));
	$Customer["chitfund"] =postParams($app->request->post("chitfund"));
	$Customer["aadhar"] = postParams($app->request->post("aadhar"));
	$Customer["passbook"] = postParams($app->request->post("passbook"));
	$Customer["debitcard"] = postParams($app->request->post("debitcard"));
	$Customer["cheque"] = postParams($app->request->post("cheque"));
	$Customer["pnote"] = postParams($app->request->post("pnote"));
	$Customer["greensheet"] = postParams($app->request->post("greensheet"));
	$Customer["note"] = postParams($app->request->post("note"));
	$Customer["forint"] = postParams($app->request->post("forint"));
	$Customer["intrate"] = postParams($app->request->post("intrate"));
	
	$db = new DbHandler();


	$getdata = array();
	$params= $db->getFunctionParam("customers");
	for($i=0;$i<sizeof($params);$i++){
			if(getParams($app->request->get($params[$i]))){
				array_push($getdata,getParams($app->request->get($params[$i])));
			}else{
				array_push($getdata,"");
			}
	}
	$customerList = call_user_func_array(array($db,'getcustomers'), $getdata);	
	$outputfields = array("id","id","firstname","lastname","phoneno","hami","ishami","chitfund","hamifirstname","hamilastname","hamiphoneno","aadhar","passbook","debitcard","cheque","pnote","greensheet","note","forint","intrate","created","updated");
	$qryfields = array("id","SNO","Firstname","LastName","PhoneNo","hami","ishami","chitfund","HamiFirstName","HamiLastName","HamiPhoneNo","aadhar","passbook","debitcard","cheque","pnote","greensheet","note","forint","intrate","Created","Updated");
	$oldcustomer=array();
	// looping through result and preparing tasks array
	for($i=0;$i<sizeOf($customerList);$i++){
		$tmp = array();		
		for($j = 0;$j<sizeof($qryfields);$j++){
		if(isset($customerList[$i][$outputfields[$j]])){
			$tmp[$qryfields[$j]] = $customerList[$i][$outputfields[$j]];
			}
		}
		array_push($oldcustomer,$tmp);

	}
	
	for($i=0;$i<sizeof($oldcustomer);$i++){
		// echo json_encode($i);
		if($oldcustomer[$i]["Firstname"] == $Customer["FName"] && $oldcustomer[$i]["LastName"] == $Customer["LName"]){
			$response["error"] = false;
			$response["status"] ="failed";
			$response["samecus"] = 1;
			$response["message"] = "Oops! Already Customer with same name exist";
			
			echoRespnse(200, $response);	
			return;
		}
	}
	// echo "hiiidone";
	$createCustomerstatus= $db->createCustomer($Customer);
	$id = $createCustomerstatus['id'];
	if($Customer["Hami"]==0 && $Customer["IsHami"]==1){
	
		$params = $db->putFunctionParam("customers");
		$updateField = array();
		$updateField["id"] =$id;
		
		
		$putdata=array();
		array_push($putdata,$updateField);
		for($i=0;$i<sizeof($params);$i++){
			if($params[$i]== "hami"){
				array_push($putdata,$id);
			}else{
				array_push($putdata,"");
			}
	}
				array_push($putdata,"");
		
				//echo json_encode($putdata);
		$editDetail = call_user_func_array(array($db,'editcustomer'), $putdata);
	}
	if($createCustomerstatus['status'] == FAILED){//if error occurs while creating product
		$response["error"] = true;
		$response["status"] ="error";
		$response["message"] = "Oops! An error occurred while creating firm";
		$response["err"]=$createCustomerstatus;
	}else{
		
		$response["error"] = false;
		$response["status"] ="success";
		$response["samecus"] = 0;
		$response["id"] =$createCustomerstatus['id'];
		$response["message"] = "Woot!,Successfully created Customer with id ".$createCustomerstatus['id'];
	}
	
	echoRespnse(200, $response);		
});

$app->post('/chitfund', function() use ($app) {
    
	$r = json_decode($app->request->getBody());
	$chitfund = array();
	$chitfund["customer"] = postParams($app->request->post('customer'));
	$chitfund["date"] = postParams($app->request->post('date'));
	$chitfund["amount"] = postParams($app->request->post("amount"));
	$chitfund["type"] = postParams($app->request->post("type"));
	$chitfund["status"] = postParams($app->request->post("status"));

	$db = new DbHandler();
	
	$createchitfundstatus= $db->createchitfund($chitfund);
	
	if($createchitfundstatus['status'] == FAILED){//if error occurs while creating product
		$response["error"] = true;
		$response["status"] ="error";
		$response["message"] = "Oops! An error occurred while creating Chit fund";
		$response["err"]=$createchitfundstatus;
	}else{
		
		$response["error"] = false;
		$response["status"] ="success";
		$response["id"] =$createchitfundstatus['id'];
		$response["message"] = "Woot!,Successfully created Chit Fund with id ".$createchitfundstatus['id'];
	}
	
	echoRespnse(200, $response);		
});


$app->post('/interest', function() use ($app) {
    
	$r = json_decode($app->request->getBody());
	$interest = array();
	$interest["date"] = postParams($app->request->post('date'));
	$interest["customer"] = postParams($app->request->post('customer'));
	$interest["credit"] = postParams($app->request->post("credit"));
	$interest["debit"] = postParams($app->request->post("debit"));
	$interest["note"] = postParams($app->request->post("note"));
	$interest["note1"] = postParams($app->request->post("note1"));
	$interestrows = postParams($app->request->post("intArr"));

	$db = new DbHandler();
	
	$tmpno = 0;
	for($i=0;$i<sizeof($interestrows);$i++){
		$tmpno += $interestrows[$i]["intamount"];
	}
	if($tmpno == $interest["credit"]){
		$createInterestStatus= $db->createInterest($interest);

		if($createInterestStatus['status'] == SUCCESS){

			if(sizeof($interestrows)>0){
				$createInterestRowStatus = $db-> createInterestRows($createInterestStatus['id'],$interestrows);
			}
	
			$response["error"] = false;
			$response["status"] = "success";
			$response["id"] = $createInterestStatus['id'];
			$response["message"] = "Woot!,Successfully created Interest Entries";
	
		}else{
			$response["error"] = true;
			$response["status"] ="error";
			$response["message"] = "Oops! An error occurred while creating Interest Entries";
			$response["err"]= $createInterestStatus;
		}
	
	}else{
		$response["error"] = true;
		$response["status"] ="error";
		$response["message"] = "Oops! Interest total is wrong";
		
		echoRespnse(200, $response);
		return ;
	}

	

	
	echoRespnse(200, $response);		
});


$app->get('/interest',function() use($app){
	$response = array();
	$db = new DbHandler();

	$params= $db->getFunctionParam("interest");
	$getdata = array();
	for($i=0;$i<sizeof($params);$i++){
			if(getParams($app->request->get($params[$i]))){
				array_push($getdata,getParams($app->request->get($params[$i])));
			}else{
				array_push($getdata,"");
			}
	}

	$interestList = call_user_func_array(array($db,'getInterest'), $getdata);
	// echo json_encode($interestList[0]["id"]);
	// echo json_encode($interestList);
	// echo sizeof($interestList);
	// echo ($interestList[0]["id"] != null);
	if(sizeof($interestList)>0 && $interestList[0]["id"] != null){
		$outputfields = array("id","date","customer","customername","credit","credittotal","debit","debittotal","note","note1","created","updated");
		$qryfields = array("id","date","customer","customername","credit","credittotal","debit","debittotal","note","note1","created","updated");
		$interest=array();
		// looping through result and preparing tasks array
		for($i=0;$i<sizeOf($interestList);$i++){
			$tmp = array();		
			for($j = 0;$j<sizeof($qryfields);$j++){
			if(isset($interestList[$i][$outputfields[$j]])){
				$tmp[$qryfields[$j]] = $interestList[$i][$outputfields[$j]];
				}
			}
			array_push($interest,$tmp);
	
		}
		// echo sizeof($interest);
		if(sizeof($interest)>0){
			for($m=0;$m<sizeof($interest);$m++){
				$interest[$m]["introws"] = array();
				$getIntRowsdata = array();
				$params =  $db->getFunctionParam("interestrows");
				for($j=0;$j<sizeof($params);$j++){
					if($params[$j] == "intid"){
						array_push($getIntRowsdata,$interest[$m]["id"]);
					}else{
						array_push($getIntRowsdata,"");
					}
				}
				array_push($getIntRowsdata,"");
	
				$intRowsList = call_user_func_array(array($db,"getInterestRows"),$getIntRowsdata);
				$tmp = array();
				for($h=0;$h<sizeof($intRowsList);$h++){
					if($intRowsList[$h]["intid"] == $interest[$m]["id"] ){
						array_push($tmp,$intRowsList[$h]);
					}
				}
				
				$interest[$m]["introws"] = $tmp;
			}
		}

		$response["error"] = false;
		// $getdata[sizeof($getdata)-3]="";
		// $getdata[sizeof($getdata)-2]="";
		// $getdata[sizeof($getdata)-1]=1;
		$response['status'] = "success";
		//$response['total'] = call_user_func_array(array($db,'getinterest'), $getdata)[0]["count(*)"];
		
		$response["interest"] = $interest;
		$response["message"] = "Woot!,Successfully retreived the Interest list";
	}else{
		$response["error"] = true;
		$response["status"] ="error";
		$response["message"] = "No Interest entries found";
	}
	
	
	
	echoRespnse(200, $response);	

});



$app->post('/payinterest', function() use ($app) {
	$r = json_decode($app->request->getBody());
	verifyRequiredParams(array('date','customer','debit'));
	$interest = array();
	$interest["date"] = postParams($app->request->post('date'));
	$interest["customer"] = postParams($app->request->post('customer'));
	$interest["credit"] = postParams($app->request->post("credit"));
	$interest["debit"] = postParams($app->request->post("debit"));
	$interest["note"] = postParams($app->request->post("note"));
	$interest["note1"] = postParams($app->request->post("note1"));

	$db = new DbHandler();

	$createInterestStatus= $db->createInterest($interest);
	if($createInterestStatus['status'] == FAILED){//if error occurs while creating product
		$response["error"] = true;
		$response["status"] ="error";
		$response["message"] = "Oops! An error occurred while create interest entry";
		$response["err"]=$createInterestStatus;
	}else{
		
		$response["error"] = false;
		$response["status"] ="success";
		$response["samecus"] = 0;
		$response["id"] =$createInterestStatus['id'];
		$response["message"] = "Woot!,Successfully created Interest Payment entry with id ".$createInterestStatus['id'];
	}
	
	echoRespnse(200, $response);	

});



$app->post('/without', function() use ($app) {
    
	$r = json_decode($app->request->getBody());
	$without = array();
	$without["customer"] = postParams($app->request->post('customer'));
	$without["date"] = postParams($app->request->post('date'));
	$without["amount"] = postParams($app->request->post("amount"));
	$without["note"] = postParams($app->request->post("note"));
	
	// echo json_encode($without);
	
	$db = new DbHandler();
	
	$createwithoutstatus= $db->createwithout($without);
	if($createwithoutstatus['status'] == FAILED){//if error occurs while creating product
		$response["error"] = true;
		$response["status"] ="error";
		$response["message"] = "Oops! An error occurred while creating firm";
		$response["err"]=$createwithoutstatus;
	}else{
		
		$response["error"] = false;
		$response["status"] ="success";
		$response["id"] =$createwithoutstatus['id'];
		$response["message"] = "Woot!,Successfully created Without entry with id ".$createwithoutstatus['id'];
	}
	
	echoRespnse(200, $response);		
});



$app->post('/chiti', function()use  ($app){
$q = json_decode($app->request->getBody());

$chiti = array();
$chiti["customer"] = postParams($app->request->post("customer"));
$chiti["code"] = postParams($app->request->post("code"));
$chiti["dAte"] = postParams($app->request->post("dAte"));
$chiti["tYpe"] = postParams($app->request->post("tYpe"));
$chiti["iscountable"] = postParams($app->request->post("iscountable"));
$chiti["aMount"] = postParams($app->request->post("aMount"));
$chiti["pdwtm"] = postParams($app->request->post("pdwtm"));
$chiti["interestrate"] = postParams($app->request->post("interestrate"));
$chiti["ccomm"] = postParams($app->request->post("ccomm"));
$chiti["suriccomm"] = postParams($app->request->post("suriccomm"));
$chiti["sowji"] = postParams($app->request->post("sowji"));
$chiti["suri"] = postParams($app->request->post("suri"));
$chiti["fullandevi"] = postParams($app->request->post("fullandevi"));
$chiti["reverse"] = postParams($app->request->post("reverse"));
$chiti["status"] = postParams($app->request->post("status"));
$chiti["days"] = postParams($app->request->post("days"));
$chiti["note"] = postParams($app->request->post("note"));

$db = new DbHandler();

$createchitistatus= $db->createchiti($chiti);
	if($createchitistatus['status'] == FAILED){//if error occurs while creating product
		$response["error"] = true;
		$response["status"] ="error";
		$response["message"] = "Oops! An error occurred while creating Chiti";
		$response["err"]=$createchitistatus;
	}else{
		$collection = array();
		$days = 1;
		$diff = 1;
		$date = $chiti["dAte"];
		if($chiti["tYpe"]== 1 ){
			$days = 90;
			$diff = 1;
		}
		if($chiti["tYpe"]== 2 ){
			$days = 13;
			$diff = 7;
		}
		if($chiti["tYpe"] == 3){
			$days = 9;
			$diff = 10;
		}
		if($chiti["tYpe"] == 4){
			$days = 5;
			$diff = 1;
		}if($chiti["days"]>0){
			$days = $chiti["days"];
		}
		
		for($i=0;$i<$days;$i++){
			$temp = array();
			$temp["received"] = 0;
			$temp["receivedfrom"] = 0;
			$temp["reverseid"] =0;
			$temp["chiti"] = $createchitistatus['id'];
			$temp["amount"] = $chiti["pdwtm"];
			$temp["sowji"] = $chiti["sowji"];
			$temp["suri"] = $chiti["suri"];
			$temp["fullandevi"] = $chiti["fullandevi"];
			$temp["notes"] = "";
			$temp["rcvddate"] = "";
			if($chiti["tYpe"]==4 || $chiti["tYpe"]== 5 ){
				$date = date('Y-m-d', strtotime($date. ' + '.$diff.' months'));
			}else{
				$date = date('Y-m-d', strtotime($date. ' + '.$diff.' days'));
			}
			$temp["date"] = $date;
			
			// $temp["paiddays"] =	
			array_push($collection,$temp);

		}
		
		$createcollectionstatus= $db->createcollection($collection);
		
		$response["error"] = false;
		$response["status"] ="success";
		$response["id"] =$createchitistatus['id'];
		$response["message"] = "Woot!,Successfully created chiti and added entries for id ".$createchitistatus['id'];
		

	}
	
	
	echoRespnse(200, $response);		
});	

$app->post('/asalu', function()use  ($app){
	$q = json_decode($app->request->getBody());
	// echo json_encode($q);
	$asalu = array();	
	$asalu["date"] = postParams($app->request->post("date"));
	$asalu["customer"] = postParams($app->request->post("customer"));
	$asalu["amount"] = postParams($app->request->post("amount"));
	$asalu["chitiamount"] = postParams($app->request->post("chitiamount"));
	$asalu["chiti"] = postParams($app->request->post("chiti"));
	$asalu["note"] = postParams($app->request->post("note"));
	$db = new DbHandler();
	$createasalustatus = $db->createasalu($asalu);
		if($createasalustatus['status'] == FAILED){//if error occurs while creating product
			$response["error"] = true;
			$response["status"] ="error";
			$response["message"] = "Oops! An error occurred while adding Asalu";
			$response["err"]= $createasalustatus;
		}else{
			
			$response["error"] = false;
			$response["status"] ="success";
			$response["id"] = $createasalustatus['id'];
			$response["message"] = "Woot!,Successfully added asalu with id ".$createasalustatus['id'];
		}
		
		echoRespnse(200, $response);		
		
});


$app->post('/collection', function()use  ($app){
	$q = json_decode($app->request->getBody());
	
	$coll = array();
	$coll["noof"] = postParams($app->request->post("noof"));
	$coll["customer"] = postParams($app->request->post("customer"));
	$coll["dAte"] = postParams($app->request->post("dAte"));
	$coll["chiti"] = postParams($app->request->post("chiti"));
	$coll["pdwtm"] = postParams($app->request->post("pdwtm"));
	$coll["notes"] = postParams($app->request->post("notes"));
	$coll["sowji"] = postParams($app->request->post("sowji"));
	$coll["suri"] = postParams($app->request->post("suri"));
	$coll["fullandevi"] = postParams($app->request->post("fullandevi"));
	$db = new DbHandler();
	
	
			$collection = array();
			$date = $coll["dAte"];		
				$days = $coll["noof"];
				$diff = 1;
			
			
			for($i=0;$i<$days;$i++){
				$temp = array();
				$temp["received"] = 0;
				$temp["receivedfrom"] = 0;
				$temp["reverseid"] = 0;
				$temp["rcvddate"] ="";
				$temp["chiti"] = $coll["chiti"];
				$temp["amount"] = $coll["pdwtm"];
				$temp["notes"] = $coll["notes"];
				$temp["sowji"] = $coll["sowji"];
				$temp["suri"] = $coll["suri"];
				$temp["fullandevi"] = $coll["fullandevi"];
				$date = date('Y-m-d', strtotime($date. ' + '.$diff.' months'));				
				$temp["date"] = $date;
				
				$temp["paiddays"] =	array_push($collection,$temp);
	
			}
			//echo json_encode($collection);
			$createcollectionstatus= $db->createcollection($collection);
			
			$response["error"] = false;
			$response["status"] ="success";
			$response["id"] = $coll["chiti"];
			$response["message"] = "Woot!,Successfully created Collection entries for id ".$coll["chiti"];
			
	
		
		
		
		echoRespnse(200, $response);	
	});	
	


	
$app->post('/dailyCollection', function()use  ($app){
	$q = json_decode($app->request->getBody());
	$asalu = postParams($app->request->post("asalu"));
	// $collectionids = postParams($app->request->post('cid'));
	// $coll = array();
	// $coll["noof"] = postParams($app->request->post("noof"));
	// $coll["customer"] = postParams($app->request->post("customer"));
	// $coll["dAte"] = postParams($app->request->post("dAte"));
	// $coll["chiti"] = postParams($app->request->post("chiti"));
	// $coll["pdwtm"] = postParams($app->request->post("pdwtm"));
	// $coll["sowji"] = postParams($app->request->post("sowji"));
	// for($i;$i<sizeof($asalu);$i++){
		
	// }

	$db = new DbHandler();
	$asaluid = array();
	for($i=0;$i<sizeof($asalu);$i++){
			// $asaluData = $asalu[$i];
			$isAsaluid = 0;
			$createDailyasaluStatus= $db->createasalu($asalu[$i]);
			if(sizeof($asaluid) > 0){
				for($j=0;$j<sizeof($asaluid);$j++){
					if($asaluid[$j] == $asalu[$i]["chiti"]){
						$isAsaluid += 1;
					}
				}
				if($isAsaluid == 0){
					array_push($asaluid,$asalu[$i]["chiti"]);	
				}
			}else{
				array_push($asaluid,$asalu[$i]["chiti"]);
			}
			if($createDailyasaluStatus["status"] == SUCCESS){
				
				$received = array();
				$received["customer"] = $asalu[$i]["customer"];
				$received["amount"] = $asalu[$i]["amount"];
				$received["rcvddate"] = $asalu[$i]["date"];
				$received["asalu"] = 1;
				$received["asaluid"] = $createDailyasaluStatus["id"];
				$colid = 0 ;
				$received["chiti"] = $asalu[$i]["chiti"];
				$received["note"] = $asalu[$i]["note"];

				$createreceivedstatus = $db->createreceived($colid,$received);

			}
		}
	// 	$asaluData = $tmp;
	$asaluids = rtrim(implode(',', $asaluid), ',');

			$response["error"] = false;
			$response["status"] ="success";
			$response["id"] = $asaluids;
			$response["message"] = "Woot!,Successfully created asalu entries for id ".$asaluids;
			
	
		
		
		
		echoRespnse(200, $response);	
	});	

	
$app->post('/entry', function()use  ($app){
	$q = json_decode($app->request->getBody());
	verifyRequiredParams(array());
	$entry = array();
	$chiti["nAme"] = postParams($app->request->post("nAme"));
	$chiti["dAte"] = postParams($app->request->post("dAte"));
	$chiti["tYpe"] = postParams($app->request->post("tYpe"));
	$chiti["aMount"] = postParams($app->request->post("aMount"));
	$chiti["pdwtm"] = postParams($app->request->post("pdwtm"));
	$chiti["interestrate"] = postParams($app->request->post("interestrate"));
	$chiti["sowji"] = postParams($app->request->post("sowji"));
	$db = new DbHandler();
	
	$createchitistatus= $db->createchiti($chiti);
		if($createchitistatus['status'] == FAILED){//if error occurs while creating product
			$response["error"] = true;
			$response["status"] ="error";
			$response["message"] = "Oops! An error occurred while creating Chiti";
			$response["err"]=$createchitistatus;
		}else{
			
			$response["error"] = false;
			$response["status"] ="success";
			$response["id"] =$createchitistatus['id'];
			$response["message"] = "Woot!,Successfully created Chiti with id ".$createchitistatus['id'];
		}
		
		echoRespnse(200, $response);		
		
});



$app->get('/customers',function() use($app){
	$response = array();
	$db = new DbHandler();

	$params= $db->getFunctionParam("customers");
	$getdata = array();
	for($i=0;$i<sizeof($params);$i++){
			if(getParams($app->request->get($params[$i]))){
				array_push($getdata,getParams($app->request->get($params[$i])));
			}else{
				array_push($getdata,"");
			}
	}
	$customerList = call_user_func_array(array($db,'getcustomers'), $getdata);	
	$outputfields = array("id","id","firstname","lastname","phoneno","hami","ishami","chitfund","hamifirstname","hamilastname","hamiphoneno","aadhar","passbook","debitcard","cheque","pnote","greensheet","note","forint","intrate","created","updated");
	$qryfields = array("id","SNO","Firstname","LastName","PhoneNo","hami","ishami","chitfund","HamiFirstName","HamiLastName","HamiPhoneNo","aadhar","passbook","debitcard","cheque","pnote","greensheet","note","forint","intrate","Created","Updated");
	$customer=array();
	// looping through result and preparing tasks array
	for($i=0;$i<sizeOf($customerList);$i++){
		$tmp = array();		
		for($j = 0;$j<sizeof($qryfields);$j++){
		if(isset($customerList[$i][$outputfields[$j]])){
			$tmp[$qryfields[$j]] = $customerList[$i][$outputfields[$j]];
			}
		}
		array_push($customer,$tmp);

	}
	
		$response["error"] = false;
		$getdata[sizeof($getdata)-3]="";
		$getdata[sizeof($getdata)-2]="";
		$getdata[sizeof($getdata)-1]=1;
		$response['status'] = "success";
		//$response['total'] = call_user_func_array(array($db,'getcustomers'), $getdata)[0]["count(*)"];
		
		$response["customers"] =$customer;
		$response["message"] = "Woot!,Successfully retreived the customer list";
	
	
	echoRespnse(200, $response);	

});

$app->get('/customer/:id',function($id) use($app){
	$response = array();
	$db = new DbHandler();

	$params= $db->getFunctionParam("customers");
	$getdata = array();
	for($i=0;$i<sizeof($params);$i++){
			if($params[$i]=="id"){
				array_push($getdata,$id);
			}else{
				array_push($getdata,"");
			}
	}
	$customerList = call_user_func_array(array($db,'getcustomers'), $getdata);	
	$outputfields = array("id","firstname","lastname","phoneno","hami","ishami","chitfund","hamifirstname","hamilastname","hamiphoneno","hami","aadhar","passbook","debitcard","cheque","pnote","greensheet","note","forint","intrate","created","updated");//db
	$qryfields = array("id","firstName","lastName","phoneNo","hami","ishami","chitfund","hamiFirstName","hamiLastName","hamiPhoneNo","hami","aadhar","passbook","debitcard","cheque","pnote","greensheet","note","forint","intrate","Created","Updated");
	$customer=array();
	// looping through result and preparing tasks array
	$tmp = array();		
	for($i=0;$i<sizeOf($customerList);$i++){
		
		for($j = 0;$j<sizeof($qryfields);$j++){
		if(isset($customerList[$i][$outputfields[$j]])){
			$tmp[$qryfields[$j]] = $customerList[$i][$outputfields[$j]];
			}
		}
		//echo json_encode($tmp);
	//	array_push($customer,$tmp);

	}
	
		$response["error"] = false;
		//$getdata[sizeof($getdata)-3]="";$getdata[sizeof($getdata)-2]="";$getdata[sizeof($getdata)-1]=1;
	$response['status'] = "success";
	//$response['total'] = call_user_func_array(array($db,'getcustomers'), $getdata)[0]["count(*)"];
		$response["customer"] =$tmp;
		$response["message"] = "Woot!,Successfully retreived the customer list";
	
	
	echoRespnse(200, $response);	

});

$app->get('/asalu',function() use($app){
	$response = array();
	$db = new DbHandler();

	$params= $db->getFunctionParam("asalu");
	$getdata = array();
	for($i=0;$i<sizeof($params);$i++){
			if(getParams($app->request->get($params[$i]))){
				array_push($getdata,getParams($app->request->get($params[$i])));
			}else{
				array_push($getdata,"");
			}
	}
	$asaluList = call_user_func_array(array($db,'getasalu'), $getdata);	
	$outputfields = array("id","date","customer","amount","chitiamount","chiti","customername","note","created","updated");
	$qryfields = array("id","date","customer","amount","chitiamount","chiti","customername","note","created","updated");
	$asalu=array();
	// looping through result and preparing tasks array
	for($i=0;$i<sizeOf($asaluList);$i++){
		$tmp = array();		
		for($j = 0;$j<sizeof($qryfields);$j++){
		if(isset($asaluList[$i][$outputfields[$j]])){
			$tmp[$qryfields[$j]] = $asaluList[$i][$outputfields[$j]];
			}
		}
		array_push($asalu,$tmp);

	}
	
		$response["error"] = false;
		$getdata[sizeof($getdata)-3]="";
		$getdata[sizeof($getdata)-2]="";
		$getdata[sizeof($getdata)-1]=1;
		$response['status'] = "success";
		//$response['total'] = call_user_func_array(array($db,'getcustomers'), $getdata)[0]["count(*)"];
		
		$response["asalu"] =$asalu;
		$response["message"] = "Woot!,Successfully retreived the asalu list";
	
	
	echoRespnse(200, $response);

});

$app->put('/customer/:id', function($id) use ($app) {
	$r = json_decode($app->request->getBody());
	
	$db = new DbHandler();
	$bankEntry = array();
	$params = $db->getFunctionParam("customers");
	$getdata = array();
		for($i=0;$i<sizeof($params);$i++){
			if($params[$i] == "id"){
				array_push($getdata,$id);
			}else{
				array_push($getdata,"");
			}
	}
	$customerDetail = call_user_func_array(array($db,'getcustomers'), $getdata);
	if(sizeOf($customerDetail)>0){
		$params = $db->putFunctionParam("customers");
		$updateField = array();
		$updateField["id"] = $id;
		$putdata=array();
		array_push($putdata,$updateField);
		for($i=0;$i<sizeof($params);$i++){
			if(putParam($r,$params[$i]) || (putParam($r,$params[$i])=="0")){
				array_push($putdata,putParam($r,$params[$i]));
			}else if($Customer["Hami"]==0 && $Customer["IsHami"]==1){
				// echo "worked";
				if($params[$i]== "hami"){
					array_push($putdata,$id);
				}else{
					array_push($putdata,"");
				}
		}
		/*else if($Customer["IsHami"]==0 && $Customer["Hami"]==$id) {
			if($params[$i]== "hami"){
				array_push($putdata,"");
			}
		}*/else{
				array_push($putdata,"");
			}
	}
				array_push($putdata,"");
		
		
		$editDetail = call_user_func_array(array($db,'editcustomer'), $putdata);
	
		if($editDetail['status'] == SUCCESS){//if error occurs while creating product
	
			$response["error"] = false;
			$response["status"] ="success";
			$response["id"] =$id;
			$response["message"] = "Woot!,Successfully edited party information";
		}
		else{
			$response["error"] = true;
			$response["status"] ="error";
			$response["message"] = "Oops! An error occurred while editing party information";
			$response["err"]=$editDetail;
		}
	}else{
		$response["error"] = true;
		$response["status"] ="error";
		$response["message"] = "No party found with given ID";
	}
	echoRespnse(200, $response);
});


$app->get('/collection/:id',function($id) use($app){
	$response = array();
	$db = new DbHandler();

	$params= $db->getFunctionParam("collection");
	$getdata = array();
	for($i=0;$i<sizeof($params);$i++){
			if($params[$i]=="id"){
				array_push($getdata,$id);
			}else{
				array_push($getdata,"");
			}
	}
	$collectionList = call_user_func_array(array($db,'getcollection'), $getdata);	
	$outputfields = array("id","chiti","date","amount","notes","sowji","sowjitotal","iscountable","received","receivedfrom","customerFL","haminame","rcvddate","created","updated");
	$qryfields = array("id","chiti","date","amount","notes","sowji","sowjitotal","iscountable","received","receivedfrom","customerFL","haminame","rcvddate","created","updated");
	$collection=array();
	// looping through result and preparing tasks array
	$tmp = array();		
	for($i=0;$i<sizeOf($collectionList);$i++){
		
		for($j = 0;$j<sizeof($qryfields);$j++){
		if(isset($collectionList[$i][$outputfields[$j]])){
			$tmp[$qryfields[$j]] = $collectionList[$i][$outputfields[$j]];
			}
		}
	//	array_push($customer,$tmp);

	}
	
		$response["error"] = false;
		//$getdata[sizeof($getdata)-3]="";$getdata[sizeof($getdata)-2]="";$getdata[sizeof($getdata)-1]=1;
	$response['status'] = "success";
	//$response['total'] = call_user_func_array(array($db,'getcustomers'), $getdata)[0]["count(*)"];
		$response["collection"] =$tmp;
		$response["message"] = "Woot!,Successfully retreived the collection list";
	
	
	echoRespnse(200, $response);	

});


$app->put('/collection/:id', function($id) use ($app) {
	$r = json_decode($app->request->getBody());
	$db = new DbHandler();
	//echo json_encode($r);
	$params = $db->getFunctionParam("collection");
		$getdata = array();
		for($i=0;$i<sizeof($params);$i++){
			if($params[$i] == "id"){
				array_push($getdata,$id);
			}else{
				array_push($getdata,"");
			}
	}
	$oldCollectionDetail = call_user_func_array(array($db,'getcollection'), $getdata);


	if(sizeOf($oldCollectionDetail)>0){
		$params = $db->putFunctionParam("collection");
		$updateField = array();
		$updateField["id"] = $id;
		$putdata=array();
		array_push($putdata,$updateField);
		for($i=0;$i<sizeof($params);$i++){
			if(putParam($r,$params[$i]) || (putParam($r,$params[$i])) == "0"){
				array_push($putdata,putParam($r,$params[$i]));
			}else{
				array_push($putdata,"");
			}
	}
				array_push($putdata,"");

		$editDetail = call_user_func_array(array($db,'editcollection'), $putdata);
	
		if($editDetail['status'] == SUCCESS){
			if(sizeOf($oldCollectionDetail)>0){
				if($oldCollectionDetail[0]["received"] != putParam($r,"received")){
					
				}
			}
	
			$response["error"] = false;
			$response["status"] ="success";
			$response["id"] =$id;
			$response["message"] = "Woot!,Successfully edited collection information";
		}
		else{
			$response["error"] = true;
			$response["status"] ="error";
			$response["message"] = "Oops! An error occurred while editing collection  information";
			$response["err"]=$editDetail;
		}
	}else{
		$response["error"] = true;
		$response["status"] ="error";
		$response["message"] = "No collection found with given ID";
	}
	echoRespnse(200, $response);
});

$app->delete('/collection/:id', function($id) use ($app) {
	$r = json_decode($app->request->getBody());
	$db = new DbHandler();
	//echo json_encode($r);
	$params = $db->getFunctionParam("collection");
		$getdata = array();
		for($i=0;$i<sizeof($params);$i++){
			if($params[$i] == "id"){
				array_push($getdata,$id);
			}else{
				array_push($getdata,"");
			}
	}
	$oldCollectionDetail = call_user_func_array(array($db,'getcollection'), $getdata);


	if(sizeOf($oldCollectionDetail)>0){
		$params = $db->putFunctionParam("collection");
		$updateField = array();
		$updateField["id"] = $id;
		$putdata=array();
		array_push($putdata,$updateField);
		for($i=0;$i<sizeof($params);$i++){
			array_push($putdata,"");
		}
			array_push($putdata,"1");

		$editDetail = call_user_func_array(array($db,'editcollection'), $putdata);
	
		if($editDetail['status'] == SUCCESS){
			$response["error"] = false;
			$response["status"] ="success";
			$response["id"] = $id;
			$response["message"] = "Woot!,Successfully Deleted collection information";
		}else{
			$response["error"] = true;
			$response["status"] ="error";
			$response["message"] = "Oops! An error occurred while Deleting collection  information";
			$response["err"]=$editDetail;
		}
	}else{
		$response["error"] = true;
		$response["status"] ="error";
		$response["message"] = "No collection found with given ID";
	}
	echoRespnse(200, $response);
});


$app->post('/receivedcollection', function() use ($app) {
 
	$r = json_decode($app->request->getBody());
	
	$db = new DbHandler();
	$collectionids = postParams($app->request->post('cid'));
	$rcvddate = postParams($app->request->post('rcvddate'));
	$notes = postParams($app->request->post('notes'));
	$receivedfrom = postParams($app->request->post('receivedfrom'));
	$collectionsowji = postParams($app->request->post('collectionsowji'));

	$params = $db->putFunctionParam("collection");
	if($collectionids){
		for($i=0;$i<sizeof($collectionids);$i++){
		$updateField = array();
		$updateField["id"]= $collectionids[$i] ;
		$putdata =array();
		array_push($putdata,$updateField);
		for($j=0;$j<sizeof($params);$j++){
			if($params[$j] == "received"){
				array_push($putdata,1);
			}else if($params[$j] == "rcvddate"){
				array_push($putdata,$rcvddate);
			}else if($params[$j] == "receivedfrom"){
				array_push($putdata,$receivedfrom);
			}else if($params[$j] == "notes"){
				array_push($putdata,$notes);
			}else{
				array_push($putdata,"");
			}
		}
		array_push($putdata,"");

		$editDetail = call_user_func_array(array($db,'editcollection'),$putdata);
	}
}
	$db->updatesowji($collectionsowji);
	$response = array();
	$response["error"] = false;
	$response["status"] ="success";
	
	$response["message"] = "Woot!,Successfully created rcvd collection information";	

	
			echoRespnse(200, $response);
	

	
});
$app->post('/drcr',function() use ($app){
	$r = json_decode($app->request->getBody());	
	$received = array();
	$received["date"] =postParams($app->request->post('date'));
	$received["customer"] =postParams($app->request->post('customer'));
	$received["credit"] =postParams($app->request->post('credit'));
	$received["debit"] =postParams($app->request->post('debit'));
	$received["showdaybook"] =postParams($app->request->post('showdaybook'));
	$received["note"] =postParams($app->request->post('note'));
	$received["note1"] =postParams($app->request->post('note1'));
	$received["forint"] = postParams($app->request->post('forint'));
	$received["creditexp"] = postParams($app->request->post('creditexp'));
	$received["crid"] = postParams($app->request->post('crid'));
	$received["chitfundid"] = postParams($app->request->post('chitfundid'));
	$collectionsowji = postParams($app->request->post('collectionsowji'));
	$intid = postParams($app->request->post('intid'));
	$intcr = postParams($app->request->post('intcr'));
	$intdate = postParams($app->request->post('intdate'));
	$db = new DbHandler();
	if($intid){
		for($i=0;$i<sizeof($intid);$i++){
			$updateField = array();
				$updateField["date"]= $intdate;
				$updateField["customer"]= $intid[$i];
				$updateField["credit"]= $intcr[$i];
				$updateField["debit"]= "0";
				$updateField["crid"]= "0";
				$updateField["forint"]= "1";
				$updateField["note"]= "interestcal";
				$updateField["note1"]= ".";
				$updateField["creditexp"]= "0";
				$updateField["showdaybook"]= "2";
				$updateField["chitfundid"]= "0";
				
				$putdata =array();
			$createreceivedstatus = $db->createdrcr($updateField);
		}
	
	}
	
	if($received["customer"]){
		$createreceivedstatus = $db->createdrcr($received);
	}
	
	if($createreceivedstatus["status"]== FAILED){
		$response["error"]= true;
		$response["status"] = "error";
		$response["message"] = "Oops! an error occured while creating drcr entry";
	}else{
		$db->updatesowji($collectionsowji);
		$response["error"]= false;
		$response["status"] = "success";
		$response["id"]	= $createreceivedstatus['id'];
		$response["message"] = "Woot! successfully created DrCr entry with id".$createreceivedstatus['id']; 
	}
	echoRespnse(200,$response);

});



$app->post('/sowji',function() use ($app){
	$r = json_decode($app->request->getBody());
	$sowji = array();
	$sowji["date"] =postParams($app->request->post('date'));
	$sowji["chiti"] =postParams($app->request->post('chiti'));
	$sowji["amount"]  =postParams($app->request->post('amount'));
	$sowji["note"] =postParams($app->request->post('note'));

	

	$db = new DbHandler();
	$createsowjistatus = $db->createsowji($sowji);
	if($createsowjistatus["status"]== FAILED){
		$response["error"]= true;
		$response["status"] = "error";
		$response["message"] = "Oops! an error occured while creating sowji entry";
	}else{
		$response["error"]= false;
		$response["status"] = "Success";
		$response["id"]	= $createsowjistatus['id'];
		$response["message"] = "Woot! successfully created Sowji entry with id".$createsowjistatus['id']; 
	}
	echoRespnse(200,$response);

});



$app->post('/receivedamount', function() use ($app) {
 
	$r = json_decode($app->request->getBody());
	
	$received = array();
	
	$received["customer"] = postParams($app->request->post('customer'));
	$received["amount"] = postParams($app->request->post('amount'));
	$received["rcvddate"]=postParams($app->request->post('rcvddate'));
	$received["asalu"]=postParams($app->request->post('asalu'));
	$received["asaluid"]=postParams($app->request->post('asaluid'));
	$received["chiti"]=postParams($app->request->post('chiti'));
	$collectionarr  =postParams($app->request->post('collectionarr'));
	$received["note"]=postParams($app->request->post('note'));
	$db = new DbHandler();
	
	if($collectionarr && sizeof($collectionarr)>0){
		for($i=0;$i<sizeof($collectionarr);$i++){
			$received["amount"] = $collectionarr[$i]["colamt"];
			echo "amt".$received["amount"];
			$createreceivedstatus =$db->createreceived($collectionarr[$i]["colid"],$received);
		}
	}else{
		$createreceivedstatus =$db->createreceived(0,$received);
	}


	if($createreceivedstatus['status'] == FAILED){//if error occurs while creating product
		$response["error"] = true;
		$response["status"] ="error";
		$response["message"] = "Oops! An error occurred while creating received";
		$response["err"]=$createreceivedstatus;
	}else{
		$response["error"] = false;
		$response["status"] ="success";
		$response["id"] =$createreceivedstatus['id'];
		$response["message"] = "Woot!,Successfully created Chiti with id ".$createreceivedstatus['id'];
	}
	
	echoRespnse(200, $response);		
	
});

$app->get('/drcr',function() use ($app){
	$response = array();
	$db = new DbHandler();
	$params =$db->getFunctionParam("drcr");
	$getdata = array();
	for($i=0;$i<sizeof($params);$i++){
		if(getParams($app->request->get($params[$i]))){
			array_push($getdata,getParams($app->request->get($params[$i])));
		}else{
			array_push($getdata,"");
		}
	
	}
	
	$drcrList = call_user_func_array(array($db,'getdrcr'),$getdata);
	if(sizeof($drcrList) > 0){
		$outputfields = array("id","date","customer","customername","haminame","credit","credittotal","debit","debittotal","showdaybook","note","note1","forint","creditexp","crid","chitfundid","created","updated");//db field name
		$qryfields = array("id","date","customer","customername","haminame","credit","credittotal","debit","debittotal","showdaybook","note","note1","forint","creditexp","crid","chitfundid","created","updated");
		
		$drcr = array();
		// echo sizeof($drcrList);
		for($i=0;$i<sizeof($drcrList);$i++){
			$tmp = array();
			for($j=0;$j<sizeof($qryfields);$j++){
				if(isset($drcrList[$i][$outputfields[$j]])){
					$tmp[$qryfields[$j]] = $drcrList[$i][$outputfields[$j]];
	
				}
			}
			array_push($drcr,$tmp);
		}
		$response["error"]= false;
		$response['status']= "Success";
		$response["drcr"] = $drcr;
		$response["message"] = "Woot!, successfully retrieved the DrCr entry list";
	}else{
		$response["error"]= false;
		$response['status']= "error";
		$response["drcr"] = [];
		$response["message"] = "No Cash Entries found";
	}

	echoRespnse(200, $response);

});


$app->get('/sowji',function() use ($app){
	$response = array();
	$db = new DbHandler();
	$params =$db->getFunctionParam("sowji");
	$getdata = array();
	for($i=0;$i<sizeof($params);$i++){
		if(getParams($app->request->get($params[$i]))){
			array_push($getdata,getParams($app->request->get($params[$i])));
		}else{
			array_push($getdata,"");
		}
	
	}
	
	$sowjiList = call_user_func_array(array($db,'getsowji'),$getdata);

	$outputfields = array("id","date","chiti","amount","note","amounttotal","created","updated");//db field name
	$qryfields = array("id","date","chiti","amount","note","amounttotal","created","updated");
	
	$sowji = array();
	for($i=0;$i<sizeof($sowjiList);$i++){
		$tmp = array();
		for($j=0;$j<sizeof($qryfields);$j++){
			if(isset($sowjiList[$i][$outputfields[$j]])){
				$tmp[$qryfields[$j]] = $sowjiList[$i][$outputfields[$j]];

			}
		}
		array_push($sowji,$tmp);
	}
	$response["error"]= false;
	$response['status']= "Success";
	$response["sowji"] = $sowji;
	$response["message"] = "Woot!, successfully retrieved the Sowji  list";

	echoRespnse(200, $response);

});


$app->get('/drcr/:id',function($id) use ($app){
	$response = array();
	$db = new DbHandler();

	$params= $db->getFunctionParam("drcr");
	$getdata = array();
	for($i=0;$i<sizeof($params);$i++){
			if($params[$i]=="id"){
				array_push($getdata,$id);
			}else{
				array_push($getdata,"");
			}
	}
	$drcrList = call_user_func_array(array($db,'getdrcr'), $getdata);	
	if(sizeof($drcrList)>0){
		$outputfields = array("id","date","customer","customername","haminame","credit","credittotal","debit","debittotal","showdaybook","note","note1","forint","creditexp","crid","chitfundid","created","updated");//db field name
		$qryfields = array("id","date","customer","customername","haminame","credit","credittotal","debit","debittotal","showdaybook","note","note1","forint","creditexp","crid","chitfundid","created","updated");
	
		$drcr=array();
		// looping through result and preparing tasks array
		$tmp = array();		
		for($i=0;$i<sizeOf($drcrList);$i++){
			
			for($j = 0;$j<sizeof($qryfields);$j++){
			if(isset($drcrList[$i][$outputfields[$j]])){
				$tmp[$qryfields[$j]] = $drcrList[$i][$outputfields[$j]];
				}
			}
		//	array_push($customer,$tmp);
	
		}
		
		$response["error"] = false;
		//$getdata[sizeof($getdata)-3]="";$getdata[sizeof($getdata)-2]="";$getdata[sizeof($getdata)-1]=1;
		$response['status'] = "success";
		//$response['total'] = call_user_func_array(array($db,'getcustomers'), $getdata)[0]["count(*)"];
		$response["drcr"] =$tmp;
		$response["message"] = "Woot!,Successfully retreived the Cash Entry list";
	
	}else{
		$response["error"]= false;
		$response['status']= "error";
		$response["message"] = "No Cash Entry found with given ID";
	}
	
	echoRespnse(200, $response);	

});


$app->put('/drcr/:id', function($id) use ($app) {
	$r = json_decode($app->request->getBody());
	$db = new DbHandler();
	
	$params = $db->getFunctionParam("drcr");
	$getdata = array();
		for($i=0;$i<sizeof($params);$i++){
			if($params[$i] == "id"){
				array_push($getdata,$id);
			}else{
				array_push($getdata,"");
			}
	}
	$drcrDetail = call_user_func_array(array($db,'getdrcr'), $getdata);
	if(sizeOf($drcrDetail)>0){
		$params = $db->putFunctionParam("drcr");
		$updateField = array();
		$updateField["id"] = $id;
		$putdata=array();
		array_push($putdata,$updateField);
		for($i=0;$i<sizeof($params);$i++){
			if(putParam($r,$params[$i]) || (gettype(putParam($r,$params[$i])) == "string" && putParam($r,$params[$i]) == 0) ){
				// echo $params[$i]; echo putParam($r,$params[$i]);
				array_push($putdata,putParam($r,$params[$i]));
			}else{
				array_push($putdata,"");
			}
	}
				array_push($putdata,"");
		
		
		$editDetail = call_user_func_array(array($db,'editdrcr'), $putdata);
	
		if($editDetail['status'] == SUCCESS){//if error occurs while creating product
	
			$response["error"] = false;
			$response["status"] ="success";
			$response["id"] =$id;
			$response["message"] = "Woot!,Successfully edited Cash Entry";
		}
		else{
			$response["error"] = true;
			$response["status"] ="error";
			$response["message"] = "Oops! An error occurred while editing Cash Entry";
			$response["err"]=$editDetail;
		}
	}else{
		$response["error"] = true;
		$response["status"] ="error";
		$response["message"] = "No Cash Entry found with given ID";
	}
	echoRespnse(200, $response);
});


$app->get('/receivedamount',function() use ($app){
	$response = array();
	$db = new DbHandler();

	$params = $db ->getFunctionParam("receivedamount");
	$getdata = array();
	for($i=0;$i<sizeof($params);$i++){
		if(getParams($app->request->get($params[$i]))){
			array_push($getdata,getParams($app->request->get($params[$i])));
		}else{
			array_push($getdata,"");
		}
	}

	$receivedamountList = call_user_func_array(array($db,'getreceivedamount'),$getdata);
	
	$outputfields=array("id","customer","amount","customername","rcvddate","asalu","asaluid","asaluchiti","chiti","colid","colamt","code","sowjicomm","suricomm","fullandevicomm","note","created","updated");
	$qryfields = array("id","customer","amount","customername","rcvddate","asalu","asaluid","asaluchiti","chiti","colid","colamt","code","sowjicomm","suricomm","fullandevicomm","note","created","updated");
	$receivedamount =array();
	for($i=0;$i<sizeof($receivedamountList);$i++){
		$tmp = array();
		for($j=0;$j<sizeof($qryfields);$j++){
			if(isset($receivedamountList[$i][$outputfields[$j]])){
				$tmp[$qryfields[$j]] = $receivedamountList[$i][$outputfields[$j]];
			}
		}
		array_push($receivedamount,$tmp);
	}
	$response["error"] = false;
		//$getdata[sizeof($getdata)-3]="";$getdata[sizeof($getdata)-2]="";$getdata[sizeof($getdata)-1]=1;
	$response['status'] = "success";
	//echo json_encode(call_user_func_array(array($db,'getchiti'), $getdata));
//	$response['total'] = call_user_func_array(array($db,'getreceivedamount'), $getdata)[0]["count(*)"];
		$response["receivedamount"] =$receivedamount;
		$response["message"] = "Woot!,Successfully retreived the Received Amount list";
	
	
	echoRespnse(200, $response);	

});


$app->get('/chiti',function() use($app){
	$response = array();
	$db = new DbHandler();

	$params= $db->getFunctionParam("chiti");
	$getdata = array();
	for($i=0;$i<sizeof($params);$i++){
			if(getParams($app->request->get($params[$i]))){
				array_push($getdata,getParams($app->request->get($params[$i])));
			}else{
				array_push($getdata,"");
			}
	}
	$chitiList = call_user_func_array(array($db,'getchiti'), $getdata);	
	$outputfields = array("id","id","customer","customername","code","date","tYpe","iscountable","amount","pdwtm","interestrate","ccomm","suriccomm","sowji","suri","fullandevi","reverse","status","note","hami","haminame","created","updated");//db field name
	$qryfields = array("SNO","id","customer","customername","code","date","tYpe","iscountable","chitiamount","pdwtm","interestrate","ccomm","suriccomm","sowji","suri","fullandevi","reverse","status","note","hami","haminame","created","updated");
	$chiti=array();
	// looping through result and preparing tasks array
	for($i=0;$i<sizeOf($chitiList);$i++){
		$tmp = array();		
		for($j = 0;$j<sizeof($qryfields);$j++){
		if(isset($chitiList[$i][$outputfields[$j]])){
			$tmp[$qryfields[$j]] = $chitiList[$i][$outputfields[$j]];
			}
		}
		array_push($chiti,$tmp);

	}
	
		$response["error"] = false;
		$getdata[sizeof($getdata)-3]="";$getdata[sizeof($getdata)-2]="";$getdata[sizeof($getdata)-1]=1;
	$response['status'] = "success";
	//echo json_encode(call_user_func_array(array($db,'getchiti'), $getdata));
		//$response['total'] = call_user_func_array(array($db,'getchiti'), $getdata)[0]["count(*)"];
		$response["chiti"] =$chiti;
		$response["message"] = "Woot!,Successfully retreived the chiti list";
	
	
	echoRespnse(200, $response);	

});

$app->get('/chitfund',function() use($app){
	$response = array();
	$db = new DbHandler();

	$params= $db->getFunctionParam("chitfund");
	$getdata = array();
	for($i=0;$i<sizeof($params);$i++){
			if(getParams($app->request->get($params[$i]))){
				array_push($getdata,getParams($app->request->get($params[$i])));
			}else{
				array_push($getdata,"");
			}
	}
	$chitfundList = call_user_func_array(array($db,'getchitfund'), $getdata);	
	$outputfields = array("id","customer","date","amount","type","status","customername","created","updated");//db field name
	$qryfields = array("id","customer","date","amount","type","status","customername","Created","Updated");
	$chitfund=array();
	// looping through result and preparing tasks array
	for($i=0;$i<sizeOf($chitfundList);$i++){
		$tmp = array();		
		for($j = 0;$j<sizeof($qryfields);$j++){
		if(isset($chitfundList[$i][$outputfields[$j]])){
			$tmp[$qryfields[$j]] = $chitfundList[$i][$outputfields[$j]];
			}
		}
		array_push($chitfund,$tmp);

	}
	
		$response["error"] = false;
		$getdata[sizeof($getdata)-3]="";$getdata[sizeof($getdata)-2]="";$getdata[sizeof($getdata)-1]=1;
	$response['status'] = "success";
	//echo json_encode(call_user_func_array(array($db,'getchitfund'), $getdata));
		//$response['total'] = call_user_func_array(array($db,'getchitfund'), $getdata)[0]["count(*)"];
		$response["chitfund"] =$chitfund;
		$response["message"] = "Woot!,Successfully retreived the chitfund list";
	
	
	echoRespnse(200, $response);	

});

$app->put('/asalu/:id',function($id) use ($app){
	$r= json_decode($app->request->getBody());
	$db= new DbHandler();
	$getdata =array();
	$params = $db->getFunctionParam("asalu");
	for($i=0;$i<sizeof($params);$i++){
		if($params[$i]== "id"){
			array_push($getdata,$id);
		}else{
			array_push($getdata,"");
		}
	}

	$asaluDetail = call_user_func_array(array($db,'getasalu'),$getdata);
	if(sizeof($asaluDetail)>0){
		$params = $db->putFunctionParam("asalu");
		$updateField = array();
		$updateField["id"]= $id ;
		$putdata =array();
		array_push($putdata,$updateField);
		for($i=0;$i<sizeof($params);$i++){
			if(putParam($r,$params[$i])){
				array_push($putdata,putParam($r,$params[$i]));
			}else{
				array_push($putdata,"");
			}
		}
		array_push($putdata,"");
	}
	$editDetail = call_user_func_array(array($db,'editasalu'),$putdata);

	if($editDetail["status"] == SUCCESS){
		$response["error"] = false;
		$response["status"] = "success";
		$response["id"] = $id;
		$response["message"] = "Woot! , successfully edited Asalu information";
	}else{
		$response["error"] = "true";
		$response["status"] = "success";
		$response ["message"] = "Oops! An error occured while editing Asalu information";
		$response["err"] = $editDetail;
	}
	
	echoRespnse(200, $response);
	
});



	$app->put('/multiupdatenotes',function() use ($app){
		$r= json_decode($app->request->getBody());
		
		$action = putParam($r,"action");
		$chiti = putParam($r,"chiti");
		$asaluid = putParam($r,"asaluid");
		$currnote = "";$matchedi = 0;$prevnote = 0;
		$days = 100;
		$editedEntries = array();


		$db= new DbHandler();
		$getdata =array();
		$params = $db->getFunctionParam("asalu");
		for($i=0;$i<sizeof($params);$i++){
			if($params[$i]== "chiti"){
				array_push($getdata,$chiti);
			}else if($params[$i]== "sort_by"){
				array_push($getdata,"a.date");
			}else if($params[$i]== "sort_order"){
				array_push($getdata,"asc");
			}else{
				array_push($getdata,"");
			}
		}

		$asaluDetail = call_user_func_array(array($db,'getasalu'),$getdata);
		if(sizeof($asaluDetail)>0){
			for($j=0;$j<sizeof($asaluDetail);$j++){
				if($asaluDetail[$j]["id"] == $asaluid){
					$matchedi = $j;
					$prevnote = $asaluDetail[$j]["note"];
					// break;
				}
				
					// echo = 
				if($prevnote && $j > $matchedi){
					// echo "prevnote bfre err".$prevnote; //18,19
					// echo " 1stnote ".$asaluDetail[$j]["note"];//21
					
					if(strpos($prevnote, ',')){
						$temparr = explode(",",$prevnote);
						$prevnote = $temparr[sizeof($temparr) - 1];
						// echo "<--- came in prevcomma ".$prevnote."---->";
					}else if(strpos($prevnote, '-')){
						$temparr = explode(",",$prevnote);
						$prevnote = $temparr[sizeof($temparr) - 1];
						// echo "<--- came in prevdash".$prevnote."---->";
					}
					// else if(!is_nan($prevnote)){
					// 	echo "<--- came in prevnumerix".$prevnote."---->";
					// 	$prevnote = $asaluDetail[$j]["note"];
					// }
					
					
            // Data.toast(results);
					// echo "<--- came in prev final ".$prevnote."-----curr ". $currnote . "-->";
					

					($asaluDetail[$j]["chiti"] == 259)?$days = 400 : "";
					$perday = $asaluDetail[$j]["amount"]/$days;
					// if($j >= $matchedi){
					// 	echo "perday".$perday;
					// }
					$prevnote = intval($prevnote) + 1;
					if($perday == 1){
						$currnote = $prevnote;
						// echo "<--- came in 1".$prevnote."---->";
					}else if($perday > 1 && $perday <= 2){// 
						// $initnote = $prevnote;
						// $prevnote = strval($prevnote);
						$currnote = ($prevnote) . ',' . (intval($prevnote) + 1);
						// echo "<--- came in 2".$prevnote."---->";
					}else if($perday > 2){
						// $initnote = $prevnote;
						// $prevnote = strval($prevnote);
						$currnote = ($prevnote) . '-'  . ($prevnote + $perday);
						// echo "<--- came in 3".$prevnote."---->";
					}
				}
				// if($matchedi && $j >= $matchedi){
					// echo "<--- came in end".$prevnote."--curr ". $currnote . "-->";
					// }
					($currnote)?$prevnote = $currnote:"";
					// echo "<--- came changed".$prevnote."--curr ". $currnote . "-->";
					
					$params = $db->putFunctionParam("asalu");
					$updateField = array();
					$updateField["id"]= $asaluDetail[$j]["id"];
					$putdata =array();
					array_push($putdata,$updateField);
					for($i=0;$i<sizeof($params);$i++){
						if($params[$i] == "note"){
							array_push($putdata,$currnote);
						}else{
							array_push($putdata,"");
						}
					}
					array_push($putdata,"");

					$editDetail = call_user_func_array(array($db,'editasalu'),$putdata);
					if($editDetail["status"] == SUCCESS){
						$params = $db->putFunctionParam("received");
						$updateField = array();
						$updateField["asaluid"]= $asaluDetail[$j]["id"];
						$putdata =array();
						array_push($putdata,$updateField);
						for($i=0;$i<sizeof($params);$i++){
							if($params[$i] == "note"){
								array_push($putdata,$currnote);
							}else{
								array_push($putdata,"");
							}
						}
						array_push($putdata,"");

						$editRcvdDetail = call_user_func_array(array($db,'editreceived'),$putdata);

						if($editRcvdDetail["status"] == SUCCESS){
							array_push($editedEntries,$asaluDetail[$j]["id"]);
						}
						$response["error"] = false;
						$response["status"] = "success";
						$response["editedEntries"] = $editedEntries;
						$response["message"] = "Woot! , successfully edited Asalu information";
					}else{
						$response["error"] = "true";
						$response["status"] = "success";
						$response ["message"] = "Oops! An error occured while editing Asalu information";
						$response["err"] = $editDetail;
					}
				// }
			}
		}
		
		echoRespnse(200, $response);
		
	});

$app->get('/asalu/:id',function($id) use ($app){
	$response = array();
	$db = new DbHandler();
	$params= $db->getFunctionParam("asalu");
	$getdata = array();
	for($i=0;$i<sizeof($params);$i++){
		if($params[$i]== 'id'){
			array_push($getdata,$id);
		}else{
			array_push($getdata,"");	
		}
	}
	$asaluList = call_user_func_array(array($db,'getasalu'),$getdata);
	$outputfields =array("id","date","customer","amount","chitiamount","chiti","customername","note","created","updated");
	$qryfields = array("id","date","customer","amount","chitiamount","chiti","customername","note","created","updated");
	$asalu=array();
	// looping through result and preparing tasks array
	$tmp = array();		
	for($i=0;$i<sizeOf($asaluList);$i++){
		
		for($j = 0;$j<sizeof($qryfields);$j++){
		if(isset($asaluList[$i][$outputfields[$j]])){
			$tmp[$qryfields[$j]] = $asaluList[$i][$outputfields[$j]];
			}
		}
	//	array_push($customer,$tmp);

	}
	
		$response["error"] = false;
		//$getdata[sizeof($getdata)-3]="";$getdata[sizeof($getdata)-2]="";$getdata[sizeof($getdata)-1]=1;
	$response['status'] = "success";
	//$response['total'] = call_user_func_array(array($db,'getcustomers'), $getdata)[0]["count(*)"];
		$response["asalu"] =$tmp;
		$response["message"] = "Woot!,Successfully retreived the Asalu list";
	
	
	echoRespnse(200, $response);	

});

$app->put('/received/:id',function($id) use ($app){
	$r= json_decode($app->request->getBody());
	$db= new DbHandler();
	$getdata =array();
	$params = $db->getFunctionParam("receivedamount");
	for($i=0;$i<sizeof($params);$i++){
		if($params[$i]== "id"){
			array_push($getdata,$id);
		}else{
			array_push($getdata,"");
		}
	}

	$receivedDetail = call_user_func_array(array($db,'getreceivedamount'),$getdata);
	if(sizeof($receivedDetail)>0){
		$params = $db->putFunctionParam("received");
		$updateField = array();
		$updateField["id"]= $id ;
		$putdata =array();
		array_push($putdata,$updateField);
		for($i=0;$i<sizeof($params);$i++){
			if(putParam($r,$params[$i])){
				array_push($putdata,putParam($r,$params[$i]));
			}else{
				array_push($putdata,"");
			}
		}
		array_push($putdata,"");
	}
	$editDetail = call_user_func_array(array($db,'editreceived'),$putdata);

	if($editDetail["status"] == SUCCESS){
		$response["error"] = false;
		$response["status"] = "success";
		$response["id"] = $id;
		$response["message"] = "Woot! , successfully edited Received Amount information";
	}else{
		$response["error"] = "true";
		$response["status"] = "success";
		$response ["message"] = "Oops! An error occured while editing Received Amount information";
		$response["err"] = $editDetail;
	}
	
	echoRespnse(200, $response);
	
});


$app->get('/receivedamount/:id',function($id) use ($app){
	$response = array();
	$db = new DbHandler();
	$params= $db->getFunctionParam("receivedamount");
	$getdata = array();
	for($i=0;$i<sizeof($params);$i++){
		if($params[$i]== 'id'){
			array_push($getdata,$id);
		}else{
			array_push($getdata,"");	
		}
	}
	$receivedList = call_user_func_array(array($db,'getreceivedamount'),$getdata);
	$outputfields =array("id","customer","amount","customername","rcvddate","asalu","asaluid","chiti","colid","colamt","code","sowjicomm","suricomm","fullandevicomm","note","created","updated");
	$qryfields = array("id","customer","amount","customername","rcvddate","asalu","asaluid","chiti","colid","colamt","code","sowjicomm","suricomm","fullandevicomm","note","created","updated");
	$asalu=array();
	// looping through result and preparing tasks array
	$tmp = array();		
	for($i=0;$i<sizeOf($receivedList);$i++){
		
		for($j = 0;$j<sizeof($qryfields);$j++){
		if(isset($receivedList[$i][$outputfields[$j]])){
			$tmp[$qryfields[$j]] = $receivedList[$i][$outputfields[$j]];
			}
		}
	//	array_push($customer,$tmp);

	}
	
		$response["error"] = false;
		//$getdata[sizeof($getdata)-3]="";$getdata[sizeof($getdata)-2]="";$getdata[sizeof($getdata)-1]=1;
	$response['status'] = "success";
	//$response['total'] = call_user_func_array(array($db,'getcustomers'), $getdata)[0]["count(*)"];
		$response["received"] =$tmp;
		$response["message"] = "Woot!,Successfully retreived the Received Amount list";
	
	
	echoRespnse(200, $response);	

});

$app->get('/received/:id',function($id) use ($app){
	$response = array();
	$db = new DbHandler();
	$params= $db->getFunctionParam("receivedamount");
	$getdata = array();
	for($i=0;$i<sizeof($params);$i++){
		if($params[$i]== 'id'){
			array_push($getdata,$id);
		}else{
			array_push($getdata,"");	
		}
	}
	$receivedlist = call_user_func_array(array($db,'getreceived'),$getdata);
	$outputfields =array("id","customer","amount","customername","rcvddate","asalu","asaluid","chiti","colid","colamt","code","sowjicomm","suricomm","fullandevicomm","note","created","updated");
	$qryfields = array("id","customer","amount","customername","rcvddate","asalu","asaluid","chiti","colid","colamt","code","sowjicomm","suricomm","fullandevicomm","note","created","updated");
	$received=array();
	// looping through result and preparing tasks array
	$tmp = array();		
	for($i=0;$i<sizeOf($receivedlist);$i++){
		
		for($j = 0;$j<sizeof($qryfields);$j++){
		if(isset($receivedlist[$i][$outputfields[$j]])){
			$tmp[$qryfields[$j]] = $receivedlist[$i][$outputfields[$j]];
			}
		}
	//	array_push($customer,$tmp);

	}
	
		$response["error"] = false;
		//$getdata[sizeof($getdata)-3]="";$getdata[sizeof($getdata)-2]="";$getdata[sizeof($getdata)-1]=1;
	$response['status'] = "success";
	//$response['total'] = call_user_func_array(array($db,'getcustomers'), $getdata)[0]["count(*)"];
		$response["received"] =$tmp;
		$response["message"] = "Woot!,Successfully retreived the received list";
	
	
	echoRespnse(200, $response);	

});
$app->get('/chiti/:id',function($id) use ($app){
	$response = array();
	$db = new DbHandler();
	$params= $db->getFunctionParam("chiti");
	$getdata = array();
	for($i=0;$i<sizeof($params);$i++){
		if($params[$i]== 'id'){
			array_push($getdata,$id);
		}else{
			array_push($getdata,"");	
		}
	}
	$chitilist = call_user_func_array(array($db,'getchiti'),$getdata);
	$outputfields =array("sno","id","customer","customername","code","date","tYpe","iscountable","amount","pdwtm","interestrate","ccomm","suriccomm","sowji","suri","fullandevi","reverse","status","note","hami","haminame","created","updated");
	$qryfields = array("SNO","id","customer","customername","code","date","tYpe","iscountable","chitiamount","pdwtm","interestrate","ccomm","suriccomm","sowji","suri","fullandevi","reverse","status","note","hami","haminame","created","updated");
	$chiti=array();
	// looping through result and preparing tasks array
	$tmp = array();		
	for($i=0;$i<sizeOf($chitilist);$i++){
		
		for($j = 0;$j<sizeof($qryfields);$j++){
		if(isset($chitilist[$i][$outputfields[$j]])){
			$tmp[$qryfields[$j]] = $chitilist[$i][$outputfields[$j]];
			}
		}
	//	array_push($customer,$tmp);

	}
	
		$response["error"] = false;
		//$getdata[sizeof($getdata)-3]="";$getdata[sizeof($getdata)-2]="";$getdata[sizeof($getdata)-1]=1;
	$response['status'] = "success";
	//$response['total'] = call_user_func_array(array($db,'getcustomers'), $getdata)[0]["count(*)"];
		$response["chiti"] =$tmp;
		$response["message"] = "Woot!,Successfully retreived the Chiti list";
	
	
	echoRespnse(200, $response);	

});



$app->get('/chitfund/:id',function($id) use ($app){
	$response = array();
	$db = new DbHandler();
	$params= $db->getFunctionParam("chitfund");
	$getdata = array();
	for($i=0;$i<sizeof($params);$i++){
		if($params[$i]== 'id'){
			array_push($getdata,$id);
		}else{
			array_push($getdata,"");	
		}
	}
	$chitfundlist = call_user_func_array(array($db,'getchitfund'),$getdata);
	$outputfields =array("id","customer","date","amount","type","status","customername","created","updated");
	$qryfields = array("id","customer","date","amount","type","status","customername","created","updated");
	$chitfund=array();
	// looping through result and preparing tasks array
	$tmp = array();		
	for($i=0;$i<sizeOf($chitfundlist);$i++){
		
		for($j = 0;$j<sizeof($qryfields);$j++){
		if(isset($chitfundlist[$i][$outputfields[$j]])){
			$tmp[$qryfields[$j]] = $chitfundlist[$i][$outputfields[$j]];
			}
		}
	//	array_push($customer,$tmp);

	}
	
		$response["error"] = false;
		//$getdata[sizeof($getdata)-3]="";$getdata[sizeof($getdata)-2]="";$getdata[sizeof($getdata)-1]=1;
	$response['status'] = "success";
	//$response['total'] = call_user_func_array(array($db,'getcustomers'), $getdata)[0]["count(*)"];
		$response["chitfund"] =$tmp;
		$response["message"] = "Woot!,Successfully retreived the chitfund list";
	
	
	echoRespnse(200, $response);	

});





//delete chiti start
$app->delete('/chiti/:id',function($id) use ($app){
	$r= json_decode($app->request->getBody());
	$db= new DbHandler();
	$getchitidata =array();
	$param = $db->getFunctionParam("chiti");
	for($i=0;$i<sizeof($param);$i++){
		if($param[$i]== "id"){
			array_push($getchitidata,$id);
		}else{
			array_push($getchitidata,"");
		}
	}

	$chitiDetail = call_user_func_array(array($db,'getchiti'),$getchitidata);
	
	if(sizeof($chitiDetail)>0){		
			//delete collection start
			$getcoldata =array();
			$paramss = $db->getFunctionParam("collection");
			for($m=0;$m<sizeof($paramss);$m++){
				if($paramss[$m] == "chiti"){
					array_push($getcoldata,$id);
				}else{
					array_push($getcoldata,"");
				}
			}
			$collectionDetail = call_user_func_array(array($db,'getcollection'),$getcoldata);
			// echo json_encode($collectionDetail);
			if(sizeof($collectionDetail)>0){
				for($h=0;$h<sizeof($collectionDetail);$h++){
					$params = $db->putFunctionParam("collection");
					$updateField = array();
					$updateField["id"] = $collectionDetail[$h]["id"];
					$putdata=array();
					array_push($putdata,$updateField);
					for($i=0;$i<sizeof($params);$i++){
						array_push($putdata,"");
			
					}
						array_push($putdata,"1");
					$editDetail = call_user_func_array(array($db,'editcollection'), $putdata);
				
				}
							
				if($editDetail['status'] == SUCCESS){
					$getrcvddata =array();
					$paramss = $db->getFunctionParam("receivedamount");
					for($m=0;$m<sizeof($paramss);$m++){
						if($paramss[$m]== "chiti"){
							array_push($getrcvddata,$id);
						}else{
							array_push($getrcvddata,"");
						}
					}

					$rcvdDetail = call_user_func_array(array($db,'getreceivedamount'),$getrcvddata);

					if(sizeof($rcvdDetail)>0){
						for($h=0;$h<sizeof($rcvdDetail);$h++){
							$params = $db->putFunctionParam("received");
								$updateField = array();
								$updateField["id"] = $rcvdDetail[$h]["id"];
								$putdata=array();
								array_push($putdata,$updateField);
								for($i=0;$i<sizeof($params);$i++){
										array_push($putdata,"");
						
							}
							array_push($putdata,"1");
							$editrcvdDetail = call_user_func_array(array($db,'editreceived'), $putdata);
						
						}
						//start
						$getasaludata =array();
						$paramss = $db->getFunctionParam("asalu");
						for($m=0;$m<sizeof($paramss);$m++){
							if($paramss[$m]== "chiti"){
								array_push($getasaludata,$id);
							}else{
								array_push($getasaludata,"");
							}
						}

						$asaluDetail = call_user_func_array(array($db,'getasalu'),$getasaludata);

						if(sizeof($asaluDetail)>0){
							for($h=0;$h<sizeof($asaluDetail);$h++){
								$params = $db->putFunctionParam("asalu");
									$updateField = array();
									$updateField["id"] = $asaluDetail[$h]["id"];
									$putdata=array();
									array_push($putdata,$updateField);
									for($i=0;$i<sizeof($params);$i++){
											array_push($putdata,"");
							
								}
								array_push($putdata,"1");
								$editrcvdDetail = call_user_func_array(array($db,'editasalu'), $putdata);
						
							
							}
						}
					}
				}else{
					$response["error"] = true;
					$response["status"] ="error";
					$response["message"] = "Oops! An error occurred while deleting collection information";
					$response["err"]=$editDetail;
				}
	

			}else{
				$response["error"] = true;
				$response["status"] ="error";
				$response["message"] = "No collection found with given chiti";
				echoRespnse(201, $response);
				return;
			}
			$params = $db->putFunctionParam("chiti");
			$updateField = array();
			$updateField["id"] = $id;
			$putdata=array();
			array_push($putdata,$updateField);
			for($i=0;$i<sizeof($params);$i++){
				array_push($putdata,"");

			}
				array_push($putdata,"1");
			$editchitiDetail = call_user_func_array(array($db,'editchiti'), $putdata);
			if($editchitiDetail['status'] == SUCCESS){

				$response["error"] = false;
				$response["status"] ="success";
				$response["id"] =$id;
				$response["message"] = "Woot!,Successfully deleted Chiti and its collections";		
			}else{
				$response["error"] = true;
				$response["status"] ="error";
				$response["message"] = "Oops! An error occurred while deleting Chiti information";
				$response["err"]=$editchitiDetail;
			}
		}else{
			$response["error"] = true;
			$response["status"] ="error";
			$response["message"] = "No Chiti found with given ID";
		}


	echoRespnse(201, $response);
});
//delete chiti end


$app->put('/chiti/:id',function($id) use ($app){
	$r= json_decode($app->request->getBody());
	// echo json_encode($r);
	$db= new DbHandler();
	$getdata =array();
	$params = $db->getFunctionParam("chiti");
	for($i=0;$i<sizeof($params);$i++){
		if($params[$i]== "id"){
			array_push($getdata,$id);
		}else{
			array_push($getdata,"");
		}
	}

	$chitiDetail = call_user_func_array(array($db,'getchiti'),$getdata);
	if(sizeof($chitiDetail)>0){
		$params = $db->putFunctionParam("chiti");
		$updateField = array();
		$updateField["id"]= $id ;
		$putdata =array();
		array_push($putdata,$updateField);
		for($i=0;$i<sizeof($params);$i++){
			if(putParam($r,$params[$i])){
				array_push($putdata,putParam($r,$params[$i]));
			}else{
				array_push($putdata,"");
			}
		}
		array_push($putdata,"");
	}
	$editDetail = call_user_func_array(array($db,'editchiti'),$putdata);

	if($editDetail["status"] == SUCCESS){
		$customParams = array();
		if(putParam($r,"suri") != $chitiDetail[0]["suri"]){
			array_push($customParams,"suri");
		}
		if(putParam($r,"sowji") != $chitiDetail[0]["sowji"]){
			array_push($customParams,"sowji");
		} 
		if(putParam($r,"fullandevi") != $chitiDetail[0]["fullandevi"]){
			array_push($customParams,"fullandevi");
		}
		// echo putParam($r,"suri");
		// echo json_encode($customParams);
		if(sizeof($customParams)){
			$getdata =array();
			$params = $db->getFunctionParam("collection");
			for($i=0;$i<sizeof($params);$i++){
				if($params[$i]== "chiti"){
					array_push($getdata,$id);
				}else{
					array_push($getdata,"");
				}
			}

			$collectionDetail = call_user_func_array(array($db,'getcollection'),$getdata);
			if(sizeof($collectionDetail)>0){
				for($k=0;$k<sizeof($collectionDetail);$k++){
					$params = $db->putFunctionParam("collection");
					$updateField = array();
					$updateField["id"]= $collectionDetail[$k]["id"] ;
					$putdata =array();
					array_push($putdata,$updateField);
					for($i=0;$i<sizeof($params);$i++){
						for($m=0;$m<sizeof($customParams);$m++){
							// echo ($params[$i] == $customParams[$m]);
							if($params[$i] == $customParams[$m]){
								// echo "val->"; echo putParam($r,$params[$i]);
								array_push($putdata,putParam($r,$params[$i]));
							}else{
								array_push($putdata,"");
							}
						}
					}
					array_push($putdata,"");
					$editDetail = call_user_func_array(array($db,'editcollection'),$putdata);
				}
			}
			

		}
		$response["error"] = false;
		$response["status"] = "success";
		$response["id"] = $id;
		$response["message"] = "Woot! , successfully edited Chiti information";
	}else{
		$response["error"] = "true";
		$response["status"] = "success";
		$response ["message"] = "Oops! An error occured while editing Chiti information";
		$response["err"] = $editDetail;
	}
	
	echoRespnse(200, $response);
	
});

$app->put('/chitfund/:id',function($id) use ($app){
	$r= json_decode($app->request->getBody());
	$db= new DbHandler();
	$getdata =array();
	$params = $db->getFunctionParam("chitfund");
	for($i=0;$i<sizeof($params);$i++){
		if($params[$i]== "id"){
			array_push($getdata,$id);
		}else{
			array_push($getdata,"");
		}
	}

	$chitfundDetail = call_user_func_array(array($db,'getchitfund'),$getdata);
	if(sizeof($chitfundDetail)>0){
		$params = $db->putFunctionParam("chitfund");
		$updateField = array();
		$updateField["id"]= $id ;
		$putdata =array();
		array_push($putdata,$updateField);
		for($i=0;$i<sizeof($params);$i++){
			if(putParam($r,$params[$i])){
				array_push($putdata,putParam($r,$params[$i]));
			}else{
				array_push($putdata,"");
			}
		}
		array_push($putdata,"");
	}
	$editDetail = call_user_func_array(array($db,'editchitfund'),$putdata);

	if($editDetail["status"] == SUCCESS){
		$response["error"] = false;
		$response["status"] = "success";
		$response["id"] = $id;
		$response["message"] = "Woot! , successfully edited Chit Fund information";
	}else{
		$response["error"] = "true";
		$response["status"] = "success";
		$response ["message"] = "Oops! An error occured while editing Chit Fund information";
		$response["err"] = $editDetail;
	}
	
	echoRespnse(200, $response);
	
});

$app->get('/collection',function() use ($app){
	$response = array();
	$db =new DbHandler();
	$params = $db->getFunctionParam("collection");
	$getdata = array();
	for($i=0;$i<sizeof($params);$i++){
	
		if(getParams($app->request->get($params[$i]))|| (gettype($app->request->get($params[$i]))=="string" && $app->request->get($params[$i])== "0")){
			// echo $i; echo "->"; echo getParams($app->request->get($params[$i]));
			array_push($getdata,getParams($app->request->get($params[$i])));
		}else{
			array_push($getdata,"");
		}
	}	
	
	$collectionList = call_user_func_array(array($db,'getcollection'),$getdata);
	$collection= array();
	
	$outputfields = array("id","chiti","code","tYpe","status","chitiamount","date","amount","notes","sowji","sowjitotal","suri","fullandevi","iscountable","received","reverseid","receivedfrom","customer","customerFL","hami","haminame","rcvddate","created","updated");
	$qryfields = array("id","chiti","code","tYpe","status","chitiamount","date","amount","notes","sowji","sowjitotal","suri","fullandevi","iscountable","received","reverseid","receivedfrom","customer","customerFL","hami","haminame","rcvddate","created","updated");
	for($i=0;$i<sizeof($collectionList);$i++){
		$tmp = array();
		for($j=0;$j<sizeof($qryfields);$j++){
			if(isset($collectionList[$i][$outputfields[$j]])){
				$tmp[$qryfields[$j]] = $collectionList[$i][$qryfields[$j]];
			}
		}
		array_push($collection,$tmp);
	}
	$response["error"] = "false";
	$response["status"] = "success";
	$response["collection"] = $collection;
	$response["message"] = "Woot ! successfully retreived the CollectionList";
	echoRespnse (200, $response);
	
});

$app->get('/daybook',function() use ($app){
	$response = array();
	$db =new DbHandler();
	$date = $app->request->get("date");
	$daybook = array();
	$creditors = array();
	// $creditors["disp"]["rcvdamt"] = 0;
	// $creditors["disp"]["drcr"] = 0;
	// $creditors["disp"]["collection"] = 0;
	// $creditors["disp"]["cftrans"] = 0;
	$creditors["total"] = 0;
	$crcustomerids = array();
	//debtors variable
	$debitors = array();
	// $debitors["disp"]["drcr"] = 0;
	// $debitors["disp"]["cftrans"] = 0;
	$drcustomerids = array();
	$debitors["total"] = 0;
	
	
	// opbalance section
	$opbal = 0 ;
	$params = $db->getFunctionParam("interest");
	$getdata = array();
	for($a=0;$a<sizeof($params);$a++){
		if($params[$a] == "date"){
			$tmp = array();
			$tmp["op"] = "<";
			$tmp["value"] = $date;
			array_push($getdata,json_encode($tmp));
		}else if($params[$a] == "note"){
			$tmp = array();
			$tmp["op"] = "!=";
			$tmp["value"] = "interestcal";
			array_push($getdata,json_encode($tmp));
		}else if($params[$a] == "debit"){
			$tmp = array(); 
			$tmp["op"] = ">=";
			$tmp["value"] = 1;
			array_push($getdata,json_encode($tmp));
		}else if($params[$a] == "fields"){
			array_push($getdata,"sum(credit) as credittotal,sum(debit) as debittotal");
		}else{
			array_push($getdata,"");
		}
	}	
	
	$opinterestList = call_user_func_array(array($db,'getInterest'),$getdata);
	$opbal -= $opinterestList[0]["debittotal"];
	// echo "opbal->".$opbal."interest".$opinterestList[0]["debittotal"];
	
	$params = $db->getFunctionParam("drcr");
	$getdata = array();
	for($a=0;$a<sizeof($params);$a++){
		if($params[$a] == "date"){
			$tmp = array();
			$tmp["op"] = "<";
			$tmp["value"] = $date;
			array_push($getdata,json_encode($tmp));
		}else if($params[$a] == "note"){
			$tmp = array();
			$tmp["op"] = "!=";
			$tmp["value"] = "interestcal";
			array_push($getdata,json_encode($tmp));
		}else if($params[$a] == "showdaybook"){
			$tmp = array();
			$tmp["op"] = "!=";
			$tmp["value"] = 2;
			array_push($getdata,json_encode($tmp));
		}else if($params[$a] == "fields"){
			array_push($getdata,"sum(credit) as credittotal,sum(debit) as debittotal");
		}else{
			array_push($getdata,"");
		}
	}	
	
	$opdrcrList = call_user_func_array(array($db,'getdrcr'),$getdata);
	$opbal += $opdrcrList[0]["credittotal"];
	$opbal -= $opdrcrList[0]["debittotal"];
	// echo "opbal->".$opbal."drcr",$opdrcrList[0]["credittotal"].$opdrcrList[0]["debittotal"];
		
	$params = $db->getFunctionParam("cftrans");
	$getdata = array();
	for($a=0;$a<sizeof($params);$a++){
		if($params[$a] == "date"){
			$tmp = array();
			$tmp["op"] = "<";
			$tmp["value"] = $date;
			array_push($getdata,json_encode($tmp));
		}else if($params[$a] == "fields"){
			array_push($getdata,"sum(credit) as credit,sum(debit) as debit");
		}else{
			array_push($getdata,"");
		}
	}	
	
	$opcftransList = call_user_func_array(array($db,'getCfTrans'),$getdata);
	$opbal += $opcftransList[0]["credit"];
	$opbal -= $opcftransList[0]["debit"];
	// echo "opbal->".$opbal."cftrans".$opcftransList[0]["credit"].$opcftransList[0]["debit"];


	$params = $db->getFunctionParam("receivedamount");
	$getdata = array();
	for($a=0;$a<sizeof($params);$a++){
		if($params[$a] == "rcvddate"){
			$tmp = array();
			$tmp["op"] = "<";
			$tmp["value"] = $date;
			array_push($getdata,json_encode($tmp));
		}else if($params[$a] == "fields"){
			array_push($getdata,"sum(a.amount) as amount");
		}else{
			array_push($getdata,"");
		}
	}	
	
	$oprcvdamtList = call_user_func_array(array($db,'getreceivedamount'),$getdata);
	$opbal += $oprcvdamtList[0]["amount"];
	// echo json_encode($oprcvdamtList);
	// echo "opbal->".$opbal."rcvdamt".$oprcvdamtList[0]["amount"];
	
	$params = $db->getFunctionParam("chiti");
	$getdata = array();
	for($a=0;$a<sizeof($params);$a++){
		if($params[$a] == "date"){
			$tmp = array();
			$tmp["op"] = "<";
			$tmp["value"] = $date;
			array_push($getdata,json_encode($tmp));
		}else if($params[$a] == "fields"){
			array_push($getdata,"sum(amount) as amount,sum(ccomm) as ccomm,sum(suriccomm) as suriccomm");
		}else{
			array_push($getdata,"");
		}
	}	
	
	$opchititList = call_user_func_array(array($db,'getchiti'),$getdata);
	$opbal -= $opchititList[0]["amount"] - $opchititList[0]["ccomm"] - $opchititList[0]["suriccomm"] ;
	// echo "opbal->".$opbal."chiti".($opchititList[0]["amount"] - $opchititList[0]["ccomm"] - $opchititList[0]["suriccomm"]);
	// echo "opbal->".$opbal;//.json_encode($opchititList);

	
	//creditors section
	$notids = array();
	
	$params = $db->getFunctionParam("receivedamount");
	$getdata = array();
	for($b=0;$b<sizeof($params);$b++){
		if($params[$b] == "rcvddate"){
			array_push($getdata,$date);
		}else{
			array_push($getdata,"");
		}
	}
	
	$rcvdamtList = call_user_func_array(array($db,'getreceivedamount'),$getdata);
	if($rcvdamtList && sizeof($rcvdamtList)){
		for($c=0;$c<sizeof($rcvdamtList);$c++){
			if($rcvdamtList[$c]["colid"]){	
				array_push($notids,$rcvdamtList[$c]["colid"]);
			}
			array_push($crcustomerids,$rcvdamtList[$c]["customer"]);
		}
		$creditors["total"] += getsum($rcvdamtList,"amount");
	}

	// echo json_encode($notids);
	$params = $db->getFunctionParam("collection");
	$getdata = array();
	for($b=0;$b<sizeof($params);$b++){
		if($params[$b] == "id"){
			$tmp = array();
			$tmp["op"] = "Not In";
			$tmp["value"] = implode(',', $notids);
			array_push($getdata,json_encode($tmp));
		}else if($params[$b] == "rcvddate"){
			array_push($getdata,$date);
		}else{
			array_push($getdata,"");
		}
	}	
	
	$collectionList = call_user_func_array(array($db,'getcollection'),$getdata);
	if($collectionList && sizeof($collectionList)){
		for($f=0;$f<sizeof($collectionList);$f++){
			array_push($crcustomerids,$collectionList[$f]["receivedfrom"]);
		}
	}





	$params = $db->getFunctionParam("drcr");
	$getdata = array();
	for($b=0;$b<sizeof($params);$b++){
		if($params[$b] == "date"){
			array_push($getdata,$date);
		}else if($params[$b] == "showdaybook"){
			$tmp = array();
			$tmp["op"] = "!=";
			$tmp["value"] = 2;
			array_push($getdata,json_encode($tmp));
		}else if($params[$b] == "note"){
			$tmp = array();
			$tmp["op"] = "!=";
			$tmp["value"] = "interestcal";
			array_push($getdata,json_encode($tmp));
		}else{
			array_push($getdata,"");
		}
	}	
	
	$drcrList = call_user_func_array(array($db,'getdrcr'),$getdata);
	if($drcrList && sizeof($drcrList)){
		for($d=0;$d<sizeof($drcrList);$d++){
			if($drcrList[$d]["credit"] > 0){
				array_push($crcustomerids,$drcrList[$d]["customer"]);
				$creditors["total"] += $drcrList[$d]["credit"];
			}else if($drcrList[$d]["debit"] > 0){
				array_push($drcustomerids,$drcrList[$d]["customer"]);
				// echo "drcus".json_encode($drcustomerids);
				$debitors["total"] += $drcrList[$d]["debit"];
			}
		}
		// if($creditors["drcrlist"] && sizeof($creditors["drcrlist"]) > 0){
		// 	$creditors["disp"]["drcr"] = 1;				
		// }
		// if($debitors["drcrlist"] && sizeof($debitors["drcrlist"]) > 0){
		// 	$debitors["disp"]["drcr"] = 1;
		// }
	}
	// echo "drcr".$debitors["total"];


	$params = $db->getFunctionParam("cftrans");
	$getdata = array();
	for($b=0;$b<sizeof($params);$b++){
		if($params[$b] == "date"){
			array_push($getdata,$date);
		}else{
			array_push($getdata,"");
		}
	}		
	$cftransList = call_user_func_array(array($db,'getCfTrans'),$getdata);
	if($cftransList && sizeof($cftransList)){
		for($e=0;$e<sizeof($cftransList);$e++){
			if($cftransList[$e]["credit"] > 0){
				array_push($crcustomerids,$cftransList[$e]["maincus"]);
				$creditors["total"] += $cftransList[$e]["credit"];
			}else if($cftransList[$e]["debit"] > 0){
				array_push($drcustomerids,$cftransList[$e]["maincus"]);
				// echo "drcus".json_encode($drcustomerids);
				$debitors["total"] += $cftransList[$e]["debit"];
			}
		}
		// if($creditors["cftranslist"] && sizeof($creditors["cftranslist"]) > 0){
		// 	$creditors["disp"]["cftrans"] = 1;	
		// }
		// if($debitors["cftranslist"] && sizeof($debitors["cftranslist"]) > 0){
		// 	$debitors["disp"]["cftrans"] = 1;
		// }
	}

	// echo "cftrans".$debitors["total"];

	$params = $db->getFunctionParam("interest");
	$getdata = array();
	for($b=0;$b<sizeof($params);$b++){
		if($params[$b] == "date"){
			array_push($getdata,$date);
		}else if($params[$b] == "debit"){
			$tmp = array();
			$tmp["op"] = ">=";
			$tmp["value"] = "1";
			array_push($getdata,json_encode($tmp));
		}else{
			array_push($getdata,"");
		}
	}		
	$interestList = call_user_func_array(array($db,'getInterest'),$getdata);
	if($interestList && sizeof($interestList)){
		for($j=0;$j<sizeof($interestList);$j++){
			array_push($drcustomerids,$interestList[$j]["customer"]);
			// echo "drcus".json_encode($drcustomerids);
			$debitors["total"] += $interestList[$j]["debit"];
		}
		// if($creditors["cftranslist"] && sizeof($creditors["cftranslist"]) > 0){
		// 	$creditors["disp"]["cftrans"] = 1;	
		// }
		// if($debitors["cftranslist"] && sizeof($debitors["cftranslist"]) > 0){
		// 	$debitors["disp"]["cftrans"] = 1;
		// }
	}



	$params = $db->getFunctionParam("chiti");
	$getdata = array();
	for($b=0;$b<sizeof($params);$b++){
		if($params[$b] == "date"){
			array_push($getdata,$date);
		}else{
			array_push($getdata,"");
		}
	}		
	$chitiList = call_user_func_array(array($db,'getchiti'),$getdata);
	if($chitiList && sizeof($chitiList)){
		for($j=0;$j<sizeof($chitiList);$j++){
			if($chitiList[$j]["ccomm"] > 0 || $chitiList[$j]["suriccomm"] > 0 ){
				array_push($crcustomerids,$chitiList[$j]["customer"]);
			}
			array_push($drcustomerids,$chitiList[$j]["customer"]);
			// echo "drcus".json_encode($drcustomerids);
			$debitors["total"] += $chitiList[$j]["amount"];
			$creditors["total"] += $chitiList[$j]["ccomm"];
			$creditors["total"] += $chitiList[$j]["suriccomm"];
		}
	}


	// echo "interest".$debitors["total"];

	// echo json_encode($debitors);
	// echo json_encode($creditors);
	// echo $creditors["total"];
	if($crcustomerids && sizeof($crcustomerids)){
		$crcustomerids = array_unique($crcustomerids);
		$params = $db->getFunctionParam("customers");
		$getdata = array();
		for($b=0;$b<sizeof($params);$b++){
			// echo $params[$b]."-";
			if($params[$b] == "id"){
				$tmp = array();
				$tmp["op"] = "In";
				$tmp["value"] = implode(',', $crcustomerids);
				array_push($getdata,json_encode($tmp));
			}else if($params[$b] == "sort_by"){
				array_push($getdata,"a.firstname");
			}else if($params[$b] == "sort_order" ){
				array_push($getdata,"asc");
			}else{
				array_push($getdata,"");
			}
		}		
		// echo json_encode($getdata);
		$crcustomersList = call_user_func_array(array($db,'getcustomers'),$getdata);
		if($crcustomersList && sizeof($crcustomersList)){
			$creditors["customers"] = $crcustomersList;
		}
	}else{
		$creditors["customers"] = array();
	}


	if($drcustomerids && sizeof($drcustomerids)){
		// echo "drcus".json_encode($drcustomerids);
		$drcustomerids = array_unique($drcustomerids);
		$params = $db->getFunctionParam("customers");
		$getdata = array();
		for($b=0;$b<sizeof($params);$b++){
			// echo $b;
			if($params[$b] == "id"){
				$tmp = array();
				$tmp["op"] = "In";
				$tmp["value"] = implode(',', $drcustomerids);
				array_push($getdata,json_encode($tmp));
			}else if($params[$b] == "sort_by"){
				array_push($getdata,"a.firstname");
			}else if($params[$b] == "sort_order" ){
				array_push($getdata,"asc");
			}else{
				array_push($getdata,"");
			}
		}		
		$drcustomersList = call_user_func_array(array($db,'getcustomers'),$getdata);
		if($drcustomersList && sizeof($drcustomersList)){
			$debitors["customers"] = $drcustomersList;
		}		
	}else{
		$debitors["customers"] = array();
	}

	//will start making a sorted array 
	if($creditors["customers"] && sizeof($creditors["customers"])){
		for($g=0;$g<sizeof($creditors["customers"]);$g++){
			$creditors["customers"][$g]["disp"] = array();
			$creditors["customers"][$g]["total"] = 0;
	
			//rcvdamtlist 
			$creditors["customers"][$g]["disp"]["rcvdamt"] = 0 ;
			$creditors["customers"][$g]["rcvdamtlist"] = array();
			if($rcvdamtList && sizeof($rcvdamtList)){
				for($h=0;$h<sizeof($rcvdamtList);$h++){
					if($rcvdamtList[$h]["customer"] == $creditors["customers"][$g]["id"]){
						$creditors["customers"][$g]["disp"]["rcvdamt"] = 1;
						array_push($creditors["customers"][$g]["rcvdamtlist"],$rcvdamtList[$h]);
						$creditors["customers"][$g]["total"] += $rcvdamtList[$h]["amount"];
					}
				}
			}
			
	
			//collectionlist
			$creditors["customers"][$g]["disp"]["collection"] = 0 ;
			$creditors["customers"][$g]["collectionlist"] = array();
			if($collectionList && sizeof($collectionList)){
				for($f=0;$f<sizeof($collectionList);$f++){
					if($collectionList[$f]["receivedfrom"] == $creditors["customers"][$g]["id"]){
						$creditors["customers"][$g]["disp"]["collection"] = 1;
						array_push($creditors["customers"][$g]["collectionlist"],$collectionList[$f]);
					}
				}
			}
	
			//drcrList
			$creditors["customers"][$g]["disp"]["drcr"] = 0 ;
			$creditors["customers"][$g]["drcrlist"] = array();
			if($drcrList && sizeof($drcrList)){
				for($d=0;$d<sizeof($drcrList);$d++){
					if($drcrList[$d]["credit"] > 0 && $drcrList[$d]["customer"] == $creditors["customers"][$g]["id"]){
						array_push($creditors["customers"][$g]["drcrlist"],$drcrList[$d]);
						$creditors["customers"][$g]["disp"]["drcr"] = 1;
						$creditors["customers"][$g]["total"] += $drcrList[$d]["credit"];
						// $creditors["total"] += $drcrList[$d]["credit"];
					// }else if($drcrList[$d]["debit"] > 0 && $drcrList[$d]["customer"] == $debitors["customers"][$g]["id"]){
					// 	array_push($drcustomerids,$drcrList[$d]["customer"]);
					// 	array_push($debitors["drcrlist"],$drcrList[$d]);
					// 	$debitors["total"] += $drcrList[$d]["debit"];
					}
				}
				// if($creditors["drcrlist"] && sizeof($creditors["drcrlist"]) > 0){
				// 	$creditors["disp"]["drcr"] = 1;				
				// }
				// if($debitors["drcrlist"] && sizeof($debitors["drcrlist"]) > 0){
				// 	$debitors["disp"]["drcr"] = 1;
				// }
			}
		
			
			//cftransList
			$creditors["customers"][$g]["disp"]["cftrans"] = 0 ;
			$creditors["customers"][$g]["cftranslist"] = array();
			if($cftransList && sizeof($cftransList)){
				for($d=0;$d<sizeof($cftransList);$d++){
					if($cftransList[$d]["credit"] > 0 && $cftransList[$d]["maincus"] == $creditors["customers"][$g]["id"]){
						array_push($creditors["customers"][$g]["cftranslist"],$cftransList[$d]);
						$creditors["customers"][$g]["disp"]["cftrans"] = 1;
						$creditors["customers"][$g]["total"] += $cftransList[$d]["credit"];
						// $creditors["total"] += $cftransList[$d]["credit"];
					// }else if($cftransList[$d]["debit"] > 0 && $cftransList[$d]["customer"] == $debitors["customers"][$g]["id"]){
					// 	array_push($drcustomerids,$cftransList[$d]["customer"]);
					// 	array_push($debitors["cftranslist"],$cftransList[$d]);
					// 	$debitors["total"] += $cftransList[$d]["debit"];
					}
				}
			}
	
				//newchitiCComm
				$creditors["customers"][$g]["disp"]["ccomm"] = 0;
				$creditors["customers"][$g]["ccommlist"] = array();
				if($chitiList && sizeof($chitiList)){
					for($h=0;$h<sizeof($chitiList);$h++){
						if($chitiList[$h]["customer"] == $creditors["customers"][$g]["id"] && ($chitiList[$h]["ccomm"] > 0 || $chitiList[$h]["suriccomm"] > 0)){
							array_push($creditors["customers"][$g]["ccommlist"],$chitiList[$h]);
							$creditors["customers"][$g]["total"] += $chitiList[$h]["ccomm"];
							$creditors["customers"][$g]["total"] += $chitiList[$h]["suriccomm"];
						}
					}
					if($creditors["customers"][$g]["ccommlist"] && sizeof($creditors["customers"][$g]["ccommlist"])){
						$creditors["customers"][$g]["disp"]["ccomm"] = 1;
					}
				}
	
		
	
		} //end for of customers
	}


	if($debitors["customers"] && sizeof($debitors["customers"])){
		for($q=0;$q<sizeof($debitors["customers"]);$q++){
			//interestpaid
			$debitors["customers"][$q]["disp"]["interest"] = 0;
			$debitors["customers"][$q]["interestlist"] = array();
			$debitors["customers"][$q]["total"] = 0;

			if($interestList && sizeof($interestList)){
				for($h=0;$h<sizeof($interestList);$h++){
					if($interestList[$h]["customer"] == $debitors["customers"][$q]["id"]){
						array_push($debitors["customers"][$q]["interestlist"],$interestList[$h]);
						$debitors["customers"][$q]["total"] += $interestList[$h]["debit"];
					}
				}
				if($debitors["customers"][$q]["interestlist"] && sizeof($debitors["customers"][$q]["interestlist"])){
					$debitors["customers"][$q]["disp"]["interest"] = 1;
				}
			}

			//newchiti
			$debitors["customers"][$q]["disp"]["chiti"] = 0;
			$debitors["customers"][$q]["chitilist"] = array();
			if($chitiList && sizeof($chitiList)){
				for($h=0;$h<sizeof($chitiList);$h++){
					if($chitiList[$h]["customer"] == $debitors["customers"][$q]["id"]){
						array_push($debitors["customers"][$q]["chitilist"],$chitiList[$h]);
						$debitors["customers"][$q]["total"] += $chitiList[$h]["amount"];
					}
				}
				if($debitors["customers"][$q]["chitilist"] && sizeof($debitors["customers"][$q]["chitilist"])){
					$debitors["customers"][$q]["disp"]["chiti"] = 1;
				}
			}

			//drcrList
			$debitors["customers"][$q]["disp"]["drcr"] = 0 ;
			$debitors["customers"][$q]["drcrlist"] = array();
			if($drcrList && sizeof($drcrList)){
				for($d=0;$d<sizeof($drcrList);$d++){
					if($drcrList[$d]["debit"] > 0 && $drcrList[$d]["customer"] == $debitors["customers"][$q]["id"]){
						array_push($debitors["customers"][$q]["drcrlist"],$drcrList[$d]);
						$debitors["customers"][$q]["total"] += $drcrList[$d]["debit"];
					}
				}
				if($debitors["customers"][$q]["drcrlist"] && sizeof($debitors["customers"][$q]["drcrlist"])){
					$debitors["customers"][$q]["disp"]["drcr"] = 1;
				}
			}


			//cftransList
			$debitors["customers"][$q]["disp"]["cftrans"] = 0 ;
			$debitors["customers"][$q]["cftranslist"] = array();
			if($cftransList && sizeof($cftransList)){
				for($d=0;$d<sizeof($cftransList);$d++){
					if($cftransList[$d]["debit"] > 0 && $cftransList[$d]["maincus"] == $debitors["customers"][$q]["id"]){
						// echo "cusid-->".json_encode($debitors["customers"][$q]["id"]);
						array_push($debitors["customers"][$q]["cftranslist"],$cftransList[$d]);
						// echo json_encode($debitors["customers"][$q]["cftranslist"]);
						$debitors["customers"][$q]["disp"]["cftrans"] = 1;
						$debitors["customers"][$q]["total"] += $cftransList[$d]["debit"];
					
					}
				}
			}

		}//drcustomers
	}



	// $creditors["rcvdamtlist"] = array();
	// echo json_encode($creditors) ;
	// echo json_encode($debitors["customers"]) ;
	// echo "--->".$creditors["total"];
	// echo  "--->".$opbal;
	// $crcustomerids = array_merge($crcustomerids);
	// echo json_encode($crcustomerids);
	// $params = $db->getFunctionParam("collection");
	// $getdata = array();
	// for($i=0;$i<sizeof($params);$i++){
	
	// 	if(getParams($app->request->get($params[$i]))|| (gettype($app->request->get($params[$i]))=="string" && $app->request->get($params[$i])== "0")){
	// 		// echo $i; echo "->"; echo getParams($app->request->get($params[$i]));
	// 		array_push($getdata,getParams($app->request->get($params[$i])));
	// 	}else{
	// 		array_push($getdata,"");
	// 	}
	// }	
	
	// $collectionList = call_user_func_array(array($db,'getcollection'),$getdata);
	// $collection= array();
	
	// $outputfields = array("id","chiti","code","tYpe","status","chitiamount","date","amount","notes","sowji","sowjitotal","suri","fullandevi","iscountable","received","reverseid","receivedfrom","customer","customerFL","hami","haminame","rcvddate","created","updated");
	// $qryfields = array("id","chiti","code","tYpe","status","chitiamount","date","amount","notes","sowji","sowjitotal","suri","fullandevi","iscountable","received","reverseid","receivedfrom","customer","customerFL","hami","haminame","rcvddate","created","updated");
	// for($i=0;$i<sizeof($collectionList);$i++){
	// 	$tmp = array();
	// 	for($j=0;$j<sizeof($qryfields);$j++){
	// 		if(isset($collectionList[$i][$outputfields[$j]])){
	// 			$tmp[$qryfields[$j]] = $collectionList[$i][$qryfields[$j]];
	// 		}
	// 	}
	// 	array_push($collection,$tmp);
	// }
	$daybook["creditors"] = $creditors;
	$daybook["debitors"] = $debitors;
	$daybook["opbal"] = $opbal;

	$response["error"] = "false";
	$response["status"] = "success";
	$response["daybook"] = $daybook;
	$response["message"] = "Woot ! successfully retreived the CollectionList";
	echoRespnse (200, $response);
	
});



$app->get('/pendingchiti',function() use ($app){
	$response = array();
	$db =new DbHandler();

	$params = $db->getFunctionParam("chiti");
	$getdata = array();
	for($i=0;$i<sizeof($params);$i++){
		if(getParams($app->request->get($params[$i]))){
			array_push($getdata,getParams($app->request->get($params[$i])));
		}else{
			array_push($getdata,"");
		}
	}

	$pendingchitiList = call_user_func_array(array($db,'getchiti'), $getdata);	

	if($pendingchitiList && sizeof($pendingchitiList) > 0){
		$chitiids = array();
		for($i=0;$i<sizeof($pendingchitiList);$i++){
			array_push($chitiids,$pendingchitiList[$i]["id"]);
		}


		//get asalu and calculate remaining asalu of pending chiti's
		$getdata =array();
		$params = $db->getFunctionParam("asalu");
		for($i=0;$i<sizeof($params);$i++){
			if($params[$i]== "chiti"){
				$tmp = array();
				$tmp["op"] = "In";
				$tmp["value"] = implode(',', $chitiids);
				array_push($getdata,json_encode($tmp));
			}else if($params[$i]== "fields"){
				array_push($getdata,"sum(a.amount) as amount");
			}else if($params[$i]== "group_by"){
				array_push($getdata,"a.chiti");
			}else{
				array_push($getdata,"");
			}
		}

		$asaluDetail = call_user_func_array(array($db,'getasalu'),$getdata);
		
		
		$params= $db->getFunctionParam("collection");
		$getdata = array();
		for($i=0;$i<sizeof($params);$i++){
			if($params[$i]== "chiti"){
				$tmp = array();
				$tmp["op"] = "In";
				$tmp["value"] = implode(',', $chitiids);
				array_push($getdata,json_encode($tmp));
			}else if($params[$i]== "received"){
				array_push($getdata,"0");
			}else if($params[$i]== "fields"){
				array_push($getdata,"sum(a.amount) as amount,round(SUM(a.chiti)/a.chiti) as intpendingmonths,max(a.date) as date");
			}else if($params[$i]== "group_by"){
				array_push($getdata,"a.chiti");
			}else{
				array_push($getdata,"");
			}
		}
		$collectionList = call_user_func_array(array($db,'getcollection'), $getdata);
		
		if($collectionList && sizeof($collectionList)>0){
			$ttlcolids = "";
			for($t=0;$t<sizeof($collectionList);$t++){
				if(strlen($collectionList[$t]["colids"]) > 0){
					if($t == 0 || $ttlcolids == ""){
						$ttlcolids = $collectionList[$t]["colids"];
					}else{
						$ttlcolids .= ",". $collectionList[$t]["colids"];
					}
				}
			}
		}

		// echo "ttlids".$ttlcolids;

		$getrcvddata = array();
		$paramss = $db->getFunctionParam("receivedamount");
		for($m=0;$m<sizeof($paramss);$m++){
			if($paramss[$m] == "colid"){
				$tmp = array();
				$tmp["op"] = "In";
				$tmp["value"] = $ttlcolids;
				array_push($getrcvddata,json_encode($tmp));
			}else if($paramss[$m]== "fields"){
				array_push($getrcvddata,"sum(a.amount) as amount");
			}else if($paramss[$m]== "group_by"){
				array_push($getrcvddata,"a.chiti");
			}else{
				array_push($getrcvddata,"");
			}
		}
		
		$receivedDetail = call_user_func_array(array($db,'getreceivedamount'),$getrcvddata);
		

		// echo "hi->>"; echo json_encode($receivedDetail);

		
		for($i=0;$i<sizeof($pendingchitiList);$i++){
			//declaring new variable for pendingchitilist here
			$pendingchitiList[$i]["remainingasalu"] = $pendingchitiList[$i]["amount"];
			$pendingchitiList[$i]["remainingint"] = 0;
			$pendingchitiList[$i]["intpendingmonths"] = 0;
			$pendingchitiList[$i]["ttlintpendingmonths"] = 0;
			
			if($asaluDetail && sizeof($asaluDetail) > 0){
				for($k=0;$k<sizeof($asaluDetail);$k++){
					// echo "k=>".$k;
					if($pendingchitiList[$i]["id"] == $asaluDetail[$k]["chiti"]){
						$pendingchitiList[$i]["remainingasalu"] -= $asaluDetail[$k]["amount"];
						break;
					}
				}
				// echo $pendingchitiList[$i]["amount"];echo "==";echo $pendingchitiList[$i]["remainingasalu"];echo "--->";
			}

			if($collectionList && sizeof($collectionList)>0){
				for($m=0;$m<sizeof($collectionList);$m++){
					if($pendingchitiList[$i]["id"] == $collectionList[$m]["chiti"]){
						$pendingchitiList[$i]["remainingint"] += $collectionList[$m]["amount"];
						
						//Get Date difference as total difference
						$d1 = strtotime($collectionList[$m]["date"]." 00:00:00");
						$d2 = strtotime(date("Y/m/d")." 00:00:00");
						$totalSecondsDiff = abs($d1-$d2); //42600225
						$totalMonthsDiff  = Round($totalSecondsDiff/60/60/24/30); //16.43
						// $pendingchitiList[$i]["intpendingmonths"] = $totalMonthsDiff ."(".$collectionList[$m]["intpendingmonths"].")" . " = " . ($totalMonthsDiff + $collectionList[$m]["intpendingmonths"]);
						$pendingchitiList[$i]["intpendingmonths"] = $collectionList[$m]["intpendingmonths"];
						$pendingchitiList[$i]["ttlintpendingmonths"] = $totalMonthsDiff + $collectionList[$m]["intpendingmonths"];
						// $totalMinutesDiff = $totalSecondsDiff/60; //710003.75
						// $totalHoursDiff   = $totalSecondsDiff/60/60;//11833.39
						// $totalDaysDiff    = $totalSecondsDiff/60/60/24; //493.05
						// $totalMonthsDiff  = $totalSecondsDiff/60/60/24/30; //16.43
						// $totalYearsDiff   = $totalSecondsDiff/60/60/24/365; //1.35
						break;
					}
				}
			}

			if($receivedDetail && sizeof($receivedDetail)>0){
				for($n=0;$n<sizeof($receivedDetail);$n++){
					if($pendingchitiList[$i]["id"] == $receivedDetail[$n]["chiti"]){
						$pendingchitiList[$i]["remainingint"] -= $receivedDetail[$n]["amount"];
						break;
					}
				}
			}

		}



		$response['status'] = "success";
		$response["message"] = "Successfully fetched Pending Chiti's Data";
		$response["pendingchitilist"] = $pendingchitiList;
		echoRespnse(200, $response);

	}else{
		$response['status'] = "success";
		$response["message"] = "No Pending Chiti Found";
		$response["code"] = "NOTEXIST";
	}


});



$app->get('/firm', function() use($app){
	
	$response = array();
	
	// fetching all parties
	$db = new DbHandler();

	$params = $db->getFunctionParam("firm");
	$getdata = array();
	for($i=0;$i<sizeof($params);$i++){
			if(getParams($app->request->get($params[$i]))){
				array_push($getdata,getParams($app->request->get($params[$i])));
			}else{
				array_push($getdata,"");
			}
	}

	
	
	$firmList = call_user_func_array(array($db,'getFirms'), $getdata);	
	
	$firms=array();
	
	$outputfields = array("id","name","address","city","state","statename","postal","aadhar","gst","phno1","phno2","initialcash","presentbalance");
	$qryfields = array("id","name","address","city","state","statename","postal","aadhar","gst","phno1","phno2","initialcash","presentbalance");
	
	// looping through result and preparing tasks array
	for($i=0;$i<sizeOf($firmList);$i++){
		$tmp = array();		
		for($j = 0;$j<sizeof($qryfields);$j++){
		if(isset($firmList[$i][$outputfields[$j]])){
			$tmp[$qryfields[$j]] = $firmList[$i][$outputfields[$j]];
			}
		}
		array_push($firms, $tmp);
	}

	$getdata[sizeof($getdata)-3]="";$getdata[sizeof($getdata)-2]="";$getdata[sizeof($getdata)-1]=1;
	$response['status'] = "success";
	$response['total'] = call_user_func_array(array($db,'getFirms'), $getdata)[0]["count(*)"];
	
	$response["message"] = "Successfully fetched firms info";
	$response["count"] = sizeOf($firms);
	$response["firms"] =$firms;
	echoRespnse(200, $response);
	
});	

$app->get('/firm/:id', function($id) use($app){
	
	$response = array();
	$db = new DbHandler();

	
	$params = $db->getFunctionParam("firm");
	$getdata = array();
	for($i=0;$i<sizeof($params);$i++){
			if($params[$i] == "id"){
				array_push($getdata,$id);
			}else{
				array_push($getdata,"");
			}
	}
	
	$firmList = call_user_func_array(array($db,'getFirms'), $getdata);	
	
	$firms=array();
	
	if(sizeof($firmList)>0){
	$firm=array();
	
	
	$outputfields = array("id","name","address","city","state","statename","statecode","postal","aadhar","gst","phno1","phno2","initialcash","presentbalance","created","updated");
	$qryfields = array("id","name","address","city","state","statename","statecode","postal","aadhar","gst","phno1","phno2","initialcash","presentbalance","created","updated");
	
	// looping through result and preparing tasks array
	for($i=0;$i<sizeOf($firmList);$i++){
		$tmp = array();		
		for($j = 0;$j<sizeof($qryfields);$j++){
		if(isset($firmList[$i][$outputfields[$j]])){
			$tmp[$qryfields[$j]] = $firmList[$i][$outputfields[$j]];
			}
		}
		$firm = $tmp;
	}
	
	$params = $db->getFunctionParam("firmbank");
	$getdata = array();
	for($i=0;$i<sizeof($params);$i++){
			if($params[$i] == "firmid"){
				array_push($getdata,$id);
			}else{
				array_push($getdata,"");
			}
	}
	
	$bankList = call_user_func_array(array($db,'getFirmBank'), $getdata);	
	
	$banks=array();
	
	
	$outputfields = array("id","name","gst","branch","accno","accname","initialbalance","presentbalance","phno1","phon2","created","updated");
	$qryfields = array("id","name","gst","branch","accno","accname","initialbalance","presentbalance","phno1","phon2","created","updated");
	
	// looping through result and preparing tasks array
	for($i=0;$i<sizeOf($bankList);$i++){
		$tmp = array();		
		for($j = 0;$j<sizeof($qryfields);$j++){
		if(isset($bankList[$i][$outputfields[$j]])){
			$tmp[$qryfields[$j]] = $bankList[$i][$outputfields[$j]];
			}
		}
		array_push($banks,$tmp);
	}
	$firm["banks"] = $banks;

	$response['status'] = "success";
	$response["message"] = "Successfully fetched firm info";
	$response["firm"] =$firm;
	}else{
	$response['status'] = "success";
	$response["message"] = "No firm Exist with given id";
	$response["code"] = "NOTEXIST";
	
	}
	echoRespnse(200, $response);
	
});	


$app->delete('/firm/:id',  function($id) use ($app)
{
    $r = json_decode($app->request->getBody());
	$db = new DbHandler();
	$params = $db->getFunctionParam("firm");
	$getdata = array();
	for($i=0;$i<sizeof($params);$i++){
	   if($params[$i] == "id"){
	     array_push($getdata,$id);
	   }else{
	     array_push($getdata,"");
	   }
	}
	$cityDetail = call_user_func_array(array($db,'getFirms'), $getdata);

        if(sizeof($cityDetail)>0){
		$params = $db->putFunctionParam("firm");
		$updateField = array();
		$updateField["id"] = $id;
		$putdata=array();
		array_push($putdata,$updateField);
		for($i=0;$i<sizeof($params);$i++){
				array_push($putdata,"");

	}
				array_push($putdata,1);
		$editDetail = call_user_func_array(array($db,'editFirm'), $putdata);
	
		if($editDetail['status'] == SUCCESS){
			$response["error"] = false;
			$response["status"] ="success";
			$response["id"] =$id;
			$response["message"] = "Woot!,Successfully deleted firm information";
		}
		else{
			$response["error"] = true;
			$response["status"] ="error";
			$response["message"] = "Oops! An error occurred while deleting firm information";
			$response["err"]=$editDetail;
		}


        }else{
            $response["error"] = true;
	    	$response["status"] ="error";
	    	$response["message"] = "No User found with given ID";
        }
        echoRespnse(201, $response);

});
function verifyRequiredParams($required_fields) {

    $error = false;
    $error_fields = "";
    $request_params = array();
    $request_params = $_REQUEST;
	
    // Handling PUT request params
    if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
        $app = \Slim\Slim::getInstance();
        parse_str($app->request()->getBody(), $request_params);
    }
    foreach ($required_fields as $field) {
        if (!isset($request_params[$field]) || strlen(trim($request_params[$field])) <= 0) {
            $error = true;
            $error_fields .= $field . ', ';
        }
    }

    if ($error) {
        // Required field(s) are missing or empty
        // echo error json and stop the app
        $response = array();
        $app = \Slim\Slim::getInstance();
        $response["error"] = true;
        $response["message"] = 'Required field(s) ' . substr($error_fields, 0, -2) . ' is missing or empty';
        echoRespnse(400, $response);
        $app->stop();
    }
}



function echoRespnse($status_code, $response) {
    $app = \Slim\Slim::getInstance();
    // Http response code
    $app->status($status_code);

    // setting response content type to json
    $app->contentType('application/json');

    echo json_encode($response);
}

function updateTable($db,$opParam,$mainId,$outputfields,$getFunction,$syncdata,$putFunction,$id){
	$params = $db->getFunctionParam($opParam);
	$getparamdata = array();//$getexpensedata = array();
	for($k=0;$k<sizeof($params);$k++){
		if($params[$k] == $mainId){
			array_push($getparamdata,$id);
		}else{
			array_push($getparamdata,"");
		}
	}
	// echo $getFunction; echo json_encode($getparamdata);
	$olddata = call_user_func_array(array($db,$getFunction), $getparamdata);

	// echo "show";
	// echo json_encode($olddata);
	for($j=0;$j<sizeOf($olddata);$j++){	
		$action = "";
		$deletedData = true;//assume that this charge is been deleted
		$updateData = false;//assume that no changes is to be done for this charge
		if($syncdata){
			$newdata = array();
			$ind = getEditObject($olddata[$j]["id"],$syncdata);
			// echo json_encode($olddata[$j]["id"]); echo "--->"; echo $ind;
			if($ind>=0){//if charge exist then get the index
				$deletedData = false;// ass charge found so less chance of deleting
				$newdata = json_decode(json_encode($syncdata), True);
				for($k=0;$k<sizeOf($outputfields);$k++){
					if(!isset($newdata[$ind][$outputfields[$k]])){
						$newdata[$ind][$outputfields[$k]] = "";
					}
					if(!isset($olddata[$j][$outputfields[$k]])){
						$olddata[$j][$outputfields[$k]] = "";
					}
					if($olddata[$j][$outputfields[$k]] != $newdata[$ind][$outputfields[$k]]){
						$updateData = true;
						$action = "update";
						break;
					}
				}
				if($updateData){//if($action == "update")
					$params = $db->putFunctionParam($opParam);
					$updateField = array();
					$updateField["id"] = $olddata[$j]["id"];
					$putdata=array();
					array_push($putdata,$updateField);
						for($i=0;$i<sizeof($params);$i++){
							if(!isset($newdata[$ind][$params[$i]])){
								$newdata[$ind][$params[$i]] = "";
							}
							if($params[$i]!=$mainId){
								array_push($putdata,$newdata[$ind][$params[$i]]);
							}else{
								array_push($putdata,"");
							}
						}
					array_push($putdata,"");
					$editDetail = call_user_func_array(array($db,$putFunction), $putdata);
				}
				unset($syncdata[$ind]);
				$syncdata =  array_values($syncdata);
			}else{
				// echo json_encode($olddata[$j]);
				$deletedData = true;
			}
		}else{//if they removed the product from array
			$deletedData = true;
			$action = "delete";
		}
	
		if($deletedData){
			$params = $db->putFunctionParam($opParam);
			$updateField = array();
			$updateField["id"] = $olddata[$j]["id"];
			$putdata=array();
			array_push($putdata,$updateField);
			for($i=0;$i<sizeof($params);$i++){
				array_push($putdata,"");
			}
			array_push($putdata,1);
			$editDetail = call_user_func_array(array($db,$putFunction), $putdata);
		}	
	}
	$syncdata = json_decode(json_encode($syncdata), True);
	return $syncdata;
}




function postParams($param){
	if(isset($param)){
		
	return $param;
	}
	else{
		return "";
	}
}


function getsum($obj,$param){
	$total= 0;
	if($obj && sizeof($obj)){
		for ($q = 0; $q < sizeOf($obj); $q++) {
			$total += $obj[$q][$param];
		}
	}
	return $total;
}



function getParams($param){
	if(isset($param)){
		if(json_decode($param)){
		}
		return $param;
	}
	else{
		return "";	
	}
}

function putParam($data,$param){
	// if($param == "credit"){
	// 	echo "1->"; echo gettype($data->{$param}); 
	// }
	if(isset($data->{$param})){
		if(($data->{$param}=="") && (gettype($data->{$param}) == "string")){
			return "EMPTY_PARAM";
		}
		// if($param == "credit"){
		// 	echo "2->"; echo $data->{$param}; 
		// }
		return $data->{$param};
	}
	else{
		// if($param == "credit"){
		// 	echo "3->"; echo $data->{$param}; 
		// }
		return "";
	}
}


		$app->run();

	
?>