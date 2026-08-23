import React from 'react';
const LABEL_26803 = 'component_26803';
export function Component26803({ value = 26803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26803, 'data-value': derived.doubled }, children);
}
export default Component26803;
