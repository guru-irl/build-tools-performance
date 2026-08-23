import React from 'react';
const LABEL_16718 = 'component_16718';
export function Component16718({ value = 16718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16718, 'data-value': derived.doubled }, children);
}
export default Component16718;
