# deploy as function in google cloud
PROJECT="meeting-panda"

gcloud config set project $PROJECT
gcloud functions deploy app --runtime nodejs8 --trigger-http