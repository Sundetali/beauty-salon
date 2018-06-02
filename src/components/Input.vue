<template>
	<div class="form-group">
        <label>{{ name }} {{symbol}}</label>
        <span class="fa" :class="validClass" v-if="activated">
        </span>
        <input type="text" 
        	   class="form-control"
			   :value="value"
			   :placeholder="placeholder"
			   @input="onInput"
			   autocomplete="off">

    </div>
</template>

<style scoped>	
	label {
		font-weight: bold;
	}
	input.form-control {
	    line-height: 1.3;
	    color: #333;
	    background-color: #fff;
	    border: 1px solid #a9a9a9;
	    padding: 8px 12px;
	    border-radius: 4px;
	    font-size: 1.17rem;
	}
	input.form-control:focus {
	    border-color: #bf2e23;  
	}

</style>

<script>
	export default {
		props: ['name', 'value', 'pattern', 'symbol', 'placeholder'],
		data(){
			return {
				activated: this.value != ''
			}
		},
		mounted(){
			this.$emit('changeStatus', this.isValid);
		},
		computed: {
			isValid(){
				return this.pattern.test(this.value);
			},
			validClass(){
				return this.isValid ? 
						'fa-check-circle text-success' :
						'fa-exclamation-circle text-danger';
			}
		},
		methods: {
			onInput(e){
				this.activated = true;
				this.$emit('update:value', e.target.value);
			}
		},
		watch: {
			isValid(){
				this.$emit('changeStatus', this.isValid);
			}
		}
	}
</script>