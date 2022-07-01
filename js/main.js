/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
const teamEl = document.querySelector('.team');
const teamInfo = [
  {
    name: 'Sarah Tomas',
    position: 'Manager',
    description:
      'No one is useless in this world who lightens the burdens of another. ',
    imageUrl: ['./img/1.png', 'Photo of Sarah'],
  },
  {
    name: 'Josh Teshome',
    position: 'profesor of addis abeba university',
    description:
      'There is no exercise better for the heart than reaching down and lifting people up.',
    imageUrl: ['./img/2.png', 'Photo of Josh'],
  },
  {
    name: 'Haleluya Tade',
    position: 'Marketing',
    description:
      'When we give cheerfully and accept gratefully, everyone is blessed.',
    imageUrl: ['./img/3.png', 'Photo of Haleluya'],
  },
  {
    name: 'Eden Aberham',
    position: 'Marketing',
    description:
      'You have not lived today until you have done something for someone who can never repay you.',
    imageUrl: ['./img/4.png', 'Photo of Eden'],
  },
  {
    name: 'Nahom Mulat',
    position: 'Software Engineer',
    description:
      'Caring about others, running the risk of feeling, and leaving an impact on people, brings happiness.',
    imageUrl: ['./img/5.png', 'Photo of Mulat'],
  },
  {
    name: 'Matiyas Abebe',
    position: 'Computer Engineer',
    description:
      'People appreciate and never forget that helping hand especially when times are tough.',
    imageUrl: ['./img/6.png', 'Photo of Matiyas '],
  },
];

document.addEventListener('DOMContentLoaded', () => {
  teamEl.innerHTML = teamInfo.map(
    (member) => `
          <div class="team-member">
    <div class="member-img-main">
      <img class="member-img" src="${member.imageUrl[0]}" alt=${member.imageUrl[1]}"">
    </div>
    <div class="member-content">
      <h4 class="member-name  member1"> ${member.name} </h4>
      <p class="member-job  member1"> ${member.position}</p>
      <p class="member-text  member1">${member.description} </p>
    </div>
  </div>
          `
  );
});
