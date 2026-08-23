import React from 'react';
const LABEL_26533 = 'component_26533';
export function Component26533({ value = 26533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26533, 'data-value': derived.doubled }, children);
}
export default Component26533;
