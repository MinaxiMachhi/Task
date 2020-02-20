<template>
  <div id="app" class="container jumbotron">
    <input
      type="text"
      v-model.trim="searchQuery"
      @keyup="getFileteredName"
      placeholder="Search title.."
    />
    <div class="overflow-auto">
      <b-table
        class="table"
        id="my-table"
        :fields="fields"
        :items="item2"
        :current-page="currentPage"
        :per-page="perPage"
      >
        <template v-slot:cell(action)="data">
          <b-button @click="openModal(data.item)">Add balance</b-button>
        </template>
      </b-table>
      <b-modal ref="my-modal" @ok="addBalance">
        Amount :
        <input class="my-4" v-model.number="add" type="number" />
      </b-modal>
      <b-container class="bv-example-row">
        <b-row>
          <b-col class="d-flex justify-content-center">
            <b-form-select v-model="perPage" :options="options" size="sm" class="mt-3"></b-form-select>
          </b-col>
          <b-col class="d-flex justify-content-center">
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="my-table"
            ></b-pagination>
          </b-col>

          <b-col class="d-flex justify-content-center">
            <div class="mt-3" v-if="perPage == null">Current Page: {{ currentPage }}</div>
            <div class="mt-3" v-else>Current Page: {{ currentPage }} out of {{totalPage}}</div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      add: 0,
      balance: 0,
      perPage: null,
      currentPage: 1,
      searchQuery: null,
      fields: ["id", "first_name", "Balance", "action"],
      options: [
        { value: null, text: "Please select an option" },
        { value: 5, text: 5 },
        { value: 10, text: 10 },
        { value: 15, text: 15 },
        { value: 20, text: 20 },
        { value: 25, text: 25 }
      ],
      item2:[],
      items: [
        { id: 1, first_name: "Minaxi", Balance: 0 },
        { id: 2, first_name: "Nency", Balance: 0 },
        { id: 3, first_name: "Sagar", Balance: 0 },
        { id: 4, first_name: "Khushbu", Balance: 0 },
        { id: 5, first_name: "Bhoomi", Balance: 0 },
        { id: 6, first_name: "Riya", Balance: 0 },
        { id: 7, first_name: "kirti", Balance: 0 },
        { id: 8, first_name: "Gopi", Balance: 0 },
        { id: 9, first_name: "dhyey", Balance: 0 },
        { id: 10, first_name: "Krish", Balance: 0 },
        { id: 11, first_name: "Shaan", Balance: 0 },
        { id: 12, first_name: "Dev", Balance: 0 },
        { id: 13, first_name: "Ronak", Balance: 0 },
        { id: 14, first_name: "Shlok", Balance: 0 },
        { id: 15, first_name: "Arnav", Balance: 0 },
        { id: 16, first_name: "Vihaan", Balance: 0 },
        { id: 17, first_name: "Dharti", Balance: 0 },
        { id: 18, first_name: "Akash", Balance: 0 },
        { id: 19, first_name: "shreya", Balance: 0 },
        { id: 20, first_name: "meera", Balance: 0 }
      ]
    };
  },
  created(){
    this.searchQuery = this.getFileteredName();
  },
  watch: {
    searchQuery(newval) {
      if (newval === "") {
        this.item2 = this.items;
      }
    }
  },
  computed: {
    rows() {
      return this.items.length;
    },
    totalPage() {
      return Math.ceil(this.items.length / this.perPage);
    }
  },
  methods: {
    openModal(item) {
      this.tempdata = item;
      this.$refs["my-modal"].show();
    },
    addBalance() {
      this.tempdata.Balance += this.add;
    },
    getFileteredName() {
      if (this.searchQuery) {
        this.item2 = this.items.filter(item =>
          item.first_name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      } else {
        this.item2 = this.items;
      }
    }
  }
};
</script>