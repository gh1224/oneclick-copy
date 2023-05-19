<script>
    import { copytoClipboard } from "../utils/util.js";

    export let copyInfo;
    export let removeCopyInfoItem;

    function handleCopy() {
        copytoClipboard(copyInfo.value);
    }
</script>

<li on:click={handleCopy} on:keypress={handleCopy}>
    <span class="title">{copyInfo.title}</span>
    <span class="value">{copyInfo.value}</span>
    <a href="#null" on:click={() => removeCopyInfoItem(copyInfo.id)}>X</a>
</li>

<style>
    li:hover {
        background-color: #f6fbff;
    }

    li:active {
        background-color: #dbefff;
    }

    .title {
        font-weight: bold;
    }
</style>
