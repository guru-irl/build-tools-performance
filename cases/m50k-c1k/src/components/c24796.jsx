import React from 'react';
const LABEL_24796 = 'component_24796';
export function Component24796({ value = 24796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24796, 'data-value': derived.doubled }, children);
}
export default Component24796;
