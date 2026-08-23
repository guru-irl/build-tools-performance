import React from 'react';
const LABEL_39382 = 'component_39382';
export function Component39382({ value = 39382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39382, 'data-value': derived.doubled }, children);
}
export default Component39382;
