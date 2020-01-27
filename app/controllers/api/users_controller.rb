class Api::UsersController < ApplicationController
  def create
    
		@user = User.new(user_params)

		if @user.save
			login(@user)
      @follow = Follow.new(followee_id: 2, follower_id: current_user.id)
      @follow.save
			render "api/users/show"
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

  def index
    if params[:users]
      @users = User
        .where('username ILIKE ? OR name ILIKE ?', "%#{params[:users]}%", "%#{params[:users]}%" )
        .limit(10)
    else
      allUsers = User.all
      userFollows = current_user.followees
      @users = allUsers - userFollows - [current_user]
    end

  end

  def update
    @user = User.find_by_id(current_user.id)

    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])

    if @user
      @photos = @user.photos.order('photos.created_at DESC')
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

	private

	def user_params
		params.require(:user).permit(:username, :password, :name, :bio, :website, :avatar)
	end

end
