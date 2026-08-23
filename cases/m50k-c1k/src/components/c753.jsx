import React from 'react';
const LABEL_753 = 'component_753';
export function Component753({ value = 753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_753, 'data-value': derived.doubled }, children);
}
export default Component753;
