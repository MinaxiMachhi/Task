<template>
  <div>   
    <div slot="table">
      <table id="my-table" class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Balance</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.balance}}</td>
            <td>
              <b-button v-b-modal="'my-modal'+item.id">Add Balance</b-button>
            </td>
            <b-modal :id="'my-modal'+item.id" @ok="setBalance(item)" title="add balance">
              <input class="md-4" v-model.number="add" type="number" />
            </b-modal>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rows: 10,
      perPage: 3,
      currentPage: 1,
      add: 0,
      items: [
        { id: 1, name: "Minaxi", balance: 0, action: "" },
        { id: 2, name: "Nency", balance: 0, action: "" },
        { id: 3, name: "Sagar", balance: 0, action: "" },
        { id: 4, name: "khushbu", balance: 0, action: "" },
        { id: 5, name: "Bhoomi", balance: 0, action: "" },
        { id: 6, name: "Riya", balance: 0, action: "" },
        { id: 7, name: "Jiya", balance: 0, action: "" },
        { id: 8, name: "Mahi", balance: 0, action: "" },
        { id: 9, name: "kirti", balance: 0, action: "" },
        { id: 10, name: "Gopi", balance: 0, action: "" }
      ]
    };
  },
  computed: {
    rows() {
      return this.items.length;
    }
  },
  methods: {
    setBalance(item) {
      item.balance += this.add;
    },
    updateResource(data) {
      this.item = data;
    }
  }
};
</script>
