import React from 'react';
const LABEL_15112 = 'component_15112';
export function Component15112({ value = 15112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15112, 'data-value': derived.doubled }, children);
}
export default Component15112;
