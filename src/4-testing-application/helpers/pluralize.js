function pluralize(count, singularWord, pluralWord = `${singularWord}s`) {
  if (typeof count !== "number") {
    throw new Error("Invalid input: count needs to be a number");
  }

  if (count === 1) {
    return `${count} ${singularWord}`;
  }

  return `${count} ${pluralWord}`;
}

export default pluralize;
