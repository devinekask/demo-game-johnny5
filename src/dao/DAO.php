<?php

class DAO {

  // Properties
  private static $dbHost = "ID276650_pabloscores.db.webhosting.be";
	private static $dbName = "ID276650_pabloscores";
	private static $dbUser = "ID276650_pabloscores";
	private static $dbPass = "plataoplomo1";
	private static $sharedPDO;
	protected $pdo;

  // Constructor
	function __construct() {

		if(empty(self::$sharedPDO)) {
			self::$sharedPDO = new PDO("mysql:host=" . self::$dbHost . ";dbname=" . self::$dbName, self::$dbUser, self::$dbPass);
			self::$sharedPDO->exec("SET CHARACTER SET utf8");
			self::$sharedPDO->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			self::$sharedPDO->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
		}

		$this->pdo =& self::$sharedPDO;

	}

  // Methods

}

 ?>
