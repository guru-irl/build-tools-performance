import React from 'react';
const LABEL_33910 = 'component_33910';
export function Component33910({ value = 33910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33910, 'data-value': derived.doubled }, children);
}
export default Component33910;
