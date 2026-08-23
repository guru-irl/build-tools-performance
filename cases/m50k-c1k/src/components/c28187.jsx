import React from 'react';
const LABEL_28187 = 'component_28187';
export function Component28187({ value = 28187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28187, 'data-value': derived.doubled }, children);
}
export default Component28187;
