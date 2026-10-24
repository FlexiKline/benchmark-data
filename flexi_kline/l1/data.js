window.BENCHMARK_DATA = {
  "lastUpdate": 1792853160858,
  "repoUrl": "https://github.com/FlexiKline/FlexiKline",
  "entries": {
    "L1 frame time (us/frame)": [
      {
        "commit": {
          "author": {
            "name": "Andy.Zhao",
            "username": "kangqiao",
            "email": "kangqiao610@gmail.com"
          },
          "committer": {
            "name": "Andy.Zhao",
            "username": "kangqiao",
            "email": "kangqiao610@gmail.com"
          },
          "id": "3eb8b96a970a2c9d194b8c148ace75aa708201b4",
          "message": "refactor(demo): make KlineState base interface-only, inject config factories via mixin\n\n- Rename MyKlineStateBase to KlineStateBase; turn createFlexiKlineConfig /\n  createIndicatorConfig into abstract methods, with concrete My* overrides\n  injected by MyKlineDataCenterMixin\n- Add framework BaseIndicatorConfig (IIndicatorConfig + ChangeNotifier skeleton)\n  in configuration.dart; drop the local demo copy and have\n  MyKlineIndicatorConfig extend the framework base with MyKlineStorageMixin\n- Unify MyKlineStorage into a mixin (MyKlineStorageMixin), remove the redundant\n  abstract class\n- Add customTooltips extension point in KlineStateBase and wire up\n  onCrossCustomTooltip in initState\n- Streamline related comments and copy",
          "timestamp": "2026-10-07T01:45:48Z",
          "url": "https://github.com/FlexiKline/FlexiKline/commit/3eb8b96a970a2c9d194b8c148ace75aa708201b4"
        },
        "date": 1792852781885,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "paint_frame/pan/base/cw7",
            "value": 651.3,
            "range": "±3.0%",
            "unit": "us/frame"
          },
          {
            "name": "paint_frame/pan/base/cw2",
            "value": 872.4,
            "range": "±0.6%",
            "unit": "us/frame"
          },
          {
            "name": "paint_frame/cross/base/slow",
            "value": 613.3,
            "range": "±11.4%",
            "unit": "us/frame"
          },
          {
            "name": "paint_frame/cross/base/fast",
            "value": 713.8,
            "range": "±10.3%",
            "unit": "us/frame"
          },
          {
            "name": "paint_frame/pan/multi/cw7",
            "value": 1080.9,
            "range": "±4.5%",
            "unit": "us/frame"
          },
          {
            "name": "paint_frame/pan/multi/cw2",
            "value": 1486,
            "range": "±4.1%",
            "unit": "us/frame"
          },
          {
            "name": "paint_frame/cross/multi/slow",
            "value": 925.1,
            "range": "±15.1%",
            "unit": "us/frame"
          },
          {
            "name": "paint_frame/cross/multi/fast",
            "value": 1057.4,
            "range": "±17.1%",
            "unit": "us/frame"
          },
          {
            "name": "frame_variants/zoom/base",
            "value": 571.1,
            "range": "±10.8%",
            "unit": "us/frame"
          },
          {
            "name": "frame_variants/accurate/base",
            "value": 654.1,
            "range": "±13.6%",
            "unit": "us/frame"
          },
          {
            "name": "frame_variants/zoom/multi",
            "value": 987.9,
            "range": "±14.9%",
            "unit": "us/frame"
          },
          {
            "name": "frame_variants/accurate/multi",
            "value": 1445.7,
            "range": "±12.6%",
            "unit": "us/frame"
          },
          {
            "name": "frame_variants/resize/multi",
            "value": 1120.1,
            "range": "±13.3%",
            "unit": "us/frame"
          },
          {
            "name": "frame_variants/candles/hollow/cw2",
            "value": 812.3,
            "range": "±5.6%",
            "unit": "us/frame"
          },
          {
            "name": "frame_variants/candles/ohlc/cw2",
            "value": 793.1,
            "range": "±7.0%",
            "unit": "us/frame"
          },
          {
            "name": "frame_variants/candles/line/cw2",
            "value": 481,
            "range": "±9.9%",
            "unit": "us/frame"
          },
          {
            "name": "frame_scenarios/scale/base",
            "value": 663.8,
            "range": "±5.6%",
            "unit": "us/frame"
          },
          {
            "name": "frame_scenarios/realtime/base",
            "value": 917.3,
            "range": "±2.2%",
            "unit": "us/frame"
          },
          {
            "name": "frame_scenarios/startup/base",
            "value": 2402,
            "range": "±5.2%",
            "unit": "us"
          },
          {
            "name": "frame_scenarios/scale/multi",
            "value": 1161.3,
            "range": "±7.1%",
            "unit": "us/frame"
          },
          {
            "name": "frame_scenarios/realtime/multi",
            "value": 1348.2,
            "range": "±8.1%",
            "unit": "us/frame"
          },
          {
            "name": "frame_scenarios/startup/multi",
            "value": 2555,
            "range": "±21.3%",
            "unit": "us"
          },
          {
            "name": "frame_scenarios/load/candles-40",
            "value": 1018.5,
            "range": "±1.3%",
            "unit": "us/frame"
          },
          {
            "name": "frame_scenarios/load/candles-140",
            "value": 1222.3,
            "range": "±8.2%",
            "unit": "us/frame"
          },
          {
            "name": "frame_scenarios/load/candles-400",
            "value": 1707,
            "range": "±13.0%",
            "unit": "us/frame"
          },
          {
            "name": "frame_scenarios/load/indicators-0",
            "value": 580,
            "range": "±4.5%",
            "unit": "us/frame"
          },
          {
            "name": "frame_scenarios/load/indicators-3",
            "value": 773.7,
            "range": "±11.3%",
            "unit": "us/frame"
          },
          {
            "name": "frame_scenarios/load/indicators-7",
            "value": 1012,
            "range": "±13.3%",
            "unit": "us/frame"
          },
          {
            "name": "frame_scenarios/load/indicators-14",
            "value": 1405.2,
            "range": "±17.6%",
            "unit": "us/frame"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Andy.Zhao",
            "username": "kangqiao",
            "email": "kangqiao610@gmail.com"
          },
          "committer": {
            "name": "Andy.Zhao",
            "username": "kangqiao",
            "email": "kangqiao610@gmail.com"
          },
          "id": "1fed366e4b8ad8760bd5903c40c53cd70637969f",
          "message": "chore(release): prepare flexi_kline 2.6.0",
          "timestamp": "2026-10-13T08:56:14Z",
          "url": "https://github.com/FlexiKline/FlexiKline/commit/1fed366e4b8ad8760bd5903c40c53cd70637969f"
        },
        "date": 1792853160496,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "paint_frame/pan/base/cw7",
            "value": 246.5,
            "range": "±3.7%",
            "unit": "us/frame"
          },
          {
            "name": "paint_frame/pan/base/cw2",
            "value": 270.3,
            "range": "±3.7%",
            "unit": "us/frame"
          },
          {
            "name": "paint_frame/cross/base/slow",
            "value": 398.7,
            "range": "±0.4%",
            "unit": "us/frame"
          },
          {
            "name": "paint_frame/cross/base/fast",
            "value": 586.1,
            "range": "±0.4%",
            "unit": "us/frame"
          },
          {
            "name": "paint_frame/pan/multi/cw7",
            "value": 624.2,
            "range": "±2.1%",
            "unit": "us/frame"
          },
          {
            "name": "paint_frame/pan/multi/cw2",
            "value": 851.9,
            "range": "±0.2%",
            "unit": "us/frame"
          },
          {
            "name": "paint_frame/cross/multi/slow",
            "value": 675.3,
            "range": "±3.6%",
            "unit": "us/frame"
          },
          {
            "name": "paint_frame/cross/multi/fast",
            "value": 937.1,
            "range": "±2.1%",
            "unit": "us/frame"
          },
          {
            "name": "frame_variants/zoom/base",
            "value": 166.7,
            "range": "±8.2%",
            "unit": "us/frame"
          },
          {
            "name": "frame_variants/accurate/base",
            "value": 341.3,
            "range": "±4.6%",
            "unit": "us/frame"
          },
          {
            "name": "frame_variants/zoom/multi",
            "value": 599.8,
            "range": "±2.6%",
            "unit": "us/frame"
          },
          {
            "name": "frame_variants/accurate/multi",
            "value": 1148.4,
            "range": "±3.4%",
            "unit": "us/frame"
          },
          {
            "name": "frame_variants/resize/multi",
            "value": 711.5,
            "range": "±0.3%",
            "unit": "us/frame"
          },
          {
            "name": "frame_variants/candles/hollow/cw2",
            "value": 249.1,
            "range": "±4.0%",
            "unit": "us/frame"
          },
          {
            "name": "frame_variants/candles/ohlc/cw2",
            "value": 215,
            "range": "±3.9%",
            "unit": "us/frame"
          },
          {
            "name": "frame_variants/candles/line/cw2",
            "value": 134.1,
            "range": "±8.5%",
            "unit": "us/frame"
          },
          {
            "name": "frame_scenarios/scale/base",
            "value": 292.5,
            "range": "±7.8%",
            "unit": "us/frame"
          },
          {
            "name": "frame_scenarios/realtime/base",
            "value": 506.4,
            "range": "±12.9%",
            "unit": "us/frame"
          },
          {
            "name": "frame_scenarios/startup/base",
            "value": 2385,
            "range": "±13.2%",
            "unit": "us"
          },
          {
            "name": "frame_scenarios/scale/multi",
            "value": 699.1,
            "range": "±13.0%",
            "unit": "us/frame"
          },
          {
            "name": "frame_scenarios/realtime/multi",
            "value": 898.2,
            "range": "±16.0%",
            "unit": "us/frame"
          },
          {
            "name": "frame_scenarios/startup/multi",
            "value": 2222,
            "range": "±24.4%",
            "unit": "us"
          },
          {
            "name": "frame_scenarios/load/candles-40",
            "value": 254.8,
            "range": "±8.1%",
            "unit": "us/frame"
          },
          {
            "name": "frame_scenarios/load/candles-140",
            "value": 327.8,
            "range": "±0.4%",
            "unit": "us/frame"
          },
          {
            "name": "frame_scenarios/load/candles-400",
            "value": 410.5,
            "range": "±12.5%",
            "unit": "us/frame"
          },
          {
            "name": "frame_scenarios/load/indicators-0",
            "value": 127.1,
            "range": "±7.1%",
            "unit": "us/frame"
          },
          {
            "name": "frame_scenarios/load/indicators-3",
            "value": 350.6,
            "range": "±12.1%",
            "unit": "us/frame"
          },
          {
            "name": "frame_scenarios/load/indicators-7",
            "value": 629.2,
            "range": "±8.3%",
            "unit": "us/frame"
          },
          {
            "name": "frame_scenarios/load/indicators-14",
            "value": 1030.7,
            "range": "±7.4%",
            "unit": "us/frame"
          }
        ]
      }
    ],
    "L1 speedup vs previous release (x)": [
      {
        "commit": {
          "author": {
            "name": "Andy.Zhao",
            "username": "kangqiao",
            "email": "kangqiao610@gmail.com"
          },
          "committer": {
            "name": "Andy.Zhao",
            "username": "kangqiao",
            "email": "kangqiao610@gmail.com"
          },
          "id": "3eb8b96a970a2c9d194b8c148ace75aa708201b4",
          "message": "refactor(demo): make KlineState base interface-only, inject config factories via mixin\n\n- Rename MyKlineStateBase to KlineStateBase; turn createFlexiKlineConfig /\n  createIndicatorConfig into abstract methods, with concrete My* overrides\n  injected by MyKlineDataCenterMixin\n- Add framework BaseIndicatorConfig (IIndicatorConfig + ChangeNotifier skeleton)\n  in configuration.dart; drop the local demo copy and have\n  MyKlineIndicatorConfig extend the framework base with MyKlineStorageMixin\n- Unify MyKlineStorage into a mixin (MyKlineStorageMixin), remove the redundant\n  abstract class\n- Add customTooltips extension point in KlineStateBase and wire up\n  onCrossCustomTooltip in initState\n- Streamline related comments and copy",
          "timestamp": "2026-10-07T01:45:48Z",
          "url": "https://github.com/FlexiKline/FlexiKline/commit/3eb8b96a970a2c9d194b8c148ace75aa708201b4"
        },
        "date": 1792852783850,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "paint_frame/pan/base/cw7",
            "value": 1,
            "unit": "x"
          },
          {
            "name": "paint_frame/pan/base/cw2",
            "value": 1.01,
            "unit": "x"
          },
          {
            "name": "paint_frame/cross/base/slow",
            "value": 1.1,
            "unit": "x"
          },
          {
            "name": "paint_frame/cross/base/fast",
            "value": 1.03,
            "unit": "x"
          },
          {
            "name": "paint_frame/pan/multi/cw7",
            "value": 1.06,
            "unit": "x"
          },
          {
            "name": "paint_frame/pan/multi/cw2",
            "value": 1.1,
            "unit": "x"
          },
          {
            "name": "paint_frame/cross/multi/slow",
            "value": 1.08,
            "unit": "x"
          },
          {
            "name": "paint_frame/cross/multi/fast",
            "value": 1.16,
            "unit": "x"
          },
          {
            "name": "frame_variants/zoom/base",
            "value": 1.04,
            "unit": "x"
          },
          {
            "name": "frame_variants/accurate/base",
            "value": 1.06,
            "unit": "x"
          },
          {
            "name": "frame_variants/zoom/multi",
            "value": 1.06,
            "unit": "x"
          },
          {
            "name": "frame_variants/accurate/multi",
            "value": 1.1,
            "unit": "x"
          },
          {
            "name": "frame_variants/resize/multi",
            "value": 1.08,
            "unit": "x"
          },
          {
            "name": "frame_variants/candles/hollow/cw2",
            "value": 1.07,
            "unit": "x"
          },
          {
            "name": "frame_variants/candles/ohlc/cw2",
            "value": 1.13,
            "unit": "x"
          },
          {
            "name": "frame_variants/candles/line/cw2",
            "value": 1.13,
            "unit": "x"
          },
          {
            "name": "frame_scenarios/scale/base",
            "value": 1.02,
            "unit": "x"
          },
          {
            "name": "frame_scenarios/realtime/base",
            "value": 0.97,
            "unit": "x"
          },
          {
            "name": "frame_scenarios/startup/base",
            "value": 0.77,
            "unit": "x"
          },
          {
            "name": "frame_scenarios/scale/multi",
            "value": 1.01,
            "unit": "x"
          },
          {
            "name": "frame_scenarios/realtime/multi",
            "value": 1.01,
            "unit": "x"
          },
          {
            "name": "frame_scenarios/startup/multi",
            "value": 1.07,
            "unit": "x"
          },
          {
            "name": "frame_scenarios/load/candles-40",
            "value": 1.01,
            "unit": "x"
          },
          {
            "name": "frame_scenarios/load/candles-140",
            "value": 1.01,
            "unit": "x"
          },
          {
            "name": "frame_scenarios/load/candles-400",
            "value": 1.03,
            "unit": "x"
          },
          {
            "name": "frame_scenarios/load/indicators-0",
            "value": 0.99,
            "unit": "x"
          },
          {
            "name": "frame_scenarios/load/indicators-3",
            "value": 1.04,
            "unit": "x"
          },
          {
            "name": "frame_scenarios/load/indicators-7",
            "value": 1.08,
            "unit": "x"
          },
          {
            "name": "frame_scenarios/load/indicators-14",
            "value": 1.14,
            "unit": "x"
          }
        ]
      }
    ]
  }
}