Filesystem
==========

Chrome filesystem for storing persistent files.

Polyfill.

    requestFileSystem  = window.requestFileSystem or window.webkitRequestFileSystem

Get a filesystem for storage.

Size is is MB.

    log = (args...) ->
      console.log args...

    getStorage = (size=10, success=log) ->
      window.webkitStorageInfo.requestQuota PERSISTENT, size * 1024, (grantedBytes) ->
        console.log grantedBytes
        
        if grantedBytes > 0
          requestFileSystem PERSISTENT, grantedBytes, success
      , (e) ->
        console.log e

Query the usage status of the filesystem.

    status = ->
      window.webkitStorageInfo.queryUsageAndQuota PERSISTENT, (usage, quota) ->
        console.log usage, quota

