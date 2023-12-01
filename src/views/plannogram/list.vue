<template>
    <div>
        <Menu/>
        <div class="container">
            <h1 class="m0">Plannogram</h1>
            <div class="row">
                <div class="col">
                    <p class="mt5 mb20 tc-green">Manage your Plannogram</p>
                </div>
                <div class="col flex">
                    <router-link to="/create-plannogram">
                        <button class="bt-green">+ Add</button>
                    </router-link>
                </div>
            </div>
            <div class="row bg-blue mt10 p10">
                <div class="col">
                    <input
                        class="search-field"
                        type="text"
                        id="deskripsi"
                        placeholder="Search by invoice number, name, amount..."
                    />
                </div>
                <div class="col flex">
                    <button class="bt-blue">Filter</button>
                </div>
            </div>
            <div class="mt50">
                <table>
                    <thead>
                        <tr>
                            <th>PLANNOGRAM NAME</th>
                            <th>BACKGROUND IMAGE</th>
                            <th>BROADCAST SCHEDULE</th>
                            <th>VALID FROM</th>
                            <th>VALID UNTIL</th>
                            <th>PLANNOGRAM STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item of list_plannogram" :key="item.id">
                            <td class="center">{{ item.plannogram_name }}</td>
                            <td class="center">
                                
                                <div v-if="item.background_image === 1">
                                    <img src="../../assets/images/flashSale.svg">
                                </div>
                                <div v-else="item.background_image === 2">
                                    <img src="../../assets/images/iphX.svg">
                                </div>
                            </td>
                            <td class="center">{{ item.broadcast_schedule }}</td>
                            <td class="center"><label Class="label-green">{{ item.valid_from }}</label></td>
                            <td class="center"><label Class="label-green">{{ item.valid_until }}</label></td>
                            <td class="center">
                                <div v-if="item.plannogram_status === 1">
                                    <label class="label-green">Active</label>
                                </div>
                                <div v-else="item.plannogram_status">
                                    <label class="label-red">Inactive</label>
                                </div>
                            </td>
                            <td class="center">
                                <div class="mt5">
                                    <router-link to="/edit-plannogram">
                                        <img src="../../assets/icons/edit.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <router-link to="/detail-plannogram">
                                        <img src="../../assets/icons/detail.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <img src="../../assets/icons/delete.svg">
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from "../../components/menu.vue"

export default {
	name: 'list-user',
	components: {
		Menu
	},
    data(){
        return {
            list_plannogram: [
                {
                    id: "1",
                    plannogram_name: "Flash Sale Minggu Ini",
                    background_image: 1,
                    broadcast_schedule: "Senin",
                    valid_from: "01-06-2021",
                    valid_until: "03-06-2021",
                    plannogram_status: 1
                },
                {
                    id: "2",
                    plannogram_name: "Produk Terbaru",
                    background_image: 2,
                    broadcast_schedule: "Rabu",
                    valid_from: "04-06-2021",
                    valid_until: "04-06-2021",
                    plannogram_status: 1
                }
                // ,
                // {
                //     id: "3",
                //     plannogram_name: "Flash Sale Minggu Ini",
                //     background_image: 3,
                //     broadcast_schedule: "Senin",
                //     valid_from: "01-06-2021",
                //     valid_until: "03-06-2021",
                //     plannogram_status: 3
                //     }
            ]
        }
    }
}
</script>