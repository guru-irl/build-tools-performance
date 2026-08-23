import React from 'react';
const LABEL_8122 = 'component_8122';
export function Component8122({ value = 8122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8122, 'data-value': derived.doubled }, children);
}
export default Component8122;
