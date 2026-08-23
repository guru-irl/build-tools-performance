import React from 'react';
const LABEL_13768 = 'component_13768';
export function Component13768({ value = 13768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13768, 'data-value': derived.doubled }, children);
}
export default Component13768;
