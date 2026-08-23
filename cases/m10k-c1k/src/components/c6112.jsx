import React from 'react';
const LABEL_6112 = 'component_6112';
export function Component6112({ value = 6112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6112, 'data-value': derived.doubled }, children);
}
export default Component6112;
