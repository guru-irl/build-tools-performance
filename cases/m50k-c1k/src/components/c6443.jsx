import React from 'react';
const LABEL_6443 = 'component_6443';
export function Component6443({ value = 6443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6443, 'data-value': derived.doubled }, children);
}
export default Component6443;
