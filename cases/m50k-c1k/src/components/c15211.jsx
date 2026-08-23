import React from 'react';
const LABEL_15211 = 'component_15211';
export function Component15211({ value = 15211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15211, 'data-value': derived.doubled }, children);
}
export default Component15211;
