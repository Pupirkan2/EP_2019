SELECT * FROM photopanda.photo_post WHERE USER_ID=(SELECT USER_ID FROM photopanda.user WHERE NAME='Maisie');