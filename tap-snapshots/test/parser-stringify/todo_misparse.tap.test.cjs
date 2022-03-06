/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP todo_misparse.tap bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Hamlette",
      "ok": false,
      "todo": true,
    },
  ],
  Array [
    "comment",
    "# todo: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [],
      "ok": true,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
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

exports[`test/parser-stringify.js TAP todo_misparse.tap bail > stringified 1`] = `
1..1
not ok 1 - Hamlette # TODO
# todo: 1

`

exports[`test/parser-stringify.js TAP todo_misparse.tap bail > stringified flat 1`] = `
1..1
not ok 1 - Hamlette # TODO
# todo: 1

`

exports[`test/parser-stringify.js TAP todo_misparse.tap default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Hamlette",
      "ok": false,
      "todo": true,
    },
  ],
  Array [
    "comment",
    "# todo: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [],
      "ok": true,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
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

exports[`test/parser-stringify.js TAP todo_misparse.tap default settings > stringified 1`] = `
1..1
not ok 1 - Hamlette # TODO
# todo: 1

`

exports[`test/parser-stringify.js TAP todo_misparse.tap default settings > stringified flat 1`] = `
1..1
not ok 1 - Hamlette # TODO
# todo: 1

`

exports[`test/parser-stringify.js TAP todo_misparse.tap strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Hamlette",
      "ok": false,
      "todo": true,
    },
  ],
  Array [
    "comment",
    "# todo: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [],
      "ok": true,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
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

exports[`test/parser-stringify.js TAP todo_misparse.tap strict > stringified 1`] = `
1..1
not ok 1 - Hamlette # TODO
# todo: 1

`

exports[`test/parser-stringify.js TAP todo_misparse.tap strict > stringified flat 1`] = `
1..1
not ok 1 - Hamlette # TODO
# todo: 1

`

exports[`test/parser-stringify.js TAP todo_misparse.tap strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Hamlette",
      "ok": false,
      "todo": true,
    },
  ],
  Array [
    "comment",
    "# todo: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [],
      "ok": true,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
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

exports[`test/parser-stringify.js TAP todo_misparse.tap strictBail > stringified 1`] = `
1..1
not ok 1 - Hamlette # TODO
# todo: 1

`

exports[`test/parser-stringify.js TAP todo_misparse.tap strictBail > stringified flat 1`] = `
1..1
not ok 1 - Hamlette # TODO
# todo: 1

`
