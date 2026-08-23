import React from 'react';
const LABEL_35910 = 'component_35910';
export function Component35910({ value = 35910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35910, 'data-value': derived.doubled }, children);
}
export default Component35910;
