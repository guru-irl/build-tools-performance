import React from 'react';
const LABEL_21318 = 'component_21318';
export function Component21318({ value = 21318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21318, 'data-value': derived.doubled }, children);
}
export default Component21318;
