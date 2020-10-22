import React from 'react';
import SearchResults from './SearchResults';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import chai, { expect } from 'chai';

chai.use(chaiEnzyme());
configure({adapter: new Adapter()});

describe('SearchResults Function testing', () => {
    let searchResults = shallow(<SearchResults/>);

    beforeEach(() => {
        searchResults = shallow(<SearchResults/>);
    });

    it('render SearchResults properly', () => {
        expect(searchResults.find('.SearchResults')).to.containMatchingElement(<h2></h2>);
    });
});