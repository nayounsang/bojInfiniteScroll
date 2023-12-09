interface languageTitleType {
  languageDisplayName: string;
  language: string;
  title: string;
  isOriginal: string;
}

export interface problemType {
  problemId: number;
  titleKo: string;
  isSolvable: boolean;
  isPartial: false;
  acceptedUserCount: number;
  level: number;
  votedUserCount: number;
  sprout: boolean;
  givesNoRating: boolean;
  isLevelLocked: boolean;
  averageTries: number;
  official: number;
  titles: languageTitleType[];
}

export interface resDataType {
  count: number;
  items: problemType[];
}
