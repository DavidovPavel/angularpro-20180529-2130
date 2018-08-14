# angularpro-20180529-2130

https://github.com/javascriptru/angularpro-20180529-2130


Как задавать вопрос:
- групповой чат
- @stepan
- мне лично slack/email


Дополнительные Вопросы:

- injectable({providedIn: Module}) - https://github.com/angular/angular/issues/24082
- without doCheck - https://stackblitz.com/edit/angular-cez5ej?file=src%2Fapp%2Fone%2Fone.component.ts
- изменение формата named outlets url (nope, source) - https://github.com/angular/angular/blob/master/packages/router/src/url_handling_strategy.ts
- forRoot/forChild - https://stackoverflow.com/questions/40498081/routermodule-forrootroutes-vs-routermodule-forchildroutes
- validators.compose() vs array validators - https://angular.io/api/forms/Validators#compose
- combineLatest pipable?  - https://www.learnrxjs.io/operators/combination/combinelatest.html
- живой пример на flatMap
- инициализировать стэйт ngrx через SSR - https://github.com/ngrx/platform/issues/101
- ngrx/router
- unit-tests how to run one test - fit() / fdescribe()

##### Максим М.

- В случае нескольких приложений на странице (bootstrap нескольких модулей), как лучше организовать взаимодействие между ними? Есть ли механизм вызова changeDetection сразу всех модулей, ведь ChangeDetectorRef, так же как и ApplicationRef у них разный.

- Angular elements / web components - best practices использования, сделать пример.

- PWA на практике. Сделать пример service workers.

- Server side rendering. Сделать пример, можно на node.js.

- Работа с mobile и touch - какие best practices. Hammer.js - много багов, приведу лишь несколько:

  1. Неверная очередь вызова колбеков
  2. Течет память (не очищается при destroy component)
  3. Неверно работает event object (нельзя отловить stopPropagation и т.д.)
  4. Автоматом всем блокам с touch events проставляются стили touch-action: none, которые блокируют работу пользователя с нативными возможностями браузера.
  и т.д.

  Какие альтернативы?

##### Андрей Алексеев

- Оптимизация производительности. Как работать с большими массивами данных, как построить список из сотен или тысяч компонентов, не обрекая пользователя на страдания. Пример элемента такого списка — превью товара (без фото) с несколькими действиями.

##### Александр Седых

- Динамическая темизация приложения при использовании в проекте scss, например. Лучшие практики?

- Повторное использование компонента в дереве ленивых модулей. Есть ли варианты, кроме вынесения этого компонента в отдельный модуль и импорта его, в последствии, во все ленивые модули?

##### Константин Скок

- JIT для "чайников"
- AOT для "чайников"
- Отличия JIT от AOT и почему для prod рекомендуетя использовать именно AOT - https://angular.io/guide/aot-compiler#why-compile-with-aot




Дополнительно

- RouteReuseStrategy
- IVY ChangeDetection






Первое занятие - 5.06


# Задания на курс
- сделать структурную директиву "ACL": в нее передается какие роли могут иметь доступ к компоненту. Она через сервис смотрит роль текущего пользователя и прячет либо показывает элемент на странице.

- сделать прототип Dashboard странички, где может присуствовать до 20 разных компонентов/виджетов (сами компоненты сделать пустышками с текстом либо картинкой), а их набор и порядок/расположение задается сервром (сэмулировать асинхронный запрос)

- сделать pipe, который будет показывать timeAgo

- завернуть форму регистрации пользователя (стандартные поля) в angular-element. Сделать параметром: показывать минимальную форму или расширенную. Считывать событие успешного заполнения/отправки формы и ошибок формы.

- сделать "светофор" FormCotrol и к нему валидатор (красный - invalid)

- сделать свой Observable класс/конструктор