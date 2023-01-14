import FBattle from './FBattle'
import renderer from 'react-test-renderer'

test('renders a snapshot', () => {
  const tree = renderer.create(<FBattle />).toJSON()
  expect(tree).toMatchSnapshot()
})