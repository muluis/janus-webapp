import { HydraBatch } from './HydraBatch';
import { HydraUser } from './HydraUser';


export class HydraTrainee {
    traineeId: number;
    resourceId: number;
    trainingStatus: string;
    batch: HydraBatch;
    phoneNumber: string;
    skypeId: string;
    profileUrl: string;
    recruiterName: string;
    college: string;
    degree: string;
    major: string;
    techScreenerName: string;
    projectCompletion: string;
    flagStatus: string;
    flagNotes: string;
    marketingStatus: string;
    client: string;
    endClient: string;
    traineeUserInfo: HydraUser;

    constructor(traineeId: number, resourceId: number, trainingStatus: string, batch: HydraBatch, 
        phoneNumber: string, skypeId: string, profileUrl: string,recruiterName: string, 
        college: string, degree: string,major: string, techScreenerName: string,
        projectCompletion: string, flagStatus: string, flagNotes: string, marketingStatus: string,
        client: string, endClient: string, traineeUserInfo: HydraUser) {
            this.traineeId = traineeId;
            this.resourceId = resourceId;
            this.trainingStatus = trainingStatus;
            this.batch = batch;
            this.phoneNumber = phoneNumber;
            this.skypeId = skypeId;
            this.profileUrl = profileUrl;
            this.recruiterName = recruiterName;
            this.college = college;
            this.degree = degree;
            this.major = major;
            this.techScreenerName = techScreenerName;
            this.projectCompletion = projectCompletion;
            this.flagStatus = flagStatus;
            this.flagNotes = flagNotes;
            this.marketingStatus = marketingStatus;
            this.client = client;
            this.endClient = endClient;
            this.traineeUserInfo = traineeUserInfo;
      }
}

