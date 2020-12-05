import { filterStatus, filterGender, filterOrder, filterText } from '../src/data.js';


describe('filterStatus', () => {
  it('is a function', () => {
    expect(typeof filterStatus).toBe('function');
  });
  
  it('should return items with status corresponding to selected', () => {
    const charactersTest = [{"status":"Alive"},{"status":"Dead"}]
    const selectTest = "Alive"
    const result = filterStatus(charactersTest, selectTest )
    expect(result).toEqual([{"status":"Alive"}]);
  });
});


describe('filterGender', () => {
  it('is a function', () => {
    expect(typeof filterGender).toBe('function');
  });
  
  it('should return items with gender corresponding to selected', () => {
    const charactersTest = [{"gender":"Female"},{"gender":"Male"}]
    const selectTest = "Male"
    const result = filterGender(charactersTest, selectTest )
    expect(result).toEqual([{"gender":"Male"}]);
  });
});


describe('filterOrder', () => {
  it('is a function', () => {
    expect(typeof filterOrder).toBe('function');
  });

  it('should return items ordered from A to Z', () => {
    const charactersTest = [{"name":"Zeep Xanflorp"},{"name":"Alien Rick"}, {"name":"Morty Smith"}]
    const selectTest = "a-z"
    const result = filterOrder(charactersTest, selectTest)
    expect(result[0]).toEqual({"name":"Alien Rick"});
  });

  it('should return items ordered from Z to A', () => {
    const charactersTest = [{"name":"Alien Rick"}, {"name":"Zeep Xanflorp"}, {"name":"Morty Smith"}]
    const selectTest = "z-a"
    const result = filterOrder(charactersTest, selectTest)
    expect(result[0]).toEqual({"name":"Zeep Xanflorp"});
  });
});


describe('filterText', () => {
  it('is a function', () => {
    expect(typeof filterText).toBe('function');
  });
  
  it('should return items that include the typed text', () => {
    const characteresTest = [{"name":"Evil Morty"}, {"name":"Zeep Xanflorp"}, {"name":"Morty Smith"}]
    const inputTest = "Morty"
    const result = filterText(characteresTest, inputTest)
    expect(result).toEqual([{"name":"Evil Morty"},{"name":"Morty Smith"}]);
  });
});
