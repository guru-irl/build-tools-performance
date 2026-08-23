import React from 'react';
const LABEL_38193 = 'component_38193';
export function Component38193({ value = 38193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38193, 'data-value': derived.doubled }, children);
}
export default Component38193;
