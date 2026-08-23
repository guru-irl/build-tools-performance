import React from 'react';
const LABEL_22538 = 'component_22538';
export function Component22538({ value = 22538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22538, 'data-value': derived.doubled }, children);
}
export default Component22538;
