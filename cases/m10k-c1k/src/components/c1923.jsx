import React from 'react';
const LABEL_1923 = 'component_1923';
export function Component1923({ value = 1923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1923, 'data-value': derived.doubled }, children);
}
export default Component1923;
