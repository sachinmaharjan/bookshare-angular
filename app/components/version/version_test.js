'use strict';

describe('bookshare.version module', function() {
  beforeEach(module('bookshare.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
