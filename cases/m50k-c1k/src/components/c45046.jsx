import React from 'react';
const LABEL_45046 = 'component_45046';
export function Component45046({ value = 45046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45046, 'data-value': derived.doubled }, children);
}
export default Component45046;
