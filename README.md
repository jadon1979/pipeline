Pipeline Deals 
===========

Installs and configures Pipeline locally with [Docker](https://www.docker.com/).

## Setup

### 1. Download Docker

[OSX](https://download.docker.com/mac/stable/Docker.dmg)
[WINDOWS](https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe)
[Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce)

**Windows and Docker have variances that may not play nice together**

### 2. Clone the github repo and create your `.env` file

```bash
$ git clone git@github.com:jadon1979/pipeline.git
$ cd pipeline
$ touch .env
```

After you create your env file, you will need to populate it with the following:

```bash
PIPELINE_API_KEY=<PIPELINE API KEY>
DEPLOY_SSHKEY_NAME=<DEPLOY KEY PATH>
DEPLOY_SSH_CONFIG=<DEPLOY SSH CONFIG>
MYSQL_USER=<USER>
MYSQL_PASSWORD=<PASSWORD>
MYSQL_ROOT_PASSWORD=<ROOT_PASSWORD>
MYSQL_HOST=pipelinesql
```

### 3. Build the Docker image

```bash
$ docker-compose up -d
```

The `d` option daemonizes the `run` process so it can run in the background.

### 4. Setup

```bash
$ docker-compose exec pipeline bash
$ bundle 
$ npm --prefix=/opt/apps/pipeline/web install 
$ puma -C './config/puma.rb'
$ npm start --prefix web
```
### 5. Links 

Query parameters mimic the Pipeline API directly

[API](http://localhost)
[Frontend](http://localhost:3000)

## Useful Docker commands

View logs

```bash
$ docker-compose logs pipeline
```

Shut down Docker

```bash
$ docker-compose down
```

Log in directly to the mysql container

```bash
$ docker-compose exec pipelinesql bash
```
