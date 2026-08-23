import React from 'react';
const LABEL_44832 = 'component_44832';
export function Component44832({ value = 44832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44832, 'data-value': derived.doubled }, children);
}
export default Component44832;
