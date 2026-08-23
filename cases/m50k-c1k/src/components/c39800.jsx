import React from 'react';
const LABEL_39800 = 'component_39800';
export function Component39800({ value = 39800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39800, 'data-value': derived.doubled }, children);
}
export default Component39800;
