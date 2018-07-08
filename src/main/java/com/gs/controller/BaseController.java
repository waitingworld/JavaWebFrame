package com.gs.controller;

import com.alibaba.fastjson.JSONObject;
import com.gs.model.City;
import com.gs.service.BaseService;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
@RequestMapping("/baseController")
public class BaseController {
    private Logger logger = Logger.getLogger(BaseController.class);

    @Resource
    private BaseService baseService;

    @ResponseBody
    @RequestMapping("/selectAllCity")
    public List<City> selectAllCity(@RequestBody JSONObject data, HttpServletRequest request) {
        logger.info("查询数据信息,data:" + data.toJSONString());
        List<City> cities = baseService.selectAllCity(data);
        return cities;
    }
}
