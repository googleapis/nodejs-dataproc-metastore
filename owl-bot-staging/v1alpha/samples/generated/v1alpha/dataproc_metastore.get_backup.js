// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(name) {
  // [START metastore_get_backup_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The relative resource name of the backup to retrieve, in the
   *  following form:
   *  `projects/{project_number}/locations/{location_id}/services/{service_id}/backups/{backup_id}`.
   */
  // const name = 'abc123'

  // Imports the Metastore library
  const {DataprocMetastoreClient} = require('@google-cloud/dataproc-metastore').v1alpha;

  // Instantiates a client
  const metastoreClient = new DataprocMetastoreClient();

  async function getBackup() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await metastoreClient.getBackup(request);
    console.log(response);
  }

  getBackup();
  // [END metastore_get_backup_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
