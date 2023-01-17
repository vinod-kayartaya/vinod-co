## Getting started with Git

### Using CLI and VS Code for Git Operations

Git is a powerful and versatile version control system that allows developers to manage their source code efficiently and effectively. One of the great things about Git is that it can be used through both the command line interface (CLI) and through various code editors, such as Visual Studio Code (VS Code). In this blog post, we'll explore how to use both the CLI and VS Code for common Git operations.

#### Create Repository

The first step in using Git is to create a new repository. This can be done either through the CLI or through VS Code.

To create a new repository using the CLI, navigate to the directory where you want to create the repository and enter the command "git init". This will initialize a new repository in the current directory and create a new ".git" folder that contains all the metadata and objects associated with the repository.

To create a new repository using VS Code, open the folder you want to use for the repo in VS Code and click on the Source Control button on the left sidebar. Then click on the "+" icon to create a new repository.

#### Configuring GIT Repository

Once you have created a new repository, you'll need to configure it to reflect your preferences. This can be done through the CLI or through the VS Code settings.

To configure the repository using the CLI, you'll need to use the "git config" command. For example, to set your user name and email, you can use the following commands:

```javascript
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

To configure the repository using VS Code, you'll need to open the settings.json file and add the following code:

```javascript
"git.confirmSync": false,
"git.autofetch": true
```

#### Stage and Commit Changes to Repository

Once you have made changes to your files, you'll need to stage and commit those changes to the repository. This can be done through the CLI or through the VS Code source control panel.

To stage and commit changes using the CLI, you'll need to use the "git add" and "git commit" commands. For example, to stage and commit all changes in the current directory, you can use the following commands:

```javascript
git add .
git commit -m "Initial commit"
```

To stage and commit changes using VS Code, you'll need to open the source control panel, select the files you want to stage and commit and then type the commit message and press the "+" icon.

#### Interactive Staging

Git has a powerful feature that allows you to interactively stage changes. This feature allows you to selectively stage changes within a file. This feature can be used through the CLI or through VS Code.

To use interactive staging through the CLI, you'll need to use the "git add -i" command. This command will open an interactive prompt that will allow you to select the changes you want to stage.

To use interactive staging through VS Code, you'll need to open the file you want to stage and press "Alt + Shift + 2" this will open the Source Control panel, where you can select the changes you want to stage.

#### .git folder structure and GIT Objects

The ".git" folder is where Git stores all of the metadata and objects associated with a repository. This includes information about the repository's commits, branches, and file history. The ".git" folder is located in the root directory of the repository and is created automatically when you initialize a new repository using the "git init" command.

Inside the ".git" folder, you'll find several subfolders and files, including:

-   `objects/`: This folder contains all of the objects that make up the contents of the repository. These objects are the files and directories that have been committed, as well as their metadata such as author, date, and commit message.
-   `refs/`: This folder contains pointers to commits, called references. This includes branches, tags and other references
-   `index`: This is a binary file that stores the current state of the repository. It keeps track of which files are staged and ready to be committed.
-   `HEAD`: This file stores the reference to the current branch you are working on.
-   `config`: This is a configuration file that stores the repository's settings, such as the user's name and email, remote repository URLs, and other options.
-   `description`: This file contains a description of the repository. It is used to store the repository's name.

It's important to understand the structure and contents of the ".git" folder in order to effectively use Git and troubleshoot any issues that may arise.

#### Git Ignore

Git Ignore is a feature that allows you to specify files and directories that should be ignored by Git. This is useful for files that are generated automatically or are not meant to be committed to the repository, such as build files or temporary files.

To create a ".gitignore" file, you can use the command "touch .gitignore" in the CLI or create a new file with that name in VS Code.

Inside the file, you can specify the files and directories you want to ignore. For example, to ignore all files with the ".log" extension, you can add the following line to your ".gitignore" file:

```javascript
*.log
```

#### Git Diff

The `git diff` command is used to compare differences between different versions of files in a Git repository. It allows you to see the changes made to the files, before committing them.

There are several different ways to use the `git diff` command, depending on what you want to compare. Some examples of how to use the command are:

-   `git diff` : This command compares the differences between the working directory and the repository. It shows the changes that have been made to the files, but have not yet been committed.
-   `git diff --staged` : This command compares the differences between the working directory and the staging area. It shows the changes that have been added to the staging area, but have not yet been committed.
-   `git diff branch1 branch2` : This command compares the differences between two branches. It shows the changes that have been made to the files on branch1 that are different from branch2.
-   `git diff commit1 commit2` : This command compares the differences between two commits. It shows the changes that have been made to the files in commit1 that are different from commit2.
-   `git diff --stat` : This command shows a summary of the changes, rather than the full diff. It shows the number of lines added and deleted for each file.
-   `git diff --name-status`: This command shows a summary of the changes, showing the names of the files that were added, modified or deleted.
-   `git diff --color-words`: This command highlights the individual words that have been added or removed, instead of the entire lines.

You can also use the `git diff` command with other options and flags. for example `git diff --ignore-space-change` or `git diff -w` to ignore whitespace changes

It's worth noting that git diff command is a powerful tool to view the changes made to the files before committing them, it allows you to see the changes, review them and make necessary modifications before making a commit, also it's useful in debugging and troubleshooting.

#### Git Log

The `git log` command is used to display the commit history of a Git repository. It shows a list of all the commits that have been made to the repository, along with the commit message, author, date, and other details.

By default, the `git log` command shows the commits in reverse chronological order, with the most recent commit at the top. However, there are several options and flags that can be used to customize the output. Some examples of how to use the command are:

-   `git log` : This command shows the commits in reverse chronological order, along with the commit message, author, date, and other details.
-   `git log -n` : This command shows the last n commits in reverse chronological order. for example `git log -5` will show the last 5 commits
-   `git log --pretty=format:"%h %s"` : This command shows the commits in a specific format, in this example it shows the commit hash and commit message
-   `git log --graph` : This command shows the commits in a graph format, which can make it easier to see the branch and merge history.
-   `git log --author=name` : This command shows the commits that have been made by a specific author.
-   `git log --since=yyyy-mm-dd` : This command shows the commits that have been made since a specific date.
-   `git log --until=yyyy-mm-dd` : This command shows the commits that have been made until a specific date.
-   `git log --grep=word` : This command shows the commits that have a specific word in the commit message.

In addition, git log command can be used in conjunction with other git commands for example you can use `git log --stat` to show the changes made in each commit, or `git log -p` to show the changes made to the files in each commit.

It's worth noting that git log command is a powerful tool to view the commit history, it allows you to see the commits, the authors, the commit messages and the changes made in each commit. It's useful to understand the repository changes over time, troubleshoot, revert commits, and more.

#### Git Alias

The `git alias` command is used to create custom shortcuts for commonly used Git commands. This can make it easier and faster to use Git, as well as help to reduce errors.

An alias is a string that you assign to a command. For example, instead of typing `git log --pretty=format:"%h %s"` every time, you can create an alias such as `gl` for the same command.

You can create an alias using the `git config --global alias.[alias_name] [git_command]` command. For example, to create an alias for `git log --pretty=format:"%h %s"` that can be invoked using `gl`, you can use the following command:

```javascript
git config --global alias.gl "log --pretty=format:'%h %s'";
```

You can also use the `git config --global --unset alias.[alias_name]` to remove the alias you created.

You can also create a local alias that will only be available in the current repository by removing the `--global` option.

Here are some examples of git aliases that you can use:

-   `git config --global alias.st status` : create an alias `st` for `git status` command
-   `git config --global alias.co checkout` : create an alias `co` for `git checkout` command
-   `git config --global alias.ci commit` : create an alias `ci` for `git commit` command
-   `git config --global alias.br branch` : create an alias `br` for `git branch` command
-   `git config --global alias.lg "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset'"` : create an alias `lg` for a more verbose version of the `git log` command that shows the commit history in a graph format, with colors and more information

It's worth noting that git alias command is a powerful tool to create custom shortcuts for your frequently used git commands, it allows you to save time and type less, it also helps to reduce errors, and make your Git usage more efficient.
