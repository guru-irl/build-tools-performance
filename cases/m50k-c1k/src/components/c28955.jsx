import React from 'react';
const LABEL_28955 = 'component_28955';
export function Component28955({ value = 28955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28955, 'data-value': derived.doubled }, children);
}
export default Component28955;
