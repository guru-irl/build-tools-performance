import React from 'react';
const LABEL_20783 = 'component_20783';
export function Component20783({ value = 20783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20783, 'data-value': derived.doubled }, children);
}
export default Component20783;
