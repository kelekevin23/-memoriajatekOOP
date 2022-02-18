const { test } = QUnit;

const jatek = new Jatek();

QUnit.module('Kártyára kattintáskor', function () {


    QUnit.test('Kártyára kattintáskor megváltozik- e az állapota?', (assert) => {

        assert.equal(kartyaTomb[0].allapot, false);
        kartyaTomb[0].allapotValtozas()
        assert.equal(kartyaTomb[0].allapot, true);

    });

    /*QUnit.test('Kártyára kattintáskor megváltozik- e a blokkolt adattag? ', (assert) => {
        
    });*/

    QUnit.test('Kártyára kattintáskor a kivalasztottKartyak tömbbe bekerül-e a kártya?', (assert) => {

        assert.equal(kivalsztottKartyak.length > 0, false);
        kartyaTomb[0].kattintas();
        assert.equal(kivalsztottKartyak.length > 0, true);

    });
    QUnit.test('Ha két azonos kártya kerül a tömbbe, akkor megváltozik-e a visibility értékük?', (assert) => {

        kartyaTomb[0].kepElem.attr('src', '../kepek/kep1.jpg')
        kartyaTomb[1].kepElem.attr('src', '../kepek/kep1.jpg')

        if ($(".kartya").eq(0).is(":visible")) {
            console.log("látható")
        } else {
            console.log("láthatatlan")

        }
        kartyaTomb[0].kattintas();
        kartyaTomb[1].kattintas();

        if ($(".kartya").eq(0).is(":visible")) {
            console.log("látható")
        } else {
            console.log("láthatatlan")
        }

    });



});