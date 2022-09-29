import { Launcher } from '../app/Launcher';
import { Server } from '../app/Server/Server';

jest.mock('../app/Server/Server', () => {
    return {
        Server: jest.fn(() => {
            return {
                startServer: () => {
                    console.log('starting fake server!');
                }
            }
        })
    }
})

describe('Launcher test suite', () => {
    test('create server', () => {
        new Launcher();
        expect(Server).toBeCalled();
    });

    test('launch app', () => {
        const launchAppMock = jest.fn();
        Launcher.prototype.launchApp = launchAppMock;
        new Launcher().launchApp();
        expect(launchAppMock).toBeCalled();
    });
});