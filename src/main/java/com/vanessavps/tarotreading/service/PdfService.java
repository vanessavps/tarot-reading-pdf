package com.vanessavps.tarotreading.service;

import com.vanessavps.tarotreading.model.Reading;
import org.springframework.stereotype.Service;

@Service
public class PdfService {
  private Reading reading;

  public PdfService() {}

  //TODO implement this
  public Reading save(Reading reading) {
    this.reading = reading;
    return reading;
  }

  //TODO implement this
  public Reading getReading() { return this.reading; }


}
