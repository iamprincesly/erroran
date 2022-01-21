/*
 Copyright (c) 2021 Sylvanus Etim <iamprincesly@gmail.com>

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:
 1. Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.
 2. Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in the
 documentation and/or other materials provided with the distribution.
 3. The name of the author may not be used to endorse or promote products
 derived from this software without specific prior written permission.
 */
'use strict';

/**
 * Export Erroran main class and erroran error
 * handling middleware
 */
module.exports = {
    Erroran: require('./libs/erroran'),
    ErroranHandler: require('./libs/handler'),
};