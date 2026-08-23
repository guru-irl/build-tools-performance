import React from 'react';
const LABEL_8677 = 'component_8677';
export function Component8677({ value = 8677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8677, 'data-value': derived.doubled }, children);
}
export default Component8677;
