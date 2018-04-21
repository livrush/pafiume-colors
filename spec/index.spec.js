'use strict';
const path = require('path');
const _ = require('lodash');
const expect = require('chai').expect;
const pafiumeColors = require('../colors.js');

describe('Pafiume Colors', function(){
  it('is a function', function () {
    expect(pafiumeColors).to.be.an('object');
  });

  describe('random()', function () {
    it('should exist', function () {
      expect(pafiumeColors.random).to.exist;
    });

    it('should be a Function', function () {
      expect(pafiumeColors.random).to.be.a('function');
    });

    describe('return value', function () {
      const colorFromRandomAPI = pafiumeColors.random();

      it('should be an Object', function () {
        expect(colorFromRandomAPI).to.be.an('object');
      });

      checkColorProperties(colorFromRandomAPI);
    });
  });

  describe('get()', function () {
    it('should exist', function () {
      expect(pafiumeColors.get).to.exist;
    });

    it('should be a Function', function () {
      expect(pafiumeColors.get).to.be.a('function');
    });

    it('should work even if no argument is passed', function () {
      expect(pafiumeColors.get()).to.be.an('object');
    });

    describe('return value', function () {
      const colorFromGetAPI = pafiumeColors.get('infinity');

      it('should be an Object', function () {
        expect(colorFromGetAPI).to.be.an('object');
      });

      checkColorProperties(colorFromGetAPI);
    });
  });

  describe('scheme()', function () {
    it('should exist', function () {
      expect(pafiumeColors.scheme).to.exist;
    });

    it('should be a Function', function () {
      expect(pafiumeColors.scheme).to.be.a('function');
    });

    describe('return value', function () {
      const quantity = Math.floor(Math.random() * 5);
      const colorsFromSchemeAPI = pafiumeColors.scheme(quantity);

      it('should be an Array', function () {
        expect(colorsFromSchemeAPI).to.be.an('array');
      });

      it('should have desired quantity', function () {
        expect(colorsFromSchemeAPI.length).to.equal(quantity);
      });

      describe('each Array value', function () {
        colorsFromSchemeAPI.forEach(checkColorProperties);

        it('should be unique', function () {
          var colorsArray = pafiumeColors.scheme(10);
          var uniqueArray = _.uniqBy(colorsArray, 'name');
          expect(uniqueArray.length).to.equal(colorsArray.length);
        });
      });

      it('should return an Array with 1 element if no arguments are passed', function () {
        expect(pafiumeColors.scheme().length).to.equal(1);
      });

      it('should work with non-numbers', function () {
        expect(pafiumeColors.scheme('').length).to.equal(1);
        expect(pafiumeColors.scheme(true).length).to.equal(1);
        expect(pafiumeColors.scheme([]).length).to.equal(1);
        expect(pafiumeColors.scheme({}).length).to.equal(1);
        expect(pafiumeColors.scheme(undefined).length).to.equal(1);
        expect(pafiumeColors.scheme(null).length).to.equal(1);
      });

      it('should work with negative numbers', function () {
        expect(pafiumeColors.scheme(-1).length).to.equal(1);
      });

      it('should work with numbers larger than available colors', function () {
        expect(pafiumeColors.scheme(100).length).to.equal(pafiumeColors.all().length);
      });
    });

  });


  describe('getAll()', function () {
    const getAll = pafiumeColors.getAll;

    it('should exist', function () {
      expect(getAll).to.exist;
    });

    it('should be a function', function () {
      expect(getAll).to.be.a('function');
    });

    describe('return value', function () {
      const colorSFromGetAllAPI = getAll();

      it('should be an Array', function () {
        expect(colorSFromGetAllAPI).to.be.an('array');
      });

      describe('each Array value', function () {
        colorSFromGetAllAPI.forEach(checkColorProperties);
      });
    });
  });
});

// ! Helpers ////////////////

function checkColorProperties(color) {
  it('should have "name" property', function () {
    expect(color.name).to.exist;
    expect(color.name).to.be.a('string');
  });

  it('should have "hues" property', function () {
    var hues = pafiumeColors.get('infinity').hues;
    expect(color.hues).to.exist;
    expect(color.hues).to.be.an('array');
  });
}