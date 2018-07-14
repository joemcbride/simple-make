import toTasks from './toTasks'
import runTasks from './runTasks'

export default function make({ tasks, settings, complete }) {
  const args = process.argv.slice(2)

  const list = toTasks(tasks, args.length > 0 ? args[0] : 'default')
  return runTasks({ tasks: list, complete, settings: settings || {} })
}