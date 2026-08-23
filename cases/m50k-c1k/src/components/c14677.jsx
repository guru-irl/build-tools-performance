import React from 'react';
const LABEL_14677 = 'component_14677';
export function Component14677({ value = 14677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14677, 'data-value': derived.doubled }, children);
}
export default Component14677;
