package com.gs.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.gs.dao.BaseMapper;
import com.gs.model.City;
import com.gs.service.BaseService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service(value = "baseService")
@Transactional(rollbackFor = Exception.class)
public class BaseServiceImpl implements BaseService {
    private Logger logger = Logger.getLogger(BaseServiceImpl.class);

    @Autowired
    private BaseMapper baseMapper;

    public List<City> selectAllCity(JSONObject data) {
        List<City> result = baseMapper.selectAllCity(data);
        return result;
    }
}
