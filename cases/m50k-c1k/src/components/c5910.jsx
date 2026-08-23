import React from 'react';
const LABEL_5910 = 'component_5910';
export function Component5910({ value = 5910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5910, 'data-value': derived.doubled }, children);
}
export default Component5910;
