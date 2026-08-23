import React from 'react';
const LABEL_10910 = 'component_10910';
export function Component10910({ value = 10910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10910, 'data-value': derived.doubled }, children);
}
export default Component10910;
