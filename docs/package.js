(function(pkg) {
  // Expose a require for our package so scripts can access our modules
  window.require = Require.generateFor(pkg);
})({
  "version": "0.1.0",
  "source": {
    "LICENSE": {
      "path": "LICENSE",
      "mode": "100644",
      "content": "The MIT License (MIT)\n\nCopyright (c) 2013 Daniel X Moore\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
      "type": "blob"
    },
    "README.md": {
      "path": "README.md",
      "mode": "100644",
      "content": "filesystem\n==========\n\nChrome Filesystem API\n",
      "type": "blob"
    },
    "pixie.cson": {
      "path": "pixie.cson",
      "mode": "100644",
      "content": "version: \"0.1.0\"\nremoteDependencies: [\n  \"http://strd6.github.io/require/v0.2.2.js\"\n]\n",
      "type": "blob"
    },
    "main.coffee.md": {
      "path": "main.coffee.md",
      "mode": "100644",
      "content": "Filesystem\n==========\n\nChrome filesystem for storing persistent files.\n\nPolyfill.\n\n    requestFileSystem  = window.requestFileSystem or window.webkitRequestFileSystem\n\nGet a filesystem for storage.\n\nSize is is MB.\n\n    log = (args...) ->\n      console.log args...\n\n    getStorage = (size=10, success=log) ->\n      window.webkitStorageInfo.requestQuota PERSISTENT, size * 1024, (grantedBytes) ->\n        console.log grantedBytes\n        \n        if grantedBytes > 0\n          requestFileSystem PERSISTENT, grantedBytes, success\n      , (e) ->\n        console.log e\n\nQuery the usage status of the filesystem.\n\n    status = ->\n      window.webkitStorageInfo.queryUsageAndQuota PERSISTENT, (usage, quota) ->\n        console.log usage, quota\n\n",
      "type": "blob"
    }
  },
  "distribution": {
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"version\":\"0.1.0\",\"remoteDependencies\":[\"http://strd6.github.io/require/v0.2.2.js\"]};",
      "type": "blob"
    },
    "main": {
      "path": "main",
      "content": "(function() {\n  var getStorage, log, requestFileSystem, status,\n    __slice = [].slice;\n\n  requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;\n\n  log = function() {\n    var args;\n    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];\n    return console.log.apply(console, args);\n  };\n\n  getStorage = function(size, success) {\n    if (size == null) {\n      size = 10;\n    }\n    if (success == null) {\n      success = log;\n    }\n    return window.webkitStorageInfo.requestQuota(PERSISTENT, size * 1024, function(grantedBytes) {\n      console.log(grantedBytes);\n      if (grantedBytes > 0) {\n        return requestFileSystem(PERSISTENT, grantedBytes, success);\n      }\n    }, function(e) {\n      return console.log(e);\n    });\n  };\n\n  status = function() {\n    return window.webkitStorageInfo.queryUsageAndQuota(PERSISTENT, function(usage, quota) {\n      return console.log(usage, quota);\n    });\n  };\n\n}).call(this);\n\n//# sourceURL=main.coffee",
      "type": "blob"
    }
  },
  "entryPoint": "main",
  "dependencies": {},
  "remoteDependencies": [
    "http://strd6.github.io/require/v0.2.2.js"
  ],
  "progenitor": {
    "url": "http://strd6.github.io/editor/"
  },
  "repository": {
    "id": 14192824,
    "name": "filesystem",
    "full_name": "STRd6/filesystem",
    "owner": {
      "login": "STRd6",
      "id": 18894,
      "avatar_url": "https://1.gravatar.com/avatar/33117162fff8a9cf50544a604f60c045?d=https%3A%2F%2Fidenticons.github.com%2F39df222bffe39629d904e4883eabc654.png&r=x",
      "gravatar_id": "33117162fff8a9cf50544a604f60c045",
      "url": "https://api.github.com/users/STRd6",
      "html_url": "https://github.com/STRd6",
      "followers_url": "https://api.github.com/users/STRd6/followers",
      "following_url": "https://api.github.com/users/STRd6/following{/other_user}",
      "gists_url": "https://api.github.com/users/STRd6/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/STRd6/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/STRd6/subscriptions",
      "organizations_url": "https://api.github.com/users/STRd6/orgs",
      "repos_url": "https://api.github.com/users/STRd6/repos",
      "events_url": "https://api.github.com/users/STRd6/events{/privacy}",
      "received_events_url": "https://api.github.com/users/STRd6/received_events",
      "type": "User",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/STRd6/filesystem",
    "description": "Chrome Filesystem API",
    "fork": false,
    "url": "https://api.github.com/repos/STRd6/filesystem",
    "forks_url": "https://api.github.com/repos/STRd6/filesystem/forks",
    "keys_url": "https://api.github.com/repos/STRd6/filesystem/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/STRd6/filesystem/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/STRd6/filesystem/teams",
    "hooks_url": "https://api.github.com/repos/STRd6/filesystem/hooks",
    "issue_events_url": "https://api.github.com/repos/STRd6/filesystem/issues/events{/number}",
    "events_url": "https://api.github.com/repos/STRd6/filesystem/events",
    "assignees_url": "https://api.github.com/repos/STRd6/filesystem/assignees{/user}",
    "branches_url": "https://api.github.com/repos/STRd6/filesystem/branches{/branch}",
    "tags_url": "https://api.github.com/repos/STRd6/filesystem/tags",
    "blobs_url": "https://api.github.com/repos/STRd6/filesystem/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/STRd6/filesystem/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/STRd6/filesystem/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/STRd6/filesystem/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/STRd6/filesystem/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/STRd6/filesystem/languages",
    "stargazers_url": "https://api.github.com/repos/STRd6/filesystem/stargazers",
    "contributors_url": "https://api.github.com/repos/STRd6/filesystem/contributors",
    "subscribers_url": "https://api.github.com/repos/STRd6/filesystem/subscribers",
    "subscription_url": "https://api.github.com/repos/STRd6/filesystem/subscription",
    "commits_url": "https://api.github.com/repos/STRd6/filesystem/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/STRd6/filesystem/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/STRd6/filesystem/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/STRd6/filesystem/issues/comments/{number}",
    "contents_url": "https://api.github.com/repos/STRd6/filesystem/contents/{+path}",
    "compare_url": "https://api.github.com/repos/STRd6/filesystem/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/STRd6/filesystem/merges",
    "archive_url": "https://api.github.com/repos/STRd6/filesystem/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/STRd6/filesystem/downloads",
    "issues_url": "https://api.github.com/repos/STRd6/filesystem/issues{/number}",
    "pulls_url": "https://api.github.com/repos/STRd6/filesystem/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/STRd6/filesystem/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/STRd6/filesystem/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/STRd6/filesystem/labels{/name}",
    "releases_url": "https://api.github.com/repos/STRd6/filesystem/releases{/id}",
    "created_at": "2013-11-07T03:08:27Z",
    "updated_at": "2013-11-07T03:08:27Z",
    "pushed_at": "2013-11-07T03:08:27Z",
    "git_url": "git://github.com/STRd6/filesystem.git",
    "ssh_url": "git@github.com:STRd6/filesystem.git",
    "clone_url": "https://github.com/STRd6/filesystem.git",
    "svn_url": "https://github.com/STRd6/filesystem",
    "homepage": null,
    "size": 0,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": null,
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master",
    "master_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    },
    "network_count": 0,
    "subscribers_count": 1,
    "branch": "master",
    "defaultBranch": "master"
  }
});