import React from 'react';
const LABEL_10677 = 'component_10677';
export function Component10677({ value = 10677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10677, 'data-value': derived.doubled }, children);
}
export default Component10677;
