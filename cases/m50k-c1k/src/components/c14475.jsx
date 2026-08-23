import React from 'react';
const LABEL_14475 = 'component_14475';
export function Component14475({ value = 14475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14475, 'data-value': derived.doubled }, children);
}
export default Component14475;
