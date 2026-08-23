import React from 'react';
const LABEL_42601 = 'component_42601';
export function Component42601({ value = 42601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42601, 'data-value': derived.doubled }, children);
}
export default Component42601;
