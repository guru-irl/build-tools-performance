import React from 'react';
const LABEL_1601 = 'component_1601';
export function Component1601({ value = 1601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1601, 'data-value': derived.doubled }, children);
}
export default Component1601;
