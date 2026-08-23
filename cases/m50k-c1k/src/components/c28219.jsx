import React from 'react';
const LABEL_28219 = 'component_28219';
export function Component28219({ value = 28219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28219, 'data-value': derived.doubled }, children);
}
export default Component28219;
