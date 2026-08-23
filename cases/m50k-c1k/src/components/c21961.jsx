import React from 'react';
const LABEL_21961 = 'component_21961';
export function Component21961({ value = 21961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21961, 'data-value': derived.doubled }, children);
}
export default Component21961;
