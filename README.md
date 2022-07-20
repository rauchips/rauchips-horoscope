# Project Title

## Horoscope App <a href="https://rauchips-horoscope.herokuapp.com/">Live demo</a>

---

## Requirements

You will only need Node.js and a node global package, npm, installed in your environement.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v14.15.4

    $ npm --version
    6.14.10

## Install

    $ git clone https://github.com/rauchips/rauchips-horoscope.git
    $ cd rauchips-horoscope
    $ npm install

## Simple build for production

    $ npm start
    
## Running the project for development

    $ npm run dev

## Running the project for testing

    $ npm test

## Running the project for testing with watch flag

    $ npm run test:watch
## Description

Input your name, gender and date of birth to discover your zodiac sign.

## Motivation

The motivation for this particular project came from two ideas;
  1. A few weeks ago someone posed a very interesting question, they had a users model for their mongodb database and wanted to know how they could categorize their users zodiac signs or horoscopes based on the date of birth field that was included in the model. I gave them a theoretical solution on how to solve it but I don't know if they were able to implement it, but the thought of it fascinated me. I thought of two solutions, they could use an external api and input the DOB to get the horoscope or write a script within the folder structure of the project that could calculate this as well then for either solutions they could use a pre save method for mongoose to save the zodiac sign once they found it.
  2. When I went through the test sent to me I noticed that it converted the input to ascii the passed it through a function that was able to give a display either green or red. I went ahead and did research on ascii and thought of how I could incooperate it into my project.
