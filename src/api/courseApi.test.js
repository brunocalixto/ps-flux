const courseApi = require("./courseApi")
// @ponicode
describe("courseApi.getCourses", () => {
    test("0", () => {
        let callFunction = () => {
            courseApi.getCourses()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("courseApi.getCourseBySlug", () => {
    test("0", () => {
        let callFunction = () => {
            courseApi.getCourseBySlug(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            courseApi.getCourseBySlug(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            courseApi.getCourseBySlug(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            courseApi.getCourseBySlug(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            courseApi.getCourseBySlug("est-dignissimos-earum")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            courseApi.getCourseBySlug(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("courseApi.saveCourse", () => {
    test("0", () => {
        let callFunction = () => {
            courseApi.saveCourse({ id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", authorId: 123 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            courseApi.saveCourse({ id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", authorId: "user-name" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            courseApi.saveCourse({ id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", authorId: "user-name" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            courseApi.saveCourse({ id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", authorId: "user name" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            courseApi.saveCourse({ id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", authorId: 123 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            courseApi.saveCourse(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("courseApi.deleteCourse", () => {
    test("0", () => {
        let callFunction = () => {
            courseApi.deleteCourse("https://croplands.org/app/a/confirm?t=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            courseApi.deleteCourse(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            courseApi.deleteCourse("bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            courseApi.deleteCourse(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            courseApi.deleteCourse("Www.GooGle.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            courseApi.deleteCourse(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
