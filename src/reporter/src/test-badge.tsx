import { Base } from '@tapjs/core'
import { Text } from 'ink'
import React, { FC } from 'react'

export interface TestBadgeOpts {
  test: Base
}

export const TestBadge: FC<TestBadgeOpts> = ({ test }) => {
  const { results, counts } = test
  if (!results) {
    return (
      <Text backgroundColor="yellow" color="#000" bold>
        {' RUNS '}
      </Text>
    )
  }
  const {
    ok,
    plan: { skipAll },
  } = results
  const { fail, todo, skip } = counts
  return !ok || !!fail ? (
    <Text backgroundColor="red" color="#fff" bold>
      {' FAIL '}
    </Text>
  ) : !!todo ? (
    <Text backgroundColor="#808" color="#fff" bold>
      {' TODO '}
    </Text>
  ) : !!skip || skipAll ? (
    <Text backgroundColor="blue" color="#fff" bold>
      {' SKIP '}
    </Text>
  ) : (
    <Text backgroundColor="#0a0" color="#000" bold>
      {' PASS '}
    </Text>
  )
}
