import React from 'react';
const LABEL_34789 = 'component_34789';
export function Component34789({ value = 34789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34789, 'data-value': derived.doubled }, children);
}
export default Component34789;
