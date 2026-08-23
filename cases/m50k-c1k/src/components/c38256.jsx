import React from 'react';
const LABEL_38256 = 'component_38256';
export function Component38256({ value = 38256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38256, 'data-value': derived.doubled }, children);
}
export default Component38256;
