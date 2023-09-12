#!/usr/bin/env node
import { program } from "commander";
import cliMd from "cli-markdown";

program
  .name("daniakash")
  .usage("[options]")
  .option("-r, --resume", "prints my developer resume");

program.parse(process.argv);

const { resume } = program.opts();

if (resume) {
  fetch("https://raw.githubusercontent.com/DaniAkash/DaniAkash/main/RESUME.md")
    .then((response) => response.text())
    .then((text) => {
      console.log(cliMd(text));
    })
    .catch((e) => {
      console.error(e);
    });
} else {
  fetch("https://raw.githubusercontent.com/DaniAkash/DaniAkash/main/README.md")
    .then((response) => response.text())
    .then((text) => {
      console.log(cliMd(text));
    })
    .catch((e) => {
      console.error(e);
    });
}

// program.outputHelp();
