import React from 'react';
const LABEL_21910 = 'component_21910';
export function Component21910({ value = 21910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21910, 'data-value': derived.doubled }, children);
}
export default Component21910;
