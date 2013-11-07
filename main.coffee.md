Filesystem
==========

    Compressor = require("compression")

Chrome filesystem for storing persistent files.

    requestFileSystem = window.requestFileSystem or window.webkitRequestFileSystem
    storageInfo = navigator.webkitPersistentStorage

Size is is MB.

    MB = 1024 * 1024

    log = (args...) ->
      console.log args...

    module.exports =

Get a filesystem for storage if the use accepts the prompt.

      getStorage: (size=1, success=log) ->
        storageInfo.requestQuota size * MB, (grantedBytes) ->
          console.log grantedBytes

          if grantedBytes > 0
            requestFileSystem PERSISTENT, grantedBytes, success
        , log

Query the usage status of the filesystem.

      status: ->
        storageInfo.queryUsageAndQuota log
