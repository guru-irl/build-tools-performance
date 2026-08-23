import React from 'react';
const LABEL_31637 = 'component_31637';
export function Component31637({ value = 31637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31637, 'data-value': derived.doubled }, children);
}
export default Component31637;
