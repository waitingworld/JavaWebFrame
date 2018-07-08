package com.gs.model;

import javax.enterprise.inject.Model;

@Model
public class City {
    private String id;
    private String name;
    private String country_code;
    private String district;
    private String population;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCountry_code() {
        return country_code;
    }

    public void setCountry_code(String country_code) {
        this.country_code = country_code;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getPopulation() {
        return population;
    }

    public void setPopulation(String population) {
        this.population = population;
    }

    @Override
    public String toString() {
        return "City{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", country_code='" + country_code + '\'' +
                ", district='" + district + '\'' +
                ", population='" + population + '\'' +
                '}';
    }
}
