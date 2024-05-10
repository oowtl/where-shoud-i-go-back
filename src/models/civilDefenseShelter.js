import { Schema, model } from 'mongoose';

// 민방위 대피 시설
const civilDefenseShelterSchema = new Schema({
  // 지정 일자
  designatedDate: {
    type: Date,
  },
  // 운영 상태
  manageState: {
    type: Boolean,
  },
  // 시설명
  facilityName: {
    type: String,
    required: true,
  },
  // 도로명 주소
  roadAddress: {
    type: String,
  },
  // 소재지 주소
  locationAddress: {
    type: String,
  },
  // 시설 면적
  facilityArea: {
    type: Number,
  },
  // 최대 수용 인원
  maxCapacity: {
    type: Number,
  },
  // 위도
  latitude: {
    type: Number,
    required: true,
  },
  // 경도
  longitude: {
    type: Number,
    required: true,
  },
  // 지하/지상
  isUnderGround: {
    type: Boolean,
  },
});

export default model('CivilDefenseShelter', civilDefenseShelterSchema);
