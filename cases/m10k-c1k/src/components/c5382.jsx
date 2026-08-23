import React from 'react';
const LABEL_5382 = 'component_5382';
export function Component5382({ value = 5382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5382, 'data-value': derived.doubled }, children);
}
export default Component5382;
