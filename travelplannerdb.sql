
-- CREATE DATABASE TravelPlannerDB;

use TravelPlannerDB;

CREATE TABLE Users (
    UserId INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(50) NOT NULL,
    PasswordHash VARCHAR(64) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE
);
alter table Users
rename column PasswordHash to Password;


CREATE TABLE TravelData (
    DataId INT AUTO_INCREMENT PRIMARY KEY,
    Type VARCHAR(20) NOT NULL,
    Name VARCHAR(100) NOT NULL,
    Description TEXT,
    Location VARCHAR(100) NOT NULL,
    Price DECIMAL(10, 2) NOT NULL
);


CREATE TABLE Itineraries (
    ItineraryId INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    StartDate DATE NOT NULL,
    EndDate DATE NOT NULL,
    Description TEXT
);


INSERT INTO Itineraries (Name, StartDate, EndDate, Description)
VALUES 
('Short Rajasthan Tour', '2024-08-01', '2024-08-03', 
    'Day 1: Jaipur - Amber Fort, City Palace, Hawa Mahal. 
    Day 2: Pushkar - Brahma Temple, Pushkar Lake. 
    Day 3: Ajmer - Ajmer Sharif Dargah, Ana Sagar Lake.');

INSERT INTO Itineraries (Name, StartDate, EndDate, Description)
VALUES 
('Quick Kerala Visit', '2024-09-05', '2024-09-07', 
    'Day 1: Kochi - Fort Kochi, Chinese Fishing Nets, Mattancherry Palace. 
    Day 2: Munnar - Tea Gardens, Mattupetty Dam. 
    Day 3: Alleppey - Backwater cruise, Alappuzha Beach.');

INSERT INTO Itineraries (Name, StartDate, EndDate, Description)
VALUES 
('Explore Goa', '2024-10-10', '2024-10-12', 
    'Day 1: North Goa - Baga Beach, Fort Aguada, Anjuna Market. 
    Day 2: South Goa - Colva Beach, Cabo de Rama Fort. 
    Day 3: Panaji - Basilica of Bom Jesus, Miramar Beach.');


CREATE TABLE Bookings (
    BookingId INT AUTO_INCREMENT PRIMARY KEY,
    UserId INT,
    ItineraryId INT,
    Status VARCHAR(20) NOT NULL,
    BookingDate DATE NOT NULL,
    FOREIGN KEY (UserId) REFERENCES Users(UserId),
    FOREIGN KEY (ItineraryId) REFERENCES Itineraries(ItineraryId)
);
insert into Bookings values(1,1,2,"Booked",'2024-07-24');



-- CREATE TABLE Reviews (
--     ReviewId INT AUTO_INCREMENT PRIMARY KEY,
--     UserId INT,
--     ItineraryId INT,
--     Rating INT NOT NULL CHECK (Rating >= 1 AND Rating <= 5),
--     Comment TEXT
-- );
CREATE TABLE Reviews (
    ReviewId INT AUTO_INCREMENT PRIMARY KEY,
    UserId INT,
    ItineraryId INT,
    Rating INT NOT NULL CHECK (Rating >= 1 AND Rating <= 5),
    Comment TEXT,
    FOREIGN KEY (UserId) REFERENCES Users(UserId),
    FOREIGN KEY (ItineraryId) REFERENCES Itineraries(ItineraryId)
);




insert into Reviews values(1,2,1,4,"Amazing Trip Planning");

INSERT INTO Users (Username, PasswordHash, Email) 
VALUES ('testuser', 'hashed_password_here', 'testuser@example.com');
INSERT INTO Users (Username, PasswordHash, Email) 
VALUES ('testuser', 'testpass', 'test@example.com');
