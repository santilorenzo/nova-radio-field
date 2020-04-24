export default {
    methods: {
        /**
         * Just determins if the option could potentially have an option.
         */
        hasOptionHint(option) {
            let label = this.getOptionLabel(option)
            return typeof option === 'object' && option[label]['hint'];
        },

        /**
         * Returns back an option if one is found, otherwise void.
         */
        getOptionHint(option) {
            let label = this.getOptionLabel(option)
            if (this.hasOptionHint(option)) {
                return option[label]['hint'];
            }
        },

        /**
         * Just determins if the option could potentially have an option.
         */
        hasOptionImage(option) {
            let label = this.getOptionLabel(option)
            return typeof option === 'object' && option[label]['image'];
        },

        /**
         * Returns back an option if one is found, otherwise void.
         */
        getOptionImage(option) {
            let label = this.getOptionLabel(option)
            if (this.hasOptionImage(option)) {
                return option[label]['image'];
            }
        },

        /**
         * Returns back the label of the option.
         */
        getOptionLabel(option) {
            if (typeof option === 'object') {
                return Object.keys(option).shift();
            }

            return option;
        }
    }
}
