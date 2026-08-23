import React from 'react';
const LABEL_28552 = 'component_28552';
export function Component28552({ value = 28552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28552, 'data-value': derived.doubled }, children);
}
export default Component28552;
