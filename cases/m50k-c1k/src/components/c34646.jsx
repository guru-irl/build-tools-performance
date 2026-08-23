import React from 'react';
const LABEL_34646 = 'component_34646';
export function Component34646({ value = 34646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34646, 'data-value': derived.doubled }, children);
}
export default Component34646;
