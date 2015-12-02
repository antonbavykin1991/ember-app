export default function(){
  this.transition(
    this.childOf('.liquid-question-content > pre'),
    this.use('toUp')
  );

  this.transition(
    this.childOf('.liquid-top-animate'),
    this.use('toUp')
  );
}