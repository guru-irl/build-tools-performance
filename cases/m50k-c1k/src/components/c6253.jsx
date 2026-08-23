import React from 'react';
const LABEL_6253 = 'component_6253';
export function Component6253({ value = 6253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6253, 'data-value': derived.doubled }, children);
}
export default Component6253;
