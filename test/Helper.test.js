const chai = require("chai");
const expect = chai.expect;

const Helper = require("../helper/Helper-Oktavianus");

describe("Helper", () => {
    describe("pembagian", () => {
        it("Pembagian dari 2 angka", () => {
            expect(Helper.pembagian(10, 2)).to.equal(5);
        });
    });

    describe("pengurangan", () => {
        it("Pengurangan dari 2 angka", () => {
            expect(Helper.pengurangan(10, 2)).to.equal(8);
        });
    });

    describe("perkalian", () => {
        it("Perkalian dari 2 angka", () => {
            expect(Helper.perkalian(10, 2)).to.equal(20);
        });
    });

    describe("penjumlahan", () => {
        it("Penjumlahan dari 2 angka", () => {
            expect(Helper.penjumlahan(10, 2)).to.equal(12);
        });
    });
});
