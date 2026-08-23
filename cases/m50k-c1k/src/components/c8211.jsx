import React from 'react';
const LABEL_8211 = 'component_8211';
export function Component8211({ value = 8211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8211, 'data-value': derived.doubled }, children);
}
export default Component8211;
