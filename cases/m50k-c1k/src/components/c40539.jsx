import React from 'react';
const LABEL_40539 = 'component_40539';
export function Component40539({ value = 40539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40539, 'data-value': derived.doubled }, children);
}
export default Component40539;
