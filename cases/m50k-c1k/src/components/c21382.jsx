import React from 'react';
const LABEL_21382 = 'component_21382';
export function Component21382({ value = 21382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21382, 'data-value': derived.doubled }, children);
}
export default Component21382;
