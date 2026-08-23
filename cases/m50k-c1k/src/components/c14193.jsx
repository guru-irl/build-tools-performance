import React from 'react';
const LABEL_14193 = 'component_14193';
export function Component14193({ value = 14193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14193, 'data-value': derived.doubled }, children);
}
export default Component14193;
