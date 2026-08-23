import React from 'react';
const LABEL_17677 = 'component_17677';
export function Component17677({ value = 17677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17677, 'data-value': derived.doubled }, children);
}
export default Component17677;
