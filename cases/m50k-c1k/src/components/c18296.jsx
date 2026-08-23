import React from 'react';
const LABEL_18296 = 'component_18296';
export function Component18296({ value = 18296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18296, 'data-value': derived.doubled }, children);
}
export default Component18296;
