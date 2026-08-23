import React from 'react';
const LABEL_1361 = 'component_1361';
export function Component1361({ value = 1361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1361, 'data-value': derived.doubled }, children);
}
export default Component1361;
