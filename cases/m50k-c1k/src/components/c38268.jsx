import React from 'react';
const LABEL_38268 = 'component_38268';
export function Component38268({ value = 38268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38268, 'data-value': derived.doubled }, children);
}
export default Component38268;
