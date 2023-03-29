import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
	key: "recoil-persist",
	storage: typeof window === "undefined" ? undefined : localStorage
});

export const isPublishedState = atom({
	key: "isPublishedState",
	default: false,
	effects_UNSTABLE: [persistAtom]
});
