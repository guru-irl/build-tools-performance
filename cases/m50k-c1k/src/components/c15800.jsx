import React from 'react';
const LABEL_15800 = 'component_15800';
export function Component15800({ value = 15800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15800, 'data-value': derived.doubled }, children);
}
export default Component15800;
