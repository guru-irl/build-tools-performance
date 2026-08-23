import React from 'react';
const LABEL_40955 = 'component_40955';
export function Component40955({ value = 40955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40955, 'data-value': derived.doubled }, children);
}
export default Component40955;
