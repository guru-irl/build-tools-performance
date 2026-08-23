import React from 'react';
const LABEL_10112 = 'component_10112';
export function Component10112({ value = 10112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10112, 'data-value': derived.doubled }, children);
}
export default Component10112;
