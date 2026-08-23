import React from 'react';
const LABEL_21753 = 'component_21753';
export function Component21753({ value = 21753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21753, 'data-value': derived.doubled }, children);
}
export default Component21753;
