const express = require("express");
const {
  summaryController,
  paragraphController,
  chatbotController,
  jsconverterController,
  scifiImageController,
} = require("../controllers/openaiController");

const router = express.Router();

// routes
// summaryController
router.post("/summary", summaryController);

// paragraphController
router.post("/paragraph", paragraphController);

// paragraphController
router.post("/chatbot", chatbotController);

// jsconverterController
router.post("/js-converter", jsconverterController);

// scifiImageController
router.post("/scifi-image", scifiImageController);

module.exports = router;
