import { jest } from '@jest/globals';
import puppeteer from 'puppeteer';
const SECONDS = 1000;
jest.setTimeout(70 * SECONDS)

describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    await page.waitForSelector('.event');

    const eventDetails = await await page.$('.event .details');
    expect(eventDetails).toBeNull();
    browser.close(); 
  });

  test('User can expand an event to see its details', async () => {
    await page.waitForSelector('.event');
    await page.click('.event .details-button');

    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeDefined();
    browser.close();
  });

  test('User can collapse an event to hide details', async () => {
    await page.click('.event .details-button');
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeNull();
  });
});