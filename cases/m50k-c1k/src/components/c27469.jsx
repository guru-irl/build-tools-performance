import React from 'react';
const LABEL_27469 = 'component_27469';
export function Component27469({ value = 27469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27469, 'data-value': derived.doubled }, children);
}
export default Component27469;
