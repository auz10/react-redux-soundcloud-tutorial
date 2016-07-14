import Stream from '.Presenter';
import { shallow } from 'enzyme';

describe('Steam', () => {

    const props = {
        tracks: [{ title: 'x' }, { title: 'y' }],
    };

    it('shows two elements', () => {
        const element = shallow(<Stream { ...props } />);

        expect(element.find('.track')).to.have.length(2);
    });
});