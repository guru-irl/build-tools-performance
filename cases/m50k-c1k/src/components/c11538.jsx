import React from 'react';
const LABEL_11538 = 'component_11538';
export function Component11538({ value = 11538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11538, 'data-value': derived.doubled }, children);
}
export default Component11538;
