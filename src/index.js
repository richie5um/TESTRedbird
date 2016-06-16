var proxy = require('redbird')({port: 8080});

proxy.register("localhost", "http://127.0.0.1:8081");
proxy.register("localhost/api", "http://ec2.aws.com/api");