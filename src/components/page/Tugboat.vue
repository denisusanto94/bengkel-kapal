<template>
    <div class="tugboat">
        <div>
            <b-card title="Tugboat Data">
                <b-row style="margin-bottom:1rem">
                    <b-col cols="3">
                        <b-input-group>
                            <template #prepend>
                            <b-input-group-text >Shipname</b-input-group-text>
                            </template>
                            <template #append>
                            <b-dropdown text="Pilih Shipname" variant="primary">
                                <b-dropdown-item>Partia 1</b-dropdown-item>
                                <b-dropdown-item>Partia 2</b-dropdown-item>
                            </b-dropdown>
                            </template>
                        </b-input-group>
                    </b-col>
                    <b-col cols="3">
                        <b-input-group>
                            <template #prepend>
                            <b-input-group-text >Alam Category</b-input-group-text>
                            </template>
                            <template #append>
                            <b-dropdown text="Pilih Category" variant="primary">
                                <b-dropdown-item>ME Gas Buang</b-dropdown-item>
                                <b-dropdown-item>ME Gas Masuk</b-dropdown-item>
                            </b-dropdown>
                            </template>
                        </b-input-group>
                    </b-col>
                    <b-col cols="5">
                        <b-input-group>
                            <template #prepend>
                            <b-input-group-text >Event Priode</b-input-group-text>
                            </template>
                            <template #append>
                            <date-picker  v-model="value1" type="date" range placeholder="Select date range"></date-picker>
                            </template>
                        </b-input-group>
                    </b-col>
                     <b-col cols="1"><i class="fa fa-refresh icon-refresh" style="color:#EE3B37" aria-hidden="true"></i></b-col>
                </b-row>
                <div>
                    <vue-good-table
                    :columns="columns"
                    :rows="rows"
                    :search-options="{
                        enabled: true
                    }"
                    :sort-options="{
                        enabled: true,
                        initialSortBy: {field: 'name', type: 'asc'}
                    }"
                    :pagination-options="{
                        enabled: true,
                        mode: 'pages'
                    }
                    ">
                    </vue-good-table>
                </div>
            </b-card>
        </div>
    </div>
</template>

<script>

export default {
  name: 'my-component',
  data(){
    return {
      value1: [new Date(2019, 9, 8), new Date(2019, 9, 19)],
      value2: [],
      columns: [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MMM do yy',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
        },
      ],
      rows: [
        { id:1, name:"John", age: 20, createdAt: '',score: 0.03343 },
        { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
        { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
        { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
        { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
        { id:1, name:"John", age: 20, createdAt: '',score: 0.03343 },
        { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
        { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
        { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
        { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
                { id:1, name:"John", age: 20, createdAt: '',score: 0.03343 },
        { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
        { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
        { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
        { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
        { id:1, name:"John", age: 20, createdAt: '',score: 0.03343 },
        { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
        { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
        { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
        { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
      ],
    };
  },
};
</script>