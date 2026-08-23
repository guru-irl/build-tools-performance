import React from 'react';
const LABEL_22938 = 'component_22938';
export function Component22938({ value = 22938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22938, 'data-value': derived.doubled }, children);
}
export default Component22938;
