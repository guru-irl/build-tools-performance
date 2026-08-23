import React from 'react';
const LABEL_24219 = 'component_24219';
export function Component24219({ value = 24219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24219, 'data-value': derived.doubled }, children);
}
export default Component24219;
