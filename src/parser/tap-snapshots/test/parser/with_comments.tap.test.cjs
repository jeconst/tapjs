/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.ts TAP with_comments.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# and stuff\\n",
  ],
  Array [
    "comment",
    "# and stuff\\n",
  ],
  Array [
    "line",
    "1..5 todo 1 2 4 5;\\n",
  ],
  Array [
    "extra",
    "1..5 todo 1 2 4 5;\\n",
  ],
  Array [
    "line",
    "# yeah, that\\n",
  ],
  Array [
    "comment",
    "# yeah, that\\n",
  ],
  Array [
    "line",
    "not ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "fail",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "# Failed test 1 in t/todo.t at line 9 *TODO*\\n",
  ],
  Array [
    "comment",
    "# Failed test 1 in t/todo.t at line 9 *TODO*\\n",
  ],
  Array [
    "line",
    "ok 2 # (t/todo.t at line 10 TODO?!)\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "# (t/todo.t at line 10 TODO?!)",
      "id": 2,
      "name": "# (t/todo.t at line 10 TODO?!)",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "# (t/todo.t at line 10 TODO?!)",
      "id": 2,
      "name": "# (t/todo.t at line 10 TODO?!)",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "# (t/todo.t at line 10 TODO?!)",
      "id": 2,
      "name": "# (t/todo.t at line 10 TODO?!)",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 3,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 3,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 3,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "not ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "fail",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "# Test 4 got: '0' (t/todo.t at line 12 *TODO*)\\n",
  ],
  Array [
    "comment",
    "# Test 4 got: '0' (t/todo.t at line 12 *TODO*)\\n",
  ],
  Array [
    "line",
    "#   Expected: '1' (need more tuits)\\n",
  ],
  Array [
    "comment",
    "#   Expected: '1' (need more tuits)\\n",
  ],
  Array [
    "line",
    "ok 5 # (t/todo.t at line 13 TODO?!)\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "# (t/todo.t at line 13 TODO?!)",
      "id": 5,
      "name": "# (t/todo.t at line 13 TODO?!)",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "# (t/todo.t at line 13 TODO?!)",
      "id": 5,
      "name": "# (t/todo.t at line 13 TODO?!)",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "# (t/todo.t at line 13 TODO?!)",
      "id": 5,
      "name": "# (t/todo.t at line 13 TODO?!)",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "# woo\\n",
  ],
  Array [
    "comment",
    "# woo\\n",
  ],
  Array [
    "line",
    "# test count(5) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# test count(5) != plan(null)\\n",
  ],
  Array [
    "line",
    "# failed 3 of 5 tests\\n",
  ],
  Array [
    "comment",
    "# failed 3 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 3,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 1,
          "name": "",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 4,
          "name": "",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
        Object {
          "tapError": "no plan",
        },
      ],
      "ok": false,
      "pass": 3,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
]
`

exports[`test/parser.ts TAP with_comments.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# and stuff\\n",
  ],
  Array [
    "comment",
    "# and stuff\\n",
  ],
  Array [
    "line",
    "1..5 todo 1 2 4 5;\\n",
  ],
  Array [
    "extra",
    "1..5 todo 1 2 4 5;\\n",
  ],
  Array [
    "line",
    "# yeah, that\\n",
  ],
  Array [
    "comment",
    "# yeah, that\\n",
  ],
  Array [
    "line",
    "not ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "fail",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "# Failed test 1 in t/todo.t at line 9 *TODO*\\n",
  ],
  Array [
    "comment",
    "# Failed test 1 in t/todo.t at line 9 *TODO*\\n",
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "",
          "id": 1,
          "name": "",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
]
`
