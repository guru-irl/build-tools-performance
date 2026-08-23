import React from 'react';
const LABEL_18538 = 'component_18538';
export function Component18538({ value = 18538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18538, 'data-value': derived.doubled }, children);
}
export default Component18538;
