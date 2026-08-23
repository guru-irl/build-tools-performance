import React from 'react';
const LABEL_2538 = 'component_2538';
export function Component2538({ value = 2538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2538, 'data-value': derived.doubled }, children);
}
export default Component2538;
