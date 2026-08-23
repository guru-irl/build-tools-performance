import React from 'react';
const LABEL_32023 = 'component_32023';
export function Component32023({ value = 32023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32023, 'data-value': derived.doubled }, children);
}
export default Component32023;
