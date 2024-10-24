-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('admin', 'manager', 'user');

-- CreateTable
CREATE TABLE "User" (
    "id" BIGSERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Roles" NOT NULL DEFAULT 'user',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LocAndTime" (
    "id" BIGSERIAL NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "elevation" INTEGER NOT NULL,
    "utc_offset_seconds" BIGINT NOT NULL,
    "timezone" TEXT NOT NULL,
    "timezone_abbreviation" TEXT NOT NULL,
    "userId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LocAndTime_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Weather" (
    "id" BIGSERIAL NOT NULL,
    "time" TEXT,
    "weather_code" INTEGER,
    "temperature_2m_max" DOUBLE PRECISION,
    "temperature_2m_min" DOUBLE PRECISION,
    "temperature_2m_mean" DOUBLE PRECISION,
    "apparent_temperature_max" DOUBLE PRECISION,
    "apparent_temperature_min" DOUBLE PRECISION,
    "apparent_temperature_mean" DOUBLE PRECISION,
    "sunrise" TIMESTAMP(3),
    "sunset" TIMESTAMP(3),
    "daylight_duration" DOUBLE PRECISION,
    "sunshine_duration" DOUBLE PRECISION,
    "precipitation_sum" DOUBLE PRECISION,
    "rain_sum" DOUBLE PRECISION,
    "snowfall_sum" DOUBLE PRECISION,
    "precipitation_hours" INTEGER,
    "wind_speed_10m_max" DOUBLE PRECISION,
    "wind_gusts_10m_max" DOUBLE PRECISION,
    "wind_direction_10m_dominant" INTEGER,
    "shortwave_radiation_sum" DOUBLE PRECISION,
    "et0_fao_evapotranspiration" DOUBLE PRECISION,
    "locAndTimeId" BIGINT NOT NULL,
    "userId" BIGINT NOT NULL,

    CONSTRAINT "Weather_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "LocAndTime" ADD CONSTRAINT "LocAndTime_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Weather" ADD CONSTRAINT "Weather_locAndTimeId_fkey" FOREIGN KEY ("locAndTimeId") REFERENCES "LocAndTime"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Weather" ADD CONSTRAINT "Weather_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
