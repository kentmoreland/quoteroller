import controls from '../../src/modules/quoteChanger';

describe('controls modules', () => {
  it('should exist', () => {
    expect(controls).toBeDefined();
  });
});

const sampleList = ['this', 'is', 'a', 'test', 'array'];

describe('getNext', () => {
  it('should return a number index', () => {
    expect(typeof controls.getNext(0, sampleList)).toBe('number');
  });

  it('should increment the index if it is valid', () => {
    expect(controls.getNext(0, sampleList)).toBe(1);
  });

  it('should reset the index if it is not valid', () => {
    expect(controls.getNext(sampleList.length, sampleList)).toBe(0);
  });
});

describe('getPrevious', () => {
  it('should return a number index', () => {
    expect(typeof controls.getPrevious(1, sampleList)).toBe('number');
  });

  it('should decrement the index if it is valid', () => {
    expect(controls.getPrevious(1, sampleList)).toBe(0);
  });

  it('should set the index to the end of the list if invalid', () => {
    expect(controls.getPrevious(0, sampleList)).toBe(sampleList.length - 1);
  });
});
