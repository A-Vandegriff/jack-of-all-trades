BEGIN;

-- =========================
-- USERS
-- =========================
-- Represents a person using the app.
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- =========================
-- SKILLS
-- =========================
-- Represents a thing a user can learn or practice.
CREATE TABLE skills (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);

-- =========================
-- USER_SKILLS
-- =========================
-- Represents the relationship: a user has a skill.
CREATE TABLE user_skills (
  user_id INT NOT NULL REFERENCES users(id),
  skill_id INT NOT NULL REFERENCES skills(id),
  PRIMARY KEY (user_id, skill_id)
);

COMMIT;

