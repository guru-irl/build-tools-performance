import React from 'react';
const LABEL_22179 = 'component_22179';
export function Component22179({ value = 22179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22179, 'data-value': derived.doubled }, children);
}
export default Component22179;
