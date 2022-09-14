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



'use strict';

function main() {
  // [START servicecontrol_v1_generated_QuotaController_AllocateQuota_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Name of the service as specified in the service configuration. For example,
   *  `"pubsub.googleapis.com"`.
   *  See google.api.Service google.api.Service  for the definition of a service name.
   */
  // const serviceName = 'abc123'
  /**
   *  Operation that describes the quota allocation.
   */
  // const allocateOperation = {}
  /**
   *  Specifies which version of service configuration should be used to process
   *  the request. If unspecified or no matching version can be found, the latest
   *  one will be used.
   */
  // const serviceConfigId = 'abc123'

  // Imports the Servicecontrol library
  const {QuotaControllerClient} = require('@google-cloud/service-control').v1;

  // Instantiates a client
  const servicecontrolClient = new QuotaControllerClient();

  async function callAllocateQuota() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await servicecontrolClient.allocateQuota(request);
    console.log(response);
  }

  callAllocateQuota();
  // [END servicecontrol_v1_generated_QuotaController_AllocateQuota_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
