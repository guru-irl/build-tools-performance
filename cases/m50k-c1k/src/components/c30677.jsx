import React from 'react';
const LABEL_30677 = 'component_30677';
export function Component30677({ value = 30677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30677, 'data-value': derived.doubled }, children);
}
export default Component30677;
