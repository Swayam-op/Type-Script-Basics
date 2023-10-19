interface TakePicture{
    cameramode: string
    zoomin: number
    filter: string
}

interface Story{
    createStory(): string;
    addFilter : () => string
}

class Youtube implements TakePicture, Story{
    constructor(
        public cameramode: string,
    public zoomin: number,
    public filter: string
    ) {}

    createStory(): string {
        return "Story created";
    }

    addFilter: () => "Filter Added"
}

export {};