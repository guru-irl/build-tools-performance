import React from 'react';
const LABEL_14800 = 'component_14800';
export function Component14800({ value = 14800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14800, 'data-value': derived.doubled }, children);
}
export default Component14800;
