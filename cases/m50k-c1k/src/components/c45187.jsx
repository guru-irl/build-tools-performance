import React from 'react';
const LABEL_45187 = 'component_45187';
export function Component45187({ value = 45187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45187, 'data-value': derived.doubled }, children);
}
export default Component45187;
