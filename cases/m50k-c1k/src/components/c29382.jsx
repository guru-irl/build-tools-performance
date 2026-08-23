import React from 'react';
const LABEL_29382 = 'component_29382';
export function Component29382({ value = 29382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29382, 'data-value': derived.doubled }, children);
}
export default Component29382;
