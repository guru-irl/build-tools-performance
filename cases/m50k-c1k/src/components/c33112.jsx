import React from 'react';
const LABEL_33112 = 'component_33112';
export function Component33112({ value = 33112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33112, 'data-value': derived.doubled }, children);
}
export default Component33112;
