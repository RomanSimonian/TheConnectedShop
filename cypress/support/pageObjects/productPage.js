export class ProductPage{
    constructor() {
        this.url = 'https://theconnectedshop.com/products/';
        this.addToTheChartButton = 'button[class=\'ProductForm__AddToCart Button Button--secondary Button--full\']';
        this.chartCounter = 'span[class = \'Header__CartCount\']';
    }

    addToTheChart(){
        cy.get(this.addToTheChartButton).click();
    }
}
