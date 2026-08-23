import React from 'react';
const LABEL_21976 = 'component_21976';
export function Component21976({ value = 21976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21976, 'data-value': derived.doubled }, children);
}
export default Component21976;
