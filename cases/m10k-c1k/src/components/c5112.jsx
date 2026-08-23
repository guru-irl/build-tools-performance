import React from 'react';
const LABEL_5112 = 'component_5112';
export function Component5112({ value = 5112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5112, 'data-value': derived.doubled }, children);
}
export default Component5112;
