package com.vanessavps.tarotreading.controller;

import com.vanessavps.tarotreading.model.Question;
import com.vanessavps.tarotreading.model.Reading;
import com.vanessavps.tarotreading.service.ReadingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.time.LocalDate;
import java.util.Collections;

@Controller
public class ReadingController {
  final ReadingService readingService;

  @Autowired
  public ReadingController(ReadingService readingService) {this.readingService = readingService;}


  @GetMapping("/")
  public String homePage(Model model) {
    Reading reading = readingService.createNewReading();
    reading.setName("VPS");
    reading.setDate(LocalDate.now());
    model.addAttribute("reading",reading);
    return "home";
  }

  @PostMapping("/addQuestion")
  public String addContact(Reading reading, BindingResult bindingResult) {
    System.out.println(reading.getQuestions().size());
    reading.getQuestions().add(new Question("something", Collections.singletonList("aaaa"), "is going on"));
    System.out.println(reading.getQuestions().size());
    System.out.println("passou aqui");
    return "home :: questions"; // returning the updated section
  }
}
