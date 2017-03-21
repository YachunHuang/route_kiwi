
export class MonthInfo {
  /**
   * 日期資訊
   */
  title: string;
  /**
   * 列
   */
  rows = [];
  /**
   * 共幾個格子
   */
  days = [];
};

export class DayInfo
{
  /**
   * 日期
   */
  date:Date;
  /**
   * 是否為今天
   */
  isToday:boolean;
  /**
   * 該天的資訊
   */
  info:string;
  /**
   * 是否為運動日
   */
  isSportDay:boolean;
};
