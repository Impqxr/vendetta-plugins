import { ReactNative as RN } from "@vendetta/metro/common";
import { instead } from "@vendetta/patcher";

const AudioManager =
  RN.NativeModules.AudioManager ??
  RN.NativeModules.RTNAudioManager ??
  RN.NativeModules.NativeAudioManagerModule;

export const onUnload = instead("setCommunicationModeOn", AudioManager, () => {});
