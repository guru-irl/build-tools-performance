import React from 'react';
const LABEL_7268 = 'component_7268';
export function Component7268({ value = 7268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7268, 'data-value': derived.doubled }, children);
}
export default Component7268;
