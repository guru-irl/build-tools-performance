import React from 'react';
const LABEL_22184 = 'component_22184';
export function Component22184({ value = 22184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22184, 'data-value': derived.doubled }, children);
}
export default Component22184;
