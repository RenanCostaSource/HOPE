json.id @photo.id
json.username @photo.user.username
json.user_id @photo.user.id
json.avatar asset_path(@photo.user.avatar.url)
json.image_url asset_path(@photo.image.url)
json.caption @photo.caption
json.link @photo.link
json.created_at @photo.created_at
json.created_at_month @photo.created_at.month
json.created_at_day @photo.created_at.day
json.timestamp time_ago_in_words(@photo.created_at)
json.likes @photo.likes
json.num_likes @photo.likes.length
json.liked_by_current_user current_user.isLiked(@photo.id)

json.comments do
  @photo.comments.each do |comment|
    json.set! comment.id do
      json.id comment.id
      json.userId comment.user_id
      json.body comment.body
      json.photoId comment.photo_id
      json.username comment.user.username
      json.createdAt comment.created_at
    end
  end
end
