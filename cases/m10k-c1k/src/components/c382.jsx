import React from 'react';
const LABEL_382 = 'component_382';
export function Component382({ value = 382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_382, 'data-value': derived.doubled }, children);
}
export default Component382;
