import React from 'react';
const LABEL_1252 = 'component_1252';
export function Component1252({ value = 1252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1252, 'data-value': derived.doubled }, children);
}
export default Component1252;
