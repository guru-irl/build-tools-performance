import React from 'react';
const LABEL_16677 = 'component_16677';
export function Component16677({ value = 16677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16677, 'data-value': derived.doubled }, children);
}
export default Component16677;
