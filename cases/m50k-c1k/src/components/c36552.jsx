import React from 'react';
const LABEL_36552 = 'component_36552';
export function Component36552({ value = 36552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36552, 'data-value': derived.doubled }, children);
}
export default Component36552;
