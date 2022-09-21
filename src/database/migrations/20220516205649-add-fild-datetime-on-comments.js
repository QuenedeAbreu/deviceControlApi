'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface('commentes', 'datetime', {
      type: Sequelize.DATE,
      allowNull: true
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('commentes', 'datetime');
  }
};
