<?php
require_once __DIR__ . '/Controller.php';


class GameController extends Controller{

  function __construct(){
  }

  public function index(){
    $this->set('title','Pablo Escobar - Plata o Plomo');
  }

}
