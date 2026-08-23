import React from 'react';
const LABEL_23938 = 'component_23938';
export function Component23938({ value = 23938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23938, 'data-value': derived.doubled }, children);
}
export default Component23938;
