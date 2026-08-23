import React from 'react';
const LABEL_5122 = 'component_5122';
export function Component5122({ value = 5122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5122, 'data-value': derived.doubled }, children);
}
export default Component5122;
