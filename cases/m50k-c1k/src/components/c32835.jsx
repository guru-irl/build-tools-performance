import React from 'react';
const LABEL_32835 = 'component_32835';
export function Component32835({ value = 32835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32835, 'data-value': derived.doubled }, children);
}
export default Component32835;
