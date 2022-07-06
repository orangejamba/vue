// let app = new Vue({
//   el: "#app",
//   data: {
//     message: "This is a parent component",
//   },
// });

// //실습 #1 -'todo-footer' 컴포넌트 전역 등록
// // <p>This is another child global component</p>를
// //template으로 갖는 컴포넌트 등록해보세요

// Vue.component("todo-footer", {
//   template: "<p>This is another child global component</p>",
// });

// //실습 #2 -'todo-list' 컴포넌트 지역 등록
// //<p>This is another child local component</p>를
// //  template으로 갖는 컴포넌트 등록해보세요

// let cmp2 = {
//   template: "<p>This is another child local component</p>",
// };

// new Vue({
//   el: "#app",
//   components: /* 지역컴퍼넌트 */ {
//     "todo-list": cmp2,
//   },
// });

//sibling-component를 이름으로 갖는 새로운 컴포넌트를 등록
//options:template, props

Vue.component("sibling-component", {
  props: ["propsdata"],
  template: "<p>{{propsdata}}</p>",
});

Vue.component("child-component", {
  props: ["propsdata"],
  template: "<p>{{propsdata}}</p>",
});

//data속성을 1개 더 지정하고 (예: anotherMessage) 임의의 문자열을 값으로 대입
//새로 지정한 data 속성은 위 sivling-component에 props로 전달합니다.

let app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue passed from Parent Component",
    anotherMessage: "Hello Vue passed from Parent Component22",
  },
});
