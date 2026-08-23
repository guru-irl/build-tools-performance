import React from 'react';
const LABEL_15984 = 'component_15984';
export function Component15984({ value = 15984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15984, 'data-value': derived.doubled }, children);
}
export default Component15984;
