import React from 'react';
const LABEL_5677 = 'component_5677';
export function Component5677({ value = 5677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5677, 'data-value': derived.doubled }, children);
}
export default Component5677;
