<template>
    <div>
        <h1>Show Blog</h1>
        <p>id: {{ room.id }}</p>
        <p>title: {{ room.title }}</p>
        <p>content: {{ room.content }}</p>
        <p>category: {{ room.category }}</p>
        <p>status: {{ room.status }}</p>
        <p>
        <button v-on:click="navigateTo('/room/edit/'+ room.id)">แก้ไข
        </button>
        <button v-on:click="navigateTo('/rooms')">กลับ </button>
        </p>
    </div>
</template>
<script>
    import RoomsService from '@/services/RoomsService'
    export default {
        data () {
            return {
                room: null
            }
        },
        async created () {
            try {
                let roomId = this.$route.params.roomId
                this.room = (await BlogsService.show(roomId)).data
            } catch (error) {
                console.log (error)
            }
        },
        methods : {
            navigateTo (route) {
                this.$router.push(route)
            },
        }
    }
</script>
<style scoped>
</style>