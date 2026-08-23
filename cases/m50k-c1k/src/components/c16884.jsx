import React from 'react';
const LABEL_16884 = 'component_16884';
export function Component16884({ value = 16884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16884, 'data-value': derived.doubled }, children);
}
export default Component16884;
