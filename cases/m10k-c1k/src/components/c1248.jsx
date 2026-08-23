import React from 'react';
const LABEL_1248 = 'component_1248';
export function Component1248({ value = 1248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1248, 'data-value': derived.doubled }, children);
}
export default Component1248;
