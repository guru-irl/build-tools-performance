import React from 'react';
const LABEL_14961 = 'component_14961';
export function Component14961({ value = 14961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14961, 'data-value': derived.doubled }, children);
}
export default Component14961;
