const controls = (function () {
  const getNext = (index, list) => {
    return list[index + 1] ? index += 1 : 0;
  }

  const getPrevious = (index, list) => {
    return list[index -1] ? index -= 1 : list.length - 1;
  }

  return { getNext, getPrevious }
})();

export default controls;
