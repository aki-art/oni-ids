document$.subscribe(function() {
    var tables = document.querySelectorAll("article table:not([class])")
    tables.forEach(function(table) {
        var sort = new Tablesort(table, {
            descending: false
        });

        sort.refresh();

    })
})