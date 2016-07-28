define(['jquery', 'app/ZombieTranslator'], function ($, ZombieTranslator) {

  function ZombieTranslatorView(config) {
    // initialize
    console.log('ZombieTranslatorView constructor');
    this.config = config || {};
    this.$english = this.config.english || $('#english');
    this.$zombie = this.config.zombie || $('#zombie');

    this.zombieTranslator = new ZombieTranslator();

    this.listenKeyInput();
  }

  ZombieTranslatorView.prototype.listenKeyInput = function () {
    var that = this;
    this.$english.on('keyup focusin', function (e) {
      that.$zombie.val(that.zombieTranslator.englishToZombie($('#english').val()));
    });
    this.$zombie.on('keyup focusin', function (e) {
      that.$english.val(that.zombieTranslator.zombieToEnglish($('#zombie').val()));
    });
  };

  return ZombieTranslatorView;
});
