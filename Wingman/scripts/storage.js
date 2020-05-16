const friends = [
  {
  userId: 1,
  name: 'Moshe',
  matches: [],
  picture: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
},
{
  userId: 2,
  name: 'Dani',
  matches: [],
  picture: 'https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859'
},
{
  userId: 3,
  name: 'Avi',
  matches: [],
  picture: 'https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg'
},
{
  userId: 4,
  name: 'Jonni',
  matches: [],
  picture: 'https://img.freepik.com/free-psd/modern-man-smiling_1194-11653.jpg?size=338&ext=jpg'
},
{
  userId: 5,
  name: 'Asi',
  matches: [],
  picture: 'https://cdn.cnn.com/cnnnext/dam/assets/190925152622-freddy-mcconnell-large-169.jpg'
}
]

const girls = [
  {
    userId: 101,
    name: 'Roni',
    description: 'Hi, I am Roni, 26 years old',
    picture: 'https://i.pinimg.com/originals/d0/f4/fc/d0f4fc818a35285642ba057436fc8720.jpg',
  },
  {
    userId: 102,
    name: 'Hila',
    description: 'blabalbladflbdfbsd',
    picture: 'https://data.whicdn.com/images/335691930/original.jpg'
  },
  {
    userId: 103,
    name: 'Yarden',
    description: 'blabalbladflbdfbsd',
    picture: 'https://arhsinflight.com/wp-content/uploads/2019/04/egirl.jpg'
  },
  {
    userId: 104,
    name: 'Nofar',
    description: 'blabalbladflbdfbsd',
    picture: 'https://i.pinimg.com/474x/81/a9/4a/81a94a7d0454d9ec58f1ea8db69d9b2e.jpg'
  },
]


localStorage.setItem('friends',JSON.stringify(friends));
localStorage.setItem('girls', JSON.stringify(girls));