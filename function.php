<?php
function is_adult($age) {
    if ($age < 18)
    return "false"; //return keyword is not for output, to see output, change the return to echo
    else if ($age >= 18)
    return "true";

}

echo is_adult(20);
?>