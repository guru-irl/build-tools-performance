import React from 'react';
const LABEL_3382 = 'component_3382';
export function Component3382({ value = 3382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3382, 'data-value': derived.doubled }, children);
}
export default Component3382;
