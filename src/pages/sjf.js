import React, { Component } from "react";

// class SJFjs extends Component {
//     render() {
//       return (
//         <Router>
//           <Routes>
//             <Route exact path="/" element={<SJF />} />
//           </Routes>
//         </Router>
//       );
//     }
//   }
//   export default SJFjs;
export const SJFjs = () => (
  <>
    recalculateServiceTime(); $('.priority-only').hide();
    $(document).ready(function () {"{"}
    $('input[type=radio][name=algorithm]').change(function () {"{"}
    if (this.value == 'priority') {"{"}
    $('.priority-only').show(); $('.servtime').show(); $('#minus').css('left',
    '604px');
    {"}"}
    else {"{"}
    $('.priority-only').hide(); $('.servtime').show(); $('#minus').css('left',
    '428px');
    {"}"}
    if (this.value == 'robin') {"{"}
    $('.servtime').hide(); $('#quantumParagraph').show();
    {"}"}
    else {"{"}
    $('#quantumParagraph').hide(); $('.servtime').show();
    {"}"}
    recalculateServiceTime();
    {"}"});
    {"}"}); function addRow() {"{"}
    var lastRow = $('#inputTable tr:last'); var lastRowNumebr =
    parseInt(lastRow.children()[1].innerText); var newRow = 'P' + (lastRowNumebr
    + 1) + '' + (lastRowNumebr + 1) + '
    <input className="exectime" type="text" />' //if
    ($('input[name=algorithm]:checked', '#algorithm').val() == "priority") + '
    <input type="text" />
    '; lastRow.after(newRow); var minus = $('#minus'); minus.show();
    minus.css('top', (parseFloat(minus.css('top')) + 24) + 'px'); if
    ($('input[name=algorithm]:checked', '#algorithm').val() != "priority")
    $('.priority-only').hide(); $('#inputTable tr:last input').change(function
    () {"{"}
    recalculateServiceTime();
    {"}"});
    {"}"}
    function deleteRow() {"{"}
    var lastRow = $('#inputTable tr:last'); lastRow.remove(); var minus =
    $('#minus'); minus.css('top', (parseFloat(minus.css('top')) - 24) + 'px');
    if (parseFloat(minus.css('top')) &lt; 150) minus.hide();
    {"}"}
    $(".initial").change(function () {"{"}
    recalculateServiceTime();
    {"}"}); function recalculateServiceTime() {"{"}
    var inputTable = $('#inputTable tr'); var totalExectuteTime = 0; var
    algorithm = $('input[name=algorithm]:checked', '#algorithm').val(); if
    (algorithm == "fcfs") {"{"}
    $.each(inputTable, function (key, value) {"{"}
    if (key == 0) return true; $(value.children[3]).text(totalExectuteTime); var
    executeTime = parseInt($(value.children[2]).children().first().val());
    totalExectuteTime += executeTime;
    {"}"});
    {"}"}
    else if (algorithm == "sjf") {"{"}
    var exectuteTimes = []; $.each(inputTable, function (key, value) {"{"}
    if (key == 0) return true; exectuteTimes[key - 1] =
    parseInt($(value.children[2]).children().first().val());
    {"}"}); var currentIndex = -1; for (var i = 0; i &lt; exectuteTimes.length;
    i++) {"{"}
    currentIndex = findNextIndex(currentIndex, exectuteTimes); if (currentIndex
    == -1) return; $(inputTable[currentIndex +
    1].children[3]).text(totalExectuteTime); totalExectuteTime +=
    exectuteTimes[currentIndex];
    {"}"}
    {"}"}
    else if (algorithm == "priority") {"{"}
    var exectuteTimes = []; var priorities = []; $.each(inputTable, function
    (key, value) {"{"}
    if (key == 0) return true; exectuteTimes[key - 1] =
    parseInt($(value.children[2]).children().first().val()); priorities[key - 1]
    = parseInt($(value.children[4]).children().first().val());
    {"}"}); var currentIndex = -1; for (var i = 0; i &lt; exectuteTimes.length;
    i++) {"{"}
    currentIndex = findNextIndexWithPriority(currentIndex, priorities); if
    (currentIndex == -1) return; $(inputTable[currentIndex +
    1].children[3]).text(totalExectuteTime); totalExectuteTime +=
    exectuteTimes[currentIndex];
    {"}"}
    {"}"}
    else if (algorithm == "robin") {"{"}
    $('#minus').css('left', '335px'); $.each(inputTable, function (key, value){" "}
    {"{"}
    if (key == 0) return true; $(value.children[3]).text("");
    {"}"});
    {"}"}
    {"}"}
    function findNextIndexWithPriority(currentIndex, priorities) {"{"}
    var currentPriority = 1000000; if (currentIndex != -1) currentPriority =
    priorities[currentIndex]; var resultPriority = 0; var resultIndex = -1; var
    samePriority = false; var areWeThereYet = false; $.each(priorities, function
    (key, value) {"{"}
    var changeInThisIteration = false; if (key == currentIndex) {"{"}
    areWeThereYet = true; return true;
    {"}"}
    if (value &lt;= currentPriority &amp;&amp; value &gt;= resultPriority) {"{"}
    if (value == resultPriority) {"{"}
    if (currentPriority == value &amp;&amp; !samePriority) {"{"}
    samePriority = true; changeInThisIteration = true; resultPriority = value;
    resultIndex = key;
    {"}"}
    {"}"}
    else if (value == currentPriority) {"{"}
    if (areWeThereYet) {"{"}
    samePriority = true; areWeThereYet = false; changeInThisIteration = true;
    resultPriority = value; resultIndex = key;
    {"}"}
    {"}"}
    else {"{"}
    resultPriority = value; resultIndex = key;
    {"}"}
    if (value &gt; resultPriority &amp;&amp; !changeInThisIteration)
    samePriority = false;
    {"}"}
    {"}"}); return resultIndex;
    {"}"}
    function findNextIndex(currentIndex, array) {"{"}
    var currentTime = 0; if (currentIndex != -1) currentTime =
    array[currentIndex]; var resultTime = 1000000; var resultIndex = -1; var
    sameTime = false; var areWeThereYet = false; $.each(array, function (key,
    value) {"{"}
    var changeInThisIteration = false; if (key == currentIndex) {"{"}
    areWeThereYet = true; return true;
    {"}"}
    if (value &gt;= currentTime &amp;&amp; value &lt;= resultTime) {"{"}
    if (value == resultTime) {"{"}
    if (currentTime == value &amp;&amp; !sameTime) {"{"}
    sameTime = true; changeInThisIteration = true; resultTime = value;
    resultIndex = key;
    {"}"}
    {"}"}
    else if (value == currentTime) {"{"}
    if (areWeThereYet) {"{"}
    sameTime = true; areWeThereYet = false; changeInThisIteration = true;
    resultTime = value; resultIndex = key;
    {"}"}
    {"}"}
    else {"{"}
    resultTime = value; resultIndex = key;
    {"}"}
    if (value &lt; resultTime &amp;&amp; !changeInThisIteration) sameTime =
    false;
    {"}"}
    {"}"}); return resultIndex;
    {"}"}
    function animate() {"{"}
    $('fresh').prepend('
    <div
      id="curtain"
      style={{ position: "absolute", right: 0, width: "100%", height: 100 }}
    />
    '); $('#curtain').width($('#resultTable').width()); $('#curtain').css({"{"}
    left: $('#resultTable').position().left{"}"}); var sum = 0;
    $('.exectime').each(function() {"{"}
    sum += Number($(this).val());
    {"}"}); console.log($('#resultTable').width()); var distance =
    $("#curtain").css("width"); animationStep(sum, 0);
    jQuery('#curtain').animate({"{"} width: '0', marginLeft: distance{"}"},
    sum*1000/2, 'linear');
    {"}"}
    function animationStep(steps, cur) {"{"}
    $('#timer').html(cur); if(cur &lt; steps) {"{"}
    setTimeout(function(){"{"}
    animationStep(steps, cur + 1);
    {"}"}, 500);
    {"}"}
    else {"{"}
    {"}"}
    {"}"}
    function draw() {"{"}
    $('fresh').html(''); var inputTable = $('#inputTable tr'); var th = ''; var
    td = ''; var algorithm = $('input[name=algorithm]:checked',
    '#algorithm').val(); if (algorithm == "fcfs") {"{"}
    $.each(inputTable, function (key, value) {"{"}
    if (key == 0) return true; var executeTime =
    parseInt($(value.children[2]).children().first().val()); th += 'P' + (key -
    1) + ''; td += '' + executeTime + '';
    {"}"}); $('fresh').html('' + th + '' + td + '
    <table id="resultTable">
      <tbody>
        <tr />
        <tr />
      </tbody>
    </table>
    ' );
    {"}"}
    else if (algorithm == "sjf") {"{"}
    var executeTimes = []; $.each(inputTable, function (key, value) {"{"}
    if (key == 0) return true; var executeTime =
    parseInt($(value.children[2]).children().first().val()); executeTimes[key -
    1] = {"{"} "executeTime": executeTime, "P": key - 1 {"}"};{"}"});
    executeTimes.sort(function (a, b) {"{"}
    if (a.executeTime == b.executeTime) return a.P - b.P; return a.executeTime -
    b.executeTime
    {"}"}); $.each(executeTimes, function (key, value) {"{"}
    th += 'P' + value.P + ''; td += '' + value.executeTime + '';
    {"}"}); $('fresh').html('' + th + '' + td + '
    <table id="resultTable">
      <tbody>
        <tr />
        <tr />
      </tbody>
    </table>
    ' );
    {"}"}
    else if (algorithm == "priority") {"{"}
    var executeTimes = []; $.each(inputTable, function (key, value) {"{"}
    if (key == 0) return true; var executeTime =
    parseInt($(value.children[2]).children().first().val()); var priority =
    parseInt($(value.children[4]).children().first().val()); executeTimes[key -
    1] = {"{"} "executeTime": executeTime, "P": key - 1, "priority": priority{" "}
    {"}"};{"}"}); executeTimes.sort(function (a, b) {"{"}
    if (a.priority == b.priority) return a.P - b.P; return b.priority -
    a.priority
    {"}"}); $.each(executeTimes, function (key, value) {"{"}
    th += 'P' + value.P + ''; td += '' + value.executeTime + '';
    {"}"}); $('fresh').html('' + th + '' + td + '
    <table id="resultTable" style={{ width: "70%" }}>
      <tbody>
        <tr />
        <tr />
      </tbody>
    </table>
    ' );
    {"}"}
    else if (algorithm == "robin") {"{"}
    var quantum = $('#quantum').val(); var executeTimes = []; $.each(inputTable,
    function (key, value) {"{"}
    if (key == 0) return true; var executeTime =
    parseInt($(value.children[2]).children().first().val()); executeTimes[key -
    1] = {"{"} "executeTime": executeTime, "P": key - 1 {"}"};{"}"}); var
    areWeThereYet = false; while (!areWeThereYet) {"{"}
    areWeThereYet = true; $.each(executeTimes, function (key, value) {"{"}
    if (value.executeTime &gt; 0) {"{"}
    th += 'P' + value.P + ''; td += '' + (value.executeTime &gt; quantum ?
    quantum : value.executeTime) + ''; value.executeTime -= quantum;
    areWeThereYet = false;
    {"}"}
    {"}"});
    {"}"}
    $('fresh').html('' + th + '' + td + '
    <table id="resultTable" style={{ width: "70%" }}>
      <tbody>
        <tr />
        <tr />
      </tbody>
    </table>
    ' );
    {"}"}
    animate();
    {"}"}
  </>
);
