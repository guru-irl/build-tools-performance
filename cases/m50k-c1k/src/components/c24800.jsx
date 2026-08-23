import React from 'react';
const LABEL_24800 = 'component_24800';
export function Component24800({ value = 24800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24800, 'data-value': derived.doubled }, children);
}
export default Component24800;
