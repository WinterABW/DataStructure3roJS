import java.util.ArrayList;
import java.util.List;

public class QuickSort {
    public static List<Integer> quickSort(List<Integer> arr) {
        if (arr.size() < 2)
            return arr;

        int pivot = arr.get(arr.size() - 1);
        List<Integer> left = new ArrayList<>();
        List<Integer> right = new ArrayList<>();

        for (int i = 0; i < arr.size() - 1; i++) {
            if (arr.get(i) < pivot)
                left.add(arr.get(i));
            else
                right.add(arr.get(i));
        }

        List<Integer> sortedLeft = quickSort(left);
        List<Integer> sortedRight = quickSort(right);

        List<Integer> sortedArr = new ArrayList<>();
        sortedArr.addAll(sortedLeft);
        sortedArr.add(pivot);
        sortedArr.addAll(sortedRight);

        return sortedArr;
    }

    public static void main(String[] args) {
        List<Integer> arr = new ArrayList<>();
        arr.add(5);
        arr.add(2);
        arr.add(8);
        arr.add(1);
        arr.add(9);
        arr.add(3);

        List<Integer> sortedArr = quickSort(arr);

        System.out.println("Sorted Array: " + sortedArr);
    }
}
