import React from 'react'
import { shallow } from 'enzyme'
import theme from 'arc-theme'
import Atom, * as styles from '.'

const wrap = (props = {}) => shallow(<Atom {...props} />)

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

describe('styles', () => {
  test('fontFamily', () => {
    expect(styles.fontFamily({ theme })).toBe(theme.fonts.primary)
  })

  test('color', () => {
    const props = {
      color: 'grayscale',
      reverse: false,
      theme
    }
    expect(styles.color(props)).toBe(theme.colors.grayscale[0])
    expect(styles.color({ ...props, reverse: true })).toBe(theme.reverseColors.grayscale[0])
    expect(styles.color({ ...props, color: 'primary' })).toBe(theme.colors.primary[1])
  })
})
