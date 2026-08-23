import React from 'react';
const LABEL_15525 = 'component_15525';
export function Component15525({ value = 15525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15525, 'data-value': derived.doubled }, children);
}
export default Component15525;
