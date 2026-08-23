import React from 'react';
const LABEL_37521 = 'component_37521';
export function Component37521({ value = 37521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37521, 'data-value': derived.doubled }, children);
}
export default Component37521;
