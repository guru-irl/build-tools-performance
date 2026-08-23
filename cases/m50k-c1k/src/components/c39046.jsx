import React from 'react';
const LABEL_39046 = 'component_39046';
export function Component39046({ value = 39046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39046, 'data-value': derived.doubled }, children);
}
export default Component39046;
