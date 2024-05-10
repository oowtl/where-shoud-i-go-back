import { Schema, model } from 'mongoose';

// 지진 해일 대피 시설
const tsunamiShelterSchema = Schema({
  // 시도 명
  sido_name: { type: String },
  // 시군구 명
  sigungu_name: 'string',
  // 지진해일 대피지구명
  remarks: 'string',
  // 지진해일 긴급대피장소명
  shel_nm: 'string',
  // 소재지지번주소
  address: 'string',
  // 경도
  lon: 'string',
  // 위도
  lat: 'string',
  // 최대수용인원수
  shel_av: 'string',
  // 해안선이격거리(M)
  lenth: 'string',
  // 지진해일 긴급대피장소 구분
  shel_div_type: 'string',
  // 내진적용여부
  seismic: 'string',
  // 해발높이
  height: 'string',
  // 관리기관 전화번호
  tel: 'string',
  // 소재지 도로명 주소
  new_address: 'string',
  // 관리기관명
  manage_gov_nm: 'string',
});

export default model('TsunamiShelter', tsunamiShelterSchema);
