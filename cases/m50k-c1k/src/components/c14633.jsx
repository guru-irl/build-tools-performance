import React from 'react';
const LABEL_14633 = 'component_14633';
export function Component14633({ value = 14633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14633, 'data-value': derived.doubled }, children);
}
export default Component14633;
