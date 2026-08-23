import React from 'react';
const LABEL_29763 = 'component_29763';
export function Component29763({ value = 29763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29763, 'data-value': derived.doubled }, children);
}
export default Component29763;
