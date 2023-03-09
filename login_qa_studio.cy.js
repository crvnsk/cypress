describe('Site login.qa.studio login password', function () 
{

        // cy.visit('https://login.qa.studio');
        // cy.get('#form > .header') // Окно форма логина
        // cy.get('#mail') //Поле ввода e-mail
        // cy.get('#pass') // Поле ввода пароля
        // cy.get('#loginButton') // Войти
        // cy.get('#forgotEmailButton') // Забыли пароль
        // cy.get('#messageHeader') // Авторизация прошла успешно
        // cy.get('#exitMessageButton > .exitIcon') // Закрыть окно

//*************************************************************************************
// 1.1 Напиши проверку на позитивный кейс авторизации:
// а) Ввести правильный логин
// б) Ввести правильный пароль
// в) Нажать войти
// г) Проверить нужный текст и наличие кнопки крестик

   it('Проверка авторизации с верным логином и паролем', function () 
   {
      cy.fixture('email_pwd_login_qa_studio').then(data => 
      {
         cy.visit(data.main_url);
         cy.get('#form > .header').contains('Форма логина');
         cy.get('#mail').type(data.validate_email);
         cy.get('#pass').type(data.validate_pwd);
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon'); 
         cy.get('#exitMessageButton > .exitIcon').click(); // Закрыть окно
      })
      cy.reload();
   })


//*************************************************************************************

// 1.2 Напиши автотест на проверку логики восстановления пароля:
// а) Нажать «Забыли пароль»  //cy.get('#forgotEmailButton') -> 
// б) Ввести любой имейл      //cy.get('#mailForgot') random_email
// cy.get('#restoreEmailButton')
// в) Проверка, что получили нужный текст и есть кнопка крестика
   //cy.get('#message') Успешно отправили пароль на e-mail
   //cy.get('#exitMessageButton > .exitIcon')


   it('Восстановление пароля', function () 
   {
      cy.fixture('email_pwd_login_qa_studio').then(data => 
      {
         cy.visit(data.main_url);
         cy.get('#form > .header').contains('Форма логина');
         cy.get('#forgotEmailButton').click();
         cy.get('#mailForgot').type(data.random_email);
         cy.get('#restoreEmailButton').click();
         cy.get('#message').contains('Успешно отправили пароль на e-mail');
         cy.get('#exitMessageButton > .exitIcon');
         cy.get('#exitMessageButton > .exitIcon').click(); // Закрыть окно
      })
      cy.reload();
   })
 
 //*************************************************************************************

// 1.3 Напиши проверку на негативный кейс авторизации:
// а) Ввести правильный логин
// б) Ввести НЕправильный пароль
// в) Нажать войти 
// г) Проверить нужный текст и наличие кнопки крестик cy.get('#message') 
   //                                                 Такого логина или пароля нет

   it('Проверка авторизации с верным логином и НЕ верным паролем', function () 
   {
      cy.fixture('email_pwd_login_qa_studio').then(data => 
      {
         cy.visit(data.main_url);
         cy.get('#form > .header').contains('Форма логина');
         cy.get('#mail').type(data.validate_email);
         cy.get('#pass').type(data.not_validate_pwd);
         cy.get('#loginButton').click();
         cy.get('#message').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon');
         cy.get('#exitMessageButton > .exitIcon').click(); // Закрыть окно
      })
      cy.reload();
   })
  
//*************************************************************************************

// 1.4 Напиши проверку на негативный кейс авторизации:
// а) Ввести НЕправильный логин
// б) Ввести правильный пароль
// в) Нажать войти
// г) Проверить нужный текст и наличие кнопки крестик  
   //cy.get('#message') Такого логина или пароля нет

 it('Проверка авторизации с Не верным логином и верным паролем', function () 
   {
      cy.fixture('email_pwd_login_qa_studio').then(data => 
      {
         cy.visit(data.main_url);
         cy.get('#form > .header').contains('Форма логина');
         cy.get('#mail').type(data.not_validate_email);
         cy.get('#pass').type(data.validate_pwd);
         cy.get('#loginButton').click();
         cy.get('#message').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon');
         cy.get('#exitMessageButton > .exitIcon').click(); // Закрыть окно
      })
      cy.reload();
   })

//*************************************************************************************

// 1.5 Напиши проверку на негативный кейс валидации:
// а) Ввести логин без @
// б) Ввести правильный пароль
// в) Нажать войти
// г) Проверить, что получаем текст с ошибкой
 //cy.get('#message') Нужно исправить проблему валидации

 it('Проверка авторизации c логином без at и верным паролем', function () 
   {
      cy.fixture('email_pwd_login_qa_studio').then(data => 
      {
         cy.visit(data.main_url);
         cy.get('#form > .header').contains('Форма логина');
         cy.get('#mail').type(data.not_at_validate_email);
         cy.get('#pass').type(data.validate_pwd);
         cy.get('#loginButton').click();
         cy.get('#message').contains('Нужно исправить проблему валидации');
         cy.get('#exitMessageButton > .exitIcon');
         cy.get('#exitMessageButton > .exitIcon').click(); // Закрыть окно
      })
      cy.reload();
   })


//*************************************************************************************

// 1.6 Напиши проверку на привидение к строчным буквам в логине:
// а) Ввести логин GerMan@Dolnikov.ru
// б) Ввести правильный пароль
// в) Нажать войти
// г) Проверить, что авторизация успешна (нужный текст и наличие кнопки крестик)
// cy.get('#message') Такого логина или пароля нет
// cy.get('#exitMessageButton > .exitIcon')


// В данном тестовом случае GerMan@Dolnikov.ru должен быть приведен к такой записи  .
// потому как поле для ввода имейла на клиенте должны приводить к строчным буквам
// соответственно, ожидаемый результат при вводе GerMan@Dolnikov.ru должен привести 
// к авториазции


// Разработчик допустил баг и это не реализовал. 
// Тест должен упасть — и это ок (то есть мы поймали баг, который допустил разработчик)

   it('Авторизация с привидение к строчным буквам в логине и верным паролем', function () 
   {
      cy.fixture('email_pwd_login_qa_studio').then(data => 
      {
         cy.visit(data.main_url);
         cy.get('#form > .header').contains('Форма логина');
         cy.get('#mail').type(data.propis_validate_email);
         cy.get('#pass').type(data.validate_pwd);
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon');
         cy.get('#exitMessageButton > .exitIcon').click(); // Закрыть окно
      })
      cy.reload();
   })

//*************************************************************************************
// END   

})
