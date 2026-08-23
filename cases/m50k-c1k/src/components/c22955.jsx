import React from 'react';
const LABEL_22955 = 'component_22955';
export function Component22955({ value = 22955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22955, 'data-value': derived.doubled }, children);
}
export default Component22955;
