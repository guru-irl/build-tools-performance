import React from 'react';
const LABEL_17112 = 'component_17112';
export function Component17112({ value = 17112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17112, 'data-value': derived.doubled }, children);
}
export default Component17112;
