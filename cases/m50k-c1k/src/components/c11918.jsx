import React from 'react';
const LABEL_11918 = 'component_11918';
export function Component11918({ value = 11918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11918, 'data-value': derived.doubled }, children);
}
export default Component11918;
