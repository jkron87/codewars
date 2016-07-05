function getGrade(s1, s2, s3) {
  if ((s1 + s2 + s3) / 3 < 60) {
    return ('F');
  } else if ((s1 + s2 + s3) / 3 < 70) {
    return ('D');
  } else if ((s1 + s2 + s3) / 3 < 80) {
    return ('C');
  } else if ((s1 + s2 + s3) / 3 < 90) {
    return ('B');
  } else {return ('A');

  }
}
