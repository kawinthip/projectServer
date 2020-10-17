<template>
    <div>

        <p><button v-on:click="navigateTo('/room/create')">จองห้อง</button></p>
        <div v-for="room in rooms" v-bind:key="room.id">
            <p>room id: {{ room.id }}</p>
            <p>date: {{ room.title }}</p>
            <p>time: {{ room.content }}</p>
            <p>comments: {{ room.category }}</p>
            <p>numpeople: {{ room.status }}</p>
            <p>
            <button v-on:click="navigateTo('/room/'+ room.id)">ดู room </button>
            <button v-on:click="navigateTo('/room/edit/'+ room.id)">แก้ไข room</button>
            <button v-on:click="deleteRoom(room)">ลบข้อมูล</button>
            </p>
            <hr>
        </div>
    </div>
</template>
<script>
    import RoomsService from '@/services/RoomsService'
    export default {
        data () {
            return {
                rooms: []
            }
        },
        async created () {
            this.rooms = (await RoomsService.index()).data
        },
        /*methods: {
            logout () {
                this.$store.dispatch('setToken', null)
              
            this.$store.dispatch('setBlog', null)
                this.$router.push({
                    name: 'login'
                })
            },
            navigateTo (route) {
                this.$router.push(route)
            },*/
            async deletRoom (room) {
                let result = confirm("Want to delete?")
                if (result) {
                    try {
                        await RoomsService.delete(room)
                        this.refreshData()
                    } catch (err) {
                        console.log(err)
                    }
                }
            },
            async refreshData() {
                this.rooms = (await RoomsService.index()).data
            }
        }
    
</script>
<style scoped>
</style>