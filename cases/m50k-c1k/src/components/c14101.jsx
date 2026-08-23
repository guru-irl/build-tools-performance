import React from 'react';
const LABEL_14101 = 'component_14101';
export function Component14101({ value = 14101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14101, 'data-value': derived.doubled }, children);
}
export default Component14101;
