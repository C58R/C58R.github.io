# Task
~~- Edit the background image position~~
~~- Include Photo tag of the background image~~
~~- Create a favicon.ico (on Canvas?)~~
~~- Darken the tab name in the header nav-bar when user is on the same page~~
~~- Text on Hero section looks too small on mobile devices~~
- Find my personal favorite quotes & authors
- Work on About me page
    - Add quick summary
    - A professional photo of myself
    - Links to my socials
    - Ask AI for tips on what else to add
- Include Arduino Project in project card
- Improve performance
    ~~- hero image is too large, try commpressing it~~
    - Avoid chaining critical requests by reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load
    - implement preconnect origins
    - preconnect candidates
    - implement longer cache lifetime
    - Requests are blocking the page's initial render, which may delay LCP. Deferring or inlining can move these network requests out of the critical path
    - A forced reflow occurs when JavaScript queries geometric properties (such as offsetWidth) after styles have been invalidated by a change to the DOM state. This can result in poor performance. Learn more about forced reflows and possible mitigations.
        - Top function call: Total reflow time …js/scroll-reveal.js:3:47
    - Check details here: https://pagespeed.web.dev/analysis/https-c58r-github-io/me91x3wcyw?form_factor=desktop   

# Development Reference

## Git Commands
git status                    # Check current changes
git add .                     # Stage all changes
git commit -m "message"       # Commit with message
git push                      # Push to GitHub
git pull                      # Sync from remote
git log                       # View commit history
git diff                      # See unstaged changes

## Jekyll Commands
bundle install                # Install dependencies
bundle exec jekyll serve      # Build + serve locally
bundle exec jekyll build      # Build site only
bundle exec jekyll clean      # Remove generated files

## File/Directory Navigation
ls                           # List files
ls -la                       # List all (including hidden)
cd <directory>               # Change directory
cd ..                        # Go up one level
pwd                          # Print working directory
mkdir <name>                 # Create directory
rm <file>                    # Remove file
rm -rf <directory>           # Remove directory (careful!)
cp <source> <dest>           # Copy
mv <source> <dest>           # Move/rename

## Search/Find
grep "text" <file>           # Search in file
find . -name "*.scss"        # Find files by pattern
du -sh .                     # Directory size
git ls-files | xargs du -ch  # Tracked files size

## System/Process
clear                        # Clear terminal
history                      # Command history
Ctrl+C                       # Stop running process
Ctrl+L                       # Clear screen (alternative)

# For My Reference
- Quotes/Authers are located in hero.js
- To edit hero-background, go to hero-section.html
