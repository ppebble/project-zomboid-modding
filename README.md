# Project Zomboid 모드 및 도구

[ppebble](https://github.com/ppebble)가 관리하는 Project Zomboid 모드·도구와
이전 작업 이력을 모은 카탈로그입니다. **최근 확인: 2026-10-06.**

각 프로젝트는 독립 Git 저장소로 유지합니다. 이 저장소에는 목록과 복제 도구만
두며 모드의 실행 소스, 에셋, 세이브나 서버 설정을 합치지 않습니다.
목록의 기준 데이터는 [catalog.json](catalog.json)입니다.

현재 13개 항목을 기록합니다. Steam 공개 배포, 로컬 등록 준비, 비공개 소스,
특정 버전용 임시 패치와 보관 이력을 구분합니다. 게시 여부와 실제 게임 검증은
서로 다르며, 자세한 지원 범위와 확인 결과는 각 프로젝트 설명을 참고하십시오.

## 번역 도구

| 프로젝트 | 용도·지원 범위 | 소스·배포 상태 |
| --- | --- | --- |
| [PZ AI Translation Generator](https://github.com/ppebble/pz-ai-translation-generator) | 원본을 수정하지 않고 별도 로컬 번역 팩을 만드는 B42 번역 도구입니다. | 공개 소스 · [Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3789612268) |

## 행동시간·생활 편의

| 프로젝트 | 용도·지원 범위 | 소스·배포 상태 |
| --- | --- | --- |
| [Action Time Reducer](https://github.com/ppebble/action-time-reducer) | B42.21용 0.5.1. 76개 행동별 샌드박스 옵션으로 시간을 조정합니다. 멀티 아이템 이동은 운영자의 별도 수동 서버 패치가 필요합니다. | 공개 소스 · [Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3812917260) |

## 총기 모드 확장

| 프로젝트 | 용도·지원 범위 | 소스·배포 상태 |
| --- | --- | --- |
| [Guns of Marz: Attachment Workbench](https://github.com/ppebble/guns-of-marz-attachment-workbench) | GoM 신형/Old Version과 GoM이 활성화된 바닐라 총기의 부품 확인·예약·순차 설치 작업대입니다. 인벤토리와 인접 보관함을 검색합니다. | 공개 소스 · [Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3798555914) |

## 생존 시나리오

| 프로젝트 | 용도·지원 범위 | 소스·배포 상태 |
| --- | --- | --- |
| [Knox Extraction](https://github.com/ppebble/knox-escape-mode) | 군용 라디오·릴레이 수리·옥상 신호탄과 방어를 통해 탈출하는 협동 생존 시나리오입니다. 모드 ID는 KnoxEscapeMode를 유지합니다. | 공개 소스 · [Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3797737398) |

## 호환성 모드

| 프로젝트 | 용도·지원 범위 | 소스·배포 상태 |
| --- | --- | --- |
| [2D Wardrobe Skin Adapter Fix](https://github.com/ppebble/2dw-skin-adapter-fix) | 2Dimension Wardrobe와 VSGirlBody SFW 조합에서 스킨 어댑터를 피부색 선택으로 처리하는 제한된 호환 패치입니다. | 공개 소스 · Workshop 등록 ID 없음 |
| [Lifestyle + 2D Wardrobe Shower Compatibility](https://github.com/ppebble/lifestyle-2dw-shower-compatibility) | Lifestyle 목욕·샤워에서 2DW 얼굴·머리카락·외형·피부 슬롯을 유지합니다. TABAS가 목욕을 담당하면 TABAS용 패치를 선택합니다. | 공개 소스 · [Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3789887641) |
| [Take A Bath And Shower + 2D Wardrobe Compatibility](https://github.com/ppebble/tabas-2dw-shower-compatibility) | TABAS 목욕·샤워에서 2DW 얼굴·머리카락·외형·피부 슬롯을 유지하고 일반 의류는 원래 흐름을 따릅니다. | 공개 소스 · [Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3790696431) |
| [Take A Bath And Shower + SCT Compatibility](https://github.com/ppebble/tabas-sct-shower-compatibility) | TABAS 목욕·샤워에서 SCT Guardian의 지정된 캐릭터 몸체 8종을 유지합니다. 일반 의류와 액세서리는 원래 처리를 따릅니다. | 공개 소스 · [Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3808856966) |
| TABAS + LG Extended Plumbing Compatibility | 0.1.6. TABAS 욕조·샤워와 LG 건물 급수망을 연결합니다. 멀티에서 통 10개/6000L 인식 확인, 창작마당 등록 준비 완료입니다. | 비공개 GitHub · 로컬 준비 · 창작마당 등록 준비 완료 |

## 특정 버전용 임시 패치

| 프로젝트 | 용도·지원 범위 | 소스·배포 상태 |
| --- | --- | --- |
| [CleanUI 42.20.4 Config Loader Fix](https://github.com/ppebble/cleanui-42-20-4-config-loader-fix) | 특정 CleanUI 42.20.4 업데이트에서 누락된 설정 로더용 임시 패치입니다. 원본에서 해결된 경우 제거하며 최신 버전 필요성은 별도 확인합니다. | 공개 소스 · Workshop 등록 ID 없음 |
| SOTO B42.20 Emote Compatibility | SOTO MP 패치와 B42.20의 Q 메뉴 제스처 정의 차이를 보완하는 임시 로컬 패치입니다. 최신 원본에서의 필요성은 별도 확인합니다. | 비공개 GitHub · 로컬 준비 · Workshop 등록 ID 없음 |

## 보관된 개발·배포 이력

| 프로젝트 | 용도·지원 범위 | 소스·배포 상태 |
| --- | --- | --- |
| [Simple Suppressors + Guns of Marz Visual Compatibility](https://github.com/ppebble/simple-suppressors-gom-compatibility) | Simple Suppressors 소음기의 GoM 외형 매핑 패치 0.1.0입니다. 로컬 작업·설치 폴더는 removed-20260919로 보관됐으며 현재 서버 목록에는 없습니다. 원본 통합 여부는 확인되지 않았습니다. | 공개 소스 · 로컬 보관본 · Workshop 등록 ID 없음 |
| True Music Addon: LSM03 | 기존 로컬 Workshop 업로드 자료에 남아 있는 음악 애드온입니다. 등록 ID는 확인되지만 현재 공개 접근은 확인되지 않았으며 Git 저장소는 이 작업공간에서 찾지 못했습니다. | Git 저장소 미확인 · 등록 ID `3255149948` / 공개 접근 미확인 |

## 확인 기록과 설치 경계

- Steam 공개 항목은 [Steam 공식 조회 결과](docs/workshop-verification.json)에서
  등록 ID·제목·공개 상태·게임 앱 ID를 확인했습니다. 업로더 폴더의 공개 설정이나
  오래된 저장소 설명만으로 현재 배포 상태를 판단하지 않습니다.
- TABAS+LG 0.1.6은 멀티 서버와 클라이언트 로그에서 통 10개/6,000L 인식이
  확인됐습니다. 동시 사용과 대규모 성능 검증까지 완료됐다는 뜻은 아닙니다.
- Action Time Reducer의 일반 모드와 멀티 아이템 이동용 수동 Java 서버 패치는
  설치 방식이 다릅니다. 게임 버전별 안내와 원복 절차는 해당 저장소를 따릅니다.
- CleanUI/SOTO 임시 패치는 해당 원본 버전에서 문제가 남아 있을 때만 사용합니다.
  최신 원본에서의 필요성을 이 카탈로그가 보장하지 않습니다.
- `safe-action-time`은 같은 `ActionTimeReducer` ID를 사용하던 이전 작업 폴더입니다.
  현재 저장소인 `action-time-reducer`와 중복 모드로 나열하지 않습니다.
- Simple Suppressors+GoM은 로컬 제거·보관 이력으로 기록합니다. GitHub 저장소는
  공개 상태이며 GitHub의 archived 설정이나 원본 통합 완료를 의미하지 않습니다.
- 비공개 GitHub 저장소의 공개 설정과 기존 모드·서버 설정은 변경하지 않았습니다.

Source tests, installed-file checks, and in-game verification are recorded separately.
Each project keeps an independent Git repository; these are intentionally not Git submodules.

## 작업공간 복제

기본 명령은 **현재 공개 소스 프로젝트 9개**만 복제합니다. 기존 경로는 그대로 두고,
비공개 저장소와 보관 이력은 기본 목록에서 제외합니다.

```powershell
.\scripts\clone-all.ps1 -Destination C:\path\to\workspace
```

접근 권한이 있는 비공개 프로젝트도 받으려면 `-IncludePrivate`, 공개된 과거
보관본도 받으려면 `-IncludeHistorical`을 추가합니다. 비공개 저장소는 Git 인증이
필요합니다. 복제 대상만 확인하려면 `-WhatIf`를 사용합니다.

```powershell
.\scripts\clone-all.ps1 -IncludePrivate -IncludeHistorical -WhatIf
```

이 스크립트는 저장소만 복제합니다. 모드를 설치·활성화하거나 게임·서버 파일을
변경하지 않습니다.

## 목록 검증

Node.js와 PowerShell 7(`pwsh`)이 설치된 환경에서 아래 명령으로 목록·배포 링크와
복제 대상 선택을 확인합니다. 복제 검증은 `-WhatIf`로 실행되며 저장소를 내려받지 않습니다.

```powershell
node tests/catalog-links.test.cjs
git diff --check
```
