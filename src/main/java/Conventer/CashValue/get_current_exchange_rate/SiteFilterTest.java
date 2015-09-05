package Conventer.CashValue.get_current_exchange_rate;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class SiteFilterTest {

    private static SiteFilter.UAH uah;
    private static SiteFilter.USD usd;
    private static SiteFilter.RUB rub;
    private static SiteFilter.EUR eur;
    private static SiteFilter.PLN pln;

    @Before
    public void setUp() throws Exception {
        SiteFilter sf = new SiteFilter();
        uah = new SiteFilter.UAH();
        usd = new SiteFilter.USD();
        rub = new SiteFilter.RUB();
        pln = new SiteFilter.PLN();
        eur = new SiteFilter.EUR();

    }


   @Test
    public void verifyValues(){
/*перевіряєме дійсне*/
        /*UAH*/
/*-----------------------UAH BUY--------------------*/
        assertEquals(uah.getBuyEUR(),"0,0538");

        assertEquals(uah.getBuyPLN(),"0,2296");

        assertEquals(uah.getBuyRUB(),"3,9233");

        assertEquals(uah.getBuyUSD(),"0,0635");
/*-------------------------------------------------*/

/*-----------------------UAH BUY--------------------------*/

       assertEquals(uah.getSellEUR(),"0,0535");
       assertEquals(uah.getSellPLN(),"0,2281");
       assertEquals(uah.getSellRUB(),"3,8788");
       assertEquals(uah.getSellUSD(),"0,0631");
   }

}