import React from 'react';
const LABEL_19789 = 'component_19789';
export function Component19789({ value = 19789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19789, 'data-value': derived.doubled }, children);
}
export default Component19789;
