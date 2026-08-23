import React from 'react';
const LABEL_10382 = 'component_10382';
export function Component10382({ value = 10382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10382, 'data-value': derived.doubled }, children);
}
export default Component10382;
