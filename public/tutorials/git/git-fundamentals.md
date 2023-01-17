## Git fundamentals

## Version Control System (VCS)

A Version Control System (VCS) is a software tool that helps track changes made to files, often used by software developers to manage source code. It allows multiple people to work on the same files simultaneously and keeps track of every version of the files, allowing users to revert to previous versions if necessary. Some examples of VCS include Git, SVN, and Mercurial.

### Difference between Centralized VCS and Decentralized VCS:

Centralized Version Control Systems (CVCS) and Decentralized Version Control Systems (DVCS) are two different approaches to managing version control.

In a CVCS, there is a central repository that contains all the files and versions of those files. Users must connect to this central repository in order to access the files and submit changes. Examples of CVCS include Subversion (SVN) and Perforce.

In a DVCS, there is no central repository. Instead, every user has a copy of the entire repository on their local machine. Users can work on the files and submit changes independently of one another, and the changes are then merged together at a later time. Examples of DVCS include Git, Mercurial and Bazaar.

The main difference between these two systems is the way they handle file collaboration and merging changes. Centralized Version Control Systems rely on a central server for collaboration and merging changes, while Decentralized Version Control Systems rely on each developer's local copy of the codebase, which can be more flexible and allows for offline development.

## Git

Git is a widely used SCM tool that allows developers to track changes made to the source code of a project, collaborate with others, and maintain different versions of the software. It was created in 2005 by Linus Torvalds, the creator of Linux, and it has since become one of the most popular SCM tools in use today.

Git works by maintaining a local repository on each developer's machine. This repository contains the entire history of the project, including all the commits (changes made to the code) and branches (versions of the code). Developers can make changes to their local repository, and then push those changes to a remote repository, such as GitHub, GitLab, or Bitbucket, where they can be shared and collaborated on with other developers.

Git also allows developers to work on multiple branches of a project at the same time. This allows them to make changes, test them, and merge them back into the main branch when they are ready. This helps to keep the main branch stable and makes it easy to collaborate with others.

In short, Git is a distributed version control system, which means that every developer who is working on the project has a complete copy of the entire codebase and history on their local machine. It tracks changes made to the code, makes it easy to collaborate with others, and allows multiple versions of the code to be maintained.

Git can be explained in simple terms as a tool that helps people who work together on the same project to keep track of the changes they make to the project. Think of it like a notebook where each person can write their own notes, and then share their notes with the rest of the group.

### Here are a few analogy examples to help understand git:

1. Imagine you're writing a book with a group of friends. You all have your own copies of the manuscript, and you each make changes to your own copy. Git helps you keep track of the changes you make, and it makes it easy to share your changes with the rest of the group.
2. Think of a recipe book, where everyone in the family can add their own recipes and edit the existing ones. Git helps you keep track of what changes have been made and by whom, so you don't accidentally delete someone else's recipe or overwrite their changes.
3. Imagine you're building a puzzle with a group of people. Each person works on a different section of the puzzle and git helps you keep track of the progress and to be able to see what changes has been done by whom. And also it's easier to put the pieces together later.
4. Imagine you're working on a school project with a group of classmates. Each person is responsible for a different section of the project, and git helps you keep track of the changes you make, and it makes it easy to share your changes with the rest of the group and integrate them into the final project.

These examples should help you explain the basic concepts of git to a student in simple terms. The key takeaways are that git is a tool that helps groups of people work together on a project, it keeps track of changes made to the project, and it makes it easy to share and integrate those changes.
