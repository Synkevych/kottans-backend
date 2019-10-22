  function computeMaxCallStackSize(size) {
	  console.log("size:",size);
		size = size || 1;
		return computeMaxCallStackSize(size + 1);
	}
computeMaxCallStackSize(0);