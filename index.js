// git commands

//---------------
// BASIC---------
//---------------

// git init --> initilaizes git in the repo locally (creates .git file in your folder)

// git log --> shows recent commit history in the current branch

// git log --oneline --> same but in one line (more compact)


//---------------
// STAGING-------
//---------------

// git add . --> stages all changed files
// git add <file name(s)> --> stages specified file(s)
// staged files are GREEN

// git reset . --> unstages all staged files
// git reset <file name(s)> --> unstages specified file(s)


//----------------------
// REVERTING COMMITS----
//----------------------

// git reset <commit hash (short ver ok)> --> uncommits changes, removes commit from history, but changes are preserved in file (they are just uncommitted, like they were before the first commit)



//---------------
// BRANCHES------
//---------------

// git branch --> logs out which branch we are in
// only works after at least 1 commit is made to that branch

// git checkout -b <branch name> --> creates a NEW branch and switches to that branch (checks it out)

// git checkout <branch name> --> SWITCHES to an existing branch


//------------------------------
// CONNECTING TO REMOTE LOCATION
//------------------------------

// git remote add origin <URL/SSH> --> connected local repo to a remote repo