import express from 'express';
import { ObjectId } from 'mongodb';
import { getDB } from './database.js';

const router = express.Router();

// collection name
const COLL_NAME = process.env.COLLECTION_NAME;

// GET all courses
router.get('/courses', async (req, res) => {
  try {
    const db = getDB();
    const courses = await db.collection(COLL_NAME).find({}).toArray();
    console.log("fecthed courses");
    res.json(courses);
  } 
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET course by ID
router.get('/courses/:id', async (req, res) => {
  try {
    const db = getDB();

    const course = await db.collection(COLL_NAME)
      .findOne({ _id: new ObjectId(req.params.id) });
    
    if (!course) {
      return res.status(404).json({ error: 'oops, the course could not be found' });
    }
    res.json(course);
  } 
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST new course
router.post('/courses', async (req, res) => {
  try {
    const db = getDB();
    const result = await db.collection(COLL_NAME)
      .insertOne(req.body);

    res.status(201).json({ 
      _id: result.insertedId,
      ...req.body 
    });
  } 
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT update course
router.put('/courses/:id', async (req, res) => {
  try {
    const db = getDB();
    const result = await db.collection(COLL_NAME)
      .updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: req.body }
      );
    
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'course not found:', _id });
    }

    res.json({ message: 'course updated' });
  } 
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PATCH partial update course
router.patch('/courses/:id', async (req, res) => {
  try {
    const db = getDB();
    const result = await db.collection(COLL_NAME)
      .updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: req.body }
      );
    
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Course not found' });
    }

    res.json({ message: 'Course partially updated successfully' });
  } 
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE course
router.delete('/courses/:id', async (req, res) => {
  try {
    const db = getDB();
    const result = await db.collection(COLL_NAME)
      .deleteOne({ _id: new ObjectId(req.params.id) });
    
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Course not found' });
    }

    res.json({ message: 'course deleted ' });
  } 
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
