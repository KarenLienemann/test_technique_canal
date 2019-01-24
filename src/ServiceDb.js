
//import fs from 'fs'
//import * as fse from 'fs-extra'

export default class ServiceDb  
{
  constructor(){
    this.filmData = "RIEN";
    this.api_key = "8d1c060853258bfb03fef4630d24d88b";
    this.language = "fr-FR";
    this.sort_by = "popularity.desc";
    this.page = "1";

    this.hostname = "api.themoviedb.org";
    this.path_basic = "/3/discover/movie";
    this.path_req = `api_key=${this.api_key}&language=${this.language}&sort_by=${this.sort_by}.desc&page=${this.page}`;
  }
  
  native() {

    var http = require("https");
    var options = {
      "method": "GET",
      "hostname": this.hostname,
      "port": null,
      "path": this.path_basic + "?" + this.path_req,
      "headers": {}
    };

    var req = http.request(options, function (res) {
      var chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function () {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
        //var json = JSON.stringify(body);
        //var fs = require('fs'); 
        //var fse = require('fs-extra'); 
        //fs.writeFile('test.json', JSON.stringify(body))
      });
    });

    req.write("{}");
    req.end();
  }

  request() {
    var request = require("request");
    var options = { method: 'GET',
      url: 'https://api.themoviedb.org/3/genre/movie/list',
      qs: 
       { language: this.language,
         api_key: this.api_key },
      body: '{}' };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      console.log(body);
    });
  }

  uni() {
    var unirest = require("unirest");
    var req = unirest("GET", "https://api.themoviedb.org/3/genre/movie/list");
    req.query({
      "language": this.language,
      "api_key": this.api_key
    });
      req.send("{}");
    req.end(function (res) {
      if (res.error) throw new Error(res.error);
      console.log(res.body);
    });
  }
}


