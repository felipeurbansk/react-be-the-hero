const generateUniqueId = require('../../src/utils/generateUniqueId')

test('Generate Unique ID', ()  => {
    
    expect(generateUniqueId()).toHaveLength(8);

});

