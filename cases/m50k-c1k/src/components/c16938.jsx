import React from 'react';
const LABEL_16938 = 'component_16938';
export function Component16938({ value = 16938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16938, 'data-value': derived.doubled }, children);
}
export default Component16938;
