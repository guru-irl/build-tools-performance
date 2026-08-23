import React from 'react';
const LABEL_391 = 'component_391';
export function Component391({ value = 391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_391, 'data-value': derived.doubled }, children);
}
export default Component391;
