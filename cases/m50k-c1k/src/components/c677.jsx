import React from 'react';
const LABEL_677 = 'component_677';
export function Component677({ value = 677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_677, 'data-value': derived.doubled }, children);
}
export default Component677;
