import React from 'react';
const LABEL_14124 = 'component_14124';
export function Component14124({ value = 14124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14124, 'data-value': derived.doubled }, children);
}
export default Component14124;
