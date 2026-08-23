import React from 'react';
const LABEL_7337 = 'component_7337';
export function Component7337({ value = 7337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7337, 'data-value': derived.doubled }, children);
}
export default Component7337;
