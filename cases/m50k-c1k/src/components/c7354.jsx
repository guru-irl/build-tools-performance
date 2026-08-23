import React from 'react';
const LABEL_7354 = 'component_7354';
export function Component7354({ value = 7354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7354, 'data-value': derived.doubled }, children);
}
export default Component7354;
