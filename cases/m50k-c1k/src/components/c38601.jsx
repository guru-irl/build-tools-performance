import React from 'react';
const LABEL_38601 = 'component_38601';
export function Component38601({ value = 38601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38601, 'data-value': derived.doubled }, children);
}
export default Component38601;
