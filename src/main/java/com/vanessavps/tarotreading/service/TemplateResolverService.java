package com.vanessavps.tarotreading.service;

import com.lowagie.text.DocumentException;
import org.springframework.stereotype.Service;
import org.xhtmlrenderer.pdf.ITextRenderer;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;

// TODO implement this
@Service
public class TemplateResolverService {

  public void generatePdfFromHtml(String html) throws IOException, DocumentException {
    String outputFolder = System.getProperty("user.home") + File.separator + "readingPdf.pdf";
    OutputStream outputStream = new FileOutputStream(outputFolder);

    ITextRenderer renderer = new ITextRenderer();
    renderer.setDocumentFromString(html);
    renderer.layout();
    renderer.createPDF(outputStream);

    outputStream.close();
  }
}
