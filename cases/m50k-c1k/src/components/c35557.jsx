import React from 'react';
const LABEL_35557 = 'component_35557';
export function Component35557({ value = 35557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35557, 'data-value': derived.doubled }, children);
}
export default Component35557;
