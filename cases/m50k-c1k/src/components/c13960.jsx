import React from 'react';
const LABEL_13960 = 'component_13960';
export function Component13960({ value = 13960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13960, 'data-value': derived.doubled }, children);
}
export default Component13960;
