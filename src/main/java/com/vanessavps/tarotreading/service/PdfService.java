package com.vanessavps.tarotreading.service;

import com.vanessavps.tarotreading.model.Reading;
import org.springframework.stereotype.Service;

@Service
public class PdfService {
  final TemplateResolverService templateResolverService;

  public PdfService(TemplateResolverService templateResolverService) {this.templateResolverService = templateResolverService;}

  //TODO implement this!
  public Reading generatePdf(Reading reading) {
    System.out.println(reading);
    String parsedTemplate = templateResolverService.parseReadingPdfTemplate(reading);
    try {
      templateResolverService.generatePdfFromHtml(parsedTemplate);
    } catch (Exception e) {
      System.out.println("Something was wrong! " + e.getMessage());
    }
    return reading;
  }


}
