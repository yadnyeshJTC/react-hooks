declare type UseWinnerType = {
  checkPlayerWin: (name: string) => boolean;
};

const UseWinner = (): UseWinnerType => {
  const checkPlayerWin = (name: string) => {
    if (name === "test") return true;
    return false;
  };
  return {
    checkPlayerWin,
  };
};

export default UseWinner;
