class Api::NotesController < ApplicationController
    
    #READ ME:
    #All notes are processed through JSON namespace for simple
    #interface with Redux store
    
    def index
        @notes = Note.all
        render 'api/notes/index'
    end
    
    def show
        @note = Note.find(params[:id])
        render 'api/notes/show'
    end
    
    def create
        @note = Note.new(note_params)
        if @note.save
            render 'api/notes/show'
        else
            render json: @note.errors.full_messages, status: 422
        end
    end
    
    def update
        @note = Note.find(params[:id])
        if @note.update(note_params)
            render 'api/notes/show'
        else
            render @note.errors,full_messages, status: 422
        end
    end
    
    def destroy
        @note = Note.find(params[:id])
        if @note.destroy
            render 'api/notes/show'
        else
            render json: ['Note does not exist']
        end
    end
    
    def note_params
        params.require(:note).permit(:color, :title, :body)
    end
end
