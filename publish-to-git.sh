echo 'adding all files'
git add .
echo "committing with a message $1"
git commit -m "$1"
echo "pushing..."
git push
echo "Done"