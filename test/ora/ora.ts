/*
 * Copyright (C) 2019 CaMnter yuanyu.camnter@gmail.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Created by：CaMnter
 */

import ora, { Ora } from 'ora';

describe('「ora」', function () {

  it('ora start stop', () => {
    const loading: Ora = ora('Loading directory');
    loading.color = 'yellow';
    loading.text = 'Loading directory';
    loading.start();
    loading.stop();
  });

});