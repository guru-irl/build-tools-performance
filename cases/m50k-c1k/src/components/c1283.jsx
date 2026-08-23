import React from 'react';
const LABEL_1283 = 'component_1283';
export function Component1283({ value = 1283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1283, 'data-value': derived.doubled }, children);
}
export default Component1283;
