import React from 'react';
const LABEL_13101 = 'component_13101';
export function Component13101({ value = 13101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13101, 'data-value': derived.doubled }, children);
}
export default Component13101;
