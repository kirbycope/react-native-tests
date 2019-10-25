import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('./__tests__/bdd/features/App.Cucumber.feature');

defineFeature(feature, test => {

    test('Run test', ({ given, when, then }) => {

        given('I arrange some data', () => {
            console.log('thing 1');
        });

        when('I act on that data', () => {
            console.log('thing 2');
        });

        then('I assert on the output', () => {
            console.log('thing 3');
        });

    });
});
