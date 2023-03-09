describe('пользовательский сценарий покупки auto_testqastudio_me ', function () 
{

// Напиши один длинный автотест для   https://testqastudio.me/
// а) Открой главную страницу   https://testqastudio.me/


// б) Открой карточку товара «БРОММС Двухместная кровать»
//cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail')
//cy.get('.post-11342 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link')
//



// в) Измени количество на 3шт. и положи в корзину
// г) Вернись на главную
// в) Открой карточку товара «КЛЛАРИОН Низкий столик» и добавь его в корзину
// д) Попробуй завершить покупку, заполнив остальные шаги
// е) Проверь, что покупка успешно совершенна


//*************************************************************************************


   it('пользовательский сценарий покупки БРОММС Двухместная кровать - 3шт, КЛЛАРИОН Низкий столик - 1шт', function () 
   {
      cy.fixture('data_testqastudio_me').then(data => 
      {


      cy.log('Переход на сайт');
      cy.visit(data.main_url);
      //cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
      // выбираем БРОММС Двухместная кровать
      cy.log('Выбираем товар');
      cy.get('.post-11342 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
      // увеличиваем количество
      cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
      cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
      //добавляем в корзину
      cy.log('Добавили в корзину');
      cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
      //проверяем, добавилось в корзину 3 шт
      cy.log('Проверили корзину');
      cy.get('.cart-panel-content > .modal-header > .modal-title').contains('Ваша Корзина (3)');
      cy.get('#cart-modal > .off-modal-layer').click(); // Сменить фокус, закрыть модальное окно
      // г) Вернись на главную
      cy.log('Переход на главную');
      cy.visit(data.main_url);
      // в) Открой карточку товара «КЛЛАРИОН Низкий столик» и добавь его в корзину
      cy.log('Выбираем товар');
      cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
      cy.log('Добавили в корзину');
      cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
      // д) Попробуй завершить покупку, заполнив остальные шаги
      cy.log('Оформляем заказ, заполняем форму');
      cy.get('.checkout').click();
      cy.get('.page-header__title').contains('Оформение заказа');
      cy.get('#billing_first_name').type(data.billing_first_name);
      cy.get('#billing_last_name').type(data.billing_last_name);
      cy.get('#billing_address_1').type(data.billing_address_1);
      cy.get('#billing_city').type(data.billing_city);
      cy.get('#billing_state').type(data.billing_state);
      cy.get('#billing_postcode').type(data.billing_postcode);
      cy.get('#billing_phone').type(data.billing_phone);
      cy.get('#billing_email').type(data.billing_email);
      cy.get('#place_order').click();
      cy.get('.woocommerce-notice').contains('Ваш заказ принят. Благодарим вас.');
      cy.visit(data.main_url);
   })
      cy.reload();
   })

//*************************************************************************************
// END   

})
