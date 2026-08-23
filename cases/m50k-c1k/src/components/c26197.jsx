import React from 'react';
const LABEL_26197 = 'component_26197';
export function Component26197({ value = 26197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26197, 'data-value': derived.doubled }, children);
}
export default Component26197;
