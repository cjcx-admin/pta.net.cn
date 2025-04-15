function validateIDCard(sNo) {
    sNo = sNo.toString()
    if (sNo.length == 18) {
        var a, b, c;
        var numReg = /^\d+$/;
        if (!sNo.substr(0, 17).match(numReg)) {
            return false
        }
        a = parseInt(sNo.substr(0, 1)) * 7 + parseInt(sNo.substr(1, 1)) * 9 + parseInt(sNo.substr(2, 1)) * 10;
        a = a + parseInt(sNo.substr(3, 1)) * 5 + parseInt(sNo.substr(4, 1)) * 8 + parseInt(sNo.substr(5, 1)) * 4;
        a = a + parseInt(sNo.substr(6, 1)) * 2 + parseInt(sNo.substr(7, 1)) * 1 + parseInt(sNo.substr(8, 1)) * 6;
        a = a + parseInt(sNo.substr(9, 1)) * 3 + parseInt(sNo.substr(10, 1)) * 7 + parseInt(sNo.substr(11, 1)) * 9;
        a = a + parseInt(sNo.substr(12, 1)) * 10 + parseInt(sNo.substr(13, 1)) * 5 + parseInt(sNo.substr(14, 1)) * 8;
        a = a + parseInt(sNo.substr(15, 1)) * 4 + parseInt(sNo.substr(16, 1)) * 2;
        b = a % 11;
        if (b == 2) {
            c = sNo.substr(17, 1);
        } else {
            c = parseInt(sNo.substr(17, 1));
        }
        switch (b) {
            case 0:
                if (c != 1) {
                    return false;
                }
                break;
            case 1:
                if (c != 0) {
                    return false;
                }
                break;
            case 2:
                if (c != "X") {
                    return false;
                }
                break;
            case 3:
                if (c != 9) {
                    return false;
                }
                break;
            case 4:
                if (c != 8) {
                    return false;
                }
                break;
            case 5:
                if (c != 7) {
                    return false;
                }
                break;
            case 6:
                if (c != 6) {
                    return false;
                }
                break;
            case 7:
                if (c != 5) {
                    return false;
                }
                break;
            case 8:
                if (c != 4) {
                    return false;
                }
                break;
            case 9:
                if (c != 3) {
                    return false;
                }
                break;
            case 10:
                if (c != 2) {
                    return false
                }
        }
    } else {
        if (!sNo.match(numReg)) {
            return false
        }
    }
    switch (sNo.length) {
        case 15:
            //var year = parseInt("19" + sNo.substr(6, 2));
            //var month = parseInt(sNo.substr(8, 2));
            //var day = parseInt(sNo.substr(10, 2));

            //var d = new Date(year, month, day);
            //return d.getFullYear() == year && d.getMonth() == month && d.getDate() == day;
            return true;
        case 18:
            //var year = parseInt(sNo.substr(6, 4));
            //var month = parseInt(sNo.substr(10, 2));
            //var day = parseInt(sNo.substr(12, 2));

            //var d = new Date(year, month, day);//����342623199212227126������d������Ȼ��1993��
            //return parseInt(d.getFullYear()) == parseInt(year) && parseInt(d.getMonth()) == parseInt(month) && parseInt(d.getDate()) == parseInt(day);
            return true;
    }
    return false
}