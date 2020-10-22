import React from 'react';
import TrackList from './TrackList';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import chai, { expect } from 'chai';

chai.use(chaiEnzyme());
configure({adapter: new Adapter()});

describe('TrackList Function testing', () => {
    let trackList = shallow(<TrackList/>);

    beforeEach(() => {
        trackList = shallow(<TrackList/>);
    });

    it('render TrackList properly', () => {
        expect(trackList.find('div.TrackList')).to.exist;
    });
});