import http from 'http';
import date from './date.js';
import * as getURL from './getURL.js';

import initWebRoute from './route/webRoute.js';
import path from 'path';
app.use('/static',express.static(path.join(__dirname,'public')))


initWebRoute(app)

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    // res.write(date() + "<br>"); // Gọi hàm date()
    res.write(getURL.getPath(req)+"<br>");
    res.write(getURL.getParamsURL(req)+"<br>");
    // res.write('Hello KTPM0121, chúc bạn thành công với NodeJS');
    res.end();
}).listen(8080);
