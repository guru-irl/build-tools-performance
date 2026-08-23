import React from 'react';
const LABEL_14538 = 'component_14538';
export function Component14538({ value = 14538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14538, 'data-value': derived.doubled }, children);
}
export default Component14538;
