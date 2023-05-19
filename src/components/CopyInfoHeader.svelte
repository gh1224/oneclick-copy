<script>
    export let newTitle;
    export let newValue;
    export let addCopyInfoItem;

    function handleAddInputKeyup(e) {
        if (e.keyCode == 13) {
            addCopyInfoItem();
        }
    }
</script>

<header>
    <div class="wrap">
        <h1>ONECLICK COPY</h1>
        <div class="add-bar">
            <input
                type="text"
                bind:value={newTitle}
                on:keyup={handleAddInputKeyup}
            />
            <input
                type="text"
                bind:value={newValue}
                on:keyup={handleAddInputKeyup}
            />
            <button on:click={addCopyInfoItem}>ADD</button>
        </div>
    </div>
</header>

<style>
    .add-bar {
        display: flex;
    }
</style>
