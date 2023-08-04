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

    @PostMapping("index.html/bone/user/reLogin")
    @ResponseBody
    public String relogin(){
        return this.login();
    }
    @GetMapping("/measure")
    public String messure(){
        return "redirect:/celiang.html";
    }


    @ResponseBody
    @GetMapping("index.html/bone/case/queryCase")
    public String queryCase(@RequestParam(required = false) String patient){
        return "{\n" +
                "    \"total\": 2,\n" +
                "    \"list\": [\n" +
                "        {\n" +
                "            \"id\": \"1691132456586\",\n" +
                "            \"patient\": \"bingli2\",\n" +
                "            \"patientAge\": 53,\n" +
                "            \"gender\": \"男\",\n" +
                "            \"idCard\": null,\n" +
                "            \"phone\": null,\n" +
                "            \"hospitalCaseId\": null,\n" +
                "            \"preoperativeAppearance\": null,\n" +
                "            \"preoperativeXray\": null,\n" +
                "            \"affectedSide\": \"右\",\n" +
                "            \"affectedLimb\": \"下肢\",\n" +
                "            \"caseType\": \"畸形\",\n" +
                "            \"caseInfo\": \"膝内翻\",\n" +
                "            \"doctor\": \"102\",\n" +
                "            \"doctorName\": \"盛凯\",\n" +
                "            \"hospital\": \"国康医院\",\n" +
                "            \"mark\": \"\",\n" +
                "            \"valid\": \"VALID\",\n" +
                "            \"modifiedBy\": \"2023-08-04 15:00:57\",\n" +
                "            \"createBy\": \"2023-08-04 15:00:57\",\n" +
                "            \"birthday\": \"1970-01-01 08:00:00\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"id\": \"1690972599899\",\n" +
                "            \"patient\": \"bingli1\",\n" +
                "            \"patientAge\": 53,\n" +
                "            \"gender\": \"男\",\n" +
                "            \"idCard\": null,\n" +
                "            \"phone\": null,\n" +
                "            \"hospitalCaseId\": null,\n" +
                "            \"preoperativeAppearance\": null,\n" +
                "            \"preoperativeXray\": null,\n" +
                "            \"affectedSide\": \"左\",\n" +
                "            \"affectedLimb\": \"下肢\",\n" +
                "            \"caseType\": \"骨折\",\n" +
                "            \"caseInfo\": \"骨折\",\n" +
                "            \"doctor\": \"102\",\n" +
                "            \"doctorName\": \"盛凯\",\n" +
                "            \"hospital\": \"国康医院\",\n" +
                "            \"mark\": \"\",\n" +
                "            \"valid\": \"VALID\",\n" +
                "            \"modifiedBy\": \"2023-08-02 18:36:40\",\n" +
                "            \"createBy\": \"2023-08-02 18:36:40\",\n" +
                "            \"birthday\": \"1970-01-01 08:00:00\"\n" +
                "        }\n" +
                "    ],\n" +
                "    \"pageNum\": 1,\n" +
                "    \"pageSize\": 15,\n" +
                "    \"size\": 2,\n" +
                "    \"startRow\": 1,\n" +
                "    \"endRow\": 2,\n" +
                "    \"pages\": 1,\n" +
                "    \"prePage\": 0,\n" +
                "    \"nextPage\": 0,\n" +
                "    \"isFirstPage\": true,\n" +
                "    \"isLastPage\": true,\n" +
                "    \"hasPreviousPage\": false,\n" +
                "    \"hasNextPage\": false,\n" +
                "    \"navigatePages\": 8,\n" +
                "    \"navigatepageNums\": [\n" +
                "        1\n" +
                "    ],\n" +
                "    \"navigateFirstPage\": 1,\n" +
                "    \"navigateLastPage\": 1\n" +
                "}";
    }

    @GetMapping("/index.html/bone/case/childCaseRecordList")
    @ResponseBody
    public String childCaseRecordList(@RequestParam String caseId){
        return "[\n" +
                "    {\n" +
                "        \"id\": \"1691138365838\",\n" +
                "        \"caseId\": \"1690972599899\",\n" +
                "        \"origin\": \"TRUE\",\n" +
                "        \"affectedSide\": \"左侧\",\n" +
                "        \"mark\": \"\",\n" +
                "        \"deleteRecord\": null,\n" +
                "        \"zwwyfx\": null,\n" +
                "        \"zwwy\": null,\n" +
                "        \"cwwyfx\": null,\n" +
                "        \"cwwy\": null,\n" +
                "        \"zxwyfx\": null,\n" +
                "        \"zxwy\": null,\n" +
                "        \"czdlc\": null,\n" +
                "        \"zwjdfx\": null,\n" +
                "        \"zwjd\": null,\n" +
                "        \"cwjdfx\": null,\n" +
                "        \"cwjd\": null,\n" +
                "        \"zxjdfx\": null,\n" +
                "        \"zxjd\": null,\n" +
                "        \"frameFactory\": null,\n" +
                "        \"frameModle\": null,\n" +
                "        \"nearSideDiameter\": null,\n" +
                "        \"farSideDiameter\": null,\n" +
                "        \"zwwyfxRef\": null,\n" +
                "        \"zwwyRef\": null,\n" +
                "        \"cwwyfxRef\": null,\n" +
                "        \"cwwyRef\": null,\n" +
                "        \"zxwyfxRef\": null,\n" +
                "        \"zxwyRef\": null,\n" +
                "        \"senseRotationRef\": null,\n" +
                "        \"rotationAngleRef\": null,\n" +
                "        \"poleOne\": null,\n" +
                "        \"poleTwo\": null,\n" +
                "        \"poleThree\": null,\n" +
                "        \"poleFour\": null,\n" +
                "        \"poleFive\": null,\n" +
                "        \"poleSix\": null,\n" +
                "        \"treatment\": null,\n" +
                "        \"xrayFront\": null,\n" +
                "        \"xrayLater\": null,\n" +
                "        \"xrayLeft\": null,\n" +
                "        \"xrayRight\": null,\n" +
                "        \"result\": null,\n" +
                "        \"modifiedBy\": \"2023-08-04 16:39:26\",\n" +
                "        \"createBy\": \"2023-08-04 16:38:00\"\n" +
                "    },\n" +
                "    {\n" +
                "        \"id\": \"1690974408211\",\n" +
                "        \"caseId\": \"1690972599899\",\n" +
                "        \"origin\": \"TRUE\",\n" +
                "        \"affectedSide\": \"左侧\",\n" +
                "        \"mark\": \"\",\n" +
                "        \"deleteRecord\": null,\n" +
                "        \"zwwyfx\": null,\n" +
                "        \"zwwy\": null,\n" +
                "        \"cwwyfx\": null,\n" +
                "        \"cwwy\": null,\n" +
                "        \"zxwyfx\": null,\n" +
                "        \"zxwy\": null,\n" +
                "        \"czdlc\": null,\n" +
                "        \"zwjdfx\": null,\n" +
                "        \"zwjd\": null,\n" +
                "        \"cwjdfx\": null,\n" +
                "        \"cwjd\": null,\n" +
                "        \"zxjdfx\": null,\n" +
                "        \"zxjd\": null,\n" +
                "        \"frameFactory\": null,\n" +
                "        \"frameModle\": null,\n" +
                "        \"nearSideDiameter\": null,\n" +
                "        \"farSideDiameter\": null,\n" +
                "        \"zwwyfxRef\": null,\n" +
                "        \"zwwyRef\": null,\n" +
                "        \"cwwyfxRef\": null,\n" +
                "        \"cwwyRef\": null,\n" +
                "        \"zxwyfxRef\": null,\n" +
                "        \"zxwyRef\": null,\n" +
                "        \"senseRotationRef\": null,\n" +
                "        \"rotationAngleRef\": null,\n" +
                "        \"poleOne\": null,\n" +
                "        \"poleTwo\": null,\n" +
                "        \"poleThree\": null,\n" +
                "        \"poleFour\": null,\n" +
                "        \"poleFive\": null,\n" +
                "        \"poleSix\": null,\n" +
                "        \"treatment\": null,\n" +
                "        \"xrayFront\": null,\n" +
                "        \"xrayLater\": null,\n" +
                "        \"xrayLeft\": null,\n" +
                "        \"xrayRight\": null,\n" +
                "        \"result\": null,\n" +
                "        \"modifiedBy\": \"2023-08-02 19:06:48\",\n" +
                "        \"createBy\": \"2023-08-02 18:36:45\"\n" +
                "    }\n" +
                "]";
    }
}
