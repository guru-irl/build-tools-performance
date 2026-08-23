import React from 'react';
const LABEL_10538 = 'component_10538';
export function Component10538({ value = 10538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10538, 'data-value': derived.doubled }, children);
}
export default Component10538;
