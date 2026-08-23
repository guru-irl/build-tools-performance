import React from 'react';
const LABEL_16208 = 'component_16208';
export function Component16208({ value = 16208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16208, 'data-value': derived.doubled }, children);
}
export default Component16208;
