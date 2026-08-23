import React from 'react';
const LABEL_7601 = 'component_7601';
export function Component7601({ value = 7601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7601, 'data-value': derived.doubled }, children);
}
export default Component7601;
