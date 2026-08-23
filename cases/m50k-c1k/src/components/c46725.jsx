import React from 'react';
const LABEL_46725 = 'component_46725';
export function Component46725({ value = 46725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46725, 'data-value': derived.doubled }, children);
}
export default Component46725;
