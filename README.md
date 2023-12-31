oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g fepub
$ fepub COMMAND
running command...
$ fepub (--version)
fepub/0.0.0 darwin-x64 node-v16.18.0
$ fepub --help [COMMAND]
USAGE
  $ fepub COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`fepub hello PERSON`](#fepub-hello-person)
* [`fepub hello world`](#fepub-hello-world)
* [`fepub help [COMMANDS]`](#fepub-help-commands)
* [`fepub plugins`](#fepub-plugins)
* [`fepub plugins:install PLUGIN...`](#fepub-pluginsinstall-plugin)
* [`fepub plugins:inspect PLUGIN...`](#fepub-pluginsinspect-plugin)
* [`fepub plugins:install PLUGIN...`](#fepub-pluginsinstall-plugin-1)
* [`fepub plugins:link PLUGIN`](#fepub-pluginslink-plugin)
* [`fepub plugins:uninstall PLUGIN...`](#fepub-pluginsuninstall-plugin)
* [`fepub plugins:uninstall PLUGIN...`](#fepub-pluginsuninstall-plugin-1)
* [`fepub plugins:uninstall PLUGIN...`](#fepub-pluginsuninstall-plugin-2)
* [`fepub plugins update`](#fepub-plugins-update)

## `fepub hello PERSON`

Say hello

```
USAGE
  $ fepub hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/wangwenjing/fepub/blob/v0.0.0/dist/commands/hello/index.ts)_

## `fepub hello world`

Say hello world

```
USAGE
  $ fepub hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ fepub hello world
  hello world! (./src/commands/hello/world.ts)
```

## `fepub help [COMMANDS]`

Display help for fepub.

```
USAGE
  $ fepub help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for fepub.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.10/src/commands/help.ts)_

## `fepub plugins`

List installed plugins.

```
USAGE
  $ fepub plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ fepub plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `fepub plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ fepub plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ fepub plugins add

EXAMPLES
  $ fepub plugins:install myplugin 

  $ fepub plugins:install https://github.com/someuser/someplugin

  $ fepub plugins:install someuser/someplugin
```

## `fepub plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ fepub plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ fepub plugins:inspect myplugin
```

## `fepub plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ fepub plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ fepub plugins add

EXAMPLES
  $ fepub plugins:install myplugin 

  $ fepub plugins:install https://github.com/someuser/someplugin

  $ fepub plugins:install someuser/someplugin
```

## `fepub plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ fepub plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ fepub plugins:link myplugin
```

## `fepub plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ fepub plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ fepub plugins unlink
  $ fepub plugins remove
```

## `fepub plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ fepub plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ fepub plugins unlink
  $ fepub plugins remove
```

## `fepub plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ fepub plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ fepub plugins unlink
  $ fepub plugins remove
```

## `fepub plugins update`

Update installed plugins.

```
USAGE
  $ fepub plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
