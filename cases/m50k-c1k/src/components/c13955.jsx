import React from 'react';
const LABEL_13955 = 'component_13955';
export function Component13955({ value = 13955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13955, 'data-value': derived.doubled }, children);
}
export default Component13955;
