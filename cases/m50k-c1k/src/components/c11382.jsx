import React from 'react';
const LABEL_11382 = 'component_11382';
export function Component11382({ value = 11382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11382, 'data-value': derived.doubled }, children);
}
export default Component11382;
