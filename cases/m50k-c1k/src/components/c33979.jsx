import React from 'react';
const LABEL_33979 = 'component_33979';
export function Component33979({ value = 33979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33979, 'data-value': derived.doubled }, children);
}
export default Component33979;
