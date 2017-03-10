import issueObjects from './issue-objects';

const issuesNotDeleted = issues => (
  issues.filter( item => item["deleted"] === false)
);

const issuesPastDue = issues => (
  issues.filter( item =>
    item["due_at"] !== null &&
    Date.parse(item["due_at"]) < Date.now())
);

const aggregateIssues = issues => {
  let issueSummary = {};
  issues.forEach( issue => {
    let stamp = issue["current_annotation"]["stamp"];
    issueSummary.hasOwnProperty(stamp) ?
      issueSummary[stamp] ++ :
      issueSummary[stamp] = 1
  });
  return issueSummary;
}

const convertToArray = issues => {
  let issueArray = [];
  Object.keys(issues).forEach(key => {
    let obj = {};
    obj["name"] = key;
    obj["count"] = issues[key];
    issueArray.push(obj);
  });
  return issueArray;
}

const filteredData =
  convertToArray(
    aggregateIssues(
      issuesPastDue(
        issuesNotDeleted(
          issueObjects
        )
      )
    )
  );

export default filteredData;
