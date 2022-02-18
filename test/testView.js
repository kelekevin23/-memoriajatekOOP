

const { test } = QUnit;

let jatek;
//const jatek = new Jatek();

QUnit.module('Metódus tesztelés', function () {
    jatek = new Jatek();
    /*j.before(() =>{
        this.jatek = new Jatek();
    })*/
    QUnit.test('Létezik-e a kepekTombFeltoltese metódus', (assert) => {
        assert.ok(jatek.kepekTombFeltoltese, "Létezik a kepekTombFeltoltese metódus");
    });

    QUnit.test('Függvény-e a kepekTombFeltoltese metódus', (assert) => {
        assert.ok(typeof jatek.kepekTombFeltoltese === "function", "A kepekTombFeltoltese függvény");
    });

    /*QUnit.test('A kepekTomb véletlenszerűen rendezett-e?', (assert) => {
          let ujTomb = [];
          for (let index = 1; index <= meret; index++) {
              ujTomb.push("../kepek/kep" + index + ".jpg");
              ujTomb.push("../kepek/kep" + index + ".jpg");
          }
          
          for (let index = 0; index < ujTomb.length; index++) {
              assert.notEqual(ujTomb[index] === "../"+kepekTomb[index], true)
          }
          assert.notEqual(kepekTomb[0] === kepekTomb[1], true)
      });*/
});

QUnit.module('Felület tesztelés (LÉTREJÖN-E A JÁTÉKTÉR?)', function () {
    QUnit.test('Létrejön-e a megfelelő számú Kártya elem?', (assert) => {
        assert.equal(kartyaTomb.length === 8, true)
    });

    QUnit.test('Létrejön-e az IMG tag az elemben?', (assert) => {
        for (let index = 0; index < kartyaTomb.length; index++) {
            assert.ok(kartyaTomb[index].kepElem, "Létrejött az IMG tag");
        }
    });

    QUnit.test('Megfelelő-lesz-e az elem háttérképe?', (assert) => {
        for (let index = 0; index < kartyaTomb.length; index++) {
            assert.equal(kartyaTomb[index].hatter, "../kepek/hatter.jpg");
        }
    });

});

QUnit.module('Felület tesztelés (LÉTREJÖNNEK-E A JÁTÉRKTÉR OBJEKTUMAI A MEGFELELŐ ADATTAGOKKAL?)', function () {

    QUnit.test('A létrejövő Kártya objektumok a allapot értéke false?', (assert) => {
        for (let index = 0; index < kartyaTomb.length; index++) {
            assert.equal(kartyaTomb[index].allapot, false);
        }
    });
    QUnit.test('A létrejövő Kártya objektumok a blokkolt értéke false?', (assert) => {
        for (let index = 0; index < kartyaTomb.length; index++) {
            assert.equal(kartyaTomb[index].blokkolt, false);
        }
    });

});

QUnit.module('Felület tesztelés (AZ ALLAPOTVALTOZAS() TAGFÜGGVÉNY ELLENŐRZÉSE)', function () {

    QUnit.test('Az objektum állapot értéke TRUE lesz', (assert) => {
        for (let index = 0; index < kartyaTomb.length; index++) {
            kartyaTomb[index].allapotValtozas();
        }

        for (let index = 0; index < kartyaTomb.length; index++) {
            assert.equal(kartyaTomb[index].allapot, true);
        }
    });

    QUnit.test('A képEleme attribútum a fájlnév lesz.', (assert) => {
        kartyaTomb = [];
        kepekTomb = [];
        jatek = new Jatek();

        assert.equal(kartyaTomb[0].kepElem.attr('src') === kartyaTomb[0].fajlnev, false);
        kartyaTomb[0].allapotValtozas()
        assert.equal(kartyaTomb[0].kepElem.attr('src') === kartyaTomb[0].fajlnev, true);

    });

});
