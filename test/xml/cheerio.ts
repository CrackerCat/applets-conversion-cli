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

import { expect } from 'chai';

const cheerio = require('cheerio');

describe('「cheerio」', function () {

  it('cheerio html', () => {
    const code = '<view wx:if="{{you}}">';
    const $ = cheerio.load(code);
    const result = $.html({
      xmlMode: true,
      lowerCaseTags: true,
      recognizeSelfClosing: true
    });
    expect(result).to.equal('<html><head/><body><view wx:if="{{you}}"/></body></html>');
  });

});
