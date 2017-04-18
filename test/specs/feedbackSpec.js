describe("Get Metadata", function() {
  it("returns description of the key", function() {
    expect(getMetadata('test')).toEqual("Jasmine Scripts are executed against the JS files");
  });
});

describe("Knock Knock", function() {
  it("knocks on the door", function() {
    expect(knockKnock()).toEqual("Who's there?");
  });
});