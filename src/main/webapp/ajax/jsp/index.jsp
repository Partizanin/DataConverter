<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@page session="false" %>
<html>
<head>
    <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
</head>

<body>
<input type="text" id='number1' />
<input type="text" id="number2" />
<input type="submit" value="=" onclick="result()"/>
<label id="result"></label>
<label id="resultText"></label>
<script>
    function result() {
        var myData = {"number1": $("#number1").value, "number2": document.getElementById('number2')};
        $.ajax({
            type: "POST",
            url: "AjaxServletCalculator",
            data: {jsonData: JSON.stringify(myData)},
            dataType: "json",

            //if received a response from the server
            success: function (data) {
                //our country code was correct so we have some information to display
                if (data.success) {

                    $("#result").value = (data.results);
                    $("#resultText").value = (data.resultText);
                }
            }
    });
    }
</script>
</body>
</html>
