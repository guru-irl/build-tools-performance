import React from 'react';
const LABEL_27683 = 'component_27683';
export function Component27683({ value = 27683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27683, 'data-value': derived.doubled }, children);
}
export default Component27683;
