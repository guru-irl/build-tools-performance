import React from 'react';
const LABEL_45031 = 'component_45031';
export function Component45031({ value = 45031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45031, 'data-value': derived.doubled }, children);
}
export default Component45031;
