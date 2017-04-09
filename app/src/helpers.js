let helper = {
  formatTime (unitOfTime) {
    // helper function that formats unitOfTime into a `h:m:s` format
    // 00:00:00
    if (unitOfTime <= 9) {
      unitOfTime = `0${unitOfTime}`;
    }
    return unitOfTime;
  }
}

export default helper;
