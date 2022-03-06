/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP not-ok-todo.tap bail > parsed 1`] = `
Array [
  Array [
    "comment",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "should be equivalent",
      "ok": false,
      "todo": "but we will fix it later",
    },
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "(unnamed assert)",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# Looks like you failed 1 test of 4.\\n",
  ],
  Array [
    "comment",
    "# todo: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 1,
      "failures": Array [],
      "ok": true,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 1,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP not-ok-todo.tap bail > stringified 1`] = `
# TAP emitted by Test::More 0.98
ok 1 - should be equal
not ok 2 - should be equivalent # TODO but we will fix it later
# boop
ok 3 - should be equal
ok 4 - (unnamed assert)
1..4
# Looks like you failed 1 test of 4.
# todo: 1

`

exports[`test/parser-stringify.js TAP not-ok-todo.tap bail > stringified flat 1`] = `
# TAP emitted by Test::More 0.98
ok 1 - should be equal
not ok 2 - should be equivalent # TODO but we will fix it later
# boop
ok 3 - should be equal
ok 4 - (unnamed assert)
1..4
# Looks like you failed 1 test of 4.
# todo: 1

`

exports[`test/parser-stringify.js TAP not-ok-todo.tap default settings > parsed 1`] = `
Array [
  Array [
    "comment",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "should be equivalent",
      "ok": false,
      "todo": "but we will fix it later",
    },
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "(unnamed assert)",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# Looks like you failed 1 test of 4.\\n",
  ],
  Array [
    "comment",
    "# todo: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 1,
      "failures": Array [],
      "ok": true,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 1,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP not-ok-todo.tap default settings > stringified 1`] = `
# TAP emitted by Test::More 0.98
ok 1 - should be equal
not ok 2 - should be equivalent # TODO but we will fix it later
# boop
ok 3 - should be equal
ok 4 - (unnamed assert)
1..4
# Looks like you failed 1 test of 4.
# todo: 1

`

exports[`test/parser-stringify.js TAP not-ok-todo.tap default settings > stringified flat 1`] = `
# TAP emitted by Test::More 0.98
ok 1 - should be equal
not ok 2 - should be equivalent # TODO but we will fix it later
# boop
ok 3 - should be equal
ok 4 - (unnamed assert)
1..4
# Looks like you failed 1 test of 4.
# todo: 1

`

exports[`test/parser-stringify.js TAP not-ok-todo.tap strict > parsed 1`] = `
Array [
  Array [
    "comment",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "should be equivalent",
      "ok": false,
      "todo": "but we will fix it later",
    },
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "(unnamed assert)",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# Looks like you failed 1 test of 4.\\n",
  ],
  Array [
    "comment",
    "# todo: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 1,
      "failures": Array [],
      "ok": true,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 1,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP not-ok-todo.tap strict > stringified 1`] = `
# TAP emitted by Test::More 0.98
ok 1 - should be equal
not ok 2 - should be equivalent # TODO but we will fix it later
# boop
ok 3 - should be equal
ok 4 - (unnamed assert)
1..4
# Looks like you failed 1 test of 4.
# todo: 1

`

exports[`test/parser-stringify.js TAP not-ok-todo.tap strict > stringified flat 1`] = `
# TAP emitted by Test::More 0.98
ok 1 - should be equal
not ok 2 - should be equivalent # TODO but we will fix it later
# boop
ok 3 - should be equal
ok 4 - (unnamed assert)
1..4
# Looks like you failed 1 test of 4.
# todo: 1

`

exports[`test/parser-stringify.js TAP not-ok-todo.tap strictBail > parsed 1`] = `
Array [
  Array [
    "comment",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "should be equivalent",
      "ok": false,
      "todo": "but we will fix it later",
    },
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "(unnamed assert)",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# Looks like you failed 1 test of 4.\\n",
  ],
  Array [
    "comment",
    "# todo: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 1,
      "failures": Array [],
      "ok": true,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 1,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP not-ok-todo.tap strictBail > stringified 1`] = `
# TAP emitted by Test::More 0.98
ok 1 - should be equal
not ok 2 - should be equivalent # TODO but we will fix it later
# boop
ok 3 - should be equal
ok 4 - (unnamed assert)
1..4
# Looks like you failed 1 test of 4.
# todo: 1

`

exports[`test/parser-stringify.js TAP not-ok-todo.tap strictBail > stringified flat 1`] = `
# TAP emitted by Test::More 0.98
ok 1 - should be equal
not ok 2 - should be equivalent # TODO but we will fix it later
# boop
ok 3 - should be equal
ok 4 - (unnamed assert)
1..4
# Looks like you failed 1 test of 4.
# todo: 1

`
