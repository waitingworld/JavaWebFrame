<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path;
    pageContext.setAttribute("basePath", basePath);
%>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link href="<%=basePath%>/app/external_library/bootstrap/bootstrap.css" rel="stylesheet">
    <script type="text/javascript" data-main='<%=basePath%>/app/main.js'
            src="<%=basePath%>/app/external_library/require/require.js"></script>
    <title>BaseIndexJSP</title>
</head>
<body>
<button ui-sref="home">home</button>
<button ui-sref="firstPage">firstPage</button>
<button ui-sref="secondPage">secondPage</button>
<div ui-view></div>
<%--<table>--%>
    <%--<tr ng-repeat="city in citys">--%>
        <%--<td>{{$index+1}}</td>--%>
        <%--<td>{{city.id}}</td>--%>
        <%--<td>{{city.name}}</td>--%>
        <%--<td>{{city.country_code}}</td>--%>
        <%--<td>{{city.district}}</td>--%>
        <%--<td>{{city.population}}</td>--%>
    <%--</tr>--%>
<%--</table>--%>
</body>
</html>