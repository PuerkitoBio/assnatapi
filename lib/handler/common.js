/*jshint asi:true, trailing:true*/

/*
** Intervention object:
** - subject : the subject of the intervention
** - subtitle : the subtitle of the intervention
** - speaker : the speaker as written in the log
** - time : the approximate time of the intervention (date object)
** - text : the text of the intervention
** - deputyId : the ID of the deputy object corresponding to the speaker [optional]
** - metaId : the Id of the meta object of the business day
** - district : the district of the deputy at the moment of the intervention
** - party : the party name of the deputy at the moment of the intervention
** - id : unique identifier for the intervention
** - prevId : the ID of the previous intervention
** - nextId : the ID of the next intervention
*/
module.exports.augmentIntervention = function(intr) {
  // Add the path to the deputy
  if (intr.deputyId) {
    intr.deputyPath = '/deputes/' + intr.deputyId
  }
  // Add the path to the meta
  intr.metaPath = '/travaux/' + intr.metaId

  // Add the paths to the next and previous interventions
  if (intr.prevId) {
    intr.prevInterventionPath = '/travaux/' + intr.metaId + '/interventions/' + intr.prevId
  }
  if (intr.nextId) {
    intr.nextInterventionPath = '/travaux/' + intr.metaId + '/interventions/' + intr.nextId
  }
}