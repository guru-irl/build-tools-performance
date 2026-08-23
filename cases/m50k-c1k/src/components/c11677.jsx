import React from 'react';
const LABEL_11677 = 'component_11677';
export function Component11677({ value = 11677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11677, 'data-value': derived.doubled }, children);
}
export default Component11677;
