import React from 'react';
const LABEL_35861 = 'component_35861';
export function Component35861({ value = 35861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35861, 'data-value': derived.doubled }, children);
}
export default Component35861;
