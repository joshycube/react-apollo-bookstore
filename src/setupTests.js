import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-styled-components";

configure({ adapter: new Adapter() });

global.shallow = shallow;
global.mount = mount;
