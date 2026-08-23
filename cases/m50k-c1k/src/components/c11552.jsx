import React from 'react';
const LABEL_11552 = 'component_11552';
export function Component11552({ value = 11552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11552, 'data-value': derived.doubled }, children);
}
export default Component11552;
