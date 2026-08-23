import React from 'react';
const LABEL_38443 = 'component_38443';
export function Component38443({ value = 38443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38443, 'data-value': derived.doubled }, children);
}
export default Component38443;
