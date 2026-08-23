import React from 'react';
const LABEL_33538 = 'component_33538';
export function Component33538({ value = 33538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33538, 'data-value': derived.doubled }, children);
}
export default Component33538;
