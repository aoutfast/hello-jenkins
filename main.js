const sayHello = () => 'Hello World';

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('should say hello', () => {
    expect(sayHello()).toBe('Hello')   
});
}