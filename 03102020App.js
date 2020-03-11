//////////////////////
// 56) Merge Intervals
//////////////////////
// merge = (intervals) => {
//
//   intervals.sort((a, b) => a[0] - b[0]);
//
//   console.log(intervals);
//
//   for (var i = 0; i < intervals.length-1; i++) {
//     for (var j = i+1; j < intervals.length; j++) {
//       if (intervals[i][1]>=intervals[j][0] && intervals[i][0]<=intervals[j][0] && intervals[j][1] >= intervals[i][1]) {
//         intervals[i] = [intervals[i][0], Math.max(intervals[i][1], intervals[j][1])];
//         intervals.splice(j,1);
//         console.log(intervals);
//         j--;
//       } else if (intervals[j][1]<=intervals[i][1] && intervals[j][1]>=intervals[i][0] && intervals[j][0]<=intervals[i][0]) {
//         intervals[i] = [Math.min(intervals[i][0], intervals[j][0]), intervals[i][1]];
//         intervals.splice(j,1);
//         console.log(intervals);
//         j--;
//       } else if (intervals[i][1]>=intervals[j][0] && intervals[i][0]<=intervals[j][0] && intervals[j][1] <= intervals[i][1]) {
//         intervals.splice(j,1);
//         console.log(intervals);
//         j--;
//       }
//     }
//
//
//   }
//   console.log("final");
//   console.log(intervals);
//   return intervals;
// }

merge = (intervals) => {

  intervals.sort((a, b) => a[0] - b[0]);

  console.log(intervals);

  for (var i = 0; i < intervals.length-1; i++) {
    for (var j = i+1; j < intervals.length; j++) {
      if (intervals[i][1]>=intervals[j][0]) {
        intervals[i] = [intervals[i][0], Math.max(intervals[i][1], intervals[j][1])];
        intervals.splice(j,1);
        console.log(intervals);
        j--;
      }
    }


  }
  console.log("final");
  console.log(intervals);
  return intervals;
}

merge([[1,3],[2,6],[8,10],[15,18]])
