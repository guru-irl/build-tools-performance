import React from 'react';
const LABEL_20601 = 'component_20601';
export function Component20601({ value = 20601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20601, 'data-value': derived.doubled }, children);
}
export default Component20601;
