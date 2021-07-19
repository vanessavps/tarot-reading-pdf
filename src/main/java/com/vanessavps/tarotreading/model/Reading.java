package com.vanessavps.tarotreading.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.LinkedList;
import java.util.List;

public class Reading {
  private String name;

  @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
  @JsonFormat(pattern = "yyyy/MM/dd")
  private LocalDate date;

  private MultipartFile photo;
  private List<Question> questions = new LinkedList<>();

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public LocalDate getDate() {
    return date;
  }

  public void setDate(LocalDate date) {
    this.date = date;
  }

  public MultipartFile getPhoto() {
    return photo;
  }

  public void setPhoto(MultipartFile photo) {
    this.photo = photo;
  }

  public List<Question> getQuestions() {
    return questions;
  }

  public void setQuestions(List<Question> questions) {
    this.questions = questions;
  }

  @Override
  public String toString() {
    return "Reading [name=" + name + ", date=" + date +
            ", questions=" + questions + "]";
  }
}
