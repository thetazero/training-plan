export enum RunKind {
    EASY = 'easy',
    TEMPO = 'tempo',
    INTERVALS = 'intervals',
}

export interface Run {
    kind: RunKind;
    totalMiles(): number;
}

export class EasyRun implements Run {
    kind: RunKind;
    miles: number;

    constructor(miles: number) {
        this.kind = RunKind.EASY;
        this.miles = miles;
    }

    totalMiles(): number {
        return this.miles;
    }
}

export class Strides {
    count: number;
    durationMeters: number;

    constructor(count: number, durationMeters: number) {
        this.count = count;
        this.durationMeters = durationMeters;
    }
}

export class TempoRun implements Run {
    kind: RunKind
    warmupMiles: number;
    tempoMiles: number;
    cooldownMiles: number;

    constructor(warmupMiles: number, tempoMiles: number, cooldownMiles: number) {
        this.kind = RunKind.TEMPO;
        this.warmupMiles = warmupMiles;
        this.tempoMiles = tempoMiles;
        this.cooldownMiles = cooldownMiles;
    }

    totalMiles(): number {
        return this.warmupMiles + this.tempoMiles + this.cooldownMiles;
    }
}

export enum Exercise {
    AnteriorBunkie = "Anterior Bunkie",
    BarbellRdl = "Barbell Romanian Deadlift",
    Bench = "Bench",
    BicepCurl = "Bicep Curl",
    BulgarianSplitSquat = "Bulgarian Split Squat",
    CableSeatedRow = "Cable Seated Row",
    CoreBicycle = "Core Bicycle",
    CoreRow = "Core Row",
    Crunch = "Crunch",
    DeadBugs = "Dead Bugs",
    DeadHang = "Dead Hang",
    Deadlift = "Deadlift",
    DeclineSitUp = "Decline Situp",
    Dip = "Dip",
    DumbbellBench = "Dumbbell Bench",
    DumbbellFly = "Dumbbell Fly",
    DumbbellInclineBench = "Dumbbell Incline Bench",
    DumbbellOneLegOneArmRomanialDeadLift = "Dumbbell One Leg One Arm Romanian Deadlift",
    DumbbellRdl = "Dumbbell Romanian Deadlift",
    DumbbellRow = "Dumbbell Row",
    DumbbellUprightRow = "Dumbbell Upright Row",
    FacePull = "Face Pull",
    FarmerCary = "Farmer Cary",
    ForwardDownBunkie = "Forward Down Bunkie",
    FourtyFiveDegreeBackExtension = "45 Degree Back Extension",
    GluteBridge = "Glute Bridge",
    HammerCurl = "Hammer Curl",
    HamstringBridge = "Hamstring Bridge",
    HamstringCurl = "Hamstring Curl",
    HollowBodyHold = "Hollow Body Hold",
    HollowHold = "Hollow Hold",
    InnerDownBunkie = "Inner Down Bunkie",
    LatPulldown = "Lat Pulldown",
    LateralBunkie = "Lateral Bunkie",
    LateralRaise = "Lateral Raise",
    LedgeTricepDip = "Ledge Tricep Dip",
    LegRaise = "Leg Raise",
    LemonSqueezers = "Lemon Squeezers",
    MedBallHipToss = "Med Ball Hip Toss",
    MedBallSeatedRussianTwist = "Med Ball Seated Russian Twist",
    MedBallSpeedSkaterJumps = "Med Ball Speed Skater Jumps",
    MedialBunkie = "Medial Bunkie",
    MountainClimber = "Mountain Climber",
    NinetyDegreeBackExtension = "90 Degree Back Extension",
    NordicCurl = "Nordic Curl",
    OneLegBuck = "One Leg Buck",
    OuterDownBunkie = "Outer Down Bunkie",
    OverheadPress = "Overhead Press",
    OxidativeSquat = "Oxidative Squat",
    Plank = "Plank",
    PlateMcGillCrunch = "Plate McGill Crunch",
    PreacherCurl = "Preacher Curl",
    Pullup = "Pullup",
    Pushup = "Pushup",
    ReverseCrunch = "Reverse Crunch",
    RomanianDeadLift = "Romanian Deadlift",
    Row = "Row",
    RussianTwist = "Russian Twist",
    ShortFootExercise = "Short Foot Exercise",
    SideCrunch = "Side Crunch",
    SideLegLift = "Side Leg Lift",
    SingleLegCalfRaise = "Single Leg Calf Raise",
    SingleLegGluteBridge = "Single Leg Glute Bridge",
    SingleLegHamstringBridge = "Single Leg Hamstring Bridge",
    SingleLegSquat = "Single Leg Squat",
    SingleLegStairCalfRaise = "Single Leg Stair Calf Raise",
    SingleLegTibRaise = "Single Leg Tib Raise",
    Situp = "Situp",
    SmithSquat = "Smith Machine Squat",
    SpeedSkaterJumps = "Speed Skater Jumps",
    Squat = "Squat",
    SupineKneeDrive = "Supine Knee Drive",
    TibBar = "Tib Bar",
    TibialisRaise = "Tibialis Raise",
    TricepExtension = "Tricep Extension",
    UnderhandLatPulldown = "Underhand Lat Pulldown",
    UprightRow = "Upright Row",
}

export interface SetPlan {
    reps: number;
    weightLbs: number;
}

export interface LiftPlan {
    exercises: Map<Exercise, SetPlan[]>;
}
export interface DayPlan {
    lift?: LiftPlan;
    run?: Run;
    strides?: Strides;
    date: Date;
}

export class WeekPlan {
    days: DayPlan[];
    
    constructor(days: DayPlan[]) {
        this.days = days;
    }

    totalWeeklyMiles(): number {
        return this.days.reduce((total, day) => {
            return total + (day.run ? day.run.totalMiles() : 0);
        }, 0);
    }

    totalStrideMeters(): number {
        return this.days.reduce((total, day) => {
            return total + (day.strides ? day.strides.count * day.strides.durationMeters : 0);
        }, 0);
    }
}
