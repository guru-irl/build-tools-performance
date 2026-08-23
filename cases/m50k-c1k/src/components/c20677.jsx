import React from 'react';
const LABEL_20677 = 'component_20677';
export function Component20677({ value = 20677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20677, 'data-value': derived.doubled }, children);
}
export default Component20677;
