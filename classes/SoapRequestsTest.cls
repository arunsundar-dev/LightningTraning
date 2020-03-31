@isTest
private class SoapRequestsTest {
	
    @isTest
    private static void testAddnumbers(){
        Test.setMock(WebServiceMock.class, new CalculatorCalloutMock());
        
        Decimal result = SoapRequests.addNumbers();
        system.assertEquals(3.0, result);
    }
}