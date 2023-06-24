function drawArrow(x, y, diry, acol, label) {
  push();
  stroke(acol);
  strokeWeight(3);
  textSize(20)
  fill(acol);
  line(x, y-50*diry, x, y);
  let arrow_size = 7;
  triangle(x, y, x-arrow_size/2, y-arrow_size*diry, x+arrow_size/2, y-arrow_size*diry);

  strokeWeight(0);
  text(label, x, y - (20 + 50)*diry)
  pop();
}
