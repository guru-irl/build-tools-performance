import React from 'react';
const LABEL_39928 = 'component_39928';
export function Component39928({ value = 39928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39928, 'data-value': derived.doubled }, children);
}
export default Component39928;
