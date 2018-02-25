export function suggestionsFetch(value) {
    fetch(`https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=${value}`)
        .then((value) => {
            return value !== undefined ? value : "No Results Found"
        }).catch(() => console.log("Invalid request!"));
}


