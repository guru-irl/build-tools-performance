import React from 'react';
const LABEL_14650 = 'component_14650';
export function Component14650({ value = 14650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14650, 'data-value': derived.doubled }, children);
}
export default Component14650;
