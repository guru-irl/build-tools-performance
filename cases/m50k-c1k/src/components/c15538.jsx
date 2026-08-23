import React from 'react';
const LABEL_15538 = 'component_15538';
export function Component15538({ value = 15538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15538, 'data-value': derived.doubled }, children);
}
export default Component15538;
