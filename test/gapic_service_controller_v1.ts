// Copyright 2021 Google LLC
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
import {describe, it} from 'mocha';
import * as servicecontrollerModule from '../src';

import {protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (
    instance.constructor as typeof protobuf.Message
  ).toObject(instance as protobuf.Message<T>, {defaults: true});
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

describe('v1.ServiceControllerClient', () => {
  it('has servicePath', () => {
    const servicePath =
      servicecontrollerModule.v1.ServiceControllerClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      servicecontrollerModule.v1.ServiceControllerClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = servicecontrollerModule.v1.ServiceControllerClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client = new servicecontrollerModule.v1.ServiceControllerClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new servicecontrollerModule.v1.ServiceControllerClient({
      fallback: true,
    });
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client = new servicecontrollerModule.v1.ServiceControllerClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.serviceControllerStub, undefined);
    await client.initialize();
    assert(client.serviceControllerStub);
  });

  it('has close method', () => {
    const client = new servicecontrollerModule.v1.ServiceControllerClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.close();
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new servicecontrollerModule.v1.ServiceControllerClient({
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
    const client = new servicecontrollerModule.v1.ServiceControllerClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon
      .stub()
      .callsArgWith(0, null, fakeProjectId);
    const promise = new Promise((resolve, reject) => {
      client.getProjectId((err?: Error | null, projectId?: string | null) => {
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
      const client = new servicecontrollerModule.v1.ServiceControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.api.servicecontrol.v1.CheckRequest()
      );
      request.serviceName = '';
      const expectedHeaderRequestParams = 'service_name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.api.servicecontrol.v1.CheckResponse()
      );
      client.innerApiCalls.check = stubSimpleCall(expectedResponse);
      const [response] = await client.check(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.check as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes check without error using callback', async () => {
      const client = new servicecontrollerModule.v1.ServiceControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.api.servicecontrol.v1.CheckRequest()
      );
      request.serviceName = '';
      const expectedHeaderRequestParams = 'service_name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.api.servicecontrol.v1.CheckResponse()
      );
      client.innerApiCalls.check = stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.check(
          request,
          (
            err?: Error | null,
            result?: protos.google.api.servicecontrol.v1.ICheckResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.check as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes check with error', async () => {
      const client = new servicecontrollerModule.v1.ServiceControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.api.servicecontrol.v1.CheckRequest()
      );
      request.serviceName = '';
      const expectedHeaderRequestParams = 'service_name=';
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
      assert(
        (client.innerApiCalls.check as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('report', () => {
    it('invokes report without error', async () => {
      const client = new servicecontrollerModule.v1.ServiceControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.api.servicecontrol.v1.ReportRequest()
      );
      request.serviceName = '';
      const expectedHeaderRequestParams = 'service_name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.api.servicecontrol.v1.ReportResponse()
      );
      client.innerApiCalls.report = stubSimpleCall(expectedResponse);
      const [response] = await client.report(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.report as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes report without error using callback', async () => {
      const client = new servicecontrollerModule.v1.ServiceControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.api.servicecontrol.v1.ReportRequest()
      );
      request.serviceName = '';
      const expectedHeaderRequestParams = 'service_name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.api.servicecontrol.v1.ReportResponse()
      );
      client.innerApiCalls.report =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.report(
          request,
          (
            err?: Error | null,
            result?: protos.google.api.servicecontrol.v1.IReportResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.report as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes report with error', async () => {
      const client = new servicecontrollerModule.v1.ServiceControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.api.servicecontrol.v1.ReportRequest()
      );
      request.serviceName = '';
      const expectedHeaderRequestParams = 'service_name=';
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
      assert(
        (client.innerApiCalls.report as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });
});
