import React from 'react';
const LABEL_37955 = 'component_37955';
export function Component37955({ value = 37955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37955, 'data-value': derived.doubled }, children);
}
export default Component37955;
