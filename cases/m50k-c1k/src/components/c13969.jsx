import React from 'react';
const LABEL_13969 = 'component_13969';
export function Component13969({ value = 13969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13969, 'data-value': derived.doubled }, children);
}
export default Component13969;
