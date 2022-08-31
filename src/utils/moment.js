import moment from "moment";

export const getLastUpdateHoursAgo = (updated_at) => {
    let now = moment(new Date())
    let end = moment(updated_at)
    let duration = moment.duration(now.diff(end))
    return Math.floor(duration.asHours())
}
