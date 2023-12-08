---
title: Smile
description: The basic neccesity of life
keywords: life
date: 05 December 2023
---

The release of generative AI models—including text generation models like GPT-2 and GPT-3 and image generation models like DALL-E 2, Midjourney, and Stable Diffusion—has sparked a new wave of creativity across the Internet, with several projects and startups applying these models to various use-cases in the past few years.

I built one such project a few months ago: a desktop application called Buzz that generates audio transcripts using OpenAI’s Whisper models. (Its name is an abstract reference to sound, but also unwittingly nods to the current excitement around AI technology.)

This past weekend, I attended a hackathon organised by the Effective Altruism London community with my friend, Luke Harries. As we brainstormed project ideas, we discussed my experience working on Buzz and his interest in working with LangChain, an open-source library for composing Large Language Models (LLMs); and we settled on building a voice-controlled personal assistant we called GPT Automator.

GPT Automator transcribes audio commands in natural language into text using Whisper, converts the text into AppleScript and JavaScript scripts, and then executes the scripts to control the user’s computer. We imagine it as an LLM-charged version of Mac’s Automator, where instead of requiring the user to create workflows manually, the program directly understands the user’s instructions.

Implementation-wise, the program consists of three major components. The first is the graphical interface (GUI), built using PyQt6. We used a simple application window with a button to start and stop recordings and a label to view transcribed prompts and help messages.
