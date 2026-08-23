import React from 'react';
const LABEL_46100 = 'component_46100';
export function Component46100({ value = 46100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46100, 'data-value': derived.doubled }, children);
}
export default Component46100;
