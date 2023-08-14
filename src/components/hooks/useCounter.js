import { ref } from "vue";

export default function useCounter(inthitialValue = 0, step = 1) {
    const count = ref(inthitialValue);
    const increment = () => count.value += step;

    return {
        count,
        increment,
    };
}