<script>
	import CopyInfoHeader from "./components/CopyInfoHeader.svelte";
	import CopyInfoList from "./components/CopyInfoList.svelte";

	import { v4 as uuid } from "uuid";

	let copyInfos = [
		{
			id: uuid(),
			title: "예시) 클릭하면 오른쪽 텍스트가 복사됩니다.",
			value: "다른 곳에 붙여넣기 해보세요.",
		},
	];

	let newTitle = "";
	let newValue = "";

	function addCopyInfoItem() {
		if (newTitle && newValue) {
			const newCopyInfo = {
				id: uuid(),
				title: newTitle,
				value: newValue,
			};
			copyInfos = [...copyInfos, newCopyInfo];
			newTitle = "";
			newValue = "";
		}
	}

	function removeCopyInfoItem(id) {
		copyInfos = copyInfos.filter((copyInfo) => copyInfo.id !== id);
	}
</script>

<div class="app">
	<CopyInfoHeader bind:newTitle bind:newValue {addCopyInfoItem} />
	<CopyInfoList {copyInfos} {removeCopyInfoItem} />
</div>
