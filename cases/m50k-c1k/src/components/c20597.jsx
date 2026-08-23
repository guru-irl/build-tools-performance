import React from 'react';
const LABEL_20597 = 'component_20597';
export function Component20597({ value = 20597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20597, 'data-value': derived.doubled }, children);
}
export default Component20597;
