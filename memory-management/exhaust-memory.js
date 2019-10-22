function computeMaxCallStackSize(size) {
  // console.log('size:', size);
  const newSize = size || 1;
  return computeMaxCallStackSize(newSize + 1);
}
computeMaxCallStackSize(0);
