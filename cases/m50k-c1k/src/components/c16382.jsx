import React from 'react';
const LABEL_16382 = 'component_16382';
export function Component16382({ value = 16382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16382, 'data-value': derived.doubled }, children);
}
export default Component16382;
