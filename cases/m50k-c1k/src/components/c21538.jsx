import React from 'react';
const LABEL_21538 = 'component_21538';
export function Component21538({ value = 21538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21538, 'data-value': derived.doubled }, children);
}
export default Component21538;
