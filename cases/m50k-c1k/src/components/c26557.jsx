import React from 'react';
const LABEL_26557 = 'component_26557';
export function Component26557({ value = 26557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26557, 'data-value': derived.doubled }, children);
}
export default Component26557;
