import React from 'react';
const LABEL_14744 = 'component_14744';
export function Component14744({ value = 14744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14744, 'data-value': derived.doubled }, children);
}
export default Component14744;
