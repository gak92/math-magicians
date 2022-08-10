import operate from "../logic/operate";

describe("Testing calculation", ()=>{
  test("Test addition", ()=> {
    const res = operate(2,2,'+');
    expect(res).toBe('4');
  });

  test("Test subtraction", ()=> {
    const res = operate(8,2,'-');
    expect(res).toBe('6');
  });

  test("Test addition", ()=> {
    const res = operate(2,7,'x');
    expect(res).toBe('14');
  });

});