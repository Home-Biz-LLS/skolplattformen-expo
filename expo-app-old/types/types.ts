export interface EtjanstChild {
  id: string;
  /**
   * <p>Special ID used to access certain subsystems</p>
   * @type {string}
   * @memberof Child
   */
  sdsId: string;
  name: string;
  /**
   * <p>F - förskola, GR - grundskola?</p>
   * @type {string}
   * @memberof Child
   */
  status?: string;
  schoolId?: string;
}

export interface Skola24Child {
  firstName?: string;
  lastName?: string;
  personGuid?: string;
  schoolGuid?: string;
  schoolID?: string;
  timetableID?: string;
  unitGuid?: string;
}
