import React from 'react';
const LABEL_45095 = 'component_45095';
export function Component45095({ value = 45095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45095, 'data-value': derived.doubled }, children);
}
export default Component45095;
