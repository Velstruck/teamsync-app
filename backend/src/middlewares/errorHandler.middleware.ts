import { ErrorRequestHandler } from "express";

export const errorHandler:ErrorRequestHandler = (error, req, res, next): any => {

    console.log(`Error Occured on PATH:${req.path}`,error);
    

    if(error instanceof SyntaxError) {
        return res.status(400).json({
            message: "Invalid JSON format",
        })
    }
    return res.status(500).json({
        message: "Internal Server Error",
        error: error?.message || "Unknown Error Occurred",
    })
}