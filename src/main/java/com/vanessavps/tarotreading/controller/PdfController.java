package com.vanessavps.tarotreading.controller;

import com.vanessavps.tarotreading.model.Reading;
import com.vanessavps.tarotreading.service.PdfService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class PdfController {
  private final PdfService pdfService;

  @Autowired
  public PdfController(PdfService pdfService) {this.pdfService = pdfService;}

  @PostMapping(path = "generate-pdf")
  @ResponseStatus(HttpStatus.OK)
  public Reading create(@RequestBody Reading reading) {
    return pdfService.generatePdf(reading);
  }
}
