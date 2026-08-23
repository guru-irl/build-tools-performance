import React from 'react';
const LABEL_12753 = 'component_12753';
export function Component12753({ value = 12753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12753, 'data-value': derived.doubled }, children);
}
export default Component12753;
