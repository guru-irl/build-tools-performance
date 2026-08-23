import React from 'react';
const LABEL_28646 = 'component_28646';
export function Component28646({ value = 28646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28646, 'data-value': derived.doubled }, children);
}
export default Component28646;
