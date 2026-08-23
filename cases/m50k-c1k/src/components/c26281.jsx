import React from 'react';
const LABEL_26281 = 'component_26281';
export function Component26281({ value = 26281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26281, 'data-value': derived.doubled }, children);
}
export default Component26281;
