import React from 'react';
const LABEL_40328 = 'component_40328';
export function Component40328({ value = 40328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40328, 'data-value': derived.doubled }, children);
}
export default Component40328;
