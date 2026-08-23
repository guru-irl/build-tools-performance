import React from 'react';
const LABEL_36601 = 'component_36601';
export function Component36601({ value = 36601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36601, 'data-value': derived.doubled }, children);
}
export default Component36601;
