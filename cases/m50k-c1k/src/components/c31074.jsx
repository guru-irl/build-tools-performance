import React from 'react';
const LABEL_31074 = 'component_31074';
export function Component31074({ value = 31074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31074, 'data-value': derived.doubled }, children);
}
export default Component31074;
