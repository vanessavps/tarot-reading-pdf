package com.vanessavps.tarotreading.model;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.LinkedList;
import java.util.List;

public class Reading {
  private String name;
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
}
