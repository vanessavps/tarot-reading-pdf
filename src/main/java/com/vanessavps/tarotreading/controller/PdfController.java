package com.vanessavps.tarotreading.controller;

import com.vanessavps.tarotreading.model.Reading;
import com.vanessavps.tarotreading.service.ReadingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tarotReading")
public class PdfController {
  private final ReadingService readingService;

  @Autowired
  public PdfController(ReadingService readingService) {this.readingService = readingService;}


  @PostMapping
  @ResponseStatus(HttpStatus.OK)
  public Reading create(@RequestBody Reading reading) {
    return readingService.generatePdf(reading);
  }


}
