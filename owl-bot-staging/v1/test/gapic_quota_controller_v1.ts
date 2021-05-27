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
import * as quotacontrollerModule from '../src';

import {protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (instance.constructor as typeof protobuf.Message).toObject(
    instance as protobuf.Message<T>,
    {defaults: true}
  );
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

describe('v1.QuotaControllerClient', () => {
  it('has servicePath', () => {
    const servicePath =
      quotacontrollerModule.v1.QuotaControllerClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      quotacontrollerModule.v1.QuotaControllerClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = quotacontrollerModule.v1.QuotaControllerClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client = new quotacontrollerModule.v1.QuotaControllerClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new quotacontrollerModule.v1.QuotaControllerClient({
      fallback: true,
    });
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client = new quotacontrollerModule.v1.QuotaControllerClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.quotaControllerStub, undefined);
    await client.initialize();
    assert(client.quotaControllerStub);
  });

  it('has close method', () => {
    const client = new quotacontrollerModule.v1.QuotaControllerClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.close();
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new quotacontrollerModule.v1.QuotaControllerClient({
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
    const client = new quotacontrollerModule.v1.QuotaControllerClient({
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

  describe('allocateQuota', () => {
    it('invokes allocateQuota without error', async () => {
      const client = new quotacontrollerModule.v1.QuotaControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.api.servicecontrol.v1.AllocateQuotaRequest()
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
        new protos.google.api.servicecontrol.v1.AllocateQuotaResponse()
      );
      client.innerApiCalls.allocateQuota = stubSimpleCall(expectedResponse);
      const [response] = await client.allocateQuota(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.allocateQuota as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes allocateQuota without error using callback', async () => {
      const client = new quotacontrollerModule.v1.QuotaControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.api.servicecontrol.v1.AllocateQuotaRequest()
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
        new protos.google.api.servicecontrol.v1.AllocateQuotaResponse()
      );
      client.innerApiCalls.allocateQuota = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.allocateQuota(
          request,
          (
            err?: Error | null,
            result?: protos.google.api.servicecontrol.v1.IAllocateQuotaResponse | null
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
        (client.innerApiCalls.allocateQuota as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes allocateQuota with error', async () => {
      const client = new quotacontrollerModule.v1.QuotaControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.api.servicecontrol.v1.AllocateQuotaRequest()
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
      client.innerApiCalls.allocateQuota = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.allocateQuota(request), expectedError);
      assert(
        (client.innerApiCalls.allocateQuota as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });
});