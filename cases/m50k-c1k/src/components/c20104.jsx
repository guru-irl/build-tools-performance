import React from 'react';
const LABEL_20104 = 'component_20104';
export function Component20104({ value = 20104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20104, 'data-value': derived.doubled }, children);
}
export default Component20104;
