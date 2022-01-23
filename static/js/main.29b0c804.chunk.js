(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{29:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(21),i=n.n(c),s=n(8),o=(n(29),n(24)),l=n(13),u=n(2),p=n(3),m=n(20),_=n(19),d=n(14),b=n(15),j="popup_opened",f="edit-avatar",h="add-place",O="edit-profile",g="\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...",x="black-box",v="https://mesto.nomoreparties.co/v1/cohort-25/",k="d8d84bac-32d7-42f9-a622-bbe14f1aa9f5",C="application/json",N="https://auth.nomoreparties.co/",y=function(){function e(t){Object(d.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(b.a)(e,[{key:"_fetchPath",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a={method:t,headers:this._headers};return"POST"!==t&&"PATCH"!==t||(a.body=JSON.stringify(n)),fetch("".concat(this._baseUrl).concat(e),a).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}}]),e}(),S=function(e){Object(m.a)(n,e);var t=Object(_.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"getUserInfo",value:function(){return this._fetchPath("users/me","GET")}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;return this._fetchPath("users/me","PATCH",{name:t,about:n})}},{key:"setUserAvatar",value:function(e){return this._fetchPath("users/me/avatar","PATCH",{avatar:e})}},{key:"getInitialCards",value:function(){return this._fetchPath("cards","GET")}},{key:"addCard",value:function(e){var t=e.name,n=e.link;return this._fetchPath("cards","POST",{name:t,link:n})}},{key:"deleteCard",value:function(e){return this._fetchPath("cards/".concat(e),"DELETE")}},{key:"changeLikeCardStatus",value:function(e,t){return this._fetchPath("cards/likes/".concat(e),t?"DELETE":"PUT")}}]),n}(y),T=function(e){Object(m.a)(n,e);var t=Object(_.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"_makeAuthHeaders",value:function(e){this._authHeaders={"Content-Type":C,Authorization:"Bearer ".concat(e)}}},{key:"register",value:function(e){var t=e.email,n=e.password;return this._fetchPath("signup","POST",{email:t,password:n})}},{key:"signIn",value:function(e){var t=e.email,n=e.password;return this._fetchPath("signin","POST",{email:t,password:n})}},{key:"checkToken",value:function(e){var t=this._headers;this._makeAuthHeaders(e),this._headers=this._authHeaders;var n=this._fetchPath("users/me","GET");return this._headers=t,this._makeAuthHeaders(""),n}}]),n}(y),L=new S({baseUrl:v,headers:{authorization:k,"Content-Type":C}}),P=new T({baseUrl:N,headers:{"Content-Type":C}}),E=n.p+"static/media/logo.03b78ada.svg",w=n(0);function I(e){return Object(w.jsxs)("header",{className:"header body__element",children:[Object(w.jsx)("img",{src:E,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f mesto Russia",className:"header__logo"}),Object(w.jsxs)(p.d,{children:[Object(w.jsx)(p.b,{exact:!0,path:"/",children:Object(w.jsxs)("div",{className:"header__container",children:[Object(w.jsx)("p",{className:"header__text",children:e.email&&e.email}),Object(w.jsx)(s.b,{to:"sign-in",onClick:e.onLogout,className:"page__link page__link_size_adaptive page__link_color_gray transparent transparent_amount_more",children:"\u0412\u044b\u0439\u0442\u0438"})]})}),Object(w.jsx)(p.b,{path:"/sign-up",children:Object(w.jsx)(s.b,{to:"/sign-in",className:"page__link page__link_size_adaptive page__link_color_white transparent transparent_amount_more",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(w.jsx)(p.b,{path:"/sign-in",children:Object(w.jsx)(s.b,{to:"/sign-up",className:"page__link page__link_size_adaptive page__link_color_white transparent transparent_amount_more",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})]})]})}var U=r.a.createContext();function q(e){var t=Object(a.useContext)(U),n=e.card.likes.some((function(e){return e._id===t._id})),r=e.card.owner._id===t._id;return Object(w.jsxs)("li",{className:"place",children:[r?Object(w.jsx)("button",{className:"place__remove-btn transparent transparent_amount_more",type:"button","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u043c\u0435\u0441\u0442\u0430",onClick:function(){e.onCardDelete(e.card)}}):"",Object(w.jsx)("img",{src:e.card.link,alt:"\u0424\u043e\u0442\u043e ".concat(e.card.name),className:"place__photo flip",onClick:function(){e.onCardClick(e.card)}}),Object(w.jsx)("h2",{className:"place__name",children:e.card.name}),Object(w.jsx)("button",{className:"place__like-btn ".concat(n?"place__like-btn_selected":""," transparent transparent_amount_less"),type:"button","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u043b\u0430\u0439\u043a \u0441\u0435\u0440\u0434\u0435\u0447\u043a\u043e \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u043c\u0435\u0441\u0442\u0430",onClick:function(){e.onCardLike(e.card)}}),Object(w.jsx)("p",{className:"place__number-of-likes",children:e.card.likes.length})]})}function A(e){var t=Object(a.useContext)(U);return Object(w.jsxs)("main",{className:"content body__element",children:[Object(w.jsxs)("section",{className:"profile body__element",children:[Object(w.jsxs)("div",{className:"profile__pic-info-container",children:[Object(w.jsxs)("div",{className:"profile__pic-container",children:[Object(w.jsx)("img",{src:t.avatar,alt:"\u0444\u043e\u0442\u043e \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430",className:"profile__pic"}),Object(w.jsx)("button",{className:"profile__avatar-edit-button transparent transparent_amount_much-more",type:"button","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0430\u0432\u0430\u0442\u0430\u0440\u0430",onClick:e.onEditAvatar})]}),Object(w.jsxs)("div",{className:"profile__info",children:[Object(w.jsxs)("div",{className:"profile__name-edit-wrap",children:[Object(w.jsx)("h1",{className:"profile__name",children:t.name}),Object(w.jsx)("button",{className:"profile__edit-button transparent transparent_amount_more",type:"button","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f",onClick:e.onEditProfile})]}),Object(w.jsx)("p",{className:"profile__description",children:t.about})]})]}),Object(w.jsx)("button",{className:"profile__add-button transparent transparent_amount_more",type:"button","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u043c\u0435\u0441\u0442\u0430",onClick:e.onAddPlace})]}),Object(w.jsx)("section",{className:"places body__element",children:Object(w.jsx)("ul",{className:"places__list body__element",children:e.cards.map((function(t){return Object(w.jsx)(q,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})}function D(){return Object(w.jsx)("footer",{className:"footer body__element",children:Object(w.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 \u041c\u0430\u043a\u0441\u0438\u043c \u0422\u043e\u043b\u0441\u0442\u043e\u043a\u043e\u0440\u044b\u0439"})})}function B(e){return Object(w.jsx)("div",{className:"popup popup_type_".concat(e.name," popup_transparent_medium ").concat(e.isOpen&&j),children:Object(w.jsxs)("div",{className:"page__container",children:[Object(w.jsx)("button",{className:"popup__container-close-btn transparent transparent_amount_more",type:"button","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u043f\u043e\u043f\u0430\u043f\u0430",onClick:e.onClose}),Object(w.jsxs)("form",{name:e.name,className:"page__form",onSubmit:e.onSubmit,children:[Object(w.jsx)("h2",{className:"page__form-title ".concat(e.onlyTitle?"page__form-title_onlytitle":""),children:e.formTitle}),e.children,Object(w.jsx)("button",{className:"page__form-submit-btn transparent transparent_amount_much-more",type:"submit",children:e.isSaving?g:e.submitButtonText})]})]})})}function H(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),s=Object(u.a)(i,2),o=s[0],l=s[1],p=Object(a.useContext)(U);Object(a.useEffect)((function(){c(p.name),l(p.about)}),[p,e.isOpen]);return Object(w.jsxs)(B,{name:O,formTitle:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submitButtonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:r,about:o})},isSaving:e.isSaving,children:[Object(w.jsx)("input",{id:"popup__profile-name-input",type:"text",name:"profileName",className:"page__form-text",placeholder:"\u0416\u0430\u043a-\u0418\u0432 \u041a\u0443\u0441\u0442\u043e",minLength:"2",maxLength:"40",required:"required",value:r,onChange:function(e){c(e.target.value)}}),Object(w.jsx)("span",{className:"popup__profile-name-input-error page__form-text-error",children:"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435."}),Object(w.jsx)("input",{id:"popup__profile-description-input",type:"text",name:"profileDescription",className:"page__form-text",placeholder:"\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043e\u043a\u0435\u0430\u043d\u0430",minLength:"2",maxLength:"200",required:"required",value:o,onChange:function(e){l(e.target.value)}}),Object(w.jsx)("span",{className:"popup__profile-description-input-error page__form-text-error",children:"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435."})]})}function z(e){var t=Object(a.useRef)();return Object(w.jsxs)(B,{name:f,formTitle:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submitButtonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},isSaving:e.isSaving,children:[Object(w.jsx)("input",{ref:t,id:"popup__profile-avatar-url-input",type:"url",name:"avatarUrl",className:"page__form-text",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:"required"}),Object(w.jsx)("span",{className:"popup__profile-avatar-url-input-error page__form-text-error",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0430\u0432\u0430\u0442\u0430\u0440\u0430."})]})}function F(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),s=Object(u.a)(i,2),o=s[0],l=s[1];Object(a.useEffect)((function(){!1===e.isOpen&&(c(""),l(""))}),[e.isOpen]);return Object(w.jsxs)(B,{name:h,formTitle:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submitButtonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){e.onAddPlace(t,{name:r,link:o})},isSaving:e.isSaving,children:[Object(w.jsx)("input",{id:"popup__place-name-input",type:"text",name:"placeName",className:"page__form-text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",required:"required",value:r,onChange:function(e){c(e.target.value)}}),Object(w.jsx)("span",{className:"popup__place-name-input-error page__form-text-error",children:"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435."}),Object(w.jsx)("input",{id:"popup__place-url-input",type:"url",name:"placeUrl",className:"page__form-text",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:"required",value:o,onChange:function(e){l(e.target.value)}}),Object(w.jsx)("span",{className:"popup__place-url-input-error page__form-text-error",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0441\u0430\u0439\u0442\u0430."})]})}function R(e){return Object(w.jsx)(B,{formTitle:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submitButtonText:"\u0414\u0430",isOpen:e.isOpen,onClose:e.onClose,onSubmit:e.onSubmit,onlyTitle:!0,isSaving:e.isSaving})}function G(e){return Object(w.jsx)("div",{className:"popup popup_type_show-image popup_transparent_slightly ".concat(e.card.link?j:""),children:Object(w.jsxs)("div",{className:"page__container",children:[Object(w.jsx)("button",{className:"popup__container-close-btn transparent transparent_amount_more",type:"button","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u043f\u043e\u043f\u0430\u043f\u0430",onClick:e.onClose}),Object(w.jsx)("img",{src:e.card.link,alt:"\u0424\u043e\u0442\u043e ".concat(e.card.name),className:"popup__photo",onClick:e.card.onClick}),Object(w.jsx)("p",{className:"popup__photo-description",children:e.card.name})]})})}function J(e){return Object(w.jsx)("div",{className:"enter",children:Object(w.jsx)("div",{className:"page__container page__container_theme_".concat(x),children:Object(w.jsxs)("form",{name:e.name,className:"page__form page__form_theme_".concat(x),onSubmit:e.onSubmit,children:[Object(w.jsx)("h2",{className:"page__form-title page__form-title_theme_".concat(x),children:e.formTitle}),e.children&&e.children.filter((function(e){return!e.props.className.includes("page__form-bottom-text")})),Object(w.jsx)("button",{className:"page__form-submit-btn page__form-submit-btn_theme_".concat(x," transparent transparent_amount_near-max"),type:"submit",children:e.submitButtonText}),e.children&&e.children.filter((function(e){return e.props.className.includes("page__form-bottom-text")}))]})})})}function M(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),o=Object(u.a)(i,2),l=o[0],p=o[1];return Object(w.jsxs)(J,{name:"register-form",formTitle:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",submitButtonText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",onSubmit:function(t){t.preventDefault(),e.onRegister(r,l),c(""),p("")},children:[Object(w.jsx)("input",{id:"enter__register-email-input",type:"email",name:"registerEmail",className:"page__form-text page__form-text_theme_black-box",placeholder:"Email",minLength:"3",maxLength:"254",required:"required",value:r,onChange:function(e){c(e.target.value)}}),Object(w.jsx)("span",{className:"enter__register-email-input-error page__form-text-error",children:"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435."}),Object(w.jsx)("input",{id:"enter__register-password-input",type:"password",name:"registerPassword",className:"page__form-text page__form-text_theme_black-box",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",minLength:"8",maxLength:"64",required:"required",value:l,onChange:function(e){p(e.target.value)}}),Object(w.jsx)("span",{className:"enter__register-password-input-error page__form-text-error",children:"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435."}),Object(w.jsxs)("p",{className:"page__form-bottom-text page__form-bottom-text_theme_black-box",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(w.jsx)(s.b,{to:"/sign-in",className:"page__link page__link_size_small page__link_color_white transparent transparent_amount_more",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}function K(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),s=Object(u.a)(i,2),o=s[0],l=s[1];return Object(w.jsxs)(J,{name:"login-form",formTitle:"\u0412\u0445\u043e\u0434",submitButtonText:"\u0412\u043e\u0439\u0442\u0438",onSubmit:function(t){t.preventDefault(),e.onLogin(r,o),c(""),l("")},children:[Object(w.jsx)("input",{id:"enter__login-email-input",type:"email",name:"loginEmail",className:"page__form-text page__form-text_theme_black-box",placeholder:"Email",minLength:"3",maxLength:"254",required:"required",value:r,onChange:function(e){c(e.target.value)}}),Object(w.jsx)("span",{className:"enter__login-email-input-error page__form-text-error",children:"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435."}),Object(w.jsx)("input",{id:"enter__login-password-input",type:"password",name:"loginPassword",className:"page__form-text page__form-text_theme_black-box",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",minLength:"8",maxLength:"64",required:"required",value:o,onChange:function(e){l(e.target.value)}}),Object(w.jsx)("span",{className:"enter__login-password-input-error page__form-text-error",children:"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435."})]})}var Q=n.p+"static/media/success_icon.1b6082f8.svg",V=n.p+"static/media/failure_icon.df8eddf6.svg";function W(e){return Object(w.jsx)("div",{className:"popup popup_type_info-tooltip popup_transparent_slightly ".concat(e.isOpen?j:""),children:Object(w.jsxs)("div",{className:"page__container page__container_type_fixed-size-adaptive",children:[Object(w.jsx)("button",{className:"popup__container-close-btn transparent transparent_amount_more",type:"button","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u043f\u043e\u043f\u0430\u043f\u0430",onClick:e.onClose}),e.successful?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("img",{src:Q,className:"popup__confirm-icon",alt:"\u0438\u043a\u043e\u043d\u043a\u0430 \u0443\u0441\u043f\u0435\u0445\u0430"}),Object(w.jsx)("p",{className:"popup__confirm-text",children:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"})]}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("img",{src:V,className:"popup__confirm-icon",alt:"\u0438\u043a\u043e\u043d\u043a\u0430 \u043e\u0448\u0438\u0431\u043a\u0438"}),Object(w.jsx)("p",{className:"popup__confirm-text",children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})]})})}var X=r.a.createContext();function Y(e){return Object(a.useContext)(X).isLoggedIn?Object(w.jsx)(p.b,Object(l.a)({},e)):Object(w.jsx)(p.a,{to:"/sign-in"})}function Z(){var e={link:"",name:"",likes:[],_id:"",createdAt:"",owner:""},t=Object(a.useState)(!1),n=Object(u.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(!1),s=Object(u.a)(i,2),m=s[0],_=s[1],d=Object(a.useState)(!1),b=Object(u.a)(d,2),j=b[0],f=b[1],h=Object(a.useState)(!1),O=Object(u.a)(h,2),g=O[0],x=O[1],v=Object(a.useState)(!1),k=Object(u.a)(v,2),C=k[0],N=k[1],y=Object(a.useState)(e),S=Object(u.a)(y,2),T=S[0],E=S[1],q=Object(a.useState)(e),B=Object(u.a)(q,2),J=B[0],Q=B[1],V=Object(a.useState)(!1),Z=Object(u.a)(V,2),$=Z[0],ee=Z[1],te=Object(a.useState)(!1),ne=Object(u.a)(te,2),ae=ne[0],re=ne[1],ce=Object(a.useState)({name:"",about:"",avatar:"",_id:"",cohort:""}),ie=Object(u.a)(ce,2),se=ie[0],oe=ie[1],le=Object(a.useState)([]),ue=Object(u.a)(le,2),pe=ue[0],me=ue[1],_e=Object(a.useContext)(X).isLoggedIn,de=function(){c(!1),_(!1),f(!1),x(!1),E(e),Q(e),ee(!1)};Object(a.useEffect)((function(){var e=function(e){"Escape"===e.key&&de()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]),Object(a.useEffect)((function(){_e&&Promise.all([L.getUserInfo(),L.getInitialCards()]).then((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];oe(n),me(a)})).catch((function(e){console.log(e)}))}),[_e]);var be=function(){f(!0)},je=function(){c(!0)},fe=function(){_(!0)},he=function(e){E(e)};function Oe(e){var t=e.likes.some((function(e){return e._id===se._id}));L.changeLikeCardStatus(e._id,t).then((function(t){me((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)}))}function ge(e){x(!0),Q(e)}var xe=function(e){var t=e.name,n=e.about;N(!0),L.setUserInfo({name:t,about:n}).then((function(e){oe(e),de()})).catch((function(e){console.log(e)})).finally((function(){N(!1)}))},ve=function(e){var t=e.avatar;N(!0),L.setUserAvatar(t).then((function(e){var n=Object(l.a)({},se);n.avatar=t,oe(n),de()})).catch((function(e){console.log(e)})).finally((function(){N(!1)}))},ke=function(e,t){var n=t.name,a=t.link;e.preventDefault(),N(!0),L.addCard({name:n,link:a}).then((function(e){me((function(t){return[e].concat(Object(o.a)(t))})),de()})).catch((function(e){console.log(e)})).finally((function(){N(!1)}))},Ce=function(e){e.preventDefault(),N(!0),L.deleteCard(J._id).then((function(e){me((function(e){return e.filter((function(e){return e._id!==J._id}))})),de()})).catch((function(e){return console.log(e)})).finally((function(){N(!1)}))},Ne=Object(p.g)(),ye=Object(a.useContext)(X).setupIsLoggedIn,Se=Object(a.useState)(""),Te=Object(u.a)(Se,2),Le=Te[0],Pe=Te[1];Object(a.useEffect)((function(){var e=localStorage.getItem("email");e&&Pe(e)}),[Pe]);var Ee=function(e,t){P.signIn({email:e,password:t}).then((function(t){t.token&&(localStorage.setItem("token",t.token),localStorage.setItem("email",e),Pe(e),ye(!0),Ne.push("/"))})).catch((function(e){re(!1),ee(!0)}))},we=function(e,t){P.register({email:e,password:t}).then((function(e){re(!0),Ne.push("/sign-in")})).catch((function(e){re(!1)})).finally((function(e){ee(!0)}))};return Object(w.jsx)(U.Provider,{value:se,children:Object(w.jsxs)("div",{className:"page body__element",children:[Object(w.jsx)(I,{onLogout:function(){localStorage.removeItem("token"),localStorage.removeItem("email"),ye(!1)},email:Le}),Object(w.jsxs)(p.d,{children:[Object(w.jsx)(Y,{exact:!0,path:"/",render:function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(A,{onEditProfile:je,onAddPlace:fe,onEditAvatar:be,onCardClick:he,cards:pe,onCardLike:Oe,onCardDelete:ge}),Object(w.jsx)(D,{}),Object(w.jsx)(H,{isOpen:r,onClose:de,onUpdateUser:xe,isSaving:C}),Object(w.jsx)(F,{isOpen:m,onClose:de,onAddPlace:ke,isSaving:C}),Object(w.jsx)(z,{isOpen:j,onClose:de,onUpdateAvatar:ve,isSaving:C}),Object(w.jsx)(G,{card:T,onClose:de}),Object(w.jsx)(R,{isOpen:g,onClose:de,onSubmit:Ce,isSaving:C})]})}}),Object(w.jsx)(p.b,{path:"/sign-up",render:function(){return Object(w.jsx)(M,{onRegister:we})}}),Object(w.jsx)(p.b,{path:"/sign-in",render:function(){return Object(w.jsx)(K,{onLogin:Ee})}}),Object(w.jsx)(p.b,{path:"*",children:Object(w.jsx)(p.a,{to:"/"})})]}),Object(w.jsx)(W,{isOpen:$,onClose:de,successful:ae})]})})}var $=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};function ee(e){var t=e.children,n=Object(a.useState)(!1),r=Object(u.a)(n,2),c=r[0],i=r[1],s=Object(p.g)();return Object(a.useEffect)((function(){var e=localStorage.getItem("token");e&&P.checkToken(e).then((function(e){localStorage.setItem("email",e.data.email),i(!0)})).catch((function(e){console.log(e)}))})),Object(a.useEffect)((function(){c&&s.push("/")}),[c,s]),Object(w.jsx)(X.Provider,{value:{isLoggedIn:c,setupIsLoggedIn:function(e){i(e)}},children:t})}i.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(s.a,{children:Object(w.jsx)(ee,{children:Object(w.jsx)(Z,{})})})}),document.getElementById("root")),$()}},[[39,1,2]]]);
//# sourceMappingURL=main.29b0c804.chunk.js.map