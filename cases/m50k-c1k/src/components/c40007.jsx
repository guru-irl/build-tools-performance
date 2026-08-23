import React from 'react';
const LABEL_40007 = 'component_40007';
export function Component40007({ value = 40007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40007, 'data-value': derived.doubled }, children);
}
export default Component40007;
