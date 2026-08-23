import React from 'react';
const LABEL_26827 = 'component_26827';
export function Component26827({ value = 26827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26827, 'data-value': derived.doubled }, children);
}
export default Component26827;
