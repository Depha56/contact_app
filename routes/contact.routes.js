// Contact routes here
import expresss from "express";

import contactControllers from "../controllers/contact.controller.js"
const router = expresss.Router();

router.post("/",contactControllers.createContact);
router.put("/:id", contactControllers.updateContact);
router.delete("/:id", contactControllers.deleteContact);
router.get("/:id", contactControllers.findContactById);

export default router;
