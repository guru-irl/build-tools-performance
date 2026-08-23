import React from 'react';
const LABEL_13884 = 'component_13884';
export function Component13884({ value = 13884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13884, 'data-value': derived.doubled }, children);
}
export default Component13884;
