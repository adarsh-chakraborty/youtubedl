const ytdl = require('ytdl-core');
const path = require('path');
exports.getIndex = (req,res,next) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../views') });
};



exports.getVideoInfo = async (req,res,next) => {
    const videoURL = req.query.videoURL;
    
    try{
        const info = await ytdl.getInfo(videoURL);
        res.status(200).json(info);
    }catch(err){
        console.log(err);
    }
};

exports.getDownload = (req,res,next) => {
    const videoURL = req.query.videoURL;
    const itag = req.query.itag;
    res.header("Content-Disposition",'attachment;\ filename="video.mp4"');
    ytdl(videoURL,{
		filter: format => format.itag == itag
	}).pipe(res);

};