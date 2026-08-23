import React from 'react';
const LABEL_18122 = 'component_18122';
export function Component18122({ value = 18122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18122, 'data-value': derived.doubled }, children);
}
export default Component18122;
