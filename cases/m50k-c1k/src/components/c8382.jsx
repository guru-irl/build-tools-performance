import React from 'react';
const LABEL_8382 = 'component_8382';
export function Component8382({ value = 8382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8382, 'data-value': derived.doubled }, children);
}
export default Component8382;
