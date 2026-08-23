import React from 'react';
const LABEL_40145 = 'component_40145';
export function Component40145({ value = 40145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40145, 'data-value': derived.doubled }, children);
}
export default Component40145;
