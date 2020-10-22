import React from 'react';
import Track from './Track';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import chai, { expect } from 'chai';

chai.use(chaiEnzyme());
configure({adapter: new Adapter()});

describe('Track Function testing', () => {
    let track = shallow(<Track/>);

    beforeEach(() => {
        track = shallow(<Track/>);
    });

    it('render Track properly', () => {
        expect(track.find('button')).to.have.className('Track-action');
    });
});