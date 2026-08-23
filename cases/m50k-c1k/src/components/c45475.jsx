import React from 'react';
const LABEL_45475 = 'component_45475';
export function Component45475({ value = 45475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45475, 'data-value': derived.doubled }, children);
}
export default Component45475;
