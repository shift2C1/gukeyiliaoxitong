package com.pipichao;

import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

/**
 * @Author: wangchao
 * @date: 2023/8/4 15:12
 **/
@org.springframework.stereotype.Controller
//@RequestMapping("/index.html/bone/user")
public class Controller {

    /**
     * username password
     * @return
     */
    @PostMapping("/index.html/bone/userlogin")
    @ResponseBody
    public String login(){
        return "{\n" +
                "    \"id\": \"102\",\n" +
                "    \"username\": \"15648161208\",\n" +
                "    \"department\": \"矫形外科\",\n" +
                "    \"role\": \"DOCTOR\",\n" +
                "    \"name\": \"盛凯\",\n" +
                "    \"hospital\": \"国康医院\",\n" +
                "    \"phone\": \"15648161208\",\n" +
                "    \"email\": \"1179946088@qq.com\",\n" +
                "    \"status\": \"NORMAL\",\n" +
                "    \"createBy\": \"2023-07-31 14:02:56\",\n" +
                "    \"caseCounts\": null,\n" +
                "    \"token\": \"eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MTAyLCJ1c2VybmFtZSI6Iuebm-WHryIsInJvbGUiOiJET0NUT1IiLCJpYXQiOjE2OTExMzMwODksImV4cCI6MTY5MTIxOTQ4OX0.izyOI1eWsTyWA0IpYceNapgoW5PeAT48Tf06POVdAaY\",\n" +
                "    \"caseCount\": \"2\",\n" +
                "    \"maxCaseCount\": \"11\"\n" +
                "}";
    }
    @GetMapping("/measure")
    public String messure(){
        return "redirect:/celiang.html";
    }

}
