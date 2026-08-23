import React from 'react';
const LABEL_13601 = 'component_13601';
export function Component13601({ value = 13601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13601, 'data-value': derived.doubled }, children);
}
export default Component13601;
