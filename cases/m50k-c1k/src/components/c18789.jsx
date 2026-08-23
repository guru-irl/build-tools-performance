import React from 'react';
const LABEL_18789 = 'component_18789';
export function Component18789({ value = 18789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18789, 'data-value': derived.doubled }, children);
}
export default Component18789;
