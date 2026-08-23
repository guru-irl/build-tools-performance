import React from 'react';
const LABEL_36080 = 'component_36080';
export function Component36080({ value = 36080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36080, 'data-value': derived.doubled }, children);
}
export default Component36080;
