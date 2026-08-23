import React from 'react';
const LABEL_12677 = 'component_12677';
export function Component12677({ value = 12677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12677, 'data-value': derived.doubled }, children);
}
export default Component12677;
