import React from 'react';
const LABEL_2385 = 'component_2385';
export function Component2385({ value = 2385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2385, 'data-value': derived.doubled }, children);
}
export default Component2385;
