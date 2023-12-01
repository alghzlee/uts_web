<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="mr40 mt20">
                    <router-link to="/list-plannogram">
                        <img src="../../assets/icons/back.svg">
                    </router-link>
                </div>
                <div>
                    <h1 class="m0">Update Plannogram</h1>
                    <p class="mt5 mb20 tc-green">Increase the visibility of promotional products in our store highlights</p>
                </div>
            </div>
            <hr class="uline-grey">
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Plannogram Name</label>
                </div>
                <div class="container relative">
                    <input class="form-text" type="text" minlength="5" maxlength="20"
                        placeholder="Masukkan Plannogram Name">
                    <span class="addon-right">| 5 / 20</span>
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Broadcast Schedule</label>
                </div>
                <div class="w80">
                    <input
                        class="form-text"
                        type="text"
                        placeholder="Input your username"
                    >
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Valid From</label>
                </div>
                <div class="w80">
                    <input
                        class="form-text"
                        type="text"
                        placeholder="Input your email"
                    >
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Roles</label>
                </div>
                <div class="w80">
                    <select class="form-select">
                        <option disabled selected>--- Select Role ---</option>
                        <option value="1">Super Admin</option>
                        <option value="2">Marketing</option>
                        <option value="3">Sales</option>
                    </select>
                </div>
            </div>
            <div class="flex mt30">
                <router-link to="/list-user">
                    <button class="bt-submit-green">Update User</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name: 'detail-plannogram'
}
</script>