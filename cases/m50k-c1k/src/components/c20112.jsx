import React from 'react';
const LABEL_20112 = 'component_20112';
export function Component20112({ value = 20112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20112, 'data-value': derived.doubled }, children);
}
export default Component20112;
