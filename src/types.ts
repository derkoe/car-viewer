export interface Vehicle {
    overview:       Overview;
    additionalInfo: AdditionalInfo;
    dealerDetail:   DealerDetail;
    equipment:      Equipment;
    technicalData:  TechnicalData;
    incentives:     any[];
    campaigns:      Campaigns;
    videos:         any[];
    financeOptions: FinanceOptions;
    breadcrumbs:    Breadcrumb[];
    seoMetaData:    SEOMetaData;
}

export interface AdditionalInfo {
    text: string;
}

export interface Breadcrumb {
    label: string;
    path:  string;
    type:  string;
}

export interface Campaigns {
    campaigns:           Campaign[];
    discountCalculation: DiscountCalculation;
}

export interface Campaign {
    discount:    number;
    title:       string;
    text:        string;
    disclaimer:  null;
    detailUrl:   string;
    campaignKey: string;
}

export interface DiscountCalculation {
    minimalPrice:    number;
    basePrice:       number;
    totalDiscount:   number;
    discountItems:   any[];
    noDiscountItems: NoDiscountItem[];
}

export interface NoDiscountItem {
    title:       string;
    campaignKey: string;
}

export interface DealerDetail {
    vehicleLocation:     VehicleLocation;
    dealerRatings:       number;
    dealerRatingAverage: number;
    openingTimes:        Array<null | string>;
    websiteUrl:          string;
    employees:           Employee[];
    dealerRatingUrl:     string;
}

export interface Employee {
    id:              number;
    fullname:        string;
    telephoneNumber: string;
    mobileNumber:    null | string;
    imageUrl:        string;
    jobDescription:  string;
}

export interface VehicleLocation {
    name:       string;
    street:     string;
    postalCode: string;
    city:       string;
}

export interface Equipment {
    standard:  any[];
    extra:     any[];
    used:      Used[];
    modelCode: string;
}

export interface Used {
    code: string;
    text: string;
}

export interface FinanceOptions {
    leasingRate: null;
    creditRate:  null;
}

export interface Overview {
    id:                        ID;
    crossId:                   null;
    header:                    string;
    subHeader:                 string;
    powerKw:                   number;
    powerPs:                   number;
    maxNetPowerElectricKw:     null;
    maxNetPowerElectricPs:     null;
    initialRegistrationDate:   Date;
    mileage:                   number;
    price:                     number;
    entrepreneurPrice:         null;
    priceOfferOfTheWeek:       null;
    netSalesPrice:             number;
    newSalesListPrice:         null;
    imageUrls:                 string[];
    threeSixtyExteriorBaseURL: null;
    threeSixtyInteriorBaseURL: null;
    financeable:               boolean;
    vehicleLocation:           VehicleLocation;
    dealerRatings:             number;
    dealerRatingAverage:       number;
    dealerPhoneNumber:         string;
    dealerCallTrackingNumber:  string;
    fleetVehicle:              boolean;
    dealerRatingUrl:           string;
    reserved:                  boolean;
    reservable:                boolean;
    inputTaxType:              null;
    brand:                     string;
    makeCode:                  string;
    model:                     string;
    carHubId:                  string;
    powerKwHybrid:             null;
    powerPsHybrid:             null;
    powerKw30min:              null;
    powerPs30min:              null;
    powerKwCombustionEngine:   number;
    powerPsCombustionEngine:   number;
    future:                    boolean;
    pbsVehicle:                boolean;
}

export interface ID {
    dealerId:            string;
    vehicleId:           string;
    dealerIdNumber:      number;
    vehicleIdNumber:     number;
    fiveDigitsDealerId:  string;
    fiveDigitsVehicleId: string;
}

export interface SEOMetaData {
    title:         string;
    description:   string;
    robots:        string;
    canonicalLink: string;
    image:         string;
}

export interface TechnicalData {
    id:                         ID;
    colorText:                  string;
    initialRegistrationDate:    Date;
    mileage:                    number;
    powerKw:                    number;
    powerPs:                    number;
    maxNetPowerElectricPs:      null;
    maxNetPowerElectricKw:      null;
    fuelText:                   string;
    combinedConsumption:        number;
    consumptionUnitCode:        string;
    co2Emission:                number;
    emissionClassText:          string;
    driveText:                  string;
    doors:                      number;
    seats:                      number;
    previousOwners:             number;
    motorCapacity:              number;
    bodyText:                   string;
    weightGross:                number;
    weightNet:                  number;
    gearTypeText:               string;
    wltp:                       boolean;
    vin:                        string;
    electricDisclaimer:         null;
    electricDisclaimerSkoda:    null;
    nextTechnicalInspection:    null;
    condition:                  null;
    serviceBook:                null;
    initialRegistrationCountry: null;
    cebiaReportResult:          null;
    cebiaUrl:                   null;
    ecoTax:                     null;
    numberOfAirbags:            null;
    entryDate:                  null;
    electricRange:              null;
    powerKwHybrid:              null;
    powerPsHybrid:              null;
    powerKw30min:               null;
    powerPs30min:               null;
    powerKwCombustionEngine:    number;
    powerPsCombustionEngine:    number;
    warrantyPeriodInMonth:      null;
}
