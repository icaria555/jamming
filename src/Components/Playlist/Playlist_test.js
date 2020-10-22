import React from 'react';
import Playlist from './Playlist';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import chai, { expect } from 'chai';

chai.use(chaiEnzyme());
configure({adapter: new Adapter()});

describe('Playlist Function testing', () => {
    let playlist = shallow(<Playlist/>);

    beforeEach(() => {
        playlist = shallow(<Playlist/>);
    });

    it('render playlist properly', () => {
        expect(playlist.find('button')).to.have.className('Playlist-save');
    });
});