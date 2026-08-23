import React from 'react';
const LABEL_43382 = 'component_43382';
export function Component43382({ value = 43382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43382, 'data-value': derived.doubled }, children);
}
export default Component43382;
