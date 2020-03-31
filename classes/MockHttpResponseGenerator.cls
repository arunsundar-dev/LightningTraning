@isTest
global class MockHttpResponseGenerator implements HttpCalloutMock {
	global HTTPResponse respond(HTTPRequest req) {
        // Create a fake response
        if(req.getMethod() == 'GET'){
            HttpResponse res = new HttpResponse();
            res.setHeader('Content-Type', 'application/json');
            res.setBody('{"example":"test"}');
            res.setStatusCode(200);
            return res;
        } else if(req.getMethod() == 'POST'){
            HttpResponse res = new HttpResponse();
            res.setHeader('Content-Type', 'application/json');
            res.setBody('{"example":"test"}');
            res.setStatusCode(200);
            res.setStatus('SUCCESS');
            return res;
        }
        return null;
    }
}