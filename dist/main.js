(() => {
  "use strict";
  var e = {
      426: (e, n, t) => {
        t.d(n, { Z: () => s });
        var o = t(81),
          r = t.n(o),
          a = t(645),
          i = t.n(a)()(r());
        i.push([
          e.id,
          "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nheader nav {\n  height: 100px;\n  box-shadow: 0px 3px 8px rgb(128, 128, 128, 0.4);\n}\n\nmain {\n  overflow: auto;\n  min-height: calc(100vh - 150px);\n  width: 100%;\n}\n\n.form-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.151);\n  backdrop-filter: blur(2px);\n}\n\nform {\n  position: relative;\n  width: 300px;\n  height: fit-content;\n  top: 50%;\n  left: 50%;\n  transform: translateY(-80%) translateX(-50%);\n  z-index: 999;\n  background-color: rgb(168, 164, 164);\n  border-radius: 10px;\n  box-shadow: 0 0px 15px 8px rgb(0 0 0 / 19%),\n    inset 0 0px 15px 8px rgba(0, 0, 0, 0.226);\n}\n\n.close-btn span {\n  cursor: pointer;\n}\n\n.form-control:focus {\n  border-color: transparent !important;\n  box-shadow: none !important;\n}\n\n.form-check-input {\n  border-color: transparent !important;\n  box-shadow: none !important;\n}\n\n#openForm {\n  background-color: rgb(190, 190, 190);\n}\n\n#openForm:hover {\n  background-color: rgb(212, 212, 212);\n  box-shadow: 0 0px 4px 1px rgba(168, 168, 168, 0.555),\n    inset 0 0px 5px 1px rgba(255, 255, 255, 0.555);\n  /* color:#FFF; */\n}\n\n#openForm:focus {\n  background-color: rgb(212, 212, 212);\n  box-shadow: 0 0px 4px 1px rgba(168, 168, 168, 0.555),\n    inset 0 0px 5px 1px rgba(255, 255, 255, 0.555);\n  outline: none !important;\n}\n\n.book-container {\n  width: calc(200px * 4);\n  margin: auto;\n}\n\n.book-card {\n  background-color: rgb(185, 184, 187);\n  height: 200px;\n  width: 180px;\n  margin: 10px;\n  border-radius: 4px;\n  box-shadow: inset 0 0px 15px 8px rgba(0, 0, 0, 0.178),\n    0 0px 10px 3px rgba(0, 0, 0, 0.233);\n}\n\n.book-card {\n  word-break: keep-all;\n}\n\n.book-options {\n  margin-top: auto;\n}\n\n.delete:hover {\n  cursor: pointer;\n  color: rgb(255, 255, 255);\n}\n\n.read-mark:hover {\n  cursor: pointer;\n  color: rgb(255, 255, 255);\n}\n\nfooter {\n  height: 50px;\n}\n\n@media screen and (max-width: 800px) {\n  .book-container {\n    width: calc(200px * 3);\n  }\n}\n\n@media screen and (max-width: 530px) {\n  .book-container {\n    width: calc(200px * 2);\n  }\n}\n\n@media screen and (max-width: 391px) {\n  .book-container {\n    width: calc(200px * 1);\n  }\n}\n",
          "",
        ]);
        const s = i;
      },
      645: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = "",
                  o = void 0 !== n[5];
                return (
                  n[4] && (t += "@supports (".concat(n[4], ") {")),
                  n[2] && (t += "@media ".concat(n[2], " {")),
                  o &&
                    (t += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {"
                    )),
                  (t += e(n)),
                  o && (t += "}"),
                  n[2] && (t += "}"),
                  n[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (n.i = function (e, t, o, r, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (o)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (i[c] = !0);
                }
              for (var d = 0; d < e.length; d++) {
                var l = [].concat(e[d]);
                (o && i[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = a)),
                  t &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = t))
                      : (l[2] = t)),
                  r &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = r))
                      : (l[4] = "".concat(r))),
                  n.push(l));
              }
            }),
            n
          );
        };
      },
      81: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      379: (e) => {
        var n = [];
        function t(e) {
          for (var t = -1, o = 0; o < n.length; o++)
            if (n[o].identifier === e) {
              t = o;
              break;
            }
          return t;
        }
        function o(e, o) {
          for (var a = {}, i = [], s = 0; s < e.length; s++) {
            var c = e[s],
              d = o.base ? c[0] + o.base : c[0],
              l = a[d] || 0,
              p = "".concat(d, " ").concat(l);
            a[d] = l + 1;
            var u = t(p),
              b = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== u) n[u].references++, n[u].updater(b);
            else {
              var m = r(b, o);
              (o.byIndex = s),
                n.splice(s, 0, { identifier: p, updater: m, references: 1 });
            }
            i.push(p);
          }
          return i;
        }
        function r(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, r) {
          var a = o((e = e || []), (r = r || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var s = t(a[i]);
              n[s].references--;
            }
            for (var c = o(e, r), d = 0; d < a.length; d++) {
              var l = t(a[d]);
              0 === n[l].references && (n[l].updater(), n.splice(l, 1));
            }
            a = c;
          };
        };
      },
      569: (e) => {
        var n = {};
        e.exports = function (e, t) {
          var o = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(t);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var n = document.createElement("style");
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      565: (e, n, t) => {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute("nonce", n);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var o = "";
                t.supports && (o += "@supports (".concat(t.supports, ") {")),
                  t.media && (o += "@media ".concat(t.media, " {"));
                var r = void 0 !== t.layer;
                r &&
                  (o += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (o += t.css),
                  r && (o += "}"),
                  t.media && (o += "}"),
                  t.supports && (o += "}");
                var a = t.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  n.styleTagTransform(o, e, n.options);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    n = {};
  function t(o) {
    var r = n[o];
    if (void 0 !== r) return r.exports;
    var a = (n[o] = { id: o, exports: {} });
    return e[o](a, a.exports, t), a.exports;
  }
  (t.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return t.d(n, { a: n }), n;
  }),
    (t.d = (e, n) => {
      for (var o in n)
        t.o(n, o) &&
          !t.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: n[o] });
    }),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (() => {
      class e {
        static renderBooks(e) {
          const n = document.querySelector(".book-container");
          n.innerHTML = "";
          let t = document.createDocumentFragment();
          e.forEach(function (e, n) {
            let o = document.createElement("div");
            o.setAttribute("class", "book-card d-flex flex-column"),
              o.setAttribute("data-index", n),
              (o.innerHTML = `\n                <div class="book-title pt-3 px-2 fw-bold text-center lh-sm fs-5">${
                e.bookName
              }</div>\n                <div class="book-author pt-2 px-2 text-center">${
                e.bookAuthor
              }</div>\n                <div class="book-pages pt-1 px-2 text-center fst-italic  text-muted">${
                e.bookPages
              } pages</div>\n                <div class="book-options d-flex justify-content-between py-3">\n                    <span class="material-icons-outlined ms-3 read-mark">\n                        ${
                e.bookRead ? "done" : "remove_red_eye"
              }\n                    </span>                    \n                    <span class="material-icons-outlined me-3 delete">\n                        delete\n                    </span>\n                </div>`),
              t.appendChild(o);
          }),
            n.appendChild(t);
        }
        static addBook(e, n) {
          const t = document.querySelector(".book-container"),
            o = document.createElement("div");
          o.setAttribute("class", "book-card d-flex flex-column"),
            0 === n.books.length && o.setAttribute("data-index", 0),
            o.setAttribute("data-index", n.books.length),
            (o.innerHTML = `\n                <div class="book-title pt-3 px-2 fw-bold text-center lh-sm fs-5">${
              e.bookName
            }</div>\n                <div class="book-author pt-2 px-2 text-center">${
              e.bookAuthor
            }</div>\n                <div class="book-pages pt-1 px-2 text-center fst-italic  text-muted">${
              e.bookPages
            } pages</div>\n                <div class="book-options d-flex justify-content-between py-3">\n                    <span class="material-icons-outlined ms-3 read-mark">\n                        ${
              e.bookRead ? "done" : "remove_red_eye"
            }\n                    </span>                    \n                    <span class="material-icons-outlined me-3 delete">\n                        delete\n                    </span>\n                </div>`),
            t.appendChild(o);
        }
        static removeBook(n) {
          document.querySelector(".book-container").removeChild(n),
            e.updateIdx();
        }
        static updateBook(e) {
          return "remove_red_eye" == e.innerText
            ? void (e.innerText = "done")
            : void (e.innerText = "remove_red_eye");
        }
        static showForm() {
          document.querySelector(".form-container").classList.toggle("d-none");
        }
        static updateIdx() {
          document
            .querySelector(".book-container")
            .querySelectorAll(".book-card")
            .forEach(function (e, n) {
              e.setAttribute("data-index", n);
            });
        }
      }
      class n {
        constructor(e, n, t, o = !1) {
          (this.bookName = e),
            (this.bookAuthor = n),
            (this.bookPages = t),
            (this.bookRead = o);
        }
      }
      var o = t(379),
        r = t.n(o),
        a = t(795),
        i = t.n(a),
        s = t(569),
        c = t.n(s),
        d = t(565),
        l = t.n(d),
        p = t(216),
        u = t.n(p),
        b = t(589),
        m = t.n(b),
        h = t(426),
        x = {};
      (x.styleTagTransform = m()),
        (x.setAttributes = l()),
        (x.insert = c().bind(null, "head")),
        (x.domAPI = i()),
        (x.insertStyleElement = u()),
        r()(h.Z, x),
        h.Z && h.Z.locals && h.Z.locals;
      let f = new (class {
        constructor() {
          null === localStorage.getItem("library")
            ? ((this.books = []),
              localStorage.setItem("library", JSON.stringify(this.books)))
            : (this.books = JSON.parse(localStorage.getItem("library")));
        }
        addBook(e) {
          this.books.push(e),
            localStorage.setItem("library", JSON.stringify(this.books));
        }
        removeBook(e) {
          this.books.splice(e, 1),
            localStorage.setItem("library", JSON.stringify(this.books));
        }
        updateBook(e) {
          this.books[e].bookRead
            ? (this.books[e].bookRead = !1)
            : (this.books[e].bookRead = !0);
        }
      })();
      const v = document.querySelector("#openForm"),
        k = document.querySelector("#addBook"),
        g = document.querySelector(".close-btn");
      document.addEventListener("DOMContentLoaded", () => {
        e.renderBooks(f.books);
      }),
        v.addEventListener("click", function () {
          e.showForm();
        }),
        g.addEventListener("click", () => {
          e.showForm();
        }),
        k.addEventListener("click", function () {
          let t = document.querySelector("#bookName").value,
            o = document.querySelector("#bookAuthor").value,
            r = document.querySelector("#bookPages").value,
            a = document.querySelector("#bookRead").checked,
            i = new n(t, o, r, a);
          e.addBook(i, f), f.addBook(i), e.showForm();
        }),
        document.addEventListener("click", (n) => {
          if (n.target.classList.contains("delete")) {
            let t = n.target.parentElement.parentElement;
            e.removeBook(t), f.removeBook(t.getAttribute("data-index"));
          }
        }),
        document.addEventListener("click", (n) => {
          if (n.target.classList.contains("read-mark")) {
            let t = n.target.parentElement.parentElement,
              o = n.target;
            e.updateBook(o), f.updateBook(t.getAttribute("data-index"));
          }
        });
    })();
})();
