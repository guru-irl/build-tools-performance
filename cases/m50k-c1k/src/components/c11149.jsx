import React from 'react';
const LABEL_11149 = 'component_11149';
export function Component11149({ value = 11149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11149, 'data-value': derived.doubled }, children);
}
export default Component11149;
