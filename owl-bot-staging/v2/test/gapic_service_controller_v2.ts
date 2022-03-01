// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import { describe, it } from 'mocha';
import * as servicecontrollerModule from '../src';

import {protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
    const filledObject = (instance.constructor as typeof protobuf.Message)
        .toObject(instance as protobuf.Message<T>, {defaults: true});
    return (instance.constructor as typeof protobuf.Message).fromObject(filledObject) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().rejects(error) : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().callsArgWith(2, error) : sinon.stub().callsArgWith(2, null, response);
}

describe('v2.ServiceControllerClient', () => {
    it('has servicePath', () => {
        const servicePath = servicecontrollerModule.v2.ServiceControllerClient.servicePath;
        assert(servicePath);
    });

    it('has apiEndpoint', () => {
        const apiEndpoint = servicecontrollerModule.v2.ServiceControllerClient.apiEndpoint;
        assert(apiEndpoint);
    });

    it('has port', () => {
        const port = servicecontrollerModule.v2.ServiceControllerClient.port;
        assert(port);
        assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
        const client = new servicecontrollerModule.v2.ServiceControllerClient();
        assert(client);
    });

    it('should create a client with gRPC fallback', () => {
        const client = new servicecontrollerModule.v2.ServiceControllerClient({
            fallback: true,
        });
        assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
        const client = new servicecontrollerModule.v2.ServiceControllerClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        assert.strictEqual(client.serviceControllerStub, undefined);
        await client.initialize();
        assert(client.serviceControllerStub);
    });

    it('has close method for the initialized client', done => {
        const client = new servicecontrollerModule.v2.ServiceControllerClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.initialize();
        assert(client.serviceControllerStub);
        client.close().then(() => {
            done();
        });
    });

    it('has close method for the non-initialized client', done => {
        const client = new servicecontrollerModule.v2.ServiceControllerClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        assert.strictEqual(client.serviceControllerStub, undefined);
        client.close().then(() => {
            done();
        });
    });

    it('has getProjectId method', async () => {
        const fakeProjectId = 'fake-project-id';
        const client = new servicecontrollerModule.v2.ServiceControllerClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
        const result = await client.getProjectId();
        assert.strictEqual(result, fakeProjectId);
        assert((client.auth.getProjectId as SinonStub).calledWithExactly());
    });

    it('has getProjectId method with callback', async () => {
        const fakeProjectId = 'fake-project-id';
        const client = new servicecontrollerModule.v2.ServiceControllerClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.auth.getProjectId = sinon.stub().callsArgWith(0, null, fakeProjectId);
        const promise = new Promise((resolve, reject) => {
            client.getProjectId((err?: Error|null, projectId?: string|null) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(projectId);
                }
            });
        });
        const result = await promise;
        assert.strictEqual(result, fakeProjectId);
    });

    describe('check', () => {
        it('invokes check without error', async () => {
            const client = new servicecontrollerModule.v2.ServiceControllerClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.api.servicecontrol.v2.CheckRequest());
            request.serviceName = '';
            const expectedHeaderRequestParams = "service_name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.api.servicecontrol.v2.CheckResponse());
            client.innerApiCalls.check = stubSimpleCall(expectedResponse);
            const [response] = await client.check(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.check as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes check without error using callback', async () => {
            const client = new servicecontrollerModule.v2.ServiceControllerClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.api.servicecontrol.v2.CheckRequest());
            request.serviceName = '';
            const expectedHeaderRequestParams = "service_name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.api.servicecontrol.v2.CheckResponse());
            client.innerApiCalls.check = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.check(
                    request,
                    (err?: Error|null, result?: protos.google.api.servicecontrol.v2.ICheckResponse|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.check as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes check with error', async () => {
            const client = new servicecontrollerModule.v2.ServiceControllerClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.api.servicecontrol.v2.CheckRequest());
            request.serviceName = '';
            const expectedHeaderRequestParams = "service_name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.check = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.check(request), expectedError);
            assert((client.innerApiCalls.check as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes check with closed client', async () => {
            const client = new servicecontrollerModule.v2.ServiceControllerClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.api.servicecontrol.v2.CheckRequest());
            request.serviceName = '';
            const expectedHeaderRequestParams = "service_name=";
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.check(request), expectedError);
        });
    });

    describe('report', () => {
        it('invokes report without error', async () => {
            const client = new servicecontrollerModule.v2.ServiceControllerClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.api.servicecontrol.v2.ReportRequest());
            request.serviceName = '';
            const expectedHeaderRequestParams = "service_name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.api.servicecontrol.v2.ReportResponse());
            client.innerApiCalls.report = stubSimpleCall(expectedResponse);
            const [response] = await client.report(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.report as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes report without error using callback', async () => {
            const client = new servicecontrollerModule.v2.ServiceControllerClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.api.servicecontrol.v2.ReportRequest());
            request.serviceName = '';
            const expectedHeaderRequestParams = "service_name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.api.servicecontrol.v2.ReportResponse());
            client.innerApiCalls.report = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.report(
                    request,
                    (err?: Error|null, result?: protos.google.api.servicecontrol.v2.IReportResponse|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.report as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes report with error', async () => {
            const client = new servicecontrollerModule.v2.ServiceControllerClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.api.servicecontrol.v2.ReportRequest());
            request.serviceName = '';
            const expectedHeaderRequestParams = "service_name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.report = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.report(request), expectedError);
            assert((client.innerApiCalls.report as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes report with closed client', async () => {
            const client = new servicecontrollerModule.v2.ServiceControllerClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.api.servicecontrol.v2.ReportRequest());
            request.serviceName = '';
            const expectedHeaderRequestParams = "service_name=";
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.report(request), expectedError);
        });
    });
});
