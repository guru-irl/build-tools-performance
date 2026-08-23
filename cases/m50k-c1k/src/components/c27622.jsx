import React from 'react';
const LABEL_27622 = 'component_27622';
export function Component27622({ value = 27622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27622, 'data-value': derived.doubled }, children);
}
export default Component27622;
