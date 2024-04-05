// Contact controllers here

import contactModel from "../models/contact.model.js";

const contactControllers = {
  createContact: async (req, res) => {
    try {
      const alreadyExist = await contactModel.findOne({
        phone: req.body.phone,
      });
      if (alreadyExist) {
        res.status(200).send({ message: "Contact already exists" });
      } else {
        const newContact = await contactModel.create(req.body);
        res
          .status(201)
          .json({ msg: "Contact created successfully", contact: newContact });
      }
    } catch (error) {
      res.status(500).send({ msg: "Error creating contact", error: error });
    }
  },
  updateContact: async (req, res) => {
  try {
    const contact = await contactModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send(contact);
  } catch (error) {
    res.status(400).send(error.message);
  }
},
  deleteContact: async (req, res) => {
  try {
    const deleteContact = await contactModel.findOneAndDelete(req.params.id)
    res.status(200).json({
      message:`contact deleted successfuly`,
      contact:deleteContact
    })
    
  } catch (error) {
    console.log(error.message);
  }
},
findContactById: async (req, res) => {
  try {
    const contact = await contactModel.findById(req.params.id);
    res.send(contact);
  } catch (error) {
    res.status(404).send('Contact not found');
  }
},
  updateByEmail: async (req, res) => {
    try {
      const ContactEmail = req.params.email;
      if (!ContactEmail) {
        res.status(404).send({ error: "Contact not found" });
      } else {
        const updateContactByEmail = await contactModel.findOneAndUpdate(
          { email: req.params.email },
          req.body,
          { new: true }
        );
        res
          .status(200)
          .json({ msg: "Contact updated", contact: updateContactByEmail });
      }
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },
  
  showById: async (req, res) => {
    try {
      if (!req.params.id) {
        res.status(404).send({ error: "Contact not found" });
      } else {
        const findContactById = await contactModel.findById(req.params.id);
        res
          .status(200)
          .json({ msg: "Contact found", contact: findContactById });
      }
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },
  deleteByEmail: async (req, res) => {
    try {
      const deletedContactByEmail = await contactModel.findOneAndDelete({
        email: req.params.email,
      });
      res
        .status(200)
        .json({ msg: "Contact deleted", contact: deletedContactByEmail });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },
};

export default contactControllers;
