class Project {
    title: string
    description: string
    img: string
    link: string
    big: boolean

    constructor(title: string, description: string, img: string, link: string, big: boolean = false) {
        this.title = title
        this.description = description
        this.img = img
        this.link = link
        this.big = big
    }
}

class YearlyProject {
    year: number
    projects: Array<Project>

    constructor(year: number, projects: Array<Project>) {
        this.year = year
        this.projects = projects
    }
}

export {
    Project,
    YearlyProject
}