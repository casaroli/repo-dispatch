import child_process from 'child_process'

export default function getState(name: string): string {
    child_process.exec(`cat {process.env['GITHUB_STATE']}`)

    return process.env[`STATE_${name}`] || ''
  }
