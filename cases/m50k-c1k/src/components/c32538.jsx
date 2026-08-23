import React from 'react';
const LABEL_32538 = 'component_32538';
export function Component32538({ value = 32538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32538, 'data-value': derived.doubled }, children);
}
export default Component32538;
