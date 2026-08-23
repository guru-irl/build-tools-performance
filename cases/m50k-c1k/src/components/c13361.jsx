import React from 'react';
const LABEL_13361 = 'component_13361';
export function Component13361({ value = 13361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13361, 'data-value': derived.doubled }, children);
}
export default Component13361;
