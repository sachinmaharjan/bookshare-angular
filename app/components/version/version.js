'use strict';

angular.module('bookshare.version', [
  'bookshare.version.interpolate-filter',
  'bookshare.version.version-directive'
])

.value('version', '0.1');
