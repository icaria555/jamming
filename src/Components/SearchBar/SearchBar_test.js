import React from 'react';
import SearchBar from './SearchBar';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import chai, { expect } from 'chai';

chai.use(chaiEnzyme());
configure({adapter: new Adapter()});

describe('SearchBar Function testing', () => {
    let searchBar = shallow(<SearchBar/>);

    beforeEach(() => {
        searchBar = shallow(<SearchBar/>);
    });

    it('render searchBar properly', () => {
        expect(searchBar.find('button')).to.have.className('SearchButton');
    });
});