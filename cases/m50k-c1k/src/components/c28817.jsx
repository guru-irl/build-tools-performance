import React from 'react';
const LABEL_28817 = 'component_28817';
export function Component28817({ value = 28817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28817, 'data-value': derived.doubled }, children);
}
export default Component28817;
