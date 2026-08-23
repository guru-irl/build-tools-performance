import React from 'react';
const LABEL_24789 = 'component_24789';
export function Component24789({ value = 24789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24789, 'data-value': derived.doubled }, children);
}
export default Component24789;
