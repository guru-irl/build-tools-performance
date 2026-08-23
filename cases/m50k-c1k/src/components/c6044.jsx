import React from 'react';
const LABEL_6044 = 'component_6044';
export function Component6044({ value = 6044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6044, 'data-value': derived.doubled }, children);
}
export default Component6044;
