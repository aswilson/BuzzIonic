var services = angular.module('starter.services', [])

services.factory('Contacts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var contacts = [{
    id: 0,
    name: 'Mom',
    location: 'London, UK',
    time:'5:51PM',
    available:true,
    favorite:true,
    face: 'http://abovethelaw.com/uploads/2011/01/Amy-Chua-2-law-professor-Tiger-Mother-Tiger-Mom.jpg'
  }, {
    id: 1,
    name: 'Dad',
    location: 'Singapore',
    time:'12:51AM',
    available:false,
    favorite:true,
    face: 'https://pbs.twimg.com/profile_images/378800000823347939/036f78135425d19367fcbb76ef58e86d_400x400.jpeg'
  }, {
    id: 2,
    name: 'Hilary Go',
    location: 'New York, USA',
    time:'9:51AM',
    available:true, 
    favorite:true,
    face: 'https://scontent-iad3-1.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/564151_10151251845090090_875292125_n.jpg?oh=7c82003b0007c5cde8bdb53aea1c3f6d&oe=566A8702'
  }, {
    id: 3,
    name: 'Lauren Go',
    location: 'Seattle, USA',
    time:'11:51AM',
    available:true, 
    favorite:true,
    face: 'https://scontent-iad3-1.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/1454998_2132466554334_1971548134_n.jpg?oh=82d4609a9f0b8f7965a0a0859d350953&oe=5667138F'
  }, {
    id: 4,
    name: 'Tata',
    location: 'Manila, PH',
    time:'12:51AM',
    available:false, 
    favorite:true,
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 5,
    name: 'Skylar Weaver',
    location: 'Pittsburgh, USA',
    time:'9:51AM',
    available:true, 
    favorite:false,
    face: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/4/005/09f/353/33e88fc.jpg'
  }, {
    id: 6,
    name: 'Allie Wilson',
    location: 'Pittsburgh, USA',
    time:'9:51AM',
    available:true, 
    favorite:false,
    face: 'https://scontent-iad3-1.xx.fbcdn.net/hphotos-xpt1/v/t1.0-9/11180961_10204929606186370_1249170477372543580_n.jpg?oh=1d8aa12ad26d2966e079e4caf6322603&oe=56730275'
  }, {
    id: 7,
    name: 'Kevin Holt',
    location: 'Montreal, CAN',
    time:'9:51AM',
    available:false, 
    favorite:false,
    face: 'https://scontent-iad3-1.xx.fbcdn.net/hphotos-xpf1/t31.0-8/10521298_10205052605215900_1088136683287395667_o.jpg'
  }, {
    id: 8,
    name: 'Kanye West',
    location: 'Tokyo, JP',
    time:'3:51AM',
    available:false, 
    favorite:false,
    face: 'http://assets.rollingstone.com/assets/images/artists/kanye-west.jpg'
  }, {
    id: 9,
    name: 'Vladimir Putin',
    location: 'Moscow, RUS',
    time:'4:51AM',
    available:false, 
    favorite:false,
    face: 'http://i.forbesimg.com/media/lists/people/vladimir-putin_416x416.jpg'
  }, {
    id: 10,
    name: 'Xiao Ye Zang',
    location: 'Beijing, CHN',
    time:'12:51AM',
    available:false, 
    favorite:false,
    face: 'https://scontent-iad3-1.xx.fbcdn.net/hphotos-xtp1/t31.0-8/11169503_10205781049678831_6399973572840512125_o.jpg'
  }, {
    id: 11,
    name: 'Omar El-Sadany',
    location: 'Cairo, EGY',
    time:'11:51PM',
    available:false, 
    favorite:false,
    face: 'https://scontent-iad3-1.xx.fbcdn.net/hphotos-xlf1/t31.0-8/11952978_160349600972881_8232819198259750862_o.jpg'
  }];

  return {
    all: function() {
      return contacts;
    },
    favorite: function(){
      var favorites = [];
      for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].favorite === true) {
          favorites.push(contacts[i]);
        }
      }
      return favorites;
    },
    alphabetical: function(){
      var contactSort = contacts;
      contactSort.sort(function(a, b){
        var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
        if (nameA < nameB) //sort string ascending
          return -1;
        if (nameA > nameB)
          return 1;
        return 0;
      });
      return contactSort;
    },
    remove: function(contacts) {
      contacts.splice(contacts.indexOf(contacts), 1);
    },
    get: function(contactId) {
      for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].id === parseInt(contactId)) {
          return contacts[i];
        }
      }
      return null;
    }
  };
});

services.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

services.factory('Queues', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var queues = [{
    id: 0,
    name: 'Dad',
    message: 'You on your way?',
    type: 'text',
    time: '9:00 AM',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Mom',
    message: 'Reminder to call',
    type: 'call',
    time: '5:00 PM',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Sammi',
    message: 'Alert when available',
    type: 'alert',
    time: '',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }];

  return {
    all: function() {
      return queues;
    },
    remove: function(queue) {
      queues.splice(queues.indexOf(queue), 1);
    },
    get: function(queueId) {
      for (var i = 0; i < queues.length; i++) {
        if (queues[i].id === parseInt(queueId)) {
          return queues[i];
        }
      }
      return null;
    }
  };
});
