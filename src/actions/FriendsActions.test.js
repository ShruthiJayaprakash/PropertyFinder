import expect from 'expect'
import * as actions from './FriendsActions'
import * as types from '../constants/ActionTypes';

describe('actions', () => {
    it('should create an action to add friend', () => {
      const name = 'Shruthi'
      const sex = 'Female'
      const expectedAction = {
        type: types.ADD_FRIEND,
        name,
        sex
      }
      expect(actions.addFriend(name, sex)).toEqual(expectedAction)
    })   
    it('should create an action to add friend when name is empty', () => {
        const name = ''
        const sex = 'Female'
        const expectedAction = {
          type: types.ADD_FRIEND,
          name,
          sex
        }
        expect(actions.addFriend(name, sex)).toEqual(expectedAction)
    })   
    it('should create an action to add friend when sex is empty', () => {
        const name = 'Shruthi'
        const sex = ''
        const expectedAction = {
          type: types.ADD_FRIEND,
          name,
          sex
        }
        expect(actions.addFriend(name, sex)).toEqual(expectedAction)
    }) 
    it('should create an action to delete friend', () => {
        const id = 0
        const expectedAction = {
          type: types.DELETE_FRIEND,
          id
        }
        expect(actions.deleteFriend(id)).toEqual(expectedAction)
      }) 
      it('should create an action to star friend', () => {
        const id = 0
        const expectedAction = {
          type: types.STAR_FRIEND,
          id
        }
        expect(actions.starFriend(id)).toEqual(expectedAction)
      })  
  })
