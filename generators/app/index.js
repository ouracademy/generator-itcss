'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({

  writing: function () {
    this.fs.copy(
      this.templatePath('content'),
      this.destinationPath('styles')
    );
  },
});
