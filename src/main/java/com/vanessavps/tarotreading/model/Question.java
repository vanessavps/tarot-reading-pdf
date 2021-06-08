package com.vanessavps.tarotreading.model;

import java.util.List;

public class Question {
  private String question;
  private List<String> cards;
  private String comment;

  public Question () {};
  public Question(String question, List<String> cards, String comment) {
    this.question = question;
    this.cards = cards;
    this.comment = comment;
  }

  public String getQuestion() {
    return question;
  }

  public void setQuestion(String question) {
    this.question = question;
  }

  public List<String> getCards() {
    return cards;
  }

  public void setCards(List<String> cards) {
    this.cards = cards;
  }

  public String getComment() {
    return comment;
  }

  public void setComment(String comment) {
    this.comment = comment;
  }

  @Override
  public String toString() {
    return "Question [question=" + question + ", comment=" + comment +
            ", cards=" + cards + "]";
  }
}
