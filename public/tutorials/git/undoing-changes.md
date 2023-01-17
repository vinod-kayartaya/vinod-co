## Undoing changes

---

#### Discarding Changes in Git

In Git, it's common to make changes to files that you later realize you don't want to keep. In such cases, you may want to discard the changes you've made and restore the files to their previous state. There are several ways to do this in Git, depending on the situation.

#### Discarding Uncommitted Changes

If you've made changes to files but haven't yet committed them, you can use the `git checkout` command to discard the changes. The `git checkout` command allows you to switch between different branches or commits, and it also has a special option for discarding uncommitted changes.

To discard uncommitted changes, you can use the command `git checkout .` . This command will discard all the changes you've made to the files in the working directory, restoring them to their previous state.

#### Discarding Committed Changes

If you've committed changes that you later realize you don't want to keep, you can use the `git revert` command to discard the changes. The `git revert` command creates a new commit that undoes the changes made in the previous commit.

To discard committed changes, you can use the command `git revert [commit_hash]` . This command will create a new commit that undoes the changes made in the commit with the specified hash.

#### Un-staging Changes

In Git, when you make changes to files, you need to stage them before committing them. Staging changes means that you're preparing the changes for a commit. However, there may be cases where you've staged changes but you later realize you don't want to commit them. In such cases, you can un-stage the changes.

To un-stage changes, you can use the `git reset` command. The `git reset` command allows you to reset the state of the repository to a specific commit. To un-stage changes, you can use the command git reset without any commit hash, this command will un-stage the changes and leave them in the working directory.

Alternatively, you can use the command git reset HEAD [file] . This command will un-stage a specific file and leave it in the working directory.

#### Amend Commits

In Git, it's common to make mistakes when committing changes, such as forgetting to include a file or writing an incorrect commit message. The git commit --amend command allows you to fix these mistakes by modifying the previous commit.

To use the git commit --amend command, you need to have changes in the staging area, you can then use the command, it will open an editor where you can edit the commit message, if you want to keep the same commit message, you can simply save and exit the editor.

#### Git Revert

The git revert command is used to undo changes made in a specific commit. It creates a new commit that undoes the changes made in the previous commit. This is useful when you want to undo changes that have already been committed, without losing the history of the repository.

For example, if you want to revert the changes made in the commit with the hash abc123, you can use the command git revert abc123. This command will create a new commit that undoes the changes made in the commit abc123.

#### Git Reset

The git reset command is used to reset the state of the repository to a specific commit. It allows you to move the current branch pointer to a different commit, effectively undoing commits that have been made after that commit. This command can be used in different ways, depending on the option used.

-   git reset --mixed [commit] : This command resets the repository to the specified commit, but it keeps the changes in the working directory. This means that you will be able to see the changes, but they will be unstaged and you will need to commit them again.

-   git reset --soft [commit] : This command resets the repository to the specified commit, but it keeps the changes in the staging area. This means that you will be able to see the changes and they will be staged, but you will need to commit them again.

-   git reset --hard [commit] : This command resets the repository to the specified commit and discards any changes made after that commit. This command is dangerous because it discards the changes permanently.

It's worth noting that git reset and git revert are powerful tools to undo changes, git reset discards the changes permanently, while git revert creates a new commit to undo the changes. It's important to understand the difference between them and use them accordingly to avoid losing important changes.

In conclusion, Git provides several ways to discard, un-stage, amend commits, revert and reset changes. Understanding the difference and the use case of each command is important to effectively use Git, troubleshoot any issues that may arise and avoid losing important changes.
