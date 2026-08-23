import React from 'react';
const LABEL_21800 = 'component_21800';
export function Component21800({ value = 21800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21800, 'data-value': derived.doubled }, children);
}
export default Component21800;
