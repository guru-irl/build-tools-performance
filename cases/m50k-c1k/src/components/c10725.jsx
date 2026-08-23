import React from 'react';
const LABEL_10725 = 'component_10725';
export function Component10725({ value = 10725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10725, 'data-value': derived.doubled }, children);
}
export default Component10725;
