// RxJS v6+
import { ajax } from 'rxjs/ajax';

// https://www.learnrxjs.io/learn-rxjs/operators/creation/ajax
// Example 1: Observable that emits the response object that is being returned from the request.

const siteUrl = `https://api.github.com/users?per_page=2`;

const responseAjax = ajax(siteUrl);

const subscribe = responseAjax.subscribe(
  (res) => console.log(res),
  (err) => console.error(err)
);
