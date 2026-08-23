import React from 'react';
const LABEL_21902 = 'component_21902';
export function Component21902({ value = 21902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21902, 'data-value': derived.doubled }, children);
}
export default Component21902;
