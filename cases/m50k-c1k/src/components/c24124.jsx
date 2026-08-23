import React from 'react';
const LABEL_24124 = 'component_24124';
export function Component24124({ value = 24124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24124, 'data-value': derived.doubled }, children);
}
export default Component24124;
