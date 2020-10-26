import React from 'react';
import App from './App';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import chai, { expect } from 'chai';

chai.use(chaiEnzyme());
configure({adapter: new Adapter()});

describe('App Function testing', () => {
    let app = shallow(<App />);

    beforeEach(() => {
        app = shallow(<App />);
    });

    it('render App properly', () => {
        
    });
});