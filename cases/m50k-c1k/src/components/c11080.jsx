import React from 'react';
const LABEL_11080 = 'component_11080';
export function Component11080({ value = 11080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11080, 'data-value': derived.doubled }, children);
}
export default Component11080;
