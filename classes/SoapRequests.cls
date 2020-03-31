public class SoapRequests {
    public static decimal addNumbers(){
        calculatorServices.CalculatorImplPort calculator = new  calculatorServices.CalculatorImplPort();
        Double x = 1.0;
        Double y = 2.0;
        Double result = calculator.doAdd(x,y);
        System.debug('addresult --'+result);
        return result;
    }
    
    public static decimal subtractNumbers(){
        calculatorServices.CalculatorImplPort calculator = new  calculatorServices.CalculatorImplPort();
        Double x = 20.0;
        Double y = 10.0;
        Double result = calculator.doSubtract(x,y);
        System.debug('subresult --'+result);
        return result;
    }
    
    public static decimal divideNumbers(){
        calculatorServices.CalculatorImplPort calculator = new  calculatorServices.CalculatorImplPort();
        Double x = 20.0;
        Double y = 10.0;
        Double result = calculator.doDivide(x,y);
        System.debug('divideresult --'+result);
        return result;
    }
}