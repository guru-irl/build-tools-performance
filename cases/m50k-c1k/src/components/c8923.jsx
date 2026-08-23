import React from 'react';
const LABEL_8923 = 'component_8923';
export function Component8923({ value = 8923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8923, 'data-value': derived.doubled }, children);
}
export default Component8923;
