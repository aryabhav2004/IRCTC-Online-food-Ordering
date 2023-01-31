function formValidator() {

    if (isAlphanumeric(addr, "Numbers and Letters Only for Address")) {

        function isAlphanumeric(elem, helperMsg) {
            var alphaExp = /^[0-9a-zA-Z]+$/;
            if (elem.value.match(alphaExp)) {
                return true;
            } else {
                alert(helperMsg);
                elem.focus();
                return false;
            }
        }
    }