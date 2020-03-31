@isTest
private class TestRestRequests {
	@isTest
    private static void testGetCallout(){
        Test.setMock(HttpCalloutMock.class, new MockHttpResponseGenerator());
        HttpResponse res = RestRequests.callGetResource();
        System.assertEquals(200, res.getStatusCode());
    }
    
    @isTest
    private static void testPostCallout(){
        Test.setMock(HttpCalloutMock.class, new MockHttpResponseGenerator());
        HttpResponse res = RestRequests.callPostResource();
        System.assertEquals(200, res.getStatusCode());
    }
}