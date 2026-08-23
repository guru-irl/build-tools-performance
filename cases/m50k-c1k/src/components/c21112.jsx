import React from 'react';
const LABEL_21112 = 'component_21112';
export function Component21112({ value = 21112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21112, 'data-value': derived.doubled }, children);
}
export default Component21112;
