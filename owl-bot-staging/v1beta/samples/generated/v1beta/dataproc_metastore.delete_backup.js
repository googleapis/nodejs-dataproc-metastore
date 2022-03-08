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

function main(name) {
  // [START metastore_v1beta_generated_DataprocMetastore_DeleteBackup_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The relative resource name of the backup to delete, in the
   *  following form:
   *  `projects/{project_number}/locations/{location_id}/services/{service_id}/backups/{backup_id}`.
   */
  // const name = 'abc123'
  /**
   *  Optional. A request ID. Specify a unique request ID to allow the server to
   *  ignore the request if it has completed. The server will ignore subsequent
   *  requests that provide a duplicate request ID for at least 60 minutes after
   *  the first request.
   *  For example, if an initial request times out, followed by another request
   *  with the same request ID, the server ignores the second request to prevent
   *  the creation of duplicate commitments.
   *  The request ID must be a valid
   *  UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format)
   *  A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.
   */
  // const requestId = 'abc123'

  // Imports the Metastore library
  const {DataprocMetastoreClient} = require('@google-cloud/dataproc-metastore').v1beta;

  // Instantiates a client
  const metastoreClient = new DataprocMetastoreClient();

  async function callDeleteBackup() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const [operation] = await metastoreClient.deleteBackup(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callDeleteBackup();
  // [END metastore_v1beta_generated_DataprocMetastore_DeleteBackup_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
