# Project Zomboid 모드 및 도구

[ppebble](https://github.com/ppebble)가 관리하는 Project Zomboid Build 42용 도구와
제한된 범위의 호환성 모드 카탈로그입니다.

각 프로젝트는 독립 Git 저장소로 유지합니다. 따라서 각 모드는 자체 이력, 의존성,
테스트, 설치 경로, 배포 주기를 가지며, 이 저장소는 서로 관계없는 소스를 하나로
합치지 않고도 전체 목록을 찾을 수 있게 합니다.

## 번역 도구

| 프로젝트 | 용도 | 배포처 |
| --- | --- | --- |
| [PZ AI Translation Generator](https://github.com/ppebble/pz-ai-translation-generator) | Workshop 원본을 수정하지 않고, 번역되지 않은 Build 42 모드 문자열용 별도 로컬 번역 팩을 만듭니다. | [Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3789612268) |

## 총기 모드 확장

| 프로젝트 | 호환 범위 | 배포처 |
| --- | --- | --- |
| [Guns of Marz: Attachment Workbench](https://github.com/ppebble/guns-of-marz-attachment-workbench) | Guns of Marz와 바닐라 총기의 부착물 호환성 확인·예약·순차 설치를 위한 전용 작업대입니다. 인벤토리와 인접 보관함을 함께 검색합니다. | [소스 저장소](https://github.com/ppebble/guns-of-marz-attachment-workbench) · Steam Workshop 게시 준비 중 |

## 생존 시나리오 모드

| 프로젝트 | 용도 | 배포처 |
| --- | --- | --- |
| [Knox Escape Mode](https://github.com/ppebble/knox-escape-mode) | 라디오와 릴레이, 옥상 탈출로 이어지는 협동 생존 시나리오 모드입니다. | [Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3797737398) · [소스 저장소](https://github.com/ppebble/knox-escape-mode) |

## 호환성 모드

| 프로젝트 | 호환 범위 | 배포처 |
| --- | --- | --- |
| [2D Wardrobe Skin Adapter Fix](https://github.com/ppebble/2dw-skin-adapter-fix) | 손상된 2Dimension Wardrobe 스킨 어댑터 렌더링을 안전한 기본 피부색 선택으로 대체합니다. | 소스 저장소 |
| [Lifestyle + 2D Wardrobe Shower Compatibility](https://github.com/ppebble/lifestyle-2dw-shower-compatibility) | Lifestyle 목욕·샤워 중 선택한 2Dimension Wardrobe 외형 슬롯이 유지되도록 합니다. | [Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3789887641) |
| [Take A Bath And Shower + 2D Wardrobe Compatibility](https://github.com/ppebble/tabas-2dw-shower-compatibility) | 일반 의류는 TABAS 기본 흐름을 따르면서, 선택한 2Dimension Wardrobe 외형 슬롯은 TABAS 제외 API로 유지합니다. | [Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3790696431) |
| [CleanUI 42.20.4 Config Loader Fix](https://github.com/ppebble/cleanui-42-20-4-config-loader-fix) | 해당 42.20.4 업데이트에서 누락된 CleanUI 설정 로더를 위한 임시 호환성 패치입니다. | 임시 소스 배포 |

## 프로젝트 원칙

- 의존 모드의 Workshop 파일과 게임 파일은 수정하거나 재배포하지 않습니다.
- 호환성 패치는 보고된 통합 경계 안에서만 유지합니다.
- 소스 테스트, 설치 파일 검사, 실제 인게임 검증은 각각 별도로 기록합니다.
- 상위 모드가 같은 수정 사항을 제공하면 임시 패치는 제거합니다.

## 전체 작업공간 복제

저장소들은 의도적으로 Git submodule을 사용하지 않습니다. 현재 프로젝트를
형제 폴더로 모두 복제하려면 다음을 실행하세요.

```powershell
.\scripts\clone-all.ps1
```

Pass `-Destination C:\path\to\workspace` to choose another directory. Existing
repositories are left untouched.
