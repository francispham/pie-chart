import ColorPicker from './ColorPicker';
import ReactDOM from 'react-dom';

describe('ColorPicker Component Tests', () => {
  // test('renders button', () => {
  //   render(<ColorPicker />);
  //   const button = screen.getByRole('button');
  //   expect(button).toBeInTheDocument();
  // });
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<ColorPicker />, container);
  })

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  })

  it('Render Button', () => { 
    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();
    const div = container.querySelector('.Color-picker');
    expect(div).toBeInTheDocument();
  });
})