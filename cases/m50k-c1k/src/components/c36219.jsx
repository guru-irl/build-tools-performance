import React from 'react';
const LABEL_36219 = 'component_36219';
export function Component36219({ value = 36219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36219, 'data-value': derived.doubled }, children);
}
export default Component36219;
