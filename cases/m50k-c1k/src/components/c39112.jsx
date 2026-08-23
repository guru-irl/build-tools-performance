import React from 'react';
const LABEL_39112 = 'component_39112';
export function Component39112({ value = 39112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39112, 'data-value': derived.doubled }, children);
}
export default Component39112;
