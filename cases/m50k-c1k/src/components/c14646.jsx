import React from 'react';
const LABEL_14646 = 'component_14646';
export function Component14646({ value = 14646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14646, 'data-value': derived.doubled }, children);
}
export default Component14646;
