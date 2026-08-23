import React from 'react';
const LABEL_21934 = 'component_21934';
export function Component21934({ value = 21934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21934, 'data-value': derived.doubled }, children);
}
export default Component21934;
