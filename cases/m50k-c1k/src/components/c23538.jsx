import React from 'react';
const LABEL_23538 = 'component_23538';
export function Component23538({ value = 23538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23538, 'data-value': derived.doubled }, children);
}
export default Component23538;
