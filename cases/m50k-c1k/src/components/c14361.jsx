import React from 'react';
const LABEL_14361 = 'component_14361';
export function Component14361({ value = 14361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14361, 'data-value': derived.doubled }, children);
}
export default Component14361;
