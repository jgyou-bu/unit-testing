define(['ZombieTranslator'], function (ZombieTranslator) {
  'use strict';

  var zombieTranslator = new ZombieTranslator();

  /*
   English to Zombie
   */
  describe('ZombieTranslator englishToZombie', function () {
    describe('englishToZombie single characters', function () {
      describe('e', function () {
        it('e should be rr', function () {
          expect(zombieTranslator.englishToZombie('e')).toBe('rr');
        });
        it('E should be rr', function () {
          expect(zombieTranslator.englishToZombie('E')).toBe('rr');
        });
      });

      describe('i', function () {
        it('i should be rrRr', function () {
          expect(zombieTranslator.englishToZombie('i')).toBe('rrRr');
        });
        it('I should be rrRr', function () {
          expect(zombieTranslator.englishToZombie('I')).toBe('rrRr');
        });
        it('true should be converted to string tRRrrrrRrrr', function () {
          expect(zombieTranslator.englishToZombie(true)).toBe('tRRrrrrRrrr');
        });
      });

      describe('o', function () {
        it('o should be rrrRr', function () {
          expect(zombieTranslator.englishToZombie('o')).toBe('rrrRr');
        });
        it('O should be rrrRr', function () {
          expect(zombieTranslator.englishToZombie('O')).toBe('rrrRr');
        });
      });

      describe('u', function () {
        it('u should be rrrrRr', function () {
          expect(zombieTranslator.englishToZombie('u')).toBe('rrrrRr');
        });
        it('U should be rrrrRr', function () {
          expect(zombieTranslator.englishToZombie('U')).toBe('rrrrRr');
        });
      });

      describe('r end', function () {
        it('r should be rh at end of word', function () {
          expect(zombieTranslator.englishToZombie('r')).toBe('rh');
        });
        it('r should match /rh/', function () {
          expect(zombieTranslator.englishToZombie('r')).toMatch(/rh/);
        });
      });

      describe('r', function () {
        it('r should be RR in other cases', function () {
          expect(zombieTranslator.englishToZombie('rx')).toBe('RRx');
        });
        it('R should be RR', function () {
          expect(zombieTranslator.englishToZombie('R')).toBe('RR');
        });
        it('R should not match rr', function () {
          expect(zombieTranslator.englishToZombie('R')).not.toMatch('rr');
        });
      });

      describe('s', function () {
        it('s should be SSS at end of word', function () {
          expect(zombieTranslator.englishToZombie('s')).toBe('SSS');
        });
        it('return value should be defined', function () {
          expect(zombieTranslator.englishToZombie('s')).toBeDefined();
        });
      });

      describe('z', function () {
        it('z should be ZZZ at end of word', function () {
          expect(zombieTranslator.englishToZombie('z')).toBe('ZZZ');
        });
      });

      describe('a', function () {
        it('a should be hra', function () {
          expect(zombieTranslator.englishToZombie('a')).toBe('hra');
        });
      });

      describe('capitalization', function () {
        it('the first letter of a sentence should be capitalized', function () {
          expect(zombieTranslator.englishToZombie('. a')).toBe('. Hra');
          expect(zombieTranslator.englishToZombie('? a')).toBe('? Hra');
          expect(zombieTranslator.englishToZombie('! a')).toBe('! Hra');
        });
      });
    });

    describe('englishToZombie full words', function () {
      it('JaZahn should be JhraZhrahn', function () {
        expect(zombieTranslator.englishToZombie('JaZahn')).toBe('JhraZhrahn');
      });
      it('petty should be prrtty', function () {
        expect(zombieTranslator.englishToZombie('petty')).toBe('prrtty');
      });
      it('pretty should be pRRrrtty', function () {
        expect(zombieTranslator.englishToZombie('pretty')).toBe('pRRrrtty');
      });
      it('brains should be bRRhrarrRrnSSS', function () {
        expect(zombieTranslator.englishToZombie('brains')).toBe('bRRhrarrRrnSSS');
      });
      it('onomatopoeia should be rrrRrnrrrRrmhratrrrRrprrrRrrrrrRrhra', function () {
        expect(zombieTranslator.englishToZombie('onomatopoeia')).toBe('rrrRrnrrrRrmhratrrrRrprrrRrrrrrRrhra');
      });
    });

    describe('englishToZombie sentences', function () {
      it('The quick brown fox jumps over the lazy dog', function () {
        expect(zombieTranslator.englishToZombie('The quick brown fox jumps over the lazy dog'))
          .toBe('Thrr qrrrrRrrrRrck bRRrrrRrwn frrrRrx jrrrrRrmpSSS rrrRrvrrrh thrr lhrazy drrrRrg');
      });
      it('Lorem ipsum', function () {
        expect(zombieTranslator.englishToZombie('Lorem ipsum dolor sit amet. consectetur adipiscing elit'))
          .toBe('LrrrRrRRrrm rrRrpsrrrrRrm drrrRrlrrrRrrh srrRrt hramrrt. CrrrRrnsrrctrrtrrrrRrrh hradrrRrprrRrscrrRrng rrlrrRrt');
      });
    });
  });

  /*
   Zombie to English
   */
  describe('ZombieTranslator zombieToEnglish', function () {
    describe('zombieToEnglish single characters', function () {
      describe('e', function () {
        it('rr should be e', function () {
          expect(zombieTranslator.zombieToEnglish('rr')).toBe('e');
        });
      });

      describe('i', function () {
        it('rrRr should be i', function () {
          expect(zombieTranslator.zombieToEnglish('rrRr')).toBe('i');
        });
      });

      describe('o', function () {
        it('rrrRr should be o', function () {
          expect(zombieTranslator.zombieToEnglish('rrrRr')).toBe('o');
        });
      });

      describe('u', function () {
        it('rrrrRr should be u', function () {
          expect(zombieTranslator.zombieToEnglish('rrrrRr')).toBe('u');
        });
      });

      describe('r end', function () {
        it('rh at end of word should be r', function () {
          expect(zombieTranslator.zombieToEnglish('rh')).toBe('r');
        });

      });

      describe('r', function () {
        it('r should be RR in other cases', function () {
          expect(zombieTranslator.zombieToEnglish('RRx')).toBe('rx');
        });
      });

      describe('s', function () {
        it('SSS at end of word should be s', function () {
          expect(zombieTranslator.zombieToEnglish('SSS')).toBe('s');
        });
      });

      describe('z', function () {
        it('ZZZ at end of word should be z', function () {
          expect(zombieTranslator.zombieToEnglish('ZZZ')).toBe('z');
        });
      });

      describe('a', function () {
        it('hra should be a', function () {
          expect(zombieTranslator.zombieToEnglish('hra')).toBe('a');
        });
      });

      describe('capitalization', function () {
        it('the first letter of a sentence should be lowercase', function () {
          expect(zombieTranslator.zombieToEnglish('. Hra')).toBe('. a');
          expect(zombieTranslator.zombieToEnglish('? Hra')).toBe('? a');
          expect(zombieTranslator.zombieToEnglish('! Hra')).toBe('! a');
        });
      });
    });
    describe('zombieToEnglish full words', function () {
      it('JhraZhrahn should be JaZahn', function () {
        expect(zombieTranslator.zombieToEnglish('JhraZhrahn')).toBe('JaZahn');
      });
      it('prrtty should be petty', function () {
        expect(zombieTranslator.zombieToEnglish('prrtty')).toBe('petty');
      });
      it('pRRrrtty should be pretty', function () {
        expect(zombieTranslator.zombieToEnglish('pRRrrtty')).toBe('pretty');
      });
      it('bRRhrarrRrnSSS should be brains', function () {
        expect(zombieTranslator.zombieToEnglish('bRRhrarrRrnSSS')).toBe('brains');
      });
    });

    describe('englishToZombie sentences', function () {
      it('The quick brown fox jumps over the lazy dog', function () {
        expect(zombieTranslator.zombieToEnglish('Thrr qrrrrRrrrRrck bRRrrrRrwn frrrRrx jrrrrRrmpSSS rrrRrvrrrh thrr lhrazy drrrRrg'))
          .toBe('The quick brown fox jumps over the lazy dog');
      });
      it('Lorem ipsum', function () {
        expect(zombieTranslator.zombieToEnglish('LrrrRrRRrrm rrRrpsrrrrRrm drrrRrlrrrRrrh srrRrt hramrrt. CrrrRrnsrrctrrtrrrrRrrh hradrrRrprrRrscrrRrng rrlrrRrt'))
          .toBe('Lorem ipsum dolor sit amet. consectetur adipiscing elit');
      });
    });
  });

});
