import React from 'react';
const LABEL_5558 = 'component_5558';
export function Component5558({ value = 5558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5558, 'data-value': derived.doubled }, children);
}
export default Component5558;
