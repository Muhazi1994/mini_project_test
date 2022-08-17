const express = require("express");
const { isSignedIn } = require("../middlewares/validators/auth");

// Import validators
const {
  createOrUpadateEventValidator,
} = require("../middlewares/validators/events");

// Import controllers
const {
  searchEvent,
  getAllEvents,
  createEvent,
  getDetailEvent,
  deleteEvent,
  eventToday,
  updateEvent,
  getStartedEvent,
  getEventByCategory,
  getAllEventsByWeek,
  getAllEventsByMonth,
  getAllEventsByYear,
  eventTomorrow,
} = require("../controllers/events");

const router = express.Router();

// It will find route that has / first after that it will find is it GET or POST

router.get("/", getAllEvents);

router.get("/home", getStartedEvent);

router.get("/tomorrow", eventTomorrow);

router.get("/today", eventToday);

router.get("/search", searchEvent);

router.get("/category/:id", getEventByCategory);

router.get("/week", getAllEventsByWeek);

router.get("/month", getAllEventsByMonth);

router.get("/year", getAllEventsByYear);

router.post("/create", isSignedIn, createOrUpadateEventValidator, createEvent);

// It will find route that has /:id first after that it will find is it GET or PUT or DELETE

router.put("/:id", isSignedIn, createOrUpadateEventValidator, updateEvent);
router.delete("/delete/:id", isSignedIn, deleteEvent);
router.get("/:id", getDetailEvent);
module.exports = router;
