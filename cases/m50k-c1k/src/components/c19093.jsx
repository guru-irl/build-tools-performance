import React from 'react';
const LABEL_19093 = 'component_19093';
export function Component19093({ value = 19093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19093, 'data-value': derived.doubled }, children);
}
export default Component19093;
