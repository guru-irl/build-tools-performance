import React from 'react';
const LABEL_11163 = 'component_11163';
export function Component11163({ value = 11163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11163, 'data-value': derived.doubled }, children);
}
export default Component11163;
