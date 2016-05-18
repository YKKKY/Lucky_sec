function collect_same_elements(collection_a, collection_b) {
  var collection_ab = [];

  for (var i = 0; i < collection_a.length; i++) {
    for (var index = 0; index < collection_b.length; index++) {
      if (collection_a[i] === collection_b[index]) {

        collection_ab.push(collection_a[i]);
      }
    }
  }

  return collection_ab;
}

module.exports = collect_same_elements;
