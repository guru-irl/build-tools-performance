import React from 'react';
const LABEL_31348 = 'component_31348';
export function Component31348({ value = 31348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31348, 'data-value': derived.doubled }, children);
}
export default Component31348;
