# Task
~~- Edit the background image position~~
~~- Include Photo tag of the background image~~
- Find my personal favorite quotes & authors
- Work on About me page
    - Add quick summary
    - A professional photo of myself
    - Links to my socials
    - Ask AI for tips on what else to add



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
