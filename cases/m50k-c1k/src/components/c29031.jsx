import React from 'react';
const LABEL_29031 = 'component_29031';
export function Component29031({ value = 29031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29031, 'data-value': derived.doubled }, children);
}
export default Component29031;
