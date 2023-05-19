<script>
    import CopyInfoItem from "./CopyInfoItem.svelte";

    export let copyInfos;
    export let removeCopyInfoItem;
</script>

<div class="main">
    <ul>
        {#each copyInfos as copyInfo, index (copyInfo)}
            <CopyInfoItem {copyInfo} {removeCopyInfoItem} />
        {/each}
    </ul>
</div>
