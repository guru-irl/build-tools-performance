import React from 'react';
const LABEL_13850 = 'component_13850';
export function Component13850({ value = 13850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13850, 'data-value': derived.doubled }, children);
}
export default Component13850;
