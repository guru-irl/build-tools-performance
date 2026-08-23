import React from 'react';
const LABEL_20125 = 'component_20125';
export function Component20125({ value = 20125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20125, 'data-value': derived.doubled }, children);
}
export default Component20125;
