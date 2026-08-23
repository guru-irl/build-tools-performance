import React from 'react';
const LABEL_3677 = 'component_3677';
export function Component3677({ value = 3677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3677, 'data-value': derived.doubled }, children);
}
export default Component3677;
