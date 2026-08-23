import React from 'react';
const LABEL_18268 = 'component_18268';
export function Component18268({ value = 18268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18268, 'data-value': derived.doubled }, children);
}
export default Component18268;
