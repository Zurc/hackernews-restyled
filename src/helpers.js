export const addEllipsis = (str, num) => {
  // check if string starts with 'Ask HN: '
  const re = new RegExp("^(Ask HN: )");

  return (re.test(str) && str.length > num)
    // if starts with 'Ask...' and is too long, cut on both sides
    ? `${str.slice(8, num)}...`
    : (re.test(str) && !(str.length > num))
      // is starts with 'Ask..' but is short cut the start
      ? `${str.slice(8, num)}`
      // if it's too long cut at the end
      : (str && str.length > num)
        ? `${str.slice(0, num)}...`
        // its ok as it is
        : str  
}