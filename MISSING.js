let numbers = [1, 2, 3, 5, 6, 7, 9];

    function findMissingElements(arr) {

      //let numbers = [1, 2, 3, 5, 6, 7, 9 ];
      arr = numbers.sort();
      let missing = [];
      if (arr[0] !== 1) {
        missing.unshift(1);
      }
      // Find the missing array numbers
      for (let i = 0; i < arr.length; i++) {
        if ((arr[i + 1] - arr[i]) > 1) {
          missing.push(arr[i + 1] - 1);
        }
      }
      return missing;
    }
    console.log(findMissingElements(numbers));
    //let output = findMissingElements(numbers);
    //alert("Output[" + output + "]");