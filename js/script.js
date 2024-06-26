/// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mohammed
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  const lengthA = parseFloat(document.getElementById("length-a").value)
  const lengthB = parseFloat(document.getElementById("length-b").value)
  const lengthC = parseFloat(document.getElementById("length-c").value)

  // using the cosine law
  const angleA =
    Math.acos(
      (lengthB ** 2 + lengthC ** 2 - lengthA ** 2) / (2 * lengthB * lengthC)
    ) *
    (180 / Math.PI)
  const angleB =
    Math.acos(
      (lengthC ** 2 + lengthA ** 2 - lengthB ** 2) / (2 * lengthC * lengthA)
    ) *
    (180 / Math.PI)
  const angleC =
    Math.acos(
      (lengthA ** 2 + lengthB ** 2 - lengthC ** 2) / (2 * lengthA * lengthB)
    ) *
    (180 / Math.PI)

  const sumOfAngles =
    Number(angleA.toFixed(2)) +
    Number(angleB.toFixed(2)) +
    Number(angleC.toFixed(2))

  console.log(angleA)
  console.log(angleB)
  console.log(angleC)
  console.log(sumOfAngles)

  if (sumOfAngles == 180) {
    if (lengthA == lengthC && lengthA == lengthB && lengthB == lengthC) {
      document.getElementById("answer").innerHTML =
        "This is an equilateral triangle."
    } else if (lengthA == lengthC || lengthC == lengthB || lengthA == lengthB) {
      document.getElementById("answer").innerHTML =
        "This is an isosceles triangle."
    } else if (lengthA != lengthC && lengthA != lengthB && lengthB != lengthC) {
      document.getElementById("answer").innerHTML =
        "This is a scalene triangle."
    }
  } else {
    document.getElementById("answer").innerHTML = "This is not a Triangle. (Sum of angles is not 180°)"
  }
}