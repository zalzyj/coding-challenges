function mangoLocation(ix, cx, id, cd){
    var ix1 = ix-id;
    var ix2 = ix+id;
    var cx1 = cx-cd;
    var cx2 = cx+cd;

    if (ix1==cx1) return ix1;
    if (ix1==cx2) return ix1;
    if (ix2==cx1) return ix2;
    if (ix2==cx2) return ix2;
    return null;
}

console.log("mangoLocation(2, 6, 1, 3) = ", mangoLocation(2, 6, 1, 3));
console.log("mangoLocation(8, 3, 7, 2) = ", mangoLocation(8, 3, 7, 2));
console.log("mangoLocation(23, 40, 17, 0) = ", mangoLocation(23, 40, 17, 0));

