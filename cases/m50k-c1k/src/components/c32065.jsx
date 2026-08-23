import React from 'react';
const LABEL_32065 = 'component_32065';
export function Component32065({ value = 32065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32065, 'data-value': derived.doubled }, children);
}
export default Component32065;
