import React from 'react';
const LABEL_26219 = 'component_26219';
export function Component26219({ value = 26219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26219, 'data-value': derived.doubled }, children);
}
export default Component26219;
