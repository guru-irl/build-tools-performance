import React from 'react';
const LABEL_18074 = 'component_18074';
export function Component18074({ value = 18074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18074, 'data-value': derived.doubled }, children);
}
export default Component18074;
