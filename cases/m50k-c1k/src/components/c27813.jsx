import React from 'react';
const LABEL_27813 = 'component_27813';
export function Component27813({ value = 27813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27813, 'data-value': derived.doubled }, children);
}
export default Component27813;
