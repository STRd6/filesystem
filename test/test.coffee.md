    FS = require "../main"

    FS.status()

    FS.getStorage(10)

    describe "storage", ->

    describe "compression", ->
      Compressor = require("compression")

      it "should compress", ->
        assert Compressor.compress "hello"
