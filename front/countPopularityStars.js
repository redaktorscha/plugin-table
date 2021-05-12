/**
 * 
 */
const countPopularityStars = (obj) => {
    let {
        popularity
    } = obj;
    popularity = Number(popularity);
    if (popularity <= 500) {
        obj.popularity = 1;
    } else if (popularity <= 1000) {
        obj.popularity = 2;
    } else if (popularity <= 10000) {
        obj.popularity = 3;
    } else if (popularity <= 50000) {
        obj.popularity = 4;
    } else {
        obj.popularity = 5;
    }
}


export default countPopularityStars;