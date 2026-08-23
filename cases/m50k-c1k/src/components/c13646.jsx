import React from 'react';
const LABEL_13646 = 'component_13646';
export function Component13646({ value = 13646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13646, 'data-value': derived.doubled }, children);
}
export default Component13646;
